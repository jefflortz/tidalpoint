export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Tidal Point Partners',
    url: 'https://tidalpointpartners.com',
    description:
      'Business advisory for privately held, owner-operated businesses in Southeastern Massachusetts.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Plymouth',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    areaServed: 'Southeastern New England',
    email: 'jeff@tidalpointpartners.com',
    sameAs: [
      // Add real social media profile URLs here once they exist — do not
      // add placeholder or unverified links.
    ],
    image: 'https://tidalpointpartners.com/logo-wordmark-light.svg',
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeff Lortz',
    jobTitle: 'Founder',
    url: 'https://tidalpointpartners.com/about',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Tidal Point Partners',
      url: 'https://tidalpointpartners.com',
    },
    email: 'jeff@tidalpointpartners.com',
    image: 'https://tidalpointpartners.com/logo-wordmark-light.svg',
    sameAs: [
      // Add a real LinkedIn profile URL here once confirmed.
    ],
  }
}
