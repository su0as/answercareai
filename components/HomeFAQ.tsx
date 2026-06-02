'use client'

import { useState } from 'react'

const items = [
  {
    q: "Will my callers know it's not my front desk?",
    a: "Most don't — and you can choose either way. The voice is warm, conversational, and introduces itself as a service from your business. If you prefer full disclosure, we have a one-line script for that too. We'll show you both options before you go live. The goal is for every caller to feel heard immediately — not to guess whether they're talking to a person.",
  },
  {
    q: "How does this work with my existing team — does it replace them?",
    a: "It handles overflow and after-hours — it never replaces your people. When your team is on another line, at lunch, or after hours, AnswerCare catches what would otherwise go to voicemail. Your front desk, office manager, or dispatcher stays in charge of the calendar and customer relationships. We just make sure nothing falls through when they can't get to the phone.",
  },
  {
    q: "We use [CRM / dispatch / PMS] — does it integrate?",
    a: "We integrate with Google Calendar, Outlook, Housecall Pro, Jobber, ServiceM8, and any iCal-compatible tool. For property management software (Buildium, AppFolio, Rent Manager), legal practice software, and dental/medical schedulers, we connect via calendar sync or direct API. We confirm your stack during the revenue audit before anything goes live.",
  },
  {
    q: "How do you recover our old leads?",
    a: "Give us your list — missed calls, old inquiries, dead leads from your CRM. We re-contact them on your behalf with a warm, scripted outreach, qualify the ones who are still in the market, and book the ready-to-buy ones onto your calendar. You see exactly which leads were contacted, which responded, and which booked — attributed and logged.",
  },
  {
    q: "How is the performance pilot priced?",
    a: "Performance pilots are priced as a share of recovered revenue or a flat per-booked-job fee — agreed upfront. No retainer. No monthly fee to start. If we don't book you measurable jobs, you don't pay for the pilot. Once we've proven the revenue, most pilots convert to a monthly plan within 30 days.",
  },
  {
    q: "Is customer / patient / tenant data handled securely?",
    a: "All call data is encrypted in transit and at rest. We do not sell or share caller data. For medical and dental practices, we maintain a privacy-forward posture and can discuss our compliance documentation — [LEGAL REVIEW NEEDED before making any specific HIPAA claims]. For legal and property management, data handling terms are reviewed during onboarding.",
  },
  {
    q: "Do I have to port my number?",
    a: "No. We give you a forwarding number and you set conditional forwarding on your existing line — forwards when your team doesn't answer after 1–4 rings (you pick). Your number stays yours. Cancel and forwarding is off in 5 minutes.",
  },
  {
    q: "What happens with calls that fall outside the script?",
    a: "If a call falls outside your configured script — a complex complaint, a vendor dispute, a question we genuinely can't answer — AnswerCare immediately texts your team a live transcript and books a callback. For true emergencies (gas leak, flooding, urgent safety situation), it can be configured to ring your team's on-call number directly, bypassing the queue entirely. Nothing gets dropped.",
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
