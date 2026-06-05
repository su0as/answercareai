import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Missed-Call Revenue Recovery',
  description: 'Every unanswered call is booked revenue for your competitor. AnswerCare recovers it — 24/7 answering, old lead reactivation, and job booking. Pay only for what we recover.',
  keywords: 'missed call revenue recovery, answer every call business, missed revenue service business, recover lost leads, answering service revenue',
  openGraph: {
    title: 'Missed-Call Revenue Recovery | AnswerCare AI',
    description: 'We recover the revenue your business loses to unanswered calls. Start with a performance pilot — pay only for jobs we recover.',
    url: 'https://www.answercareai.com/missed-revenue',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/missed-revenue' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Missed-Call Revenue Recovery',
  description: 'AnswerCare answers every inbound call 24/7, recovers missed and dormant leads, and books revenue directly to your calendar — for home services, property management, dental practices, and law firms.',
  provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
  serviceType: 'Missed-Revenue Recovery & Call Answering',
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD', description: 'Plans from $500/mo. Performance pilot available — pay only for recovered jobs.' },
}

const segments = [
  { href: '/home-services', icon: '🔧', label: 'Home Services', sub: 'HVAC, plumbing, electrical, roofing, pest control — overflow + after-hours recovery' },
  { href: '/property-management', icon: '🏢', label: 'Property Management', sub: 'After-hours emergencies, leasing inquiry capture, vacancy cost reduction' },
  { href: '/dental-medical', icon: '🦷', label: 'Dental & Medical', sub: 'New-patient capture, scheduler integration, after-hours urgent care booking' },
  { href: '/law-firms', icon: '⚖️', label: 'Law Firms', sub: 'After-hours intake, lead qualification, consultation booking — 24/7' },
]

