import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { HubSpotAboutForm } from '@/components/HubSpotAboutForm'
import { RootLayout } from '@/components/RootLayout'
import { PageSchema } from '@/components/PageSchema'

export const metadata: Metadata = {
  title: 'About Tidal Point Partners',
  description:
    'Meet the experienced Operating Partners and specialist network behind Tidal Point Partners, serving privately held businesses across Southeastern New England.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Tidal Point Partners',
    description:
      'Experienced Operating Partners bringing judgment, accountability and broader capability to privately held businesses at pivotal moments.',
    url: '/about',
    type: 'website',
  },
}

const principles = [
  {
    number: '01',
    title: 'Judgment before frameworks',
    body: 'Every situation starts with the business in front of us—not a predetermined answer.',
  },
  {
    number: '02',
    title: 'Candor with respect',
    body: 'The partnership must be honest enough to surface what matters and trusted enough to act on it.',
  },
  {
    number: '03',
    title: 'Accountability through action',
    body: 'Good advice is not the finish line. We remain involved as decisions become operating reality.',
  },
  {
    number: '04',
    title: 'Capability without complexity',
    body: 'The right specialist joins when needed while one Operating Partner retains ownership of the relationship.',
  },
]

const networkAreas = [
  'Finance & performance',
  'People & leadership',
  'Commercial growth',
  'Technology & systems',
  'Operations & process',
  'Legal, risk & transactions',
]

function Hero() {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
            About Tidal Point Partners
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] font-medium tracking-tight text-tidal-navy sm:text-7xl lg:text-8xl">
            Experienced operators for the moments that shape a business.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-tidal-body">
            Tidal Point brings senior operating judgment, direct accountability
            and broader capability to privately held businesses navigating
            consequential change.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Purpose() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Why Tidal Point
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Direction matters most when the current begins to change.
            </h2>
          </FadeIn>
          <FadeIn className="space-y-6 text-lg leading-8 text-tidal-body lg:col-span-6 lg:col-start-7">
            <p>
              A tidal point is where forces meet and familiar currents begin
              to shift. Businesses reach those moments too: growth creates
              complexity, leadership must evolve, or a transition raises the
              consequence of every decision.
            </p>
            <p>
              Tidal Point was created so owners and leadership teams do not
              have to navigate those moments alone. We place an experienced
              Operating Partner alongside the people carrying the
              responsibility—someone who understands the whole business,
              helps make the difficult calls and stays as decisions become
              action.
            </p>
            <p className="border-l-2 border-tidal-teal pl-6 font-display text-2xl leading-snug font-medium text-tidal-navy sm:text-3xl">
              Experienced partnership for pivotal points in the life of a
              business.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function FirmModel() {
  return (
    <section className="bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              How the Firm Is Built
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl">
              One accountable partner. Broader capability behind the seat.
            </h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-white/70 lg:col-span-5 lg:col-start-8">
            Every relationship is led by an experienced Operating Partner who
            knows the business and remains accountable. A trusted specialist
            network extends the work when the situation requires additional
            depth.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid border-y border-white/15 lg:mt-20 lg:grid-cols-2">
          <FadeIn className="py-10 lg:pr-14 lg:py-12">
            <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
              Operating Partners
            </p>
            <h3 className="mt-5 font-display text-3xl font-medium text-white sm:text-4xl">
              Senior executives in the relationship.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
              Operating Partners bring firsthand leadership experience,
              independent judgment and direct accountability to the work.
              They are not intermediaries between the client and the people
              making the decisions.
            </p>
          </FadeIn>
          <FadeIn className="border-t border-white/15 py-10 lg:border-t-0 lg:border-l lg:py-12 lg:pl-14">
            <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
              Specialist Network
            </p>
            <h3 className="mt-5 font-display text-3xl font-medium text-white sm:text-4xl">
              Focused expertise at the right moment.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
              Functional specialists join for clearly defined needs. The
              Operating Partner coordinates their contribution and retains
              ownership of the relationship, priorities and outcomes.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </section>
  )
}

