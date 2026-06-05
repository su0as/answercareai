import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'New-Patient Call Recovery for Dental & Medical Practices',
  description: 'Missed new-patient calls cost thousands per year. AnswerCare answers overflow and after-hours calls, books into your scheduler, and recovers dormant leads.',
  keywords: 'answering service dental practice, medical practice phone answering, new patient call answering, dental office overflow answering, medical front desk answering service',
  openGraph: {
    title: 'New-Patient Recovery for Dental & Medical Practices | AnswerCare AI',
    description: 'Every missed new-patient call is thousands in lifetime value. We answer overflow and after-hours and book them in.',
    url: 'https://www.answercareai.com/dental-medical',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/dental-medical' },
}

const faq = [
  { q: 'Will my patients know they\'re not speaking with the front desk?', a: 'Most don\'t — and you control the introduction. The voice introduces itself as a service from your practice and handles the call the way your front desk would. We show you the exact script before anything goes live. The goal is for every patient to feel acknowledged and scheduled immediately — not put on hold or redirected to voicemail.' },
  { q: 'Does this integrate with our practice management software?', a: 'We integrate with Google Calendar, Outlook, and most scheduling systems. For Dentrix, Eaglesoft, Open Dental, Kareo, Athenahealth, and similar platforms, we connect via calendar sync or direct integration. We confirm your stack and test the connection during onboarding before going live.' },
  { q: 'How is patient data handled? [LEGAL REVIEW NEEDED]', a: 'All call data is encrypted in transit and at rest. We maintain a privacy-forward posture and can share our security documentation during onboarding. Note: if your practice has specific HIPAA compliance requirements, please discuss these with legal counsel before onboarding — we do not make specific HIPAA compliance claims without legal review per your organization\'s needs.' },
  { q: 'How do you calculate new-patient lifetime value?', a: 'A new dental patient\'s lifetime value ranges from $3,500–$15,000+ depending on treatment mix (routine care, ortho, cosmetic). A single missed new-patient call isn\'t just the first appointment — it\'s the full relationship. We build this into the ROI calculation during your revenue audit.' },
  { q: 'Does this replace my front desk team?', a: 'No. AnswerCare handles overflow and after-hours — the calls your team can\'t get to during a busy check-in hour, at lunch, or after close. Your front desk stays in charge of patient relationships, treatment coordination, and in-person experience. We make sure no new patient ever hits voicemail.' },
]

export default function DentalMedicalPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'New-Patient Call Recovery for Dental & Medical Practices',
        description: 'AnswerCare AI answers overflow and after-hours calls for dental and medical practices, booking new patients directly into the practice scheduler.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Medical Practice Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Dental and medical practice managers and physicians' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For dental &amp; medical practices · every new patient captured, every appointment booked
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Missed New-Patient Recovery<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>for Dental &amp; Medical.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                Every missed new-patient call is thousands in lifetime value handed to the practice down the street.
                AnswerCare answers overflow and after-hours, books new patients straight into your scheduler,
                and never lets a first-time caller hit voicemail.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$3,500+','avg new-patient LTV']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR PRACTICES</span>
              </div>
              {[
                { type: 'New-patient appointment request', val: '$3,500–15,000+ lifetime value', urgent: true },
                { type: 'After-hours urgent care inquiry', val: 'Triaged + scheduled or redirected', urgent: true },
                { type: 'Recall / reactivation appointment', val: 'Booked into scheduler directly', urgent: false },
                { type: 'Insurance & coverage questions', val: 'Answered from script, logged', urgent: false },
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
                  Recommended plan: <strong>Grow ($900/mo)</strong> — 24/7, scheduler integration, quarterly optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />The scenario</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s 1:15 PM.<br />Your front desk is checking in three patients.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>A new patient calls — they were referred by an existing patient and are ready to book today. Four rings. Voicemail. They hang up and call the next dentist on Google.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You just lost a patient relationship worth $8,000 over their lifetime.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: the call is answered in under 2 seconds. The new patient is welcomed, insurance is collected, and an appointment is booked into your scheduler — without your front desk touching the phone.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '$8k+', label: 'industry-cited average lifetime value of a dental patient — varies by practice', accent: false },
                { n: 'Most', label: 'new-patient callers who hit voicemail don\'t call back — they call the next practice', accent: false },
                { n: '1st', label: 'practice to answer usually books the new patient — speed wins', accent: true },
                { n: '0', label: 'new patients should ever reach your voicemail', accent: false },
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
              <h2>What are missed new-patient calls costing your practice?</h2>
            </div>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Revenue audit — 15 min', body: 'We review your call volume, peak-hour overflow, average new-patient value, and any existing list of unanswered inquiries. You see exactly what\'s leaking.' },
              { n: '02', t: 'Go live + integrate', body: 'New-patient script, recall booking, after-hours urgent care triage — all configured for your practice and connected to your scheduler. Live same day.' },
              { n: '03', t: 'Prove it', body: 'New patients booked, slots filled, and unanswered inquiries recovered — all attributed. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-dm" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-dm)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your list of unanswered inquiries.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll turn them into booked appointments.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact your missed or lost inquiries, re-qualify the interested ones, and book them into your scheduler. You pay only for appointments booked — or a flat fee per new patient recovered. No retainer until you&apos;ve seen results.
              </p>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                Start a performance pilot →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--ink)' }}>
              &ldquo;We had a backlog of missed calls — people who called once, hit voicemail, and never called back. The performance pilot worked through that list and recovered 11 new-patient bookings in three weeks. That&apos;s revenue we would have left on the table permanently.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>SK</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Sarah K.</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Practice Manager · Lakeside Family Dental · Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions practice managers ask.</h2></div></div>
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
            The practice that answers first books the patient.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you what unanswered calls are costing your practice in lifetime patient value.
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
