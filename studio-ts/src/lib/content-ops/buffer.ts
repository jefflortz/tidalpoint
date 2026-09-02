type BufferChannel = {
  id: string
  service: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | string
  type: string
  displayName?: string | null
  name: string
  isDisconnected: boolean
  isLocked: boolean
  timezone: string
}

type SocialChannel =
  | 'linkedinPersonal'
  | 'linkedinCompany'
  | 'facebook'
  | 'instagram'
  | 'shortForm'

type BufferPostInput = {
  channelId: string
  text: string
  dueAt: string
  assets: Array<{ image: { url: string; metadata: { altText: string } } }>
  metadata?: Record<string, unknown>
  mode: 'customScheduled'
  schedulingType: 'automatic'
  needsApproval: false
  saveToDraft: false
  source: string
  aiAssisted: boolean
}

const endpoint = 'https://api.buffer.com'

async function bufferRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const apiKey = process.env.BUFFER_API_KEY
  if (!apiKey) throw new Error('BUFFER_API_KEY is not configured')
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    signal: AbortSignal.timeout(30_000),
  })
  const payload = (await response.json()) as {
    data?: T
    errors?: Array<{ message: string }>
  }
  if (!response.ok || payload.errors?.length || !payload.data) {
    throw new Error(
      payload.errors?.map(({ message }) => message).join('; ') ||
        `Buffer request failed (${response.status})`,
    )
  }
  return payload.data
}

export async function getBufferChannelMap(): Promise<
  Partial<Record<SocialChannel, BufferChannel>>
> {
  const accountData = await bufferRequest<{
    account: { organizations: Array<{ id: string }> }
  }>(`{ account { organizations { id } } }`)
  const organizationId = accountData.account.organizations[0]?.id
  if (!organizationId) throw new Error('No Buffer organization is available')
  const channelData = await bufferRequest<{ channels: BufferChannel[] }>(
    `query Channels($input: ChannelsInput!) {
      channels(input: $input) { id service type displayName name isDisconnected isLocked timezone }
    }`,
    { input: { organizationId } },
  )
  const find = (service: string, type: string) =>
    channelData.channels.find(
      (channel) => channel.service === service && channel.type === type,
    )
  const mapped = {
    linkedinPersonal: find('linkedin', 'profile'),
    linkedinCompany: find('linkedin', 'page'),
    facebook: find('facebook', 'page'),
    instagram: find('instagram', 'business'),
    shortForm: find('twitter', 'profile'),
  }
  return mapped
}

export function requireAvailableBufferChannel(
  channelName: SocialChannel,
  channel: BufferChannel | undefined,
) {
  if (!channel)
    throw new Error(`Buffer channel is not connected for ${channelName}`)
  if (channel.isDisconnected || channel.isLocked)
    throw new Error(`Buffer channel is unavailable for ${channelName}`)
  if (channel.timezone !== 'America/New_York')
    throw new Error(
      `Buffer channel ${channelName} must use America/New_York`,
    )
  return channel
}

function metadata(channel: SocialChannel) {
  if (channel === 'facebook') return { facebook: { type: 'post' } }
  if (channel === 'instagram')
    return {
      instagram: {
        type: 'post',
        shouldShareToFeed: true,
        isAiGenerated: false,
      },
    }
  if (channel === 'linkedinPersonal' || channel === 'linkedinCompany')
    return { linkedin: {} }
  if (channel === 'shortForm') return { twitter: { isAiGenerated: false } }
}

export async function createScheduledBufferPost(input: {
  channel: SocialChannel
  channelId: string
  copy: string
  scheduledAt: string
  articleUrl: string
  imageUrl: string
  imageAlt: string
}) {
  const text =
    input.channel === 'instagram'
      ? input.copy
      : `${input.copy.trim()}\n\n${input.articleUrl}`
  const postInput: BufferPostInput = {
    channelId: input.channelId,
    text,
    dueAt: input.scheduledAt,
    assets: [
      { image: { url: input.imageUrl, metadata: { altText: input.imageAlt } } },
    ],
    metadata: metadata(input.channel),
    mode: 'customScheduled',
    schedulingType: 'automatic',
    needsApproval: false,
    saveToDraft: false,
    source: 'tidalpoint-sanity',
    aiAssisted: true,
  }
  const data = await bufferRequest<{
    createPost:
      | {
          __typename: 'PostActionSuccess'
          post: { id: string; status: string; dueAt?: string }
        }
      | { __typename: string; message: string }
  }>(
    `mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      __typename
      ... on PostActionSuccess { post { id status dueAt } }
      ... on NotFoundError { message }
      ... on UnauthorizedError { message }
      ... on UnexpectedError { message }
      ... on RestProxyError { message }
      ... on LimitReachedError { message }
      ... on InvalidInputError { message }
    }
  }`,
    { input: postInput },
  )
  if (!('post' in data.createPost))
    throw new Error(
      'message' in data.createPost
        ? data.createPost.message
        : 'Buffer rejected the post',
    )
  return data.createPost.post
}

export const publishableSocialChannels = new Set<SocialChannel>([
  'linkedinPersonal',
  'linkedinCompany',
  'facebook',
  'instagram',
  'shortForm',
])
