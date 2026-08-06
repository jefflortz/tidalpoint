import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { type ArticleDocument, type ArticleSummary } from '@/sanity/content'

function estimateReadingTime() {
  return '8 min read'
}

function ArticleSchema({ article }: { article: ArticleDocument }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
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
    image: article.featuredImage,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function AuthorPortrait({ size = 'large' }: { size?: 'small' | 'large' }) {
  return (
    <div
      className={
        size === 'large'
          ? 'relative h-20 w-20 flex-none overflow-hidden rounded-full'
          : 'relative h-10 w-10 flex-none overflow-hidden rounded-full'
      }
    >
      <Image
        src="/images/people/jeff-lortz.jpg"
        alt="Jeff Lortz"
        fill
        sizes={size === 'large' ? '80px' : '40px'}
        className="object-cover object-[72%_38%]"
      />
    </div>
  )
}

function AuthorBio({ article }: { article: ArticleDocument }) {
  return (
    <aside className="mx-auto max-w-[46rem] border-t border-tidal-navy/15 pt-10 sm:pt-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <AuthorPortrait />
        <div>
          <p className="font-display text-2xl font-semibold text-tidal-navy">
            {article.author.name}
          </p>
          <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
            {article.author.role}
          </p>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-tidal-body">
            {article.author.shortBio}
          </p>
          <Link
            href={article.author.profileUrl ?? '/team/jeff-lortz'}
            className="mt-4 inline-flex text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal"
          >
            View {article.author.name.split(' ')[0]}&rsquo;s profile <span className="ml-2" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}

function ArticleCTA({ article }: { article: ArticleDocument }) {
  const cta = article.cta
  return (
    <section className="bg-tidal-navy py-20 sm:py-24">
      <Container>
        <FadeIn className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-tidal-teal uppercase">
              {cta?.eyebrow ?? 'A useful next conversation'}
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] text-tidal-warm-white sm:text-5xl">
              {cta?.title ?? 'Would an experienced operating perspective help?'}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              {cta?.body ?? 'Bring what is on your mind. We will tell you honestly whether we can help.'}
            </p>
          </div>
          <Link
            href={cta?.buttonHref ?? '/contact'}
            className="inline-flex w-fit items-center border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-tidal-navy"
          >
            {cta?.buttonLabel ?? 'Start a conversation'} <span className="ml-3" aria-hidden="true">&rarr;</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  )
}

export default async function ArticleWrapper({
  article,
  moreArticles,
  children,
}: {
  article: ArticleDocument
  moreArticles: ArticleSummary[]
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <ArticleSchema article={article} />

      <article className="pt-4 sm:pt-6 lg:pt-8">
        <header className="relative overflow-hidden bg-tidal-navy">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <Container className="relative py-10 sm:py-14 lg:py-16">
            <FadeIn>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.88fr)] lg:items-center lg:gap-16">
                <div className="flex flex-col justify-between py-1 lg:py-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold tracking-[0.18em] uppercase">
                      {article.category && (
                        <span className="text-tidal-teal">{article.category}</span>
                      )}
                      <span className="h-px w-8 bg-white/35" aria-hidden="true" />
                      <time className="text-white/60" dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                    </div>
                    <h1 className="mt-7 max-w-[13ch] font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.035em] text-tidal-warm-white sm:text-[3.6rem] lg:text-[4rem]">
                      {article.title}
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6 lg:mt-14">
                    <AuthorPortrait size="small" />
                    <div>
                      <p className="text-sm font-semibold text-white">Jeff Lortz</p>
                      <p className="mt-0.5 text-xs text-white/55">
                        Founder, Tidal Point Partners &middot; {estimateReadingTime()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[29rem]">
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-tidal-navy/35 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-tidal-teal/15 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-tidal-navy/35 via-transparent to-tidal-navy/10 lg:bg-gradient-to-r lg:from-tidal-navy/30 lg:via-transparent lg:to-tidal-navy/10" />
                </div>
              </div>
            </FadeIn>
          </Container>
        </header>

        <Container className="py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <MDXComponents.wrapper className="article-content *:max-w-[46rem]!">
              <div className="typography">{children}</div>
            </MDXComponents.wrapper>

            {article.sources && article.sources.length > 0 && (
              <div className="mx-auto mt-16 max-w-[46rem] border-t border-tidal-navy/15 pt-10">
                <h2 className="font-display text-3xl font-semibold text-tidal-navy">Sources &amp; further reading</h2>
                <ol className="mt-6 space-y-4 text-sm leading-6 text-tidal-body">
                  {article.sources.map((source) => (
                    <li key={source._key}>
                      {source.url ? <a href={source.url} className="font-semibold text-tidal-navy underline underline-offset-4">{source.title}</a> : <span className="font-semibold text-tidal-navy">{source.title}</span>}
                      {source.publisher && <span> — {source.publisher}</span>}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </FadeIn>

          <FadeIn>
            <div className="mt-20 sm:mt-24">
              <AuthorBio article={article} />
            </div>
          </FadeIn>
        </Container>
      </article>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-8 sm:mt-12"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ArticleCTA article={article} />
    </RootLayout>
  )
}
