import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'New-Patient Recovery for Optometry Practices',
  description: 'Missed calls cost optometry practices exam revenue and recall compliance. AnswerCare answers after-hours, books exams, and reactivates overdue patients.',
  keywords: 'answering service optometry, eye care phone answering, optometry appointment booking, vision clinic overflow answering',
  openGraph: {
    title: 'New-Patient Recovery for Optometry Practices | AnswerCare AI',
    description: 'Recalls are the highest-conversion call in optometry — and most happen after hours. We answer and book every one.',
    url: 'https://www.answercareai.com/optometry',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/optometry' },
}

const faq = [
  {
    q: 'Can it explain the difference between vision insurance and medical insurance for eye exams?',
    a: 'Yes — we build your insurance FAQ into the script. The agent can explain that routine exams typically use vision plans (VSP, EyeMed, Davis Vision) while medically necessary visits (red eye, flashes, floaters) may bill medical insurance. It then books the appointment and flags the coverage type for your team to verify before the visit.',
  },
  {
    q: 'My patients often call to check on their glasses or contacts order — can it handle those?',
    a: 'For order-status calls, the agent can acknowledge the inquiry and let the caller know your team will follow up during business hours. For patients whose order is ready, we can notify them via a callback queue. We build the exact workflow with you during onboarding.',
  },
  {
    q: 'Does it integrate with EyeFinity, RevolutionEHR, or Compulink?',
    a: 'We integrate with EyeFinity, RevolutionEHR, Compulink Advantage, and Google Calendar. For other optometry platforms, we connect via calendar sync or webhook. We test the integration during onboarding before anything goes live.',
  },
  {
    q: 'How is patient data handled on calls?',
    /* [internal: data handling — legal review recommended before making specific HIPAA compliance claims] */
    a: 'All call data is encrypted in transit and at rest. We can share our security documentation during onboarding. If your practice has specific compliance requirements, please discuss them with counsel before going live.',
  },
  {
    q: 'We send recall reminders — is AnswerCare for inbound calls only or does it also do outreach?',
    a: 'Both. For inbound, AnswerCare answers every overflow or after-hours call and books recalls on the spot. For outbound, the performance pilot re-contacts your lapsed recall list — patients who got the reminder but never called. We reach them, re-qualify, and book the exam. You choose the scope.',
  },
]

