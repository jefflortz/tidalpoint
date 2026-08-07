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
        image: 'https://tidalpointpartners.com/tidal-point-home-featured.jpg',
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
          'https://www.linkedin.com/company/tidal-point-partners',
          'https://x.com/tidalpointpart',
          'https://www.facebook.com/people/Tidal-Point-Partners',
          'https://www.instagram.com/tidalpointpartners/',
        ],
      },
    ],
  }
}

export function getHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://tidalpointpartners.com/#webpage',
    url: 'https://tidalpointpartners.com/',
    name: 'Experienced Operating Partners for Privately Held Businesses',
    description:
      'Experienced Operating Partners working alongside owners and leadership teams to navigate growth, succession, acquisitions and other pivotal moments.',
    isPartOf: {
      '@id': 'https://tidalpointpartners.com/#website',
    },
    about: {
      '@id': 'https://tidalpointpartners.com/#organization',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      '@id': 'https://tidalpointpartners.com/#primaryimage',
      url: 'https://tidalpointpartners.com/tidal-point-home-featured.jpg',
      width: 1200,
      height: 675,
    },
    inLanguage: 'en-US',
  }
}

export function getWebPageSchema({
  path,
  name,
  description,
  type = 'WebPage',
  mainEntityId,
}: {
  path: string
  name: string
  description: string
  type?: 'WebPage' | 'CollectionPage' | 'ContactPage' | 'ProfilePage'
  mainEntityId?: string
}) {
  const url = `https://tidalpointpartners.com${path}`

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@id': 'https://tidalpointpartners.com/#website',
    },
    about: {
      '@id': 'https://tidalpointpartners.com/#organization',
    },
    ...(mainEntityId ? { mainEntity: { '@id': mainEntityId } } : {}),
    inLanguage: 'en-US',
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://tidalpointpartners.com/team/jeff-lortz#person',
    name: 'Jeff Lortz',
    jobTitle: 'Founder & Operating Partner',
    url: 'https://tidalpointpartners.com/team/jeff-lortz',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Tidal Point Partners',
      url: 'https://tidalpointpartners.com',
    },
    email: 'info@tidalpointpartners.com',
    image: 'https://tidalpointpartners.com/images/people/jeff-lortz-home.jpg',
    sameAs: [
      // Add a real LinkedIn profile URL here once confirmed.
    ],
  }
}
