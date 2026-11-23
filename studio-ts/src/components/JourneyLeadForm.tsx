'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'

type Journey = 'sell' | 'build' | 'valuation'

const journeyLabels: Record<Journey, string> = {
  sell: 'Sell Your Business',
  build: 'Build Business Value',
  valuation: 'Business Valuation',
}

const inputClass = 'mt-2 w-full rounded-sm border border-tidal-navy/20 bg-white px-4 py-3 text-base text-tidal-navy outline-none transition focus:border-tidal-teal focus:ring-2 focus:ring-tidal-teal/25'
const attributionFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'landing_page', 'referrer', 'legacy_referral']

export function JourneyLeadForm({ initialJourney = 'sell' }: { initialJourney?: Journey }) {
  const [journey, setJourney] = useState<Journey>(initialJourney)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const firstTouchKey = 'tpp_first_touch'
    const captured = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      gclid: params.get('gclid') || '',
      landing_page: window.location.href,
      referrer: document.referrer,
      legacy_referral: params.get('legacy_referral') || (document.referrer.includes('legacy') ? 'referral' : ''),
    }
    const stored = sessionStorage.getItem(firstTouchKey)
    const attribution = stored ? JSON.parse(stored) : captured
    if (!stored) {
      sessionStorage.setItem(firstTouchKey, JSON.stringify(captured))
    }
    attributionFields.forEach((name) => {
      const input = formRef.current?.elements.namedItem(name)
      if (input instanceof HTMLInputElement) input.value = attribution[name] || ''
    })
  }, [])

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    window.gtag?.('event', `${journey}_inquiry_submit`, { journey, staging_safe: true })
  }

  if (submitted) {
    return <div role="status" className="border border-tidal-teal/40 bg-tidal-teal/10 p-6"><h2 className="font-display text-3xl text-tidal-navy">Staging test completed.</h2><p className="mt-3 leading-7 text-tidal-body">Validation, journey selection and attribution capture worked. No contact or CRM record was created from this protected preview.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-5 font-semibold text-tidal-navy underline underline-offset-4">Run another test</button></div>
  }

  return (
    <form ref={formRef} onSubmit={submit} className="grid gap-5" data-staging-fallback="true">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-tidal-navy">Name<input required name="name" autoComplete="name" className={inputClass} /></label>
        <label className="text-sm font-semibold text-tidal-navy">Email<input required type="email" name="email" autoComplete="email" className={inputClass} /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-tidal-navy">Phone<input type="tel" name="phone" autoComplete="tel" className={inputClass} /></label>
        <label className="text-sm font-semibold text-tidal-navy">Company<input required name="company" autoComplete="organization" className={inputClass} /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-tidal-navy">Industry<input required name="industry" className={inputClass} placeholder="HVAC, professional services…" /></label>
        <label className="text-sm font-semibold text-tidal-navy">Approximate annual revenue<select required name="revenue" className={inputClass} defaultValue=""><option value="" disabled>Select a range</option><option>Under $1M</option><option>$1M–$2M</option><option>$2M–$5M</option><option>$5M–$10M</option><option>$10M+</option><option>Prefer not to say</option></select></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-tidal-navy">Geography<input required name="geography" className={inputClass} placeholder="City and state" /></label>
        <label className="text-sm font-semibold text-tidal-navy">Intended sale timing<select required name="timing" className={inputClass} defaultValue=""><option value="" disabled>Select timing</option><option>Within 12 months</option><option>1–3 years</option><option>3+ years</option><option>Not sure yet</option></select></label>
      </div>
      <label className="text-sm font-semibold text-tidal-navy">How can we help?<select value={journey} onChange={(event) => setJourney(event.target.value as Journey)} name="journey" className={inputClass}>{Object.entries(journeyLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      <label className="text-sm font-semibold text-tidal-navy">What would be useful to discuss?<textarea required name="message" rows={4} className={inputClass} /></label>
      {attributionFields.map((name) => <input key={name} type="hidden" name={name} defaultValue="" />)}
      <label className="flex gap-3 text-sm leading-6 text-tidal-body"><input required type="checkbox" className="mt-1 h-4 w-4" />I agree that Tidal Point Partners may use this information to respond to my inquiry.</label>
      <button type="submit" className="min-h-12 rounded-sm bg-tidal-navy px-7 py-4 font-semibold text-white transition hover:bg-tidal-navy/90">Start a Confidential Conversation</button>
      <p className="text-xs leading-5 text-tidal-light">Protected-preview fallback: submissions are validated locally and are not sent to production HubSpot.</p>
    </form>
  )
}
