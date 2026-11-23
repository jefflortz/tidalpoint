import Link from 'next/link'

import { Container } from '@/components/Container'
import { PrototypeFooter, PrototypeHeader } from '@/components/PrototypeShell'

const factors = [
  ['Earnings and cash flow', 'Buyers assess the quality, reliability and transferability of financial performance.'],
  ['Owner dependence', 'A business that relies on one person carries transition and continuity risk.'],
  ['Customers and revenue', 'Concentration, recurrence and retention can materially shape buyer interest.'],
  ['People and systems', 'Leadership depth, documented processes and operating discipline support transferability.'],
  ['Risk and growth', 'Legal, operational and market risks are weighed against credible future opportunity.'],
  ['Market and deal structure', 'Industry conditions, buyer type and transaction terms can change the result.'],
]

export default function BusinessWorthPrototype() {
  return (
    <main id="main-content" className="bg-tidal-warm-white text-tidal-navy">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
      <PrototypeHeader />
      <section className="border-b border-tidal-navy/10 py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tidal-teal">Business Valuation Guide</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl font-medium leading-[0.98] tracking-tight sm:text-8xl">What Is My Business Worth?</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-tidal-body">There is no single multiple that answers the question. Learn how buyers commonly evaluate privately held businesses, which operating factors influence interest and what you can do next.</p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">What influences business value</p>
          <div className="mt-10 grid gap-px bg-tidal-navy/15 md:grid-cols-2 lg:grid-cols-3">
            {factors.map(([title, body]) => <article key={title} className="bg-white p-8"><h2 className="font-display text-3xl">{title}</h2><p className="mt-4 leading-7 text-tidal-body">{body}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-tidal-sand py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">A useful starting point</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Indicative discussion is not a formal appraisal.</h2></div>
            <div className="space-y-6 text-lg leading-8 text-tidal-body lg:col-span-6 lg:col-start-7"><p>A preliminary conversation can help an owner understand likely value drivers, important risks and the information a buyer may request. It should not be represented as a certified valuation, fairness opinion or formal appraisal unless that work is separately scoped and performed by an appropriately qualified provider.</p><p>Methods differ by company, industry, size, earnings quality and transaction context. The most responsible next step depends on whether you are ready to sell or planning ahead.</p></div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bg-tidal-navy p-8 text-white sm:p-12"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Ready to sell</p><h2 className="mt-5 font-display text-4xl leading-tight">Discuss business value in the context of a confidential sale.</h2><p className="mt-5 leading-7 text-white/70">Explore buyer interest, readiness and the path to market with operator-led business sale representation.</p><Link href="/sell-your-business" className="mt-8 inline-flex rounded-sm bg-white px-6 py-3.5 font-semibold text-tidal-navy">Explore Selling Your Business</Link></article>
            <article className="border border-tidal-navy/15 bg-white p-8 sm:p-12"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Planning ahead</p><h2 className="mt-5 font-display text-4xl leading-tight">Identify the changes that could make your business stronger.</h2><p className="mt-5 leading-7 text-tidal-body">Assess value drivers and risks, create a focused 12-month roadmap and prepare for a future sale without rushing into the market.</p><Link href="/build-business-value" className="mt-8 inline-flex rounded-sm bg-tidal-navy px-6 py-3.5 font-semibold text-white">Explore Building Business Value</Link></article>
          </div>
        </Container>
      </section>
      <PrototypeFooter />
    </main>
  )
}
