import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'New-Patient Recovery for Chiropractic Clinics',
  description: 'Missed calls mean missed care plans worth thousands. AnswerCare answers after-hours, books new patients, and recovers dormant chiropractic inquiries.',
  keywords: 'answering service chiropractic, chiropractic clinic phone answering, new patient booking chiropractic, chiro office overflow answering',
  openGraph: {
    title: 'New-Patient Recovery for Chiropractic Clinics | AnswerCare AI',
    description: 'Acute-pain patients book with the first clinic that answers. We answer 24/7 and capture every new patient.',
    url: 'https://www.answercareai.com/chiropractic',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/chiropractic' },
}

const faq = [
  {
    q: 'Can it handle callers who are in active pain and anxious on the phone?',
    a: 'Yes — we script for it specifically. The agent opens with empathy, acknowledges the caller\'s discomfort, and moves quickly to booking. It doesn\'t try to diagnose or give medical advice — it focuses on getting the patient seen as fast as possible, which is exactly what an anxious caller needs.',
  },
  {
    q: 'Will new patients know they\'re not speaking with the front desk?',
    a: 'Most won\'t — and you control the framing. The agent can introduce itself as your clinic\'s booking line. We show you the exact script before anything goes live and you approve every word.',
  },
  {
    q: 'Does it integrate with ChiroTouch, Jane App, or Genesis?',
    a: 'Yes — we integrate with ChiroTouch, Jane App, Genesis Chiropractic Software, and Google Calendar. For other platforms, we connect via calendar sync or webhook. We confirm your stack and test the connection during onboarding before going live.',
  },
  {
    q: 'Can it collect insurance information from new patients during intake?',
    a: 'Yes. The agent can collect insurance carrier, member ID, and group number from new patients and log everything for your team to verify before the first visit. It won\'t attempt to verify benefits — that stays with your staff — but it captures what they need to start the process.',
  },
  {
    q: 'How is patient data handled on calls?',
    /* [internal: data handling — legal review recommended before making specific HIPAA compliance claims] */
    a: 'All call data is encrypted in transit and at rest. We can share our security documentation during onboarding. If your practice has specific compliance requirements, please review them with counsel before going live.',
  },
]

export default function ChiropracticPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'New-Patient Call Recovery for Chiropractic Clinics',
        description: 'AnswerCare AI answers overflow and after-hours calls for chiropractic clinics, booking new patients directly into the practice EHR and scheduler.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Chiropractic Practice Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Chiropractic clinic owners and practice managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For chiropractic clinics · acute-pain patients book with the first clinic that picks up
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                The Urgency Window<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>Closes in Two Hours.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                Acute-pain patients don&apos;t research for days — they call down the list until someone answers.
                AnswerCare picks up in under 2 seconds, captures the new patient, and books the evaluation before the urgency fades.
                Every unanswered call is a care plan worth thousands going to the clinic that picked up.
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
                  <a href="#pilot" className="btn btn-ghost">Start a performance pilot</a>
                </div>
              </div>
              <div className="metrics-strip">
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$2,500+','avg care plan value']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR CHIRO CLINICS</span>
              </div>
              {[
                { type: 'New patient — acute pain or injury', val: '$2,500–8,000+ care-plan value', urgent: true },
                { type: 'After-hours urgent spine / back call', val: 'Triaged + earliest opening booked', urgent: true },
                { type: 'Insurance & coverage questions', val: 'Answered from script, intake logged', urgent: false },
                { type: 'Lapsed patient reactivation', val: 'Reengaged and rescheduled', urgent: false },
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

      {/* Urgency window story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />The urgency window</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s 7:15 PM Monday.<br />Someone just threw out their back.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>She Googled "chiropractor near me" and called the top result — your clinic. Four rings. Voicemail. She immediately calls the next name on the list. That clinic answers. The appointment is booked before she can even dial a third number.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;Acute-pain patients book with the first voice they hear. Not the best-reviewed clinic.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: your line picks up in under 2 seconds. The patient is greeted, her injury is noted, and she&apos;s booked into your earliest opening — before she even thinks about calling anyone else.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '~2hrs', label: 'typical window before an acute-pain patient commits to the first clinic that helped them', accent: false },
                { n: '80%', label: 'of acute-pain callers book with the first clinic that answers — urgency overrides comparison', accent: false },
                { n: '1st', label: 'clinic to pick up keeps the care plan — there is no second chance with an acute caller', accent: true },
                { n: '$5k+', label: 'average care-plan value lost every time an acute caller reaches your voicemail', accent: false },
              ].map(({ n, label, accent }) => (
                <div key={n} style={{ padding: '22px 24px', background: accent ? 'rgba(31,68,255,.18)' : 'rgba(255,255,255,.04)', border: accent ? '1px solid rgba(31,68,255,.45)' : '1px solid rgba(255,255,255,.08)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <div className="num serif" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', letterSpacing: '-.03em', lineHeight: 1, color: '#fff' }}>{n}</div>
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
              <h2>What are missed new-patient calls costing your clinic?</h2>
            </div>
          </div>
          <HomeROICalc
            valueLabel="Average care-plan value"
            valueSub="Typical revenue per new patient across a full treatment plan."
            defaultValue={2500}
            benchmarkNote="Acute-pain callers book same-day at 50–65% when a live voice answers first."
            defaultCloseRate={55}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Revenue audit — 15 min', body: 'We review your call volume, after-hours patterns, average care-plan value, and any unanswered inquiry backlog. You see exactly how many acute-pain patients your voicemail is handing to competitors.' },
              { n: '02', t: 'Go live + integrate', body: 'New-patient intake script tuned for urgency, insurance collection, earliest-opening booking — connected to ChiroTouch, Jane, or your calendar. Live same day.' },
              { n: '03', t: 'Capture every urgency window', body: 'Every acute-pain call answered, every new-patient care plan started, every lapsed patient reactivated — all attributed. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-ch" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-ch)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your backlog of missed inquiries.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll reopen closed urgency windows.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact lapsed inquiries, re-qualify the ones still in pain or seeking care, and book them in. You pay only for patients booked — no retainer until you&apos;ve seen results.
              </p>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                Start a performance pilot →
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
              &ldquo;I didn&apos;t realize how many acute-pain patients were calling after 6 PM and hitting voicemail until I looked at the missed-call log. AnswerCare caught twelve new patient intakes in the first month — most were people in real pain who just needed someone to answer and get them in.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>KL</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. Kevin L., DC</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Owner · Align Chiropractic · Nashville, TN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions chiropractors ask.</h2></div></div>
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
            Close the urgency window before your competitor does.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll count how many acute-pain callers your voicemail is sending to the clinic down the street.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a revenue audit →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Start a performance pilot
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
