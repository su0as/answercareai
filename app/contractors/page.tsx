import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'
import HomeROICalc from '@/components/HomeROICalc'

export const metadata: Metadata = {
  title: 'AI Answering Service for Contractors — Never Miss a Job Call Again',
  description: 'AnswerCare answers every contractor call in under 2 seconds, 24/7. Books the job, texts you the details. Built for plumbers, HVAC, electricians, roofers, and every trade in between. 14 days free.',
  keywords: 'answering service for contractors, ai answering service for contractors, contractor phone answering, ai receptionist for contractors',
  openGraph: {
    title: 'AI Answering Service for Contractors | AnswerCare AI',
    description: 'Stop losing jobs to voicemail. AnswerCare answers every call in under 2 seconds and books the job — for every trade.',
    url: 'https://answercareai.com/contractors',
    type: 'website',
  },
  alternates: { canonical: 'https://answercareai.com/contractors' },
}

const trades = [
  { slug: 'plumbers',        label: 'Plumbers',          icon: '🔧', stat: '$385 avg ticket' },
  { slug: 'hvac',            label: 'HVAC',               icon: '❄️', stat: '71% emergency calls' },
  { slug: 'electricians',    label: 'Electricians',       icon: '⚡', stat: '87% voicemail hangup' },
  { slug: 'locksmiths',      label: 'Locksmiths',         icon: '🔑', stat: '94% won\'t wait' },
  { slug: 'roofers',         label: 'Roofers',            icon: '🏠', stat: '$4,200 avg job' },
  { slug: 'pest-control',    label: 'Pest Control',       icon: '🐛', stat: '3× same-day close' },
  { slug: 'garage-door',     label: 'Garage Door',        icon: '🚪', stat: '71% emergency calls' },
  { slug: 'appliance-repair',label: 'Appliance Repair',   icon: '🫙', stat: '$195 avg ticket' },
  { slug: 'septic',          label: 'Septic Service',     icon: '🌊', stat: '55% emergency calls' },
]

export default function ContractorsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Answering Service for Contractors',
        description: 'AnswerCare AI answers every contractor call 24/7, books jobs, and texts the tech the details. Built for all home service trades.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://answercareai.com' },
        serviceType: 'AI Phone Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Home service contractors and solo trade operators' },
        offers: { '@type': 'Offer', price: '199', priceCurrency: 'USD' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For home service contractors · all trades · 24/7/365
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                AI Answering Service<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>for Every Contractor.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                You can&apos;t answer the phone while you&apos;re on a job. AnswerCare can.
                Answers in under 2 seconds, qualifies the caller, books the appointment,
                and texts you the details — for every trade, every call, every hour.
              </p>
              <div className="hero-cta-block" style={{
                marginTop: 36, padding: '20px 24px',
                border: '1px solid var(--line)', borderRadius: 18,
                background: 'linear-gradient(180deg,#FFFEFB,#FBFAF6)',
              }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Try the live demo</div>
                  <a href="tel:+17542276342" className="serif num"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-.02em', color: 'var(--accent)' }}>
                    +1 (754) 227-6342
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
                    target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Start 14 days free <span className="arrow">→</span>
                  </a>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Book a setup call
                  </a>
                </div>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, letterSpacing: '.04em' }}>
                $497 setup · 14 days free · then $199/mo · cancel anytime
              </div>
              <div className="metrics-strip">
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['$199/mo','flat fee, no per-call'],['9 trades','currently supported']].map(([v,l]) => (
                  <div key={l}>
                    <div className="num" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-.02em' }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, letterSpacing: '.04em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade grid card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>
                  BUILT FOR THESE TRADES
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {trades.map((t, i) => (
                  <a key={t.slug} href={`/${t.slug}`} style={{
                    padding: '18px 18px',
                    borderBottom: i < 6 ? '1px solid var(--line-soft)' : 'none',
                    borderRight: (i % 3) < 2 ? '1px solid var(--line-soft)' : 'none',
                    display: 'block', textDecoration: 'none',
                    transition: 'background .12s ease',
                  }}
                  onMouseEnter={undefined}
                  >
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{t.icon}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{t.label}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2, letterSpacing: '.04em' }}>
                      {t.stat}
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                  More trades supported — <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 500 }}>ask on a setup call</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}>
            <span className="dot" />How it works for every trade
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Call forwarding — 5 min', body: 'Set conditional forwarding on your existing number. AnswerCare answers when you don\'t, after 1–4 rings. Your number stays yours.' },
              { n: '02', t: 'Custom trade script', body: 'We learn your trade, service area, rates, and calendar during a 15-minute setup call. Custom script. You approve before anything goes live.' },
              { n: '03', t: 'Every call booked', body: 'Caller heard, job qualified, appointment booked into your calendar. You get a text with the full transcript and job details.' },
            ].map((s) => (
              <div key={s.n} className="card" style={{ padding: '26px 28px' }}>
                <div className="num serif" style={{ fontSize: 52, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em' }}>{s.n}</div>
                <h3 style={{ marginTop: 12, marginBottom: 10, fontSize: 17 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section" id="calc">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot pain" />The math</div>
              <h2>What is voicemail <span className="serif" style={{ fontStyle: 'italic' }}>actually</span> costing your shop?</h2>
            </div>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* Trade nav grid */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Trade-specific pages</div>
              <h2>Built for your exact trade.</h2>
            </div>
            <p style={{ maxWidth: 340, color: 'var(--muted)', fontSize: 16 }}>
              Each page has trade-specific call types, pricing context, emergency handling, and FAQ — not a generic template.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {trades.map((t) => (
              <a key={t.slug} href={`/${t.slug}`} className="card" style={{
                padding: '24px 26px', display: 'block', textDecoration: 'none',
                transition: 'border-color .15s ease',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{t.label}</h3>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 12 }}>{t.stat}</div>
                <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
                  View {t.label.toLowerCase()} page →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-.03em', lineHeight: .98 }}>
            Stop leaking jobs.<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>Pick up by Friday.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 480, margin: '20px auto 0' }}>
            Setup takes 15 minutes. Live by end of day. First 14 days free.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank" rel="noopener noreferrer" className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}>
              Start free →
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
