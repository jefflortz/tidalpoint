import { type Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Analytics } from './Analytics'
import { getOrganizationSchema } from './schema'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tidalpointpartners.com'),
  title: {
    template: '%s - Tidal Point Partners',
    default: 'Tidal Point Partners — Strategic Advisory for Privately Held Businesses',
  },
  description:
    'Tidal Point Partners is a premium strategic advisory firm for privately held businesses at pivotal moments.',
  icons: {
    icon: '/favicon-512.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = getOrganizationSchema()

  return (
    <html
      lang="en"
      className={clsx(
        cormorantGaramond.variable,
        inter.variable,
        'h-full bg-tidal-navy text-base antialiased',
      )}
    >
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
