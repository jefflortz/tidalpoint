import {TIDAL_POINT_EDITORIAL_RULES, TIDAL_POINT_RESEARCH_RULES, TIDAL_POINT_SOCIAL_RULES} from './brand-rules'
import type {EditorialOutput, ResearchOutput, SocialOutput, SourceArticle} from './types'

const editorialSchema = {
  type: 'object', additionalProperties: false,
  properties: {
    title: {type: 'string'}, slug: {type: 'string'}, description: {type: 'string'},
    seoTitle: {type: 'string'}, metaDescription: {type: 'string'}, primaryKeyword: {type: 'string'},
    secondaryKeywords: {type: 'array', items: {type: 'string'}},
    sections: {type: 'array', items: {type: 'object', additionalProperties: false, properties: {
      type: {type: 'string', enum: ['paragraph', 'h2', 'h3', 'quote', 'callout', 'diagnostic', 'figure']},
      text: {type: 'string'}, items: {type: 'array', items: {type: 'string'}}, imageIndex: {type: 'integer'},
    }, required: ['type', 'text', 'items', 'imageIndex']}},
    sources: {type: 'array', items: {type: 'object', additionalProperties: false, properties: {
      title: {type: 'string'}, publisher: {type: 'string'}, url: {type: 'string'}, publishedAt: {type: 'string'},
    }, required: ['title', 'publisher', 'url', 'publishedAt']}},
    imageBriefs: {type: 'array', minItems: 2, maxItems: 2, items: {type: 'object', additionalProperties: false, properties: {
      prompt: {type: 'string'}, alt: {type: 'string'}, caption: {type: 'string'},
    }, required: ['prompt', 'alt', 'caption']}},
    cta: {type: 'object', additionalProperties: false, properties: {
      eyebrow: {type: 'string'}, title: {type: 'string'}, body: {type: 'string'},
      buttonLabel: {type: 'string'}, buttonHref: {type: 'string'},
    }, required: ['eyebrow', 'title', 'body', 'buttonLabel', 'buttonHref']},
    assessment: {type: 'object', additionalProperties: false, properties: {
      score: {type: 'number', minimum: 0, maximum: 100}, summary: {type: 'string'},
      flags: {type: 'array', items: {type: 'string'}},
    }, required: ['score', 'summary', 'flags']},
  },
  required: ['title', 'slug', 'description', 'seoTitle', 'metaDescription', 'primaryKeyword', 'secondaryKeywords', 'sections', 'sources', 'imageBriefs', 'cta', 'assessment'],
} as const

const researchSchema = {
  type: 'object', additionalProperties: false,
  properties: {
    findings: {type: 'array', maxItems: 8, items: {type: 'object', additionalProperties: false, properties: {
      claim: {type: 'string'}, context: {type: 'string'}, sourceUrl: {type: 'string'},
    }, required: ['claim', 'context', 'sourceUrl']}},
    sources: {type: 'array', minItems: 2, maxItems: 4, items: {type: 'object', additionalProperties: false, properties: {
      title: {type: 'string'}, publisher: {type: 'string'}, url: {type: 'string'}, publishedAt: {type: 'string'},
    }, required: ['title', 'publisher', 'url', 'publishedAt']}},
  }, required: ['findings', 'sources'],
} as const

const socialSchema = {
  type: 'object', additionalProperties: false,
  properties: {
    assets: {type: 'array', items: {type: 'object', additionalProperties: false, properties: {
      channel: {type: 'string', enum: ['linkedinPersonal', 'linkedinCompany', 'facebook', 'instagram', 'shortForm', 'newsletter', 'carousel']},
      angle: {type: 'string'}, copy: {type: 'string'},
    }, required: ['channel', 'angle', 'copy']}, minItems: 7, maxItems: 7},
    carouselBrief: {type: 'array', items: {type: 'string'}, minItems: 5, maxItems: 7},
    pullQuote: {type: 'string'},
  }, required: ['assets', 'carouselBrief', 'pullQuote'],
} as const

const pillarSchema = {
  type: 'object', additionalProperties: false,
  properties: {pillarId: {type: 'string'}, rationale: {type: 'string'}},
  required: ['pillarId', 'rationale'],
} as const

