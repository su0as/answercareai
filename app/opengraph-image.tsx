import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AnswerCare AI — Missed-Call Revenue Recovery'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F6F4EE',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent dot top-right */}
        <div style={{
          position: 'absolute', top: 64, right: 96,
          width: 14, height: 14, borderRadius: '50%',
          background: '#22C55E',
        }} />

        {/* Brand */}
        <div style={{
          fontSize: 15, color: '#999', letterSpacing: '0.12em',
          marginBottom: 40, fontWeight: 500,
        }}>
          ANSWERCAREAI.COM
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 68, fontWeight: 700, color: '#0E0E0C',
          lineHeight: 1.05, maxWidth: 820, marginBottom: 36,
          letterSpacing: '-0.03em',
        }}>
          Missed-Call Revenue Recovery
        </div>

        {/* Subline */}
        <div style={{
          fontSize: 26, color: '#555', maxWidth: 680, lineHeight: 1.5,
          marginBottom: 56,
        }}>
          Every unanswered call is revenue your competitor books.
          AnswerCare answers 24/7 and books the job.
        </div>

        {/* Metrics strip */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { val: '< 2 sec', label: 'pickup speed' },
            { val: '24/7', label: 'always on' },
            { val: '$500/mo', label: 'plans from' },
            { val: '1 day', label: 'go-live' },
          ].map(({ val, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#0E0E0C', letterSpacing: '-0.02em' }}>{val}</div>
              <div style={{ fontSize: 14, color: '#888', letterSpacing: '0.06em' }}>{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
