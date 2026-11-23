import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { PageSchema } from '@/components/PageSchema'
import { RootLayout } from '@/components/RootLayout'

const description = 'Experienced business operators helping owners build value, prepare for a future sale and navigate confidential business transactions.'
export const metadata: Metadata = { title: 'About Our Operator-Led Approach', description, alternates: { canonical: '/about' } }

export default function About() {
  return <RootLayout><PageSchema path="/about" name="About Tidal Point Partners" description={description} />
    <section className="bg-tidal-navy py-16 text-white sm:py-24"><Container><p className="text-sm font-semibold uppercase tracking-[.18em] text-tidal-teal">About Tidal Point Partners</p><h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1] sm:text-7xl">Experienced operators who understand what makes companies valuable.</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-white/75">We bring hands-on experience running, growing and changing businesses to the work of value creation and business sale advisory.</p></Container></section>
    <section className="py-16 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="font-display text-5xl leading-tight">Advice shaped inside the operator&apos;s seat.</h2></div><div className="space-y-6 text-lg leading-8 text-tidal-body lg:col-span-6 lg:col-start-7"><p>Owners deserve advice that connects financial value to the way a company actually operates. We look at earnings quality, customers, people, systems, owner dependence, risk and growth as parts of one business.</p><p>That perspective informs both journeys: making a company stronger before a future sale and representing it thoughtfully when the owner is ready to pursue a transaction.</p><Link href="/team/jeff-lortz" className="inline-flex font-semibold text-tidal-navy underline underline-offset-4">Meet Jeff Lortz</Link></div></div></Container></section>
    <section className="bg-tidal-sand py-16 sm:py-24"><Container><div className="grid gap-6 md:grid-cols-3">{[['Clear','Explain the financial and operating issues in language an owner can use.'],['Practical','Translate priorities into decisions, owners, measures and a working cadence.'],['Accountable','Stay involved through implementation, outreach, negotiation or diligence as the engagement requires.']].map(([title,body])=><article key={title} className="bg-tidal-warm-white p-8"><h2 className="font-display text-3xl">{title}</h2><p className="mt-4 leading-7 text-tidal-body">{body}</p></article>)}</div></Container></section>
  </RootLayout>
}
