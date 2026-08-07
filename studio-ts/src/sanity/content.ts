import {createClient} from 'next-sanity'
import {createImageUrlBuilder} from '@sanity/image-url'

const projectId = '5w70fpy3'
const dataset = 'production'
const apiVersion = '2026-08-05'

export const sanityClient = createClient({projectId, dataset, apiVersion, useCdn: false})
const imageBuilder = createImageUrlBuilder(sanityClient)

type SanityImage = Parameters<typeof imageBuilder.image>[0]

export function imageUrl(source: SanityImage, width = 1600, height?: number) {
  let builder = imageBuilder.image(source).width(width).auto('format').quality(88)
  if (height) builder = builder.height(height).fit('crop')
  return builder.url()
}

export interface ArticleSummary {
  _id: string
  title: string
  description: string
  date: string
  category: string
  href: string
  featuredImage: string
  featuredImageAlt: string
  featured: boolean
}

export interface ArticleDocument extends ArticleSummary {
  updatedAt?: string
  seoTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  noIndex?: boolean
  socialTitle?: string
  socialDescription?: string
  socialImage?: string
  body: Array<Record<string, unknown>>
  author: {
    name: string
    role: string
    shortBio?: string
    profileUrl?: string
    portrait?: string
  }
  sources?: Array<{
    _key: string
    title: string
    publisher?: string
    url?: string
    publishedAt?: string
  }>
  cta?: {
    eyebrow?: string
    title?: string
    body?: string
    buttonLabel?: string
    buttonHref?: string
  }
}

export interface LocationPageDocument {
  _id: string
  title: string
  slug: string
  regionName: string
  heroEyebrow?: string
  heroTitle: string
  heroIntroduction: string
  regionalContext: {
    eyebrow?: string
    title: string
    body: string
    details?: Array<{_key: string; label: string; value: string}>
  }
  situations: {
    eyebrow?: string
    title: string
    introduction?: string
    items: Array<{_key: string; title: string; body: string}>
  }
  supportAreas: {
    eyebrow?: string
    title: string
    introduction?: string
    items: Array<{_key: string; label: string; title: string; body: string}>
  }
  businessProfile: {
    eyebrow?: string
    title: string
    body: string
    industries?: string[]
  }
  relatedArticles?: ArticleSummary[]
  cta?: {
    eyebrow?: string
    title: string
    body?: string
    buttonLabel?: string
    buttonHref?: string
  }
  seoTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  socialImage?: string
  noIndex?: boolean
}

