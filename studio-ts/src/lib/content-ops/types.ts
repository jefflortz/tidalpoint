export type SourceArticle = {
  source: string
  sourceId: string
  sourceUrl?: string
  title: string
  body: string
  primaryKeyword: string
  secondaryKeywords: string[]
  pillarArticleId: string
  suggestedMetaDescription?: string
  sourceScore?: number
  generatedAt?: string
  metadata: Record<string, unknown>
  images: SourceImage[]
}

export type SourceImage = {
  url: string
  alt: string
  caption?: string
  attribution?: string
}

export type IntakePayload = {
  adapter?: 'generic'
  force?: boolean
  article: Record<string, unknown>
}

export type RankScoreIntakePayload = {
  articleId: string
  pillarArticleId: string
  force?: boolean
}

export type MarkdownAdapterMetadata = {
  sourceId: string
  primaryKeyword: string
  pillarArticleId: string
  secondaryKeywords?: string[]
  sourceUrl?: string
  sourceScore?: number
  generatedAt?: string
}

export type EditorialOutput = {
  title: string
  slug: string
  description: string
  seoTitle: string
  metaDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  sections: Array<{
    type: 'paragraph' | 'h2' | 'h3' | 'quote' | 'callout' | 'diagnostic' | 'figure'
    text: string
    items: string[]
    imageIndex: number
  }>
  sources: Array<{title: string; publisher: string; url: string; publishedAt: string}>
  imageBriefs: Array<{prompt: string; alt: string; caption: string}>
  cta: {eyebrow: string; title: string; body: string; buttonLabel: string; buttonHref: string}
  assessment: {score: number; summary: string; flags: string[]}
}

export type ResearchOutput = {
  findings: Array<{claim: string; context: string; sourceUrl: string}>
  sources: Array<{title: string; publisher: string; url: string; publishedAt: string}>
}

export type UploadedSourceImage = SourceImage & {assetId: string}

export type SocialOutput = {
  assets: Array<{
    channel: 'linkedinPersonal' | 'linkedinCompany' | 'facebook' | 'instagram' | 'shortForm' | 'newsletter' | 'carousel'
    angle: string
    copy: string
  }>
  carouselBrief: string[]
  pullQuote: string
}
