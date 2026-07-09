import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageLaptop from '@/images/laptop.jpg'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Coastal Growth Advisors offers three core services for owner-led businesses: performance planning, executive coaching, and revenue growth advisory. Tailored for $5M-$50M revenue companies.',
  openGraph: {
    title: 'Business Advisory Services - Coastal Growth Advisors',
    description:
      'Performance planning, executive coaching, and revenue growth advisory for Southeastern Massachusetts business owners.',
    type: 'website',
  },
}

function Section({
  eyebrow,
  title,
  href,
  image,
  children,
}: {
  eyebrow: string
  title: string
  href: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cga-navy sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
            <div className="mt-8">
              <Link
                href={href}
                className="inline-flex rounded-full bg-cga-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-cga-navy/90"
              >
                Learn more &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function PerformancePlanning() {
  return (
    <Section
      eyebrow="Strategy & Execution"
      title="Business Performance Planning"
      href="/services/performance-planning"
      image={{ src: imageWhiteboard, shape: 0 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Most owner-led businesses don&rsquo;t have a strategy problem. They
          have an{' '}
          <strong className="font-semibold text-neutral-950">
            execution problem.
          </strong>
        </p>
        <p>
          Business Performance Planning installs a 90-day operating rhythm built
          around strategic prioritization, KPI accountability, and execution
          discipline. The operating system your business has been missing —
          finally installed.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="90-day operating rhythm">
          Strategic priorities set, accountability structure in place, progress
          measurable from week one.
        </ListItem>
        <ListItem title="KPI accountability">
          Define the metrics that reflect your real business model — and a
          cadence that keeps everyone on them.
        </ListItem>
        <ListItem title="Advisory retainer">
          Direct access to Jeff throughout. Not a binder at the end.
        </ListItem>
      </List>
    </Section>
  )
}

function CEOCoaching() {
  return (
    <Section
      eyebrow="Executive Coaching"
      title="Owner & CEO Coaching"
      href="/services/ceo-coaching"
      image={{ src: imageMeeting, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Running a privately held business is a{' '}
          <strong className="font-semibold text-neutral-950">
            fundamentally isolated experience.
          </strong>
        </p>
        <p>
          FocalPoint-based 1:1 coaching for owners who are excellent at their
          trade but need a trusted thinking partner for the decisions that keep
          them up at night. Real work on real problems — not a curriculum walked
          through in sequence.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Monthly 1:1 sessions">
          90 minutes, structured. Built around what&rsquo;s actually in front of
          you right now.
        </ListItem>
        <ListItem title="FocalPoint methodology">
          Certified executive and business coaching framework — applied to your
          specific goals.
        </ListItem>
        <ListItem title="25+ years in the seat">
          A coach who has already made the mistakes you might be about to make.
        </ListItem>
      </List>
    </Section>
  )
}

function RevenueGrowth() {
  return (
    <Section
      eyebrow="Sales & Marketing"
      title="Revenue Growth Advisory"
      href="/services/revenue-growth"
      image={{ src: imageLaptop, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In most owner-led businesses,{' '}
          <strong className="font-semibold text-neutral-950">
            the owner is the revenue engine.
          </strong>
        </p>
        <p>
          Sales process design, pipeline discipline, and GTM infrastructure for
          businesses that are growing — but can&rsquo;t yet explain exactly why,
          or how to make it happen faster and more reliably.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Sales process design">
          A defined process your team can follow — not one that only works when
          you&rsquo;re personally in the deal.
        </ListItem>
        <ListItem title="Pipeline discipline">
          Measurable pipeline at every stage. CRM structure that reflects how
          your buyers actually buy.
        </ListItem>
        <ListItem title="GTM infrastructure">
          Go-to-market strategy, ICP definition, and a repeatable revenue model.
        </ListItem>
      </List>
    </Section>
  )
}

function ServicesCTA() {
  return (
    <div className="bg-cga-teal mt-24 sm:mt-32 lg:mt-40 py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The free consultation is designed for exactly that. We&rsquo;ll talk
            through your situation and tell you honestly what would move the
            needle.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export default function Services() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our Services"
        title="Three ways we work with your business."
      >
        <p>
          Every engagement starts with a free consultation. No packaged
          programs, no fixed retainers before you&rsquo;re ready. We design the
          scope around your business.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <PerformancePlanning />
        <CEOCoaching />
        <RevenueGrowth />
      </div>

      <ServicesCTA />
    </RootLayout>
  )
}
