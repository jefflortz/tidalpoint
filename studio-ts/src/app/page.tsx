import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { GrowthIcon, AlignmentIcon, MaturityIcon } from '@/components/OutcomeIcons'
import { GridPattern } from '@/components/GridPattern'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  description:
    'Tidal Point Partners becomes the experienced Operating Partner that many privately held businesses never had — working alongside owners and leadership teams to make better decisions and build a stronger company.',
}

// ─── Shared icons ─────────────────────────────────────────────────────────────

function CompassIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 9l-2.5 5.5L9 17l2.5-5.5L15 9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.75 20h16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="5.5" y="14" width="3" height="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="10" width="3" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16.5" y="6" width="3" height="14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PeopleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20c0-3 2-5 5-5s5 2 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.5 20c0-2.5 1-4.5 3-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Why An Operating Partner ─────────────────────────────────────────────────

function WhyOperatingPartner() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            Why An Operating Partner
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            The seat most private companies never get to fill.
          </h2>
          <div className="mt-8 max-w-2xl space-y-6">
            <p className="text-lg text-tidal-body leading-relaxed">
              Large companies surround their executives with experienced
              operators, boards, and advisors — people who&rsquo;ve run
              businesses before and whose only agenda is the company&rsquo;s
              long-term health.
            </p>
            <p className="text-lg text-tidal-body leading-relaxed">
              Most privately held businesses don&rsquo;t have that.
              There&rsquo;s no one senior enough to think alongside, no one
              whose experience matches the weight of the decision. The person
              running the company is the strategist, the operator, and the
              final word — usually without anyone in the room to pressure
              test the thinking and challenge the assumptions underneath it.
            </p>
          </div>
          <p className="mt-10 max-w-2xl font-display text-2xl font-medium text-tidal-navy sm:text-3xl">
            That&rsquo;s the seat an Operating Partner fills.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── The Situations We're Brought Into ────────────────────────────────────────

const situations = [
  {
    title: 'Growth is outpacing the organization.',
    body: 'Expansion, new markets, or acquisitions are moving faster than the leadership and systems built to support them.',
  },
  {
    title: 'Growth has stalled and the reason isn’t obvious.',
    body: 'Sales have slowed or margins are compressing, and from inside the business it’s hard to tell whether it’s the market, the model, or the team.',
  },
  {
    title: 'You just acquired a business and the prior owner is still here.',
    body: 'Earn-out periods have their own physics — two sets of incentives, a clock running, and integration decisions that can’t wait for the handoff to finish.',
  },
  {
    title: 'Succession is closer than the business is ready for.',
    body: 'Stepping back, handing to family, or eventually selling — and the company still runs through one person.',
  },
  {
    title: 'You’re accountable to people beyond yourself.',
    body: 'A board, outside investors, or employee-owners expect a defensible plan and a leadership team that can carry it.',
  },
  {
    title: 'The team that built the business isn’t the team that scales it.',
    body: 'Key seats need to be filled or key people need to grow, and you can’t do both while running the company.',
  },
]

