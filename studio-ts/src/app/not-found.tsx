import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export default function NotFound() {
  return (
    <RootLayout>
      <Container className="flex flex-1 items-center py-24 sm:py-32">
        <FadeIn className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="font-display text-5xl font-bold text-tidal-navy sm:text-6xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold text-tidal-navy sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-base text-tidal-body leading-relaxed">
            Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-tidal-navy px-6 py-3 text-sm font-semibold tracking-widest text-white uppercase shadow transition hover:bg-tidal-navy/90"
            >
              Go to the Home Page
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-tidal-navy hover:text-tidal-teal"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
