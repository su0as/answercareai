'use client'

import { useState } from 'react'

const calls = [
  {
    time: '11:47 PM', kind: 'Emergency lockout', sec: '1:12',
    summary: 'Stranded customer in parking lot. Confirmed cross-streets, dispatched tech, sent ETA confirmation.',
  },
  {
    time: 'Sat 7:02 AM', kind: 'Garage door off track', sec: '0:54',
    summary: 'Homeowner can not get to work. Booked 9 AM same-day slot, collected gate code, verified address.',
  },
  {
    time: 'Tue 1:21 PM', kind: 'Pricing inquiry — water heater', sec: '1:31',
    summary: 'Quoted from your script, collected job details, scheduled in-home estimate. No callback required.',
  },
  {
    time: 'Thu 6:48 AM', kind: 'Scheduling change request', sec: '0:43',
    summary: 'Existing customer rescheduling. Updated calendar, texted tech, confirmed new arrival window.',
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
