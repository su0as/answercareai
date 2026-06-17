import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Partner & Reseller Program — Refer or Resell AnswerCare',
  description: 'Earn recurring revenue referring or reselling AnswerCare AI to service businesses. Agency, consultant, and white-label partnerships available.',
  keywords: 'AnswerCare partner program, reseller AI answering service, agency partner answering service, refer AnswerCare',
  openGraph: {
    title: 'Partner & Reseller Program | AnswerCare AI',
    description: 'Earn recurring revenue referring or reselling AnswerCare AI. Agency, consultant, and white-label partnerships available.',
    url: 'https://www.answercareai.com/partners',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/partners' },
}

const partnerTypes = [
  {
    type: 'Referral Partner',
    who: 'Accountants, business coaches, trade associations, franchise consultants',
    what: 'Refer clients who are a fit. We handle sales, onboarding, and support.',
    earn: 'One-time referral fee per activated client',
    badge: 'Simplest path',
  },
  {
    type: 'Agency / Consultant',
    who: 'Marketing agencies, home-services consultants, healthcare admin advisors',
    what: 'Recommend AnswerCare as part of your growth stack. Co-sell or hand off.',
    earn: 'Recurring monthly commission while the client stays active',
    badge: 'Most popular',
  },
  {
    type: 'White-Label / Reseller',
    who: 'Software platforms, franchise networks, vertical SaaS providers',
    what: 'Offer AnswerCare under your brand. You set the price. We run the infrastructure.',
    earn: 'Wholesale rate — you keep the margin',
    badge: 'Full control',
  },
]

const faq = [
  { q: 'Who makes a good AnswerCare partner?', a: 'Anyone who regularly works with small service businesses — home services, healthcare practices, law firms, property managers — and wants to help them stop losing revenue to missed calls. Marketing agencies, fractional COOs, trade consultants, and franchise support teams are a natural fit.' },
  { q: 'How does the referral fee work?', a: 'You refer a qualified client. If they activate, you earn a one-time fee. We handle the sales call, the onboarding, and all ongoing support — you just make the introduction. Commission details are provided during partner onboarding.' },
  { q: 'How does recurring commission work for agencies?', a: 'Agency partners earn a monthly commission for each active client they referred or co-sold, for as long as that client is on a paid plan. The commission is paid monthly with a 30-day lag. Rates are disclosed during partner onboarding.' },
  { q: 'Is white-label available for every industry AnswerCare serves?', a: 'Yes — white-label is available for all verticals we support: home services, property management, dental and medical practices, law firms, and the new cash-pay clinic categories (chiropractic, optometry, physical therapy, med spa, veterinary). We provision the infrastructure; you provide the brand.' },
  { q: 'How do I get started?', a: 'Book a 20-minute partner intro call using the link below. We\'ll cover your client mix, volume expectations, and which partner tier is the right fit. No commitment required.' },
]

export default function PartnersPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AnswerCare AI Partner & Reseller Program',
        description: 'Referral, agency, and white-label partnerships for agencies, consultants, and platforms serving small service businesses.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Channel Partner Program',
        audience: { '@type': 'BusinessAudience', audienceType: 'Marketing agencies, business consultants, franchise networks, and vertical SaaS platforms' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}>
            <span className="dot good" />Partner &amp; Reseller Program · referral · agency · white-label
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-.035em', lineHeight: .95, marginBottom: 24 }}>
            Earn recurring revenue helping service businesses stop losing calls.
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.55 }}>
            If your clients run service businesses — home services, healthcare practices, law firms, property management — they&apos;re almost certainly leaking revenue to missed calls.
            Refer them to AnswerCare and earn every month they stay active.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a partner intro call →
            </a>
            <a href="mailto:hello@answercareai.com" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Email us directly
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
            REFERRAL · AGENCY · WHITE-LABEL · NO MINIMUM COMMITMENT
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Three ways to partner</div>
              <h2>Pick the model that fits how you work.</h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {partnerTypes.map((p) => (
              <div key={p.type} className="card" style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: 20, margin: 0 }}>{p.type}</h3>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '.06em', background: 'rgba(14,14,12,.06)', padding: '4px 8px', borderRadius: 4, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{p.badge}</span>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 4 }}>WHO</div>
                  <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>{p.who}</p>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 4 }}>WHAT YOU DO</div>
                  <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>{p.what}</p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--line-soft)' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 4 }}>YOU EARN</div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{p.earn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Partner intro call — 20 min', body: 'We learn about your client mix, volume expectations, and how you prefer to work. We agree on the right partner tier and commission structure.' },
              { n: '02', t: 'Make introductions', body: 'Refer clients who are a fit. We handle the sales call, demo, and onboarding. You don\'t need to know the product in detail — we do the work.' },
              { n: '03', t: 'Earn every month', body: 'Referral fee lands when the client activates. Agency partners earn recurring commission monthly. White-label partners invoice us at wholesale.' },
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

      {/* Industries we cover */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot" />Industries covered</div>
              <h2>One platform for every service business you work with.</h2>
            </div>
            <p style={{ maxWidth: 340, color: 'var(--muted)', fontSize: 16 }}>
              If your clients answer phones and lose calls to voicemail, AnswerCare fits.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { href: '/home-services', label: 'Home Services', sub: 'HVAC, plumbing, electrical, roofing, pest control' },
              { href: '/property-management', label: 'Property Management', sub: 'After-hours emergencies, leasing inquiry capture' },
              { href: '/dental-medical', label: 'Dental & Medical', sub: 'New-patient recovery, scheduler integration' },
              { href: '/law-firms', label: 'Law Firms', sub: 'After-hours intake, lead qualification, booking' },
              { href: '/med-spa', label: 'Med Spas', sub: 'Consultation recovery, after-hours booking' },
              { href: '/chiropractic', label: 'Chiropractic', sub: 'New-patient intake, care plan starts' },
              { href: '/veterinary', label: 'Veterinary', sub: 'Client family capture, after-hours triage' },
              { href: '/optometry', label: 'Optometry', sub: 'Exam booking, recall reactivation' },
              { href: '/physical-therapy', label: 'Physical Therapy', sub: 'Referral capture, evaluation booking' },
            ].map((v) => (
              <a key={v.href} href={v.href} className="card" style={{ padding: '20px 22px', display: 'block', textDecoration: 'none', transition: 'border-color .15s ease' }}>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{v.label}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.45 }}>{v.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="card" style={{ padding: '32px 36px' }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--ink)' }}>
              &ldquo;We run a growth agency for home service companies. AnswerCare is the first thing we recommend to every new client — it&apos;s the fastest win we can show them. We&apos;ve referred eight clients in three months and every one of them saw recovered revenue in the first week.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>TW</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Tyler W.</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Founder · Apex Home Services Growth · Phoenix, AZ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions partners ask.</h2></div></div>
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
            Ready to earn on every client you help?
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a 20-minute partner intro call. No commitment. We&apos;ll find the right fit for how you work.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '18px 28px', fontSize: 17 }}>
              Book a partner intro call →
            </a>
            <a href="mailto:hello@answercareai.com" className="btn btn-ghost" style={{ padding: '18px 28px', fontSize: 17 }}>
              Email us directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
