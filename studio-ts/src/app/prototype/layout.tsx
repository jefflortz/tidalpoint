import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website 2.0 Prototype | Tidal Point Partners',
  robots: { index: false, follow: false },
}

export default function PrototypeLayout({ children }: { children: React.ReactNode }) {
  return children
}

