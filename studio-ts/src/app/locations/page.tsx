import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { getIndexableLocationSummaries } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Operating Partner Locations',
  description:
    'Explore Tidal Point Partners’ regional Operating Partner support for established privately held businesses across Southeastern New England.',
  alternates: { canonical: '/locations' },
}

export default async function LocationsPage() {
  const locations = await getIndexableLocationSummaries()

  return (
    <RootLayout>
      <section className="bg-tidal-navy py-20 sm:py-28 lg:py-36">
        <Container>
          <FadeIn className="max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Where we work
            </p>
            <h1 className="lg:text-8xl mt-6 font-display text-5xl leading-[0.98] font-medium tracking-tight text-white sm:text-7xl">
              Operating partnership, close to the business.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72">
              Tidal Point works with owners and leadership teams across
              Southeastern New England, bringing experienced judgment and
              sustained follow-through to pivotal business moments.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
        <Container>
          <FadeIn className="grid gap-8 border-b border-tidal-navy/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                Regional perspective
              </p>
              <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
                Local context. Senior operating perspective.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-tidal-body lg:col-span-4 lg:col-start-9">
              Each regional page reflects the industries, operating conditions
              and business communities that shape the work—not simply a
              different place name.
            </p>
          </FadeIn>

          <FadeInStagger className="grid lg:grid-cols-2">
            {locations.map((location, index) => (
              <FadeIn
                key={location._id}
                className={`border-b border-tidal-navy/12 py-10 sm:py-12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:border-l lg:pl-12'}`}
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                  Operating Partner support
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight font-medium text-tidal-navy sm:text-4xl">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="transition hover:text-tidal-teal"
                  >
                    {location.regionName}
                  </Link>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-tidal-body">
                  {location.heroIntroduction}
                </p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="mt-7 inline-flex text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal"
                >
                  Explore {location.regionName}{' '}
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>
    </RootLayout>
  )
}
