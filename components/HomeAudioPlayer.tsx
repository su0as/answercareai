'use client'

import { useState } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }

const recordings = [
  {
    label: 'Emergency lockout — 11:47 PM',
    duration: '1:12',
    desc: 'Caller stranded in parking lot. AI collects address, confirms same-night service, texts confirmation.',
  },
  {
    label: 'Garage door off track — Saturday morning',
    duration: '0:58',
    desc: 'Homeowner can\'t get car out. AI books next available slot and sends the address to the operator.',
  },
  {
    label: 'Pricing inquiry — caller on the fence',
    duration: '1:31',
    desc: 'AI gives ballpark from rate card, collects job details, books without requiring a callback.',
  },
]

export default function HomeAudioPlayer() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      {recordings.map((r, i) => (
        <div key={i} className="border-b border-[#D5CFC1] py-6 flex items-start gap-5 group">
          {/* Play button */}
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all mt-0.5"
            style={{
              borderColor: active === i ? '#B3392D' : '#D5CFC1',
              color: active === i ? '#F5F2EC' : '#B3392D',
              backgroundColor: active === i ? '#B3392D' : 'transparent',
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
                className="text-[15px] text-[#0E0E0E]"
                style={{ ...BODY, fontWeight: 500 }}
              >
                &ldquo;{r.label}&rdquo;
              </p>
              <span
                className="text-[12px] text-[#4A4641] ml-4 flex-shrink-0"
                style={MONO}
              >
                {r.duration}
              </span>
            </div>

            {/* Timeline bar */}
            <div className="h-px bg-[#D5CFC1] mb-3 relative overflow-hidden">
              {active === i && (
                <div
                  className="absolute left-0 top-0 h-full bg-[#B3392D]"
                  style={{
                    width: '38%',
                    animation: 'progressPulse 3s ease-in-out infinite',
                  }}
                />
              )}
            </div>

            {active === i ? (
              <p className="text-[13px] text-[#4A4641]" style={BODY}>
                → Call{' '}
                <a
                  href="tel:+18005551234"
                  className="underline underline-offset-2 hover:text-[#0E0E0E] transition-colors"
                  style={{ ...MONO, color: '#B3392D', fontSize: '12px' }}
                >
                  +1 (800) 555-1234
                </a>{' '}
                to hear it live — you&apos;ll speak with the same agent.
              </p>
            ) : (
              <p className="text-[13px] text-[#4A4641]" style={BODY}>
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