type OpenAIResponse = {output_text?: string; output?: Array<{content?: Array<{type?: string; text?: string; refusal?: string}>}>; error?: {message?: string}}

function outputText(response: OpenAIResponse): string {
  if (response.output_text) return response.output_text
  for (const output of response.output ?? []) {
    for (const content of output.content ?? []) {
      if (content.refusal) throw new Error(`Model refused the request: ${content.refusal}`)
      if (content.type === 'output_text' && content.text) return content.text
    }
  }
  throw new Error(response.error?.message ?? 'Model returned no structured output')
}

async function structuredResponse<T>(name: string, schema: object, instructions: string, input: unknown, webSearch = false): Promise<T> {
  const apiKey = process.env.OPENAI_API_KEY ?? process.env.openai_api_key
  const model = process.env.CONTENT_PROCESSOR_MODEL
  if (!apiKey) throw new Error('OPENAI_API_KEY (or openai_api_key) is not configured')
  if (!model) throw new Error('CONTENT_PROCESSOR_MODEL is not configured')

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {'authorization': `Bearer ${apiKey}`, 'content-type': 'application/json'},
    body: JSON.stringify({
      model,
      input: [{role: 'system', content: instructions}, {role: 'user', content: JSON.stringify(input)}],
      ...(webSearch ? {tools: [{type: 'web_search'}]} : {}),
      text: {format: {type: 'json_schema', name, strict: true, schema}},
    }),
    signal: AbortSignal.timeout(120_000),
  })
  const result = await response.json() as OpenAIResponse
  if (!response.ok) throw new Error(result.error?.message ?? `OpenAI request failed (${response.status})`)
  return JSON.parse(outputText(result)) as T
}

export function researchArticle(article: SourceArticle, pillar: {title: string; description?: string; slug?: string}) {
  return structuredResponse<ResearchOutput>('tidal_point_research', researchSchema, TIDAL_POINT_RESEARCH_RULES, {
    articleTitle: article.title,
    primaryKeyword: article.primaryKeyword,
    sourceBody: article.body,
    supportingPillar: pillar,
    targetAudience: '$5M–$50M privately held companies, especially in Southeastern New England',
    currentDate: new Date().toISOString().slice(0, 10),
  }, true).then((research) => {
    if (research.sources.some((source) => !/^\d{4}-\d{2}-\d{2}$/.test(source.publishedAt) || Number.isNaN(Date.parse(source.publishedAt)))) {
      throw new Error('Research returned an incomplete or invalid publication date')
    }
    const cutoff = new Date()
    cutoff.setUTCFullYear(cutoff.getUTCFullYear() - 5)
    const recent = research.sources.filter((source) => {
      const date = new Date(source.publishedAt)
      return !Number.isNaN(date.getTime()) && date >= cutoff
    })
    if (recent.length < 1) throw new Error('Research did not return a credible source from the last five years')
    if (research.sources.some((source) => !/^https:\/\//.test(source.url))) {
      throw new Error('Research returned a non-HTTPS source URL')
    }
    return research
  })
}

export async function transformArticle(article: SourceArticle, pillar: {title: string; description?: string; slug?: string}, research: ResearchOutput) {
  const output = await structuredResponse<EditorialOutput>('tidal_point_article', editorialSchema, TIDAL_POINT_EDITORIAL_RULES, {
    sourceArticle: article,
    supportingPillar: pillar,
    supportingPillarPath: pillar.slug ? `/articles/${pillar.slug}` : undefined,
    verifiedResearch: research,
    currentDate: new Date().toISOString().slice(0, 10),
  })
  output.primaryKeyword = article.primaryKeyword
  output.sources = research.sources
  const articleText = output.sections.map((section) => `${section.text} ${section.items.join(' ')}`).join(' ')
  if (!/jeff lortz/i.test(article.body) && /jeff lortz/i.test(articleText)) {
    throw new Error('Editorial output introduced an unsupported attribution to Jeff Lortz')
  }
  return output
}

export function generateSocialAssets(article: unknown) {
  return structuredResponse<SocialOutput>('tidal_point_social_campaign', socialSchema, TIDAL_POINT_SOCIAL_RULES, article)
}

export function selectPillar(article: Pick<SourceArticle, 'title' | 'primaryKeyword' | 'body'>, pillars: Array<{_id: string; title: string; description?: string}>) {
  return structuredResponse<{pillarId: string; rationale: string}>('tidal_point_pillar', pillarSchema,
    'Choose exactly one supplied pillar article that best matches the source article search intent. Return its exact _id. Do not invent an id.',
    {article: {...article, body: article.body.slice(0, 6000)}, pillars},
  ).then((choice) => {
    if (!pillars.some((pillar) => pillar._id === choice.pillarId)) throw new Error('Processor selected an invalid pillar')
    return choice
  })
}

const FEATURED_IMAGE_STYLE = `Create a quietly premium, photorealistic abstract studio still life for a Tidal Point Partners editorial article. Deep matte midnight-navy seamless surface and background. Express the article's central business idea through one elegant engineered visual metaphor made from warm ivory ceramic, pale sandstone, muted translucent sea-glass teal, and pale natural wood. Wide 16:9 composition, primary object right of center, generous dark negative space on the left, low three-quarter camera angle, soft directional side light, controlled highlights and deep natural shadows. Sophisticated, practical and tactile. No text, labels, letters, numbers, logos, people, office scene, charts, screens, gears, puzzle-piece clichés, nautical imagery, watermark or border.`

export async function generateFeaturedImage(article: Pick<EditorialOutput, 'title' | 'description'>) {
  const apiKey = process.env.OPENAI_API_KEY ?? process.env.openai_api_key
  if (!apiKey) throw new Error('OPENAI_API_KEY (or openai_api_key) is not configured')
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {'authorization': `Bearer ${apiKey}`, 'content-type': 'application/json'},
    body: JSON.stringify({
      model: process.env.FEATURED_IMAGE_MODEL ?? 'gpt-image-2',
      prompt: `${FEATURED_IMAGE_STYLE}\n\nArticle title: ${article.title}\nArticle premise: ${article.description}`,
      size: process.env.FEATURED_IMAGE_SIZE ?? '2048x1152',
      quality: process.env.FEATURED_IMAGE_QUALITY ?? 'high',
      output_format: 'png',
    }),
    signal: AbortSignal.timeout(180_000),
  })
  const result = await response.json() as {data?: Array<{b64_json?: string}>; error?: {message?: string}}
  if (!response.ok) throw new Error(result.error?.message ?? `Featured image generation failed (${response.status})`)
  const encoded = result.data?.[0]?.b64_json
  if (!encoded) throw new Error('Featured image generation returned no image')
  return Buffer.from(encoded, 'base64')
}

