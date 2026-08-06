import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ArticleCarousel } from '@/components/ArticleCarousel'
import { RootLayout } from '@/components/RootLayout'
import { GrowthIcon, AlignmentIcon, MaturityIcon } from '@/components/OutcomeIcons'
import { OperatingModelRing } from '@/components/OperatingModelRing'
import { formatDate } from '@/lib/formatDate'
import { getArticles } from '@/sanity/content'

export const metadata: Metadata = {
  title: {
    absolute: 'Experienced Operating Partners for Privately Held Businesses',
  },
  description:
    'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Experienced Operating Partners for Privately Held Businesses',
    description:
      'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
    url: '/',
    siteName: 'Tidal Point Partners',
    type: 'website',
    images: [
      {
        url: '/tidal-point-home-featured.jpg',
        width: 1200,
        height: 675,
        alt: 'Navigation lines converging on a pivotal point',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experienced Operating Partners for Privately Held Businesses',
    description:
      'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
    images: ['/tidal-point-home-featured.jpg'],
  },
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
    number: '01',
    title: 'Growth is outpacing the organization.',
    body: 'New markets, acquisitions or expansion are moving faster than the leadership and systems supporting them.',
  },
  {
    number: '02',
    title: 'Performance has stalled.',
    body: 'Growth has slowed or margins are compressing, and the underlying constraint is not obvious from inside the business.',
  },
  {
    number: '03',
    title: 'An acquisition needs to become one business.',
    body: 'Incentives, leadership and operating decisions cannot wait for the transition or earn-out period to end.',
  },
  {
    number: '04',
    title: 'Succession is getting closer.',
    body: 'The owner is preparing to step back, transfer leadership or sell—but the company still depends on one person.',
  },
  {
    number: '05',
    title: 'Accountability now extends beyond the owner.',
    body: 'A board, investors or employee-owners expect a defensible plan and a leadership team capable of carrying it.',
  },
  {
    number: '06',
    title: 'The leadership team must evolve.',
    body: 'Important seats need to be filled and capable people need to grow while the company continues operating.',
  },
]

