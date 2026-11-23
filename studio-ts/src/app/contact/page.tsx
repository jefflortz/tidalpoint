import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { JourneyLeadForm } from '@/components/JourneyLeadForm'
import { PageSchema } from '@/components/PageSchema'
import { RootLayout } from '@/components/RootLayout'

type Journey = 'sell' | 'build' | 'valuation'
const description = 'Start a confidential conversation about selling your business, building business value or understanding what your business may be worth.'

export const metadata: Metadata = { title: 'Start a Confidential Conversation', description, alternates: { canonical: '/contact' } }

export default async function Contact({ searchParams }: { searchParams: Promise<{ journey?: string }> }) {
  const requested = (await searchParams).journey
  const journey: Journey = requested === 'build' || requested === 'valuation' ? requested : 'sell'
  return (
    <RootLayout>
      <PageSchema path="/contact" name="Contact Tidal Point Partners" description={description} type="ContactPage" />
      <section className="bg-tidal-warm-white py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tidal-teal">A confidential first step</p>
              <h1 className="mt-5 font-display text-5xl leading-[1] text-tidal-navy sm:text-6xl">Tell us where you are. We&apos;ll help you think through what comes next.</h1>
              <p className="mt-7 text-lg leading-8 text-tidal-body">Choose the journey that best fits today. We will listen, ask practical questions and determine whether there is a responsible path forward.</p>
              <div className="mt-10 border-t border-tidal-navy/15 pt-7 text-sm leading-7 text-tidal-body">
                <p className="font-semibold text-tidal-navy">Tidal Point Partners</p><p>Plymouth, Massachusetts</p>
                <p className="mt-4"><Link className="font-semibold text-tidal-navy underline underline-offset-4" href="mailto:info@tidalpointpartners.com">info@tidalpointpartners.com</Link><br /><Link className="font-semibold text-tidal-navy underline underline-offset-4" href="tel:+17742034525">(774) 203-4525</Link></p>
              </div>
            </div>
            <div className="border border-tidal-navy/15 bg-white p-6 sm:p-9 lg:col-span-7"><JourneyLeadForm initialJourney={journey} /></div>
          </div>
        </Container>
      </section>
    </RootLayout>
  )
}
