import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'Tidal Point Partners works with established privately held and PE-backed businesses navigating growth, leadership change and consequential transitions.',
  alternates: { canonical: '/clients' },
  openGraph: {
    title: 'Who We Serve | Tidal Point Partners',
    description:
      'Experienced Operating Partners for established businesses at consequential moments.',
    url: '/clients',
    type: 'website',
  },
}

const businessProfile = [
  ['Ownership', 'Privately held, founder-led, family-owned or PE-backed'],
  ['Scale', 'Often $5M–$50M in revenue, with real operating complexity'],
  ['Stage', 'Established businesses—not early-stage ventures'],
  ['Geography', 'Southeastern New England and select adjacent markets'],
]

const patterns = [
  {
    number: '01',
    title: 'Growth has outpaced the operating model.',
    body: 'What worked at an earlier stage is creating friction as the business becomes larger, more complex or more demanding.',
  },
  {
    number: '02',
    title: 'Too many decisions still run through one person.',
    body: 'The owner or CEO remains the center of gravity, limiting the leadership team and constraining the company’s next chapter.',
  },
  {
    number: '03',
    title: 'The leadership system needs to evolve.',
    body: 'Roles, accountability or operating rhythm have not kept pace with what the strategy now requires.',
  },
  {
    number: '04',
    title: 'A consequential transition is approaching.',
    body: 'A succession, transaction, leadership change or ownership decision has raised the stakes for the whole business.',
  },
  {
    number: '05',
    title: 'A major investment requires greater confidence.',
    body: 'New capabilities, service lines, facilities or systems demand choices that must hold up beyond the initial decision.',
  },
  {
    number: '06',
    title: 'The business can perform at a higher level.',
    body: 'Performance may be acceptable, but the company is not converting its market position, people and assets into their full potential.',
  },
]

const valueAreas = [
  {
    label: 'Direction',
    title: 'Clarity around the calls that matter.',
    body: 'Frame the real decision, test assumptions and align leadership around a course the business can carry forward.',
  },
  {
    label: 'Leadership',
    title: 'More capability around the owner and CEO.',
    body: 'Strengthen roles, accountability and decision-making so leadership becomes a source of leverage rather than dependency.',
  },
  {
    label: 'Performance',
    title: 'Decisions translated into operating progress.',
    body: 'Connect strategic choices to priorities, measures and a practical operating cadence that moves the business forward.',
  },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/10 lg:block">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tidal-teal/25" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tidal-teal/35" />
        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tidal-teal" />
      </div>
      <Container>
        <FadeIn className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Who We Serve
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] font-medium tracking-tight text-white sm:text-7xl lg:text-8xl">
              Built for established businesses at consequential moments.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70 lg:col-span-4 lg:col-start-9">
            Tidal Point works with owners, boards and leadership teams when
            growth, change or transition has raised the consequence of every
            decision.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Profile() {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              The Business Profile
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Substantial enough for complexity. Personal enough for the
              decisions to matter.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-tidal-body">
              The best fit is not defined by industry alone. It is defined by
              the maturity of the business, the weight of the moment and the
              willingness to engage an experienced operating perspective.
            </p>
          </FadeIn>

          <FadeIn className="bg-white p-7 ring-1 ring-tidal-navy/10 sm:p-10 lg:col-span-6 lg:col-start-7">
            <div className="divide-y divide-tidal-navy/12">
              {businessProfile.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                    {label}
                  </p>
                  <p className="font-display text-2xl leading-snug font-medium text-tidal-navy">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function Recognition() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-7 border-b border-tidal-navy/15 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              You May Recognize the Pattern
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              The moment often becomes clear before the answer does.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-tidal-body lg:col-span-4 lg:col-start-9">
            These situations rarely arrive in isolation. Several are often
            present at once, each increasing the consequence of the others.
          </p>
        </FadeIn>

        <FadeInStagger className="grid lg:grid-cols-2">
          {patterns.map((pattern, index) => (
            <FadeIn
              key={pattern.number}
              className={`grid grid-cols-[3rem_1fr] gap-4 border-b border-tidal-navy/12 py-9 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-11 ${
                index % 2 === 0 ? 'lg:pr-12' : 'lg:border-l lg:pl-12'
              }`}
            >
              <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-tidal-teal">
                {pattern.number}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight font-medium text-tidal-navy sm:text-3xl">
                  {pattern.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-tidal-body">
                  {pattern.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Value() {
  return (
    <section className="bg-[#e9efee] py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
            Where the Partnership Adds Value
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
            Better judgment. Stronger leadership. More operating capacity.
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-px bg-tidal-navy/15 ring-1 ring-tidal-navy/15 lg:grid-cols-3">
          {valueAreas.map((area) => (
            <FadeIn key={area.label} className="bg-tidal-warm-white p-8 sm:p-10 lg:min-h-[23rem] lg:p-12">
              <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                {area.label}
              </p>
              <h3 className="mt-8 font-display text-3xl leading-tight font-medium text-tidal-navy sm:text-4xl">
                {area.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-tidal-body">
                {area.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Proof() {
  return (
    <section className="bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Operating Experience
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl">
              Pattern recognition earned inside the business.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
              Tidal Point’s perspective is grounded in firsthand operating
              roles through growth, restructuring, acquisitions and company
              transitions—not borrowed theory.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 border-y border-white/15 py-8">
              <div>
                <p className="font-display text-4xl font-medium text-white sm:text-5xl">25+</p>
                <p className="mt-2 text-[10px] tracking-[0.14em] text-white/50 uppercase">Years operating</p>
              </div>
              <div className="border-l border-white/15 pl-5 sm:pl-8">
                <p className="font-display text-4xl font-medium text-white sm:text-5xl">2</p>
                <p className="mt-2 text-[10px] tracking-[0.14em] text-white/50 uppercase">PE-backed CEO roles</p>
              </div>
              <div className="border-l border-white/15 pl-5 sm:pl-8">
                <p className="font-display text-4xl font-medium text-white sm:text-5xl">2</p>
                <p className="mt-2 text-[10px] tracking-[0.14em] text-white/50 uppercase">Public transitions</p>
              </div>
            </div>

            <div className="mt-10 border-l-2 border-tidal-teal pl-7 sm:pl-9">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                Experience Snapshot
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight font-medium text-white sm:text-4xl">
                From owner dependency toward a more capable leadership system.
              </h3>
              <p className="mt-5 text-base leading-7 text-white/65">
                Across prior executive roles, Tidal Point’s founder has helped
                businesses clarify strategic priorities, strengthen leadership
                teams and establish the operating disciplines needed to scale
                beyond a single decision-maker.
              </p>
              <p className="mt-5 text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                Prior operating experience · Not presented as a Tidal Point client case study
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn className="grid gap-8 border-t border-tidal-navy/15 pt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              A Mutual Fit
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              The best partnerships begin with shared clarity about the
              situation and the stakes.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-base leading-7 text-tidal-body">
              An introductory conversation should create value, establish fit
              and make the right next step clear to both sides.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex bg-tidal-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-tidal-teal"
            >
              Start a Conversation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function WhoWeServe() {
  return (
    <RootLayout>
      <Hero />
      <Profile />
      <Recognition />
      <Value />
      <Proof />
      <CTA />
    </RootLayout>
  )
}
