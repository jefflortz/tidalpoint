import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description:
    "Expert insights and practical thinking for owner-led business operators in Southeastern Massachusetts. Real advice from someone who's been in the CEO seat.",
  openGraph: {
    title: 'Business Insights & Articles - Coastal Growth Advisors',
    description:
      'Practical advice for owner-operated businesses from Jeff Lortz, a former PE-backed CEO with 25+ years of experience.',
    type: 'website',
  },
}

function ArticlesCTA() {
  return (
    <div className="bg-cga-teal mt-24 sm:mt-32 lg:mt-40 py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Something resonate?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. Bring what&rsquo;s on your mind — we&rsquo;ll
            tell you honestly whether we can help.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export default async function Articles() {
  const articles = await loadArticles()

  return (
    <RootLayout>
      <PageIntro eyebrow="From the Field" title="Practical thinking for business operators.">
        <p>
          Not theory. Not frameworks for their own sake. Writing from someone who
          has run businesses, made the hard calls, and now works with owners
          navigating the same challenges across Southeastern Massachusetts.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex items-center gap-x-3">
                          <div className="flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-xl bg-cga-navy">
                            <span className="text-xs font-bold text-white">JL</span>
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">Jeff Lortz</div>
                            <div className="text-neutral-600">Founder, Coastal Growth Advisors</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ArticlesCTA />
    </RootLayout>
  )
}
