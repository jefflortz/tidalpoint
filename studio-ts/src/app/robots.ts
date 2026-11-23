import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production'
  return {
    rules: isProduction ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    ...(isProduction ? { sitemap: 'https://tidalpointpartners.com/sitemap.xml', host: 'https://tidalpointpartners.com' } : {}),
  }
}
