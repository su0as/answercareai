'use client'

import { useState, useEffect, useRef } from 'react'

function fmt(n: number) {
  return new Intl.NumberFormat('en-US').format(Math.round(n))
}
function fmtMoney(n: number) {
  return '$' + new Intl.NumberFormat('en-US').format(Math.round(n))
}

interface CalcRowProps {
  label: string
  sub?: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
  hint?: string
}

function CalcRow({ label, sub, value, min, max, step, unit, onChange, hint }: CalcRowProps) {
  return (
    <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line-soft)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>{label}</div>
          {sub && <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>}
        </div>
        <div className="num" style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>
          {unit === '$' ? fmtMoney(value) : `${value}${unit || ''}`}
        </div>
      </div>
      <input
        className="rng"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={e => onChange(Number(e.target.value))}
      />
      {hint && (
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', marginTop: 8, letterSpacing: '.04em' }}>
          {hint}
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, bold, muted, accent }: { label: string; value: string; bold?: boolean; muted?: boolean; accent?: boolean }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12,
      opacity: muted ? .6 : 1,
    }}>
      <span style={{ color: 'rgba(244,240,230,.7)' }}>{label}</span>
      <span className="num" style={{
        fontWeight: bold ? 600 : 500,
        fontSize: bold ? 22 : 17,
        color: accent ? '#9FE2B0' : '#fff',
      }}>{value}</span>
    </div>
  )
}

interface HomeROICalcProps {
  valueLabel?: string
  valueSub?: string
  defaultValue?: number
  /** undefined = show default home-services note; null = suppress; string = custom note */
  benchmarkNote?: string | null
  defaultCloseRate?: number
}

export default function HomeROICalc({
  valueLabel = 'Average value of a booked job / client / patient',
  valueSub = 'Typical revenue per booked appointment or job.',
  defaultValue = 750,
  benchmarkNote,
  defaultCloseRate = 30,
}: HomeROICalcProps = {}) {
  const resolvedBenchmarkNote =
    benchmarkNote === undefined ? 'Industry median for home services is 28–34%.' : (benchmarkNote ?? undefined)

  const [calls, setCalls]   = useState(7)
  const [job, setJob]       = useState(defaultValue)
  const [close, setClose]   = useState(defaultCloseRate)

  const missedPerMonth   = calls * 22
  const recoverableJobs  = missedPerMonth * (close / 100)
  const recoveredRevenue = recoverableJobs * job
  const acCost           = 900  // default Grow plan
  const net              = recoveredRevenue - acCost
  const multiple         = recoveredRevenue / acCost

  // Animated counter
  const [display, setDisplay] = useState(net)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = display
    const end   = net
    const t0    = performance.now()
    const dur   = 500
    const step  = (now: number) => {
      const k      = Math.min(1, (now - t0) / dur)
      const eased  = 1 - Math.pow(1 - k, 3)
      setDisplay(start + (end - start) * eased)
      if (k < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [net]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="calc-grid" style={{
      border: '1px solid var(--line)', borderRadius: 24, overflow: 'hidden',
      background: 'var(--panel)',
    }}>
      {/* Left — inputs */}
      <div className="calc-left" style={{ padding: '36px 40px' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          <span className="dot pain" />Your numbers
        </div>
        <h3 style={{ marginBottom: 6 }}>What are unanswered calls costing you?</h3>
        <p style={{ color: 'var(--muted)', fontSize: 14.5 }}>Drag the sliders. We do the math.</p>

        <CalcRow
          label="Calls that go unanswered per day"
          sub="Overflow, after-hours, or when your team is on another line."
          value={calls} min={1} max={20} step={1} unit=""
          onChange={setCalls}
          hint={`≈ ${fmt(missedPerMonth)} unanswered calls / month`}
        />
        <CalcRow
          label={valueLabel}
          sub={valueSub}
          value={job} min={150} max={3000} step={25} unit="$"
          onChange={setJob}
        />
        <CalcRow
          label="Close rate on answered calls"
          sub="Of callers who reach a person, how many convert?"
          value={close} min={10} max={70} step={1} unit="%"
          onChange={setClose}
          hint={resolvedBenchmarkNote}
        />
      </div>

      {/* Right — output */}
      <div style={{
        padding: '36px 40px',
        background: 'linear-gradient(180deg, #0E0E0C 0%, #1B1B17 100%)',
        color: '#F4F0E6',
        position: 'relative',
      }}>
        <div className="eyebrow" style={{ color: 'rgba(244,240,230,.6)', marginBottom: 18 }}>
          <span className="dot good" />Net upside / month
        </div>

        <div style={{ position: 'relative' }}>
          <div className="num serif" style={{
            fontSize: 'clamp(64px, 9vw, 140px)',
            lineHeight: 1, letterSpacing: '-.04em', color: '#FFFFFF',
          }}>
            {fmtMoney(Math.max(0, display))}
          </div>
          <div style={{
            position: 'absolute', top: -8, right: 0,
            transform: 'rotate(8deg)',
            background: 'var(--pain)', color: '#fff',
            padding: '6px 10px', borderRadius: 8, fontSize: 12, fontWeight: 600,
          }}>
            {multiple.toFixed(1)}× ROI
          </div>
        </div>

        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14.5 }}>
          <Stat label="Recoverable bookings / mo"  value={fmt(recoverableJobs)} />
          <Stat label="Revenue back in pocket"     value={fmtMoney(recoveredRevenue)} accent />
          <Stat label="AnswerCare Grow plan"        value={`– ${fmtMoney(acCost)}`} muted />
          <div style={{ height: 1, background: 'rgba(244,240,230,.18)', margin: '6px 0' }} />
          <Stat label="Net upside"                  value={fmtMoney(Math.max(0, net))} bold />
        </div>

        <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a className="btn btn-accent" href="#pilot">
            Start a performance pilot <span className="arrow">→</span>
          </a>
          <a className="btn" style={{
            background: 'rgba(255,255,255,.08)', color: '#F4F0E6',
            border: '1px solid rgba(255,255,255,.18)',
          }} href="#calc">
            See your revenue number
          </a>
        </div>

        <div className="mono" style={{ fontSize: 11, color: 'rgba(244,240,230,.5)', marginTop: 18, letterSpacing: '.05em' }}>
          MATH: {fmt(missedPerMonth)} × {close}% × {fmtMoney(job)} − {fmtMoney(acCost)} = {fmtMoney(Math.max(0, net))} · Illustrative — adjust to your real numbers. We&apos;ll verify them live.
        </div>
      </div>
    </div>
  )
}
