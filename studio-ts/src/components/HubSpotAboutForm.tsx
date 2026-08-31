'use client'

import Script from 'next/script'
import { useRef } from 'react'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string
          formId: string
          region: string
          target: string
        }) => void
      }
    }
  }
}

const targetId = 'hubspot-about-form'

export function HubSpotAboutForm() {
  const initialized = useRef(false)

  function createForm() {
    if (initialized.current || !window.hbspt) return

    initialized.current = true
    window.hbspt.forms.create({
      portalId: '46259123',
      formId: '412db353-adac-4559-809d-d4b9572d4ca0',
      region: 'na1',
      target: `#${targetId}`,
    })
  }

  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onReady={createForm}
      />
      <div id={targetId} className="min-h-72" />
    </>
  )
}
