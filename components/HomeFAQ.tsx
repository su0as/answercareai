'use client'

import { useState } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }

const faqs = [
  {
    q: 'Will my callers know it\'s AI?',
    a: 'Yes, if they ask directly. We don\'t deceive. But in 90% of trade calls — especially emergency situations — the caller just wants help and a booking. Call the demo line yourself (+1 800 555-1234) and ask it directly. It handles the question cleanly.',
  },
  {
    q: 'What if the AI can\'t handle a call?',
    a: 'It collects job details and texts you immediately with full caller information. You call back from the job site when you have 2 minutes. No dropped balls — you always get the information even if you can\'t answer in real time.',
  },
  {
    q: 'How is this different from a virtual receptionist service?',
    a: 'A virtual receptionist service is humans in a call center. They cost $300-$1,500/month, work 9-to-5, and can only handle one call at a time. Our AI answers in under 2 seconds, works 24/7, handles simultaneous calls, and costs $199/month. The difference in speed and availability is the point.',
  },
  {
    q: 'What scheduling tools does it integrate with?',
    a: 'Google Calendar, Jobber, Housecall Pro, and ServiceM8 natively. Outlook and Zapier for everything else. Tell us what you use during onboarding and we configure it.',
  },
  {
    q: 'Is my data secure?',
    a: 'Call recordings and caller information are encrypted in transit (TLS) and at rest (AES-256). We use US-based Twilio phone infrastructure. Recordings are deleted after 90 days by default. We don\'t sell your data.',
  },
  {
    q: 'Can I try before committing to the full setup?',
    a: 'Yes — call the demo line (+1 800 555-1234) right now and interact with the live agent. That\'s the actual AI that will answer your calls. If it impresses you, book a 15-minute setup call. If not, you\'ve lost nothing.',
  },
  {
    q: 'What if you don\'t hit the guarantee?',
    a: 'You pay nothing for that month. We Zelle you $500 within 48 hours. No argument, no support ticket, no escalation process. We show you the booking log on day 31 — you count. If it\'s below 20, the $500 arrives.',
  },
  {
    q: 'What happens to my existing phone number?',
    a: 'We forward it. Your number stays on your current carrier. If you cancel, forwarding stops within 24 hours and your phone works exactly as before. No porting, no SIM changes, no risk.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {/* First divider */}
      <div className="border-t border-[#D5CFC1]" />

      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#D5CFC1]">
          <button
            className="w-full flex items-start gap-5 py-6 sm:py-7 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span
              className="text-[11px] text-[#B3392D] flex-shrink-0 mt-1 tracking-[0.08em]"
              style={MONO}
            >
              Q/{String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className="text-[16px] sm:text-[17px] text-[#0E0E0E] group-hover:text-[#4A4641] transition-colors"
                style={{ ...BODY, fontWeight: 500 }}
              >
                {faq.q}
              </p>
              {open === i && (
                <p
                  className="mt-4 text-[15px] text-[#4A4641] leading-[1.65]"
                  style={BODY}
                >
                  {faq.a}
                </p>
              )}
            </div>
            <span
              className="text-[#4A4641] text-[18px] flex-shrink-0 mt-0.5 w-5 text-right leading-none"
              aria-hidden="true"
            >
              {open === i ? '−' : '+'}
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}
