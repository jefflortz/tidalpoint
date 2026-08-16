import {type Metadata} from 'next'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'

import {PortableArticleBody} from '@/components/PortableArticleBody'
import {getArticle, getArticleSlugs, getArticles} from '@/sanity/content'
import ArticleWrapper from '../wrapper'

export async function generateStaticParams() {
  return (await getArticleSlugs()).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params
  const {isEnabled: previewing} = await draftMode()
  const article = await getArticle(slug, {previewing})
  if (!article) return {}
  const canonical = article.canonicalUrl ?? `/articles/${slug}`
  return {
    title: article.seoTitle ?? article.title,
    description: article.metaDescription ?? article.description,
    alternates: {canonical},
    robots: article.noIndex ? {index: false, follow: false} : undefined,
    openGraph: {
      title: article.socialTitle ?? article.title,
      description: article.socialDescription ?? article.description,
      url: canonical,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      images: [article.socialImage ?? article.featuredImage],
    },
  }
}

export default async function SanityArticlePage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const {isEnabled: previewing} = await draftMode()
  const article = await getArticle(slug, {previewing})
  if (!article) notFound()
  const moreArticles = (await getArticles()).filter((item) => item._id !== article._id).slice(0, 2)
  return (
    <ArticleWrapper article={article} moreArticles={moreArticles}>
      <PortableArticleBody value={article.body} />
    </ArticleWrapper>
  )
}
