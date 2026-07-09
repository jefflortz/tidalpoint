import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { type ClientProfile, type MDXEntry, loadClientProfiles } from '@/lib/mdx'

function ProfileCTA() {
  return (
    <div className="bg-cga-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recognize your business here?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. Bring your situation — we&rsquo;ll tell you
            honestly whether we&rsquo;re the right fit and what we&rsquo;d do if we worked
            together.
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

function OtherProfiles({
  current,
  allProfiles,
}: {
  current: MDXEntry<ClientProfile>
  allProfiles: Array<MDXEntry<ClientProfile>>
}) {
  const others = allProfiles.filter((p) => p.href !== current.href)
  if (others.length === 0) return null

  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            More Client Profiles
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cga-navy">
            Other businesses we&rsquo;ve worked with.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {others.map((profile) => (
            <FadeIn key={profile.href}>
              <Link href={profile.href} className="group block h-full">
                <div className="rounded-2xl bg-white p-8 ring-1 ring-cga-navy/10 transition group-hover:ring-cga-teal h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                    {profile.industry}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-cga-navy transition group-hover:text-cga-teal">
                    {profile.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cga-body">
                    {profile.summary}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-cga-teal">
                    Read profile &rarr;
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

export default async function ClientProfileLayout({
  clientProfile,
  children,
}: {
  clientProfile: MDXEntry<ClientProfile>
  children: React.ReactNode
}) {
  const allProfiles = await loadClientProfiles()

  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Client Profile" title={clientProfile.title} centered>
            <p>{clientProfile.summary}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-cga-sand sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-5 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0">
                      <dt className="font-semibold text-cga-navy">Industry</dt>
                      <dd className="mt-1 text-cga-body">{clientProfile.industry}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-5 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold text-cga-navy">Company Size</dt>
                      <dd className="mt-1 text-cga-body">{clientProfile.companySize}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-5 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold text-cga-navy">Engagement Type</dt>
                      <dd className="mt-1 text-cga-body">{clientProfile.engagementType}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40 pb-24 sm:pb-32">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      <OtherProfiles current={clientProfile} allProfiles={allProfiles} />
      <ProfileCTA />
    </RootLayout>
  )
}
