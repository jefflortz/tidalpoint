import { type Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
        Schedule a Free Consultation
      </p>
      <div className="mt-6">
        <Script
          src="https://js.hsforms.net/forms/embed/46259123.js"
          strategy="afterInteractive"
          defer
        />
        <div
          className="hs-form-frame"
          data-region="na1"
          data-form-id="b7e9d6a7-45c2-496c-9a4f-45ac32630091"
          data-portal-id="46259123"
        />
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
        Coastal Growth Advisors works with businesses across the South Shore,
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
                href="mailto:jeff@coastalgrowthadvisor.com"
                className="text-cga-teal hover:text-cga-teal/80"
              >
                jeff@coastalgrowthadvisor.com
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
    title: 'Free Consultation - Coastal Growth Advisors',
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