function TheSituationsWeAreBroughtInto() {
  return (
    <div className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-7 border-b border-tidal-navy/15 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              When Leaders Call Us
            </p>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Pivotal moments rarely arrive one at a time.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-tidal-body lg:col-span-5 lg:col-start-8 lg:pb-1">
            The need for an Operating Partner usually becomes clear when
            complexity is rising, the stakes are higher and familiar ways of
            working are no longer enough.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
          {situations.map((situation) => (
            <FadeIn
              key={situation.number}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-tidal-navy/15 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-x-6 sm:py-10"
            >
              <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-tidal-teal">
                {situation.number}
              </span>
              <div>
                <h3 className="max-w-lg font-display text-2xl leading-tight font-semibold text-tidal-navy sm:text-[1.7rem]">
                  {situation.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-tidal-body">
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
    number: '01',
    title: 'Clarify',
    headline: 'See what matters most.',
    body: 'Identify the few decisions with the greatest leverage and pressure-test the assumptions beneath them.',
  },
  {
    number: '02',
    title: 'Decide',
    headline: 'Make the difficult calls.',
    body: 'Bring an experienced point of view into the room when the answer is consequential and not immediately clear.',
  },
  {
    number: '03',
    title: 'Drive',
    headline: 'Turn judgment into progress.',
    body: 'Stay through execution, remove obstacles and remain accountable for whether the decision creates the intended result.',
  },
  {
    number: '04',
    title: 'Extend',
    headline: 'Add capability when needed.',
    body: 'Bring in trusted specialists for defined work without fragmenting ownership or asking you to manage multiple firms.',
  },
]

function WhatWeDo() {
  return (
    <div id="how-we-work" className="scroll-mt-24 bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              How We Work
            </p>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl">
              Judgment that stays through the work.
            </h2>
          </div>
          <div className="max-w-2xl self-end lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-8 text-white/70">
              An Operating Partner does more than deliver a recommendation.
              The value is in helping make the call, carrying it into action
              and staying accountable for what happens next.
            </p>
            <Link
              href="/services"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition hover:text-tidal-teal"
            >
              Explore how we work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
        <FadeInStagger className="relative mt-16 grid grid-cols-1 border-t border-white/20 sm:mt-20 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,#7a9e9f_0%,#7a9e9f_34%,#d6ccc0_67%,rgba(255,255,255,0.2)_100%)] lg:block"
          />
          {partnershipPrinciples.map((principle) => (
            <FadeIn
              key={principle.number}
              className="relative border-b border-white/15 py-9 lg:border-r lg:border-b-0 lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-tidal-teal">
                {principle.number} / {principle.title}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight font-semibold text-white sm:text-3xl">
                {principle.headline}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {principle.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Operating Model ─────────────────────────────────────────────────────────

const operatingOutcomes = [
  {
    number: '01',
    label: 'Growth',
    body: 'Create and capture profitable growth with sharper choices about where to play and how to win.',
    icon: GrowthIcon,
    accent: 'bg-tidal-teal',
    iconBackground: 'bg-tidal-teal/15',
    panelBackground: 'bg-[#dcebea]',
  },
  {
    number: '02',
    label: 'Leadership & Team',
    body: 'Build the leadership, accountability and organizational clarity required for the next stage.',
    icon: AlignmentIcon,
    accent: 'bg-tidal-navy',
    iconBackground: 'bg-tidal-navy/10',
    panelBackground: 'bg-[#dfe5eb]',
  },
  {
    number: '03',
    label: 'Operational Maturity',
    body: 'Strengthen the systems and operating discipline that turn good decisions into durable performance.',
    icon: MaturityIcon,
    accent: 'bg-tidal-sand',
    iconBackground: 'bg-tidal-sand/35',
    panelBackground: 'bg-[#eee8e1]',
  },
]

function OperatingModel() {
  return (
    <div
      id="operating-model"
      className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
            The Operating Model
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.98] font-medium tracking-tight text-tidal-navy sm:text-6xl lg:text-7xl">
            One seat. Broader impact.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-tidal-body">
            One experienced Operating Partner works alongside you—bringing
            judgment, accountability and the ability to move the business
            forward.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-center gap-16 border-t border-tidal-navy/15 pt-14 lg:mt-20 lg:grid-cols-12 lg:gap-12 lg:pt-20">
          <FadeIn className="mx-auto w-full max-w-[29rem] lg:col-span-5 lg:mx-0">
            <div className="lg:-translate-y-8">
              <OperatingModelRing />
            </div>
          </FadeIn>

          <FadeInStagger className="lg:col-span-6 lg:col-start-7">
            {operatingOutcomes.map((outcome) => (
              <FadeIn
                key={outcome.number}
                className={`relative grid grid-cols-[3.25rem_1fr] gap-x-4 border-t border-tidal-warm-white px-5 py-7 first:border-t-0 sm:grid-cols-[4rem_1fr] sm:gap-x-6 sm:px-7 sm:py-9 ${outcome.panelBackground}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-[3px] ${outcome.accent}`}
                />
                <div>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-tidal-navy ${outcome.iconBackground}`}
                  >
                    <outcome.icon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 block text-[10px] font-semibold tracking-[0.16em] text-tidal-body/65">
                    {outcome.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-tidal-navy sm:text-3xl">
                    {outcome.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-tidal-body">
                    {outcome.body}
                  </p>
                </div>
              </FadeIn>
            ))}
            <FadeIn className="mt-8 border-t border-tidal-navy/15 pt-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-tidal-navy transition hover:text-tidal-teal"
              >
                Explore the operating model
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </FadeIn>
          </FadeInStagger>
        </div>

        <FadeIn className="mt-20 border-y border-tidal-navy/15 py-10 sm:mt-28 sm:py-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase lg:col-span-2">
            The Network
          </p>
          <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-medium tracking-tight text-tidal-navy sm:text-4xl lg:col-span-4 lg:mt-0">
            The right expertise, brought in at the right moment.
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-7 text-tidal-body lg:col-span-5 lg:col-start-8 lg:mt-1">
            Your Operating Partner remains accountable. Specialists join for
            defined work when the situation requires capability beyond the
            seat—without asking you to manage a collection of firms.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Why Tidal Point ──────────────────────────────────────────────────────────

const founderCredentials = [
  { value: '25+', label: 'Years operating businesses' },
  { value: '2', label: 'PE-backed CEO roles' },
  { value: '2', label: 'Companies taken public' },
]

function WhyTidalPoint() {
  return (
    <div className="overflow-hidden bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Why Tidal Point
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              The seat is only as good as who&rsquo;s in it.
            </h2>
          </FadeIn>

          <FadeIn className="self-end lg:col-span-5 lg:col-start-8">
            <p className="max-w-2xl text-lg leading-8 text-white/75">
              Tidal Point was founded by Jeff Lortz, a former PE-backed CEO
              and senior operating executive. The firm is built around
              experienced Operating Partners who bring firsthand judgment,
              direct accountability and broader capability to the businesses
              they support.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
              Each relationship is led by a senior operator—not passed through
              a junior team or divided among a collection of firms.
            </p>
            <Link
              href="/about#operating-partners"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition hover:text-tidal-teal"
            >
              Meet our Operating Partners
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase sm:mt-20">
          Founding Operating Experience
        </FadeIn>
        <FadeInStagger className="mt-5 grid grid-cols-1 border-y border-white/15 sm:grid-cols-3">
          {founderCredentials.map((credential) => (
            <FadeIn
              key={credential.label}
              className="border-t border-white/15 py-7 first:border-t-0 sm:border-t-0 sm:border-l sm:px-8 sm:py-9 sm:first:border-l-0 sm:first:pl-0"
            >
              <p className="font-display text-4xl font-medium text-white sm:text-5xl">
                {credential.value}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">
                {credential.label}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Perspective ──────────────────────────────────────────────────────────────

async function Perspective() {
  const articles = await getArticles()
  const article = articles.find((item) => item.featured) ?? articles[0]

  if (!article) return null

  const recentArticles = articles
    .filter((item) => item._id !== article._id)
    .slice(0, 3)

  return (
    <div className="bg-tidal-warm-white py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn className="flex flex-col gap-7 border-b border-tidal-navy/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Perspective
            </p>
            <h2 className="mt-5 font-display text-5xl leading-none font-medium tracking-tight text-tidal-navy sm:text-6xl">
              A closer look at how we think.
            </h2>
          </div>
          <Link
            href="/articles"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold tracking-wide text-tidal-navy transition hover:text-tidal-teal"
          >
            View all perspectives
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </FadeIn>

        <FadeIn className="mt-12 lg:mt-16">
          <article className="group grid overflow-hidden bg-white ring-1 ring-tidal-navy/10 lg:grid-cols-12">
            <Link
              href={article.href}
              className="relative block min-h-[18rem] overflow-hidden lg:col-span-7 lg:min-h-[29rem]"
              aria-label={`Read ${article.title}`}
            >
              <Image
                src={article.featuredImage ?? '/tidal-point-home-featured.jpg'}
                alt={article.featuredImageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.015]"
              />
            </Link>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12 xl:p-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                  {article.category ?? 'Perspective'}
                  <span className="px-2 text-tidal-navy/25">/</span>
                  {formatDate(article.date)}
                </p>
                <h3 className="mt-6 max-w-lg font-display text-4xl leading-[1.06] font-medium tracking-tight text-tidal-navy sm:text-5xl">
                  <Link
                    href={article.href}
                    className="transition group-hover:text-tidal-teal"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-6 max-w-lg text-base leading-7 text-tidal-body">
                  {article.description}
                </p>
              </div>
              <Link
                href={article.href}
                className="mt-10 inline-flex items-center gap-3 border-t border-tidal-navy/15 pt-7 text-sm font-semibold tracking-wide text-tidal-navy transition group-hover:text-tidal-teal"
              >
                Read the perspective
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        </FadeIn>

        {recentArticles.length > 0 && (
          <FadeIn className="mt-8 lg:mt-10">
            <ArticleCarousel articles={recentArticles} />
          </FadeIn>
        )}
      </Container>
    </div>
  )
}

// ─── How It Begins ────────────────────────────────────────────────────────────

const beginningSteps = [
  {
    number: '01',
    title: 'An Introductory Conversation',
    body: 'We begin with a substantive conversation about the business—its ambitions, its context and the questions carrying the most consequence.',
  },
  {
    number: '02',
    title: 'A Shared Perspective',
    body: 'We offer an experienced point of view on what we hear, where the greatest leverage may be and what deserves attention first.',
  },
  {
    number: '03',
    title: 'A Way Forward',
    body: 'Together, we agree on the priorities, the role Tidal Point should play and how the partnership can create the most value.',
  },
]

function HowItBegins() {
  return (
    <div className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              How It Begins
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              A thoughtful beginning. A shared path forward.
            </h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-tidal-body lg:col-span-5 lg:col-start-8 lg:pb-1">
            The first conversation should be valuable in its own right. We
            listen carefully, bring a point of view and decide together
            whether there is a meaningful path forward.
          </p>
        </FadeIn>

        <FadeInStagger className="relative mt-16 grid grid-cols-1 sm:mt-20 lg:grid-cols-3">
          <span
            aria-hidden="true"
            className="absolute top-[0.45rem] right-0 left-0 hidden h-px bg-tidal-navy/20 lg:block"
          />
          {beginningSteps.map((step) => (
            <FadeIn
              key={step.number}
              className="relative border-l border-tidal-navy/20 pb-11 pl-8 last:pb-0 lg:border-l-0 lg:px-8 lg:pb-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 -left-[0.3rem] h-2.5 w-2.5 rounded-full bg-tidal-teal ring-8 ring-white lg:left-0"
              />
              <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal lg:pt-8">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-tidal-navy sm:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-tidal-body">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-16 grid items-center gap-8 border-y border-tidal-navy/15 bg-tidal-warm-white px-6 py-9 sm:mt-24 sm:px-10 sm:py-11 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              The Partnership
            </p>
            <p className="mt-3 font-display text-3xl leading-tight font-medium text-tidal-navy sm:text-4xl">
              Clear expectations. Shared priorities. One accountable partner.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center bg-tidal-navy px-7 py-3.5 text-sm font-semibold tracking-[0.1em] text-white uppercase transition hover:bg-tidal-navy/90"
            >
              Begin a Conversation
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
    <RootLayout home>
      {/* Hero */}
      <div className="relative z-0 overflow-hidden bg-tidal-navy">
        <Image
          src="/tidal-point-home-featured.jpg"
          alt="Abstract navigation lines converging on a pivotal point"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[53%_50%] brightness-[1.14] contrast-[1.16] saturate-[1.12] sm:object-[63%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-tidal-navy/58 sm:bg-[linear-gradient(90deg,rgba(23,50,77,0.96)_0%,rgba(23,50,77,0.84)_43%,rgba(23,50,77,0.08)_100%)]" />
        <span
          aria-hidden="true"
          className="hero-pivot pointer-events-none absolute top-1/2 left-[90%] z-0 sm:left-[63%]"
        />
        <Container>
          <div className="pt-56 pb-24 sm:pt-60 sm:pb-32 lg:pt-64">
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
