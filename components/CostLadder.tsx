'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface CostLadderProps {
  accentColor?: string
  accentTextClass?: string
  accentBgClass?: string
}

const competitors = [
  { label: 'Full-time receptionist', cost: 3750, display: '$3,750/mo' },
  { label: 'Part-time receptionist', cost: 2200, display: '$2,200/mo' },
  { label: 'Virtual receptionist service', cost: 1150, display: '$800–1,500/mo' },
]

const MAX = 3750

export default function CostLadder({
  accentTextClass = 'text-accent-home',
  accentBgClass = 'bg-accent-home',
}: CostLadderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="mb-10">
      <div className="text-center mb-8">
        <p className="font-semibold text-text-primary text-lg">The math is simple.</p>
        <p className="text-text-secondary text-sm mt-1">Same job. Very different price.</p>
      </div>

      <div className="space-y-3 max-w-xl mx-auto">
        {competitors.map((c) => (
          <div key={c.label} className="flex items-center gap-4">
            <div className="w-44 text-right text-sm text-text-secondary flex-shrink-0 hidden sm:block">
              {c.label}
            </div>
            <div className="flex-1 flex items-center gap-3">
              <div
                className="h-8 rounded-md bg-border transition-all duration-700 ease-out flex items-center justify-end pr-3"
                style={{ width: inView ? `${(c.cost / MAX) * 100}%` : '0%' }}
              />
              <span className="text-sm font-mono-accent text-text-muted flex-shrink-0">
                {c.display}
              </span>
            </div>
          </div>
        ))}

        {/* AnswerCare row — highlighted */}
        <div className="flex items-center gap-4 pt-1">
          <div className="w-44 text-right text-sm font-semibold text-text-primary flex-shrink-0 hidden sm:block">
            AnswerCare AI (Growth)
          </div>
          <div className="flex-1 flex items-center gap-3">
            <div
              className={`h-8 rounded-md ${accentBgClass} transition-all duration-700 ease-out flex items-center justify-end pr-3 delay-300`}
              style={{ width: inView ? `${(349 / MAX) * 100}%` : '0%' }}
            />
            <span className={`text-sm font-mono-accent font-bold ${accentTextClass} flex-shrink-0`}>
              $349/mo
            </span>
          </div>
        </div>
      </div>

      {/* Mobile labels */}
      <div className="sm:hidden mt-4 space-y-1 text-xs text-text-muted text-center">
        {competitors.map((c) => (
          <div key={c.label}>{c.label}: {c.display}</div>
        ))}
        <div className={`font-semibold ${accentTextClass}`}>AnswerCare AI: $349/mo</div>
      </div>

      <p className="text-center text-sm text-text-secondary mt-6 max-w-md mx-auto">
        AnswerCare handles{' '}
        <span className="font-medium text-text-primary">unlimited simultaneous calls</span>.
        A human receptionist handles one.
      </p>
    </div>
  )
}
