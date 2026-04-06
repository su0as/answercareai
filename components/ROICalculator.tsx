'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'framer-motion'
import {
  calcDental, calcLegal, calcRealEstate, calcHome, fmt,
  type ROIResults,
} from '@/lib/calculations'
import type { CalcVertical } from '@/lib/calculations'
import SectionTag from './SectionTag'

// ─── Animated number hook ─────────────────────────────────────────────────────

function useCountUp(target: number, duration = 450) {
  const [val, setVal] = useState(target)
  const fromRef = useRef(target)
  const rafRef = useRef<number>()

  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      setVal(from + (target - from) * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration])

  return val
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function RangeSlider({
  label, min, max, value, step = 1, suffix = '',
  onChange,
}: {
  label: string; min: number; max: number; value: number
  step?: number; suffix?: string; onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm text-white/60">{label}</label>
        <span className="font-mono-accent text-sm font-semibold text-white">
          {value}{suffix}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-slider w-full"
          style={{ '--pct': `${pct}%` } as React.CSSProperties}
          aria-label={label}
        />
      </div>
    </div>
  )
}

function Dropdown<T extends number | string>({
  label, options, value, onChange, formatOption,
}: {
  label: string; options: T[]; value: T
  onChange: (v: T) => void; formatOption: (v: T) => string
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-white/60 mb-2">{label}</label>
      <select
        value={String(value)}
        onChange={(e) => {
          const raw = e.target.value
          onChange((typeof value === 'number' ? Number(raw) : raw) as T)
        }}
        className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm font-mono-accent appearance-none cursor-pointer hover:border-white/40 transition-colors focus:outline-none focus:border-white/60"
      >
        {options.map((opt) => (
          <option key={String(opt)} value={String(opt)} className="bg-bg-dark text-white">
            {formatOption(opt)}
          </option>
        ))}
      </select>
    </div>
  )
}

function ResultValue({ raw, prefix = '$', isRoi = false }: { raw: number; prefix?: string; isRoi?: boolean }) {
  const animated = useCountUp(raw)
  if (isRoi) {
    return <span>{Math.round(animated)}:1</span>
  }
  return <span>{fmt(animated, prefix)}</span>
}

// ─── Config per vertical ──────────────────────────────────────────────────────

type DentalState = { callsPerDay: number; missRate: number; lifetimeValue: number; staffCost: number }
type LegalState = { callsPerDay: number; voicemailRate: number; caseValue: number; billingRate: number }
type REState = { callsPerWeek: number; missRate: number; commission: number; conversionDenom: number }
type HomeState = { callsPerDay: number; missRate: number; customerValue: number }

// ─── Main component ───────────────────────────────────────────────────────────

interface ROICalculatorProps {
  vertical: CalcVertical
  accentTextClass?: string
  accentColor?: string
}

