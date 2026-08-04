export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://tidalpointpartners.com/#website',
        url: 'https://tidalpointpartners.com/',
        name: 'Tidal Point Partners',
        alternateName: 'Tidal Point',
        publisher: {
          '@id': 'https://tidalpointpartners.com/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://tidalpointpartners.com/#organization',
        name: 'Tidal Point Partners',
        alternateName: 'Tidal Point',
        url: 'https://tidalpointpartners.com/',
        description:
          'Experienced operating partnership for privately held businesses navigating pivotal moments.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://tidalpointpartners.com/favicon-512.png',
          width: 512,
          height: 512,
        },
        image: 'https://tidalpointpartners.com/opengraph-image',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Plymouth',
          addressRegion: 'MA',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Southeastern New England',
        },
        email: 'info@tidalpointpartners.com',
        telephone: '+1-774-203-4525',
        sameAs: [
          // Add confirmed company social profile URLs as they go live.
        ],
      },
    ],
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
    email: 'info@tidalpointpartners.com',
    image: 'https://tidalpointpartners.com/logo-wordmark-light.svg',
    sameAs: [
      // Add a real LinkedIn profile URL here once confirmed.
    ],
  }
}
