import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  category?: string
  featuredImage?: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export interface Service {
  date: string
  title: string
  tagline: string
  description: string
  tag: string
  whoItsFor: string
  engagementType: string
  typicalDuration: string
  quote: string
  stats: Array<{ value: string; label: string }>
  image: ImagePropsWithOptionalAlt
  imageShape?: 0 | 1 | 2
}

export function loadArticles() {
  return loadEntries<Article>('articles', 'article')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}

export interface ClientProfile {
  date: string
  title: string
  industry: string
  companySize: string
  engagementType: string
  summary: string
}

export function loadServices() {
  return loadEntries<Service>('services', 'service')
}

export function loadClientProfiles() {
  return loadEntries<ClientProfile>('clients', 'clientProfile')
}
