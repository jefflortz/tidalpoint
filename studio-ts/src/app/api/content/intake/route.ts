import {NextResponse} from 'next/server'
import {adaptIntake, adaptRankScoreMarkdown} from '@/lib/content-ops/adapters'
import {isAuthorized} from '@/lib/content-ops/auth'
import {generateFeaturedImage, transformArticle} from '@/lib/content-ops/openai'
import {createArticleDraft, getIntakeContext, inputFingerprint, uploadFeaturedImage, uploadSourceImages} from '@/lib/content-ops/sanity'
import type {IntakePayload} from '@/lib/content-ops/types'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request, process.env.CONTENT_INTAKE_SECRET)) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const length = Number(request.headers.get('content-length') ?? 0)
    if (length > 512_000) return NextResponse.json({error: 'Payload too large'}, {status: 413})
    const raw = await request.text()
    if (raw.length > 512_000) return NextResponse.json({error: 'Payload too large'}, {status: 413})

    const isMarkdown = request.headers.get('content-type')?.split(';')[0] === 'text/markdown'
    let payload: IntakePayload = {article: {}}
    let article
    if (isMarkdown) {
      const secondaryKeywords = request.headers.get('x-secondary-keywords')?.split(',').map((value) => value.trim()).filter(Boolean)
      article = adaptRankScoreMarkdown(raw, {
        sourceId: request.headers.get('x-source-id') ?? '',
        primaryKeyword: request.headers.get('x-primary-keyword') ?? '',
        pillarArticleId: request.headers.get('x-pillar-article-id') ?? '',
        secondaryKeywords,
        sourceUrl: request.headers.get('x-source-url') ?? undefined,
      })
      payload.force = request.headers.get('x-force-overwrite') === 'true'
    } else {
      try {
        payload = JSON.parse(raw) as IntakePayload
      } catch {
        return NextResponse.json({error: 'Request body must be valid JSON'}, {status: 400})
      }
      article = adaptIntake(payload)
    }
    const fingerprint = inputFingerprint(article)
    const context = await getIntakeContext(article)

    if (!context.pillar) {
      return NextResponse.json({error: 'pillarArticleId must identify a published Sanity article'}, {status: 422})
    }
    if (!context.authorId || !context.categoryId) {
      return NextResponse.json({error: 'Default Jeff Lortz author or Operations category is missing in Sanity'}, {status: 422})
    }
    if (context.existing?.fingerprint === fingerprint) {
      return NextResponse.json({draftId: context.existing._id, title: context.existing.title, status: 'unchanged'})
    }
    if (context.existing && !payload.force) {
      return NextResponse.json({
        error: 'A draft already exists for this source article. Send force=true only if overwriting editorial changes is intentional.',
        draftId: context.existing._id,
      }, {status: 409})
    }

    const output = await transformArticle(article, context.pillar)
    let featuredImageAssetId: string | undefined
    let inlineImages
    const mediaFlags: string[] = []
    try {
      const featuredBuffer = await generateFeaturedImage(output)
      featuredImageAssetId = await uploadFeaturedImage(featuredBuffer, output.slug)
    } catch (error) {
      console.error('Featured image generation failed', error)
      mediaFlags.push(`Featured image generation failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    }
    try {
      inlineImages = await uploadSourceImages(article.images)
    } catch (error) {
      console.error('Inline image import failed', error)
      mediaFlags.push(`Inline image import failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    }
    output.assessment.flags.push(...mediaFlags)
    const draft = await createArticleDraft(
      article,
      output,
      {authorId: context.authorId, categoryId: context.categoryId},
      {featuredImageAssetId, inlineImages},
    )
    return NextResponse.json({draftId: draft._id, title: draft.title, editorialScore: output.assessment.score, status: 'needsReview'}, {status: 201})
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected content intake error'
    const clientError = /required|must be|exceeds|Unsupported adapter|ISO-8601/.test(message)
    console.error('Content intake failed', error)
    return NextResponse.json({error: message}, {status: clientError ? 400 : 500})
  }
}
