import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'Tidal Point Partners works with privately held, owner-operated businesses at pivotal moments — the kinds of businesses and situations we’re built for.',
}

const signals = [
  {
    title: 'Privately Held & Owner-Operated',
    body: 'Founder-led or family-owned businesses where the owner is still the center of gravity for major decisions.',
  },
  {
    title: 'At a Pivotal Moment',
    body: 'Facing a transition, growth inflection, leadership change, or decision that will shape the next chapter of the business.',
  },
  {
    title: 'Established, Not Early-Stage',
    body: 'Real operating history and complexity — not a startup looking for its first customers.',
  },
  {
    title: 'Ready for a Real Conversation',
    body: 'Looking for a trusted outside perspective, not a packaged program or a canned sales process.',
  },
]

function WhoWeServeIntro() {
  return (
    <FadeInStagger>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <FadeIn>
            <p className="text-lg text-cga-body leading-relaxed">
              We work best with privately held businesses navigating a
              pivotal moment — growth, transition, or a decision that
              deserves an experienced, honest outside perspective. If that
              sounds like where you are, we should talk.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {signals.map((signal) => (
              <FadeIn key={signal.title}>
                <Border className="pt-8">
                  <h3 className="font-display text-lg font-bold text-cga-navy">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-cga-body">
                    {signal.body}
                  </p>
                </Border>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </FadeInStagger>
  )
}

function ClientsCTA() {
  return (
    <div className="bg-cga-teal mt-24 sm:mt-32 lg:mt-40 py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recognize your business in this?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. We&rsquo;ll tell you honestly whether
            we&rsquo;re the right fit — and what we&rsquo;d do if we worked together.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export default function Clients() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Who We Work With" title="The businesses we’re built for.">
        <p>
          Tidal Point Partners is built around a specific kind of business
          and a specific kind of moment. Here&rsquo;s what we look for.
        </p>
      </PageIntro>

      <WhoWeServeIntro />

      <ClientsCTA />
    </RootLayout>
  )
}
