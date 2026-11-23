import Link from 'next/link'

import { Container } from '@/components/Container'
import { PrototypeFooter, PrototypeHeader } from '@/components/PrototypeShell'

const outcomes = [
  ['Understand value', 'Develop a grounded view of what may drive or limit buyer interest.'],
  ['Set a 12-month roadmap', 'Prioritize the changes most likely to improve performance, transferability and readiness.'],
  ['Work the plan', 'Use an experienced operating advisor to turn priorities into accountable action.'],
]

const practicalExamples = [
  ['Recurring revenue', 'Strengthen maintenance agreements, service plans and repeat-customer programs that improve revenue visibility.'],
  ['Management depth', 'Clarify roles, decision rights and accountability so the business can operate without every issue returning to the owner.'],
  ['Margins and reporting', 'Improve job costing, pricing discipline, close processes and financial reporting that buyers can understand and trust.'],
  ['Operating systems', 'Document critical workflows, reduce avoidable risk and create a more transferable way of working.'],
]

export default function BuildBusinessValuePrototype() {
  return (
    <main id="main-content" className="bg-tidal-warm-white text-tidal-navy">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
      <PrototypeHeader />
      <section className="border-b border-tidal-navy/10 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tidal-teal">Build Business Value</p>
              <h1 className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Make Your Business Worth More Before You Sell.</h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xl leading-9 text-tidal-body">Prepare your business for a future sale with a practical assessment, a focused improvement roadmap and experienced support through implementation.</p>
              <Link href="#conversation" className="mt-8 inline-flex rounded-sm bg-tidal-navy px-7 py-4 font-semibold text-white">Explore the Build Business Value Program</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tidal-navy py-20 text-white sm:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Three tangible outcomes</p>
          <div className="mt-10 grid gap-px bg-white/20 md:grid-cols-3">
            {outcomes.map(([title, body]) => <article key={title} className="bg-tidal-navy p-8 sm:p-10"><h2 className="font-display text-3xl">{title}</h2><p className="mt-4 leading-7 text-white/70">{body}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">What buyers look for</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">A stronger business is more valuable—and more useful to its owner.</h2></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {['Reliable earnings and cash flow','Less dependence on the owner','Capable leadership and clear accountability','Durable customers and revenue','Documented operating systems','A credible path to future growth'].map(item => <div key={item} className="border-t border-tidal-navy/15 pt-5 font-display text-2xl">{item}</div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tidal-sand py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">The working rhythm</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Assessment, roadmap and accountable implementation.</h2><p className="mt-7 text-lg leading-8 text-tidal-body">The program is designed to identify the few value drivers that matter most, translate them into a 12-month plan and establish a practical cadence for decisions, execution and evidence of progress. It is not generic business coaching and does not guarantee a valuation increase or future sale.</p></div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Practical work for trades and services</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Tangible improvements, not generic coaching.</h2></div>
            <div className="grid gap-px bg-tidal-navy/15 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {practicalExamples.map(([title, body]) => <article key={title} className="bg-tidal-warm-white p-7"><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 leading-7 text-tidal-body">{body}</p></article>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="conversation" className="bg-white py-16 sm:py-24">
        <Container>
          <div className="border border-tidal-navy/15 p-8 sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Planning ahead</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Build a business that is ready when you are.</h2></div><Link href="/contact?journey=build" className="mt-8 inline-flex rounded-sm bg-tidal-navy px-7 py-4 font-semibold text-white lg:mt-0">Let&apos;s Talk About Building Business Value</Link></div>
        </Container>
      </section>
      <PrototypeFooter />
    </main>
  )
}
