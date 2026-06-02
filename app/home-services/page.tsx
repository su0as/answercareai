import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Missed-Revenue Recovery for Home Services — HVAC, Plumbing, Electrical & More | AnswerCare AI',
  description: 'Your techs are on jobs and your office can\'t catch every line during peak season. AnswerCare catches overflow and after-hours calls, books the high-ticket jobs, and recovers the revenue your competitors are picking up.',
  keywords: 'answering service home services, hvac answering service, plumbing phone answering, electrical contractor answering, home service overflow answering, after hours home services',
  openGraph: {
    title: 'Missed-Revenue Recovery for Home Services | AnswerCare AI',
    description: 'Overflow and after-hours calls answered, high-ticket jobs booked, revenue your competitors were picking up — now yours.',
    url: 'https://www.answercareai.com/home-services',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/home-services' },
}

const trades = [
  { slug: 'plumbers',        label: 'Plumbers',          icon: '🔧', stat: '$385 avg ticket · emergency-heavy' },
  { slug: 'hvac',            label: 'HVAC',               icon: '❄️', stat: '71% emergency calls · seasonal peaks' },
  { slug: 'electricians',    label: 'Electricians',       icon: '⚡', stat: '87% voicemail hangup · $450+ avg job' },
  { slug: 'locksmiths',      label: 'Locksmiths',         icon: '🔑', stat: '94% won\'t wait · high urgency' },
  { slug: 'roofers',         label: 'Roofers',            icon: '🏠', stat: '$4,200 avg job · storm-season spikes' },
  { slug: 'pest-control',    label: 'Pest Control',       icon: '🐛', stat: '3× same-day close rate' },
  { slug: 'garage-door',     label: 'Garage Door',        icon: '🚪', stat: '71% emergency calls · same-day jobs' },
  { slug: 'appliance-repair',label: 'Appliance Repair',   icon: '🫙', stat: '$195 avg ticket · repeat customers' },
  { slug: 'septic',          label: 'Septic Service',     icon: '🌊', stat: '55% emergency calls · high urgency' },
]

const faq = [
  { q: 'My office team already handles scheduling — how does this work alongside them?', a: 'AnswerCare handles overflow and after-hours — the calls your team can\'t get to when they\'re on another line, at lunch, or after close. When your office is available, they take the call. When they\'re not, AnswerCare catches it. You never miss a job again.' },
  { q: 'Does AnswerCare know our trade, service area, and pricing?', a: 'Yes. During onboarding, we build a custom script for your trade — the specific call types you handle, your service area zip codes, your pricing by service type, your scheduling availability, and how you want emergency calls escalated. The script is yours to review and approve before anything goes live.' },
  { q: 'How does it handle emergency calls at 2 AM?', a: 'Emergency calls are answered in under 2 seconds regardless of time. For true emergencies (flooding, gas smell, no heat in winter), AnswerCare can be configured to ring your on-call tech directly — bypassing the booking queue. For non-critical after-hours jobs, it books the appointment and texts your team. You define what "emergency" means for your operation.' },
  { q: 'We have seasonal peaks — can it handle volume spikes?', a: 'Yes. Unlike a human answering service with limited operator capacity, AnswerCare handles simultaneous calls without queue wait times or overflow to voicemail. Summer AC emergency season, winter pipe freeze season — volume spikes are handled the same as any other day.' },
  { q: 'What does "performance pilot" mean for a home services shop?', a: 'Give us your list of missed calls from the last 30–90 days. We re-contact those leads, identify the ones still looking for service, and book the ready-to-hire ones into your schedule. You pay per job booked — no retainer. Most shops convert to a monthly plan after seeing the first week of results.' },
]

