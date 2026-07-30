import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { GrowthIcon, AlignmentIcon, MaturityIcon } from '@/components/OutcomeIcons'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Tidal Point gives privately held businesses one experienced Operating Partner, supported by a trusted network, to improve growth, leadership, and operational maturity.',
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function Hero() {
  return (
    <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            How We Work
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            One Operating Partner. A practical path from priorities to
            progress.
          </h1>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            Tidal Point works as an ongoing executive relationship, not a
            series of disconnected projects. We begin by getting clear on
            the business, identifying the most important constraint, and
            aligning on what needs to change.
          </p>
          <p className="mt-4 text-lg text-tidal-body leading-relaxed">
            From there, your Operating Partner stays involved—helping make
            decisions, drive accountability, and bring in specialized
            support when the work requires it.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 2: What You Can Expect ──────────────────────────────────────────

const expectations = [
  {
    title: 'A regular operating cadence',
    body: 'A consistent working rhythm with the owner or CEO, focused on priorities, decisions, obstacles, and progress.',
  },
  {
    title: 'Clear ownership of the important work',
    body: 'We help define what matters, who owns it, and what must happen next.',
  },
  {
    title: 'Direct involvement in consequential decisions',
    body: 'Growth, leadership, organizational structure, acquisitions, investments, and other decisions that materially affect the business.',
  },
  {
    title: 'Additional capability when needed',
    body: 'Specialists are brought in for defined work, but the Operating Partner remains responsible for alignment and results.',
  },
]

function WhatYouCanExpect() {
  return (
    <div className="bg-tidal-sand py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            The Relationship
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            What you can expect.
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {expectations.map((item) => (
            <FadeIn key={item.title}>
              <div className="border-t border-tidal-navy/15 pt-6">
                <h3 className="font-display text-lg font-bold text-tidal-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-tidal-body">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 3: The First 90 Days ────────────────────────────────────────────

const phases = [
  {
    period: 'First 30 Days',
    title: 'Understand the business',
    items: [
      'Meet with the owner and key leaders',
      'Review the strategy, financial picture, organization, and operating rhythm',
      'Identify where the business is creating value and where it is constrained',
      'Establish the working cadence',
    ],
  },
  {
    period: 'Days 30–60',
    title: 'Set the priorities',
    items: [
      'Agree on the few issues that matter most',
      'Clarify outcomes, owners, and decision rights',
      'Determine where specialist support is required',
      'Build a practical action plan',
    ],
  },
  {
    period: 'Days 60–90',
    title: 'Put the work in motion',
    items: [
      'Support the key decisions',
      'Launch the highest-priority initiatives',
      'Install accountability and review cadence',
      'Adjust based on what the business is learning',
    ],
  },
]

function FirstNinetyDays() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            How It Begins
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            The first ninety days.
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {phases.map((phase, index) => (
            <FadeIn key={phase.period}>
              <div
                className={
                  index > 0
                    ? 'border-t border-tidal-navy/15 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8'
                    : undefined
                }
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-tidal-body">
                  {phase.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-tidal-navy">
                  {phase.title}
                </h3>
                <ul role="list" className="mt-5 space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-tidal-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 flex-none rounded-full bg-tidal-teal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12">
          <p className="text-sm text-tidal-body italic">
            The sequence is consistent. The work itself is shaped by the
            business.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 4: Areas of Impact ──────────────────────────────────────────────

const impactAreas = [
  {
    id: 'growth',
    label: 'Growth',
    icon: GrowthIcon,
    body: 'Clarifying strategy, improving commercial execution, strengthening the revenue engine, and reducing dependence on the owner.',
  },
  {
    id: 'team',
    label: 'Leadership & Team',
    icon: AlignmentIcon,
    body: 'Assessing the leadership needs of the business, aligning the team, clarifying accountability, and strengthening key roles.',
  },
  {
    id: 'operations',
    label: 'Operational Maturity',
    icon: MaturityIcon,
    body: 'Improving planning, decision-making, performance visibility, systems, and the operating discipline required for the next stage.',
  },
]

function AreasOfImpact() {
  return (
    <div className="bg-tidal-sand py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            Where the Work Concentrates
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            Three areas where the Operating Partner most often creates
            impact.
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {impactAreas.map((area) => (
            <FadeIn key={area.id} id={area.id} className="scroll-mt-24 lg:scroll-mt-32">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tidal-navy/8">
                <area.icon className="h-5 w-5 text-tidal-navy" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-tidal-navy">
                {area.label}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-tidal-body">
                {area.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-14 border-t border-tidal-navy/15 pt-8">
          <p className="max-w-2xl text-base font-semibold text-tidal-navy">
            These are not separate service lines. They are the areas where
            the Operating Partner most often helps the business make
            progress.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 5: The Network ──────────────────────────────────────────────────

const networkRole = [
  'Defines the need',
  'Selects and coordinates the right support',
  'Keeps the work aligned to broader business priorities',
  'Remains accountable for the overall outcome',
]

function TheNetwork() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            Extended Capability
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            The right expertise, without the burden of managing multiple
            firms.
          </h2>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            No single executive is the deepest specialist in every
            discipline. The value of the Operating Partner model is
            knowing what the business needs, when it needs it, and who
            should be brought in.
          </p>
          <p className="mt-4 text-lg text-tidal-body leading-relaxed">
            Tidal Point draws on a trusted network of experienced
            specialists and service providers across finance, people,
            commercial execution, technology, legal, search, and
            operations.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {networkRole.map((point) => (
            <FadeIn key={point}>
              <p className="border-t border-tidal-navy/15 pt-4 text-sm font-semibold text-tidal-navy">
                {point}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12">
          <p className="max-w-2xl border-l-4 border-tidal-teal pl-6 text-lg leading-relaxed text-tidal-navy">
            You do not become the general contractor for a collection of
            advisors. Your Operating Partner does.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 6: The Engagement ───────────────────────────────────────────────

function TheEngagement() {
  return (
    <div className="bg-tidal-navy py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-warm-white">
            The Engagement
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            One ongoing relationship. Additional support when the business
            requires it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Tidal Point typically works through an ongoing monthly
            relationship with the owner or CEO. The scope reflects the
            complexity of the business and the level of involvement
            required.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Specialist projects are defined separately when needed, with
            clear scope, ownership, and cost before the work begins.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 7: CTA ───────────────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-tidal-navy sm:text-4xl">
            Start with the business, not a predefined scope.
          </h2>
          <p className="mt-4 text-lg text-tidal-body leading-relaxed">
            The first step is a candid conversation about where the
            company is, what is changing, and what feels hardest to solve
            from inside.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-tidal-navy px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase shadow transition hover:bg-tidal-navy/90"
            >
              Schedule a Conversation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <RootLayout>
      <Hero />
      <WhatYouCanExpect />
      <FirstNinetyDays />
      <AreasOfImpact />
      <TheNetwork />
      <TheEngagement />
      <ClosingCTA />
    </RootLayout>
  )
}
