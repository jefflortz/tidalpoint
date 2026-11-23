import { type Metadata } from 'next'
import BusinessWorthPrototype from '@/app/prototype/what-is-my-business-worth/page'
import { PageSchema } from '@/components/PageSchema'

const description = 'Learn how buyers evaluate earnings, owner dependence, customers, systems, risk and growth—and choose the right next step.'
export const metadata: Metadata = { title: 'What Is My Business Worth? Business Valuation Guide', description, alternates: { canonical: '/resources/what-is-my-business-worth' }, openGraph: { title: 'What Is My Business Worth? | Tidal Point Partners', description, url: '/resources/what-is-my-business-worth', type: 'article' } }
export default function WhatIsMyBusinessWorth() { return <><PageSchema path="/resources/what-is-my-business-worth" name="What Is My Business Worth?" description={description} /><BusinessWorthPrototype /></> }
