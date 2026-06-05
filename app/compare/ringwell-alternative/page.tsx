import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Ringwell Alternative for Contractors — AnswerCare AI vs Ringwell',
  description: 'Comparing Ringwell ($49/mo) vs AnswerCare AI ($199/mo) for trade contractors. One books jobs. The other routes calls. See which actually grows your business.',
  keywords: 'ringwell alternative, ringwell vs answercare, ai answering service for contractors, ringwell competitor',
  openGraph: {
    title: 'Ringwell Alternative for Trades — AnswerCare AI',
    description: 'Ringwell answers calls. AnswerCare books jobs. See the real difference for trade contractors.',
    url: 'https://www.answercareai.com/compare/ringwell-alternative',
    type: 'article',
  },
  alternates: { canonical: 'https://www.answercareai.com/compare/ringwell-alternative' },
}

const rows: [string, string, string][] = [
  ['Monthly cost',             '$49–99/mo',                    '$199/mo'],
  ['Setup fee',                '$0 (self-serve)',              '$497 one-time'],
  ['Pickup time',              '< 3 seconds',                   '< 2 seconds'],
  ['Books jobs in your calendar', '—',                         '✓ Automatic'],
  ['Custom trade script',      'Basic prompts',                '✓ Built for your trade'],
  ['SMS to you + customer',    '—',                            '✓ Every call'],
  ['After-hours emergency routing', 'Limited',                 '✓ Configured per your rules'],
  ['Available 24/7',           '✓',                            '✓'],
  ['Setup time',               'Self-serve / days',            '< 1 day with onboarding call'],
  ['Human onboarding support', '—',                            '✓ 15-min discovery call'],
  ['Approx cost-per-booked-job', '~$18',                       '~$4'],
  ['Cancel anytime',           '✓',                            '✓ 7 days notice'],
]

