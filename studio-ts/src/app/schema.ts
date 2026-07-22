export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tidal Point Partners',
    url: 'https://tidalpointpartners.com',
    description:
      'Business advisory and executive coaching for privately held, owner-operated businesses in Southeastern Massachusetts.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plymouth, MA',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    email: 'jeff@tidalpointpartners.com',
    sameAs: [
      // Add your social media profiles here
    ],
    image: 'https://tidalpointpartners.com/logo-wordmark-light.svg',
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
    url: `https://tidalpointpartners.com${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Tidal Point Partners',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tidalpointpartners.com/logo-wordmark-light.svg',
      },
    },
  }
}
