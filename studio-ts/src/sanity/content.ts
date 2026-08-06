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
