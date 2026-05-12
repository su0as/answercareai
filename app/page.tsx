import type { Metadata } from 'next'
import HomeLiveDemo from '@/components/HomeLiveDemo'
import HomeROICalc from '@/components/HomeROICalc'
import HomeRealCalls from '@/components/HomeRealCalls'
import HomeFAQ from '@/components/HomeFAQ'

export const metadata: Metadata = {
  title: 'AI Phone Agent for One-Person Trades | AnswerCare AI',
  description:
    'Stop losing jobs to voicemail. AI phone agent for solo trade operators — answers every call in under 2 seconds, qualifies the customer, books the job. 14 days free.',
}

// ─── Hero headline variants ───────────────────────────────────────────────────
function HeadlineRender() {
  return (
    <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
      Stop losing{' '}
      <span style={{ color: 'var(--pain)', position: 'relative', whiteSpace: 'nowrap' }}>
        $4,375<sup style={{ fontSize: '.4em', verticalAlign: 'super', fontWeight: 400, color: 'var(--muted)' }}>/mo</sup>
        <svg
          style={{ position: 'absolute', left: -4, right: -4, bottom: -6, width: 'calc(100% + 8px)' }}
          height="12" viewBox="0 0 200 12" preserveAspectRatio="none"
        >
          <path d="M2 9 Q 50 2, 100 7 T 198 6" stroke="var(--pain)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
      {' '}to voicemail.
    </h1>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────
const compCols = ['Voicemail', 'Hire receptionist', 'Generic IVR', 'AnswerCare']
const compRows: [string, string[]][] = [
  ['Cost / mo',              ['$0',        '$3,400',       '$80',       '$199']],
  ['Pickup time',            ['—',         '6 rings',      'instant',   '< 2 sec']],
  ['Available 24/7',         ['—',         '—',            'partial',   '✓ Always']],
  ['Knows your trade',       ['—',         '—',            '—',         '✓ Custom script']],
  ['Books in your calendar', ['—',         'manual',       '—',         '✓ Automatic']],
  ['Custom script for biz',  ['—',         'maybe in 1 yr','generic',   '✓ Day 1']],
  ['SMS to you + customer',  ['—',         'usually',      'rare',      '✓ Every call']],
  ['Handles a critical hour',['—',         '—',            '—',         '✓']],
  ['Approx cost-per-job',    ['∞ lost',    '$135',         '$80',       '~ $4']],
]

export default function HomePage() {
  return (
    <div>

      {/* ══ 01 HERO ══════════════════════════════════════════════════════════ */}
      <section data-screen-label="01 Hero" className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot pain" />For plumbers, electricians, HVAC, locksmiths · 24/7/365
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 64, alignItems: 'start' }}>

            {/* Left: headline + CTA */}
            <div>
              <HeadlineRender />

              <p style={{
                fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)',
                marginTop: 32, maxWidth: 520,
              }}>
                AnswerCare answers every call in under 2 seconds, qualifies the customer,
                books the job, and texts you the details — while you&apos;re on a ladder, under
                a sink, or halfway through a drive.
              </p>

              {/* Phone CTA block */}
              <div style={{
                marginTop: 40, padding: '20px 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
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
                  <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Start 14 days free <span className="arrow">→</span>
                  </a>
                  <a href="#demo" className="btn btn-ghost">Hear it work</a>
                </div>
              </div>

              {/* Metrics row */}
              <div style={{
                marginTop: 32,
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
                borderTop: '1px solid var(--line)', paddingTop: 24,
              }}>
                {[
                  ['< 2 sec', 'pickup time'],
                  ['24/7/365', 'always on'],
                  ['100%', 'calls logged + recorded'],
                  ['5 days', 'average setup'],
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
                Recordings anonymized · all calls reviewed by you
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
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div className="num" style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-.02em' }}>847</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
              ONE-TRUCK<br />OPERATIONS<br />RUNNING IT
            </div>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[
                'McNeil Plumbing', 'Apex HVAC Co.', 'Riverstone Electrical',
                "Hank's Locksmith", 'Sierra Roofing', 'Bluebird Pest Control',
                'Iron Tree Service', 'Northwest Septic', 'TwoBros Heating',
                'McNeil Plumbing', 'Apex HVAC Co.', 'Riverstone Electrical',
                "Hank's Locksmith", 'Sierra Roofing', 'Bluebird Pest Control',
                'Iron Tree Service', 'Northwest Septic', 'TwoBros Heating',
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
                <span className="dot pain" />The truth
              </div>
              <h2 style={{ maxWidth: 760 }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Most</span> trades miss{' '}
                <br />30–40% of inbound calls.
              </h2>
            </div>
            <p style={{ maxWidth: 360, color: 'var(--muted)', fontSize: 16, paddingTop: 12 }}>
              Each missed call is a job that never existed.
              Drag the sliders below — see what voicemail is actually costing your shop.
            </p>
          </div>
          <HomeROICalc />
        </div>
      </section>

      {/* ══ 04 STORY SCENE ═══════════════════════════════════════════════════ */}
      <section className="section" data-screen-label="04 Story" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>

            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}>
                <span className="dot pain" />A story
              </div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s 2:43 PM.<br />You&apos;re under a sink.
              </h2>
              <div style={{
                marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)',
                maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <p>A customer calls with an emergency lockout — a $185 job that needs someone on-site in an hour. Your phone rings twice. You can&apos;t reach it. They hit voicemail. They hang up.</p>
                <p>They call the next locksmith on Google. They book with him.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You just lost a job you didn&apos;t know existed.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  Hiring a receptionist costs $3,400/mo, goes home at 5 PM, and won&apos;t answer the call at 2:43.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '85%',   label: 'of voicemail callers never call back', accent: false },
                { n: '4–12×', label: 'how often a tech is unreachable in an average work day', accent: false },
                { n: '$4,200',label: 'average monthly revenue lost to voicemail', accent: true },
                { n: '67%',   label: 'of the missed calls go answered by a competitor', accent: false },
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
                <span className="serif" style={{ fontStyle: 'italic' }}>Hear</span> exactly what your customer hears.
              </h2>
            </div>
            <p style={{ maxWidth: 380, color: 'var(--muted)', paddingTop: 12 }}>
              Three recordings of the same service line, captured this week. Listen, then call our demo line yourself to test it live.
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
                Your four options for <br />handling calls.
              </h2>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ padding: '18px 24px', fontSize: 12, color: 'var(--muted)' }} className="mono">FEATURE</div>
              {compCols.map((c, i) => (
                <div key={c} style={{
                  padding: '18px 20px', textAlign: 'center',
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
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--accent)', color: '#fff',
                      fontSize: 10, fontWeight: 600, letterSpacing: '.08em',
                      padding: '4px 8px', borderRadius: 6,
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

          <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 18, letterSpacing: '.04em' }}>
            Based on 847 AnswerCare customers · receptionist data from BLS Q4 ·
            IVR pricing from average of 5 vendors · cost-per-job assumes 50 booked jobs / mo
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
                <br /><span className="serif" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>No port. No commitment.</span>
              </h2>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                n: '01', t: 'Setup', sub: 'Day 1 · 30 min',
                body: '30-minute discovery call. We learn your trade, service area, rates, job types, and how you want calls handled. We write your custom call script. You review and approve.',
              },
              {
                n: '02', t: 'Go live', sub: 'Day 1 · 1 hr',
                body: 'We forward your existing phone line. Every incoming call is answered in under 2 seconds. Bookings land in your calendar and your SMS inbox.',
              },
              {
                n: '03', t: '14 free days', sub: 'Days 2–15',
                body: 'Monthly billing starts on day 15 after go-live — not before. AnswerCare is live with real callers for two full weeks. Cancel before day 15 and you pay nothing beyond the $497 setup. Continue and you pay $199/month.',
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

      {/* ══ 08 PRICING ═══════════════════════════════════════════════════════ */}
      <section className="section" id="pricing" data-screen-label="08 Pricing">
        <div className="wrap-narrow">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow">
              <span className="dot accent" />Pricing
            </div>
            <h2 style={{ maxWidth: 700, margin: '0 auto' }}>
              One price. <span className="serif" style={{ fontStyle: 'italic' }}>No per-call fees.</span> No tiers.
            </h2>
          </div>

          <div style={{
            background: 'var(--ink)', color: '#F4F0E6',
            borderRadius: 24, padding: 48,
            display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative dots */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .05, pointerEvents: 'none' }}>
              <defs>
                <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* Left: price + features */}
            <div style={{ position: 'relative' }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}>Single plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
                <span className="num serif" style={{ fontSize: 'clamp(72px, 9vw, 128px)', lineHeight: 1, letterSpacing: '-.04em', color: '#fff' }}>$199</span>
                <span style={{ color: 'rgba(244,240,230,.7)', fontSize: 18 }}>/ month</span>
              </div>
              <div style={{
                display: 'inline-flex', gap: 8, alignItems: 'center',
                padding: '8px 14px', borderRadius: 999,
                background: 'rgba(31,68,255,.18)', border: '1px solid rgba(31,68,255,.4)',
                color: '#BFCFFF', fontSize: 13, fontWeight: 500, marginBottom: 28,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7B9CFF' }} />
                First 14 live days are free
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15.5 }}>
                {[
                  'Unlimited calls — never a per-call fee',
                  '24/7/365 coverage',
                  'Custom script for your trade',
                  'Bookings into your existing calendar',
                  'SMS notifications to tech + customer',
                  'Spam + robocall filtering',
                  'Monthly performance report',
                  'Cancel anytime — 7 days notice',
                ].map((l) => (
                  <div key={l} style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'rgba(244,240,230,.85)' }}>
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

            {/* Right: setup fee + CTAs */}
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: 18, padding: 28,
              }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'rgba(244,240,230,.55)', marginBottom: 12 }}>
                  ONE-TIME SETUP
                </div>
                <div className="num serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-.03em', color: '#fff' }}>$497</div>
                <p style={{ color: 'rgba(244,240,230,.7)', fontSize: 14, marginTop: 12 }}>
                  Discovery, script writing, voice tuning, calendar + SMS integration. Charged today, refundable if you cancel before day 15.
                </p>
              </div>

              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }} id="start">
                <a
                  href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ justifyContent: 'center', padding: '18px 24px', fontSize: 17 }}
                >
                  Start your 14 free days <span className="arrow">→</span>
                </a>
                <a href="https://calendly.com/answercare-ai/discovery-call" target="_blank" rel="noopener noreferrer" className="btn" style={{
                  background: 'transparent', color: '#F4F0E6',
                  border: '1px solid rgba(255,255,255,.18)',
                  justifyContent: 'center', padding: '18px 24px', fontSize: 17,
                }}>
                  Or book a 15-min setup call
                </a>
                <div className="mono" style={{ fontSize: 11, color: 'rgba(244,240,230,.5)', textAlign: 'center', letterSpacing: '.04em', marginTop: 6 }}>
                  No port-out. No long contracts. No surprise fees.
                </div>
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
                <span className="dot good" />Operators
              </div>
              <h2 style={{ maxWidth: 680 }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Quiet</span> phones make for loud pipelines.
              </h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                q: "First week, AnswerCare booked four jobs I would have missed. Paid for itself by Tuesday.",
                name: 'Marcus W.', biz: 'McNeil Plumbing · Boise, ID',
                stat: '+$3,200', statLabel: 'first week revenue',
                color: '#5A6F8E',
              },
              {
                q: "I stopped pulling over to answer the phone. My wife stopped fielding scheduling calls at dinner. That alone is worth it.",
                name: 'Devon R.', biz: 'Apex HVAC · Reno, NV',
                stat: '47 hrs', statLabel: 'reclaimed in month one',
                color: '#7A5B43',
              },
              {
                q: "I was paying a service for $480 that mostly just took messages. AnswerCare actually books the job. Different sport.",
                name: 'Hank S.', biz: "Hank's Locksmith · Sacramento, CA",
                stat: '−$281', statLabel: 'savings vs old service',
                color: '#3F5D4D',
              },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="serif" style={{ fontSize: 24, lineHeight: 1.25, letterSpacing: '-.01em', color: 'var(--ink)' }}>
                  &ldquo;{t.q}&rdquo;
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
                      fontSize: 14, fontWeight: 600,
                    }}>
                      {t.name.split(' ').map((s: string) => s[0]).join('')}
                    </div>
                    <div style={{ fontSize: 13.5 }}>
                      <div style={{ fontWeight: 500 }}>{t.name}</div>
                      <div style={{ color: 'var(--muted)', fontSize: 12 }}>{t.biz}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="num" style={{ fontSize: 22, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-.02em' }}>{t.stat}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em' }}>{t.statLabel}</div>
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
            <span className="dot pain" />Every ring you miss is a job your competitor books
          </div>
          <h2 style={{
            fontSize: 'clamp(48px, 6.4vw, 96px)', letterSpacing: '-.035em', lineHeight: .98,
          }}>
            Stop leaking jobs.<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>Pick up by Friday.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 540, margin: '24px auto 0' }}>
            Setup takes 30 minutes. Live by end of day. First 14 days free.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ padding: '18px 28px', fontSize: 17 }}
            >
              Start free →
            </a>
            <a href="tel:+17542276342" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Call our demo line: (754) 227-6342
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 24, letterSpacing: '.06em' }}>
            AVERAGE GO-LIVE: 5 DAYS · NO LONG CONTRACTS · CANCEL WITH 7 DAYS NOTICE
          </div>
        </div>
      </section>

    </div>
  )
}
