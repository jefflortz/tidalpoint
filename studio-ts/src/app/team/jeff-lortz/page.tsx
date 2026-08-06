import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { getPersonSchema } from '../../schema'

export const metadata: Metadata = {
  title: 'Jeff Lortz — Founder & Operating Partner',
  description:
    'Meet Jeff Lortz, founder and Operating Partner at Tidal Point Partners. Former PE-backed CEO, public-company operator and US Navy officer.',
  alternates: { canonical: '/team/jeff-lortz' },
  openGraph: {
    title: 'Jeff Lortz — Founder & Operating Partner',
    description:
      'Former PE-backed CEO and experienced executive operator working alongside privately held business owners and leadership teams.',
    url: '/team/jeff-lortz',
    type: 'profile',
  },
}

const profileStats = [
  { value: '25+', label: 'Years operating businesses' },
  { value: '2', label: 'PE-backed CEO roles' },
  { value: '2', label: 'Public-company transitions' },
]

const careerChapters = [
  {
    number: '01',
    period: 'United States Navy',
    title: 'Leadership under consequence',
    body: 'Eight years as a nuclear-qualified Surface Warfare Officer established the operating principles Jeff still carries: systems matter, standards matter and leadership means owning outcomes.',
  },
  {
    number: '02',
    period: 'Enterprise & public companies',
    title: 'Building through complexity',
    body: 'Across senior operating roles in enterprise technology, Jeff led global teams, rebuilt commercial organizations, navigated acquisitions and helped guide companies through public-market transitions.',
  },
  {
    number: '03',
    period: 'PE-backed CEO',
    title: 'The weight of the seat',
    body: 'As CEO of two private-equity-backed businesses, Jeff carried full accountability for strategy, performance, leadership, board relationships and the decisions that determined enterprise value.',
  },
]

const experienceAreas = [
  'Growth strategy & positioning',
  'Leadership alignment & team design',
  'Operating rhythm & accountability',
  'Go-to-market transformation',
  'Acquisition integration',
  'Owner dependency & succession readiness',
]

const credentials = [
  'MBA, University of Rhode Island',
  'BS Mechanical Engineering, University of New Hampshire',
  'US Navy Surface Warfare Officer — Nuclear Qualified',
  'Certified Executive & Business Coach, FocalPoint',
]

function Hero() {
  return (
    <section className="bg-tidal-warm-white py-16 sm:py-24 lg:py-28">
      <Container>
        <FadeIn>
          <Link
            href="/about#operating-partners"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase transition hover:text-tidal-navy"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            Operating Partners
          </Link>
        </FadeIn>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-tidal-navy">
              <Image
                src="/images/people/jeff-lortz-home.jpg"
                alt="Jeff Lortz, founder and operating partner"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[61%_50%] saturate-[0.72] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-tidal-navy/10 mix-blend-multiply" />
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Founder &amp; Operating Partner
            </p>
            <h1 className="mt-5 font-display text-6xl leading-none font-medium tracking-tight text-tidal-navy sm:text-7xl lg:text-8xl">
              Jeff Lortz
            </h1>
            <p className="mt-7 max-w-2xl font-display text-2xl leading-snug font-medium text-tidal-navy sm:text-3xl">
              An experienced executive operator who understands the decisions
              from inside the seat.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-tidal-body">
              Jeff works alongside owners and leadership teams when growth,
              change or transition has raised the consequence of every call.
              He brings a whole-business perspective, direct operating
              experience and a bias toward practical progress.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="mt-14 grid grid-cols-1 border-y border-tidal-navy/15 sm:mt-20 sm:grid-cols-3">
          {profileStats.map((stat) => (
            <FadeIn
              key={stat.label}
              className="border-t border-tidal-navy/15 py-7 first:border-t-0 sm:border-t-0 sm:border-l sm:px-8 sm:py-9 sm:first:border-l-0 sm:first:pl-0"
            >
              <p className="font-display text-4xl font-medium text-tidal-navy sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-tidal-body/65 uppercase">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Perspective() {
  return (
    <section className="bg-tidal-navy py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Operating Perspective
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl">
              Build the business so leadership is a source of leverage—not a
              point of dependency.
            </h2>
          </FadeIn>
          <FadeIn className="space-y-6 text-lg leading-8 text-white/70 lg:col-span-6 lg:col-start-7">
            <p>
              Jeff believes durable performance comes from clear choices,
              capable leaders and operating systems that do not depend on
              heroic effort from one person.
            </p>
            <p>
              His role is not to take the business away from its leadership.
              It is to help leaders see the whole system, make the calls only
              they can make and build the capability required to carry those
              decisions forward.
            </p>
            <blockquote className="border-l-2 border-tidal-teal pl-6 font-display text-2xl leading-snug font-medium text-white sm:text-3xl">
              &ldquo;The objective is not to make the business dependent on an
              Operating Partner. It is to make the business stronger because
              the partnership existed.&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function CareerChapters() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
            Experience That Shapes the Work
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
            Three chapters. One operating perspective.
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-14 grid grid-cols-1 border-t border-tidal-navy/15 lg:mt-16 lg:grid-cols-3">
          {careerChapters.map((chapter) => (
            <FadeIn
              key={chapter.number}
              className="border-b border-tidal-navy/15 py-9 lg:border-r lg:px-9 lg:py-11 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-tidal-teal uppercase">
                {chapter.number} / {chapter.period}
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight font-semibold text-tidal-navy">
                {chapter.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-tidal-body">
                {chapter.body}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Experience() {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Areas of Experience
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">
              Where experience creates leverage.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-tidal-body">
              These are contexts Jeff has led through—not a menu of packaged
              services.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 border-t border-tidal-navy/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {experienceAreas.map((area, index) => (
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

        <FadeIn className="mt-16 border-t border-tidal-navy/15 pt-10 sm:mt-20 sm:pt-12 lg:grid lg:grid-cols-12 lg:gap-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase lg:col-span-3">
            Education &amp; Credentials
          </p>
          <ul className="mt-6 grid gap-x-10 gap-y-4 text-sm leading-6 text-tidal-body sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:mt-0">
            {credentials.map((credential) => (
              <li key={credential} className="border-b border-tidal-navy/10 pb-4">
                {credential}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  )
}

function AuthoredPerspective() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative min-h-[20rem] overflow-hidden lg:col-span-6 lg:min-h-[25rem]">
            <Image
              src="/images/articles/why-your-business-still-runs-through-you.jpg"
              alt="Business leaders in discussion"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover saturate-[0.72] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-tidal-navy/10 mix-blend-multiply" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Perspective by Jeff
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-medium tracking-tight text-tidal-navy sm:text-5xl">
              Why Your Business Still Runs Through You
            </h2>
            <p className="mt-5 text-base leading-7 text-tidal-body">
              Owner dependency is not a people problem. It is a structural
              one—and it is fixable.
            </p>
            <Link
              href="/articles/why-your-business-still-runs-through-you"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-tidal-navy transition hover:text-tidal-teal"
            >
              Read the perspective
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

function CTA() {
  return (
    <section className="bg-tidal-navy py-20 sm:py-24">
      <Container>
        <FadeIn className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              Begin a Conversation
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-medium text-white sm:text-5xl">
              Start with the business. Decide together what comes next.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex bg-white px-7 py-3.5 text-sm font-semibold tracking-[0.1em] text-tidal-navy uppercase transition hover:bg-tidal-sand"
            >
              Begin a Conversation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function JeffLortzProfile() {
  const schema = getPersonSchema()

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <Perspective />
      <CareerChapters />
      <Experience />
      <AuthoredPerspective />
      <CTA />
    </RootLayout>
  )
}
