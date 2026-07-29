import Image from 'next/image'
import Link from 'next/link'
import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { type Article, type MDXEntry, loadArticles } from '@/lib/mdx'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function estimateReadingTime(description: string): string {
  // Rough estimate: assume ~800 words per typical article
  // We don't have word count at render time so use a fixed estimate
  return '8 min read'
}

// ─── JSON-LD structured data ──────────────────────────────────────────────────

function ArticleSchema({ article }: { article: MDXEntry<Article> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Jeff Lortz',
      jobTitle: 'Founder',
      worksFor: {
        '@type': 'Organization',
        name: 'Tidal Point Partners',
        url: 'https://tidalpointpartners.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tidal Point Partners',
      url: 'https://tidalpointpartners.com',
    },
    ...(article.featuredImage && { image: article.featuredImage }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── Author Bio ───────────────────────────────────────────────────────────────

function AuthorBio() {
  return (
    <div className="mx-auto max-w-3xl">
      <Border className="pt-12">
        <div className="flex gap-x-6">
          <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-tidal-navy">
            <span className="text-sm font-bold text-white">JL</span>
          </div>
          <div>
            <p className="font-display text-base font-bold text-tidal-navy">
              Jeff Lortz
            </p>
            <p className="text-sm text-tidal-light">
              Founder, Tidal Point Partners
            </p>
            <p className="mt-3 text-sm leading-relaxed text-tidal-body">
              Jeff is a former PE-backed SaaS CEO, C-suite operator, and US
              Navy Surface Warfare Officer. He works with privately held,
              owner-led businesses in Southeastern Massachusetts as the
              operating partner they never had.{' '}
              <Link href="/about" className="font-semibold text-tidal-teal hover:text-tidal-teal/80">
                Read his full background &rarr;
              </Link>
            </p>
          </div>
        </div>
      </Border>
    </div>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function ArticleCTA() {
  return (
    <div className="bg-tidal-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Found this useful?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            If this describes where your business is, let&rsquo;s talk.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-tidal-teal shadow transition hover:bg-tidal-sand"
            >
              Schedule a Conversation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default async function ArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  const allArticles = await loadArticles()
  const moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <RootLayout>
      <ArticleSchema article={article} />

      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Article header */}
          <header className="mx-auto max-w-3xl">
            {article.category && (
              <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
                {article.category}
              </p>
            )}
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-tidal-navy sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xl text-tidal-body leading-relaxed">
              {article.description}
            </p>

            {/* Meta bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-tidal-navy/10 pt-6">
              <div className="flex items-center gap-x-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-tidal-navy">
                  <span className="text-xs font-bold text-white">JL</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-tidal-navy">Jeff Lortz</p>
                  <p className="text-xs text-tidal-light">Founder, Tidal Point Partners</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-x-4 text-sm text-tidal-light">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{estimateReadingTime(article.description)}</span>
              </div>
            </div>
          </header>

          {/* Featured image */}
          {article.featuredImage && (
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl">
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </FadeIn>

        {/* Article body */}
        <FadeIn>
          <MDXComponents.wrapper className="mt-16 sm:mt-20">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>

        {/* Author bio */}
        <FadeIn>
          <div className="mt-16 sm:mt-24">
            <AuthorBio />
          </div>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ArticleCTA />
    </RootLayout>
  )
}
