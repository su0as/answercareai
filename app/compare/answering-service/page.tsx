import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'AI Answering Service vs Traditional Answering Service for Contractors',
  description: 'Traditional answering services take messages. AnswerCare books jobs. Full comparison for plumbers, HVAC, electricians and other solo trade operators.',
  keywords: 'answering service for contractors, ai vs traditional answering service, best answering service for trades, contractor answering service comparison',
  openGraph: {
    title: 'AI vs Traditional Answering Service — Which Grows Your Trade Business?',
    description: 'Traditional answering services take messages. AnswerCare books jobs. Here\'s the real difference for solo trade operators.',
    url: 'https://www.answercareai.com/compare/answering-service',
    type: 'article',
  },
  alternates: { canonical: 'https://www.answercareai.com/compare/answering-service' },
}

const scenarios = [
  {
    time: '2:43 PM Tuesday',
    situation: 'A homeowner calls about a burst pipe while you\'re under a different sink.',
    traditional: 'Human operator answers, takes name and number, leaves a voicemail note. You call back at 4 PM. Customer already booked someone else at 2:51.',
    answercare: 'AI answers in 2 seconds. Confirms emergency. Checks your calendar. Books same-day 4:30 PM slot. Texts you the address at 2:44.',
    jobValue: '$420',
  },
  {
    time: '11:15 PM Friday',
    situation: 'Someone locked out of their house, calls your locksmith number.',
    traditional: 'Answering service is on reduced staff. Hold time 4 minutes. Operator takes message. After-hours surcharge billed to you. Job not booked.',
    answercare: 'AI answers immediately. Gets address and confirms after-hours rate. Books the job. You get a text with full details within 60 seconds.',
    jobValue: '$165',
  },
  {
    time: 'Saturday 8:00 AM',
    situation: 'A homeowner wants an HVAC tune-up estimate before summer.',
    traditional: 'Weekend staff answers. Takes message. You receive the callback slip Monday. You call back — customer already called 3 other HVAC companies.',
    answercare: 'AI qualifies the caller. Explains your seasonal tune-up pricing. Books the appointment into your Monday schedule. You wake up with the slot filled.',
    jobValue: '$185',
  },
]

export default function AnsweringServiceComparisonPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'AI Answering Service vs Traditional Answering Service for Trade Contractors',
        description: 'A detailed comparison of AI-powered answering services vs traditional human answering services for solo plumbers, HVAC, electricians, and other trade operators.',
        author: { '@type': 'Organization', name: 'AnswerCare AI' },
        publisher: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot" />Answering service comparison
          </div>
          <h1 style={{ textWrap: 'balance', maxWidth: 900 } as React.CSSProperties}>
            Traditional answering services{' '}
            <span className="serif" style={{ fontStyle: 'italic', color: 'var(--pain)' }}>take messages.</span><br />
            AnswerCare books jobs.
          </h1>
          <p style={{ fontSize: 19, color: 'var(--ink-2)', maxWidth: 640, marginTop: 24, lineHeight: 1.55 }}>
            A traditional answering service costs $150–300/mo, requires a live operator to be available,
            and leaves a callback note. By the time you call back, the customer has moved on.
            AnswerCare qualifies, schedules, and confirms the booking in real time — 24/7, no hold times.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank" rel="noopener noreferrer" className="btn btn-accent"
              style={{ padding: '16px 24px', fontSize: 16 }}>
              Start 14 days free →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '16px 24px', fontSize: 16 }}>
              Call the demo line
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="metrics-strip" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
            {[
              ['78%', 'of callers hire whoever books them on the first call'],
              ['$150–300', 'monthly cost of a traditional answering service'],
              ['4–6 hrs', 'average callback delay = job already gone'],
              ['$199/mo', 'AnswerCare — and it books the job live'],
            ].map(([v, l]) => (
              <div key={v} style={{ padding: '20px 0' }}>
                <div className="num" style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.02em', color: 'var(--ink)' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real scenarios */}
      <section className="section">
        <div className="wrap-narrow">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot pain" />Real scenarios</div>
              <h2 style={{ maxWidth: 720 }}>
                Same call. Completely different outcome.
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {scenarios.map((s, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Header */}
                <div style={{
                  padding: '16px 28px', borderBottom: '1px solid var(--line)',
                  background: 'rgba(14,14,12,.02)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
                }}>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>{s.time}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginTop: 2 }}>{s.situation}</div>
                  </div>
                  <div style={{
                    padding: '6px 12px', borderRadius: 8,
                    background: 'rgba(200,57,42,.08)', color: 'var(--pain)',
                    fontSize: 13, fontWeight: 600,
                  }}>
                    Job value: {s.jobValue}
                  </div>
                </div>
                {/* Body */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="story-grid">
                  <div style={{ padding: '24px 28px', borderRight: '1px solid var(--line-soft)' }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--pain)', letterSpacing: '.08em', marginBottom: 10 }}>
                      TRADITIONAL ANSWERING SERVICE
                    </div>
                    <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.traditional}</p>
                    <div style={{
                      marginTop: 14, padding: '8px 12px', borderRadius: 6,
                      background: 'rgba(200,57,42,.06)', color: 'var(--pain)',
                      fontSize: 12, fontWeight: 500,
                    }}>
                      ✗ Job lost to competitor
                    </div>
                  </div>
                  <div style={{ padding: '24px 28px', background: 'rgba(31,68,255,.02)' }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--good)', letterSpacing: '.08em', marginBottom: 10 }}>
                      ANSWERCARE AI
                    </div>
                    <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.answercare}</p>
                    <div style={{
                      marginTop: 14, padding: '8px 12px', borderRadius: 6,
                      background: 'rgba(31,122,58,.08)', color: 'var(--good)',
                      fontSize: 12, fontWeight: 500,
                    }}>
                      ✓ Job booked · {s.jobValue} captured
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="section" style={{ background: 'rgba(14,14,12,.02)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Full comparison</div>
              <h2>Traditional answering service vs AnswerCare</h2>
            </div>
          </div>

          <div className="table-scroll">
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', borderBottom: '1px solid var(--line)' }}>
                <div style={{ padding: '16px 24px', fontSize: 11, color: 'var(--muted)' }} className="mono">FEATURE</div>
                <div style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 500, borderLeft: '1px solid var(--line-soft)', fontSize: 14 }}>Traditional answering service</div>
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
                  }} className="mono">RECOMMENDED</div>
                  AnswerCare
                </div>
              </div>
              {([
                ['Monthly cost', '$150–300', '$199'],
                ['Setup cost', '$0–50', '$497 one-time'],
                ['Picks up in', '3–4 rings + hold', '< 2 seconds, always'],
                ['Available 24/7', 'Limited / extra cost', '✓ Always'],
                ['Books job live', '— (takes message)', '✓ Automatic'],
                ['Knows your trade', 'Generic script', '✓ Custom built'],
                ['SMS to you + customer', '— or extra', '✓ Every call'],
                ['Setup time', '1–2 weeks', '< 1 day'],
                ['Cost per booked job', '~$45', '~$4'],
              ] as [string, string, string][]).map(([feature, trad, ac], i, arr) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--line-soft)' : 'none',
                }}>
                  <div style={{ padding: '15px 24px', fontSize: 14, color: 'var(--ink-2)' }}>{feature}</div>
                  <div style={{ padding: '15px 20px', textAlign: 'center', fontSize: 14, borderLeft: '1px solid var(--line-soft)',
                    color: trad.startsWith('—') ? 'var(--muted-2)' : 'var(--ink)' }}>{trad}</div>
                  <div style={{ padding: '15px 20px', textAlign: 'center', fontSize: 14, borderLeft: '1px solid var(--line-soft)',
                    background: 'rgba(31,68,255,.04)',
                    color: ac.startsWith('✓') ? 'var(--accent-ink)' : 'var(--ink)', fontWeight: ac.startsWith('✓') ? 600 : 400 }}>{ac}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ maxWidth: 640, margin: '0 auto' }}>
            Stop paying for messages.<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>Start getting booked jobs.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 480, margin: '20px auto 0' }}>
            $497 setup. First 14 days free. Then $199/mo. No per-call fees, no contracts.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank" rel="noopener noreferrer" className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}>
              Start free →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a 15-min setup call
            </a>
          </div>
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginBottom: 14 }}>
              SEE TRADE-SPECIFIC PAGES
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['plumbers', 'hvac', 'electricians', 'locksmiths', 'roofers', 'pest-control'].map((slug) => (
                <a key={slug} href={`/${slug}`} className="chip" style={{ fontSize: 13 }}>
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
