import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SocialMedia } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Services',
    links: [
      { title: 'Business Performance Planning', href: '/services/performance-planning' },
      { title: 'Owner & CEO Coaching', href: '/services/ceo-coaching' },
      { title: 'Revenue Growth Advisory', href: '/services/revenue-growth' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Jeff', href: '/about' },
      { title: 'Who We Serve', href: '/clients' },
      { title: 'Articles', href: '/articles' },
      { title: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-24 w-full bg-cga-navy sm:mt-32 lg:mt-40">
      <FadeIn>
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-y-12 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            {/* Brand */}
            <div className="lg:max-w-xs">
              <Image
                src="/logo-wordmark-dark.svg"
                alt="Tidal Point Partners"
                width={180}
                height={37}
                className="h-8 w-auto"
                unoptimized
              />
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                The operating partner your business has been missing.
              </p>
              <p className="mt-4 text-xs text-white/50">
                A DBA of Agile Operators, LLC
              </p>
              <p className="mt-2 text-xs text-white/50">
                Serving the South Shore, South Coast &amp; Cape Cod
              </p>
            </div>

            {/* Services + Company, grouped and centered as a pair */}
            <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-16">
              <div className="text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-cga-warm-white">
                  Services
                </div>
                <ul role="list" className="mt-4 space-y-3 text-sm text-white/70">
                  {navigation[0].links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="transition hover:text-white">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-cga-warm-white">
                  Company
                </div>
                <ul role="list" className="mt-4 space-y-3 text-sm text-white/70">
                  {navigation[1].links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="transition hover:text-white">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connect */}
            <div className="text-right">
              <div className="text-xs font-semibold uppercase tracking-widest text-cga-warm-white">
                Connect
              </div>
              <SocialMedia invert className="mt-4 justify-end gap-x-5" />
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-y-6 border-t border-white/10 pt-10 sm:flex-row sm:justify-between sm:gap-y-0">
            <div className="flex items-center gap-x-4">
              <Image
                src="/logo-monogram-dark.svg"
                alt="Tidal Point Partners"
                width={48}
                height={42}
                className="h-6 w-auto opacity-60"
                unoptimized
              />
              <p className="text-sm text-white/40">
                &copy; {new Date().getFullYear()} Agile Operators, LLC. All rights reserved.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-cga-teal px-6 py-2.5 text-xs font-semibold tracking-widest text-white uppercase shadow transition hover:bg-cga-teal/90">
              Schedule a Free Consultation
            </Link>
          </div>
        </Container>
      </FadeIn>
    </footer>
  )
}
