import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { type ClientProfile, type MDXEntry, loadClientProfiles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Client Profiles',
  description:
    'Representative engagements from Coastal Growth Advisors — the kinds of businesses we work with and the problems we solve across Southeastern Massachusetts.',
}

function ProfileList({
  profiles,
}: {
  profiles: Array<MDXEntry<ClientProfile>>
}) {
  return (
    <Container className="mt-40">
      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {profiles.map((profile) => (
          <FadeIn key={profile.href}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                {/* Sidebar */}
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                      {profile.industry}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold text-cga-navy">
                      {profile.title}
                    </h3>
                  </div>
                  <div className="mt-4 sm:mt-0 lg:mt-6">
                    <p className="text-sm text-cga-light">
                      {profile.companySize}
                    </p>
                    <p className="mt-1 text-sm text-cga-light">
                      {profile.engagementType}
                    </p>
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-3xl font-bold text-cga-navy">
                    <Link href={profile.href} className="hover:text-cga-teal transition">
                      {profile.summary}
                    </Link>
                  </p>
                  <div className="mt-8">
                    <Link
                      href={profile.href}
                      className="inline-flex rounded-full bg-cga-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-cga-navy/90"
                    >
                      Read the full profile
                    </Link>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function ClientsCTA() {
  return (
    <div className="bg-cga-teal mt-24 sm:mt-32 lg:mt-40 py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recognize your business in one of these?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. We&rsquo;ll tell you honestly whether
            we&rsquo;re the right fit — and what we&rsquo;d do if we worked together.
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

export default async function Clients() {
  const profiles = await loadClientProfiles()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Who We Work With"
        title="Real businesses. Real complexity. Real results."
      >
        <p>
          These profiles represent the kinds of owner-led businesses we work with
          across the South Shore, South Coast, and Cape Cod. The details are
          representative — the problems are ones we see every week.
        </p>
      </PageIntro>

      <FadeInStagger>
        <ProfileList profiles={profiles} />
      </FadeInStagger>

      <ClientsCTA />
    </RootLayout>
  )
}
