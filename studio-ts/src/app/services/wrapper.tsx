import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import { type Service, type MDXEntry, loadServices } from '@/lib/mdx'

// ─── CTA ─────────────────────────────────────────────────────────────────────

function ServiceCTA() {
  return (
    <div className="bg-cga-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to talk about whether this is the right fit?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free — and it&rsquo;s a real conversation, not
            a discovery call with a pitch at the end. Bring your situation.
            We&rsquo;ll tell you honestly what we think.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule a Free Consultation
            </Link>
            <p className="mt-4 text-sm text-white/60">
              No commitment. No pitch deck. Just a conversation with someone
              who&rsquo;s been in the seat.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Other Services ───────────────────────────────────────────────────────────

function OtherServices({
  current,
  allServices,
}: {
  current: MDXEntry<Service>
  allServices: Array<MDXEntry<Service>>
}) {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cga-navy">
            Three ways we work with your business.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {allServices.map((s) => {
            const isCurrent = s.href === current.href
            return (
              <FadeIn key={s.href}>
                {isCurrent ? (
                  <div className="rounded-2xl bg-cga-navy p-8 ring-2 ring-cga-gold h-full">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                      {s.tag}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {s.description}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-cga-gold">
                      Current page
                    </p>
                  </div>
                ) : (
                  <Link href={s.href} className="group block h-full">
                    <div className="rounded-2xl bg-white p-8 ring-1 ring-cga-navy/10 transition group-hover:ring-cga-teal h-full">
                      <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                        {s.tag}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-bold text-cga-navy transition group-hover:text-cga-teal">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-cga-body">
                        {s.description}
                      </p>
                      <p className="mt-5 text-sm font-semibold text-cga-teal">
                        Learn more &rarr;
                      </p>
                    </div>
                  </Link>
                )}
              </FadeIn>
            )
          })}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default async function ServiceLayout({
  service,
  children,
}: {
  service: MDXEntry<Service>
  children: React.ReactNode
}) {
  const allServices = await loadServices()

  return (
    <RootLayout>
      {/* Hero — tagline + image side by side */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:gap-x-16">
          <FadeIn className="lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
              {service.tag}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-cga-navy sm:text-5xl">
              {service.tagline}
            </h1>
            <p className="mt-6 text-lg text-cga-body leading-relaxed">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-cga-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-cga-navy/90"
            >
              Schedule a Free Consultation
            </Link>
          </FadeIn>

          {service.image && (
            <FadeIn className="mt-12 flex justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
              <div className="w-full max-w-lg">
                <StylizedImage
                  {...service.image}
                  shape={service.imageShape ?? 0}
                  sizes="(min-width: 1024px) 32rem, 90vw"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </Container>

      {/* Metadata strip */}
      <FadeIn>
        <div className="mt-16 border-t border-neutral-200 bg-cga-sand sm:mt-24">
          <Container>
            <dl className="grid grid-cols-1 text-sm sm:grid-cols-3">
              <div className="border-t border-neutral-200 px-0 py-6 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0 sm:px-8">
                <dt className="font-semibold text-cga-navy">Who It&rsquo;s For</dt>
                <dd className="mt-1 text-cga-body">{service.whoItsFor}</dd>
              </div>
              <div className="border-t border-neutral-200 px-0 py-6 sm:border-t-0 sm:border-l sm:px-8">
                <dt className="font-semibold text-cga-navy">Engagement Type</dt>
                <dd className="mt-1 text-cga-body">{service.engagementType}</dd>
              </div>
              <div className="border-t border-neutral-200 px-0 py-6 sm:border-t-0 sm:border-l sm:px-8">
                <dt className="font-semibold text-cga-navy">Typical Duration</dt>
                <dd className="mt-1 text-cga-body">{service.typicalDuration}</dd>
              </div>
            </dl>
          </Container>
        </div>
      </FadeIn>

      {/* MDX body */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {/* Stats strip */}
      {service.stats && service.stats.length > 0 && (
        <div className="mt-16 bg-cga-navy">
          <Container>
            <FadeInStagger faster>
              <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
                {service.stats.map((stat) => (
                  <FadeIn key={stat.label}>
                    <div className="bg-cga-navy px-8 py-10">
                      <dd className="font-display text-3xl font-extrabold text-cga-gold sm:text-4xl">
                        {stat.value}
                      </dd>
                      <dt className="mt-2 text-sm font-medium text-white/70 leading-snug">
                        {stat.label}
                      </dt>
                    </div>
                  </FadeIn>
                ))}
              </dl>
            </FadeInStagger>
          </Container>
        </div>
      )}

      <OtherServices current={service} allServices={allServices} />
      <ServiceCTA />
    </RootLayout>
  )
}
