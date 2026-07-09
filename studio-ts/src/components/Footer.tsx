import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

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
        <Container className="py-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <Image
                src="/logo-dark-cropped.png"
                alt="Coastal Growth Advisors"
                width={180}
                height={45}
                className="h-10 w-auto"
                unoptimized
              />
              <p className="mt-3 text-xs text-white/50">
                A DBA of Agile Operators, LLC
              </p>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                The operating partner your business has been missing.
              </p>
              <p className="mt-4 text-sm text-white/50">
                Serving the South Shore, South Coast &amp; Cape Cod
              </p>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              {navigation.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                    {section.title}
                  </div>
                  <ul role="list" className="mt-4 text-sm text-white/70">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mt-3">
                        <Link
                          href={link.href}
                          className="transition hover:text-white"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/10 pt-10">
            <div className="flex items-center gap-x-4">
              <Image
                src="/logo-icon-dark.png"
                alt="Coastal Growth Advisors"
                width={48}
                height={32}
                className="h-8 w-auto opacity-60"
                unoptimized
              />
              <p className="text-sm text-white/40">
                &copy; {new Date().getFullYear()} Agile Operators, LLC. All rights reserved.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-cga-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-cga-teal/90">
              Schedule a Free Consultation
            </Link>
          </div>
        </Container>
      </FadeIn>
    </footer>
  )
}