export default function ROICalculator({ vertical, accentTextClass = 'text-white' }: ROICalculatorProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  // Dental state
  const [dental, setDental] = useState<DentalState>({ callsPerDay: 25, missRate: 35, lifetimeValue: 5000, staffCost: 3500 })
  // Legal state
  const [legal, setLegal] = useState<LegalState>({ callsPerDay: 12, voicemailRate: 42, caseValue: 10000, billingRate: 300 })
  // Real estate state
  const [re, setRe] = useState<REState>({ callsPerWeek: 20, missRate: 42, commission: 10000, conversionDenom: 8 })
  // Home state
  const [home, setHome] = useState<HomeState>({ callsPerDay: 15, missRate: 38, customerValue: 500 })

  const results: ROIResults = (() => {
    if (vertical === 'dental') return calcDental(dental)
    if (vertical === 'legal') return calcLegal(legal)
    if (vertical === 'realestate') return calcRealEstate(re)
    return calcHome(home)
  })()

  const updateDental = useCallback((k: keyof DentalState) => (v: number) => setDental(p => ({ ...p, [k]: v })), [])
  const updateLegal  = useCallback((k: keyof LegalState)  => (v: number) => setLegal(p => ({ ...p, [k]: v })),  [])
  const updateRe     = useCallback((k: keyof REState)      => (v: number) => setRe(p => ({ ...p, [k]: v })),     [])
  const updateHome   = useCallback((k: keyof HomeState)    => (v: number) => setHome(p => ({ ...p, [k]: v })),   [])

  return (
    <section ref={ref} className="section-padding bg-bg-dark relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4 border-white/20 text-white/50">ROI Calculator</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-bg-primary mt-4">
            What are missed calls actually costing you?
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Adjust the numbers to match your business. See the impact update live.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* ─── Inputs panel ─── */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-mono-accent tracking-widest uppercase text-white/40 mb-6">Your Numbers</h3>

            {vertical === 'dental' && (
              <>
                <RangeSlider label="Calls your practice gets per day" min={5} max={60} value={dental.callsPerDay} onChange={updateDental('callsPerDay')} />
                <RangeSlider label="% that go unanswered" min={10} max={80} value={dental.missRate} suffix="%" onChange={updateDental('missRate')} />
                <Dropdown label="Average new patient lifetime value" options={[3000, 5000, 8000, 12000]} value={dental.lifetimeValue} onChange={updateDental('lifetimeValue')} formatOption={(v) => `$${(v as number).toLocaleString()}`} />
                <Dropdown label="Monthly front desk staff cost" options={[0, 2500, 3500, 4500]} value={dental.staffCost} onChange={updateDental('staffCost')} formatOption={(v) => v === 0 ? '$0 (solo / no staff)' : `$${(v as number).toLocaleString()}/mo`} />
              </>
            )}

            {vertical === 'legal' && (
              <>
                <RangeSlider label="Calls your firm gets per day" min={3} max={40} value={legal.callsPerDay} onChange={updateLegal('callsPerDay')} />
                <RangeSlider label="% that go to voicemail" min={15} max={80} value={legal.voicemailRate} suffix="%" onChange={updateLegal('voicemailRate')} />
                <Dropdown label="Average case value" options={[2000, 5000, 10000, 25000, 50000]} value={legal.caseValue} onChange={updateLegal('caseValue')} formatOption={(v) => `$${(v as number).toLocaleString()}`} />
                <Dropdown label="Your hourly billing rate" options={[150, 250, 350, 500]} value={legal.billingRate} onChange={updateLegal('billingRate')} formatOption={(v) => `$${v}/hr`} />
              </>
            )}

            {vertical === 'realestate' && (
              <>
                <RangeSlider label="Inquiry calls per week" min={5} max={50} value={re.callsPerWeek} onChange={updateRe('callsPerWeek')} />
                <RangeSlider label="% you miss (showings, driving, etc.)" min={20} max={70} value={re.missRate} suffix="%" onChange={updateRe('missRate')} />
                <Dropdown label="Average commission per deal" options={[5000, 8000, 12000, 20000]} value={re.commission} onChange={updateRe('commission')} formatOption={(v) => `$${(v as number).toLocaleString()}`} />
                <Dropdown label="Missed calls that convert to a deal" options={[5, 8, 10, 15]} value={re.conversionDenom} onChange={updateRe('conversionDenom')} formatOption={(v) => `1 in ${v}`} />
              </>
            )}

            {vertical === 'home' && (
              <>
                <RangeSlider label="Calls your business gets per day" min={5} max={50} value={home.callsPerDay} onChange={updateHome('callsPerDay')} />
                <RangeSlider label="% that go unanswered" min={10} max={80} value={home.missRate} suffix="%" onChange={updateHome('missRate')} />
                <div className="mb-5">
                  <label className="block text-sm text-white/60 mb-2">Average value per new customer</label>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                    <span className="text-white/40 text-sm">$</span>
                    <input
                      type="number"
                      min={50} max={50000}
                      value={home.customerValue}
                      onChange={(e) => updateHome('customerValue')(Number(e.target.value))}
                      className="flex-1 bg-transparent text-white text-sm font-mono-accent focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ─── Results panel ─── */}
          <div className="space-y-4">
            {/* Without AnswerCare */}
            <div className="bg-red-950/30 border border-red-900/40 rounded-2xl p-6">
              <p className="text-xs font-mono-accent tracking-widest uppercase text-red-400/70 mb-4">Without AnswerCare</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/50">Missed calls / month</span>
                  <span className="font-mono-accent font-bold text-white/80">
                    <ResultValue raw={results.missedCallsPerMonth} prefix="" />
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/50">Revenue lost monthly</span>
                  <span className="font-mono-accent font-bold text-red-400">
                    <ResultValue raw={results.revenueLostMonthly} />
                  </span>
                </div>
                <div className="h-px bg-red-900/30" />
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/70 font-medium">Revenue lost annually</span>
                  <span className="font-mono-accent font-bold text-lg text-red-300">
                    <ResultValue raw={results.revenueLostAnnually} />
                  </span>
                </div>
              </div>
            </div>

            {/* With AnswerCare */}
            <div className="bg-green-950/30 border border-green-900/40 rounded-2xl p-6">
              <p className="text-xs font-mono-accent tracking-widest uppercase text-green-400/70 mb-4">With AnswerCare</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/50">Calls captured</span>
                  <span className="font-mono-accent font-bold text-green-400">100%</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/50">Est. additional revenue / mo</span>
                  <span className="font-mono-accent font-bold text-green-400">
                    +<ResultValue raw={results.revenueRecoveredMonthly} />
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/50">ROI on AnswerCare</span>
                  <span className="font-mono-accent font-bold text-green-300">
                    <ResultValue raw={Math.max(results.roi, 0)} isRoi />
                    <span className="text-white/40 text-xs ml-1">return</span>
                  </span>
                </div>
                <div className="h-px bg-green-900/30" />
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-white/70 font-medium">Pays for itself in</span>
                  <span className="font-mono-accent font-bold text-lg text-green-300">
                    {Math.max(1, Math.round(results.paybackDays))} days
                  </span>
                </div>
              </div>
            </div>

            {/* Big CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-white/50 text-xs mb-1">You&apos;re leaving approximately</p>
              <p className="font-mono-accent text-2xl font-bold text-red-300 mb-1">
                <ResultValue raw={results.revenueLostAnnually} />
              </p>
              <p className="text-white/40 text-xs mb-4">on the table every year.</p>
              <a
                href="#pricing"
                className="inline-block bg-bg-primary text-text-primary font-medium text-sm px-6 py-3 rounded-xl hover:scale-[1.02] transition-transform"
              >
                Stop the bleed — Start Free Trial
              </a>
              <p className="text-white/25 text-xs mt-3">
                Based on industry averages. Your actual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
