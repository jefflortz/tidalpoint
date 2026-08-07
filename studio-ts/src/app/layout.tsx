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
  applicationName: 'Tidal Point Partners',
  title: {
    template: '%s | Tidal Point Partners',
    default: 'Experienced Operating Partners for Privately Held Businesses',
  },
  description:
    'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
  authors: [{ name: 'Tidal Point Partners', url: '/' }],
  creator: 'Tidal Point Partners',
  publisher: 'Tidal Point Partners',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Tidal Point Partners',
    title: 'Experienced Operating Partners for Privately Held Businesses',
    description:
      'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experienced Operating Partners for Privately Held Businesses',
    description:
      'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '48x48',
      },
    ],
    shortcut: '/favicon.ico',
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
  manifest: '/manifest.webmanifest',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
