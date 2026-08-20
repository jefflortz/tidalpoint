import {Button, Card, Flex, Spinner, Stack, Text} from '@sanity/ui'
import {useEffect, useMemo, useState} from 'react'
import {useClient, useFormValue} from 'sanity'

type Campaign = {
  title?: string
  reviewStatus?: string
  assets?: Array<{
    _key: string
    channel?: string
    angle?: string
    status?: string
    scheduledAt?: string
  }>
}

const channelLabels: Record<string, string> = {
  linkedinPersonal: 'Jeff LinkedIn',
  linkedinCompany: 'Tidal Point LinkedIn',
  facebook: 'Facebook',
  instagram: 'Instagram',
  shortForm: 'Short-form social post',
  newsletter: 'Newsletter copy',
  carousel: 'Carousel post',
}

function formatStatus(value?: string) {
  if (!value) return 'Draft'
  if (value === 'needsReview') return 'Needs review'
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function SocialCampaignPanel() {
  const client = useClient({apiVersion: '2026-08-15'})
  const documentId = useFormValue(['_id']) as string | undefined
  const baseArticleId = documentId?.replace(/^drafts\./, '')
  const campaignId = baseArticleId ? `social-campaign-${baseArticleId}` : undefined
  const draftCampaignId = campaignId ? `drafts.${campaignId}` : undefined
  const [campaign, setCampaign] = useState<Campaign | null | undefined>()

  useEffect(() => {
    if (!draftCampaignId) return
    let active = true
    client
      .fetch<Campaign | null>(`*[_id == $id][0]{title, reviewStatus, assets[]{_key, channel, angle, status, scheduledAt}}`, {id: draftCampaignId})
      .then((result) => {
        if (active) setCampaign(result)
      })
      .catch(() => {
        if (active) setCampaign(null)
      })
    return () => {
      active = false
    }
  }, [client, draftCampaignId])

  const campaignHref = useMemo(
    () => (campaignId ? `/structure/socialCampaign;${campaignId}` : '/structure/socialCampaign'),
    [campaignId],
  )

  if (campaign === undefined) {
    return (
      <Card padding={4} border radius={2}>
        <Flex align="center" gap={3}>
          <Spinner muted />
          <Text muted>Finding this article’s social campaign…</Text>
        </Flex>
      </Card>
    )
  }

  if (!campaign) {
    return (
      <Card padding={4} border radius={2} tone="caution">
        <Stack space={4}>
          <Text weight="semibold">No social campaign has been generated yet.</Text>
          <Text size={1}>The weekly automation creates this campaign alongside the article draft.</Text>
          <Button as="a" href="/structure/socialCampaign" mode="ghost" text="View all social campaigns" />
        </Stack>
      </Card>
    )
  }

  return (
    <Card padding={4} border radius={2}>
      <Stack space={4}>
        <Flex align="center" justify="space-between" gap={3}>
          <Stack space={2}>
            <Text weight="semibold">Generated campaign</Text>
            <Text size={1} muted>{formatStatus(campaign.reviewStatus)}</Text>
          </Stack>
          <Button as="a" href={campaignHref} tone="primary" text="Open campaign" />
        </Flex>
        <Stack space={3}>
          {(campaign.assets ?? []).map((asset) => (
            <Card key={asset._key} padding={3} radius={2} tone="transparent" border>
              <Stack space={2}>
                <Flex align="center" justify="space-between" gap={3}>
                  <Text size={1} weight="semibold">
                    {channelLabels[asset.channel ?? ''] ?? asset.channel}
                  </Text>
                  <Text size={1} muted>{formatStatus(asset.status)}</Text>
                </Flex>
                {asset.angle && <Text size={1} muted>{asset.angle}</Text>}
                {asset.scheduledAt && (
                  <Text size={1}>Target: {new Date(asset.scheduledAt).toLocaleString()}</Text>
                )}
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}
