'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const navItems = [
  { id: 'growth', label: 'Growth' },
  { id: 'team', label: 'Team' },
  { id: 'operations', label: 'Operations' },
]

const PIN_OFFSET = 24

export function OutcomesMiniNav() {
  let [activeId, setActiveId] = useState(navItems[0].id)
  let [isPinned, setIsPinned] = useState(false)
  let [navHeight, setNavHeight] = useState(0)
  let sentinelRef = useRef<HTMLDivElement>(null)
  let navRef = useRef<HTMLDivElement>(null)

  // Measure the nav once so we can reserve its height when it goes fixed —
  // the site shell has overflow-hidden on a layout ancestor, which breaks
  // real `position: sticky`, so pinning is emulated with fixed + a sentinel.
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height)
    }
  }, [])

  useEffect(() => {
    let sentinel = sentinelRef.current
    if (!sentinel) return

    let observer = new IntersectionObserver(
      ([entry]) => setIsPinned(!entry.isIntersecting),
      { rootMargin: `-${PIN_OFFSET}px 0px 0px 0px`, threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    let observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    for (let section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hidden lg:block">
      <div ref={sentinelRef} aria-hidden="true" />
      <div style={isPinned ? { height: navHeight } : undefined}>
        <div
          ref={navRef}
          className={clsx(
            isPinned && 'fixed top-6 left-1/2 z-30 -translate-x-1/2',
          )}
        >
          <nav aria-label="Jump to outcome">
            <div className="flex w-fit items-center gap-1 rounded-full bg-white p-1 shadow-md ring-1 ring-tidal-navy/10">
              {navItems.map((item) => {
                let isActive = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={clsx(
                      'rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase transition',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tidal-navy focus-visible:ring-offset-2',
                      isActive
                        ? 'bg-tidal-navy text-white'
                        : 'text-tidal-body hover:text-tidal-navy',
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
