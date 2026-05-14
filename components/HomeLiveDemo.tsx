'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const DEMO_SCRIPT = [
  { t: 0,    side: 'caller', text: "Hey, uh, my main shutoff valve's leaking everywhere. I shut the water but it's still dripping fast." },
  { t: 2200, side: 'ai',     text: "Got it — sounds like an emergency. I can dispatch a plumber. Can I grab your address?" },
  { t: 4400, side: 'caller', text: "1422 Oak Ridge Drive, Lakewood." },
  { t: 5600, side: 'ai',     text: "Lakewood, perfect — that's in your service area. Earliest slot is today, 4:15 PM. Book it?" },
  { t: 7600, side: 'caller', text: "Yes please." },
  { t: 8200, side: 'ai',     text: "Booked. Texting you a confirmation now. Mike will call 20 min before arrival." },
]

function CallerWaveform({ active }: { active: boolean }) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setTick(x => x + 1), 80)
    return () => clearInterval(id)
  }, [active])

  const bars = 28
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 24 }}>
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} style={{
          display: 'inline-block', width: 3, borderRadius: 2,
          background: active ? 'var(--ink)' : 'rgba(14,14,12,.18)',
          height: active ? `${6 + Math.abs(Math.sin((i + tick / 3.2))) * 18}px` : '6px',
          transition: 'height .12s linear',
        }} />
      ))}
    </div>
  )
}

type Phase = 'idle' | 'ringing' | 'connected' | 'done'

export default function HomeLiveDemo({ autoplay = true }: { autoplay?: boolean }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [shown, setShown] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }

  const start = useCallback(() => {
    clear()
    setPhase('ringing'); setShown(0)
    timers.current.push(setTimeout(() => setPhase('connected'), 1800))
    DEMO_SCRIPT.forEach((line, i) => {
      timers.current.push(setTimeout(() => setShown(i + 1), 1800 + line.t))
    })
    timers.current.push(setTimeout(() => setPhase('done'), 1800 + DEMO_SCRIPT[DEMO_SCRIPT.length - 1].t + 1600))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (autoplay) {
      const id = setTimeout(start, 700)
      return () => { clearTimeout(id); clear() }
    }
  }, [autoplay, start]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase === 'done') {
      const id = setTimeout(start, 2400)
      return () => clearTimeout(id)
    }
  }, [phase, start])

  const elapsed = phase === 'idle' ? 0 :
    phase === 'ringing' ? 0 :
    Math.min(DEMO_SCRIPT[Math.max(0, shown - 1)]?.t / 1000 + 1.5 || 0, 11)

  const mins = Math.floor(elapsed / 60)
  const secs = Math.floor(elapsed % 60).toString().padStart(2, '0')

  return (
    <div className="card" style={{
      padding: 0, overflow: 'hidden',
      background: 'var(--panel)',
      boxShadow: '0 1px 0 rgba(255,255,255,.6) inset, 0 30px 80px -30px rgba(14,14,12,.18)',
    }}>
      {/* Browser bezel */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 18px', borderBottom: '1px solid var(--line)',
        background: 'rgba(14,14,12,.03)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E94B3D' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F4BD3F' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#2BC25B' }} />
          </span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
            answercare.live · live call
          </span>
        </div>
        <div className="mono num" style={{ fontSize: 11, color: 'var(--muted)' }}>
          {phase === 'connected' && (
            <span className="blink" style={{ color: 'var(--pain)' }}>● REC </span>
          )}
          {`${mins}:${secs}`}
        </div>
      </div>

      {/* Caller strip */}
      <div style={{
        padding: '18px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        borderBottom: '1px solid var(--line-soft)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2A2A24, #0E0E0C)', color: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 600, fontSize: 16, letterSpacing: '.02em',
            animation: phase === 'ringing'
              ? 'ringWiggle .5s ease-in-out infinite, ringPulse 1.4s ease-out infinite'
              : 'none',
          }}>JM</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Jason M. · Homeowner</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
              +1 (303) 555-0142 · Lakewood, CO
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {phase === 'ringing' && <span className="chip accent">Incoming…</span>}
          {phase === 'connected' && <span className="chip good">Connected</span>}
          {phase === 'done' && <span className="chip good">✓ Booked · 4:15 PM</span>}
        </div>
      </div>

      {/* Transcript body */}
      <div className="demo-transcript" style={{
        padding: '20px 22px', minHeight: 320, maxHeight: 400,
        display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent, transparent 70%, var(--bg) 100%)',
        position: 'relative',
      }}>
        {phase === 'idle' && (
          <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--muted)' }}>
            <div className="serif" style={{ fontSize: 28, color: 'var(--ink)', marginBottom: 8 }}>
              Ready to answer.
            </div>
            <button className="btn btn-accent" onClick={start}>Play live demo</button>
          </div>
        )}

        {phase === 'ringing' && (
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)' }}>RINGING</div>
            <div className="serif" style={{ fontSize: 36, marginTop: 6 }}>Picking up…</div>
            <div style={{ marginTop: 14 }}><CallerWaveform active={false} /></div>
          </div>
        )}

        {(phase === 'connected' || phase === 'done') && (
          <>
            {DEMO_SCRIPT.slice(0, shown).map((line, i) => (
              <div key={i} style={{
                animation: 'typeIn .3s ease-out',
                display: 'flex', gap: 10, alignItems: 'flex-start',
                flexDirection: line.side === 'ai' ? 'row-reverse' : 'row',
              }}>
                <div style={{
                  flex: '0 0 auto', fontSize: 10, fontWeight: 600,
                  letterSpacing: '.08em', textTransform: 'uppercase',
                  padding: '4px 8px', borderRadius: 6,
                  background: line.side === 'ai' ? 'var(--ink)' : 'rgba(14,14,12,.06)',
                  color: line.side === 'ai' ? 'var(--bg)' : 'var(--muted)',
                  marginTop: 3,
                }}>
                  {line.side === 'ai' ? 'AC' : 'CALLER'}
                </div>
                <div style={{
                  fontSize: 15.5, lineHeight: 1.45,
                  color: line.side === 'ai' ? 'var(--ink)' : 'var(--ink-2)',
                  fontWeight: line.side === 'ai' ? 500 : 400,
                  maxWidth: '78%',
                  textAlign: line.side === 'ai' ? 'right' : 'left',
                }}>
                  {line.text}
                </div>
              </div>
            ))}
            {phase === 'connected' && shown < DEMO_SCRIPT.length && (
              <div style={{ display: 'flex', gap: 6, marginLeft: 4, marginTop: 4 }}>
                <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)' }} />
                <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animationDelay: '.15s' }} />
                <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animationDelay: '.3s' }} />
              </div>
            )}
          </>
        )}
      </div>

      {/* Outcomes strip */}
      <div className="outcomes-strip">
        {[
          ['Job type', 'Emergency repair'],
          ['Address', '1422 Oak Ridge Dr'],
          ['Booked for', 'Today · 4:15 PM'],
          ['SMS sent', '✓ Tech + customer'],
        ].map(([k, v]) => (
          <div key={k} style={{ padding: '12px 16px', borderRight: '1px solid var(--line-soft)' }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{k}</div>
            <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 3 }}>
              {phase === 'done' || (phase === 'connected' && shown >= 4)
                ? v
                : <span style={{ color: 'var(--muted-2)' }}>—</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
