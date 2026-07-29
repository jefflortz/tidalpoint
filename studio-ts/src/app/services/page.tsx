import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { GrowthIcon, AlignmentIcon, MaturityIcon } from '@/components/OutcomeIcons'
import { OutcomesMiniNav } from './OutcomesMiniNav'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Tidal Point Partners is a single, embedded engagement — an experienced operator working alongside you. The work concentrates in three outcomes: growth, team, and operational maturity.',
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Outcome data ──────────────────────────────────────────────────────────────

type Accent = 'teal' | 'navy' | 'sand'

const accentStyles: Record<
  Accent,
  { dot: string; resultsBg: string; cardBorder: string }
> = {
  teal: {
    dot: 'bg-tidal-teal',
    resultsBg: 'bg-tidal-teal/8',
    cardBorder: 'border-tidal-teal/60',
  },
  navy: {
    dot: 'bg-tidal-navy',
    resultsBg: 'bg-tidal-navy/5',
    cardBorder: 'border-tidal-navy/25',
  },
  sand: {
    dot: 'bg-tidal-sand',
    resultsBg: 'bg-tidal-sand/30',
    cardBorder: 'border-tidal-sand',
  },
}

type Outcome = {
  id: string
  navLabel: string
  accent: Accent
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => React.JSX.Element
  heading: string
  framing: string
  results: string[]
  deliverables: { name: string; body: string }[]
}

const outcomes: Outcome[] = [
  {
    id: 'growth',
    navLabel: 'Growth',
    accent: 'teal',
    icon: GrowthIcon,
    heading: 'Breaking through barriers to growth',
    framing:
      'When growth has stalled or the next stage feels out of reach, the first job is finding what’s actually in the way.',
    results: [
      'A clear read on what’s capping growth — market, model, or motion',
      'A revenue engine that fills the pipeline without heroics',
      'Sales that don’t depend on any one person in the room',
    ],
    deliverables: [
      {
        name: 'Growth Diagnostic',
        body: 'A structured read on what’s actually capping growth: market, model, or motion. Where revenue is really coming from, where it’s stalling, and why.',
      },
      {
        name: 'Revenue Engine Build',
        body: 'Designing and installing a repeatable revenue process: pipeline, forecasting, and the operating discipline that makes growth predictable instead of episodic.',
      },
      {
        name: 'Go-to-Market Realignment',
        body: 'Sharpening positioning, pricing, and the path to market when the current motion has run out of room.',
      },
      {
        name: 'Sales Leadership & Structure',
        body: 'Building a sales organization that performs without the founder in every deal: roles, comp, playbook, and the cadence that holds it together.',
      },
    ],
  },
  {
    id: 'team',
    navLabel: 'Team',
    accent: 'navy',
    icon: AlignmentIcon,
    heading: 'Building and aligning the right team for the moment',
    framing:
      'The team that got the business here isn’t always the team to carry it forward. This is about honestly assessing that gap and closing it.',
    results: [
      'An honest read on the team you have versus the one the plan needs',
      'Leaders who understand how each other operate',
      'Key seats filled, and the plan kept moving',
    ],
    deliverables: [
      {
        name: 'Leadership Team Assessment',
        body: 'An honest read on the team you have against the one the plan actually needs, seat by seat.',
      },
      {
        name: 'Team Alignment Workshop',
        body: 'Giving the leadership team a shared language for how each other operate and decide, so friction turns into speed. (DISC-based.)',
      },
      {
        name: 'Key-Seat Search & Onboarding',
        body: 'Finding, hiring, and integrating the leaders the next stage requires.',
      },
    ],
  },
  {
    id: 'operations',
    navLabel: 'Operations',
    accent: 'sand',
    icon: MaturityIcon,
    heading: 'Reaching the next level of operational maturity',
    framing:
      'As volume and complexity grow, informal ways of running the business start to strain. This is about building the backbone to carry what’s next.',
    results: [
      'Operations that hold up as volume and complexity grow',
      'Clear decision rights and cadence, so nothing runs through one person',
      'The structure and systems to take on what’s next',
    ],
    deliverables: [
      {
        name: 'Operational Assessment',
        body: 'A structured look at where operations strain as volume and complexity grow, and what breaks first if nothing changes.',
      },
      {
        name: 'Decision Rights & Governance',
        body: 'Clarifying who decides what, so the business stops routing every call through one person.',
      },
      {
        name: 'Systems & Process Design',
        body: 'Building the operational backbone — process, tooling, structure — to carry the next stage of growth.',
      },
      {
        name: 'Planning & Execution Rhythm',
        body: 'Translating strategy into a 90-day operating system with clear priorities, owners, and measurable progress.',
      },
    ],
  },
]

// ─── Outcome section ────────────────────────────────────────────────────────

function OutcomeSection({
  outcome,
  divider,
}: {
  outcome: Outcome
  divider: boolean
}) {
  let style = accentStyles[outcome.accent]

  return (
    <div
      id={outcome.id}
      className={clsx(
        'scroll-mt-24 bg-tidal-warm-white py-24 sm:py-32 lg:scroll-mt-32',
        divider && 'border-t border-tidal-navy/10',
      )}
    >
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={clsx('h-2 w-2 rounded-full', style.dot)}
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-tidal-body">
              {outcome.navLabel}
            </p>
          </div>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            {outcome.heading}
          </h2>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            {outcome.framing}
          </p>
        </FadeIn>

        {/* Sub-outcomes — brief, secondary to the deliverables below */}
        <FadeIn
          className={clsx(
            'mt-10 max-w-3xl rounded-2xl p-6 sm:p-7',
            style.resultsBg,
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-body">
            What this drives toward
          </p>
          <ul role="list" className="mt-4 space-y-3">
            {outcome.results.map((result) => (
              <li key={result} className="flex gap-3">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-tidal-navy" />
                <span className="text-sm leading-relaxed text-tidal-body sm:text-base">
                  {result}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Deliverables — the named work */}
        <FadeInStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {outcome.deliverables.map((deliverable) => (
            <FadeIn key={deliverable.name} className="h-full">
              <div
                className={clsx(
                  'h-full rounded-2xl border-l-4 bg-white p-6 shadow-sm',
                  style.cardBorder,
                )}
              >
                <h3 className="font-display text-lg font-bold text-tidal-navy">
                  {deliverable.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tidal-body">
                  {deliverable.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Closing CTA ────────────────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-tidal-navy sm:text-4xl">
            Not sure which of these is the real constraint?
          </h2>
          <p className="mt-4 text-lg text-tidal-body leading-relaxed">
            That&rsquo;s what the first conversation is for.
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
      <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
              What We Do
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
              One seat. Three outcomes.
            </h1>
            <p className="mt-6 text-lg text-tidal-body leading-relaxed">
              Tidal Point is a single, embedded engagement — an experienced
              operator working alongside you. In practice, the work
              concentrates in three areas. Every engagement is scoped to the
              business; these are the outcomes it drives toward, and the
              work that gets there.
            </p>
          </FadeIn>

          <div className="mt-12">
            <OutcomesMiniNav />
          </div>
        </Container>
      </div>

      {outcomes.map((outcome, index) => (
        <OutcomeSection key={outcome.id} outcome={outcome} divider={index > 0} />
      ))}

      <ClosingCTA />
    </RootLayout>
  )
}
