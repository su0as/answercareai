import type { Metadata } from 'next'
import HomeLiveDemo from '@/components/HomeLiveDemo'
import HomeROICalc from '@/components/HomeROICalc'
import HomeRealCalls from '@/components/HomeRealCalls'
import HomeFAQ from '@/components/HomeFAQ'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Missed-Call Revenue Recovery for Service Businesses | AnswerCare AI',
  description:
    'Every unanswered call is revenue your competitor books. AnswerCare answers every call in under 2 seconds, qualifies the caller, and books the job — for HVAC, plumbing, electrical, property management, dental practices, and law firms.',
}

// ─── Hero headline ────────────────────────────────────────────────────────────
function HeadlineRender() {
  return (
    <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
      How much revenue walks out the door every time a call goes{' '}
      <span className="serif" style={{ fontStyle: 'italic', color: 'var(--pain)', position: 'relative', whiteSpace: 'nowrap' }}>
        unanswered?
        <svg
          style={{ position: 'absolute', left: -2, right: -2, bottom: -6, width: 'calc(100% + 4px)' }}
          height="12" viewBox="0 0 200 12" preserveAspectRatio="none"
        >
          <path d="M2 9 Q 50 2, 100 7 T 198 6" stroke="var(--pain)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    </h1>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────
const compCols = ['Voicemail', 'Answering service', 'Self-serve AI tools', 'AnswerCare']
const compRows: [string, string[]][] = [
  ['Cost / mo',                        ['$0',         '$200–600',       '$49–99',             '$500–1,500']],
  ['Picks up in < 2 sec',              ['—',          '2–5 rings',      '< 3 sec',            '✓ Every time']],
  ['Available 24/7',                   ['—',          'varies',         '✓',                  '✓ Always']],
  ['Knows your business + script',     ['—',          'generic script', 'basic prompts',       '✓ Custom per line']],
  ['Books into your calendar',         ['—',          'takes message',  '—',                  '✓ Automatic']],
  ['Routes details to your team',      ['—',          'sometimes',      '—',                  '✓ Every call']],
  ['Recovers your old missed leads',   ['—',          '—',              '—',                  '✓ Included in Scale']],
  ['Setup in < 1 day',                 ['instant',    '1–2 weeks',      'self-serve (hours)', '✓ Same day']],
  ['Done-for-you — no config',         ['—',          '✓',              '—',                  '✓']],
  ['Approx cost per booked job',       ['∞ lost',     '~$45',           '~$18',               '~$9–28']],
]

export default function HomePage() {
  return (
    <div>

      {/* ══ 01 HERO ══════════════════════════════════════════════════════════ */}
      <section data-screen-label="01 Hero" className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot pain" />For growing service businesses, practices &amp; property managers · every call answered, every job captured
          </div>

          <div className="hero-grid">

            {/* Left: headline + CTA */}
            <div>
              <HeadlineRender />

              <p style={{
                fontSize: 19, lineHeight: 1.55, color: 'var(--ink-2)',
                marginTop: 32, maxWidth: 520,
              }}>
                AnswerCare answers every call in under 2 seconds — daytime overflow, after-hours, lunch rushes,
                holidays — qualifies the caller, books the job, and routes the details to your team. You stop
                paying for missed calls and start recovering the revenue they were worth.
              </p>

              {/* Phone CTA block */}
              <div className="hero-cta-block" style={{
                marginTop: 40, padding: '20px 24px',
                border: '1px solid var(--line)', borderRadius: 18,
                background: 'linear-gradient(180deg, #FFFEFB, #FBFAF6)',
              }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Try the live demo</div>
                  <a href="tel:+17542276342" className="serif num" style={{
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    letterSpacing: '-.02em',
                    color: 'var(--accent)',
                  }}>
                    +1 (754) 227-6342
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="#calc" className="btn btn-primary">
                    See your missed-revenue number <span className="arrow">→</span>
                  </a>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Book a 15-min revenue audit</a>
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12, letterSpacing: '.04em' }}>
                  Plans from $500/mo · Or start with a performance pilot — pay only for jobs we recover
                </div>
              </div>

              {/* Metrics row */}
              <div className="metrics-strip">
                {[
                  ['< 2 sec', 'pickup time'],
                  ['24/7/365', 'always on'],
                  ['100%', 'calls logged + recorded'],
                  ['1 day', 'average go-live'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="num" style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-.02em' }}>{v}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, letterSpacing: '.04em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: live demo */}
            <div style={{ position: 'sticky', top: 90 }} id="demo">
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="dot" />Watching: a real call, 6 seconds ago
              </div>
              <HomeLiveDemo autoplay={true} />
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12, letterSpacing: '.04em', textAlign: 'center' }}>
                Same engine handles emergency trades calls, new-patient intake, tenant maintenance requests, and new-client screening · all calls reviewed by you
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 02 TRUST BAR ═════════════════════════════════════════════════════ */}
      <section className="section-tight" data-screen-label="02 Trust" style={{
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        background: 'rgba(14,14,12,.02)',
      }}>
        <div className="wrap trust-grid">
          <div>
            <div className="num" style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-.02em' }}>[VERIFY]</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
              GROWING TEAMS<br />RUNNING IT<br />&nbsp;
            </div>
          </div>
          {/* ILLUSTRATIVE — swap for real clients as won */}
          <div className="marquee">
            <div className="marquee-track">
              {[
                'Meridian HVAC Group', 'Crestview Property Mgmt', 'Lakeside Dental Associates',
                'Thornton & Park Law', 'Summit Plumbing Co.', 'Harborview Pest Control',
                'Keystone Electrical Services', 'Pineridge Roofing', 'Atlas Property Group',
                'Meridian HVAC Group', 'Crestview Property Mgmt', 'Lakeside Dental Associates',
                'Thornton & Park Law', 'Summit Plumbing Co.', 'Harborview Pest Control',
                'Keystone Electrical Services', 'Pineridge Roofing', 'Atlas Property Group',
              ].map((n, i) => (
                <span key={i} className="serif" style={{
                  fontSize: 28, color: 'var(--ink-2)', letterSpacing: '-.01em', whiteSpace: 'nowrap',
                  fontStyle: i % 2 ? 'italic' : 'normal',
                }}>
                  {n}
                  <span style={{ margin: '0 32px', color: 'var(--muted-2)' }}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 03 ROI CALCULATOR ════════════════════════════════════════════════ */}
      <section className="section" id="calc" data-screen-label="03 ROI">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot pain" />The leak
              </div>
              <h2 style={{ maxWidth: 760 }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Most</span> growing businesses miss{' '}
                <br />25–40% of inbound calls during peak hours and after-hours.
              </h2>
            </div>
            <p style={{ maxWidth: 360, color: 'var(--muted)', fontSize: 16, paddingTop: 12 }}>
              Industry estimates. During overflow, lunch, and after-hours, each missed call is a job, patient, tenant request,
              or new client that quietly went to a competitor. Adjust the sliders to your real numbers.
            </p>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* ══ 04 STORY SCENE ═══════════════════════════════════════════════════ */}
      <section className="section" data-screen-label="04 Story" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">

            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}>
                <span className="dot pain" />A story
              </div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s 2:43 PM.<br />Your front desk is on two other lines.
              </h2>
              <div style={{
                marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)',
                maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <p>A caller with an urgent, high-value need — emergency repair, new-patient appointment, flooding tenant, new-client inquiry — rings through. Three rings. Voicemail. Hang up.</p>
                <p>They call the next name on Google and book there.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You just lost revenue you never saw on a report.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  A human answering service costs $200–600/mo — and takes a message. It doesn&apos;t book the job, fill the appointment, or capture the tenant.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '100×',  label: 'more likely to reach a lead within 5 min vs. 30 min (MIT/InsideSales Lead Response Study; HBR 2011)', accent: false },
                { n: '25–40%', label: 'of calls go unanswered during peak hours and after-hours — industry estimates', accent: false },
                { n: '$900+', label: 'avg plan cost — one recovered booking typically covers 1–3 months', accent: true },
                { n: '1st',   label: 'business to answer usually wins the job — the first responder advantage (Harvard Business Review, 2011)', accent: false },
              ].map(({ n, label, accent }) => (
                <div key={n} style={{
                  padding: '22px 24px',
                  background: accent ? 'rgba(31,68,255,.18)' : 'rgba(255,255,255,.04)',
                  border: accent ? '1px solid rgba(31,68,255,.45)' : '1px solid rgba(255,255,255,.08)',
                  borderRadius: 16,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
                }}>
                  <div className="num serif" style={{
                    fontSize: 'clamp(40px, 4.4vw, 64px)', letterSpacing: '-.03em', lineHeight: 1, color: '#fff',
                  }}>
                    {n}
                  </div>
                  <div style={{ fontSize: 14, color: 'rgba(244,240,230,.78)', maxWidth: 240, textAlign: 'right' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ 05 REAL CALLS ════════════════════════════════════════════════════ */}
      <section className="section" id="proof" data-screen-label="05 Real calls">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot good" />Real calls. Anonymized.
              </div>
              <h2 style={{ maxWidth: 720 }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Hear</span> exactly what your caller hears.
              </h2>
            </div>
            <p style={{ maxWidth: 380, color: 'var(--muted)', paddingTop: 12 }}>
              Illustrative samples across business types — after-hours emergencies, new-patient intake, tenant requests, new-client screening. Call our demo line to test it live.
            </p>
          </div>
          <HomeRealCalls />
        </div>
      </section>

      {/* ══ 06 COMPARISON ════════════════════════════════════════════════════ */}
      <section className="section" data-screen-label="06 Compare">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot" />Side-by-side
              </div>
              <h2 style={{ maxWidth: 800 }}>
                How AnswerCare stacks up <br />against your real options.
              </h2>
            </div>
          </div>

          <div className="table-scroll">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ padding: '18px 24px', fontSize: 12, color: 'var(--muted)' }} className="mono">FEATURE</div>
              {compCols.map((c, i) => (
                <div key={c} style={{
                  padding: i === compCols.length - 1 ? '34px 20px 18px' : '18px 20px',
                  textAlign: 'center',
                  background: i === compCols.length - 1 ? 'var(--ink)' : 'transparent',
                  color: i === compCols.length - 1 ? 'var(--bg)' : 'var(--ink)',
                  fontWeight: i === compCols.length - 1 ? 600 : 500,
                  fontSize: 14,
                  borderLeft: i ? '1px solid var(--line-soft)' : 'none',
                  position: 'relative',
                }}>
                  {c}
                  {i === compCols.length - 1 && (
                    <div style={{
                      position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--accent)', color: '#fff',
                      fontSize: 10, fontWeight: 600, letterSpacing: '.08em',
                      padding: '4px 9px', borderRadius: 6,
                      lineHeight: 1,
                    }} className="mono">RECOMMENDED</div>
                  )}
                </div>
              ))}
            </div>
            {/* Data rows */}
            {compRows.map((row, ri) => (
              <div key={ri} style={{
                display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)',
                borderBottom: ri < compRows.length - 1 ? '1px solid var(--line-soft)' : 'none',
              }}>
                <div style={{ padding: '18px 24px', fontSize: 14.5, color: 'var(--ink-2)' }}>{row[0]}</div>
                {row[1].map((cell, ci) => (
                  <div key={ci} style={{
                    padding: '18px 20px', textAlign: 'center', fontSize: 14.5,
                    background: ci === 3 ? 'rgba(31,68,255,.04)' : 'transparent',
                    borderLeft: ci ? '1px solid var(--line-soft)' : 'none',
                    color: cell === '—' ? 'var(--muted-2)' : ci === 3 ? 'var(--accent-ink)' : 'var(--ink)',
                    fontWeight: ci === 3 ? 600 : 400,
                  }}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>{/* end table-scroll */}
          <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 18, letterSpacing: '.04em' }}>
            Answering service pricing from industry averages · Self-serve AI tools public pricing $49–99/mo ·
            cost-per-job assumes 50 booked jobs/mo · AnswerCare tiers $500–1,500/mo
          </div>
        </div>
      </section>

      {/* ══ 07 HOW IT WORKS ══════════════════════════════════════════════════ */}
      <section className="section" id="how" data-screen-label="07 How" style={{
        background: 'rgba(14,14,12,.02)',
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>How it works</div>
              <h2 style={{ maxWidth: 780 }}>
                Live by the end of the day.{' '}
                <br /><span className="serif" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Revenue in the first week.</span>
              </h2>
            </div>
          </div>

          <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 32, letterSpacing: '.03em', maxWidth: 640 }}>
            Responding within 5 minutes makes a business up to 100× more likely to reach a lead than waiting 30 minutes — MIT/InsideSales Lead Response Study; Harvard Business Review, 2011.
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                n: '01', t: 'Revenue audit', sub: 'Day 1 · 15 min',
                body: 'We review your call volume, after-hours gaps, average job value, and your existing list of old or missed leads. We map exactly where revenue is leaking — before we charge you a dollar.',
              },
              {
                n: '02', t: 'Go live + reactivate', sub: 'Day 1 · 1 hr',
                body: 'We answer overflow and after-hours calls in under 2 seconds — and launch a reactivation campaign on your dormant leads. Bookings route directly to your team and calendar.',
              },
              {
                n: '03', t: 'Prove it in revenue', sub: 'Days 2–15',
                body: 'You see booked jobs and recovered revenue, attributed and logged. Continue on a monthly plan or stay on performance — your call. If you cancel before day 15, you pay nothing beyond the onboarding fee.',
              },
            ].map((s) => (
              <div key={s.n} className="card" style={{ padding: '28px 28px 32px', position: 'relative' }}>
                <div className="num serif" style={{ fontSize: 64, lineHeight: 1, color: 'var(--muted-2)', letterSpacing: '-.03em' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginTop: 14 }}>{s.sub}</div>
                <h3 style={{ marginTop: 6, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07b PERFORMANCE PILOT ════════════════════════════════════════════ */}
      <section className="section" id="pilot" data-screen-label="07b Pilot" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap-narrow">
          <div style={{
            background: 'var(--ink)', color: '#F4F0E6',
            borderRadius: 24, padding: '48px 52px',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .05, pointerEvents: 'none' }}>
              <defs>
                <pattern id="dots-pilot" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-pilot)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 680 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}>
                <span className="dot good" />No retainer. No risk.
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Not ready to commit?<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>Start with a performance pilot.</span>
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                Give us your list of missed calls and old leads. We re-contact them, qualify them, and book
                the ready-to-buy ones onto your calendar. You pay only a share of the revenue we recover —
                or a flat fee per booked job. No retainer. No risk. If we don&apos;t book you jobs, you don&apos;t pay.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                  Start a performance pilot <span className="arrow">→</span>
                </a>
                <a href="#calc" className="btn" style={{
                  background: 'rgba(255,255,255,.08)', color: '#F4F0E6',
                  border: '1px solid rgba(255,255,255,.18)',
                  padding: '16px 24px', fontSize: 16,
                }}>
                  See your revenue number first
                </a>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(244,240,230,.45)', marginTop: 20, letterSpacing: '.04em' }}>
                Performance pilots convert to a monthly plan once we&apos;ve proven the revenue. Available to businesses with an existing customer or lead list.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 08 PRICING ═══════════════════════════════════════════════════════ */}
      <section className="section" id="pricing" data-screen-label="08 Pricing">
        <div className="wrap">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow">
              <span className="dot accent" />Pricing
            </div>
            <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
              Pricing that pays for itself <span className="serif" style={{ fontStyle: 'italic' }}>in recovered jobs.</span>
            </h2>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
            {[
              {
                name: 'Recover',
                price: '$500',
                tag: null,
                desc: 'After-hours + overflow answered. Jobs booked. Revenue attributed.',
                features: [
                  'After-hours + overflow call answering',
                  'Caller qualification + booking to calendar',
                  'SMS/email routing to your team',
                  'Spam + robocall filtering',
                  'Monthly recovered-revenue report',
                  'Cancel anytime — 7 days notice',
                ],
                note: 'Best for a single busy location.',
                cta: 'Start recovering →',
              },
              {
                name: 'Grow',
                price: '$900',
                tag: 'MOST POPULAR',
                desc: '24/7 coverage, multi-line routing, CRM integration, quarterly optimization.',
                features: [
                  'Everything in Recover',
                  '24/7 coverage — no gaps',
                  'Multi-location / multi-line routing',
                  'Custom scripts per service line',
                  'CRM + dispatch integration',
                  'Quarterly script + performance review',
                ],
                note: 'Best for 3–10 trucks or a multi-provider practice.',
                cta: 'Start growing →',
              },
              {
                name: 'Scale',
                price: '$1,500',
                tag: null,
                desc: 'Dedicated numbers, dormant-lead reactivation, bilingual, dedicated success manager.',
                features: [
                  'Everything in Grow',
                  'Dedicated number per location',
                  'Priority escalation rules',
                  'Dormant-lead reactivation campaigns',
                  'Dedicated success manager',
                  'Bilingual handling (EN + ES)',
                ],
                note: 'Best for property managers, multi-site groups, high-volume intake.',
                cta: 'Start scaling →',
              },
            ].map((tier, i) => (
              <div key={tier.name} className="card" style={{
                padding: 0, overflow: 'hidden',
                background: i === 1 ? 'var(--ink)' : undefined,
                color: i === 1 ? '#F4F0E6' : undefined,
                position: 'relative',
              }}>
                {tier.tag && (
                  <div style={{
                    background: 'var(--accent)', color: '#fff',
                    fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
                    padding: '8px 20px', textAlign: 'center',
                  }} className="mono">{tier.tag}</div>
                )}
                <div style={{ padding: '28px 28px 32px' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: i === 1 ? 'rgba(244,240,230,.55)' : 'var(--muted)', marginBottom: 8 }}>
                    {tier.name.toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                    <span className="num serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-.03em', color: i === 1 ? '#fff' : 'var(--ink)' }}>
                      {tier.price}
                    </span>
                    <span style={{ color: i === 1 ? 'rgba(244,240,230,.6)' : 'var(--muted)', fontSize: 16 }}>/mo</span>
                  </div>
                  <p style={{ fontSize: 14, color: i === 1 ? 'rgba(244,240,230,.7)' : 'var(--muted)', marginBottom: 20, lineHeight: 1.5 }}>
                    {tier.desc}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                    {tier.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5 }}>
                        <span style={{
                          width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                          background: i === 1 ? 'rgba(159,226,176,.18)' : 'rgba(14,14,12,.06)',
                          color: i === 1 ? '#9FE2B0' : 'var(--ink)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700,
                        }}>✓</span>
                        <span style={{ color: i === 1 ? 'rgba(244,240,230,.85)' : 'var(--ink-2)', lineHeight: 1.45 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: i === 1 ? 'rgba(244,240,230,.45)' : 'var(--muted)', marginBottom: 20, fontStyle: 'italic' }}>
                    {tier.note}
                  </div>
                  <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
                    className={`btn ${i === 1 ? 'btn-accent' : ''}`}
                    style={{
                      justifyContent: 'center', width: '100%',
                      ...(i !== 1 ? { background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)' } : {}),
                    }}>
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Setup fee + risk reversal */}
          <div style={{
            marginTop: 28, padding: '24px 28px',
            border: '1px solid var(--line)', borderRadius: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 20,
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 6 }}>ONE-TIME ONBOARDING FEE</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>$497–$997 depending on tier</div>
              <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
                Discovery, custom scripts, voice tuning, calendar + CRM wiring. Non-refundable — this is the real work.
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', maxWidth: 340, lineHeight: 1.55 }}>
                Or skip the retainer entirely — start with a{' '}
                <a href="#pilot" style={{ color: 'var(--accent)', fontWeight: 500 }}>performance pilot</a>{' '}
                and pay only for recovered jobs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 09 TESTIMONIALS ══════════════════════════════════════════════════ */}
      <section className="section" data-screen-label="09 Testimonials">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <span className="dot good" />Results
              </div>
              <h2 style={{ maxWidth: 680 }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Recovered</span> jobs, attributed and logged.
              </h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                segment: 'Home Services (HVAC / Plumbing)',
                color: '#5A6F8E',
              },
              {
                segment: 'Dental / Medical Practice',
                color: '#7A5B43',
              },
              {
                segment: 'Property Management',
                color: '#3F5D4D',
              },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="serif" style={{ fontSize: 20, lineHeight: 1.35, letterSpacing: '-.01em', color: 'var(--muted)', fontStyle: 'italic' }}>
                  [REAL TESTIMONIAL NEEDED]
                </div>
                <div style={{
                  marginTop: 'auto', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-end', gap: 16,
                  paddingTop: 12, borderTop: '1px solid var(--line-soft)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.color}, var(--ink))`,
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 600,
                    }}>
                      ?
                    </div>
                    <div style={{ fontSize: 13.5 }}>
                      <div style={{ fontWeight: 500 }}>[Name, Title]</div>
                      <div style={{ color: 'var(--muted)', fontSize: 12 }}>{t.segment}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="num" style={{ fontSize: 18, fontWeight: 600, color: 'var(--muted)', letterSpacing: '-.02em' }}>—</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em' }}>add real result</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10 FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="section" id="faq" data-screen-label="10 FAQ">
        <div className="wrap-narrow">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div>
              <h2>Real questions, real answers.</h2>
            </div>
          </div>
          <HomeFAQ />
        </div>
      </section>

      {/* ══ 11 FINAL CTA ═════════════════════════════════════════════════════ */}
      <section className="section" data-screen-label="11 CTA" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 18, justifyContent: 'center', display: 'inline-flex' }}>
            <span className="dot pain" />Every unanswered call is revenue your competitor books
          </div>
          <h2 style={{
            fontSize: 'clamp(48px, 6.4vw, 96px)', letterSpacing: '-.035em', lineHeight: .98,
          }}>
            Stop the leak.<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>Start recovering.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 540, margin: '24px auto 0' }}>
            Get your missed-revenue number in 15 minutes. Start with a pilot — pay only for what we recover.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={CALENDLY_SETUP_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}
            >
              Start a performance pilot →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a revenue audit
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 24, letterSpacing: '.06em' }}>
            GO LIVE IN 1 DAY · NO LONG CONTRACTS · CANCEL WITH 7 DAYS NOTICE
          </div>
        </div>
      </section>

    </div>
  )
}
