import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SocialMedia } from '@/components/SocialMedia'

const companyLinks = [
  { title: 'About', href: '/about' },
  { title: 'How We Work', href: '/services' },
  { title: 'Who We Serve', href: '/clients' },
  { title: 'Insights', href: '/articles' },
  { title: 'Contact', href: '/contact' },
]

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-tidal-warm-white">
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function FooterLinkList({
  links,
}: {
  links: { title: string; href: string }[]
}) {
  return (
    <ul role="list" className="space-y-3 text-sm text-white/70">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="transition hover:text-white">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 w-full bg-tidal-navy sm:mt-32 lg:mt-40">
      <FadeIn>
        <Container className="py-12 sm:py-14">
          <div className="flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-16">
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
                Experienced partnership for pivotal points in the life of a
                business.
              </p>
              <p className="mt-4 text-xs text-white/70">
                A DBA of Agile Operators, LLC
              </p>
              <p className="mt-1 text-xs text-white/70">
                Serving Southeastern New England
              </p>
              <p className="mt-1 text-xs text-white/70">Plymouth, MA</p>
            </div>

            {/* Nav groups — Company / Connect */}
            <nav
              aria-label="Footer"
              className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0 lg:flex lg:gap-x-16"
            >
              <FooterColumn title="Company">
                <FooterLinkList links={companyLinks} />
              </FooterColumn>

              <FooterColumn title="Connect">
                <SocialMedia invert className="-ml-2" />
              </FooterColumn>
            </nav>

            {/* CTA — right-justified, top-aligned with the column headings */}
            <div className="lg:ml-auto">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-tidal-navy uppercase shadow transition hover:bg-tidal-sand"
              >
                Schedule a Conversation
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <Image
                src="/logo-monogram-dark.svg"
                alt="Tidal Point Partners"
                width={48}
                height={42}
                className="h-6 w-auto opacity-60"
                unoptimized
              />
              <p className="text-sm text-white/70">
                &copy; {new Date().getFullYear()} Agile Operators, LLC. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-x-6 text-sm text-white/70">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="transition hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </Container>
      </FadeIn>
    </footer>
  )
}
