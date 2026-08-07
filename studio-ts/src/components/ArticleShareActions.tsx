'use client'

import { useEffect, useState } from 'react'

export function ArticleShareActions({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 2200)
    return () => window.clearTimeout(timeout)
  }, [copied])

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
  }

  return (
    <div>
      <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-tidal-navy/50 uppercase">
        Share this perspective
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="border border-tidal-navy/20 px-4 py-2 text-sm font-semibold text-tidal-navy transition hover:border-tidal-navy hover:bg-white"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
          className="border border-tidal-navy/20 px-4 py-2 text-sm font-semibold text-tidal-navy transition hover:border-tidal-navy hover:bg-white"
        >
          Email
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="min-w-[6.25rem] border border-tidal-navy/20 px-4 py-2 text-sm font-semibold text-tidal-navy transition hover:border-tidal-navy hover:bg-white"
          aria-live="polite"
        >
          {copied ? 'Link copied' : 'Copy link'}
        </button>
      </div>
    </div>
  )
}
