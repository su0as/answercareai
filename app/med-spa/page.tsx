import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'New-Client Recovery for Med Spas & Aesthetic Clinics',
  description: 'Missed consult requests cost med spas thousands monthly. AnswerCare answers after-hours calls, books consultations, and recovers dormant leads.',
  keywords: 'answering service med spa, aesthetic clinic phone answering, med spa appointment booking, cosmetic clinic overflow answering',
  openGraph: {
    title: 'New-Client Recovery for Med Spas & Aesthetic Clinics | AnswerCare AI',
    description: 'Every missed consultation request is thousands in treatment revenue. We answer overflow and after-hours and book them in.',
    url: 'https://www.answercareai.com/med-spa',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/med-spa' },
}

const faq = [
  {
    q: 'A caller saw my ad but asks about a treatment I don\'t offer — what happens?',
    a: 'The agent follows your approved service list and will politely clarify what your clinic does offer, then offer to book them for a consultation to discuss the best option for their goals. We never promise treatments you haven\'t authorized.',
  },
  {
    q: 'Will clients know they\'re not speaking with a live receptionist?',
    a: 'Most won\'t — and you control the introduction. The voice can introduce itself as "the booking line for [Your Clinic Name]" or however you prefer. We show you the exact script and you approve it before anything goes live.',
  },
  {
    q: 'Can it handle callers asking for price quotes or package comparisons?',
    a: 'Yes — we build a Q&A script from your actual service menu and pricing. For nuanced consultations or custom packages, the agent collects the caller\'s name and interest and books them for a complimentary consultation where your team can close in person.',
  },
  {
    q: 'How is client information handled on calls?',
    /* [internal: data handling — legal review recommended before making specific compliance claims] */
    a: 'All call data is encrypted in transit and at rest. We can share our security documentation during onboarding. If your clinic has specific data handling or compliance requirements, please review them with counsel before onboarding.',
  },
  {
    q: 'I run seasonal promotions — can the script be updated quickly?',
    a: 'Yes. You can request script updates any time via email or your client dashboard. Promotion changes typically go live within one business day. We recommend giving us a 48-hour lead before a campaign launches so everything is tested before traffic spikes.',
  },
]

export default function MedSpaPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'New-Client Call Recovery for Med Spas & Aesthetic Clinics',
        description: 'AnswerCare AI answers overflow and after-hours calls for med spas and aesthetic clinics, booking new client consultations directly into the practice scheduler.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Med Spa Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Med spa owners and aesthetic clinic managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For med spas &amp; aesthetic clinics · turn every ad click into a booked consultation
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Stop Paying for Clicks<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>That Go to Voicemail.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                Your ads run around the clock. Your front desk doesn&apos;t.
                Every missed call after hours is a paid lead handed directly to the clinic that picks up.
                AnswerCare answers 24/7, books new consultations into your scheduler, and turns ad spend into booked revenue.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$1,200+','avg treatment value']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR MED SPAS</span>
              </div>
              {[
                { type: 'New consultation request', val: '$500–2,000+ treatment value', urgent: true },
                { type: 'After-hours inquiry via ad click', val: 'Captured + consultation booked', urgent: true },
                { type: 'Membership / package inquiry', val: 'Qualified, booked, or logged', urgent: false },
                { type: 'Reschedule / cancellation', val: 'Rescheduled, slot recovered', urgent: false },
                { type: 'Returning client booking', val: 'Booked into scheduler directly', urgent: false },
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
                  Recommended plan: <strong>Grow ($900/mo)</strong> — 24/7, scheduler integration, quarterly optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad-spend waste story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />Where your ad budget goes to die</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s 9:15 PM on a Tuesday.<br />Your Instagram campaign is live.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>You&apos;re paying $15 per click. A prospective client sees your Botox ad, taps "Call now," and hears four rings — then voicemail. She books with the next clinic whose number is already in her recent calls.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You paid $15 to send a client to your competitor.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  With AnswerCare: the call is answered in under 2 seconds regardless of the time. The new client is welcomed, her interest is captured, and a consultation is booked — turning your ad spend into confirmed revenue instead of wasted clicks.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '$15+', label: 'average cost per click on aesthetic social ads — wasted every time the call hits voicemail', accent: false },
                { n: '9PM', label: 'peak time for aesthetic clinic inquiries — when your front desk has long clocked out', accent: false },
                { n: '1st', label: 'clinic to respond after an ad click books the consultation — speed is the whole conversion', accent: true },
                { n: '0', label: 'paid clicks should ever end in voicemail', accent: false },
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
              <h2>What are missed consultation calls costing your clinic?</h2>
            </div>
          </div>
          <HomeROICalc
            valueLabel="Average treatment or package value"
            valueSub="Typical revenue per consultation or service booked."
            defaultValue={1200}
            benchmarkNote="Aesthetic clinics close 35–50% of answered consultation requests."
            defaultCloseRate={40}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Ad-spend audit — 15 min', body: 'We look at your call volume, campaign hours, average treatment value, and missed inquiry backlog. You see exactly how much ad spend is leaking to competitors via unanswered calls.' },
              { n: '02', t: 'Go live overnight', body: 'New-client booking script, consultation capture, after-hours coverage — configured for your clinic and connected to your scheduler. Live same day, before your next campaign goes out.' },
              { n: '03', t: 'Every click converts', body: 'Every ad-driven call answered, every inquiry qualified, every consultation booked — attributed by source. Your ad spend finally works around the clock.' },
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
              <defs><pattern id="dots-ms" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-ms)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your list of unanswered inquiries.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll turn them into booked consultations.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact your missed or lapsed leads — people who clicked your ad, called once, hit voicemail, and disappeared. We re-qualify them and book the consultation. You pay only for consultations booked.
              </p>
              <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 24px', fontSize: 16 }}>
                Start a performance pilot →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--ink)' }}>
              &ldquo;We were running paid ads but bleeding leads after hours. People were clicking, calling, hitting voicemail, and booking down the street. AnswerCare plugged that hole in week one. Eight new consultations in the first three weeks — all from calls we would have missed.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>RM</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Rachel M.</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Owner · Glow Aesthetics · Scottsdale, AZ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions med spa owners ask.</h2></div></div>
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
            Your ads are running. Make sure someone&apos;s answering.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you exactly how many ad-driven calls your clinic is losing after hours.
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
