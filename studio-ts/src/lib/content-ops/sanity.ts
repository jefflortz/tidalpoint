import {createHash, randomUUID} from 'node:crypto'
import {lookup} from 'node:dns/promises'
import {createClient} from 'next-sanity'
import {sectionsToPortableText} from './portable-text'
import type {EditorialOutput, SocialOutput, SourceArticle, SourceImage, UploadedSourceImage} from './types'

const projectId = '5w70fpy3'
const dataset = 'production'
const apiVersion = '2026-08-05'

function writeClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_TOKEN
  if (!token) throw new Error('SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN is not configured')
  return createClient({projectId, dataset, apiVersion, token, useCdn: false, perspective: 'raw'})
}

function allowedImageHosts() {
  return (process.env.SOURCE_IMAGE_HOSTS ?? 'images.pexels.com').split(',').map((host) => host.trim().toLowerCase()).filter(Boolean)
}

function privateAddress(address: string) {
  return /^(127\.|10\.|192\.168\.|169\.254\.|0\.|::1$|fc|fd|fe80)/i.test(address) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(address)
}

async function assertSafeImageUrl(value: string) {
  const url = new URL(value)
  if (url.protocol !== 'https:') throw new Error('Source images must use HTTPS')
  const hostname = url.hostname.toLowerCase()
  if (!allowedImageHosts().some((host) => hostname === host || hostname.endsWith(`.${host}`))) {
    throw new Error(`Source image host is not allowed: ${hostname}`)
  }
  const addresses = await lookup(hostname, {all: true})
  if (!addresses.length || addresses.some(({address}) => privateAddress(address))) throw new Error('Source image resolved to a private address')
  return url
}

async function downloadSourceImage(image: SourceImage) {
  await assertSafeImageUrl(image.url)
  const response = await fetch(image.url, {signal: AbortSignal.timeout(30_000), redirect: 'follow'})
  if (!response.ok) throw new Error(`Source image download failed (${response.status})`)
  await assertSafeImageUrl(response.url)
  const contentType = response.headers.get('content-type')?.split(';')[0]
  if (!contentType || !['image/jpeg', 'image/png', 'image/webp'].includes(contentType)) throw new Error(`Unsupported source image type: ${contentType ?? 'unknown'}`)
  const declaredSize = Number(response.headers.get('content-length') ?? 0)
  if (declaredSize > 10_000_000) throw new Error('Source image exceeds 10 MB')
  const buffer = Buffer.from(await response.arrayBuffer())
  if (buffer.length > 10_000_000) throw new Error('Source image exceeds 10 MB')
  return {buffer, contentType}
}

export async function uploadSourceImages(images: SourceImage[]): Promise<UploadedSourceImage[]> {
  const uploaded: UploadedSourceImage[] = []
  for (const [index, image] of images.slice(0, 8).entries()) {
    const {buffer, contentType} = await downloadSourceImage(image)
    const extension = contentType === 'image/png' ? 'png' : contentType === 'image/webp' ? 'webp' : 'jpg'
    const asset = await writeClient().assets.upload('image', buffer, {filename: `rank-score-inline-${index + 1}.${extension}`, contentType})
    uploaded.push({...image, assetId: asset._id})
  }
  return uploaded
}

export async function uploadFeaturedImage(buffer: Buffer, slug: string) {
  const asset = await writeClient().assets.upload('image', buffer, {filename: `${slug}-featured.png`, contentType: 'image/png'})
  return asset._id
}

export async function uploadGeneratedInlineImages(
  images: Array<{buffer: Buffer; alt: string; caption: string}>,
  slug: string,
): Promise<UploadedSourceImage[]> {
  const uploaded: UploadedSourceImage[] = []
  for (const [index, image] of images.entries()) {
    const asset = await writeClient().assets.upload('image', image.buffer, {
      filename: `${slug}-inline-${index + 1}.png`, contentType: 'image/png',
    })
    uploaded.push({assetId: asset._id, url: '', alt: image.alt, caption: image.caption})
  }
  return uploaded
}

export function inputFingerprint(article: SourceArticle) {
  return createHash('sha256').update(JSON.stringify(article)).digest('hex')
}

export function draftId(article: SourceArticle) {
  const sourceKey = createHash('sha256').update(`${article.source}:${article.sourceId}`).digest('hex').slice(0, 32)
  return `drafts.content-intake-${sourceKey}`
}

