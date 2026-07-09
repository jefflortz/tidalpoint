import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <p>
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your information.
        </p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-8 text-base leading-7 text-neutral-600">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you contact us through our website or request our services. This
              may include your name, email address, phone number, and company
              information.
            </p>
            <p className="mt-4">
              We also automatically collect certain information about your
              device and how you interact with our website through Google
              Analytics, including pages visited, time spent, and referring
              sources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>
                Improve our website and services through analytics and user
                feedback
              </li>
              <li>Send you communications about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              3. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with service providers who assist
              us in operating our website and conducting our business, such as
              our hosting provider and analytics service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over
              the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information at any time by contacting us. You can also opt out of
              analytics tracking through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              updating the date at the bottom of this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy or our privacy
              practices, please contact us at{' '}
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
