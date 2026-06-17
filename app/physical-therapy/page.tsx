import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'New-Patient Recovery for Physical Therapy Clinics',
  description: 'Missed referral calls cost PT clinics entire episodes of care. AnswerCare answers overflow, captures new-patient intakes, and books appointments 24/7.',
  keywords: 'answering service physical therapy, PT clinic phone answering, physical therapy appointment booking, rehab clinic overflow answering',
  openGraph: {
    title: 'New-Patient Recovery for Physical Therapy Clinics | AnswerCare AI',
    description: 'Referred patients call 2–3 clinics and book the first that answers. We capture every referral intake and book the evaluation.',
    url: 'https://www.answercareai.com/physical-therapy',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/physical-therapy' },
}

const faq = [
  {
    q: 'Can it capture the referring physician\'s name and reason for referral?',
    a: 'Yes — referral intake is built into the script. The agent collects the referring physician\'s name and practice, the diagnosis or reason for referral, the patient\'s insurance carrier and member ID, and any urgency notes (e.g. "post-op, start this week"). Everything is logged and forwarded to your team to start the auth process before the eval.',
  },
  {
    q: 'What does it say when patients ask about their insurance authorization status?',
    a: 'The agent can acknowledge the question and let the patient know that your team will follow up with the authorization status before their first visit. It doesn\'t make guarantees on coverage — that stays with your billing staff — but it keeps the patient informed and doesn\'t leave them with unanswered silence.',
  },
  {
    q: 'Does it integrate with WebPT, Prompt, or Clinicient?',
    a: 'We integrate with WebPT, Prompt, Clinicient (ReDoc), Jane App, and Google Calendar. For other PT platforms, we connect via calendar sync or webhook. We confirm your stack and test the integration during onboarding before going live.',
  },
  {
    q: 'How is patient data handled on calls?',
    /* [internal: data handling — legal review recommended before making specific HIPAA compliance claims] */
    a: 'All call data is encrypted in transit and at rest. We can share our security documentation during onboarding. If your clinic has specific compliance requirements, please discuss them with counsel before going live.',
  },
  {
    q: 'Will patients know they\'re not speaking with my front desk?',
    a: 'Most won\'t. The agent introduces itself as your clinic\'s intake line — using whatever language you approve. We show you the full script and test it with sample referral calls before going live. The goal is for every referred patient to feel like they reached a knowledgeable, responsive part of your team.',
  },
]

export default function PhysicalTherapyPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'New-Patient Call Recovery for Physical Therapy Clinics',
        description: 'AnswerCare AI answers overflow and after-hours calls for physical therapy clinics, capturing new-patient intakes and booking evaluations directly into the clinic scheduler.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Physical Therapy Practice Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Physical therapy clinic owners and practice managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For physical therapy clinics · referred patients call 2–3 clinics and book the first that answers
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Referrals Don&apos;t Wait.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>Neither Should Your Intake Line.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                A referred patient walks out of their physician&apos;s office with your name on a referral slip and urgency to start this week.
                They call 2–3 clinics on their insurance list and book the first that picks up.
                AnswerCare captures every intake in under 2 seconds — before the patient reaches the next clinic.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$1,800+','avg plan-of-care value']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR PT CLINICS</span>
              </div>
              {[
                { type: 'New patient — physician referral', val: '$1,800–4,000+ episode of care', urgent: true },
                { type: 'Direct access / self-referral', val: 'Full intake collected, eval booked', urgent: true },
                { type: 'Auth status / insurance question', val: 'Acknowledged, team callback scheduled', urgent: false },
                { type: 'Lapsed patient reactivation', val: 'Re-engaged and rescheduled', urgent: false },
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
                  Recommended plan: <strong>Grow ($900/mo)</strong> — 24/7, PT software integration, quarterly optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral leakage story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />The referral leakage window</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                She just walked out of the orthopedic surgeon&apos;s office.<br />Referral slip in hand. Phone already out.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>Post-op knee rehab. Surgeon told her: "Call and get started this week." She&apos;s in the parking lot, calling clinics on her insurance list. She calls yours. It rings through to voicemail. She dials the next name on the list — they answer. Evaluation booked.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;That was a $3,200 episode of care lost in 45 seconds.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: your line answers in under 2 seconds. Intake is collected — referring physician, diagnosis, insurance. Evaluation is booked before she hangs up. You keep the referral, the revenue, and the physician relationship.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '2–3', label: 'clinics the average referred PT patient calls — whoever answers first books the evaluation', accent: false },
                { n: '24hrs', label: 'window before a newly-referred patient commits to another clinic and stops calling yours', accent: false },
                { n: '1st', label: 'clinic to answer captures the referral, the episode revenue, and the physician relationship', accent: true },
                { n: '$3.2k', label: 'average plan-of-care revenue lost when one referred patient reaches your voicemail instead', accent: false },
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
              <h2>What are missed referral calls costing your clinic each month?</h2>
            </div>
          </div>
          <HomeROICalc
            valueLabel="Average plan-of-care value"
            valueSub="Typical revenue per patient across a full episode of care."
            defaultValue={1800}
            benchmarkNote="Referred patients book at 60–75% when contacted within the same week as the referral."
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
              { n: '01', t: 'Referral leakage audit — 15 min', body: 'We count the referral calls coming in during treatment hours and after 5 PM — the ones your front desk can\'t catch. You see exactly how many episodes of care your voicemail is handing to competitors.' },
              { n: '02', t: 'Intake script + go live', body: 'Full referral intake (physician, diagnosis, insurance), direct-access booking, after-hours coverage — connected to WebPT, Prompt, or your scheduler. Live same day.' },
              { n: '03', t: 'Zero referrals reach voicemail', body: 'Every referred patient captured, every evaluation booked, every lapsed patient reactivated — attributed by referral source. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-pt" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-pt)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your backlog of missed referrals.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll recover the episodes you didn&apos;t know you lost.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact patients who were referred but never booked — people who called, hit voicemail, and went elsewhere. Some are still looking for care. We find them, re-qualify, and book the evaluation. You pay only for evals booked.
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
              &ldquo;Our therapists are treating from 7 AM to 7 PM — the phone is the last thing anyone can manage during a session. Referrals were calling, not getting through, and booking at other clinics. AnswerCare captures those intakes now and books the eval before we even know the call came in. Fourteen new-patient evals in the first month.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>MS</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Maria S.</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Clinic Director · Peak Motion PT · Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions PT clinic owners ask.</h2></div></div>
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
            Zero referrals should reach your voicemail.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll count the referral calls hitting your voicemail during treatment hours — and what each one is worth.
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
