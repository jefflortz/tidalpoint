import Image from 'next/image'
import Link from 'next/link'

import { ArticleShareActions } from '@/components/ArticleShareActions'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
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
        className="object-cover object-[61%_42%]"
      />
    </div>
  )
}

function ArticleClosing({
  article,
  moreArticles,
}: {
  article: ArticleDocument
  moreArticles: ArticleSummary[]
}) {
  const articleUrl = `https://tidalpointpartners.com${article.href}`
  const responseHref = `mailto:info@tidalpointpartners.com?subject=${encodeURIComponent(`Regarding: ${article.title}`)}`
  const cta = article.cta

  return (
    <section className="bg-tidal-warm-white pt-8 pb-20 sm:pt-12 sm:pb-28">
      <Container>
        <FadeIn className="mx-auto max-w-5xl border-y border-tidal-navy/15">
          <div className="grid gap-10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <AuthorPortrait />
              <div>
                <p className="font-display text-2xl font-medium text-tidal-navy">
                  Written by {article.author.name}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-tidal-body">
                  {article.author.shortBio}
                </p>
                <Link
                  href={article.author.profileUrl ?? '/team/jeff-lortz'}
                  className="mt-3 inline-flex text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal"
                >
                  View profile <span className="ml-2" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <ArticleShareActions title={article.title} url={articleUrl} />
          </div>

          <div className="grid border-t border-tidal-navy/15 lg:grid-cols-12">
            {moreArticles.length > 0 && (
              <div className="py-10 lg:col-span-7 lg:pr-12">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                  Continue reading
                </p>
                <div className="mt-6 grid gap-7 sm:grid-cols-2">
                  {moreArticles.slice(0, 2).map((item) => (
                    <Link key={item._id} href={item.href} className="group border-t border-tidal-navy/15 pt-5">
                      <time dateTime={item.date} className="text-xs text-tidal-body">
                        {formatDate(item.date)}
                      </time>
                      <h3 className="mt-3 font-display text-2xl leading-tight font-medium text-tidal-navy transition group-hover:text-tidal-teal">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm font-semibold text-tidal-navy">
                        Read article <span className="ml-2" aria-hidden="true">&rarr;</span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white px-7 py-10 ring-1 ring-tidal-navy/10 lg:col-span-5 lg:px-10">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                Respond privately
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight font-medium text-tidal-navy">
                What are you seeing in your business?
              </h3>
              <p className="mt-4 text-sm leading-6 text-tidal-body">
                If this perspective raised a question, send {article.author.name.split(' ')[0]} a note. A thoughtful exchange is more useful than a public comment thread.
              </p>
              <a
                href={responseHref}
                className="mt-7 inline-flex bg-tidal-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-tidal-teal"
              >
                Respond to this perspective <span className="ml-3" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-14 grid max-w-5xl gap-8 bg-tidal-navy px-8 py-10 text-white sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              {cta?.eyebrow ?? 'A useful next conversation'}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium text-tidal-warm-white">
              {cta?.title ?? 'Would an experienced operating perspective help?'}
            </h2>
            {cta?.body && <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">{cta.body}</p>}
          </div>
          <Link
            href={cta?.buttonHref ?? '/contact'}
            className="inline-flex w-fit border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-tidal-navy"
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
  const hasLongTitle = article.title.length > 58

  return (
    <RootLayout>
      <ArticleSchema article={article} />

      <article className="pt-4 sm:pt-6 lg:pt-8">
        <header className="relative isolate min-h-[40rem] overflow-hidden bg-tidal-navy text-white sm:min-h-[44rem]">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            sizes="100vw"
            className="-z-30 scale-105 object-cover brightness-[1.28] saturate-[0.9] blur-md"
            priority
          />
          <div className="absolute inset-0 -z-20 bg-tidal-navy/55" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,39,62,.94)_0%,rgba(15,39,62,.72)_52%,rgba(15,39,62,.22)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-tidal-navy to-transparent" />
          <Container className="relative flex min-h-[40rem] items-end py-14 sm:min-h-[44rem] sm:py-18 lg:py-20">
            <FadeIn>
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold tracking-[0.18em] uppercase">
                  {article.category && (
                    <span className="text-tidal-teal">{article.category}</span>
                  )}
                  <span className="h-px w-8 bg-white/35" aria-hidden="true" />
                  <time className="text-white/65" dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  <span className="text-white/30" aria-hidden="true">/</span>
                  <span className="text-white/65">{estimateReadingTime()}</span>
                </div>
                <h1
                  className={`mt-8 font-display text-5xl leading-[0.95] font-medium tracking-[-0.035em] text-tidal-warm-white sm:text-7xl ${
                    hasLongTitle ? 'max-w-[16ch] lg:text-7xl' : 'max-w-[14ch] lg:text-8xl'
                  }`}
                >
                  {article.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                  {article.description}
                </p>
                <div className="mt-10 flex items-center gap-4 border-t border-white/18 pt-7">
                  <AuthorPortrait size="small" />
                  <div>
                    <p className="text-sm font-semibold text-white">Jeff Lortz</p>
                    <p className="mt-0.5 text-xs text-white/55">
                      Founder &amp; Operating Partner
                    </p>
                  </div>
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

        </Container>
      </article>

      <ArticleClosing article={article} moreArticles={moreArticles} />
    </RootLayout>
  )
}
