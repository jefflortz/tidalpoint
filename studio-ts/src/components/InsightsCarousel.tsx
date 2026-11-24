'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import type { ArticleSummary } from '@/sanity/content'

export function InsightsCarousel({ articles }: { articles: ArticleSummary[] }) {
  const railRef = useRef<HTMLDivElement>(null)

  function move(direction: -1 | 1) {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: direction * rail.clientWidth * 0.82, behavior: 'smooth' })
  }

  if (articles.length === 0) return null

  return (
    <section aria-labelledby="homepage-insights-heading" className="bg-tidal-warm-white py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 border-b border-tidal-navy/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">Perspectives</p>
            <h2 id="homepage-insights-heading" className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Insights for building—and realizing—business value.
            </h2>
          </div>
          <Link href="/articles" className="shrink-0 text-base font-semibold text-tidal-navy underline decoration-tidal-teal-dark/40 underline-offset-8 transition hover:decoration-tidal-navy">
            View All Insights
          </Link>
        </div>

        <div
          ref={railRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Featured insights"
        >
          {articles.map((article) => (
            <article key={article.href} className="group flex min-w-[86%] snap-start flex-col border border-tidal-navy/15 bg-white sm:min-w-[47%] lg:min-w-[calc((100%-3rem)/3)]">
              <Link href={article.href} className="relative block aspect-video overflow-hidden bg-tidal-navy" aria-label={`Read ${article.title}`}>
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 86vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
                  {article.category && <span className="text-tidal-teal-dark">{article.category}</span>}
                  <span className="text-tidal-body">{formatDate(article.date)}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl leading-[1.08]">
                  <Link href={article.href} className="transition group-hover:text-tidal-teal-dark">{article.title}</Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-7 text-tidal-body">{article.description}</p>
                <Link href={article.href} className="mt-auto pt-7 text-base font-semibold text-tidal-navy underline decoration-tidal-teal-dark/40 underline-offset-8 transition group-hover:decoration-tidal-navy">
                  Read Insight
                </Link>
              </div>
            </article>
          ))}
        </div>

        {articles.length > 3 && (
          <div className="mt-5 flex justify-end gap-3" aria-label="Insights carousel controls">
            <button type="button" onClick={() => move(-1)} className="border border-tidal-navy/25 bg-white px-5 py-3 text-sm font-semibold text-tidal-navy transition hover:border-tidal-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tidal-navy">
              Previous
            </button>
            <button type="button" onClick={() => move(1)} className="border border-tidal-navy bg-tidal-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-tidal-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tidal-navy">
              Next
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
