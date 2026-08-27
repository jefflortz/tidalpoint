import {adaptRankScoreArticle, fetchRankScoreArticle, fetchRankScoreArticles} from './adapters'
import {generateSocialAssets, selectPillar} from './openai'
import {processIntake} from './process-intake'
import {weeklySchedule} from './schedule'
import {articleForSocial, createSocialCampaignDraft, getArticleDraftForSocial, getPillarCandidates, getProcessedRankScoreIds} from './sanity'

export async function discoverWeeklyArticle(now = new Date()) {
  const [rankScoreArticles, processedIds, pillars] = await Promise.all([
    fetchRankScoreArticles(), getProcessedRankScoreIds(), getPillarCandidates(),
  ])
  const processed = new Set(processedIds)
  const candidate = rankScoreArticles
    .filter((item) => typeof item.id === 'string' && !processed.has(item.id))
    .sort((a, b) => Date.parse(String(a.created_at ?? 0)) - Date.parse(String(b.created_at ?? 0)))[0]
  console.log('Weekly discovery inspected RankScore queue', {
    available: rankScoreArticles.length,
    processed: processed.size,
    candidateId: typeof candidate?.id === 'string' ? candidate.id : null,
  })
  if (!candidate) return {status: 'empty' as const}
  const source = await fetchRankScoreArticle(String(candidate.id))
  const preliminary = adaptRankScoreArticle(source, pillars[0]?._id ?? '')
  if (!pillars.length) throw new Error('No published pillar articles are available')
  const choice = await selectPillar(preliminary, pillars)
  const article = adaptRankScoreArticle(source, choice.pillarId)
  const schedule = weeklySchedule(now)
  const result = await processIntake(article, false, {
    scheduledPublishAt: schedule.publishAt.toISOString(),
    approvalDeadline: schedule.approvalDeadline.toISOString(),
    pillarRationale: choice.rationale,
  })
  if (result.status !== 201) return {status: 'skipped' as const, result}
  const draft = await getArticleDraftForSocial(result.body.draftId)
  if (!draft) throw new Error('Generated article draft could not be reloaded')
  const social = await generateSocialAssets(articleForSocial(draft))
  const campaign = await createSocialCampaignDraft(draft, social, schedule.social)
  console.log('Weekly discovery created review package', {
    articleId: result.body.draftId,
    campaignId: campaign._id,
    publishAt: schedule.publishAt.toISOString(),
  })
  return {status: 'ready' as const, articleId: result.body.draftId, campaignId: campaign._id, title: result.body.title, publishAt: schedule.publishAt.toISOString(), approvalDeadline: schedule.approvalDeadline.toISOString()}
}
