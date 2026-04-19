'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const ORANGE = '#E85D04'
const ORANGE_H = '#C94C00'

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
      const elapsed = ts - start.current
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setValue(Math.round(from.current + (target - from.current) * ease))
      if (progress < 1) raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

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
  onChange: (v: number) => void
  display: string
}

function Slider({ label, value, min, max, step = 1, onChange, display }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-inter text-[#525252]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          {label}
        </label>
        <span className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
          {display}
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-[#E5E5E5]">
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: ORANGE }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ WebkitAppearance: 'none' }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm"
          style={{ left: `calc(${pct}% - 8px)`, backgroundColor: ORANGE, pointerEvents: 'none' }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-[#525252]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {typeof min === 'number' && label.toLowerCase().includes('value') ? fmt(min) : min}
          {label.toLowerCase().includes('rate') ? '%' : ''}
          {label.toLowerCase().includes('calls') ? '' : ''}
        </span>
        <span className="text-xs text-[#525252]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {typeof max === 'number' && label.toLowerCase().includes('value') ? fmt(max) : max}
          {label.toLowerCase().includes('rate') ? '%' : ''}
        </span>
      </div>
    </div>
  )
}

export default function TradesROICalc() {
  const [missedCalls, setMissedCalls] = useState(25)
  const [jobValue, setJobValue] = useState(350)
  const [convRate, setConvRate] = useState(60)

  const monthlyLoss = Math.round(missedCalls * (convRate / 100) * jobValue)
  const annualLoss = monthlyLoss * 12
  const planCost = 199
  const recoveredJobs = Math.round(missedCalls * (convRate / 100))
  const paybackJobs = Math.ceil(planCost / jobValue)

  const displayLoss = useCountUp(monthlyLoss)
  const displayAnnual = useCountUp(annualLoss)
  const displayJobs = useCountUp(recoveredJobs)

  return (
    <section className="py-20 sm:py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Run the numbers yourself
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] leading-tight" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            What&apos;s voicemail costing you?
          </h2>
          <p className="mt-3 text-[#525252] max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Adjust the sliders. The formula is shown — no black box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-semibold text-[#0A0A0A] mb-6" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
              Your numbers
            </h3>

            <Slider
              label="Monthly missed calls"
              value={missedCalls}
              min={5}
              max={120}
              step={5}
              onChange={setMissedCalls}
              display={`${missedCalls}/mo`}
            />
            <Slider
              label="Average job value"
              value={jobValue}
              min={100}
              max={1500}
              step={25}
              onChange={setJobValue}
              display={fmt(jobValue)}
            />
            <Slider
              label="Conversion rate (answered → booked)"
              value={convRate}
              min={20}
              max={90}
              step={5}
              onChange={setConvRate}
              display={`${convRate}%`}
            />

            <p className="mt-6 text-xs text-[#525252] border-t border-[#E5E5E5] pt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Formula: Missed Calls × Conversion Rate × Job Value = Monthly Loss
            </p>
          </div>

          {/* Output */}
          <div className="bg-[#0A0A0A] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-white/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Revenue left on the table every month
              </p>
              <p className="font-black text-5xl sm:text-6xl text-white leading-none" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
                {fmt(displayLoss)}
              </p>
              <p className="text-white/40 text-sm mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                That&apos;s <span className="text-white/70 font-semibold">{fmt(displayAnnual)}</span> per year.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Jobs you could recover / month</span>
                <span className="font-bold text-white" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>{displayJobs}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>AnswerCare AI costs</span>
                <span className="font-bold text-white" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>$199/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Pays for itself after</span>
                <span className="font-bold" style={{ fontFamily: '"Inter Tight", Inter, sans-serif', color: '#E85D04' }}>
                  {paybackJobs} booked {paybackJobs === 1 ? 'job' : 'jobs'}
                </span>
              </div>
            </div>

            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: ORANGE, fontFamily: '"Inter Tight", Inter, sans-serif' }}
            >
              Start recovering these jobs →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
