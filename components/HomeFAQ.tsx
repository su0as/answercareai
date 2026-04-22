'use client'

import { useState } from 'react'

const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }

const faqs = [
  {
    q: 'Will my callers know it\'s AI?',
    a: 'If they ask directly, yes — we don\'t deceive. Listen to the demo recordings on this page. Most callers don\'t ask because the call feels natural and their problem gets handled.',
  },
  {
    q: 'What happens if the AI can\'t handle a call?',
    a: 'It takes a detailed message and SMS-notifies you immediately so you can call back within minutes. You can also set it to forward specific call types — emergencies, specific keywords — directly to your phone.',
  },
  {
    q: 'What if my business has unique requirements?',
    a: 'Every setup includes a 30-minute discovery call where we map your trade, service area, rates, scheduling rules, and edge cases. Your script is custom — not a generic template.',
  },
  {
    q: 'What if I don\'t hit 20 jobs in the first 30 days?',
    a: 'Your first month is free. You paid $497 setup — we deliver the service regardless. You can continue at $199/month, try us another 30 days, or walk away. No clawback, no argument.',
  },
  {
    q: 'What does it integrate with?',
    a: 'Google Calendar, Jobber, Housecall Pro, and ServiceM8 natively. Via Zapier for everything else. Tell us what you use during onboarding and we configure it.',
  },
  {
    q: 'Is my data secure?',
    a: 'All calls run on US phone infrastructure (Twilio). Data encrypted in transit and at rest. Call recordings are not shared with anyone but you. You can delete any call log on request.',
  },
  {
    q: 'Can I listen to my calls?',
    a: 'Yes. Every call is logged with full recording and transcript. You access them through a simple dashboard or they can be SMS\'d to you after each call.',
  },
  {
    q: 'How is this different from an answering service?',
    a: 'Answering services charge $250–$600/month for limited hours and pass messages through humans. AnswerCare is 24/7, answers in under 2 seconds, books directly into your calendar, and costs less than half.',
  },
  {
    q: 'What happens to my existing phone number?',
    a: 'We forward it. Your number stays yours. If you cancel, forwarding stops within 24 hours and your phone works exactly as before. No porting, no SIM changes, no risk.',
  },
  {
    q: 'Who answers if I want to talk to a human at AnswerCare?',
    a: 'We\'re a small team. Email hello@answercareai.com — replies within 4 hours during US business hours. Every customer gets direct access to the founder for setup calls and escalations.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
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
                <p className="mt-4 text-[15px] text-[#4A4641] leading-[1.65]" style={BODY}>
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