export async function getIntakeContext(article: SourceArticle) {
  const client = writeClient()
  return client.fetch<{
    existing: {_id: string; fingerprint?: string; title?: string} | null
    published: {
      _id: string
      slug?: string
      publishedAt?: string
      canonicalUrl?: string
      noIndex?: boolean
      featured?: boolean
      socialTitle?: string
      socialDescription?: string
      hashtags?: string[]
      relatedArticles?: Array<{_type: 'reference'; _ref: string; _key?: string}>
    } | null
    pillar: {_id: string; title: string; description?: string; slug?: string} | null
    authorId: string | null
    categoryId: string | null
  }>(`{
    "existing": *[_id == $draftId][0]{_id, title, "fingerprint": contentProvenance.inputFingerprint},
    "published": *[_id == $publishedId][0]{
      _id, "slug": slug.current, publishedAt, canonicalUrl, noIndex, featured,
      socialTitle, socialDescription, hashtags, relatedArticles
    },
    "pillar": *[_type == "article" && _id == $pillarId][0]{_id, title, description, "slug": slug.current},
    "authorId": *[_type == "author" && slug.current == "jeff-lortz"][0]._id,
    "categoryId": *[_type == "category" && slug.current == "operations"][0]._id
  }`, {
    draftId: draftId(article),
    publishedId: draftId(article).replace(/^drafts\./, ''),
    pillarId: article.pillarArticleId,
  })
}

function sourceObjects(sources: EditorialOutput['sources']) {
  return sources.map((source) => ({
    _type: 'source', _key: randomUUID().slice(0, 12), title: source.title,
    ...(source.publisher ? {publisher: source.publisher} : {}),
    ...(source.url ? {url: source.url} : {}),
    ...(source.publishedAt ? {publishedAt: source.publishedAt} : {}),
  }))
}

function safeSlug(value: string) {
  const slug = value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 96).replace(/-$/g, '')
  if (!slug) throw new Error('Processor returned an invalid article slug')
  return slug
}

export async function createArticleDraft(
  article: SourceArticle,
  output: EditorialOutput,
  context: {
    authorId: string
    categoryId: string
    published?: {
      slug?: string
      publishedAt?: string
      canonicalUrl?: string
      noIndex?: boolean
      featured?: boolean
      socialTitle?: string
      socialDescription?: string
      hashtags?: string[]
      relatedArticles?: Array<{_type: 'reference'; _ref: string; _key?: string}>
    } | null
  },
  media: {featuredImageAssetId?: string; inlineImages?: UploadedSourceImage[]} = {},
  workflow?: {scheduledPublishAt: string; approvalDeadline: string; pillarRationale?: string},
) {
  const fingerprint = inputFingerprint(article)
  const document = {
    _id: draftId(article), _type: 'article', title: output.title,
    slug: {_type: 'slug', current: context.published?.slug ?? safeSlug(output.slug)}, description: output.description,
    author: {_type: 'reference', _ref: context.authorId},
    category: {_type: 'reference', _ref: context.categoryId},
    pillarArticle: {_type: 'reference', _ref: article.pillarArticleId},
    body: sectionsToPortableText(output.sections, media.inlineImages), sources: sourceObjects(output.sources),
    ...(media.featuredImageAssetId ? {featuredImage: {
      _type: 'image', asset: {_type: 'reference', _ref: media.featuredImageAssetId},
      alt: `Abstract engineered system representing ${output.title}`,
    }} : {}),
    seoTitle: output.seoTitle, metaDescription: output.metaDescription,
    ...(context.published?.publishedAt ? {publishedAt: context.published.publishedAt} : workflow ? {publishedAt: workflow.scheduledPublishAt} : {}),
    ...(context.published?.canonicalUrl ? {canonicalUrl: context.published.canonicalUrl} : {}),
    ...(context.published?.noIndex != null ? {noIndex: context.published.noIndex} : {}),
    ...(context.published?.featured != null ? {featured: context.published.featured} : {}),
    ...(context.published?.socialTitle ? {socialTitle: context.published.socialTitle} : {}),
    ...(context.published?.socialDescription ? {socialDescription: context.published.socialDescription} : {}),
    ...(context.published?.hashtags?.length ? {hashtags: context.published.hashtags} : {}),
    ...(context.published?.relatedArticles?.length ? {relatedArticles: context.published.relatedArticles} : {}),
    primaryKeyword: output.primaryKeyword, secondaryKeywords: output.secondaryKeywords,
    cta: output.cta, reviewStatus: 'needsReview',
    editorialAssessment: output.assessment,
    contentProvenance: {
      source: article.source, sourceId: article.sourceId,
      ...(article.sourceUrl ? {sourceUrl: article.sourceUrl} : {}),
      ...(article.sourceScore != null ? {sourceScore: article.sourceScore} : {}),
      receivedAt: new Date().toISOString(), inputFingerprint: fingerprint,
      processorModel: process.env.CONTENT_PROCESSOR_MODEL,
      ...((article.metadata.rankScoreArticleId ?? article.sourceId) ? {rankScoreArticleId: String(article.metadata.rankScoreArticleId ?? article.sourceId)} : {}),
    },
    ...(workflow ? {scheduledPublishAt: workflow.scheduledPublishAt, approvalDeadline: workflow.approvalDeadline, workflowStatus: 'needsReview', pillarRationale: workflow.pillarRationale} : {}),
  }
  await writeClient().createOrReplace(document)
  return {_id: document._id, title: document.title, fingerprint}
}

