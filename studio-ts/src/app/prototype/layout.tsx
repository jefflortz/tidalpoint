import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Website 2.0 Prototype | Tidal Point Partners' },
  description:
    'Pre-build visual prototype for Tidal Point Partners Business Value Creation & M&A Advisory positioning.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Website 2.0 Prototype | Tidal Point Partners',
    description:
      'Pre-build visual prototype for Tidal Point Partners Business Value Creation & M&A Advisory positioning.',
    type: 'website',
  },
}

export default function PrototypeLayout({ children }: { children: React.ReactNode }) {
  return children
}

