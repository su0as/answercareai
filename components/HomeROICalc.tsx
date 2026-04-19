'use client'

import { useState, useEffect, useRef } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }

function useCountUp(target: number, duration = 350) {
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
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-[13px] text-[#4A4641]" style={BODY}>{label}</label>
        <span className="text-[15px] text-[#0E0E0E]" style={{ ...MONO, letterSpacing: '-0.01em' }}>{display}</span>
      </div>
      <div className="relative h-px bg-[#D5CFC1]">
        <div
          className="absolute left-0 top-0 h-full bg-[#0E0E0E]"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute -top-3 left-0 w-full h-7 opacity-0 cursor-pointer"
          style={{ WebkitAppearance: 'none' }}
        />
        <div
          className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-[#0E0E0E] -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${pct}% - 7px)` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[11px] text-[#4A4641]/60" style={MONO}>
          {typeof min === 'number' && label.toLowerCase().includes('value') ? fmt(min) : `${min}${label.toLowerCase().includes('rate') ? '%' : ''}`}
        </span>
        <span className="text-[11px] text-[#4A4641]/60" style={MONO}>
          {typeof max === 'number' && label.toLowerCase().includes('value') ? fmt(max) : `${max}${label.toLowerCase().includes('rate') ? '%' : ''}`}
        </span>
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
  const paybackJobs = Math.ceil(199 / jobValue)
  const hoursToPayback = Math.round((199 / (monthlyLoss / (30 * 24))) * 10) / 10

  const displayLoss = useCountUp(monthlyLoss)
  const displayAnnual = useCountUp(annualLoss)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
      {/* Left — inputs (2/5 width) */}
      <div className="lg:col-span-2">
        <Slider
          label="Average job value"
          value={jobValue}
          min={50}
          max={2000}
          step={25}
          display={fmt(jobValue)}
          onChange={setJobValue}
        />
        <Slider
          label="Missed calls / month"
          value={missedCalls}
          min={5}
          max={150}
          step={5}
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
          <p className="text-[11px] text-[#4A4641]/70 leading-[1.6]" style={MONO}>
            missed × close rate × job value<br />
            = monthly revenue lost
          </p>
        </div>
      </div>

      {/* Right — output (3/5 width) */}
      <div className="lg:col-span-3">
        <p className="text-[13px] text-[#4A4641] mb-3" style={BODY}>
          You&apos;re losing
        </p>
        <div
          className="text-[#0E0E0E] leading-[1.0] tracking-[-0.03em] mb-2"
          style={{ ...MONO, fontSize: 'clamp(64px, 9vw, 120px)' }}
        >
          {fmt(displayLoss)}
        </div>
        <p className="text-[18px] text-[#4A4641] mb-8" style={BODY}>
          /month to voicemail.
        </p>

        <div className="border-t border-[#D5CFC1] pt-6 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[13px] text-[#4A4641]" style={BODY}>That&apos;s</span>
            <span className="text-[17px] text-[#0E0E0E] font-semibold" style={{ ...MONO }}>{fmt(displayAnnual)}</span>
            <span className="text-[13px] text-[#4A4641]" style={BODY}>per year.</span>
          </div>
          <p className="text-[13px] text-[#4A4641]" style={BODY}>
            AnswerCare AI costs <span className="text-[#0E0E0E] font-medium" style={MONO}>$199/month</span>.{' '}
            Pays back after{' '}
            <span className="text-[#0E0E0E] font-medium" style={MONO}>{paybackJobs} booked {paybackJobs === 1 ? 'job' : 'jobs'}</span>
            {hoursToPayback < 48 ? ` — roughly ${hoursToPayback} hours of recovered work per month.` : '.'}
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[#B3392D] border border-[#B3392D] px-5 py-2.5 rounded hover:bg-[#B3392D] hover:text-white transition-all"
            style={{ ...BODY, fontWeight: 500 }}
          >
            Stop the bleed →
          </a>
        </div>
      </div>
    </div>
  )
}