function TheSituationsWeAreBroughtInto() {
  return (
    <div className="bg-tidal-warm-white py-28 sm:py-40">
      <Container>
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            The situations we&rsquo;re brought into.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((situation) => (
            <FadeIn key={situation.title} className="h-full">
              <div className="flex h-full flex-col border-t border-tidal-navy/15 pt-6">
                <h3 className="font-display text-xl font-bold text-tidal-navy">
                  {situation.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tidal-body">
                  {situation.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── What An Operating Partner Actually Does ──────────────────────────────────

const partnershipPrinciples = [
  {
    title: 'Clarify what matters most.',
    body: 'We help leadership see the handful of things that actually move the business, and pressure test the assumptions underneath the plan.',
    icon: CompassIcon,
  },
  {
    title: 'Sit in the room for the decisions.',
    body: 'Not as an observer. As someone with a view, the experience to back it, and no agenda but the company’s.',
    icon: PeopleIcon,
  },
  {
    title: 'Carry accountability for outcomes.',
    body: 'Someone experienced is answerable for whether it worked — not just for whether the advice was sound.',
    icon: ShieldIcon,
  },
  {
    title: 'Bring in what the situation requires.',
    body: 'Planning, team development, go-to-market — the capability comes with the seat rather than as a separate engagement.',
    icon: ChartIcon,
  },
]

function WhatWeDo() {
  return (
    <div id="how-we-work" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            How We Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            What the seat actually does.
          </h2>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            An Operating Partner isn&rsquo;t there to deliver a
            recommendation and move on. The value is in staying — through
            the decision, the execution, and whatever comes after it.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {partnershipPrinciples.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="border-t border-tidal-navy/10 pt-6">
                <principle.icon className="h-7 w-7 text-tidal-navy" />
                <h3 className="mt-4 font-display text-lg font-bold text-tidal-navy">
                  {principle.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tidal-body">
                  {principle.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Operating Model ─────────────────────────────────────────────────────────

const operatingHub = {
  title: 'The Seat',
  body: 'An experienced operator, embedded alongside you — collaborating on strategy, pressure testing decisions, and helping you see around corners to prepare for what’s next.',
}

type OperatingAccent = 'teal' | 'navy' | 'sand'

const operatingAccentStyles: Record<
  OperatingAccent,
  { chip: string; hoverRing: string }
> = {
  teal: {
    chip: 'bg-tidal-teal/15',
    hoverRing: 'hover:ring-tidal-teal/70',
  },
  navy: {
    chip: 'bg-tidal-navy/8',
    hoverRing: 'hover:ring-tidal-navy/40',
  },
  sand: {
    chip: 'bg-tidal-sand/60',
    hoverRing: 'hover:ring-tidal-sand',
  },
}

const operatingOutcomes: {
  title: string
  href: string
  accent: OperatingAccent
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => React.JSX.Element
}[] = [
  {
    title: 'Breaking through barriers to growth',
    href: '/services#growth',
    accent: 'teal',
    icon: GrowthIcon,
  },
  {
    title: 'Building and aligning the right team for the moment',
    href: '/services#team',
    accent: 'navy',
    icon: AlignmentIcon,
  },
  {
    title: 'Reaching the next level of operational maturity',
    href: '/services#operations',
    accent: 'sand',
    icon: MaturityIcon,
  },
]

function OperatingHubCard({ className }: { className?: string }) {
  return (
    <FadeIn
      className={clsx(
        'rounded-4xl bg-tidal-navy px-8 py-10 text-center shadow-xl ring-1 ring-white/10',
        className,
      )}
    >
      <h3 className="font-display text-2xl font-bold text-white">
        {operatingHub.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-white/80">
        {operatingHub.body}
      </p>
    </FadeIn>
  )
}

function OperatingModelCard({
  outcome,
}: {
  outcome: (typeof operatingOutcomes)[number]
}) {
  return (
    <Link
      href={outcome.href}
      className={clsx(
        'group flex h-full items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-tidal-navy/10 transition',
        'hover:-translate-y-0.5 hover:shadow-lg hover:ring-2',
        operatingAccentStyles[outcome.accent].hoverRing,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tidal-navy focus-visible:ring-offset-2 focus-visible:ring-offset-tidal-warm-white',
      )}
    >
      <span
        className={clsx(
          'flex h-11 w-11 flex-none items-center justify-center rounded-full',
          operatingAccentStyles[outcome.accent].chip,
        )}
      >
        <outcome.icon className="h-5 w-5 text-tidal-navy" />
      </span>
      <span className="flex-1">
        <h3 className="font-display text-lg font-bold text-tidal-navy">
          {outcome.title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-tidal-body uppercase transition group-hover:text-tidal-navy">
          View services <span aria-hidden="true">&rarr;</span>
        </span>
      </span>
    </Link>
  )
}

function OperatingModel() {
  return (
    <div
      id="operating-model"
      className="scroll-mt-24 bg-tidal-warm-white py-24 sm:py-32"
    >
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            The Operating Model
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            One seat. Three outcomes.
          </h2>
        </FadeIn>

        {/* Mobile / tablet — stacked flow (< lg) */}
        <div className="mx-auto mt-16 max-w-md lg:hidden">
          <OperatingHubCard />

          <div aria-hidden="true" className="flex justify-center py-4">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-tidal-navy/40" fill="none">
              <path
                d="M12 4v15M12 19l-5.5-5.5M12 19l5.5-5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <FadeInStagger className="space-y-5 border-l-2 border-tidal-navy/15 pl-5">
            {operatingOutcomes.map((outcome) => (
              <FadeIn key={outcome.title}>
                <OperatingModelCard outcome={outcome} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        {/* Desktop — hub-and-spoke (lg+) */}
        <div className="relative mx-auto mt-20 hidden max-w-4xl lg:block">
          <OperatingHubCard className="mx-auto max-w-md" />

          <div aria-hidden="true" className="mx-auto h-20 w-full max-w-3xl">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="h-full w-full text-tidal-navy/20"
            >
              <path
                d="M50,0 Q28,22 16,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
              <path
                d="M50,0 L50,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
              <path
                d="M50,0 Q72,22 84,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </svg>
          </div>

          <FadeInStagger className="grid grid-cols-3 gap-6">
            {operatingOutcomes.map((outcome) => (
              <FadeIn key={outcome.title} className="h-full">
                <OperatingModelCard outcome={outcome} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  )
}

// ─── Why Tidal Point ──────────────────────────────────────────────────────────

function WhyTidalPoint() {
  return (
    <div className="bg-tidal-navy py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-warm-white">
            Why Tidal Point
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            The seat is only as good as who&rsquo;s in it.
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Tidal Point Partners was founded by Jeff Lortz. He&rsquo;s an
            experienced executive operator who has led two PE-backed
            companies as CEO and helped take two companies public on Nasdaq.
            He&rsquo;s guided businesses through acquisitions and rapid
            growth, and served as a nuclear-qualified Surface Warfare Officer
            in the U.S. Navy. He&rsquo;s sat in the seat where these
            decisions get made — not studied it from the outside.
          </p>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Jeff holds the seat himself. What he brings to it is a network
            built over a career — a vetted group of operators, specialists,
            and service providers he can pull in when the situation calls
            for capability beyond his own. You get one accountable partner
            who knows the business, and the reach of many behind him.
          </p>
          <blockquote className="mt-8 border-l-4 border-tidal-teal pl-6">
            <p className="text-xl italic text-white leading-relaxed">
              &ldquo;I&rsquo;ve made these calls myself. I know what keeps a
              CEO up at night — because it kept me up too.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-tidal-warm-white">
              — Jeff Lortz, Founder
            </footer>
          </blockquote>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-semibold text-tidal-warm-white hover:text-tidal-warm-white/80"
          >
            Read Jeff&rsquo;s full story &rarr;
          </Link>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Perspective ──────────────────────────────────────────────────────────────

async function Perspective() {
  const articles = (await loadArticles()).slice(0, 3)

  return (
    <div className="bg-tidal-warm-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            Perspective
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            A closer look at how we think.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <Link href={article.href} className="group block border-t-2 border-tidal-teal pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-tidal-body">
                  {formatDate(article.date)}
                  {article.category ? ` · ${article.category}` : ''}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-tidal-navy transition group-hover:text-tidal-teal">
                  {article.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tidal-body">
                  {article.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-tidal-teal">
                  Read the piece &rarr;
                </p>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── How It Begins ────────────────────────────────────────────────────────────

function HowItBegins() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-tidal-teal">
            How It Begins
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            A conversation, then a clear read, then a scope that fits.
          </h2>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            It starts with a conversation about the business and
            what&rsquo;s in the way. From there, a structured look at where
            the real leverage is — and if it makes sense to work together,
            an engagement scoped to your situation, not a package off a
            shelf. You&rsquo;ll see progress inside the first ninety days.
          </p>
          <div className="mt-10">
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

export default async function Home() {
  return (
    <RootLayout>
      {/* Hero */}
      <div className="relative z-0 overflow-hidden bg-tidal-navy">
        <GridPattern
          interactive
          yOffset={-96}
          className="absolute inset-0 -z-10 h-full w-full fill-white/[0.06] stroke-white/[0.12] mask-[linear-gradient(to_bottom_left,white,transparent_65%)]"
        />
        <Container>
          <div className="py-24 sm:py-32">
            <FadeIn className="max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-tidal-warm-white uppercase sm:tracking-widest">
                For privately-held companies in SE New England
              </p>
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                The Operating Partner Your Business Has Been Missing.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/80 leading-relaxed lg:text-2xl">
                An experienced operator seated alongside you — with the
                judgment to see what&rsquo;s limiting the business and the
                reach to fix it.
              </p>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-tidal-navy uppercase shadow transition hover:bg-tidal-sand"
                >
                  Schedule a Conversation
                </Link>
                <Link
                  href="#how-we-work"
                  className="inline-flex items-center text-sm font-semibold tracking-widest text-white uppercase transition hover:text-tidal-teal"
                >
                  Learn How We Work &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      <WhyOperatingPartner />
      <TheSituationsWeAreBroughtInto />
      <WhatWeDo />
      <OperatingModel />
      <WhyTidalPoint />
      <Perspective />
      <HowItBegins />
    </RootLayout>
  )
}
