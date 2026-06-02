import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Missed-Revenue Recovery for Property Management Companies | AnswerCare AI',
  description: 'After-hours maintenance emergencies and leasing inquiries can\'t go to voicemail. AnswerCare answers 24/7, triages emergencies, captures every prospective tenant, and routes to the right person.',
  keywords: 'answering service property management, property management after hours answering, tenant emergency answering service, leasing inquiry answering, property manager phone answering',
  openGraph: {
    title: 'Missed-Revenue Recovery for Property Management | AnswerCare AI',
    description: 'After-hours emergencies and leasing inquiries captured 24/7. Vacancies fill faster. Tenants stop escalating.',
    url: 'https://www.answercareai.com/property-management',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/property-management' },
}

const faq = [
  { q: 'How does AnswerCare handle after-hours maintenance emergencies?', a: 'We triage urgency in real time. True emergencies (flooding, no heat in winter, lockouts, gas smell) are escalated immediately to your on-call team or maintenance vendor. Non-urgent requests are logged, acknowledged, and scheduled for the next business day. Tenants get an immediate response either way — which stops most escalations before they start.' },
  { q: 'Can AnswerCare capture and qualify prospective tenant inquiries?', a: 'Yes. We answer leasing inquiry calls 24/7, collect the prospective tenant\'s requirements, confirm unit availability from your script, and schedule showings directly into your calendar. Every missed leasing inquiry is a vacancy that costs you money per day — we make sure those calls are answered and booked immediately.' },
  { q: 'How does this integrate with our property management software?', a: 'We integrate with Google Calendar, Outlook, and most PMS platforms via calendar sync. For Buildium, AppFolio, and Rent Manager, we confirm integration options during onboarding. Maintenance requests and leasing bookings land in your existing workflow.' },
  { q: 'What does an empty unit actually cost per day?', a: 'The vacancy cost depends on your market and unit size — but the formula is simple: monthly rent ÷ 30 = cost per empty day. A unit renting for $1,800/mo costs $60/day vacant. One missed leasing inquiry that would have filled it costs far more than any monthly plan.' },
  { q: 'Does this replace our existing staff?', a: 'No. AnswerCare handles overflow and after-hours — the calls your team can\'t get to. Your property managers and leasing staff stay in charge of tenant relationships, lease signings, and complex decisions. We make sure nothing goes to voicemail when they\'re unavailable.' },
]

export default function PropertyManagementPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Missed-Call Revenue Recovery for Property Management',
        description: 'AnswerCare AI answers tenant and leasing calls 24/7 for property management companies — triaging emergencies, capturing prospective tenants, and routing to the right team member.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Property Management Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Property management companies and property managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For property management companies · every call captured, every tenant served
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Missed-Call Revenue Recovery<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>for Property Management.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                After-hours maintenance emergencies and leasing inquiries can&apos;t go to voicemail.
                AnswerCare answers 24/7, triages emergencies, captures every prospective tenant,
                and routes to the right person — so vacancies fill faster and tenants stop escalating.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Scale plan','$1,500/mo'],['1 day','go-live']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR PROPERTY MANAGERS</span>
              </div>
              {[
                { type: 'After-hours maintenance emergency', val: 'Triaged + dispatched immediately', urgent: true },
                { type: 'Tenant flooding / no heat / lockout', val: 'Emergency escalation to on-call', urgent: true },
                { type: 'Prospective tenant leasing inquiry', val: 'Qualified + showing scheduled', urgent: false },
                { type: 'Rent / payment questions', val: 'Answered from script, logged', urgent: false },
                { type: 'Maintenance scheduling', val: 'Booked to calendar', urgent: false },
              ].map((row, i) => (
                <div key={row.type} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px', borderBottom: i < 4 ? '1px solid var(--line-soft)' : 'none', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{row.type}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{row.val}</div>
                  </div>
                  {row.urgent && <span style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.06em', background: 'rgba(239,68,68,.08)', color: 'var(--pain)', padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>URGENT</span>}
                </div>
              ))}
              <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                  Recommended plan: <strong>Scale ($1,500/mo)</strong> — 24/7, multi-property, lead reactivation included
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
                It&apos;s 11:20 PM.<br />A tenant has water coming through the ceiling.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>They call your office number. It rings through to voicemail. They leave a message. They call back twice. Still voicemail. By midnight they&apos;ve called their attorney and posted on Yelp.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;An answered call at 11:20 PM costs nothing. The alternative costs thousands.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: the call is answered in under 2 seconds. The emergency is triaged. Your on-call maintenance vendor is contacted. The tenant receives an ETA confirmation text. Escalation avoided.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '$60+', label: 'cost per day of an empty unit (at $1,800/mo rent) [VERIFY]', accent: false },
                { n: '24/7', label: 'maintenance emergencies don\'t wait for business hours', accent: false },
                { n: '1st', label: 'prospective tenant to tour usually signs — speed to showing matters', accent: true },
                { n: '∞', label: 'cost of an unanswered emergency that becomes a legal dispute', accent: false },
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
              <h2>What are unanswered calls costing your properties?</h2>
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
              { n: '01', t: 'Revenue audit — 15 min', body: 'We map your call volume, after-hours gaps, average leasing value, and vacancy costs. You see exactly where revenue and tenant satisfaction are leaking.' },
              { n: '02', t: 'Go live + scripts', body: 'Emergency triage script, leasing inquiry script, and maintenance scheduling — all configured for your properties. Live same day.' },
              { n: '03', t: 'Prove it', body: 'Booked showings, triaged emergencies, and tenant acknowledgements — all attributed and logged. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-pm" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-pm)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Not ready to commit? Start with a performance pilot.
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                Give us your list of missed inquiry calls and unresponsive leads. We re-contact them, qualify the serious ones, and book showings onto your calendar. You pay only for filled appointments — or a flat fee per booked showing.
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
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot good" />Results</div>
              <h2>What property managers say.</h2>
            </div>
          </div>
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--muted)' }}>
              [REAL TESTIMONIAL NEEDED — property management company, 50–500 units managed]
            </div>
            <div style={{ marginTop: 20, fontSize: 14, color: 'var(--muted)' }}>[Name, Title · Company · Units managed]</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions property managers ask.</h2></div></div>
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
            Every missed inquiry is a vacancy that stays empty longer.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you exactly what unanswered calls are costing your portfolio.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a revenue audit →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Call demo: (754) 227-6342
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
