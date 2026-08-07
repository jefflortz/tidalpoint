import {type Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {RootLayout} from '@/components/RootLayout'
import {formatDate} from '@/lib/formatDate'
import {getLocationPage, getLocationSlugs, type LocationPageDocument} from '@/sanity/content'

export async function generateStaticParams() {
  return (await getLocationSlugs()).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params
  const page = await getLocationPage(slug)
  if (!page) return {}
  const canonical = page.canonicalUrl ?? `/locations/${slug}`

  return {
    title: page.seoTitle ?? page.heroTitle,
    description: page.metaDescription ?? page.heroIntroduction,
    alternates: {canonical},
    robots: page.noIndex ? {index: false, follow: false} : undefined,
    openGraph: {
      title: page.seoTitle ?? page.heroTitle,
      description: page.metaDescription ?? page.heroIntroduction,
      url: canonical,
      type: 'website',
      images: page.socialImage ? [page.socialImage] : undefined,
    },
  }
}

function LocationSchema({page}: {page: LocationPageDocument}) {
  const url = `https://tidalpointpartners.com/locations/${page.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.seoTitle ?? page.heroTitle,
    description: page.metaDescription ?? page.heroIntroduction,
    about: {
      '@type': 'ProfessionalService',
      '@id': 'https://tidalpointpartners.com/#organization',
      name: 'Tidal Point Partners',
      areaServed: {'@type': 'AdministrativeArea', name: page.regionName},
    },
    inLanguage: 'en-US',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
}

function Hero({page}: {page: LocationPageDocument}) {
  return (
    <section className="relative isolate overflow-hidden bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-[58%] right-[-8rem] h-[34rem] w-[34rem] rounded-full border border-tidal-teal/20 sm:right-[4%]" />
        <div className="absolute top-[58%] right-[-2rem] h-[22rem] w-[22rem] rounded-full border border-tidal-teal/25 sm:right-[10%]" />
        <div className="absolute top-[58%] right-[9rem] h-2 w-2 rounded-full bg-tidal-teal shadow-[0_0_28px_8px_rgba(127,174,159,.3)] sm:right-[21%]" />
      </div>
      <Container>
        <FadeIn className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">
              {page.heroEyebrow ?? page.regionName}
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] font-medium tracking-tight text-white sm:text-7xl lg:text-[5.35rem]">
              {page.heroTitle}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <div className="border-l border-white/20 pl-6 sm:pl-8">
              <p className="text-lg leading-8 text-white/72">{page.heroIntroduction}</p>
              <Link href="/contact" className="mt-8 inline-flex border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-tidal-navy">
                Start a conversation <span className="ml-3" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function RegionalContext({page}: {page: LocationPageDocument}) {
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{page.regionalContext.eyebrow ?? 'A Regional Operating Perspective'}</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">{page.regionalContext.title}</h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5 lg:col-start-8">
            <p className="whitespace-pre-line text-lg leading-8 text-tidal-body">{page.regionalContext.body}</p>
            {page.regionalContext.details?.length ? (
              <dl className="mt-9 divide-y divide-tidal-navy/12 border-y border-tidal-navy/12">
                {page.regionalContext.details.map((detail) => (
                  <div key={detail._key} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <dt className="text-[11px] font-semibold tracking-[0.15em] text-tidal-teal uppercase">{detail.label}</dt>
                    <dd className="font-display text-xl font-medium text-tidal-navy">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function Situations({page}: {page: LocationPageDocument}) {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="grid gap-7 border-b border-tidal-navy/15 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{page.situations.eyebrow ?? 'When Leaders Call Us'}</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">{page.situations.title}</h2>
          </div>
          {page.situations.introduction ? <p className="max-w-lg text-base leading-7 text-tidal-body lg:col-span-4 lg:col-start-9">{page.situations.introduction}</p> : null}
        </FadeIn>
        <FadeInStagger className="grid lg:grid-cols-2">
          {page.situations.items.map((item, index) => (
            <FadeIn key={item._key} className={`grid grid-cols-[2.75rem_1fr] gap-5 border-b border-tidal-navy/12 py-9 sm:grid-cols-[3.5rem_1fr] sm:py-11 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:border-l lg:pl-12'}`}>
              <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-tidal-teal">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight font-medium text-tidal-navy sm:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-tidal-body">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function SupportAreas({page}: {page: LocationPageDocument}) {
  return (
    <section className="bg-[#e9efee] py-20 sm:py-28 lg:py-36">
      <Container>
        <FadeIn className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{page.supportAreas.eyebrow ?? 'How We Help'}</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">{page.supportAreas.title}</h2>
          {page.supportAreas.introduction ? <p className="mt-7 max-w-2xl text-lg leading-8 text-tidal-body">{page.supportAreas.introduction}</p> : null}
        </FadeIn>
        <FadeInStagger className="mt-14 grid gap-px bg-tidal-navy/15 ring-1 ring-tidal-navy/15 lg:grid-cols-3">
          {page.supportAreas.items.map((item) => (
            <FadeIn key={item._key} className="bg-tidal-warm-white p-8 sm:p-10 lg:min-h-[24rem] lg:p-12">
              <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{item.label}</p>
              <h3 className="mt-8 font-display text-3xl leading-tight font-medium text-tidal-navy sm:text-4xl">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-tidal-body">{item.body}</p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function BusinessProfile({page}: {page: LocationPageDocument}) {
  return (
    <section className="bg-tidal-navy py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <FadeIn className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{page.businessProfile.eyebrow ?? 'The Regional Business Profile'}</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl">{page.businessProfile.title}</h2>
            <p className="mt-7 max-w-2xl whitespace-pre-line text-lg leading-8 text-white/68">{page.businessProfile.body}</p>
          </FadeIn>
          <FadeIn className="lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-2 gap-px bg-white/15 ring-1 ring-white/15">
              {page.businessProfile.industries?.map((industry) => (
                <div key={industry} className="flex min-h-28 items-end bg-tidal-navy p-5 sm:min-h-32 sm:p-6">
                  <p className="font-display text-xl leading-tight font-medium text-white sm:text-2xl">{industry}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function RelatedPerspectives({page}: {page: LocationPageDocument}) {
  if (!page.relatedArticles?.length) return null
  return (
    <section className="bg-tidal-warm-white py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn className="flex flex-col gap-5 border-b border-tidal-navy/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">Perspectives</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">Useful thinking for the moment ahead.</h2>
          </div>
          <Link href="/articles" className="text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal">View all insights <span className="ml-2" aria-hidden="true">&rarr;</span></Link>
        </FadeIn>
        <FadeInStagger className="grid lg:grid-cols-3">
          {page.relatedArticles.map((article, index) => (
            <FadeIn key={article._id} className={`border-b border-tidal-navy/12 py-9 lg:py-11 ${index > 0 ? 'lg:border-l lg:pl-9' : ''} ${index < 2 ? 'lg:pr-9' : ''}`}>
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-tidal-teal uppercase">{article.category} <span className="px-2 text-tidal-navy/25">/</span> {formatDate(article.date)}</p>
              <h3 className="mt-4 font-display text-3xl leading-[1.08] font-medium text-tidal-navy"><Link href={article.href} className="transition hover:text-tidal-teal">{article.title}</Link></h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-tidal-body">{article.description}</p>
              <Link href={article.href} className="mt-6 inline-flex text-sm font-semibold text-tidal-navy transition hover:text-tidal-teal">Read article <span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function ClosingCTA({page}: {page: LocationPageDocument}) {
  if (!page.cta) return null
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <FadeIn className="grid gap-8 border-t border-tidal-navy/15 pt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-tidal-teal uppercase">{page.cta.eyebrow ?? 'A Useful First Conversation'}</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-tidal-navy sm:text-6xl">{page.cta.title}</h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            {page.cta.body ? <p className="text-base leading-7 text-tidal-body">{page.cta.body}</p> : null}
            <Link href={page.cta.buttonHref ?? '/contact'} className="mt-7 inline-flex bg-tidal-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-tidal-teal">{page.cta.buttonLabel ?? 'Start a conversation'}</Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default async function LocationPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const page = await getLocationPage(slug)
  if (!page) notFound()

  return (
    <RootLayout>
      <LocationSchema page={page} />
      <Hero page={page} />
      <RegionalContext page={page} />
      <Situations page={page} />
      <SupportAreas page={page} />
      <BusinessProfile page={page} />
      <RelatedPerspectives page={page} />
      <ClosingCTA page={page} />
    </RootLayout>
  )
}
