import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

// TEMPORARY — replace with the final mill-exterior photograph once supplied.
// Swap this path only; the hero layout does not need to change.
const heroImageSrc = '/images/hero-exterior-temp.png'

export const metadata: Metadata = {
  description:
    'Tidal Point Partners is an Operating Partnership for privately held businesses — bringing real operating experience to growth, transition, and execution.',
}

// ─── Business Evolution ──────────────────────────────────────────────────────

function BusinessEvolution() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Business Evolution
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            The market keeps moving. So should the business.
          </h2>
          <div className="mt-8 max-w-2xl">
            <p className="text-lg text-cga-body leading-relaxed">
              Markets shift. Technology changes. Customer expectations rise.
              Competitors adapt. Every business evolves on the inside while
              the world evolves around it — and the company that created
              today&rsquo;s success isn&rsquo;t always the company required for
              tomorrow&rsquo;s.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── When Owners Bring Us In ──────────────────────────────────────────────────

const situations = [
  {
    title: 'Accelerate & Execute',
    body: 'Businesses with real momentum that need new capabilities to sustain growth — before the current model runs out of room.',
  },
  {
    title: 'Unlock & Execute',
    body: 'Businesses that have plateaued and need to identify — and execute — the next source of value creation.',
  },
  {
    title: 'Prepare & Execute',
    body: 'Businesses preparing for succession, acquisition, recapitalization, or sale — moments where the next decision determines who leads and owns the business next.',
  },
]

function WhenOwnersBringUsIn() {
  return (
    <div className="bg-cga-sand py-28 sm:py-40">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            When Owners Bring Us In
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            The moments that call for a different kind of partner.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
          {situations.map((situation) => (
            <FadeIn key={situation.title}>
              <div className="border-t-2 border-cga-teal pt-6">
                <h3 className="font-display text-2xl font-bold text-cga-navy">
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

// ─── Operating Partnership ────────────────────────────────────────────────────

const partnershipPrinciples = [
  {
    title: 'Strategic Judgment',
    body: 'Perspective shaped by having made these calls before, not just studied them.',
  },
  {
    title: 'Execution',
    body: 'A plan matters less than the discipline to carry it out.',
  },
  {
    title: 'Accountability',
    body: 'We stay close enough to the outcome to own it.',
  },
  {
    title: 'Long-Term Partnership',
    body: 'We work alongside leadership through the stage that’s actually next — not a single project.',
  },
]

function OperatingPartnership() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Operating Partnership
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            We stay for the work — not just the recommendation.
          </h2>
          <p className="mt-6 text-lg text-cga-body leading-relaxed">
            A plan is easy to hand over. Staying to make it work is the job.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {partnershipPrinciples.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="border-t border-cga-navy/10 pt-6">
                <h3 className="font-display text-lg font-bold text-cga-navy">
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

// ─── Experience ───────────────────────────────────────────────────────────────

const credentials = [
  { company: 'Everbridge (Nasdaq: EVBG)', role: 'Leadership · IPO' },
  { company: 'ProcessMaker / Fastr Corp', role: 'CEO · PE-Backed' },
  { company: 'PTC · BMC · Pegasystems', role: 'C-Suite Operator' },
  { company: 'US Navy', role: 'Surface Warfare · Nuclear Qualified' },
]

function Experience() {
  return (
    <div className="bg-cga-navy py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-warm-white">
            Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            He&rsquo;s actually been in the seat.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Most advice comes from studying decisions. Jeff&rsquo;s comes
                from making them — as a PE-backed CEO, through a Nasdaq IPO,
                through acquisitions and growth that outpaced the systems
                built to handle it. That&rsquo;s the difference between advice
                and judgment.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Before that, he served as a nuclear-qualified Surface Warfare
                Officer aboard nuclear-powered Navy ships. He lives in
                Plymouth and works with Southeastern Massachusetts business
                owners as the operating partner they never had.
              </p>
              <blockquote className="border-l-4 border-cga-gold pl-6">
                <p className="text-xl italic text-white leading-relaxed">
                  &ldquo;I&rsquo;ve made these calls myself. I know what keeps owners up
                  at night — because it kept me up too.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-cga-warm-white">
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
                    <dd className="mt-1 text-sm text-cga-warm-white">{cred.role}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-cga-warm-white hover:text-cga-warm-white/80"
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

// ─── Perspective ──────────────────────────────────────────────────────────────

function Perspective() {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Perspective
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cga-navy sm:text-5xl">
            A closer look at how we think.
          </h2>
        </FadeIn>
        <FadeIn className="mt-12 max-w-2xl">
          <Link
            href="/articles/why-your-business-still-runs-through-you"
            className="group block rounded-2xl bg-white p-8 ring-1 ring-cga-navy/10 transition hover:ring-cga-teal"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
              Operations
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-cga-navy transition group-hover:text-cga-teal">
              Why Your Business Still Runs Through You
            </h3>
            <p className="mt-3 text-base leading-relaxed text-cga-body">
              Owner dependency isn&rsquo;t a people problem. It&rsquo;s a structural
              one — and it&rsquo;s fixable.
            </p>
            <p className="mt-5 text-sm font-semibold text-cga-teal">
              Read the piece &rarr;
            </p>
          </Link>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Conversation ─────────────────────────────────────────────────────────────

function Conversation() {
  return (
    <div className="bg-cga-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Let&rsquo;s start with a conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            No pitch, no packaged program — just a conversation about where
            your business is, and what&rsquo;s next.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-cga-teal uppercase shadow transition hover:bg-cga-sand"
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

export default function Home() {
  return (
    <RootLayout>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-cga-warm-white">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Text column */}
          <div className="relative z-10 px-6 py-16 sm:py-24 lg:px-8 lg:py-32 lg:pr-16">
            <FadeIn className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-cga-teal">
                For Privately Held Businesses &middot; Southeastern
                Massachusetts
              </p>
              <div className="mt-6 h-px w-12 bg-cga-teal" />
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-cga-navy sm:text-6xl lg:text-7xl">
                The business that got you here isn&rsquo;t the business you
                need next.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-cga-body leading-relaxed">
                We work alongside owners and leadership teams to make the
                decisions — and do the work — the next stage requires.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-cga-navy px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase shadow transition hover:bg-cga-navy/90"
                >
                  Start a Conversation
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Image column — full-bleed on lg+, stacked block below the text on smaller screens */}
          <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:left-1/2 lg:h-full lg:w-screen">
            <Image
              src={heroImageSrc}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            {/* Soft fade into the warm-white content area */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-cga-warm-white to-transparent lg:w-1/3"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cga-warm-white/70 to-transparent lg:hidden"
            />
          </div>
        </div>
      </div>

      <BusinessEvolution />
      <WhenOwnersBringUsIn />
      <OperatingPartnership />
      <Experience />
      <Perspective />
      <Conversation />
    </RootLayout>
  )
}
