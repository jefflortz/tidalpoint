import {generateFeaturedImage, generateInlineImage, researchArticle, transformArticle} from './openai'
import {createArticleDraft, getIntakeContext, inputFingerprint, uploadFeaturedImage, uploadGeneratedInlineImages} from './sanity'
import type {SourceArticle} from './types'

export type ProcessIntakeResult =
  | {status: 201; body: {draftId: string; title: string; editorialScore: number; status: 'needsReview'}}
  | {status: 200; body: {draftId: string; title?: string; status: 'unchanged'}}
  | {status: 409; body: {error: string; draftId: string}}
  | {status: 422; body: {error: string}}

export async function processIntake(article: SourceArticle, force = false, workflow?: {scheduledPublishAt: string; approvalDeadline: string; pillarRationale?: string}): Promise<ProcessIntakeResult> {
  const fingerprint = inputFingerprint(article)
  const context = await getIntakeContext(article)

  if (!context.pillar) return {status: 422, body: {error: 'pillarArticleId must identify a published Sanity article'}}
  if (!context.authorId || !context.categoryId) {
    return {status: 422, body: {error: 'Default Jeff Lortz author or Operations category is missing in Sanity'}}
  }
  if (context.existing?.fingerprint === fingerprint && !force) {
    return {status: 200, body: {draftId: context.existing._id, title: context.existing.title, status: 'unchanged'}}
  }
  if (context.existing && !force) {
    return {status: 409, body: {
      error: 'A draft already exists for this source article. Send force=true only if overwriting editorial changes is intentional.',
      draftId: context.existing._id,
    }}
  }

  const research = await researchArticle(article, context.pillar)
  const output = await transformArticle(article, context.pillar, research)
  let featuredImageAssetId: string | undefined
  let inlineImages
  const mediaFlags: string[] = []
  try {
    const [featuredBuffer, ...inlineBuffers] = await Promise.all([
      generateFeaturedImage(output),
      ...output.imageBriefs.map((brief) => generateInlineImage(brief.prompt)),
    ])
    featuredImageAssetId = await uploadFeaturedImage(featuredBuffer, output.slug)
    inlineImages = await uploadGeneratedInlineImages(inlineBuffers.map((buffer, index) => ({
      buffer,
      alt: output.imageBriefs[index].alt,
      caption: output.imageBriefs[index].caption,
    })), output.slug)
  } catch (error) {
    console.error('Editorial image generation failed', error)
    mediaFlags.push(`Editorial image generation failed: ${error instanceof Error ? error.message : 'unknown error'}`)
  }
  output.assessment.flags.push(...mediaFlags)
  const draft = await createArticleDraft(
    article,
    output,
    {authorId: context.authorId, categoryId: context.categoryId, published: context.published},
    {featuredImageAssetId, inlineImages},
    workflow,
  )
  return {status: 201, body: {draftId: draft._id, title: draft.title, editorialScore: output.assessment.score, status: 'needsReview'}}
}
