import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  description:
    'Business advisory and executive coaching for privately held, owner-operated businesses in Southeastern Massachusetts. The operating partner your business has been missing.',
}

// ─── Stat Bar ────────────────────────────────────────────────────────────────

const stats = [
  { number: '$5M–$50M', label: 'Revenue Range We Serve' },
  { number: '25+', label: 'Years Operating Experience' },
  { number: 'PE · IPO · Navy', label: 'Backgrounds That Translate' },
  { number: 'SE Mass', label: 'South Shore · South Coast · Cape' },
]

function StatBar() {
  return (
    <div className="border-t border-cga-navy/10 bg-cga-navy">
      <Container>
        <FadeInStagger faster>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 py-12 sm:grid-cols-4">
            {stats.map((stat) => (
              <FadeIn key={stat.label}>
                <div className="text-center">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                    {stat.number}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── The Problem ─────────────────────────────────────────────────────────────

function TheProblem() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            The Problem We Solve
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            You&rsquo;re too big to wing it now.
          </h2>
          <div className="mt-8 max-w-2xl">
            <p className="text-lg text-cga-body leading-relaxed">
              The skills that built your business — hustle, instinct,
              relationships — are not the same skills that scale it. At some
              point, every owner-led business hits a ceiling that hard work alone
              can&rsquo;t break through. That&rsquo;s a systems problem. And systems are
              fixable.
            </p>
          </div>
          <blockquote className="mt-12 border-l-4 border-cga-teal pl-6">
            <p className="text-xl italic text-cga-navy leading-relaxed">
              &ldquo;I&rsquo;m always putting out fires. I never have time to actually work
              on the business.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-semibold text-cga-light">
              — What we hear from almost every new client
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    tag: 'Strategy & Execution',
    title: 'Business Performance Planning',
    body: 'A 90-day operating rhythm built around strategic prioritization, KPI accountability, and execution discipline. The operating system your business has been missing — finally installed.',
    href: '/services/performance-planning',
    featured: false,
  },
  {
    tag: 'Executive Coaching',
    title: 'Owner & CEO Coaching',
    body: 'One-on-one, FocalPoint-based coaching for owners who are excellent at their trade but need a trusted thinking partner for the decisions that keep them up at night.',
    href: '/services/ceo-coaching',
    featured: true,
  },
  {
    tag: 'Sales & Marketing',
    title: 'Revenue Growth Advisory',
    body: 'Sales process design, pipeline discipline, and GTM infrastructure. Build a repeatable revenue engine — one that performs whether or not you&rsquo;re personally in the deal.',
    href: '/services/revenue-growth',
    featured: false,
  },
]

function Services() {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            Three ways we work with your business.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.title}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  service.featured
                    ? 'bg-cga-navy text-white ring-2 ring-cga-gold'
                    : 'bg-white ring-1 ring-cga-navy/10'
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    service.featured ? 'text-cga-gold' : 'text-cga-teal'
                  }`}
                >
                  {service.tag}
                </p>
                <h3
                  className={`mt-4 font-display text-2xl font-bold ${
                    service.featured ? 'text-white' : 'text-cga-navy'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 flex-1 text-base leading-relaxed ${
                    service.featured ? 'text-white/80' : 'text-cga-body'
                  }`}
                >
                  {service.body}
                </p>
                <Link
                  href={service.href}
                  className={`mt-8 inline-flex items-center text-sm font-semibold ${
                    service.featured
                      ? 'text-cga-gold hover:text-cga-gold/80'
                      : 'text-cga-teal hover:text-cga-teal/80'
                  }`}
                >
                  Learn more &rarr;
                </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Who We Serve ────────────────────────────────────────────────────────────

const signals = [
  {
    title: 'Growing Headcount',
    body: '15–150+ employees and the informal management style that worked at 10 people isn’t working at 40.',
  },
  {
    title: 'Inconsistent or Unpredictable Revenue',
    body: 'Growth is happening but you can’t explain exactly why — or how to make it happen faster and more reliably.',
  },
  {
    title: 'Multi-Location or Multi-Entity',
    body: 'Operational complexity has outpaced the infrastructure. Decisions that should be made locally still run through you.',
  },
  {
    title: 'Succession or Exit on the Horizon',
    body: 'You’re thinking about stepping back, transitioning to family, or eventually selling. The business isn’t ready yet — and you know it.',
  },
  {
    title: 'Owner Still in Every Decision',
    body: 'You have good people. But nothing moves without you. That’s not a team — that’s a staff. And it can’t scale.',
  },
]

function WhoWeServe() {
  return (
    <div id="who-we-serve" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="lg:flex lg:items-start lg:gap-x-16">

          {/* Left — intro + CTA */}
          <FadeIn className="lg:w-2/5 lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
              Who We Serve
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
              Built for the business that&rsquo;s outgrown the original model.
            </h2>
            <p className="mt-6 text-lg text-cga-body leading-relaxed">
              Privately held, owner-operated, and founder-led businesses
              generating $5M–$50M in revenue across Southeastern Massachusetts.
              Established companies with real complexity — not startups, not
              lifestyle businesses.
            </p>
            <p className="mt-4 text-lg font-semibold text-cga-navy">
              If any of these sound familiar, we should talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-cga-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cga-navy/90"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/clients"
                className="inline-flex rounded-full border border-cga-navy/20 px-6 py-2.5 text-sm font-semibold text-cga-navy transition hover:border-cga-teal hover:text-cga-teal"
              >
                See client profiles &rarr;
              </Link>
            </div>
          </FadeIn>

          {/* Right — signal list */}
          <FadeInStagger className="mt-12 lg:mt-0 lg:w-3/5">
            {signals.map((signal) => (
              <FadeIn key={signal.title}>
                <div className="border-t border-cga-navy/10 py-8 first:border-t-0">
                  <h3 className="font-display text-lg font-bold text-cga-navy">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-cga-body">
                    {signal.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

        </div>
      </Container>
    </div>
  )
}

// ─── About Jeff ──────────────────────────────────────────────────────────────

const credentials = [
  { company: 'Everbridge (Nasdaq: EVBG)', role: 'Leadership · IPO' },
  { company: 'ProcessMaker / Fastr Corp', role: 'CEO · PE-Backed' },
  { company: 'PTC · BMC · Pegasystems', role: 'C-Suite Operator' },
  { company: 'US Navy', role: 'Surface Warfare · Nuclear Qualified' },
]

function AboutJeff() {
  return (
    <div className="bg-cga-navy py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            About Jeff Lortz
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            He&rsquo;s actually been in the seat.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Most business coaches have read about running companies. Jeff has
                actually done it — as a PE-backed SaaS CEO, COO, CCO, and Chief
                of Staff across companies including PTC, BMC, Pegasystems,
                Acoustic, and Everbridge, where he was part of the leadership
                team through a Nasdaq IPO.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Before that, he commanded nuclear-powered surface warships as a
                US Navy Surface Warfare Officer. He lives in Plymouth and works
                with Southeastern Massachusetts business owners as the operating
                partner they never had.
              </p>
              <blockquote className="border-l-4 border-cga-gold pl-6">
                <p className="text-xl italic text-white leading-relaxed">
                  &ldquo;I&rsquo;ve sat in every C-suite seat. I know what keeps owners up
                  at night — because it kept me up too.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-cga-gold">
                  — Jeff Lortz, Founder
                </footer>
              </blockquote>
            </div>
            <div>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {credentials.map((cred) => (
                  <div
                    key={cred.company}
                    className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <dt className="font-display text-base font-bold text-white">
                      {cred.company}
                    </dt>
                    <dd className="mt-1 text-sm text-cga-gold">{cred.role}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-cga-gold hover:text-cga-gold/80"
              >
                Read Jeff&rsquo;s full story &rarr;
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── How It Works ────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    body: '60 minutes. We talk about your business, where it is, and what’s genuinely in the way. No agenda beyond understanding your situation.',
  },
  {
    number: '02',
    title: 'Business Diagnostic',
    body: 'A structured assessment of your operations, revenue model, leadership, and strategic priorities. We find the real leverage points.',
  },
  {
    number: '03',
    title: 'Engagement Design',
    body: 'We propose a specific scope — not a packaged program. Designed around your business, your goals, and your calendar.',
  },
  {
    number: '04',
    title: 'We Get to Work',
    body: 'First 90 days are execution-focused. Strategy is set. Accountabilities are clear. Progress is measurable from week one.',
  },
]

function HowItWorks() {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            How It Works
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            No long proposals. No retainer before you&rsquo;re ready.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <FadeIn key={step.number}>
              <div>
                <p className="font-display text-4xl font-extrabold text-cga-teal">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-cga-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cga-body">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <div className="bg-cga-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to find out what&rsquo;s actually in the way?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. And it&rsquo;s a real conversation — not
            a sales call. Bring your biggest challenge. We&rsquo;ll tell you honestly
            whether we can help.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule Your Free Consultation
            </Link>
            <p className="mt-4 text-sm text-white/60">
              No commitment. No pitch deck. Just a conversation with someone who&rsquo;s been in the seat.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <RootLayout>
      {/* Hero */}
      <Container className="py-16 sm:py-24 md:py-32">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Business Advisory &amp; Executive Coaching &middot; Southeastern Massachusetts
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-balance text-cga-navy sm:text-7xl">
            The Operating Partner Your Business Has Been Missing.
          </h1>
          <p className="mt-6 text-xl text-cga-body leading-relaxed">
            Most businesses are run by capable people operating without the
            systems, structure, or support that would let them perform at their
            best. That&rsquo;s the gap we close.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cga-navy px-8 py-3 text-base font-semibold text-white shadow transition hover:bg-cga-navy/90"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/#who-we-serve"
              className="text-sm font-semibold text-cga-navy hover:text-cga-teal"
            >
              See How We Work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <StatBar />
      <TheProblem />
      <Services />
      <WhoWeServe />
      <AboutJeff />
      <HowItWorks />
      <CTASection />
    </RootLayout>
  )
}
