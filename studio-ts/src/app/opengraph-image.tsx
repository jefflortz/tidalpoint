import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Tidal Point Partners'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadCormorantGaramond() {
  try {
    // A generic User-Agent gets served a plain .ttf link (no woff2
    // negotiation needed) — Satori accepts TrueType directly.
    let css = await fetch(
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap',
    ).then((res) => res.text())

    let ttfUrl = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1]
    if (!ttfUrl) return null

    return await fetch(ttfUrl).then((res) => res.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  let [backgroundBuffer, cormorantData] = await Promise.all([
    readFile(
      path.join(process.cwd(), 'public/images/og/navigation-background.jpg'),
    ),
    loadCormorantGaramond(),
  ])
  let backgroundSrc = `data:image/jpeg;base64,${backgroundBuffer.toString('base64')}`
  let serif = cormorantData ? 'Cormorant Garamond' : 'Georgia, serif'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#17324D',
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '78% 45%',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '64px 72px',
          }}
        >
          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: serif,
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: 4,
                color: '#F8F6F2',
              }}
            >
              TIDAL POINT
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginTop: 6,
              }}
            >
              <span style={{ display: 'flex', width: 28, height: 1, backgroundColor: 'rgba(248,246,242,0.5)' }} />
              <span
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 6,
                  color: '#F8F6F2',
                }}
              >
                PARTNERS
              </span>
              <span style={{ display: 'flex', width: 28, height: 1, backgroundColor: 'rgba(248,246,242,0.5)' }} />
            </div>
          </div>

          {/* Positioning */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 76,
              maxWidth: 780,
            }}
          >
            <span
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: 3.5,
                color: '#9BB8B8',
              }}
            >
              FOR PRIVATELY HELD BUSINESSES
            </span>
            <span
              style={{
                fontFamily: serif,
                fontSize: 48,
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#F8F6F2',
                marginTop: 20,
              }}
            >
              The Operating Partner Your Business Has Been Missing.
            </span>
          </div>

          {/* URL */}
          <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
            <span
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: 20,
                color: 'rgba(248,246,242,0.75)',
              }}
            >
              tidalpointpartners.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: cormorantData
        ? [
            {
              name: 'Cormorant Garamond',
              data: cormorantData,
              weight: 500,
              style: 'normal',
            },
          ]
        : undefined,
    },
  )
}