export default function RingwellAlternativePage() {
  return (
    <div>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Ringwell Alternative for Trade Contractors — AnswerCare vs Ringwell',
        description: 'Detailed comparison of Ringwell vs AnswerCare AI for plumbers, HVAC, electricians, and other trade contractors.',
        author: { '@type': 'Organization', name: 'AnswerCare AI' },
        publisher: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot" />Ringwell alternative
          </div>
          <h1 style={{ textWrap: 'balance', maxWidth: 860 } as React.CSSProperties}>
            Ringwell answers calls.<br />
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AnswerCare books jobs.</span>
          </h1>
          <p style={{ fontSize: 19, color: 'var(--ink-2)', maxWidth: 620, marginTop: 24, lineHeight: 1.55 }}>
            Ringwell is a capable AI call router at $49/mo. AnswerCare is a job-booking system from $500/mo.
            For contractors, the question is: how many extra booked jobs per month does the difference cover?
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="/missed-revenue#pilot"
              className="btn btn-accent"
              style={{ padding: '16px 24px', fontSize: 16 }}>
              Start a performance pilot →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '16px 24px', fontSize: 16 }}>
              Call demo: (754) 227-6342
            </a>
          </div>
        </div>
      </section>

      {/* The honest take */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="dot" />The honest take</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="story-grid">
            <div className="card" style={{ padding: '28px 32px' }}>
              <h3 style={{ marginBottom: 12, fontSize: 20 }}>Ringwell is good for…</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'var(--ink-2)' }}>
                {[
                  'Businesses that just need calls answered and routed',
                  'Low call volume operations that don\'t need booking automation',
                  'Price-sensitive operators testing AI call handling for the first time',
                  'Multi-location businesses with internal dispatch',
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--muted)', marginTop: 2 }}>→</span>
                    {l}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '28px 32px', background: 'var(--ink)', color: '#F4F0E6', border: 'none' }}>
              <h3 style={{ marginBottom: 12, fontSize: 20, color: '#fff' }}>AnswerCare is built for…</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'rgba(244,240,230,.85)' }}>
                {[
                  'Solo trade operators who need jobs booked, not just messages taken',
                  'High urgency calls (emergencies, lockouts, burst pipes) where speed-to-book matters',
                  'Operators who want a custom script that knows their trade, rates, and service area',
                  'Anyone tired of calling back voicemails and finding the job already went elsewhere',
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10 }}>
                    <span style={{ color: '#9FE2B0', marginTop: 2 }}>✓</span>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="wrap-narrow">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Side by side</div>
              <h2>Ringwell vs AnswerCare — feature by feature</h2>
            </div>
          </div>

          <div className="table-scroll">
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
                <div style={{ padding: '16px 24px', fontSize: 11, color: 'var(--muted)' }} className="mono">FEATURE</div>
                <div style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 500, borderLeft: '1px solid var(--line-soft)', fontSize: 14 }}>Ringwell</div>
                <div style={{
                  padding: '32px 20px 16px', textAlign: 'center', fontWeight: 600,
                  background: 'var(--ink)', color: 'var(--bg)', borderLeft: '1px solid var(--line-soft)',
                  fontSize: 14, position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--accent)', color: '#fff',
                    fontSize: 10, fontWeight: 600, letterSpacing: '.08em',
                    padding: '3px 8px', borderRadius: 5,
                  }} className="mono">FOR TRADES</div>
                  AnswerCare
                </div>
              </div>
              {rows.map(([feature, ringwell, answercare], i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr',
                  borderBottom: i < rows.length - 1 ? '1px solid var(--line-soft)' : 'none',
                }}>
                  <div style={{ padding: '16px 24px', fontSize: 14, color: 'var(--ink-2)' }}>{feature}</div>
                  <div style={{ padding: '16px 20px', textAlign: 'center', fontSize: 14, borderLeft: '1px solid var(--line-soft)',
                    color: ringwell === '—' ? 'var(--muted-2)' : 'var(--ink)' }}>{ringwell}</div>
                  <div style={{ padding: '16px 20px', textAlign: 'center', fontSize: 14, borderLeft: '1px solid var(--line-soft)',
                    background: 'rgba(31,68,255,.04)',
                    color: answercare.startsWith('✓') ? 'var(--accent-ink)' : 'var(--ink)',
                    fontWeight: answercare.startsWith('✓') ? 600 : 400 }}>{answercare}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14, letterSpacing: '.04em' }}>
            Ringwell pricing from public website · AnswerCare data from live customers · last updated May 2025
          </div>
        </div>
      </section>

      {/* The $150 delta */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'center' }} className="story-grid">
            <div>
              <div className="num serif" style={{ fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--ink)' }}>$150</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, letterSpacing: '.06em' }}>MONTHLY PRICE DIFFERENCE</div>
            </div>
            <div>
              <h3 style={{ marginBottom: 16 }}>Is the $150 difference worth it?</h3>
              <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 16 }}>
                Ringwell at $49/mo routes your calls and takes messages. AnswerCare at $199/mo actually books jobs —
                it qualifies the caller, checks your calendar, schedules the appointment, and texts you the details.
              </p>
              <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65 }}>
                For a contractor with a $350 average ticket, AnswerCare needs to book <strong>one extra job every two months</strong> to
                pay for the price difference. If you miss 5 calls/day, you&apos;re losing far more than that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ maxWidth: 680, margin: '0 auto' }}>
            Start a performance pilot.<br />
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Pay only for jobs we recover.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 480, margin: '20px auto 0' }}>
            No retainer up front. We recover your missed leads — you pay only for booked jobs. Plans from $500/mo after.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/missed-revenue#pilot"
              className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}>
              Start a performance pilot →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a setup call
            </a>
          </div>
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginBottom: 14 }}>
              ALSO COMPARE
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/compare/answering-service" className="chip">vs. Answering Services</a>
              <a href="/plumbers" className="chip">For Plumbers</a>
              <a href="/hvac" className="chip">For HVAC</a>
              <a href="/locksmiths" className="chip">For Locksmiths</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
