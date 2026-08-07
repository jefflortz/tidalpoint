import { MetadataRoute } from 'next'

import { getArticles, getIndexableLocationPages } from '@/sanity/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tidalpointpartners.com'
  const [articles, locations] = await Promise.all([
    getArticles(),
    getIndexableLocationPages(),
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team/jeff-lortz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
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
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