const southeasternNewEnglandSeed: Omit<LocationPageDocument, 'relatedArticles'> = {
  _id: 'location-southeastern-new-england-preview',
  title: 'Southeastern New England',
  slug: 'southeastern-new-england',
  regionName: 'Southeastern New England',
  heroEyebrow: 'Operating Partner Support in Southeastern New England',
  heroTitle: 'Experienced operating partnership, close to the business.',
  heroIntroduction:
    'Tidal Point works alongside owners and leadership teams across Massachusetts, Rhode Island and Southeastern New England when growth, change or transition has raised the consequence of every decision.',
  regionalContext: {
    eyebrow: 'A Regional Operating Perspective',
    title: 'Close enough to understand the context. Independent enough to challenge it.',
    body:
      'Privately held businesses across Southeastern New England often combine substantial operating complexity with deeply personal ownership. Customers, employees and communities may have depended on the company for decades.\n\nAt a pivotal moment, leaders need more than generic advice. They need an experienced operator who can understand the business quickly, test the decisions that matter and remain alongside the team as those decisions become operating progress.',
    details: [
      {_key: 'base', label: 'Based in', value: 'Plymouth, Massachusetts'},
      {_key: 'region', label: 'Serving', value: 'Massachusetts, Rhode Island and adjacent New England markets'},
      {_key: 'businesses', label: 'Business fit', value: 'Established privately held and owner-led companies'},
    ],
  },
  situations: {
    eyebrow: 'When Leaders Call Us',
    title: 'The business is established. The next decision still carries real weight.',
    introduction:
      'The need rarely presents itself as a request for an Operating Partner. It begins with a consequential business situation that needs experienced judgment and sustained follow-through.',
    items: [
      {_key: 'growth', title: 'Growth has increased complexity faster than the business has adapted.', body: 'Decision-making, accountability and operating rhythm have not kept pace with a larger and more demanding company.'},
      {_key: 'dependency', title: 'Too much of the business still runs through one person.', body: 'The owner or CEO remains the center of gravity, constraining leadership capacity and the company’s next chapter.'},
      {_key: 'leadership', title: 'A capable management group is not yet operating as one leadership team.', body: 'Strong individual managers need clearer priorities, shared accountability and a better way to make decisions together.'},
      {_key: 'investment', title: 'A major investment or strategic move requires greater confidence.', body: 'A new service line, facility, system, acquisition or market move demands choices that must hold up through execution.'},
    ],
  },
  supportAreas: {
    eyebrow: 'How Tidal Point Helps',
    title: 'One experienced operator, backed by the right capabilities.',
    introduction:
      'The relationship stays personal and senior-led. Specialist resources are added only when a defined deliverable will help the leadership team move forward.',
    items: [
      {_key: 'direction', label: 'Direction', title: 'Clarify the decision and what it requires.', body: 'Frame the real question, pressure-test assumptions and establish a course the ownership and leadership team can carry forward with confidence.'},
      {_key: 'leadership', label: 'Leadership', title: 'Build capability around the owner and CEO.', body: 'Strengthen roles, decision rights and accountability so the management team becomes a source of leverage rather than another point of escalation.'},
      {_key: 'performance', label: 'Performance', title: 'Translate judgment into operating progress.', body: 'Connect strategic choices to priorities, measures and a practical operating cadence—without burdening the business with a consulting program.'},
    ],
  },
  businessProfile: {
    eyebrow: 'Built for the Region’s Established Businesses',
    title: 'Different industries. Familiar operating realities.',
    body:
      'Southeastern New England is home to substantial businesses built over years, often across generations. Their industries differ, but many share the same challenge: preserving the judgment and commitment that made the company successful while building the leadership and operating capacity required for what comes next.',
    industries: ['Manufacturing', 'Distribution & logistics', 'Business services', 'Healthcare services', 'Engineering & construction', 'Specialty consumer products'],
  },
  cta: {
    eyebrow: 'A Useful First Conversation',
    title: 'Start with the situation—not a predefined engagement.',
    body: 'A good introductory conversation should sharpen the issue, create value and make the right next step clear to both sides.',
    buttonLabel: 'Start a conversation',
    buttonHref: '/contact',
  },
  seoTitle: 'Operating Partner in Southeastern New England',
  metaDescription:
    'Experienced Operating Partner support for privately held businesses across Massachusetts, Rhode Island and Southeastern New England navigating growth and change.',
  canonicalUrl: 'https://tidalpointpartners.com/locations/southeastern-new-england',
  noIndex: false,
}

const summaryProjection = `{
  _id,
  title,
  description,
  "date": publishedAt,
  "category": category->title,
  "href": "/articles/" + slug.current,
  "featuredImageSource": featuredImage,
  "featuredImageAlt": featuredImage.alt,
  "featured": coalesce(featured, false)
}`

export async function getArticles(): Promise<ArticleSummary[]> {
  const articles = await sanityClient.fetch<Array<ArticleSummary & {featuredImageSource: SanityImage}>>(
    `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) ${summaryProjection}`,
    {},
    {next: {revalidate: 60}},
  )
  return articles.map(({featuredImageSource, ...article}) => ({
    ...article,
    date: article.date.slice(0, 10),
    featuredImage: imageUrl(featuredImageSource, 1200, 675),
  }))
}

