'use client'

import { useState } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }

const faqs = [
  {
    q: 'Will my callers know it\'s AI?',
    a: 'If they ask, yes — we don\'t deceive. Most callers don\'t ask because the call feels natural and their problem gets solved. You can also configure a disclosure prompt at the start of every call if required in your state. Listen to the demo recordings above to hear exactly how it sounds.',
  },
  {
    q: 'What happens if the AI can\'t handle a call?',
    a: 'It takes a detailed message and sends you an SMS immediately so you can call back within minutes. You can also configure it to forward specific call types — emergencies, specific keywords, after-hours escalations — directly to your cell.',
  },
  {
    q: 'Can I keep my existing phone number?',
    a: 'Yes. We forward your existing number to a Twilio line we provision for your account. Your number stays yours. If you cancel, call forwarding stops within 24 hours and your phone works exactly as before. No porting, no SIM changes, no risk.',
  },
  {
    q: 'Does it work after hours?',
    a: '24/7/365 — nights, weekends, holidays, while you\'re on a job, while you\'re sleeping. Every call is answered in under 2 seconds regardless of when it comes in. This is specifically why trade operators use it: most emergency calls come outside business hours.',
  },
  {
    q: 'Can it book into Jobber or Housecall Pro?',
    a: 'Yes. We integrate directly with Google Calendar, Jobber, Housecall Pro, and ServiceM8. Bookings land in your schedule automatically — no manual entry. We configure the integration during your setup call.',
  },
  {
    q: 'What if I already use a receptionist or answering service?',
    a: 'AnswerCare costs less than half of a human answering service ($199/month vs $250–600/month) and answers in under 2 seconds vs the typical 4–8 ring wait. If you want to run both during the 14-day live period to compare, you can. Most clients who do that cancel the answering service within the first week.',
  },
  {
    q: 'What happens during the 14 free days?',
    a: 'Everything is live. Your line is forwarded, calls are answered, bookings land in your calendar, and you receive SMS notifications in real time. You\'re using the full product with real callers — not a limited demo. Monthly billing starts on day 15 only if you decide to continue.',
  },
  {
    q: 'What does the $497 setup include?',
    a: 'A 30-minute discovery call where we learn your trade, service area, rates, and call-handling preferences. We write your custom call script. You review and approve it. We configure forwarding, calendar integration, and SMS notifications. We run test calls before go-live. Everything needed to put you live within 5 days.',
  },
  {
    q: 'Is my data secure?',
    a: 'All calls run on US phone infrastructure (Twilio). Data is encrypted in transit and at rest. Call recordings are not shared with anyone but you. You can delete any call log on request. See our Privacy Policy for full details.',
  },
  {
    q: 'How is this different from an answering service?',
    a: 'Answering services charge $250–600/month for limited hours and pass messages through humans who don\'t know your business. AnswerCare answers in under 2 seconds, books directly into your calendar, sends you an SMS on every booking, and runs 24/7 at $199/month after a 14-day live trial.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <div className="border-t border-[#e8e8ed]" />
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#e8e8ed]">
          <button
            className="w-full flex items-start gap-5 py-6 sm:py-7 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span
              className="text-[11px] text-[#707070]/50 flex-shrink-0 mt-1 tracking-[0.08em]"
              style={MONO}
            >
              Q/{String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className="text-[16px] sm:text-[17px] text-[#1d1d1f] group-hover:text-[#707070] transition-colors"
                style={{ ...BODY, fontWeight: 500 }}
              >
                {faq.q}
              </p>
              {open === i && (
                <p className="mt-4 text-[15px] text-[#707070] leading-[1.65]" style={BODY}>
                  {faq.a}
                </p>
              )}
            </div>
            <span
              className="text-[#707070] text-[18px] flex-shrink-0 mt-0.5 w-5 text-right leading-none"
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
