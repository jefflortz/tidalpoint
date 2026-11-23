import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PrototypeFooter, PrototypeHeader } from '@/components/PrototypeShell'

const process = [
  ['Prepare and position', 'Understand the owner’s goals, assess readiness and explain the business through the value drivers buyers care about.'],
  ['Identify and approach', 'Develop a focused buyer profile, use approved network access and actively identify additional prospective buyers.'],
  ['Verify real interest', 'Confirm strategic fit, acquisition intent and financial capacity before the process consumes the owner’s time.'],
  ['Negotiate and close', 'Support offers, negotiation, diligence and the decisions required to reach a responsible transaction.'],
]

export default function SellBusinessPrototype() {
  return (
    <main id="main-content" className="bg-tidal-warm-white text-tidal-navy">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
      <PrototypeHeader />
      <section className="overflow-hidden border-b border-tidal-navy/10 bg-tidal-warm-white">
        <Container>
          <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tidal-teal">Sell Your Business</p>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">We Don&apos;t Just List Your Business. We Find the Right Buyers.</h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-tidal-body">Looking for a business broker who does more than put your company on a listing website? Tidal Point Partners helps owners prepare for a sale, actively identify prospective buyers and guide the transaction from start to finish.</p>
              <Link href="#conversation" className="mt-9 inline-flex rounded-sm bg-tidal-navy px-7 py-4 text-base font-semibold text-white">Let&apos;s Talk About Selling Your Business</Link>
              <p className="mt-5 max-w-xl text-sm leading-6 text-tidal-light">A confidential first conversation. No obligation and no guarantee of buyer interest or transaction outcome.</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
              <Image src="/images/prototype/sell-advisory.png" alt="Business owner reviewing a confidential sale plan with an experienced advisor" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[38%_50%]" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tidal-navy py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">The buyer-search difference</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">A listing waits. A search goes to work.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              <div className="border-l border-white/20 pl-5"><h3 className="font-display text-2xl">Identify</h3><p className="mt-3 text-sm leading-6 text-white/65">Map likely strategic and financial buyers beyond inbound interest.</p></div>
              <div className="border-l border-white/20 pl-5"><h3 className="font-display text-2xl">Approach</h3><p className="mt-3 text-sm leading-6 text-white/65">Conduct discreet outreach using an approved, confidential process.</p></div>
              <div className="border-l border-white/20 pl-5"><h3 className="font-display text-2xl">Qualify</h3><p className="mt-3 text-sm leading-6 text-white/65">Assess acquisition intent and financial capacity before advancing.</p></div>
            </div>
          </div>
          <div className="mt-10 border border-amber-200/35 bg-amber-100/10 p-5 text-sm leading-6 text-amber-50">
            <strong>Verification placeholder:</strong> buyer-network access, qualification standards and any financing language require owner and legal approval before publication.
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Operator-led representation</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Your business deserves to be understood before it is marketed.</h2>
            <p className="mt-7 text-lg leading-8 text-tidal-body">Buyers do not only evaluate revenue. They look at the quality of earnings, customer concentration, owner dependency, leadership, systems, risk and the path to future growth. We bring operating experience to the way those facts are assessed, improved where practical and presented.</p>
          </div>
          <div className="mt-14 grid gap-px bg-tidal-navy/15 md:grid-cols-2">
            {process.map(([title, body]) => (
              <article key={title} className="bg-white p-8 sm:p-10"><h3 className="font-display text-3xl font-semibold">{title}</h3><p className="mt-4 text-base leading-7 text-tidal-body">{body}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-tidal-sand py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">What you can expect</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">A controlled process built around the owner.</h2></div>
            <div className="space-y-8 lg:col-span-6 lg:col-start-7">
              {[
                ['Confidentiality first', 'Outreach and information sharing follow an approved process designed to protect the business and the owner’s priorities.'],
                ['Real preparation', 'We identify gaps and assemble the information needed to support a credible buyer conversation.'],
                ['Experienced judgment', 'An experienced operator stays involved as terms, diligence questions and consequential decisions emerge.'],
                ['Clear communication', 'You know where the process stands, what comes next and which decisions require your attention.'],
              ].map(([title, body]) => <div key={title} className="border-t border-tidal-navy/15 pt-6"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-base leading-7 text-tidal-body">{body}</p></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Common questions</p><h2 className="mt-5 font-display text-5xl leading-tight">Start with what matters most.</h2></div>
            <div className="space-y-4 lg:col-span-6 lg:col-start-7">
              {[
                ['How do you protect confidentiality?', 'The final process will describe approval points, information controls and outreach practices after legal review.'],
                ['How do you determine what my business may be worth?', 'We begin with the financial and operating factors that influence buyer interest. Any formal valuation scope and limitations will be stated clearly.'],
                ['What if I am not ready to sell yet?', 'The Build Business Value program is designed for owners who want to improve readiness and reduce risk before entering a sale process.'],
              ].map(([question, answer]) => <details key={question} className="border border-tidal-navy/15 bg-white p-6"><summary className="cursor-pointer font-display text-xl font-semibold">{question}</summary><p className="mt-4 text-base leading-7 text-tidal-body">{answer}</p></details>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="conversation" className="bg-tidal-navy py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8"><p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">A confidential conversation</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">You built the business carefully. The sale process should be handled the same way.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Tell us what you are considering and when. We will listen, offer an operator&apos;s perspective and determine whether there is a responsible path forward.</p></div>
            <div className="lg:col-span-4 lg:text-right"><Link href="/contact" className="inline-flex rounded-sm bg-white px-7 py-4 font-semibold text-tidal-navy">Let&apos;s Talk About Selling Your Business</Link></div>
          </div>
        </Container>
      </section>
      <PrototypeFooter />
    </main>
  )
}

