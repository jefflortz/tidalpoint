import type {EditorialOutput, SeoAssessment, SourceArticle} from './types'

type SeoPeer = {title?: string; seoTitle?: string; slug?: string; primaryKeyword?: string}

const STOP_WORDS = new Set(['a', 'an', 'and', 'are', 'for', 'how', 'in', 'is', 'of', 'or', 'the', 'to', 'your'])

function words(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((word) => word.length > 1 && !STOP_WORDS.has(word))
}

function overlap(left: string, right: string) {
  const a = new Set(words(left))
  const b = new Set(words(right))
  if (!a.size || !b.size) return 0
  const shared = [...a].filter((word) => b.has(word)).length
  return shared / new Set([...a, ...b]).size
}

export function assessSeo(
  source: SourceArticle,
  article: EditorialOutput,
  pillar: {title: string; slug?: string} | null,
  peers: SeoPeer[] = [],
  options: {contentRole?: 'pillar' | 'supporting'; keywordProvided?: boolean} = {},
): SeoAssessment {
  const checks: SeoAssessment['checks'] = []
  const add = (label: string, passed: boolean, weight: number, detail: string, critical = false) =>
    checks.push({label, status: passed ? 'pass' : critical ? 'fail' : 'warning', detail, weight, critical})

  const bodyText = article.sections.map((section) => `${section.text} ${section.items.join(' ')}`).join(' ')
  const headings = article.sections.filter((section) => section.type === 'h2' || section.type === 'h3').map((section) => section.text).join(' ')
  const intro = article.sections.filter((section) => section.type === 'paragraph').slice(0, 3).map((section) => section.text).join(' ')
  const keywordTokens = [...new Set(words(source.primaryKeyword))]
  const openingTokens = new Set(words(`${article.title} ${article.seoTitle} ${article.metaDescription} ${intro}`))
  const keywordCoverage = keywordTokens.length ? keywordTokens.filter((word) => openingTokens.has(word)).length / keywordTokens.length : 0
  const exactDuplicate = peers.find((peer) => peer.primaryKeyword?.trim().toLowerCase() === source.primaryKeyword.trim().toLowerCase())
  const closestPeer = peers.map((peer) => ({peer, similarity: overlap(`${article.title} ${article.seoTitle}`, `${peer.title ?? ''} ${peer.seoTitle ?? ''}`)})).sort((a, b) => b.similarity - a.similarity)[0]
  const sourceYearCutoff = new Date().getUTCFullYear() - 3
  const recentSources = article.sources.filter((item) => Number(item.publishedAt.slice(0, 4)) >= sourceYearCutoff).length
  const articleWords = words(bodyText).length
  const contentRole = options.contentRole ?? 'supporting'
  const keywordProvided = options.keywordProvided ?? Boolean(source.primaryKeyword.trim())

  add('Search intent alignment', keywordProvided && keywordCoverage >= 0.6, 20, keywordProvided ? `${Math.round(keywordCoverage * 100)}% of the meaningful target-keyword terms appear naturally in the title, description, or opening.` : 'Assign a deliberate primary keyword before the next substantive update.', contentRole === 'supporting')
  add('Unique keyword target', keywordProvided && !exactDuplicate, 15, !keywordProvided ? 'A primary keyword is not yet assigned.' : exactDuplicate ? `The same primary keyword is already assigned to “${exactDuplicate.title ?? exactDuplicate.slug}”.` : 'No published article uses the same primary keyword.', contentRole === 'supporting')
  add('Distinct article angle', !closestPeer || closestPeer.similarity < 0.65, 10, closestPeer ? `Closest published-title overlap is ${Math.round(closestPeer.similarity * 100)}% with “${closestPeer.peer.title}”.` : 'No competing published article was found.', true)
  add('Pillar relationship', contentRole === 'pillar' || Boolean(source.pillarArticleId && pillar?.title && pillar.slug), 10, contentRole === 'pillar' ? 'This is a pillar article and does not require a parent pillar.' : pillar?.slug ? `Supports “${pillar.title}” at /articles/${pillar.slug}.` : 'A supporting article requires a published pillar article and URL.', contentRole === 'supporting')
  add('SEO title', article.seoTitle.length >= 30 && article.seoTitle.length <= 65, 10, `${article.seoTitle.length} characters; target 30–65.`)
  add('Meta description', article.metaDescription.length >= 120 && article.metaDescription.length <= 170, 10, `${article.metaDescription.length} characters; target 120–170.`)
  const slug = article.slug.replace(/^\/+|\/+$/g, '')
  add('URL slug', slug.length <= 75 && words(slug).length >= 3, 5, `${slug.length} characters with ${words(slug).length} meaningful words.`)
  add('Heading relevance', keywordTokens.some((word) => words(headings).includes(word)), 5, 'At least one meaningful target term should appear in a section heading.')
  add('Useful depth', articleWords >= 900, 5, `${articleWords.toLocaleString()} substantive words; target at least 900.`)
  add('Evidence quality', article.sources.length >= 3 && recentSources >= 2, 10, `${article.sources.length} sources, including ${recentSources} from the last three years.`)

  const earned = checks.reduce((sum, check) => sum + (check.status === 'pass' ? check.weight : check.status === 'warning' ? check.weight * 0.5 : 0), 0)
  const possible = checks.reduce((sum, check) => sum + check.weight, 0)
  const score = Math.round((earned / possible) * 100)
  const criticalFailures = checks.filter((check) => check.status === 'fail')
  const warnings = checks.filter((check) => check.status === 'warning')
  const status = criticalFailures.length ? 'fail' : score >= 85 ? 'pass' : 'warning'
  return {
    score, status, targetKeyword: source.primaryKeyword, evaluatedAt: new Date().toISOString(), checks,
    summary: criticalFailures.length
      ? `SEO gate blocked by ${criticalFailures.length} critical issue${criticalFailures.length === 1 ? '' : 's'}.`
      : warnings.length ? `SEO gate passed with ${warnings.length} optimization recommendation${warnings.length === 1 ? '' : 's'}.` : 'SEO gate passed all checks.',
    recommendations: [...criticalFailures, ...warnings].map((check) => check.detail),
  }
}
