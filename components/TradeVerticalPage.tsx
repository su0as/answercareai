import type { TradeData } from '@/data/tradesData'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

// ─── JSON-LD structured data ────────────────────────────────────────────────
function TradeJsonLd({ data }: { data: TradeData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Phone Answering for ${data.trade.charAt(0).toUpperCase() + data.trade.slice(1)}`,
    description: data.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'AnswerCare AI',
      url: 'https://answercareai.com',
      telephone: '+17542276342',
    },
    serviceType: 'AI Phone Answering Service',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: `${data.tradeAdj} contractors and solo operators`,
    },
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'RecurringChargeSpecification',
        billingDuration: 'P1M',
      },
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://answercareai.com',
      availableLanguage: ['English', 'Spanish'],
    },
    review: {
      '@type': 'Review',
      reviewBody: data.testimonial.quote,
      author: { '@type': 'Person', name: data.testimonial.name },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 312,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── FAQ JSON-LD ─────────────────────────────────────────────────────────────
function FaqJsonLd({ faq }: { faq: TradeData['faq'] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── FAQ accordion (client component wrapper will handle open/close state,
//     but we render it server-side and use CSS details/summary for zero-JS) ──
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details
      name="faq"
      open={index === 0}
      style={{
        borderBottom: '1px solid var(--line-soft)',
      }}
    >
      <summary style={{
        listStyle: 'none',
        padding: '22px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
        fontSize: 17, fontWeight: 500, color: 'var(--ink)',
        cursor: 'pointer',
      }}>
        {q}
        <span style={{
          width: 26, height: 26, borderRadius: '50%',
          border: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, lineHeight: 1, flex: '0 0 auto', color: 'var(--muted)',
        }}>
          +
        </span>
      </summary>
      <div style={{
        padding: '0 28px 24px',
        color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65, maxWidth: 720,
      }}>
        {a}
      </div>
    </details>
  )
}

// ─── Main page component ─────────────────────────────────────────────────────
export default function TradeVerticalPage({ data }: { data: TradeData }) {
  const urgencyColor = '#C8392A'
  const callTypeColors = { emergency: '#C8392A', urgent: '#B7791F', routine: '#1F7A3A' }

  return (
    <>
      <TradeJsonLd data={data} />
      <FaqJsonLd faq={data.faq} />

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">

            {/* Left */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />{data.heroEyebrow}
              </div>

              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                {data.headline}
              </h1>

              <p style={{
                fontSize: 19, lineHeight: 1.55, color: 'var(--ink-2)',
                marginTop: 28, maxWidth: 540,
              }}>
                {data.subheadline}
              </p>

              {/* CTA block */}
              <div className="hero-cta-block" style={{
                marginTop: 36, padding: '20px 24px',
                border: '1px solid var(--line)', borderRadius: 18,
                background: 'linear-gradient(180deg,#FFFEFB,#FBFAF6)',
              }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Try the live demo</div>
                  <a href="tel:+17542276342" className="serif num" style={{
                    fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-.02em', color: 'var(--accent)',
                  }}>
                    +1 (754) 227-6342
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a
                    href="/missed-revenue#pilot"
                    className="btn btn-primary"
                  >
                    Start a performance pilot <span className="arrow">→</span>
                  </a>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost">
                    Book a setup call
                  </a>
                </div>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10, letterSpacing: '.04em' }}>
                Performance pilot · pay per recovered job · plans from $500/mo
              </div>

              {/* Metrics */}
              <div className="metrics-strip">
                {[
                  ['< 2 sec', 'pickup time'],
                  [data.avgTicket, `avg ${data.tradeAdj} ticket`],
                  [data.emergencyPct, 'calls are urgent'],
                  ['24/7/365', 'always on'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="num" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-.02em' }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, letterSpacing: '.04em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — call types card */}
            <div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{
                  padding: '18px 22px',
                  borderBottom: '1px solid var(--line)',
                  background: 'rgba(14,14,12,.02)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>
                    CALLS ANSWERCARE HANDLES FOR {data.trade.toUpperCase()}
                  </span>
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%', background: '#9FE2B0',
                    boxShadow: '0 0 0 4px rgba(159,226,176,.2)',
                    animation: 'blink 1.6s infinite',
                  }} />
                </div>
                {data.callTypes.map((ct, i) => (
                  <div key={i} style={{
                    padding: '16px 22px',
                    borderBottom: i < data.callTypes.length - 1 ? '1px solid var(--line-soft)' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                  }}>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 500 }}>{ct.type}</div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2, letterSpacing: '.04em' }}>
                        {ct.ticket}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        padding: '3px 8px', borderRadius: 999,
                        background: ct.urgency === 'emergency' ? 'rgba(200,57,42,.1)' :
                          ct.urgency === 'urgent' ? 'rgba(183,121,31,.1)' : 'rgba(31,122,58,.1)',
                        color: callTypeColors[ct.urgency],
                        fontSize: 11, fontWeight: 600,
                      }} className="mono">
                        {ct.urgency}
                      </span>
                      <span className="num mono" style={{ fontSize: 12, color: 'var(--muted)', minWidth: 32, textAlign: 'right' }}>
                        {ct.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12, letterSpacing: '.04em', textAlign: 'center' }}>
                Based on inbound call data · all calls answered + recorded
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ STORY SCENE ════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">

            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}>
                <span className="dot pain" />A story
              </div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s {data.storyTime}.<br />
                {data.storyScenario}
              </h2>
              <div style={{
                marginTop: 28, fontSize: 18, lineHeight: 1.55,
                color: 'rgba(244,240,230,.8)', maxWidth: 560,
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <p>{data.storyCallerSituation}</p>
                <p>Your phone rings twice. You can&apos;t reach it. They hit voicemail.</p>
                <p>They call the next {data.tradeSingular} on Google. They book with them.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You just lost a {data.storyLostJobValue} job you didn&apos;t know existed.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  An answering service costs $150–300/mo — and takes a message. It doesn&apos;t book the job.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: data.voicemailHangupPct, label: 'of voicemail callers never call back', pain: false },
                { n: data.emergencyPct, label: `of ${data.tradeAdj} calls are urgent or emergency`, pain: false },
                { n: data.missedCallsPerDay, label: `calls the average ${data.tradeSingular} misses per workday`, pain: false },
                { n: data.storyLostJobValue, label: 'average job value walking out the door with each missed call', pain: true },
              ].map(({ n, label, pain }) => (
                <div key={n} style={{
                  padding: '20px 22px',
                  background: pain ? 'rgba(200,57,42,.15)' : 'rgba(255,255,255,.04)',
                  border: pain ? '1px solid rgba(200,57,42,.35)' : '1px solid rgba(255,255,255,.08)',
                  borderRadius: 14,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
                }}>
                  <div className="num serif" style={{
                    fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-.03em', lineHeight: 1, color: '#fff',
                  }}>
                    {n}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(244,240,230,.75)', maxWidth: 220, textAlign: 'right' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ PAIN POINTS ════════════════════════════════════════════════════ */}
      <section className="section" style={{
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        background: 'rgba(14,14,12,.02)',
      }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot pain" />The problem
              </div>
              <h2 style={{ maxWidth: 720 }}>
                Why {data.trade} lose more jobs to<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>voicemail than any other bottleneck.</span>
              </h2>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {data.painPoints.map((p, i) => (
              <div key={i} className="card" style={{ padding: '28px 28px 32px' }}>
                <div className="num serif" style={{
                  fontSize: 48, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em', marginBottom: 16,
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ marginBottom: 12, fontSize: 18 }}>{p.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>{p.body}</p>
                {p.stat && (
                  <div style={{
                    marginTop: 16, padding: '10px 14px', borderRadius: 8,
                    background: 'rgba(200,57,42,.06)', border: '1px solid rgba(200,57,42,.15)',
                    color: urgencyColor, fontSize: 12.5, fontWeight: 500,
                  }}>
                    {p.stat}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ROI CALCULATOR ═════════════════════════════════════════════════ */}
      <section className="section" id="calc">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot pain" />The math
              </div>
              <h2 style={{ maxWidth: 760 }}>
                What is voicemail <span className="serif" style={{ fontStyle: 'italic' }}>actually</span> costing you?
              </h2>
            </div>
            <p style={{ maxWidth: 360, color: 'var(--muted)', fontSize: 16, paddingTop: 12 }}>
              Drag the sliders using your real numbers. The industry defaults are calibrated for {data.tradeAdj} contractors.
            </p>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* ══ HOW IT WORKS ═══════════════════════════════════════════════════ */}
      <section className="section" id="how" style={{
        background: 'rgba(14,14,12,.02)',
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>How it works</div>
              <h2 style={{ maxWidth: 700 }}>
                Live by end of day.<br />
                <span className="serif" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>15 minutes to set up.</span>
              </h2>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                n: '01', t: 'Setup call — 15 min', sub: 'Day 1',
                body: `We learn your service area, common ${data.tradeAdj} job types, your rates, and how you want calls handled. We write a custom script. You review and approve before anything goes live.`,
              },
              {
                n: '02', t: 'Forward your calls', sub: 'Day 1 — 1 hour',
                body: 'Set conditional forwarding on your existing phone number. AnswerCare answers when you don\'t, after 1–4 rings. Your number stays yours. Cancel and forwarding is off in 5 minutes.',
              },
              {
                n: '03', t: 'Performance pilot live', sub: 'Week 1–2',
                body: 'AnswerCare answers your overflow calls, reactivates missed leads, and books jobs. You pay only for recovered jobs — no retainer until you\'ve seen real results.',
              },
            ].map((s) => (
              <div key={s.n} className="card" style={{ padding: '28px 28px 32px' }}>
                <div className="num serif" style={{ fontSize: 60, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginTop: 14 }}>{s.sub}</div>
                <h3 style={{ marginTop: 6, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ════════════════════════════════════════════════════ */}
      <section className="section-tight">
        <div className="wrap-narrow">
          <div className="card" style={{ padding: '48px 52px' }}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div className="serif" style={{
                fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.3,
                letterSpacing: '-.01em', color: 'var(--ink)', flex: '1 1 400px',
              }}>
                &ldquo;{data.testimonial.quote}&rdquo;
              </div>
              <div style={{ flex: '0 0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${data.testimonial.avatarColor}, var(--ink))`,
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 600,
                  }}>
                    {data.testimonial.name.split(' ').map((s: string) => s[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{data.testimonial.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 12 }}>{data.testimonial.biz} · {data.testimonial.city}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="num" style={{ fontSize: 32, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-.02em' }}>
                    {data.testimonial.stat}
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em', marginTop: 2 }}>
                    {data.testimonial.statLabel.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRICING ════════════════════════════════════════════════════════ */}
      <section className="section" id="pricing">
        <div className="wrap-narrow">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow"><span className="dot" />Pricing</div>
            <h2>One price. <span className="serif" style={{ fontStyle: 'italic' }}>No per-call fees.</span></h2>
          </div>

          <div className="pricing-inner" style={{
            background: 'var(--ink)', color: '#F4F0E6',
            borderRadius: 24, padding: 48,
            position: 'relative', overflow: 'hidden',
          }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .05, pointerEvents: 'none' }}>
              <defs>
                <pattern id="trade-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trade-dots)" />
            </svg>

            {/* Left */}
            <div style={{ position: 'relative' }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}>Single plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                <span className="num serif" style={{ fontSize: 'clamp(64px, 8vw, 112px)', lineHeight: 1, letterSpacing: '-.04em', color: '#fff' }}>$199</span>
                <span style={{ color: 'rgba(244,240,230,.7)', fontSize: 18 }}>/ month</span>
              </div>
              <div style={{
                display: 'inline-flex', gap: 8, alignItems: 'center',
                padding: '8px 14px', borderRadius: 999,
                background: 'rgba(31,68,255,.18)', border: '1px solid rgba(31,68,255,.4)',
                color: '#BFCFFF', fontSize: 13, fontWeight: 500, marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7B9CFF' }} />
                Performance pilot — pay only for jobs recovered
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                {[
                  'Unlimited calls — no per-call fee',
                  '24/7/365 coverage including weekends',
                  `Custom script for ${data.tradeAdj} jobs`,
                  'Bookings into your calendar',
                  'SMS to you + customer after every call',
                  'Cancel anytime — 7 days notice',
                ].map((l) => (
                  <div key={l} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'rgba(244,240,230,.85)' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'rgba(159,226,176,.18)', color: '#9FE2B0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, flex: '0 0 auto',
                    }}>✓</span>
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div style={{ position: 'relative' }} id="start">
              <div style={{
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: 18, padding: 24, marginBottom: 20,
              }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'rgba(244,240,230,.55)', marginBottom: 10 }}>
                  ONE-TIME SETUP FEE
                </div>
                <div className="num serif" style={{ fontSize: 52, lineHeight: 1, letterSpacing: '-.03em', color: '#fff' }}>$497</div>
                <p style={{ color: 'rgba(244,240,230,.7)', fontSize: 14, marginTop: 10 }}>
                  Discovery, {data.tradeAdj} script writing, voice tuning, calendar + SMS integration. Non-refundable — this is the real work.
                </p>
                <div style={{
                  marginTop: 12, padding: '10px 14px', borderRadius: 8,
                  background: 'rgba(159,226,176,.1)', border: '1px solid rgba(159,226,176,.25)',
                  color: '#9FE2B0', fontSize: 12.5,
                }}>
                  Performance pilot: pay only for recovered jobs. No retainer until you&apos;ve seen results.
                </div>
              </div>

              <a
                href="/missed-revenue#pilot"
                className="btn btn-accent"
                style={{ justifyContent: 'center', padding: '18px 24px', fontSize: 17, width: '100%', display: 'flex' }}
              >
                Start a performance pilot <span className="arrow">→</span>
              </a>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'transparent', color: '#F4F0E6',
                  border: '1px solid rgba(255,255,255,.18)',
                  justifyContent: 'center', padding: '14px 24px', fontSize: 15,
                  width: '100%', display: 'flex', marginTop: 10,
                }}
              >
                Or book a 15-min setup call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════ */}
      <section className="section" id="faq">
        <div className="wrap-narrow">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div>
              <h2>
                Questions from {data.trade}.
              </h2>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {data.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 18, justifyContent: 'center', display: 'inline-flex' }}>
            <span className="dot pain" />Every ring you miss is a job your competitor books
          </div>
          <h2 style={{
            fontSize: 'clamp(40px, 5.5vw, 80px)', letterSpacing: '-.035em', lineHeight: .98,
          }}>
            Stop losing {data.tradeAdj} jobs<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>to voicemail.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 480, margin: '24px auto 0' }}>
            Setup takes 15 minutes. Start with a performance pilot — pay only for jobs we recover.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/missed-revenue#pilot"
              className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}
            >
              Start a performance pilot →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Call demo: (754) 227-6342
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 20, letterSpacing: '.06em' }}>
            $497 SETUP · 14 DAYS FREE · $199/MO · CANCEL ANYTIME
          </div>

          {/* Related trades */}
          <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em', marginBottom: 16 }}>
              ALSO BUILT FOR
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {data.relatedTrades.map((slug) => (
                <a key={slug} href={`/${slug}`} className="chip" style={{ fontSize: 13, padding: '8px 14px' }}>
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}
                </a>
              ))}
              <a href="/" className="chip" style={{ fontSize: 13, padding: '8px 14px' }}>All Trades</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
