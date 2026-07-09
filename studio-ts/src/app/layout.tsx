import { type Metadata } from 'next'

import '@/styles/tailwind.css'
import { Analytics } from './Analytics'
import { getOrganizationSchema } from './schema'

export const metadata: Metadata = {
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
    <html lang="en" className="h-full bg-cga-navy text-base antialiased">
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
