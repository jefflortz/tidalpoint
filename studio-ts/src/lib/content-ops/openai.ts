import {TIDAL_POINT_EDITORIAL_RULES, TIDAL_POINT_SOCIAL_RULES} from './brand-rules'
import type {EditorialOutput, SocialOutput, SourceArticle} from './types'

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
    cta: {type: 'object', additionalProperties: false, properties: {
      eyebrow: {type: 'string'}, title: {type: 'string'}, body: {type: 'string'},
      buttonLabel: {type: 'string'}, buttonHref: {type: 'string'},
    }, required: ['eyebrow', 'title', 'body', 'buttonLabel', 'buttonHref']},
    assessment: {type: 'object', additionalProperties: false, properties: {
      score: {type: 'number', minimum: 0, maximum: 100}, summary: {type: 'string'},
      flags: {type: 'array', items: {type: 'string'}},
    }, required: ['score', 'summary', 'flags']},
  },
  required: ['title', 'slug', 'description', 'seoTitle', 'metaDescription', 'primaryKeyword', 'secondaryKeywords', 'sections', 'sources', 'cta', 'assessment'],
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

async function structuredResponse<T>(name: string, schema: object, instructions: string, input: unknown): Promise<T> {
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
      text: {format: {type: 'json_schema', name, strict: true, schema}},
    }),
    signal: AbortSignal.timeout(120_000),
  })
  const result = await response.json() as OpenAIResponse
  if (!response.ok) throw new Error(result.error?.message ?? `OpenAI request failed (${response.status})`)
  return JSON.parse(outputText(result)) as T
}

export function transformArticle(article: SourceArticle, pillar: {title: string; description?: string; slug?: string}) {
  return structuredResponse<EditorialOutput>('tidal_point_article', editorialSchema, TIDAL_POINT_EDITORIAL_RULES, {
    sourceArticle: article,
    supportingPillar: pillar,
  })
}

export function generateSocialAssets(article: unknown) {
  return structuredResponse<SocialOutput>('tidal_point_social_campaign', socialSchema, TIDAL_POINT_SOCIAL_RULES, article)
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
