'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Will my callers know it\'s AI?',
    a: 'Yes, if they ask directly. We don\'t deceive. But in 90% of trade calls — especially emergency situations — the caller just wants to be helped quickly and booked. Call the demo line yourself and ask it directly. It handles the question cleanly.',
  },
  {
    q: 'What if the caller wants a quote on the spot?',
    a: 'The AI collects full job details — location, issue description, urgency, access requirements — and either gives a rough ballpark from your rate card (which you set during onboarding), or books a callback for you to quote within the hour. You decide which approach during script setup.',
  },
  {
    q: 'Can it handle emergency calls differently from regular bookings?',
    a: 'Yes. You flag job types as "emergency" in your script setup. Emergency calls trigger an immediate SMS to your number with full caller details — even if you\'re mid-job — so you can decide to respond within minutes.',
  },
  {
    q: 'What if you don\'t hit the guarantee?',
    a: 'You pay nothing for that month. We Zelle you $500 within 48 hours. No argument, no lawyer, no support ticket. We track the bookings from day 1 and show you the log on day 31.',
  },
  {
    q: 'How long does setup take?',
    a: '5–7 business days from when you approve your custom call script. The script review takes 15 minutes of your time. We handle everything else — call forwarding, integration, testing. You\'re live before the end of your first week.',
  },
  {
    q: 'What scheduling tools does it work with?',
    a: 'Google Calendar, Jobber, Housecall Pro, and ServiceM8 natively. Outlook and Zapier for everything else. Tell us what you use during onboarding and we\'ll configure it.',
  },
  {
    q: 'What happens to my existing phone number?',
    a: 'We forward it. Your number stays yours, on your current carrier. If you cancel, forwarding stops within 24 hours and your phone works exactly as it did before. No porting, no risk.',
  },
  {
    q: 'What if the job needs an on-site assessment before I can book?',
    a: 'The AI collects all job details, notes it as "assessment needed," and schedules a callback or site visit depending on your preference. You get the full details via SMS so you can call back from the job site when you\'ve got 2 minutes.',
  },
]

export default function TradesFAQ() {
  const [open, setOpen] = useState<number[]>([0, 1])

  const toggle = (i: number) => {
    setOpen((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])
  }

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Real questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A]" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
            The things you&apos;re actually wondering.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F5F5] transition-colors"
                onClick={() => toggle(i)}
                aria-expanded={open.includes(i)}
              >
                <span className="font-semibold text-[#0A0A0A] pr-4 text-sm sm:text-base" style={{ fontFamily: '"Inter Tight", Inter, sans-serif' }}>
                  {faq.q}
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-[#525252] transition-transform duration-200"
                  style={{ transform: open.includes(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open.includes(i) && (
                <div className="px-5 pb-5 border-t border-[#E5E5E5]">
                  <p className="pt-4 text-sm text-[#525252] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
