import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { PageSchema } from '@/components/PageSchema'

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
        Schedule a Conversation
      </p>
      {/* Temporary CTA — swap for the Tidal Point Partners HubSpot form once available */}
      <div className="mt-6">
        <Link
          href="mailto:info@tidalpointpartners.com"
          className="inline-flex items-center rounded-full bg-tidal-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-tidal-navy/90"
        >
          Email info@tidalpointpartners.com
        </Link>
      </div>
      <p className="mt-4 text-sm text-tidal-light">
        No commitment. No pitch deck. Just a conversation with someone
        who&rsquo;s been in the seat.
      </p>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-tidal-navy">
        Based in Plymouth, MA
      </h2>
      <p className="mt-6 text-base text-tidal-body leading-relaxed">
        Tidal Point Partners works with businesses across the South Shore,
        South Coast, and Cape Cod as part of our broader{' '}
        <Link
          href="/locations/southeastern-new-england"
          className="font-semibold text-tidal-navy underline decoration-tidal-teal/60 underline-offset-4 transition hover:decoration-tidal-navy"
        >
          Southeastern New England practice
        </Link>
        . Engagements are structured around your calendar — in person where it
        makes sense, remote where it doesn&rsquo;t.
      </p>

      <div className="mt-10 rounded-2xl bg-tidal-sand p-6">
        <p className="font-semibold text-tidal-navy">Plymouth, MA 02360</p>
        <p className="mt-1 text-sm text-tidal-light">
          Serving Southeastern Massachusetts
        </p>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-bold text-tidal-navy">
          Reach us directly
        </h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-tidal-navy">Email</dt>
            <dd>
              <Link
                href="mailto:info@tidalpointpartners.com"
                className="text-tidal-teal hover:text-tidal-teal/80"
              >
                info@tidalpointpartners.com
              </Link>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-tidal-navy">Phone</dt>
            <dd>
              <Link
                href="tel:+17742034525"
                className="text-tidal-teal hover:text-tidal-teal/80"
              >
                (774) 203-4525
              </Link>
            </dd>
          </div>
        </dl>
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    'Begin a substantive conversation about your business with an experienced Operating Partner serving Southeastern New England.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Schedule a Conversation - Tidal Point Partners',
    description:
      'Begin a substantive conversation about your business with an experienced Operating Partner serving Southeastern New England.',
    url: '/contact',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <RootLayout>
      <PageSchema
        path="/contact"
        name="Contact Tidal Point Partners"
        description="Begin a substantive conversation about your business with an experienced Operating Partner serving Southeastern New England."
        type="ContactPage"
      />
      <PageIntro eyebrow="Contact" title="Let’s talk about your business.">
        <p>
          Bring the opportunity, challenge or decision carrying the most
          consequence. We&rsquo;ll listen carefully, offer a point of view and
          decide together whether there is a meaningful path forward.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
