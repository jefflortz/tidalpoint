import { MetadataRoute } from 'next'

import { getArticles, getIndexableLocationPages } from '@/sanity/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tidalpointpartners.com'
  const releaseOneLastModified = new Date('2026-11-23T00:00:00.000Z')
  const [articles, locations] = await Promise.all([
    getArticles(),
    getIndexableLocationPages(),
  ])

  return [
    {
      url: `${baseUrl}/`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sell-your-business`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/build-business-value`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/what-is-my-business-worth`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team/jeff-lortz`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}${article.href}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...locations.map((location) => ({
      url: `${baseUrl}/locations/${location.slug}`,
      lastModified: new Date(location.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: releaseOneLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
