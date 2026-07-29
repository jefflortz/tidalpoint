import { ImageResponse } from 'next/og'

export const alt = 'Tidal Point Partners'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#17324D',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: 4,
              color: '#F8F6F2',
            }}
          >
            TIDAL POINT
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 4,
          }}
        >
          <span
            style={{
              fontSize: 32,
              fontWeight: 400,
              letterSpacing: 12,
              color: '#7A9E9F',
            }}
          >
            PARTNERS
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#F8F6F2',
              opacity: 0.85,
            }}
          >
            The operating partner your business has been missing.
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