export async function getArticle(slug: string): Promise<ArticleDocument | null> {
  const article = await sanityClient.fetch<
    (Omit<ArticleDocument, 'featuredImage' | 'socialImage'> & {
      featuredImageSource: SanityImage
      socialImageSource?: SanityImage
      author: ArticleDocument['author'] & {portraitSource?: SanityImage}
    }) | null
  >(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      description,
      "date": publishedAt,
      updatedAt,
      "category": category->title,
      "href": "/articles/" + slug.current,
      "featuredImageSource": featuredImage,
      "featuredImageAlt": featuredImage.alt,
      seoTitle,
      metaDescription,
      canonicalUrl,
      noIndex,
      socialTitle,
      socialDescription,
      "socialImageSource": socialImage,
      body,
      sources,
      cta,
      "author": author->{
        name,
        role,
        shortBio,
        profileUrl,
        "portraitSource": portrait
      }
    }`,
    {slug},
    {next: {revalidate: 60}},
  )
  if (!article) return null
  const {featuredImageSource, socialImageSource, ...rest} = article
  const {portraitSource, ...author} = rest.author
  return {
    ...rest,
    date: rest.date.slice(0, 10),
    featuredImage: imageUrl(featuredImageSource, 1600, 900),
    socialImage: socialImageSource ? imageUrl(socialImageSource, 1200, 630) : undefined,
    author: {
      ...author,
      portrait: portraitSource ? imageUrl(portraitSource, 320, 400) : undefined,
    },
  }
}

export async function getArticleSlugs(): Promise<string[]> {
  return sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)].slug.current`,
    {},
    {next: {revalidate: 60}},
  )
}

export async function getLocationPage(slug: string): Promise<LocationPageDocument | null> {
  const page = await sanityClient.fetch<
    (Omit<LocationPageDocument, 'socialImage'> & {socialImageSource?: SanityImage}) | null
  >(
    `*[_type == "locationPage" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      regionName,
      heroEyebrow,
      heroTitle,
      heroIntroduction,
      regionalContext,
      situations,
      supportAreas,
      businessProfile,
      "relatedArticles": relatedArticles[]->{
        _id,
        title,
        description,
        "date": publishedAt,
        "category": category->title,
        "href": "/articles/" + slug.current,
        "featuredImageSource": featuredImage,
        "featuredImageAlt": featuredImage.alt,
        "featured": coalesce(featured, false)
      },
      cta,
      seoTitle,
      metaDescription,
      canonicalUrl,
      "socialImageSource": socialImage,
      noIndex
    }`,
    {slug},
    {next: {revalidate: 60}},
  )
  if (!page) {
    if (slug !== southeasternNewEnglandSeed.slug) return null
    const articles = await getArticles()
    const relatedSlugs = [
      'why-your-business-still-runs-through-you',
      'signs-business-outgrown-operating-system',
      'your-managers-are-capable-why-isnt-the-leadership-team-working',
    ]
    return {
      ...southeasternNewEnglandSeed,
      relatedArticles: relatedSlugs
        .map((articleSlug) => articles.find((article) => article.href.endsWith(`/${articleSlug}`)))
        .filter((article): article is ArticleSummary => Boolean(article)),
    }
  }

  const {socialImageSource, ...rest} = page
  const relatedArticles = rest.relatedArticles?.map((article) => ({
    ...article,
    date: article.date.slice(0, 10),
    featuredImage: imageUrl(
      (article as ArticleSummary & {featuredImageSource: SanityImage}).featuredImageSource,
      900,
      506,
    ),
  }))

  return {
    ...rest,
    relatedArticles,
    socialImage: socialImageSource ? imageUrl(socialImageSource, 1200, 630) : undefined,
  }
}

export async function getLocationSlugs(): Promise<string[]> {
  const slugs = await sanityClient.fetch<string[]>(
    `*[_type == "locationPage" && defined(slug.current)].slug.current`,
    {},
    {next: {revalidate: 60}},
  )
  return Array.from(new Set([...slugs, southeasternNewEnglandSeed.slug]))
}

export async function getIndexableLocationPages(): Promise<Array<{slug: string; updatedAt: string}>> {
  const pages = await sanityClient.fetch<Array<{slug: string; updatedAt: string}>>(
    `*[_type == "locationPage" && defined(slug.current) && noIndex != true]{
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`,
    {},
    {next: {revalidate: 60}},
  )

  if (!pages.some((page) => page.slug === southeasternNewEnglandSeed.slug)) {
    pages.push({slug: southeasternNewEnglandSeed.slug, updatedAt: new Date().toISOString()})
  }

  return pages
}
