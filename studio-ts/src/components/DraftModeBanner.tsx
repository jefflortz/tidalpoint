'use client'

import {useIsPresentationTool} from 'next-sanity/hooks'

export function DraftModeBanner() {
  const isPresentationTool = useIsPresentationTool()

  return (
    <div className="fixed right-4 bottom-4 z-[100] flex items-center gap-3 rounded-full border border-white/20 bg-tidal-navy px-4 py-2 text-sm text-white shadow-xl">
      <span>Draft preview</span>
      {!isPresentationTool && (
        <a className="underline underline-offset-4" href="/api/draft-mode/disable">
          Exit preview
        </a>
      )}
    </div>
  )
}
