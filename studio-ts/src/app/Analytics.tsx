'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-D29KDZN4XQ'
const HUBSPOT_CONTACT_FORM_ID = '412db353-adac-4559-809d-d4b9572d4ca0'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function pageContext() {
  return {
    page_path: window.location.pathname,
    page_location: window.location.href,
  }
}

function useContactIntentTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      let target = event.target
      if (!(target instanceof Element) || typeof window.gtag !== 'function') {
        return
      }

      let mailtoLink = target.closest('a[href^="mailto:"]')
      if (mailtoLink) {
        const parameters = {
          ...pageContext(),
          method: 'email_link',
        }
        window.gtag('event', 'email_click', parameters)
        window.gtag('event', 'generate_lead', {
          ...parameters,
          lead_source: 'email_link',
        })
        return
      }

      let phoneLink = target.closest('a[href^="tel:"]')
      if (phoneLink) {
        const parameters = {
          ...pageContext(),
          method: 'phone_link',
        }
        window.gtag('event', 'phone_click', parameters)
        window.gtag('event', 'generate_lead', {
          ...parameters,
          lead_source: 'phone_link',
        })
        return
      }

      let contactLink = target.closest('a[href="/contact"]')
      if (contactLink) {
        window.gtag('event', 'contact_cta_click', {
          ...pageContext(),
          link_text: contactLink.textContent?.trim(),
          link_url: contactLink.getAttribute('href'),
        })
      }
    }

    function onHubSpotMessage(event: MessageEvent) {
      if (typeof window.gtag !== 'function') return

      const data = event.data
      if (
        !data ||
        typeof data !== 'object' ||
        data.type !== 'hsFormCallback' ||
        data.eventName !== 'onFormSubmitted' ||
        data.id !== HUBSPOT_CONTACT_FORM_ID
      ) {
        return
      }

      const parameters = {
        ...pageContext(),
        form_id: HUBSPOT_CONTACT_FORM_ID,
        form_name: 'contact_form',
        lead_source: 'hubspot_form',
      }
      window.gtag('event', 'hubspot_form_submit', parameters)
      window.gtag('event', 'generate_lead', parameters)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('message', onHubSpotMessage)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('message', onHubSpotMessage)
    }
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
