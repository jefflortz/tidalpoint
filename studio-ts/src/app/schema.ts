export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Coastal Growth Advisors',
    url: 'https://coastalgrowthadvisor.com',
    description:
      'Business advisory and executive coaching for privately held, owner-operated businesses in Southeastern Massachusetts.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plymouth, MA',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    email: 'contact@coastalgrowthadvisor.com',
    sameAs: [
      // Add your social media profiles here
    ],
    image: 'https://coastalgrowthadvisor.com/logo-light-cropped.png',
  }
}

export function getWebPageSchema(
  title: string,
  description: string,
  path: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `https://coastalgrowthadvisor.com${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Coastal Growth Advisors',
      logo: {
        '@type': 'ImageObject',
        url: 'https://coastalgrowthadvisor.com/logo-light-cropped.png',
      },
    },
  }
}
