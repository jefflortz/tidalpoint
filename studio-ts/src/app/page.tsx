import { type Metadata } from 'next'

import PrototypeHome from '@/app/prototype/page'
import { getHomePageSchema } from './schema'

export const metadata: Metadata = {
  title: { absolute: 'Business Value Creation & M&A Advisory | Tidal Point Partners' },
  description: 'Build value before a future sale or work with an operator-led business broker to actively identify prospective buyers across New England.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Get More From the Business You’ve Built | Tidal Point Partners',
    description: 'Build Value. Realize Value. Practical business value creation and M&A advisory for owners of privately held businesses.',
    url: '/', type: 'website',
    images: [{ url: '/images/prototype/owner-operator-hero.png', width: 1536, height: 1024, alt: 'Owner-operator at an established service business' }],
  },
}

export default function Home() {
  const schema = getHomePageSchema()
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><PrototypeHome /></>
}