export default function MissedRevenuePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}>
            <span className="dot pain" />Missed-call revenue recovery · every industry · 24/7
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-.035em', lineHeight: .95, marginBottom: 24 }}>
            We recover the revenue your business loses to unanswered calls.
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.55 }}>
            Every missed call is a job, patient, tenant, or client that booked with someone else.
            We answer every call, recover your old leads, and turn them into booked revenue —
            and you can start by paying only for what we recover.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Start a performance pilot →
            </a>
            <a href="#calc" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              See your missed-revenue number
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
            PLANS FROM $500/MO · OR PAY ONLY FOR JOBS WE RECOVER · GO LIVE IN 1 DAY
          </div>
        </div>
      </section>

      {/* Segment cards */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Built for your industry</div>
              <h2>One engine. Every industry that lives and dies by the phone.</h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {segments.map(s => (
              <a key={s.href} href={s.href} className="card" style={{ padding: '28px 30px', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>{s.label}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{s.sub}</p>
                <div style={{ marginTop: 16, fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>
                  See how it works for {s.label.toLowerCase()} →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section" id="calc" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot pain" />Your number</div>
              <h2>What are unanswered calls actually costing your business?</h2>
            </div>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>How it works</div>
              <h2>Live in 1 day. Revenue in the first week.</h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { n: '01', t: 'Revenue audit — 15 min', body: 'We map your call volume, after-hours gaps, average job value, and your existing list of missed or dormant leads. You see exactly where revenue is leaking.' },
              { n: '02', t: 'Go live + reactivate', body: 'We answer overflow and after-hours calls immediately — and launch a reactivation campaign on your old leads. Bookings route to your team and calendar.' },
              { n: '03', t: 'Prove it in revenue', body: 'You see booked jobs attributed and logged. Continue on a plan or stay on performance. No retainer until you\'ve seen real results.' },
            ].map(s => (
              <div key={s.n} className="card" style={{ padding: '28px 28px 32px' }}>
                <div className="num serif" style={{ fontSize: 64, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em' }}>{s.n}</div>
                <h3 style={{ marginTop: 14, marginBottom: 10, fontSize: 17 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Side-by-side</div>
              <h2>How AnswerCare stacks up against your real options.</h2>
            </div>
          </div>
          <div className="table-scroll">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', borderBottom: '1px solid var(--line)' }}>
              {['Feature', 'Voicemail', 'Answering Service', 'DIY AI Tools', 'AnswerCare'].map((c, i) => (
                <div key={c} style={{
                  padding: i === 4 ? '34px 20px 18px' : '18px 20px',
                  textAlign: i === 0 ? 'left' : 'center',
                  background: i === 4 ? 'var(--ink)' : 'transparent',
                  color: i === 4 ? 'var(--bg)' : 'var(--ink)',
                  fontWeight: i === 4 ? 600 : i === 0 ? 400 : 500,
                  fontSize: i === 0 ? 12 : 14,
                  borderLeft: i ? '1px solid var(--line-soft)' : 'none',
                  position: 'relative',
                }} className={i === 0 ? 'mono' : ''}>
                  {c}
                  {i === 4 && (
                    <div style={{
                      position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--accent)', color: '#fff',
                      fontSize: 10, fontWeight: 600, letterSpacing: '.08em',
                      padding: '4px 9px', borderRadius: 6, lineHeight: 1,
                    }} className="mono">RECOMMENDED</div>
                  )}
                </div>
              ))}
            </div>
            {[
              ['Books appointments live', '—', '—', '—', '✓'],
              ['24/7 coverage', '—', 'varies', '✓', '✓'],
              ['Custom scripts per service line', '—', 'generic', '—', '✓'],
              ['Recovers old / missed leads', '—', '—', '—', '✓'],
              ['Routes details to your team', '—', 'sometimes', '—', '✓'],
              ['Done-for-you setup', 'instant', '✓', '—', '✓'],
            ].map((row, ri, arr) => (
              <div key={ri} style={{
                display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)',
                borderBottom: ri < arr.length - 1 ? '1px solid var(--line-soft)' : 'none',
              }}>
                {row.map((cell, ci) => (
                  <div key={ci} style={{
                    padding: '16px 20px', textAlign: ci === 0 ? 'left' : 'center', fontSize: 14.5,
                    background: ci === 4 ? 'rgba(31,68,255,.04)' : 'transparent',
                    borderLeft: ci ? '1px solid var(--line-soft)' : 'none',
                    color: cell === '—' ? 'var(--muted-2)' : ci === 4 ? 'var(--accent-ink)' : 'var(--ink)',
                    fontWeight: ci === 4 ? 600 : 400,
                  }}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Performance Pilot */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap-narrow">
          <div style={{
            background: 'var(--ink)', color: '#F4F0E6',
            borderRadius: 24, padding: '48px 52px',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .05, pointerEvents: 'none' }}>
              <defs>
                <pattern id="dots-mr" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-mr)" />
            </svg>
            <div style={{ position: 'relative' }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}>
                <span className="dot good" />The pilot offer
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Pay only for the revenue<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>we actually recover.</span>
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28, maxWidth: 580 }}>
                Give us your list of missed calls and old leads. We re-contact them, qualify the ready-to-buy ones,
                and book them onto your calendar. You pay only a share of the revenue we recover — or a flat fee per booked job.
                No retainer. No risk. If we don&apos;t book you jobs, you don&apos;t pay.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                  Start a performance pilot →
                </a>
                <a href="#calc" className="btn" style={{
                  background: 'rgba(255,255,255,.08)', color: '#F4F0E6',
                  border: '1px solid rgba(255,255,255,.18)',
                  padding: '16px 24px', fontSize: 16,
                }}>
                  Calculate your upside first
                </a>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(244,240,230,.45)', marginTop: 20, letterSpacing: '.04em' }}>
                Available to businesses with an existing customer or lead list. Performance pilots convert to a monthly plan once we&apos;ve proven the revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            <div className="eyebrow"><span className="dot accent" />Pricing</div>
            <h2 style={{ maxWidth: 600, margin: '0 auto' }}>
              Pricing that pays for itself <span className="serif" style={{ fontStyle: 'italic' }}>in recovered jobs.</span>
            </h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
            {[
              { name: 'Recover', price: '$500/mo', tag: null, desc: 'After-hours + overflow. Jobs booked. Revenue attributed.', note: 'Single location.' },
              { name: 'Grow', price: '$900/mo', tag: 'MOST POPULAR', desc: '24/7 coverage, multi-line, CRM integration, quarterly optimization.', note: '3–10 trucks or multi-provider practice.' },
              { name: 'Scale', price: '$1,500/mo', tag: null, desc: 'Dedicated numbers, lead reactivation, bilingual, success manager.', note: 'Property managers, multi-site, high-volume intake.' },
            ].map((tier, i) => (
              <div key={tier.name} className="card" style={{
                padding: 0, overflow: 'hidden',
                background: i === 1 ? 'var(--ink)' : undefined,
                color: i === 1 ? '#F4F0E6' : undefined,
              }}>
                {tier.tag && (
                  <div style={{ background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', padding: '8px 20px', textAlign: 'center' }} className="mono">{tier.tag}</div>
                )}
                <div style={{ padding: '28px 28px 32px' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: i === 1 ? 'rgba(244,240,230,.55)' : 'var(--muted)', marginBottom: 8 }}>{tier.name.toUpperCase()}</div>
                  <div className="num serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-.03em', color: i === 1 ? '#fff' : 'var(--ink)', marginBottom: 12 }}>{tier.price}</div>
                  <p style={{ fontSize: 14, color: i === 1 ? 'rgba(244,240,230,.7)' : 'var(--muted)', marginBottom: 16, lineHeight: 1.5 }}>{tier.desc}</p>
                  <div style={{ fontSize: 13, color: i === 1 ? 'rgba(244,240,230,.45)' : 'var(--muted)', fontStyle: 'italic', marginBottom: 20 }}>{tier.note}</div>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                    className={`btn ${i === 1 ? 'btn-accent' : ''}`}
                    style={{
                      justifyContent: 'center', width: '100%',
                      ...(i !== 1 ? { background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)' } : {}),
                    }}>
                    Book a revenue audit →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: 'center', fontSize: 14, color: 'var(--muted)' }}>
            One-time onboarding fee: $497–$997 depending on tier · or skip the retainer and{' '}
            <a href="#" style={{ color: 'var(--accent)', fontWeight: 500 }}>start with a performance pilot</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-.03em', lineHeight: .98 }}>
            Every unanswered call is revenue your competitor books.
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 480, margin: '20px auto 0' }}>
            Get your missed-revenue number in 15 minutes. Start with a pilot — pay only for what we recover.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Start a performance pilot →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Call demo: (754) 227-6342
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