const INLINE_IMAGE_STYLE = `Create contemporary, photorealistic editorial photography for Tidal Point Partners. Show a successful, well-run established privately held business in New England that feels attractive, energetic and human. Clean contemporary environment, abundant natural light, warm wood with restrained navy and sea-glass accents, capable people with visible purpose and momentum, thoughtful documentary composition. The workplace should feel like somewhere talented people would choose to work. Avoid gritty machinery, dated offices, dim back rooms, paper piles, clutter, lonely or stressed workers and staged corporate-stock poses. No text, labels, logos, watermarks, recognizable brands or exaggerated emotion. Wide 3:2 composition.`

export async function generateInlineImage(prompt: string) {
  const apiKey = process.env.OPENAI_API_KEY ?? process.env.openai_api_key
  if (!apiKey) throw new Error('OPENAI_API_KEY (or openai_api_key) is not configured')
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {'authorization': `Bearer ${apiKey}`, 'content-type': 'application/json'},
    body: JSON.stringify({
      model: process.env.FEATURED_IMAGE_MODEL ?? 'gpt-image-2',
      prompt: `${INLINE_IMAGE_STYLE}\n\nScene brief: ${prompt}`,
      size: process.env.INLINE_IMAGE_SIZE ?? '1536x1024',
      quality: process.env.INLINE_IMAGE_QUALITY ?? 'medium',
      output_format: 'png',
    }),
    signal: AbortSignal.timeout(180_000),
  })
  const result = await response.json() as {data?: Array<{b64_json?: string}>; error?: {message?: string}}
  if (!response.ok) throw new Error(result.error?.message ?? `Inline image generation failed (${response.status})`)
  const encoded = result.data?.[0]?.b64_json
  if (!encoded) throw new Error('Inline image generation returned no image')
  return Buffer.from(encoded, 'base64')
}
