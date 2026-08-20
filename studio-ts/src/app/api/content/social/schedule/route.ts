import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/content-ops/auth'
import {
  createScheduledBufferPost,
  getBufferChannelMap,
  publishableSocialChannels,
} from '@/lib/content-ops/buffer'
import {
  getSocialCampaignForScheduling,
  updateSocialAssetDelivery,
} from '@/lib/content-ops/sanity'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request, process.env.SANITY_PUBLISH_WEBHOOK_SECRET)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const payload = (await request.json()) as {
      _id?: unknown
      dryRun?: unknown
    }
    if (typeof payload._id !== 'string' || !payload._id) {
      return NextResponse.json(
        { error: 'Webhook payload must include the social campaign _id' },
        { status: 400 },
      )
    }
    const campaign = await getSocialCampaignForScheduling(payload._id)
    if (!campaign)
      return NextResponse.json(
        { error: 'Published social campaign not found' },
        { status: 404 },
      )
    if (campaign.reviewStatus !== 'approved') {
      return NextResponse.json(
        { error: 'Campaign must be approved before scheduling' },
        { status: 409 },
      )
    }
    if (campaign.articleReviewStatus !== 'approved') {
      return NextResponse.json({error: 'The article must be approved before social posts can be scheduled'}, {status: 409})
    }
    const candidates = campaign.assets.filter(
      (asset) =>
        publishableSocialChannels.has(asset.channel) &&
        asset.status === 'approved' &&
        asset.scheduledAt &&
        !asset.bufferPostId,
    )
    const invalid = candidates.filter(
      (asset) =>
        Number.isNaN(Date.parse(asset.scheduledAt!)) ||
        Date.parse(asset.scheduledAt!) <= Date.now(),
    )
    if (invalid.length)
      return NextResponse.json(
        {
          error: 'Every approved social post must have a valid future schedule',
        },
        { status: 409 },
      )
    if (!candidates.length)
      return NextResponse.json({ status: 'unchanged', scheduled: [] })

    const channels = await getBufferChannelMap()
    if (payload.dryRun === true) {
      return NextResponse.json({
        status: 'ready',
        scheduled: candidates.map(({ channel, scheduledAt }) => ({
          channel,
          scheduledAt,
        })),
      })
    }

    const results: Array<{
      channel: string
      bufferPostId?: string
      error?: string
    }> = []
    for (const asset of candidates) {
      try {
        const post = await createScheduledBufferPost({
          channel: asset.channel,
          channelId: channels[asset.channel].id,
          copy: asset.copy,
          scheduledAt: asset.scheduledAt!,
          articleUrl: campaign.articleUrl,
          imageUrl: campaign.imageUrl,
          imageAlt: campaign.imageAlt || campaign.articleTitle,
        })
        await updateSocialAssetDelivery(campaign._id, asset._key, {
          bufferPostId: post.id,
          status: 'scheduled',
        })
        results.push({ channel: asset.channel, bufferPostId: post.id })
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Unexpected Buffer error'
        await updateSocialAssetDelivery(campaign._id, asset._key, {
          bufferError: message,
        })
        results.push({ channel: asset.channel, error: message })
      }
    }
    const failures = results.filter(({ error }) => error)
    return NextResponse.json(
      { status: failures.length ? 'partial' : 'scheduled', scheduled: results },
      { status: failures.length ? 207 : 200 },
    )
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected social scheduling error'
    console.error('Social campaign scheduling failed', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
