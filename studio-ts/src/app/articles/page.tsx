import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { getArticles } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description:
    'Practical thinking for owners and leadership teams navigating pivotal moments in the life of a business.',
  openGraph: {
    title: 'Articles & Insights - Tidal Point Partners',
    description:
      'Practical thinking for owners and leadership teams navigating pivotal moments in the life of a business.',
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
  const articles = await getArticles()

  return (
    <RootLayout>
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
          <div className="space-y-10 sm:space-y-12 lg:space-y-8">
            {articles.map((article) => (
              <FadeIn key={article.href}>
                <article className="grid gap-7 border-b border-tidal-navy/15 pb-10 sm:pb-12 lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)] lg:items-center lg:gap-12 lg:pb-8">
                  {article.featuredImage && (
                    <Link
                      href={article.href}
                      className="group relative block aspect-[4/3] overflow-hidden bg-tidal-navy lg:h-52 lg:aspect-auto"
                      aria-label={`Read ${article.title}`}
                    >
                      <Image
                        src={article.featuredImage}
                        alt="A small leadership team working through a business decision"
                        fill
                        sizes="(min-width: 1024px) 36vw, 100vw"
                        className="object-cover grayscale contrast-[1.05] brightness-[0.78] transition duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-tidal-navy/70 mix-blend-color transition group-hover:bg-tidal-navy/60" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-tidal-navy/45 via-transparent to-tidal-teal/20" />
                    </Link>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase">
                      {article.category && (
                        <span className="text-tidal-teal">{article.category}</span>
                      )}
                      <span className="text-tidal-light">{formatDate(article.date)}</span>
                    </div>
                    <h2 className="mt-4 max-w-[20ch] font-display text-3xl leading-[1.05] font-semibold tracking-[-0.02em] text-tidal-navy sm:text-4xl">
                      <Link href={article.href} className="transition hover:text-tidal-teal">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-tidal-body">
                      {article.description}
                    </p>
                    <Link
                      href={article.href}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal"
                    >
                      Read the article <span className="ml-3" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ArticlesCTA />
    </RootLayout>
  )
}
