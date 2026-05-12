'use client'

import { useState } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }

const recordings = [
  {
    label: 'Emergency lockout — 11:47 PM',
    duration: '1:12',
    desc: 'Caller stranded in parking lot. Collects address, confirms same-night service, texts confirmation.',
  },
  {
    label: 'Garage door off track — Saturday morning',
    duration: '0:58',
    desc: 'Homeowner can\'t get car out. Books next available slot and sends the address to the operator.',
  },
  {
    label: 'Pricing inquiry — caller on the fence',
    duration: '1:31',
    desc: 'Gives ballpark from rate card, collects job details, books without requiring a callback.',
  },
]

export default function HomeAudioPlayer() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      {recordings.map((r, i) => (
        <div key={i} className="border-b border-[#e8e8ed] py-6 flex items-start gap-5 group">
          {/* Play button */}
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all mt-0.5"
            style={{
              borderColor: active === i ? '#0071e3' : '#e8e8ed',
              color: active === i ? '#ffffff' : '#0071e3',
              backgroundColor: active === i ? '#0071e3' : 'transparent',
            }}
            aria-label={active === i ? `Pause ${r.label}` : `Play ${r.label}`}
          >
            {active === i ? (
              <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
                <rect x="0" y="0" width="2.5" height="10" rx="0.5" />
                <rect x="5.5" y="0" width="2.5" height="10" rx="0.5" />
              </svg>
            ) : (
              <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" className="ml-0.5">
                <path d="M0 0L8 5L0 10V0Z" />
              </svg>
            )}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <p
                className="text-[15px] text-[#1d1d1f]"
                style={{ ...BODY, fontWeight: 500 }}
              >
                &ldquo;{r.label}&rdquo;
              </p>
              <span
                className="text-[12px] text-[#707070] ml-4 flex-shrink-0"
                style={MONO}
              >
                {r.duration}
              </span>
            </div>

            {/* Timeline bar */}
            <div className="h-px bg-[#e8e8ed] mb-3 relative overflow-hidden">
              {active === i && (
                <div
                  className="absolute left-0 top-0 h-full bg-[#0071e3]"
                  style={{
                    width: '38%',
                    animation: 'progressPulse 3s ease-in-out infinite',
                  }}
                />
              )}
            </div>

            {active === i ? (
              <p className="text-[13px] text-[#707070]" style={BODY}>
                → Call{' '}
                <a
                  href="tel:+17542276342"
                  className="underline underline-offset-2 hover:text-[#1d1d1f] transition-colors"
                  style={{ ...MONO, color: '#0071e3', fontSize: '12px' }}
                >
                  +1 (754) 227-6342
                </a>{' '}
                to hear it live — you&apos;ll speak with the same agent.
              </p>
            ) : (
              <p className="text-[13px] text-[#707070]" style={BODY}>
                {r.desc}
              </p>
            )}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes progressPulse {
          0%, 100% { width: 32%; }
          50% { width: 42%; }
        }
      `}</style>
    </div>
  )
}
