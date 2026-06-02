'use client'

import { useState } from 'react'

// ILLUSTRATIVE SAMPLES — replace with real anonymized calls as available
const calls = [
  {
    time: '11:47 PM', kind: 'After-hours emergency repair', sec: '1:12',
    summary: 'Emergency call after hours. Caller triaged, urgency confirmed, on-call tech dispatched, ETA texted to caller.',
  },
  {
    time: 'Sat 8:14 AM', kind: 'New-patient appointment request', sec: '0:54',
    summary: 'First-time caller requesting an appointment. Insurance and availability confirmed, booked directly into scheduler.',
  },
  {
    time: 'Tue 1:21 PM', kind: 'Tenant maintenance / flooding', sec: '1:31',
    summary: 'Tenant reporting water issue. Emergency flagged, property manager notified, maintenance dispatched same hour.',
  },
  {
    time: 'Thu 6:48 AM', kind: 'New-client intake screening', sec: '0:43',
    summary: 'Prospective client inquiry. Screened against intake criteria, qualified lead, consultation booked on calendar.',
  },
]

export default function HomeRealCalls() {
  const [active, setActive] = useState(0)

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="calls-grid">
        {/* Left — call list */}
        <div>
          {calls.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: '100%', textAlign: 'left',
                display: 'grid', gridTemplateColumns: '72px 1fr auto',
                alignItems: 'center', gap: 16, padding: '22px 24px',
                background: i === active ? 'rgba(14,14,12,.04)' : 'transparent',
                border: 'none', borderBottom: '1px solid var(--line-soft)',
                color: 'var(--ink)', cursor: 'pointer',
              }}
            >
              <span className="mono num" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>
                {c.time}
              </span>
              <span style={{ fontSize: 16, fontWeight: i === active ? 600 : 400 }}>{c.kind}</span>
              <span className="mono num" style={{ fontSize: 12, color: 'var(--muted)' }}>{c.sec}</span>
            </button>
          ))}
        </div>

        {/* Right — player */}
        <div className="calls-panel" style={{
          padding: '28px 32px',
          background: 'rgba(14,14,12,.03)',
        }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Now playing</div>
          <h3 className="serif" style={{ fontSize: 28, fontStyle: 'italic', marginBottom: 10 }}>
            &ldquo;{calls[active].kind}&rdquo;
          </h3>
          <p style={{ color: 'var(--ink-2)', fontSize: 15, marginBottom: 20 }}>
            {calls[active].summary}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <button className="btn btn-primary" style={{ padding: '12px 18px' }}>
              ▶ Play <span className="num" style={{ color: 'rgba(246,244,238,.7)', marginLeft: 6 }}>{calls[active].sec}</span>
            </button>
            <div style={{ flex: 1, height: 4, borderRadius: 999, background: 'var(--line)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '14%', background: 'var(--ink)', borderRadius: 999 }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="chip">Address verified</span>
            <span className="chip">Booked in calendar</span>
            <span className="chip">SMS sent to tech</span>
            <span className="chip">Logged + searchable</span>
          </div>
        </div>
      </div>
    </div>
  )
}