export type PublishedArticle = {
  _id: string; _rev: string; title: string; description: string; slug: string;
  fingerprint?: string;
  body: Array<{_type: string; children?: Array<{text?: string}>; body?: string; questions?: string[]}>
}

export async function getPillarCandidates() {
  return writeClient().fetch<Array<{_id: string; title: string; description?: string}>>(`*[_type == "article" && !(_id in path("drafts.**")) && !defined(pillarArticle)] | order(title asc){_id,title,description}`)
}

export async function getProcessedRankScoreIds() {
  return writeClient().fetch<string[]>(`array::unique(*[_type == "article" && defined(contentProvenance.rankScoreArticleId)].contentProvenance.rankScoreArticleId)`)
}

export async function getArticleDraftForSocial(id: string) {
  return writeClient().fetch<(PublishedArticle & {featuredImageUrl?: string; featuredImageAlt?: string; fingerprint?: string}) | null>(
    `*[_id == $id][0]{_id,_rev,title,description,"slug":slug.current,body,"featuredImageUrl":featuredImage.asset->url,"featuredImageAlt":featuredImage.alt,"fingerprint":contentProvenance.inputFingerprint}`,
    {id},
  )
}

export type SchedulableSocialCampaign = {
  _id: string
  reviewStatus?: string
  articleReviewStatus?: string
  articleTitle: string
  articleUrl: string
  imageUrl: string
  imageAlt?: string
  assets: Array<{
    _key: string
    channel: 'linkedinPersonal' | 'linkedinCompany' | 'facebook' | 'instagram' | 'shortForm'
    copy: string
    status?: string
    scheduledAt?: string
    bufferPostId?: string
  }>
}

