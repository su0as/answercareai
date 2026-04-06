'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ImpactMetric } from '@/data/verticals'

// ─── Chart data ────────────────────────────────────────────────────────────────
// Y values are normalised to an arbitrary scale (baseline 100)
const CURRENT_PATH  = [100, 99, 97, 95, 93, 90]   // slight decline
const WITH_AC_PATH  = [100, 115, 130, 143, 153, 160] // growth with AC

const MONTHS = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6']

// SVG layout constants
const W = 500
const H = 200
const PAD_X = 12
const PAD_Y = 20
const CHART_W = W - PAD_X * 2
const CHART_H = H - PAD_Y * 2
const Y_MIN = 82
const Y_MAX = 168

function toSVG(values: number[]): string {
  return values
    .map((v, i) => {
      const x = PAD_X + (i / (values.length - 1)) * CHART_W
      const y = PAD_Y + CHART_H - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * CHART_H
      return `${x},${y}`
    })
    .join(' ')
}

function toAreaPath(values: number[], bottomY: number): string {
  const pts = values.map((v, i) => {
    const x = PAD_X + (i / (values.length - 1)) * CHART_W
    const y = PAD_Y + CHART_H - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * CHART_H
    return `${x},${y}`
  })
  return `M ${pts[0]} L ${pts.join(' L ')} L ${PAD_X + CHART_W},${bottomY} L ${PAD_X},${bottomY} Z`
}

const BOTTOM_Y = PAD_Y + CHART_H

// ─── Component ────────────────────────────────────────────────────────────────

interface ImpactChartProps {
  metrics: ImpactMetric[]
  accentColor?: string
  accentTextClass?: string
}

export default function ImpactChart({
  metrics,
  accentColor = '#2E6EB5',
  accentTextClass = 'text-accent-dental',
}: ImpactChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const currentPoints  = toSVG(CURRENT_PATH)
  const withAcPoints   = toSVG(WITH_AC_PATH)
  const areaPath       = toAreaPath(WITH_AC_PATH, BOTTOM_Y)

  return (
    <div ref={ref} className="mt-10">
      {/* Chart */}
      <div className="relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          role="img"
          aria-label="Revenue trajectory comparison chart"
        >
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((t) => (
            <line
              key={t}
              x1={PAD_X} x2={PAD_X + CHART_W}
              y1={PAD_Y + CHART_H * (1 - t)}
              y2={PAD_Y + CHART_H * (1 - t)}
              stroke="rgba(255,255,255,0.06)" strokeWidth="1"
            />
          ))}

          {/* Filled area — With AnswerCare */}
          <motion.path
            d={areaPath}
            fill={accentColor}
            fillOpacity="0.12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          />

          {/* Line — Current path (dashed, muted) */}
          <motion.polyline
            points={currentPoints}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          />

          {/* Line — With AnswerCare (solid, accent) */}
          <motion.polyline
            points={withAcPoints}
            fill="none"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
          />

          {/* Gap label */}
          <motion.text
            x={PAD_X + CHART_W * 0.85}
            y={PAD_Y + CHART_H * 0.25}
            textAnchor="middle"
            fill={accentColor}
            fontSize="9"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
          >
            Revenue gap
          </motion.text>

          {/* Month labels */}
          {MONTHS.map((m, i) => (
            <text
              key={m}
              x={PAD_X + (i / (MONTHS.length - 1)) * CHART_W}
              y={H - 2}
              textAnchor="middle"
              fill="rgba(255,255,255,0.2)"
              fontSize="8"
              fontFamily="monospace"
            >
              {m}
            </text>
          ))}
        </svg>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-2 px-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 bg-white/25" style={{ borderTop: '2px dashed rgba(255,255,255,0.25)' }} />
            <span className="text-xs text-white/40">Current path</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <span className="text-xs text-white/40">With AnswerCare</span>
          </div>
        </div>
      </div>

      {/* Impact metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6 + i * 0.1, duration: 0.4 }}
          >
            <p className="text-xs text-white/40 mb-2">{m.label}</p>
            <div className="flex items-center gap-1.5">
              <span className="text-white/40 text-xs line-through font-mono-accent">{m.before}</span>
              <span className="text-white/20 text-xs">→</span>
              <span className={`text-sm font-mono-accent font-bold ${m.direction === 'up' ? 'text-green-400' : 'text-green-400'}`}>
                {m.after}
              </span>
            </div>
            <span className="text-xs mt-1 block">
              {m.direction === 'up'
                ? <span className="text-green-400">↑</span>
                : <span className="text-green-400">↓</span>}
              {' '}
              <span className="text-white/30">{m.direction === 'down' ? 'reduced' : 'improved'}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
