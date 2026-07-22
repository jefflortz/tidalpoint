import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
        Schedule a Free Consultation
      </p>
      {/* Temporary CTA — swap for the Tidal Point Partners HubSpot form once available */}
      <div className="mt-6">
        <Link
          href="mailto:jeff@tidalpointpartners.com"
          className="inline-flex items-center rounded-full bg-cga-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-cga-navy/90"
        >
          Email jeff@tidalpointpartners.com
        </Link>
      </div>
      <p className="mt-4 text-sm text-cga-light">
        No commitment. No pitch deck. Just a conversation with someone
        who&rsquo;s been in the seat.
      </p>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-cga-navy">
        Based in Plymouth, MA
      </h2>
      <p className="mt-6 text-base text-cga-body leading-relaxed">
        Tidal Point Partners works with businesses across the South Shore,
        South Coast, and Cape Cod. Engagements are structured around your
        calendar — in person where it makes sense, remote where it doesn&rsquo;t.
      </p>

      <div className="mt-10 rounded-2xl bg-cga-sand p-6">
        <p className="font-semibold text-cga-navy">Plymouth, MA 02360</p>
        <p className="mt-1 text-sm text-cga-light">
          Serving Southeastern Massachusetts
        </p>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-bold text-cga-navy">
          Email us directly
        </h2>
        <dl className="mt-6 text-sm">
          <div>
            <dt className="font-semibold text-cga-navy">Jeff Lortz</dt>
            <dd>
              <Link
                href="mailto:jeff@tidalpointpartners.com"
                className="text-cga-teal hover:text-cga-teal/80"
              >
                jeff@tidalpointpartners.com
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
    'Schedule your free 60-minute consultation with Jeff Lortz. Honest advice for owner-led businesses in Southeastern Massachusetts. It\'s a real conversation, not a sales call.',
  openGraph: {
    title: 'Free Consultation - Tidal Point Partners',
    description:
      'Ready to discuss your biggest business challenge? Schedule a free consultation with an ex-PE CEO.',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Let’s talk about your business.">
        <p>
          The first conversation is free — and it’s a real conversation, not a
          sales call. Bring your biggest challenge. We’ll tell you honestly
          whether we can help.
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