export async function getSocialCampaignForScheduling(campaignId: string) {
  const id = campaignId.replace(/^drafts\./, '')
  return writeClient().fetch<SchedulableSocialCampaign | null>(`*[_type == "socialCampaign" && _id == $id][0]{
    _id, reviewStatus,
    "articleReviewStatus": coalesce(article->reviewStatus, *[_id == "drafts." + ^.article._ref][0].reviewStatus),
    "articleTitle": coalesce(article->title, articleTitle),
    "articleUrl": $siteUrl + "/articles/" + coalesce(article->slug.current, articleSlug),
    "imageUrl": coalesce(article->featuredImage.asset->url, imageUrl),
    "imageAlt": coalesce(article->featuredImage.alt, imageAlt),
    assets[]{_key, channel, copy, status, scheduledAt, bufferPostId}
  }`, {id, siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tidalpointpartners.com'})
}

export async function updateSocialAssetDelivery(
  campaignId: string,
  assetKey: string,
  delivery: {bufferPostId?: string; bufferError?: string | null; status?: string},
) {
  const path = `assets[_key==${JSON.stringify(assetKey)}]`
  const values = Object.fromEntries(Object.entries({...delivery, bufferSyncedAt: new Date().toISOString()}).map(([key, value]) => [`${path}.${key}`, value]))
  await writeClient().patch(campaignId.replace(/^drafts\./, '')).set(values).commit()
}

export async function getPublishedArticle(articleId: string) {
  return writeClient().fetch<PublishedArticle | null>(
    `*[_type == "article" && _id == $id][0]{_id, _rev, title, description, "slug": slug.current, body, "fingerprint": contentProvenance.inputFingerprint}`,
    {id: articleId.replace(/^drafts\./, '')},
  )
}

export function articleForSocial(article: PublishedArticle) {
  return {
    title: article.title, description: article.description, path: `/articles/${article.slug}`,
    body: article.body.map((block) => block.children?.map((child) => child.text).join('') ?? block.body ?? block.questions?.join(' | ') ?? '').filter(Boolean),
  }
}

export async function socialCampaignMatchesRevision(article: PublishedArticle) {
  const id = `drafts.social-campaign-${article._id.replace(/[^a-zA-Z0-9_-]/g, '-')}`
  const existing = await writeClient().fetch<{articleRevision?: string} | null>(`*[_id == $id][0]{articleRevision}`, {id})
  return existing?.articleRevision === (article.fingerprint ?? article._rev) ? id : null
}

export async function createSocialCampaignDraft(article: PublishedArticle & {featuredImageUrl?: string; featuredImageAlt?: string; fingerprint?: string}, social: SocialOutput, scheduled?: Partial<Record<string, Date>>) {
  const baseArticleId = article._id.replace(/^drafts\./, '')
  const id = `drafts.social-campaign-${baseArticleId.replace(/[^a-zA-Z0-9_-]/g, '-')}`
  await writeClient().createOrReplace({
    _id: id, _type: 'socialCampaign', title: `${article.title} — social campaign`,
    article: {_type: 'reference', _ref: baseArticleId, _weak: true}, articleRevision: article.fingerprint ?? article._rev,
    articleTitle: article.title, articleSlug: article.slug, imageUrl: article.featuredImageUrl, imageAlt: article.featuredImageAlt,
    generatedAt: new Date().toISOString(), reviewStatus: 'needsReview',
    assets: social.assets.map((asset) => ({...asset, _type: 'socialAsset', _key: randomUUID().slice(0, 12), status: 'draft', ...(scheduled?.[asset.channel] ? {scheduledAt: scheduled[asset.channel]!.toISOString()} : {})})),
    carouselBrief: social.carouselBrief, pullQuote: social.pullQuote,
  })
  return {_id: id}
}


export async function publishDueArticles(now = new Date()) {
  const drafts = await writeClient().fetch<Array<Record<string, unknown> & {_id: string; _type: string; scheduledPublishAt: string}>>(`*[_type == "article" && _id in path("drafts.**") && reviewStatus == "approved" && workflowStatus == "scheduled" && scheduledPublishAt <= $now]`, {now: now.toISOString()})
  const published: string[] = []
  for (const draft of drafts) {
    const draftId = String(draft._id)
    const publishedId = draftId.replace(/^drafts\./, '')
    const {_rev, _createdAt, _updatedAt, ...content} = draft
    await writeClient().transaction().createOrReplace({...content, _id: publishedId, publishedAt: draft.scheduledPublishAt, workflowStatus: 'published'}).delete(draftId).commit()
    published.push(publishedId)
  }
  return published
}

export async function finalizeWeeklyApprovals(now = new Date()) {
  const drafts = await writeClient().fetch<Array<{_id: string; reviewStatus?: string; scheduledPublishAt: string; approvalDeadline: string}>>(`*[_type == "article" && _id in path("drafts.**") && workflowStatus in ["needsReview", "deferred"] && approvalDeadline <= $now]{_id,reviewStatus,scheduledPublishAt,approvalDeadline}`, {now: now.toISOString()})
  const scheduled: string[] = []
  const deferred: string[] = []
  for (const draft of drafts) {
    if (draft.reviewStatus === 'approved') {
      await writeClient().patch(draft._id).set({workflowStatus: 'scheduled'}).commit()
      scheduled.push(draft._id)
      continue
    }
    const shift = (value: string) => new Date(Date.parse(value) + 7 * 86_400_000).toISOString()
    await writeClient().patch(draft._id).set({workflowStatus: 'deferred', scheduledPublishAt: shift(draft.scheduledPublishAt), publishedAt: shift(draft.scheduledPublishAt), approvalDeadline: shift(draft.approvalDeadline)}).commit()
    const campaignId = `drafts.social-campaign-${draft._id.replace(/^drafts\./, '')}`
    const campaign = await writeClient().fetch<{assets?: Array<{scheduledAt?: string}>} | null>(`*[_id == $id][0]{assets}`, {id: campaignId})
    if (campaign?.assets?.length) {
      await writeClient().patch(campaignId).set({assets: campaign.assets.map((asset) => asset.scheduledAt ? {...asset, scheduledAt: shift(asset.scheduledAt)} : asset)}).commit()
    }
    deferred.push(draft._id)
  }
  return {scheduled, deferred}
}
