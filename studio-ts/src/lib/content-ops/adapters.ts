import type {IntakePayload, MarkdownAdapterMetadata, SourceArticle, SourceImage} from './types'

const MAX_BODY_LENGTH = 100_000

function requiredString(value: unknown, field: string, max = 500): string {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${field} is required`)
  if (value.length > max) throw new Error(`${field} exceeds ${max} characters`)
  return value.trim()
}

function optionalString(value: unknown, field: string, max = 2_000): string | undefined {
  if (value == null || value === '') return undefined
  return requiredString(value, field, max)
}

function strings(value: unknown, field: string): string[] {
  if (value == null) return []
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new Error(`${field} must be an array of strings`)
  }
  return value.map((item) => item.trim()).filter(Boolean).slice(0, 30)
}

function sourceImages(value: unknown): SourceImage[] {
  if (value == null) return []
  if (!Array.isArray(value)) throw new Error('article.images must be an array')
  return value.slice(0, 12).map((item, index) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error(`article.images[${index}] must be an object`)
    const image = item as Record<string, unknown>
    return {
      url: requiredString(image.url, `article.images[${index}].url`, 2_000),
      alt: requiredString(image.alt, `article.images[${index}].alt`, 300),
      caption: optionalString(image.caption, `article.images[${index}].caption`, 500),
      attribution: optionalString(image.attribution, `article.images[${index}].attribution`, 500),
    }
  })
}

export function adaptIntake(payload: IntakePayload): SourceArticle {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Request body must be an object')
  }
  if (payload.adapter && payload.adapter !== 'generic') {
    throw new Error(`Unsupported adapter: ${payload.adapter}`)
  }
  const input = payload.article
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('article must be an object')

  const sourceScore = input.sourceScore
  if (sourceScore != null && (typeof sourceScore !== 'number' || !Number.isFinite(sourceScore))) {
    throw new Error('article.sourceScore must be a number')
  }

  const generatedAt = optionalString(input.generatedAt, 'article.generatedAt', 50)
  if (generatedAt && Number.isNaN(Date.parse(generatedAt))) throw new Error('article.generatedAt must be ISO-8601')

  return {
    source: requiredString(input.source, 'article.source', 100).toLowerCase(),
    sourceId: requiredString(input.sourceId, 'article.sourceId', 300),
    sourceUrl: optionalString(input.sourceUrl, 'article.sourceUrl', 2_000),
    title: requiredString(input.title, 'article.title', 300),
    body: requiredString(input.body, 'article.body', MAX_BODY_LENGTH),
    primaryKeyword: requiredString(input.primaryKeyword, 'article.primaryKeyword', 200),
    secondaryKeywords: strings(input.secondaryKeywords, 'article.secondaryKeywords'),
    pillarArticleId: requiredString(input.pillarArticleId, 'article.pillarArticleId', 300),
    suggestedMetaDescription: optionalString(input.suggestedMetaDescription, 'article.suggestedMetaDescription', 500),
    sourceScore: sourceScore as number | undefined,
    generatedAt,
    metadata: input.metadata && typeof input.metadata === 'object' && !Array.isArray(input.metadata)
      ? input.metadata as Record<string, unknown>
      : {},
    images: sourceImages(input.images),
  }
}

// Rank Score integration boundary: map its API, webhook, feed, or export fields
// into SourceArticle here once its documentation and a sample payload are available.
export type ContentSourceAdapter = (payload: unknown) => SourceArticle

type RankScoreArticle = {
  id?: unknown
  title?: unknown
  content_markdown?: unknown
  content_html?: unknown
  keyword?: unknown
  keywords?: unknown
  meta_description?: unknown
  hero_image_url?: unknown
  slug?: unknown
  project_url?: unknown
  created_at?: unknown
  language_code?: unknown
  excerpt?: unknown
}

function markdownImages(markdown: string): SourceImage[] {
  const imagePattern = /^!\[([^\]]*)\]\((https?:\/\/[^)]+)\)[ \t]*(?:\n[ \t]*\n?[ \t]*_([^_\n]+)_)?/gm
  return Array.from(markdown.matchAll(imagePattern), (match) => {
    const caption = match[3]?.trim()
    return {
      url: match[2],
      alt: match[1].trim() || 'Article illustration',
      ...(caption ? {caption, attribution: caption.startsWith('Photo by ') ? caption : undefined} : {}),
    }
  })
}

export function adaptRankScoreArticle(payload: unknown, pillarArticleId: string): SourceArticle {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('Rank Score returned an invalid article')
  const input = payload as RankScoreArticle
  const body = typeof input.content_markdown === 'string' && input.content_markdown.trim()
    ? input.content_markdown
    : requiredString(input.content_html, 'Rank Score content', MAX_BODY_LENGTH)
  const primaryKeyword = requiredString(input.keyword, 'Rank Score keyword', 200)
  const secondaryKeywords = strings(input.keywords, 'Rank Score keywords').filter((keyword) => keyword.toLowerCase() !== primaryKeyword.toLowerCase())
  const generatedAt = optionalString(input.created_at, 'Rank Score created_at', 50)
  if (generatedAt && Number.isNaN(Date.parse(generatedAt))) throw new Error('Rank Score created_at must be ISO-8601')

  return {
    source: 'rank-score',
    sourceId: requiredString(input.id, 'Rank Score article id', 300),
    title: requiredString(input.title, 'Rank Score title', 300),
    body: requiredString(body, 'Rank Score content', MAX_BODY_LENGTH),
    primaryKeyword,
    secondaryKeywords,
    pillarArticleId: requiredString(pillarArticleId, 'pillarArticleId', 300),
    suggestedMetaDescription: optionalString(input.meta_description, 'Rank Score meta_description', 500),
    generatedAt,
    metadata: {
      format: typeof input.content_markdown === 'string' ? 'markdown' : 'html',
      slug: input.slug,
      projectUrl: input.project_url,
      languageCode: input.language_code,
      excerpt: input.excerpt,
      heroImageUrl: input.hero_image_url,
    },
    images: markdownImages(body),
  }
}

export async function fetchRankScoreArticle(articleId: string): Promise<unknown> {
  const apiKey = process.env.RANKSCORE_API_KEY
  if (!apiKey) throw new Error('RANKSCORE_API_KEY is not configured')
  const id = requiredString(articleId, 'articleId', 300)
  if (!/^[a-zA-Z0-9-]+$/.test(id)) throw new Error('articleId is invalid')
  const baseUrl = process.env.RANKSCORE_API_BASE_URL ?? 'https://dashboard.rankscore.co/api/integrations/v1'
  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/articles/${encodeURIComponent(id)}`, {
    headers: {'X-API-Key': apiKey, accept: 'application/json'},
    signal: AbortSignal.timeout(30_000),
    cache: 'no-store',
  })
  if (response.status === 404) throw new Error('Rank Score article was not found')
  if (!response.ok) throw new Error(`Rank Score request failed (${response.status})`)
  return response.json()
}

export function adaptRankScoreMarkdown(markdown: string, metadata: MarkdownAdapterMetadata): SourceArticle {
  const body = requiredString(markdown, 'Markdown body', MAX_BODY_LENGTH)
  const heading = body.match(/^#\s+(.+)$/m)
  if (!heading) throw new Error('Rank Score Markdown must contain an H1 title')

  return {
    source: 'rank-score',
    sourceId: requiredString(metadata.sourceId, 'sourceId', 300),
    sourceUrl: optionalString(metadata.sourceUrl, 'sourceUrl', 2_000),
    title: requiredString(heading[1], 'Markdown H1 title', 300),
    body,
    primaryKeyword: requiredString(metadata.primaryKeyword, 'primaryKeyword', 200),
    secondaryKeywords: strings(metadata.secondaryKeywords, 'secondaryKeywords'),
    pillarArticleId: requiredString(metadata.pillarArticleId, 'pillarArticleId', 300),
    sourceScore: metadata.sourceScore,
    generatedAt: metadata.generatedAt,
    metadata: {format: 'markdown'},
    images: markdownImages(body),
  }
}
