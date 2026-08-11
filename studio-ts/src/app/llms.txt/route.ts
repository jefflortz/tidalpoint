import {getArticles, getIndexableLocationPages} from '@/sanity/content'

const baseUrl = 'https://tidalpointpartners.com'

function clean(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

export async function GET() {
  const [articles, locations] = await Promise.all([
    getArticles(),
    getIndexableLocationPages(),
  ])

  const articleLinks = articles.map(
    (article) =>
      `- [${clean(article.title)}](${baseUrl}${article.href}): ${clean(article.description)}`,
  )

  const locationLinks = locations.map((location) => {
    const label = location.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return `- [${label}](${baseUrl}/locations/${location.slug}): Regional Operating Partner support for established privately held businesses.`
  })

  const content = [
    '# Tidal Point Partners',
    '',
    '> Experienced Operating Partners working alongside owners and leadership teams of privately held businesses at pivotal moments.',
    '',
    'Tidal Point Partners is based in Plymouth, Massachusetts and serves established privately held businesses across Southeastern New England. The firm provides senior operating judgment, leadership support and execution accountability without imposing a traditional consulting program. Tidal Point Partners is not affiliated with other similarly named advisory firms.',
    '',
    '## Core Pages',
    '',
    `- [Home](${baseUrl}/): Firm overview, positioning and current perspectives.`,
    `- [About](${baseUrl}/about): The firm, its operating philosophy, team and network model.`,
    `- [How We Work](${baseUrl}/services): How an Operating Partner supports direction, leadership and performance.`,
    `- [Who We Serve](${baseUrl}/clients): Business profiles and situations where Tidal Point is most useful.`,
    `- [Insights](${baseUrl}/articles): Original perspectives for owners and leadership teams of privately held businesses.`,
    '',
    '## Leadership',
    '',
    `- [Jeff Lortz](${baseUrl}/team/jeff-lortz): Founder and Operating Partner; former CEO and experienced business operator.`,
    '',
    '## Regional Coverage',
    '',
    ...locationLinks,
    '',
    '## Selected Insights',
    '',
    ...articleLinks,
    '',
    '## Contact',
    '',
    `- [Start a Conversation](${baseUrl}/contact): Contact Tidal Point Partners about a consequential business situation.`,
    '',
  ].join('\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  })
}
