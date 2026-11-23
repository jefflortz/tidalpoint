import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { PageSchema } from '@/components/PageSchema'
import { RootLayout } from '@/components/RootLayout'

const description = 'Tidal Point Partners works with owners of established privately held businesses, with trades and service companies as primary examples.'
export const metadata: Metadata = { title: 'Who We Help', description, alternates: { canonical: '/clients' } }

export default function Clients() {
  const patterns = ['The business still depends heavily on the owner','Financial reporting does not tell a clean, buyer-ready story','Leadership depth has not kept pace with growth','Customers, revenue or key people create concentration risk','The owner wants options before deciding when to sell']
  return <RootLayout><PageSchema path="/clients" name="Who We Help" description={description} />
    <section className="bg-tidal-navy py-16 text-white sm:py-24"><Container><p className="text-sm font-semibold uppercase tracking-[.18em] text-tidal-teal">Who We Help</p><h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1] sm:text-7xl">Built for owners who have real value on the line.</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-white/75">We work with owners of established privately held businesses. Trades and service companies are primary examples, not a limitation or public size threshold.</p></Container></section>
    <section className="py-16 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="font-display text-5xl leading-tight">You may recognize the pattern.</h2><p className="mt-6 text-lg leading-8 text-tidal-body">The right starting point is often clearer when several of these conditions are present.</p></div><div className="lg:col-span-6 lg:col-start-7">{patterns.map((item,index)=><div key={item} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-tidal-navy/15 py-5"><span className="text-sm font-semibold text-tidal-teal">0{index+1}</span><p className="font-display text-2xl text-tidal-navy">{item}</p></div>)}</div></div></Container></section>
    <section className="bg-tidal-sand py-16"><Container><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><h2 className="max-w-3xl font-display text-4xl text-tidal-navy">Start with the journey that best matches your timing.</h2><div className="flex flex-wrap gap-3"><Link href="/sell-your-business" className="bg-tidal-navy px-5 py-3 font-semibold text-white">Sell My Business</Link><Link href="/build-business-value" className="border border-tidal-navy px-5 py-3 font-semibold text-tidal-navy">Build Business Value</Link></div></div></Container></section>
  </RootLayout>
}
