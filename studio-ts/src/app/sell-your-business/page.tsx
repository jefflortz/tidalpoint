import { type Metadata } from 'next'
import SellYourBusinessPrototype from '@/app/prototype/sell-your-business/page'
import { PageSchema } from '@/components/PageSchema'

const description = 'Sell your business with operator-led preparation, active buyer identification and hands-on transaction support. Start a confidential conversation.'
export const metadata: Metadata = { title: 'Business Broker & M&A Advisor in New England', description, alternates: { canonical: '/sell-your-business' }, openGraph: { title: 'Sell Your Business | Tidal Point Partners', description, url: '/sell-your-business', type: 'website' } }
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'How do you protect confidentiality?', acceptedAnswer: { '@type': 'Answer', text: 'Tidal Point Partners uses a controlled outreach and information-sharing process with owner approval points.' } },
  { '@type': 'Question', name: 'How do you determine what my business may be worth?', acceptedAnswer: { '@type': 'Answer', text: 'The discussion begins with financial and operating factors that influence buyer interest. Any formal valuation scope and limitations are stated separately.' } },
  { '@type': 'Question', name: 'What if I am not ready to sell yet?', acceptedAnswer: { '@type': 'Answer', text: 'The Build Business Value program is for owners who want to improve readiness and reduce risk before entering a sale process.' } },
] }
export default function SellYourBusiness() { return <><PageSchema path="/sell-your-business" name="Sell Your Business" description={description} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><SellYourBusinessPrototype /></> }
