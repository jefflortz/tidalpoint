import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PrototypeFooter, PrototypeHeader } from '@/components/PrototypeShell'

const valueDrivers = [
  ['Financial quality', 'Clear, reliable performance that a buyer can understand and trust.'],
  ['Owner independence', 'A business that works without every decision running through one person.'],
  ['Durable growth', 'Customers, capabilities and systems that support the next stage.'],
  ['Reduced risk', 'Fewer surprises across people, customers, operations and documentation.'],
]

export default function PrototypeHome() {
  return (
    <main id="main-content" className="bg-tidal-warm-white text-tidal-navy">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3">
        Skip to content
      </a>
      <section className="relative min-h-[680px] overflow-hidden bg-tidal-navy text-white lg:min-h-[820px]">
        <Image
          src="/images/prototype/owner-operator-hero.png"
          alt="Owner-operator in a well-run service business workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,43,67,.98)_0%,rgba(18,43,67,.88)_40%,rgba(18,43,67,.18)_75%)]" />
        <PrototypeHeader invert />
        <Container className="relative flex min-h-[680px] items-center pb-20 pt-40 lg:min-h-[820px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tidal-teal">
              Business Value Creation &amp; M&amp;A Advisory
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              Get More From the Business You&apos;ve Built.
            </h1>
            <p className="mt-7 font-display text-3xl text-white sm:text-4xl">Build Value. Realize Value.</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Ready to sell your business? Or thinking about it down the road? We help business owners understand what their company may be worth, make it more attractive to buyers, and find the right buyer when it&apos;s time to sell. We bring years of hands-on experience running and growing companies to every engagement.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/sell-your-business" className="inline-flex justify-center rounded-sm bg-white px-7 py-4 text-base font-semibold text-tidal-navy">
                Sell My Business
              </Link>
              <Link href="/build-business-value" className="inline-flex justify-center rounded-sm border border-white/50 px-7 py-4 text-base font-semibold text-white">
                Build Business Value
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bg-tidal-navy p-8 text-white sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Ready to sell?</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Find the right buyers, not just a place to list.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                We position the business through an operator&apos;s lens, actively identify prospective buyers, assess financial capacity and acquisition interest, and stay through negotiation, diligence and closing.
              </p>
              <Link href="/sell-your-business" className="mt-9 inline-flex rounded-sm bg-white px-6 py-3.5 font-semibold text-tidal-navy">Explore Selling Your Business</Link>
            </article>
            <article id="build" className="border border-tidal-navy/15 bg-white p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">Thinking about it down the road?</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Make the business stronger before the market decides its value.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-tidal-body">
                Start with a Business Value Assessment, identify the drivers and risks that matter most, and build a practical 12-month roadmap with experienced support through implementation.
              </p>
              <Link href="/build-business-value" className="mt-9 inline-flex rounded-sm bg-tidal-navy px-6 py-3.5 font-semibold text-white">Explore Building Business Value</Link>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-tidal-navy/10 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">A common first question</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">What is my business worth?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-tidal-body">Learn how buyers evaluate earnings, owner dependence, customer concentration, operating systems and future growth—then choose whether your next step is preparing to sell or building more value.</p>
            </div>
            <Link href="/resources/what-is-my-business-worth" className="inline-flex justify-center rounded-sm bg-tidal-navy px-7 py-4 font-semibold text-white">Explore Business Value</Link>
          </div>
        </Container>
      </section>

      <section id="who-we-help" className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">Who we help</p>
              <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Built for owners who have real value on the line.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-tidal-body lg:col-span-6 lg:col-start-7">
              <p>We work with owners of established privately held businesses. Trades and service companies are primary examples, but the work is not limited to one industry or a public revenue threshold.</p>
              <p>What matters is that you have built something meaningful—and want an experienced operator beside you as you improve it, prepare it, or sell it.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tidal-sand py-16 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">What makes a business valuable</p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">Value is built in the way the business performs without you.</h2>
          <div className="mt-14 grid gap-px bg-tidal-navy/15 md:grid-cols-2 lg:grid-cols-4">
            {valueDrivers.map(([title, body]) => (
              <article key={title} className="bg-tidal-warm-white p-7 sm:p-9">
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-base leading-7 text-tidal-body">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="why-tidal-point" className="bg-tidal-navy py-20 text-white sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Why Tidal Point</p>
              <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Advice shaped by years inside the operator&apos;s seat.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">We bring hands-on experience running, growing and changing companies to every engagement. That operating perspective helps us see what creates durable value—and explain the business credibly to prospective buyers.</p>
            </div>
            <div className="border-y border-white/15 py-8 lg:col-span-4 lg:col-start-9">
              <p className="font-display text-5xl">25+</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/60">Years operating businesses</p>
              <p className="mt-8 text-sm leading-6 text-white/60">Hands-on leadership experience across privately held businesses and periods of consequential change.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="border border-tidal-navy/15 bg-white p-8 sm:p-12 lg:flex lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal-dark">A confidential first step</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Tell us where you are. We&apos;ll help you think through what comes next.</h2>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-sm bg-tidal-navy px-7 py-4 font-semibold text-white lg:mt-0">Start a Conversation</Link>
          </div>
        </Container>
      </section>
      <PrototypeFooter />
    </main>
  )
}