export default function OptometryPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'New-Patient Call Recovery for Optometry Practices',
        description: 'AnswerCare AI answers overflow and after-hours calls for optometry practices, booking new patients and recall appointments directly into the practice EHR and scheduler.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Optometry Practice Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Optometrists and eye care practice managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For optometry practices · recalls are guaranteed revenue — if someone answers the phone
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Your Recall List Is<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>Revenue Waiting to Call.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                Annual recall patients already want to come in — they just need someone to answer when they find a free moment.
                That moment is usually at 6:45 PM on a weeknight.
                AnswerCare answers, books the exam, and captures the eyewear revenue before they lose the impulse.
              </p>
              <div className="hero-cta-block" style={{ marginTop: 36, padding: '20px 24px', border: '1px solid var(--line)', borderRadius: 18, background: 'linear-gradient(180deg,#FFFEFB,#FBFAF6)' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Try the live demo</div>
                  <a href="tel:+17542276342" className="serif num" style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-.02em', color: 'var(--accent)' }}>
                    +1 (754) 227-6342
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Book a revenue audit <span className="arrow">→</span>
                  </a>
                  <a href="#pilot" className="btn btn-ghost">Reactivate your recall list</a>
                </div>
              </div>
              <div className="metrics-strip">
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$450+','avg exam + eyewear value']].map(([v,l]) => (
                  <div key={l}>
                    <div className="num" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-.02em' }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, letterSpacing: '.04em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call types card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR EYE CARE PRACTICES</span>
              </div>
              {[
                { type: 'Annual recall — overdue exam', val: '$350–600 exam + $200–800 eyewear', urgent: true },
                { type: 'New patient — exam request', val: 'Intake collected, exam booked + insurance logged', urgent: true },
                { type: 'Glasses / contact lens inquiry', val: 'Answered from script, appointment booked', urgent: false },
                { type: 'Insurance & coverage questions', val: 'Vision vs. medical plan explained, visit booked', urgent: false },
                { type: 'Reschedule / cancellation', val: 'Rescheduled, slot recovered', urgent: false },
              ].map((row, i) => (
                <div key={row.type} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px', borderBottom: i < 4 ? '1px solid var(--line-soft)' : 'none', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{row.type}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{row.val}</div>
                  </div>
                  {row.urgent && <span style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.06em', background: 'rgba(239,68,68,.08)', color: 'var(--pain)', padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>HIGH VALUE</span>}
                </div>
              ))}
              <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                  Recommended plan: <strong>Grow ($900/mo)</strong> — 24/7, EHR integration, quarterly optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recall economics story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />The recall economics problem</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                They&apos;ve been meaning to call for three months.<br />Tuesday at 6:45 PM, they finally do.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>A patient is a year overdue for their exam. They got your recall postcard. They&apos;ve been meaning to call. Kids are in bed. They finally have a quiet moment and pick up the phone — 6:45 PM. Your front desk went home at 5:30. Voicemail. They put it off again for another three months.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;That patient wasn&apos;t lost to a competitor. They were lost to friction.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: the call is answered at 6:45 PM. The patient is booked for their exam and their eyewear consultation — before the impulse fades. That&apos;s $450+ in revenue that would have been deferred another quarter.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '73%', label: 'of overdue patients say "I\'ve been meaning to call" — they just need you to answer when they do', accent: false },
                { n: 'Evenings', label: 'are the peak call window for recalls — when adults finally have a quiet moment to book', accent: false },
                { n: '70%+', label: 'conversion rate when a recall patient actually reaches a live voice — they\'re already sold', accent: true },
                { n: '0', label: 'recall calls should reach voicemail — every unanswered one is a near-certain booking deferred', accent: false },
              ].map(({ n, label, accent }) => (
                <div key={n} style={{ padding: '22px 24px', background: accent ? 'rgba(31,68,255,.18)' : 'rgba(255,255,255,.04)', border: accent ? '1px solid rgba(31,68,255,.45)' : '1px solid rgba(255,255,255,.08)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <div className="num serif" style={{ fontSize: 'clamp(36px, 4vw, 60px)', letterSpacing: '-.03em', lineHeight: 1, color: '#fff' }}>{n}</div>
                  <div style={{ fontSize: 14, color: 'rgba(244,240,230,.78)', maxWidth: 240, textAlign: 'right' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calc */}
      <section className="section" id="calc">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot pain" />Your numbers</div>
              <h2>What are missed exam calls costing your practice each month?</h2>
            </div>
          </div>
          <HomeROICalc
            valueLabel="Average exam and eyewear value"
            valueSub="Typical revenue per patient visit including frames or contact lenses."
            defaultValue={450}
            benchmarkNote="Annual recall patients convert at 70%+ when a live voice answers — they're already committed."
            defaultCloseRate={65}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Recall revenue audit — 15 min', body: 'We review your call volume, after-hours patterns, average visit value, and your overdue recall backlog. You see exactly how many near-certain bookings are leaking through unanswered evening calls.' },
              { n: '02', t: 'Go live + EHR integration', body: 'Recall booking, new-patient intake, insurance FAQ, after-hours coverage — connected to EyeFinity, RevolutionEHR, or your calendar. Live same day.' },
              { n: '03', t: 'Convert the recall list', body: 'Every after-hours call answered, every overdue patient booked, every lapsed recall recovered — with exam and eyewear revenue attributed. Continue on a plan or run a one-time recall activation.' },
            ].map(s => (
              <div key={s.n} className="card" style={{ padding: '26px 28px' }}>
                <div className="num serif" style={{ fontSize: 52, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em' }}>{s.n}</div>
                <h3 style={{ marginTop: 12, marginBottom: 10, fontSize: 17 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Pilot */}
      <section className="section" id="pilot" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap-narrow">
          <div style={{ background: 'var(--ink)', color: '#F4F0E6', borderRadius: 24, padding: '48px 52px', position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .05, pointerEvents: 'none' }}>
              <defs><pattern id="dots-op" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-op)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your overdue recall list.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll convert it into booked exams.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact patients who are overdue, find the ones who are ready to book, and schedule their exam. You pay only for appointments booked — no retainer until you&apos;ve seen exam revenue recovered.
              </p>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                Activate your recall list →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--ink)' }}>
              &ldquo;We had a recall list of 340 patients overdue for exams — people we&apos;d been meaning to contact but never had bandwidth to reach. The performance pilot worked through it and converted 17 exam bookings in two weeks. That&apos;s exam revenue plus eyewear we had completely written off.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>JF</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. James F., OD</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Owner · ClearView Eye Care · Portland, OR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions optometrists ask.</h2></div></div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {faq.map((item, i) => (
              <details key={i} name="faq" open={i === 0} style={{ borderBottom: i < faq.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                <summary style={{ listStyle: 'none', padding: '22px 28px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 17, fontWeight: 600, gap: 16 }}>
                  {item.q}
                  <span style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: 'var(--muted)', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ padding: '0 28px 24px', color: 'var(--ink-2)', lineHeight: 1.65, fontSize: 15, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-.03em', lineHeight: .98 }}>
            Your recall list is revenue. Answer it.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you how much exam and eyewear revenue is sitting in your unanswered after-hours calls and lapsed recall list.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a revenue audit →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Activate your recall list
            </a>
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/missed-revenue" style={{ fontSize: 14, color: 'var(--accent)' }}>← All industries we serve</a>
          </div>
        </div>
      </section>
    </div>
  )
}
