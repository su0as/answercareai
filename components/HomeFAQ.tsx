'use client'

import { useState } from 'react'

const items = [
  {
    q: "Will customers know it's an AI?",
    a: "Most don't — and you can choose either way. Default voice is warm, conversational, and identifies as 'a service from [your business].' If you'd rather it disclose, we have a one-line script for that too. We'll show you both before you go live.",
  },
  {
    q: "What happens with truly weird calls?",
    a: "If a call falls outside your script — irate customer, vendor dispute, a question we genuinely can't answer — AnswerCare immediately texts you a live transcript and books a callback in your calendar. For true emergencies (gas leak, flooding, dangerous situation), it can be configured to ring your personal cell directly, skipping the queue entirely. Nothing gets dropped, nothing gets made up.",
  },
  {
    q: "I've managed 20 years without this — why change now?",
    a: "Because the technology only became good enough in the last 12 months. Every year before that, AI voice was robotic, full of awkward pauses, and lost customers the moment they heard it. That's no longer true. The same AI powering tools like ChatGPT now handles nuanced trade calls — emergency lockouts, pricing questions, scheduling changes — without sounding like a phone tree. The operators moving first are capturing calls their competitors still send to voicemail.",
  },
  {
    q: "Do I have to port my number?",
    a: "No. We give you a forwarding number and you set conditional forwarding on your existing line — answers when you don't, after 1 ring or 4 rings (you pick). Your number stays yours. Cancel and forwarding is off in 5 minutes.",
  },
  {
    q: "How does the 14 days free actually work?",
    a: "You pay $497 for setup today — that covers discovery, script writing, voice tuning, and integration work. That fee is non-refundable. What's free is the first 14 days of live service: no $199/mo charge until day 15. If AnswerCare doesn't make sense by day 14, email us and we shut it down. You walk away having paid only for the setup. No retention call.",
  },
  {
    q: "What if I already have a CRM or dispatch tool?",
    a: "We integrate with Google Calendar, Housecall Pro, Jobber, ServiceM8, and any iCal-compatible tool. New jobs land where you already work. SMS, email, calendar — you pick.",
  },
  {
    q: "Can it handle Spanish?",
    a: "Yes. English + Spanish out of the box, with caller-language detection. Other languages on request.",
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: '100%', textAlign: 'left',
              background: 'transparent', border: 'none',
              padding: '24px 28px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
              fontSize: 18, fontWeight: 500, color: 'var(--ink)',
              cursor: 'pointer',
            }}
          >
            <span>{it.q}</span>
            <span style={{
              width: 28, height: 28, borderRadius: '50%',
              background: open === i ? 'var(--ink)' : 'transparent',
              color: open === i ? 'var(--bg)' : 'var(--ink)',
              border: open === i ? 'none' : '1px solid var(--line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, lineHeight: 1, transition: 'all .15s ease',
              flex: '0 0 auto',
            }}>
              {open === i ? '–' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{
              padding: '0 28px 28px',
              color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, maxWidth: 720,
            }}>
              {it.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
