'use client'

import Image from 'next/image'
import Link from 'next/link'
import {PortableText, type PortableTextComponents} from 'next-sanity'

import {imageUrl} from '@/sanity/content'

const components: PortableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const href = value?.href ?? '#'
      if (href.startsWith('/')) return <Link href={href}>{children}</Link>
      return <a href={href} target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noreferrer' : undefined}>{children}</a>
    },
  },
  types: {
    figure: ({value}) => (
      <figure>
        <div className="relative aspect-[16/10] overflow-hidden bg-tidal-sand">
          <Image src={imageUrl(value, 1400, 875)} alt={value.alt ?? ''} fill sizes="(min-width: 768px) 46rem, 100vw" className="object-cover" />
        </div>
        {value.caption && <figcaption className="mt-3 text-sm text-tidal-light">{value.caption}</figcaption>}
      </figure>
    ),
    callout: ({value}) => (
      <aside className="my-10 border-l-2 border-tidal-teal bg-tidal-sand/25 px-6 py-6">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-tidal-teal uppercase">{value.eyebrow}</p>
        <p className="mt-3 font-display text-2xl leading-snug text-tidal-navy">{value.body}</p>
      </aside>
    ),
    diagnostic: ({value}) => {
      const questions = Array.isArray(value.questions) ? value.questions.filter(Boolean) : []
      return (
        <aside className="my-10 bg-tidal-navy px-7 py-8 text-white">
          <p className="font-display text-2xl text-white">{value.title || 'Questions to consider'}</p>
          {questions.length > 0 && (
            <div
              role="list"
              className="mt-6 border-t border-white/15 text-base text-white/80"
            >
              {questions.map((question: string, index: number) => (
                <div
                  role="listitem"
                  key={question}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-b border-white/15 py-4"
                >
                  <span aria-hidden="true" className="pt-0.5 text-xs font-semibold tracking-[0.12em] text-tidal-teal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-7">{question}</span>
                </div>
              ))}
            </div>
          )}
        </aside>
      )
    },
  },
}

export function PortableArticleBody({value}: {value: Array<Record<string, unknown>>}) {
  return <PortableText value={value} components={components} />
}