function OperatingPartners() {
  return (
    <section id="operating-partners" className="scroll-mt-24 bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="flex flex-col gap-6 border-b border-tidal-navy/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Our Operating Partners
            </p>
            <h2 className="mt-5 font-display text-5xl leading-none font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Experience in the seat.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-tidal-body">
            Each relationship is personal, senior-led and grounded in
            firsthand operating experience.
          </p>
        </FadeIn>

        <FadeIn className="mt-12 flex flex-col gap-8 bg-white p-6 ring-1 ring-tidal-navy/10 sm:flex-row sm:items-center sm:p-8 lg:gap-12 lg:p-10">
          <div className="relative aspect-[4/5] w-full max-w-[14rem] flex-none overflow-hidden bg-tidal-navy sm:max-w-[12rem] lg:max-w-[14rem]">
            <Image
              src="/images/people/jeff-lortz-home.jpg"
              alt="Jeff Lortz, founder and operating partner"
              fill
              sizes="224px"
              className="object-cover object-[61%_50%] saturate-[0.72] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-tidal-navy/10 mix-blend-multiply" />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
              Founder &amp; Operating Partner
            </p>
            <h3 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
              Jeff Lortz
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-tidal-body">
              Jeff is a former PE-backed CEO and senior operating executive
              who has led businesses through growth, acquisitions, operational
              change and public-company transitions. He founded Tidal Point to
              make experienced Operating Partner support available to privately
              held companies beyond the private-equity model.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-semibold tracking-[0.12em] text-tidal-body uppercase">
              <span>PE-backed CEO</span>
              <span>Two public-company transitions</span>
              <span>US Navy officer</span>
            </div>
            <Link
              href="/team/jeff-lortz"
              className="group mt-7 inline-flex items-center gap-3 self-start text-sm font-semibold tracking-wide text-tidal-navy transition hover:text-tidal-teal"
            >
              View Jeff&rsquo;s profile
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function Network() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              The Extended Network
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Depth without a collection of firms to manage.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-tidal-body">
              The network is engaged selectively, based on the work—not as a
              standing layer of overhead around the relationship.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 border-t border-tidal-navy/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {networkAreas.map((area, index) => (
              <FadeIn
                key={area}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-tidal-navy/15 py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <span className="text-[10px] font-semibold tracking-[0.14em] text-tidal-teal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-xl font-semibold text-tidal-navy">
                  {area}
                </p>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  )
}

function Principles() {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
            How We Operate
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
            Different backgrounds. Shared standards.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-14 grid grid-cols-1 border-t border-tidal-navy/15 lg:mt-16 lg:grid-cols-4">
          {principles.map((principle) => (
            <FadeIn
              key={principle.number}
              className="border-b border-tidal-navy/15 py-8 lg:border-r lg:px-7 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-tidal-teal">
                {principle.number}
              </span>
              <h3 className="mt-5 font-display text-2xl leading-tight font-semibold text-tidal-navy">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-tidal-body">
                {principle.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function RegionAndCTA() {
  return (
    <>
      <section className="bg-tidal-sand py-20 sm:py-24">
        <Container>
          <FadeIn className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                Rooted in Southeastern New England
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-medium text-tidal-navy sm:text-5xl">
                Close enough to understand the context. Experienced enough to
                widen the view.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-tidal-body lg:col-span-4 lg:col-start-9">
              Based in Plymouth and serving the South Shore, South Coast and
              Cape Cod, Tidal Point is invested in the businesses that shape
              this region.{' '}
              <Link
                href="/locations/southeastern-new-england"
                className="font-semibold text-tidal-navy underline decoration-tidal-teal/60 underline-offset-4 transition hover:decoration-tidal-navy"
              >
                See how we serve Southeastern New England.
              </Link>
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-tidal-navy py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
                Begin a Conversation
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-medium text-white sm:text-5xl">
                Start with the business. Decide together what comes next.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Bring the opportunity, challenge or decision carrying the most
                consequence. We&rsquo;ll listen carefully, offer a point of view
                and decide together whether there is a meaningful path forward.
              </p>
            </FadeIn>
            <FadeIn className="bg-white p-6 sm:p-8 lg:col-span-6 lg:col-start-7 lg:p-10">
              <HubSpotAboutForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  )
}

export default function About() {
  return (
    <RootLayout>
      <PageSchema
        path="/about"
        name="About Tidal Point Partners"
        description="Meet the experienced Operating Partners and specialist network behind Tidal Point Partners, serving privately held businesses across Southeastern New England."
      />
      <Hero />
      <Purpose />
      <FirmModel />
      <OperatingPartners />
      <Network />
      <Principles />
      <RegionAndCTA />
    </RootLayout>
  )
}
