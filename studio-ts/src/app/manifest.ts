import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tidal Point Partners',
    short_name: 'Tidal Point',
    description:
      'Business Value Creation and M&A Advisory for owners of privately held businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F6F2',
    theme_color: '#17324D',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