export default function HomeServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Missed-Revenue Recovery for Home Services',
        description: 'AnswerCare AI answers overflow and after-hours calls for home service businesses — HVAC, plumbing, electrical, roofing, and more — booking high-ticket jobs and recovering missed revenue.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Home Services Call Answering & Revenue Recovery',
        audience: { '@type': 'BusinessAudience', audienceType: 'Home service business owners and office managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For home service businesses · overflow + after-hours · every job captured
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Missed-Revenue Recovery<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>for Home Services.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                Your techs are on jobs and your office can&apos;t catch every line during peak season.
                AnswerCare catches overflow and after-hours calls, books the high-ticket jobs your competitors
                are picking up, and recovers the revenue you&apos;re leaving on the table.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['9 trades','supported']].map(([v,l]) => (
                  <div key={l}>
                    <div className="num" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-.02em' }}>{v}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, letterSpacing: '.04em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade grid */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>TRADE-SPECIFIC PAGES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {trades.map((t, i) => (
                  <a key={t.slug} href={`/${t.slug}`} style={{
                    padding: '18px 18px',
                    borderBottom: i < 6 ? '1px solid var(--line-soft)' : 'none',
                    borderRight: (i % 3) < 2 ? '1px solid var(--line-soft)' : 'none',
                    display: 'block', textDecoration: 'none',
                    transition: 'background .12s ease',
                  }}>
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{t.icon}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{t.label}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2, letterSpacing: '.04em' }}>{t.stat}</div>
                  </a>
                ))}
              </div>
              <div style={{ padding: '14px 22px', borderTop: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                  More trades supported — <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 500 }}>ask on a revenue audit</a>
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
                It&apos;s 2:43 PM.<br />Your team is slammed on jobs.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>A homeowner calls with an emergency repair — a high-ticket job that needs someone on-site today. Your office line rings through to voicemail. They hang up and call the next contractor on Google.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You just lost a job you didn&apos;t know existed.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  A human answering service costs $200–600/mo — and takes a message. It doesn&apos;t book the job. Your competitor does.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '85%', label: 'of voicemail callers never call back [VERIFY]', accent: false },
                { n: '25–40%', label: 'of inbound calls go unanswered during peak hours [VERIFY STAT]', accent: false },
                { n: '$900', label: 'Grow plan — one recovered high-ticket job pays for 3+ months', accent: true },
                { n: 'mins', label: 'emergency callers book with a competitor within minutes of hitting voicemail', accent: false },
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
            <div><div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot pain" />Your numbers</div><h2>What are unanswered calls costing your shop?</h2></div>
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
              { n: '01', t: 'Revenue audit — 15 min', body: 'We map your call volume, peak-hour gaps, average job value, and any list of missed calls. You see exactly where revenue is leaking before you spend a dollar.' },
              { n: '02', t: 'Go live + custom script', body: 'We learn your trade, service area, rates, and scheduling. Every overflow and after-hours call answered in under 2 seconds, job booked, transcript texted to your team.' },
              { n: '03', t: 'Prove it in revenue', body: 'Booked jobs, recovered leads, revenue attributed. Continue on a plan or stay on performance. Cancel anytime with 7 days notice.' },
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
              <defs><pattern id="dots-hs" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-hs)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your missed call list.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll turn them into booked jobs.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact your list of missed or old leads, identify who still needs service, and book the ready-to-hire ones into your schedule. You pay per job booked — no retainer. If we don&apos;t book you jobs, you don&apos;t pay.
              </p>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                Start a performance pilot →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trade pages nav */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Trade-specific pages</div><h2>Built for your exact trade.</h2></div>
            <p style={{ maxWidth: 340, color: 'var(--muted)', fontSize: 16 }}>Each page has trade-specific call types, pricing context, emergency handling, and FAQ.</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {trades.map(t => (
              <a key={t.slug} href={`/${t.slug}`} className="card" style={{ padding: '24px 26px', display: 'block', textDecoration: 'none', transition: 'border-color .15s ease' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{t.label}</h3>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 12 }}>{t.stat}</div>
                <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>View {t.label.toLowerCase()} page →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--muted)' }}>
              [REAL TESTIMONIAL NEEDED — owner or office manager of a 3–10 truck home services shop]
            </div>
            <div style={{ marginTop: 20, fontSize: 14, color: 'var(--muted)' }}>[Name, Title · Company · Trade]</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions home service owners ask.</h2></div></div>
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
            Every unanswered call is a job your competitor books.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you exactly what overflow and after-hours calls are costing your shop.
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
