import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { PageSchema } from '@/components/PageSchema'
import { RootLayout } from '@/components/RootLayout'

const description = 'Compare Tidal Point Partners’ business sale advisory and business value creation services for owners of privately held businesses.'
export const metadata: Metadata = { title: 'How We Help Business Owners', description, alternates: { canonical: '/services' } }

export default function Services() {
  return <RootLayout><PageSchema path="/services" name="How We Help" description={description} />
    <section className="bg-tidal-warm-white py-16 sm:py-24"><Container><p className="text-sm font-semibold uppercase tracking-[.18em] text-tidal-teal">How We Help</p><h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1] text-tidal-navy sm:text-7xl">Choose the path that fits where you are today.</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-tidal-body">Prepare for a confidential sale now, or strengthen the business before the market determines its value.</p></Container></section>
    <section className="py-12 sm:py-20"><Container><div className="grid gap-6 lg:grid-cols-2"><article className="bg-tidal-navy p-8 text-white sm:p-12"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Ready to sell</p><h2 className="mt-5 font-display text-5xl">Sell Your Business</h2><p className="mt-6 text-lg leading-8 text-white/70">Operator-led positioning, active buyer identification, confidential outreach, buyer evaluation, negotiation and transaction support.</p><Link href="/sell-your-business" className="mt-8 inline-flex bg-white px-6 py-4 font-semibold text-tidal-navy">Explore Business Sale Advisory</Link></article><article className="border border-tidal-navy/15 bg-white p-8 sm:p-12"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Planning ahead</p><h2 className="mt-5 font-display text-5xl">Build Business Value</h2><p className="mt-6 text-lg leading-8 text-tidal-body">A Business Value Assessment, practical 12-month roadmap, advisor-supported implementation and progress measurement.</p><Link href="/build-business-value" className="mt-8 inline-flex bg-tidal-navy px-6 py-4 font-semibold text-white">Explore Value Creation</Link></article></div></Container></section>
    <span id="growth" /><span id="team" /><span id="operations" />
  </RootLayout>
}
