import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'After-Hours Intake & Lead Recovery for Law Firms',
  description: 'In legal, the firm that answers first signs the client. Every missed intake call is a case that walks to another firm. AnswerCare answers 24/7, screens and qualifies intakes, and books consultations on your calendar.',
  keywords: 'answering service law firm, legal intake answering service, after hours legal intake, law firm phone answering, attorney answering service, new client intake answering',
  openGraph: {
    title: 'After-Hours Intake & Lead Recovery for Law Firms | AnswerCare AI',
    description: 'The firm that answers first signs the client. We answer 24/7, screen intakes, and book consultations.',
    url: 'https://www.answercareai.com/law-firms',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/law-firms' },
}

const faq = [
  { q: 'How do you screen intakes against our criteria?', a: 'During onboarding, we build your intake qualification script — practice areas, jurisdiction, case type, statute of limitations awareness, conflict check questions, and any disqualifying factors. AnswerCare screens callers against these criteria in real time and only routes qualified intakes to your team for follow-up. Unqualified callers are acknowledged and appropriately redirected.' },
  { q: 'Will my clients know they\'re not speaking with a paralegal or attorney?', a: 'The voice introduces itself as a service from your firm. You control the exact language. For intake purposes, AnswerCare captures information, schedules the consultation, and handles the administrative side — it does not provide legal advice or represent itself as legal staff. We show you the script before anything goes live.' },
  { q: 'How do you handle confidentiality? [LEGAL REVIEW NEEDED]', a: 'All call data is encrypted in transit and at rest. We do not share or sell caller information. For attorney-client privilege and ethics compliance questions specific to your bar association, consult your ethics counsel — we do not make specific legal ethics compliance claims without review by your firm\'s legal advisors.' },
  { q: 'What happens with after-hours injury and urgent calls?', a: 'Injury, criminal, and family law emergency calls that come in after hours are answered immediately, caller information is captured, urgency is assessed, and an on-call attorney or paralegal can be notified if you configure that escalation. Every call is logged with a full transcript. No lead ever hits voicemail unacknowledged.' },
  { q: 'How is performance measured?', a: 'We track consultations booked, qualified intakes delivered, and calls handled after-hours — all attributed and reportable. In a performance pilot, we track recovered leads from your existing list and show you case value per booked consultation. You see exactly what the service earns before committing to a monthly plan.' },
]

export default function LawFirmsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'After-Hours Legal Intake & Lead Recovery for Law Firms',
        description: 'AnswerCare AI answers intake calls 24/7 for law firms, screens leads against intake criteria, and books consultations directly on the attorney\'s calendar.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Legal Intake Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Law firm managing partners and intake coordinators' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For law firms · every intake answered, every consultation booked
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                After-Hours Intake &amp; Lead Recovery<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>for Law Firms.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                In legal, the firm that answers first signs the client. Every missed intake call is a case
                that walks to another firm. AnswerCare answers 24/7, screens and qualifies intakes against
                your criteria, and books consultations on your calendar — before your competitor picks up.
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
                {[['< 2 sec','pickup time'],['24/7/365','after-hours intake'],['Scale plan','$1,500/mo'],['1 day','go-live']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR LAW FIRMS</span>
              </div>
              {[
                { type: 'New-client intake inquiry', val: 'Screened, qualified, consultation booked', urgent: true },
                { type: 'After-hours injury / urgent call', val: 'Triaged + on-call attorney notified', urgent: true },
                { type: 'Consultation scheduling', val: 'Booked to attorney calendar directly', urgent: false },
                { type: 'Existing client status questions', val: 'Logged, flagged for follow-up', urgent: false },
                { type: 'Unqualified / out-of-scope inquiries', val: 'Acknowledged + redirected appropriately', urgent: false },
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
                  Recommended plan: <strong>Scale ($1,500/mo)</strong> — 24/7, intake screening, lead reactivation included
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
                It&apos;s 7:48 PM.<br />Someone just had an accident.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>They search for a personal injury attorney. They call your firm. It rings through to voicemail. They call the next firm on Google and book a consultation tonight.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;In legal, speed to intake is speed to case signed. That call went to your competitor.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: the call is answered in under 2 seconds. The caller is screened against your intake criteria. A consultation is booked on your attorney&apos;s calendar — tonight.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1st', label: 'firm a prospect speaks with usually signs the case — the first-responder advantage (HBR, 2011)', accent: false },
                { n: 'After-hrs', label: 'legal emergencies don\'t wait for 9 AM — injury, arrest, and family crises happen 24/7', accent: false },
                { n: '$K–$M', label: 'case value of each qualified intake — missed calls are expensive', accent: true },
                { n: '24/7', label: 'legal emergencies don\'t wait for 9 AM on Monday', accent: false },
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
              <h2>What are missed intake calls costing your firm?</h2>
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
              { n: '01', t: 'Revenue audit — 15 min', body: 'We map your intake volume, after-hours gaps, average case value, and your existing list of missed or unresponsive leads. You see exactly where cases are walking out the door.' },
              { n: '02', t: 'Go live + intake screen', body: 'Intake qualification script, consultation booking, after-hours emergency triage — all configured for your practice areas and connected to your calendar. Live same day.' },
              { n: '03', t: 'Prove it', body: 'Qualified intakes delivered, consultations booked, and unresponsive leads recovered — all attributed. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-lf" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-lf)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your list of missed leads.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll turn them into booked consultations.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact your missed or dormant intake leads, re-qualify the ones still in the market, and book consultations onto your attorney&apos;s calendar. You pay only for consultations booked — or a flat fee per qualified intake delivered. No retainer until you&apos;ve seen results.
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
              &ldquo;Personal injury intake is time-sensitive. Someone calling at 9 PM from the scene of an accident will sign with the first firm that actually talks to them. AnswerCare handles our after-hours intake, screens against our case criteria, and sends a full summary. Three signed cases in the first six weeks came in after hours.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #4A3F6B, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>MD</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Michael D.</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Managing Partner · Doran & Associates · Personal Injury · Criminal Defense</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions managing partners ask.</h2></div></div>
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
            The firm that answers first signs the client.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll map exactly what missed intake calls are costing your firm.
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
