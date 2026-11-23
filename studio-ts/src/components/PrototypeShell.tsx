import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'

const navigation = [
  { label: 'Sell Your Business', href: '/sell-your-business' },
  { label: 'Build Business Value', href: '/build-business-value' },
  { label: 'What Is My Business Worth?', href: '/resources/what-is-my-business-worth' },
  { label: 'Who We Help', href: '/clients' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/articles' },
  { label: 'Contact', href: '/contact' },
]

export function PrototypeHeader({ invert = false }: { invert?: boolean }) {
  const text = invert ? 'text-white' : 'text-tidal-navy'

  return (
    <header className={invert ? 'absolute inset-x-0 top-0 z-30' : 'bg-tidal-warm-white'}>
      <Container>
        <div className="flex min-h-24 items-center justify-between gap-5 border-b border-current/10">
          <Link href="/" aria-label="Tidal Point Partners home">
            <Image
              src={invert ? '/logo-wordmark-dark.svg' : '/logo-wordmark-light.svg'}
              alt="Tidal Point Partners"
              width={190}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav aria-label="Prototype navigation" className="hidden xl:block">
            <ul className={`flex items-center gap-7 text-sm font-semibold ${text}`}>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-tidal-teal" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden rounded-sm px-5 py-3 text-sm font-semibold sm:inline-flex ${
                invert ? 'bg-white text-tidal-navy' : 'bg-tidal-navy text-white'
              }`}
            >
              Start a Conversation
            </Link>
            <details className={`group relative xl:hidden ${text}`}>
              <summary className="cursor-pointer list-none rounded-sm border border-current/25 px-4 py-3 text-sm font-semibold">
                Menu
              </summary>
              <nav className="absolute right-0 top-14 w-72 bg-tidal-navy p-6 text-white shadow-2xl" aria-label="Prototype mobile navigation">
                <ul className="space-y-4 text-base font-semibold">
                  {navigation.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </Container>
    </header>
  )
}

export function PrototypeFooter() {
  return (
    <footer className="bg-tidal-navy py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image src="/logo-wordmark-dark.svg" alt="Tidal Point Partners" width={190} height={40} />
            <p className="mt-5 max-w-md text-base leading-7 text-white/70">
              Business Value Creation &amp; M&amp;A Advisory for owners of privately held businesses.
            </p>
            <p className="mt-3 font-display text-2xl text-white">Build Value. Realize Value.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-white/75">
              <Link href="/sell-your-business">Sell Your Business</Link>
              <Link href="/build-business-value">Build Business Value</Link>
              <Link href="/resources/what-is-my-business-worth">What Is My Business Worth?</Link>
              <Link href="/clients">Who We Help</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-tidal-teal">Based in Plymouth, Massachusetts</p>
            <p className="mt-5 text-sm leading-6 text-white/70">
              Serving owners of privately held businesses across approved New England markets. A DBA of Agile Operators, LLC.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

