'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from './SectionTag'

interface Layer {
  name: string
  price: number
  tagline: string
  revenueTag: string
}

const BASE_LAYERS: Layer[] = [
  { name: 'AI Receptionist (Growth)', price: 349,  tagline: 'Never miss a call — 24/7 coverage.',           revenueTag: '+$8,400/mo avg recovered' },
  { name: 'Google Maps Domination',   price: 149,  tagline: '+40% more inbound calls from local search.',    revenueTag: '+$3,200/mo new leads' },
  { name: 'Reputation Engine',        price: 99,   tagline: '+65% more reviews, 4.5 → 4.8 star average.',   revenueTag: '+$2,100/mo lift' },
  { name: 'Reactivation Campaigns',   price: 129,  tagline: 'Re-engage 200+ dormant clients per quarter.',   revenueTag: '+$4,800/mo reactivated' },
  { name: 'Meta & Google Ads',        price: 249,  tagline: '3–5× return on ad spend with AI-qualified leads.', revenueTag: '+$6,500/mo pipeline' },
]

const CUMULATIVE_REVENUE = [8400, 11600, 13700, 18500, 25000]

function fmtK(n: number) {
  return `$${(n / 1000).toFixed(0)}k`
}

interface ValueStackProps {
  accentTextClass?: string
  accentColor?: string
  accentBgClass?: string
}

export default function ValueStack({
  accentTextClass = 'text-accent-dental',
  accentColor = '#2E6EB5',
  accentBgClass = 'bg-accent-dental',
}: ValueStackProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const totalCost = BASE_LAYERS.reduce((s, l) => s + l.price, 0)

  return (
    <section className="section-padding bg-bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4 border-white/20 text-white/50">Service Stack</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-bg-primary mt-4">
            Each service compounds the last.
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Start with the AI receptionist. Add growth engines as you scale.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Stack layers */}
          <div className="lg:col-span-2 space-y-3">
            {BASE_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.4, ease: 'easeOut' }}
                className={`border rounded-xl p-4 flex items-center gap-4 ${
                  i === 0
                    ? 'border-white/30 bg-white/8'
                    : 'border-white/10 bg-white/4'
                }`}
              >
                {/* Layer number */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono-accent font-bold flex-shrink-0"
                  style={{ backgroundColor: i === 0 ? accentColor : 'rgba(255,255,255,0.08)', color: i === 0 ? '#fff' : 'rgba(255,255,255,0.4)' }}
                >
                  {i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {i > 0 && (
                      <span className="text-white/30 text-xs font-mono-accent">+</span>
                    )}
                    <span className="text-sm font-medium text-white">{layer.name}</span>
                    <span className={`text-xs font-mono-accent ${accentTextClass} ml-auto`}>
                      ${layer.price}/mo
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-0.5">{layer.tagline}</p>
                </div>

                {/* Revenue badge */}
                <div className="text-xs font-mono-accent text-green-400 bg-green-950/40 border border-green-900/40 px-2 py-1 rounded-lg flex-shrink-0 hidden sm:block">
                  {layer.revenueTag}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Running total */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-xs font-mono-accent tracking-widest uppercase text-white/30 mb-6">
              Full stack value
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sm text-white/50">Total investment</span>
                <span className="font-mono-accent text-white font-bold">${totalCost}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/50">Est. additional revenue</span>
                <span className="font-mono-accent text-green-400 font-bold">
                  {fmtK(CUMULATIVE_REVENUE[CUMULATIVE_REVENUE.length - 1])}/mo
                </span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-white/70 font-medium">Stack ROI</span>
                <span className={`font-mono-accent text-2xl font-bold ${accentTextClass}`}>
                  {Math.round(CUMULATIVE_REVENUE[CUMULATIVE_REVENUE.length - 1] / totalCost)}:1
                </span>
              </div>
            </div>

            {/* Progress bars showing cumulative revenue */}
            <div className="space-y-2">
              {CUMULATIVE_REVENUE.map((rev, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-white/20 w-4">{i + 1}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-green-500/60"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(rev / CUMULATIVE_REVENUE[CUMULATIVE_REVENUE.length - 1]) * 100}%` } : {}}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                    />
                  </div>
                  <span className="text-xs font-mono-accent text-green-400/60 w-12 text-right">
                    {fmtK(rev)}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/20 mt-5 leading-relaxed">
              Revenue estimates based on industry averages. Individual results vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
