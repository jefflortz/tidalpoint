import { type Metadata } from 'next'
import {draftMode} from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { PageSchema } from '@/components/PageSchema'
import { formatDate } from '@/lib/formatDate'
import { getArticles } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description:
    'Practical thinking for owners and leadership teams navigating pivotal moments in the life of a business.',
  alternates: { canonical: '/articles' },
  openGraph: {
    title: 'Articles & Insights - Tidal Point Partners',
    description:
      'Practical thinking for owners and leadership teams navigating pivotal moments in the life of a business.',
    url: '/articles',
    type: 'website',
  },
}

function ArticlesCTA() {
  return (
    <section className="mt-24 bg-tidal-navy py-20 sm:mt-32 sm:py-24">
      <Container>
        <FadeIn className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-tidal-teal uppercase">
            Experienced perspective
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] text-tidal-warm-white sm:text-5xl">
            Something here sound familiar?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
            Bring what is on your mind. We will tell you honestly whether we can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-tidal-navy"
          >
            Start a conversation <span className="ml-3" aria-hidden="true">&rarr;</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  )
}

export default async function Articles() {
  const {isEnabled: previewing} = await draftMode()
  const articles = await getArticles({previewing})
  // getArticles returns published articles ordered by publishedAt descending,
  // so the newest article should always lead the Insights page.
  const featuredArticle = articles[0]
  const remainingArticles = articles.filter((article) => article._id !== featuredArticle?._id)

  return (
    <RootLayout>
      <PageSchema
        path="/articles"
        name="Articles & Insights"
        description="Practical thinking for owners and leadership teams navigating pivotal moments in the life of a business."
        type="CollectionPage"
      />
      <section className="bg-tidal-warm-white pt-6 sm:pt-8 lg:pt-10">
        <Container>
          <FadeIn className="border-b border-tidal-navy/15 pb-10 sm:pb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-tidal-teal uppercase">
              From the field
            </p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
              <h1 className="max-w-[14ch] font-display text-5xl leading-[0.98] font-semibold tracking-[-0.035em] text-tidal-navy sm:text-6xl">
                Practical thinking for business operators.
              </h1>
              <p className="max-w-xl text-base leading-7 text-tidal-body lg:pb-1">
                Observations from the operating seat for owners and leadership
                teams navigating growth, complexity, and consequential decisions.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-tidal-warm-white py-10 sm:py-12 lg:py-14">
        <Container>
          {featuredArticle && (
            <FadeIn>
              <article className="group grid overflow-hidden bg-white ring-1 ring-tidal-navy/10 lg:grid-cols-12">
                <Link
                  href={featuredArticle.href}
                  className="relative block aspect-video overflow-hidden bg-tidal-navy lg:col-span-7 lg:self-center"
                  aria-label={`Read ${featuredArticle.title}`}
                >
                  <Image
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.featuredImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </Link>

                <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase">
                      {featuredArticle.category && (
                        <span className="text-tidal-teal">{featuredArticle.category}</span>
                      )}
                      <span className="text-tidal-light">{formatDate(featuredArticle.date)}</span>
                    </div>
                    <h2 className="mt-5 max-w-[18ch] font-display text-4xl leading-[1.03] font-semibold tracking-[-0.025em] text-tidal-navy sm:text-5xl">
                      <Link href={featuredArticle.href} className="transition group-hover:text-tidal-teal">
                        {featuredArticle.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-tidal-body">
                      {featuredArticle.description}
                    </p>
                  </div>
                  <Link
                    href={featuredArticle.href}
                    className="mt-8 inline-flex items-center border-t border-tidal-navy/15 pt-6 text-sm font-semibold text-tidal-navy transition group-hover:text-tidal-teal"
                  >
                    Read the featured article <span className="ml-3" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          )}

          {remainingArticles.length > 0 && (
            <FadeInStagger className="mt-12 grid gap-x-8 gap-y-12 border-t border-tidal-navy/15 pt-10 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:pt-12">
              {remainingArticles.map((article) => (
                <FadeIn key={article.href}>
                  <article className="group flex h-full flex-col">
                    <Link
                      href={article.href}
                      className="relative block aspect-video overflow-hidden bg-tidal-navy"
                      aria-label={`Read ${article.title}`}
                    >
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        fill
                        sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col pt-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase">
                      {article.category && (
                        <span className="text-tidal-teal">{article.category}</span>
                      )}
                      {article.draft && (
                        <span className="rounded-full bg-tidal-navy px-2 py-1 text-[0.65rem] text-white">
                          Draft
                        </span>
                      )}
                      <span className="text-tidal-light">{formatDate(article.date)}</span>
                    </div>
                      <h2 className="mt-4 max-w-[20ch] font-display text-3xl leading-[1.05] font-semibold tracking-[-0.02em] text-tidal-navy">
                      <Link href={article.href} className="transition hover:text-tidal-teal">
                        {article.title}
                      </Link>
                    </h2>
                      <p className="mt-4 text-[0.95rem] leading-7 text-tidal-body">
                      {article.description}
                    </p>
                    <Link
                      href={article.href}
                        className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-tidal-navy transition group-hover:text-tidal-teal"
                    >
                      Read the article <span className="ml-3" aria-hidden="true">&rarr;</span>
                    </Link>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </FadeInStagger>
          )}
        </Container>
      </section>

      <ArticlesCTA />
    </RootLayout>
  )
}
