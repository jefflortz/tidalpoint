'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-D29KDZN4XQ'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// There's no real contact form on the site (/contact is a mailto: link,
// pending a real form backend) — so "form submit" isn't a thing that can
// happen. These are the closest real signals of contact intent: clicking a
// "Schedule a Conversation" CTA, or clicking a mailto: link directly.
function useContactIntentTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      let target = event.target
      if (!(target instanceof Element) || typeof window.gtag !== 'function') {
        return
      }

      let mailtoLink = target.closest('a[href^="mailto:"]')
      if (mailtoLink) {
        window.gtag('event', 'generate_lead', {
          method: 'email_link',
          link_url: mailtoLink.getAttribute('href'),
        })
        return
      }

      let contactLink = target.closest('a[href="/contact"]')
      if (contactLink) {
        window.gtag('event', 'generate_lead', {
          method: 'cta_button',
          link_text: contactLink.textContent?.trim(),
        })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

export function Analytics() {
  useContactIntentTracking()

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
