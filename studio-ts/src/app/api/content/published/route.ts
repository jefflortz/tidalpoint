import {NextResponse} from 'next/server'
import {isAuthorized} from '@/lib/content-ops/auth'
import {generateSocialAssets} from '@/lib/content-ops/openai'
import {articleForSocial, createSocialCampaignDraft, getPublishedArticle, socialCampaignMatchesRevision} from '@/lib/content-ops/sanity'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request, process.env.SANITY_PUBLISH_WEBHOOK_SECRET)) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const payload = await request.json() as {_id?: unknown}
    if (typeof payload._id !== 'string' || !payload._id) {
      return NextResponse.json({error: 'Webhook payload must include the published article _id'}, {status: 400})
    }
    const article = await getPublishedArticle(payload._id)
    if (!article) return NextResponse.json({error: 'Published article not found'}, {status: 404})
    const existingCampaignId = await socialCampaignMatchesRevision(article)
    if (existingCampaignId) {
      return NextResponse.json({campaignId: existingCampaignId, status: 'unchanged'})
    }

    const social = await generateSocialAssets(articleForSocial(article))
    const campaign = await createSocialCampaignDraft(article, social)
    return NextResponse.json({campaignId: campaign._id, status: 'needsReview'})
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected social generation error'
    console.error('Published article webhook failed', error)
    return NextResponse.json({error: message}, {status: 500})
  }
}
