import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Cookie Policy',
}

export default function CookiePolicy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Cookie Policy">
        <p>
          We use cookies and similar technologies to enhance your experience on
          our website and understand how you use it.
        </p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-8 text-base leading-7 text-neutral-600">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember information about your
              visit, such as your preferences or login status.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              2. Cookies We Use
            </h2>
            <p className="font-semibold text-neutral-950 mt-4">
              Google Analytics
            </p>
            <p>
              We use Google Analytics to understand how visitors use our website,
              including pages visited, time spent, and traffic sources. Google
              Analytics sets cookies to track this information.
            </p>
            <p className="mt-4">
              <strong>Cookie ID:</strong> G-BSTESBF5Y9
            </p>
            <p className="mt-4">
              For more information about how Google uses data, see{' '}
              <a
                href="https://policies.google.com/privacy"
                className="text-cga-navy font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              3. Cookie Management
            </h2>
            <p>
              Most web browsers allow you to control cookies through their
              settings. You can:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Block all cookies</li>
              <li>Allow only certain cookies</li>
              <li>Delete cookies after you close your browser</li>
              <li>Opt out of analytics tracking</li>
            </ul>
            <p className="mt-4">
              Please note that blocking cookies may affect the functionality of
              our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              4. Third-Party Cookies
            </h2>
            <p>
              We use Google Analytics, which is a third-party service that sets
              cookies on your device. Google may use this information for their
              own purposes in accordance with their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              5. Your Choices
            </h2>
            <p>
              You can opt out of Google Analytics tracking by using the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-cga-navy font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this cookie policy to reflect changes in our
              practices or technology. We will notify you of material changes by
              updating the date at the bottom of this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us
              at{' '}
              <a href="mailto:contact@coastalgrowthadvisor.com" className="text-cga-navy font-semibold">
                contact@coastalgrowthadvisor.com
              </a>
            </p>
          </div>

          <div className="text-sm text-neutral-500 border-t pt-4 mt-8">
            Last updated: June 2026
          </div>
        </div>
      </Container>
    </>
  )
}
