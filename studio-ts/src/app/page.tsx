import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

// TEMPORARY — replace with the final mill-exterior photograph once supplied.
// Swap this path only; the hero layout does not need to change.
const heroImageSrc = '/images/hero-exterior-temp.png'

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
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
            Why An Operating Partner
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            Running a successful business doesn&rsquo;t mean you have all the
            answers.
          </h2>
          <p className="mt-6 text-lg text-cga-body leading-relaxed">
            As a business grows, the decisions become more consequential.
            Leadership becomes more complex. The opportunities get bigger —
            and so does the cost of getting them wrong. Large companies
            surround their executives with experienced operators, boards, and
            advisors. Most privately held businesses don&rsquo;t. That&rsquo;s
            where an Operating Partner comes in.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── When Companies Bring Us In ───────────────────────────────────────────────

const situations = [
  {
    title: 'We’re growing faster than we can manage.',
    body: 'Expansion, new markets, or acquisitions are outpacing the leadership and systems built to support them.',
  },
  {
    title: 'Our growth has stalled.',
    body: 'Sales have slowed, margins are shrinking, or execution isn’t as sharp as it used to be.',
  },
  {
    title: 'The leadership team needs to level up.',
    body: 'The business has outgrown the team that built it, or a few key seats need to be filled.',
  },
  {
    title: 'We can’t afford to get this wrong.',
    body: 'An acquisition, a new facility, or a major customer has raised the stakes on the next decision.',
  },
  {
    title: 'We want to maximize the value of what we’ve built.',
    body: 'Every decision you make either builds long-term value or quietly erodes it — whether you plan to run this business for another twenty years or hand it to someone else someday.',
  },
  {
    title: 'We need another experienced voice around the table.',
    body: 'Not more advice — someone who has actually run a business and isn’t afraid to challenge the plan.',
  },
]

function WhenCompaniesBringUsIn() {
  return (
    <div className="bg-cga-warm-white py-28 sm:py-40">
      <Container>
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            Businesses call us when&hellip;
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((situation) => (
            <FadeIn key={situation.title}>
              <div className="border-t border-cga-navy/15 pt-6">
                <h3 className="font-display text-xl font-bold text-cga-navy">
                  {situation.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cga-body">
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
    title: 'Clarify Priorities',
    body: 'We help leadership see clearly what matters most, and challenge the assumptions behind the plan.',
    icon: CompassIcon,
  },
  {
    title: 'Participate and Execute',
    body: 'We sit in the room for the decisions that matter and help carry out the initiatives that follow.',
    icon: ChartIcon,
  },
  {
    title: 'Provide Accountability',
    body: 'Someone with real experience is accountable for the outcome, not just the recommendation.',
    icon: ShieldIcon,
  },
  {
    title: 'Stay Involved',
    body: 'We remain alongside the business until the work succeeds — not just until the plan is delivered.',
    icon: PeopleIcon,
  },
]

function WhatWeDo() {
  return (
    <div id="how-we-work" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
            How We Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            An Operating Partner doesn&rsquo;t hand over a report.
          </h2>
          <p className="mt-6 text-lg text-cga-body leading-relaxed">
            We stay alongside the business until the work succeeds.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipPrinciples.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="border-t border-cga-navy/10 pt-6">
                <principle.icon className="h-7 w-7 text-cga-navy" />
                <h3 className="mt-4 font-display text-lg font-bold text-cga-navy">
                  {principle.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cga-body">
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

// ─── Why Tidal Point ──────────────────────────────────────────────────────────

function WhyTidalPoint() {
  return (
    <div className="bg-cga-navy py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-warm-white">
            Why Tidal Point
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            When the stakes are high, experience changes the quality of
            decisions.
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Jeff Lortz has led as a PE-backed CEO through a Nasdaq IPO, guided
            companies through acquisitions and rapid growth, and served as a
            nuclear-qualified Surface Warfare Officer in the U.S. Navy. He has
            sat in the seat where these decisions get made — not just studied
            them from the outside.
          </p>
          <blockquote className="mt-8 border-l-4 border-cga-teal pl-6">
            <p className="text-xl italic text-white leading-relaxed">
              &ldquo;I&rsquo;ve made these calls myself. I know what keeps owners up
              at night — because it kept me up too.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-cga-warm-white">
              — Jeff Lortz, Founder
            </footer>
          </blockquote>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-semibold text-cga-warm-white hover:text-cga-warm-white/80"
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
    <div className="bg-cga-warm-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
            Perspective
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            A closer look at how we think.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <Link href={article.href} className="group block border-t-2 border-cga-teal pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cga-body">
                  {formatDate(article.date)}
                  {article.category ? ` · ${article.category}` : ''}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-cga-navy transition group-hover:text-cga-teal">
                  {article.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cga-body">
                  {article.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-cga-teal">
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

// ─── Conversation ─────────────────────────────────────────────────────────────

function Conversation() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            Let&rsquo;s start with a conversation.
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-cga-navy px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase shadow transition hover:bg-cga-navy/90"
            >
              Start a Conversation
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
      <div className="relative isolate overflow-hidden bg-cga-warm-white">
        <div className="relative mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-[4fr_3fr]">
          {/* Text column */}
          <div className="relative z-10 px-6 py-16 sm:py-24 lg:px-8 lg:pt-8 lg:pb-24 lg:pr-0">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-cga-navy sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                The Operating Partner Your Business Has Been Missing.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-cga-body leading-relaxed lg:text-2xl">
                As your Operating Partner, we bring the judgment of people
                who&rsquo;ve actually run businesses — not simply advised
                them.
              </p>
              <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-cga-navy px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase shadow transition hover:bg-cga-navy/90"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="#how-we-work"
                  className="inline-flex items-center text-sm font-semibold tracking-widest text-cga-navy uppercase transition hover:text-cga-teal"
                >
                  Learn How We Work &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Image column — full-bleed on lg+, integrated behind the text with a wide, soft fade */}
          <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:left-[46%] lg:h-full lg:w-screen">
            <Image
              src={heroImageSrc}
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[50%_75%]"
              priority
            />
            {/* Organic, multi-directional fade so the image emerges from behind the typography rather than a flat seam */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-cga-warm-white via-cga-warm-white/30 to-transparent lg:w-[34rem]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-tr from-cga-warm-white/60 via-cga-warm-white/10 to-transparent lg:w-72"
            />
            {/* Subtle warm wash to unify the photo's tone with the page */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-cga-warm-white/15 via-transparent to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cga-warm-white/70 to-transparent lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cga-warm-white/40 to-transparent"
            />
          </div>
        </div>
      </div>

      <WhyOperatingPartner />
      <WhenCompaniesBringUsIn />
      <WhatWeDo />
      <WhyTidalPoint />
      <Perspective />
      <Conversation />
    </RootLayout>
  )
}
