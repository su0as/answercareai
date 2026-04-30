'use client'

import { useState, useEffect, useRef } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }

function useCountUp(target: number, duration = 400) {
  const [value, setValue] = useState(target)
  const raf = useRef<number | null>(null)
  const start = useRef<number | null>(null)
  const from = useRef(target)

  useEffect(() => {
    from.current = value
    if (raf.current) cancelAnimationFrame(raf.current)
    start.current = null

    const animate = (ts: number) => {
      if (!start.current) start.current = ts
      const p = Math.min((ts - start.current) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(from.current + (target - from.current) * ease))
      if (p < 1) raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return value
}

function fmt(n: number) {
  return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  display: string
  onChange: (v: number) => void
}

function Slider({ label, value, min, max, step = 1, display, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <label className="text-[15px] text-[#4A4641]" style={BODY}>{label}</label>
        <span className="text-[16px] text-[#0E0E0E]" style={{ ...MONO, letterSpacing: '-0.01em' }}>{display}</span>
      </div>
      <div className="relative h-[2px] bg-[#D5CFC1] rounded-full">
        {/* Filled portion — accent red */}
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: '#B3392D' }}
        />
        {/* Hidden range input for interaction */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute -top-4 left-0 w-full h-9 opacity-0 cursor-pointer"
          style={{ WebkitAppearance: 'none' }}
          aria-label={label}
        />
        {/* Thumb — accent red with paper border */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full pointer-events-none"
          style={{
            left: `calc(${pct}% - 10px)`,
            backgroundColor: '#B3392D',
            border: '2.5px solid #F5F2EC',
            boxShadow: '0 0 0 1px rgba(179,57,45,0.25), 0 1px 3px rgba(0,0,0,0.12)',
          }}
        />
      </div>
    </div>
  )
}

export default function HomeROICalc() {
  const [jobValue, setJobValue] = useState(350)
  const [missedCalls, setMissedCalls] = useState(25)
  const [closeRate, setCloseRate] = useState(50)

  const monthlyLoss = Math.round(missedCalls * (closeRate / 100) * jobValue)
  const annualLoss = monthlyLoss * 12

  const displayLoss = useCountUp(monthlyLoss)
  const displayAnnual = useCountUp(annualLoss)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

      {/* Left — inputs (5/12) */}
      <div className="lg:col-span-5">
        <h3
          className="text-[#0E0E0E] leading-[1.15] tracking-[-0.015em] mb-3"
          style={{ ...BODY, fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 500 }}
        >
          What&apos;s voicemail costing you?
        </h3>
        <p className="text-[16px] text-[#4A4641] leading-[1.55] mb-10" style={BODY}>
          Drag the sliders. The math updates live.
        </p>

        <Slider
          label="Average job value"
          value={jobValue}
          min={50}
          max={2000}
          step={10}
          display={fmt(jobValue)}
          onChange={setJobValue}
        />
        <Slider
          label="Missed calls / month"
          value={missedCalls}
          min={5}
          max={150}
          step={1}
          display={`${missedCalls}`}
          onChange={setMissedCalls}
        />
        <Slider
          label="Close rate on answered calls"
          value={closeRate}
          min={10}
          max={70}
          step={5}
          display={`${closeRate}%`}
          onChange={setCloseRate}
        />

        {/* Formula */}
        <div className="pt-6 border-t border-[#D5CFC1]">
          <p className="text-[11px] text-[#4A4641]/60 leading-[1.7]" style={MONO}>
            missed calls × close rate × job value<br />
            = monthly revenue lost to voicemail
          </p>
        </div>
      </div>

      {/* Right — output (7/12) */}
      <div className="lg:col-span-7">
        <p className="text-[11px] text-[#4A4641] uppercase tracking-[0.10em] mb-4" style={MONO}>
          you&apos;re losing
        </p>

        {/* Big number */}
        <div
          className="leading-[1.0] tracking-[-0.02em] mb-3"
          style={{ ...MONO, fontSize: 'clamp(72px, 11vw, 144px)', color: '#B3392D' }}
        >
          {fmt(displayLoss)}
        </div>

        {/* Underline accent */}
        <div className="mb-4" style={{ width: '55%', height: '2px', backgroundColor: '#B3392D' }} />

        <p className="text-[12px] text-[#4A4641] uppercase tracking-[0.10em] mb-8" style={MONO}>
          /month to voicemail
        </p>

        <div className="space-y-3 mb-10 border-t border-[#D5CFC1] pt-6">
          <p className="text-[17px] text-[#4A4641] leading-[1.55]" style={BODY}>
            That&apos;s{' '}
            <span className="text-[#0E0E0E]" style={{ ...MONO, fontWeight: 400 }}>{fmt(displayAnnual)}</span>
            {' '}per year someone else is booking.
          </p>
          <p className="text-[17px] text-[#4A4641] leading-[1.55]" style={BODY}>
            AnswerCare costs{' '}
            <span className="text-[#0E0E0E]" style={MONO}>$199/month</span>
            {' '}— covered by the first 2 hours of recovered work each month.
          </p>
        </div>

        <a
          href="#pricing"
          className="hover:opacity-85 transition-opacity"
          style={{
            backgroundColor: '#B3392D',
            color: '#F5F2EC',
            padding: '20px 32px',
            borderRadius: '6px',
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            boxShadow: '0 1px 0 rgba(0,0,0,0.12)',
            textDecoration: 'none',
          }}
        >
          Stop the bleed →
        </a>
      </div>

    </div>
  )
}
