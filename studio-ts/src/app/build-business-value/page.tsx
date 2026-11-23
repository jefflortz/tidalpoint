import { type Metadata } from 'next'
import BuildBusinessValuePrototype from '@/app/prototype/build-business-value/page'
import { PageSchema } from '@/components/PageSchema'

const description = 'Understand the drivers of business value, build a practical 12-month improvement roadmap and prepare your business for a future sale.'
export const metadata: Metadata = { title: 'Prepare Your Business for Sale & Build Value', description, alternates: { canonical: '/build-business-value' }, openGraph: { title: 'Build Business Value | Tidal Point Partners', description, url: '/build-business-value', type: 'website' } }
export default function BuildBusinessValue() { return <><PageSchema path="/build-business-value" name="Build Business Value" description={description} /><BuildBusinessValuePrototype /></> }
