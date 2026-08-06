'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

import { formatDate } from '@/lib/formatDate'
import { type ArticleSummary } from '@/sanity/content'

export function ArticleCarousel({ articles }: { articles: ArticleSummary[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canMoveBack, setCanMoveBack] = useState(false)
  const [canMoveForward, setCanMoveForward] = useState(articles.length > 2)

  const updateControls = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    setCanMoveBack(track.scrollLeft > 4)
    setCanMoveForward(track.scrollLeft < track.scrollWidth - track.clientWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updateControls()
    track.addEventListener('scroll', updateControls, { passive: true })
    window.addEventListener('resize', updateControls)

    return () => {
      track.removeEventListener('scroll', updateControls)
      window.removeEventListener('resize', updateControls)
    }
  }, [updateControls])

  function move(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="border-t border-tidal-navy/15 pt-8 lg:pt-10">
      <div className="mb-6 flex items-center justify-between gap-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-tidal-navy/55 uppercase">
          Recent perspectives
        </p>
        <div className="flex items-center gap-2" aria-label="Article carousel controls">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={!canMoveBack}
            aria-label="Show previous articles"
            className="flex size-10 items-center justify-center border border-tidal-navy/20 text-tidal-navy transition hover:border-tidal-navy disabled:cursor-default disabled:opacity-30"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={!canMoveForward}
            aria-label="Show next articles"
            className="flex size-10 items-center justify-center border border-tidal-navy/20 text-tidal-navy transition hover:border-tidal-navy disabled:cursor-default disabled:opacity-30"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        aria-label="Recent articles"
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <article
            key={article._id}
            className="group grid w-full shrink-0 snap-start gap-6 sm:grid-cols-[11rem_1fr] sm:items-center md:w-[calc(50%-1rem)] md:grid-cols-1 md:items-start lg:grid-cols-[13rem_1fr] lg:items-center"
          >
            <Link
              href={article.href}
              className="relative block aspect-video overflow-hidden bg-tidal-navy"
              aria-label={`Read ${article.title}`}
            >
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                fill
                sizes="(min-width: 1024px) 13rem, (min-width: 768px) 25vw, (min-width: 640px) 11rem, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
              />
            </Link>
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                {article.category ?? 'Perspective'}
                <span className="px-2 text-tidal-navy/25">/</span>
                {formatDate(article.date)}
              </p>
              <h3 className="mt-3 max-w-[22ch] font-display text-2xl leading-[1.08] font-medium tracking-tight text-tidal-navy lg:text-3xl">
                <Link href={article.href} className="transition group-hover:text-tidal-teal">
                  {article.title}
                </Link>
              </h3>
              <Link
                href={article.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-tidal-navy transition group-hover:text-tidal-teal"
              >
                Read article <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
