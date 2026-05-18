import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Best Answering Service for Plumbers in 2025 — Ranked & Reviewed',
  description: 'We compared 6 answering services on pickup speed, booking capability, and pricing. One option actually books the job. Here\'s how they rank for plumbing shops.',
  keywords: 'best answering service for plumbers, plumber answering service, phone answering service plumbing, plumbing receptionist service, ai answering plumbers',
  openGraph: {
    title: 'Best Answering Service for Plumbers in 2025 — Ranked',
    description: 'We compared 6 options. One books the job. Here\'s how they stack up for plumbing shops.',
    url: 'https://www.answercareai.com/blog/best-answering-service-for-plumbers',
    type: 'article',
  },
  alternates: { canonical: 'https://www.answercareai.com/blog/best-answering-service-for-plumbers' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Answering Service for Plumbers in 2025 (Ranked & Reviewed)',
  description: 'Comparison of the top 6 answering services for plumbing businesses, ranked by pickup speed, booking capability, and price.',
  datePublished: '2025-05-14',
  dateModified: '2025-05-14',
  author: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
  publisher: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.answercareai.com/blog/best-answering-service-for-plumbers' },
}

const services = [
  {
    rank: 1,
    name: 'AnswerCare AI',
    tagline: 'Best overall for plumbing — books the job, not just a message',
    price: '$199/mo + $497 setup',
    pickup: '< 2 seconds',
    books: true,
    hours: '24/7',
    pros: ['Answers in under 2 seconds every time', 'Books the appointment into your calendar during the call', 'Texts you the full transcript and job details', 'Custom script for your trade, service area, rates', 'Emergency routing to your cell for true crises', '14-day free trial'],
    cons: ['$497 one-time setup required', 'Newer service — smaller track record than legacy options'],
    best: true,
  },
  {
    rank: 2,
    name: 'Ruby Receptionists',
    tagline: 'Best live-agent service — professional, but expensive',
    price: '$235–$1,375/mo',
    pickup: '3–5 rings (human)',
    books: false,
    hours: '8am–10pm (limited after-hours)',
    pros: ['Human voice — sounds natural', 'Professional and warm tone', 'Long track record (20+ years)'],
    cons: ['Per-minute pricing adds up fast for high-volume shops', 'Does not book jobs — takes messages', 'After-hours coverage is add-on and inconsistent', 'No trade-specific training'],
    best: false,
  },
  {
    rank: 3,
    name: 'AnswerConnect',
    tagline: 'Good coverage, no booking',
    price: '$149–$599/mo (per minute)',
    pickup: '2–4 rings (human)',
    books: false,
    hours: '24/7',
    pros: ['True 24/7 coverage with human operators', 'Reasonable base pricing', 'Large operator pool'],
    cons: ['Message-only — does not book appointments', 'Per-minute overages can spike billing', 'High turnover in operators affects quality consistency'],
    best: false,
  },
  {
    rank: 4,
    name: 'Gabbyville',
    tagline: 'Affordable option, limited capability',
    price: '$229–$529/mo',
    pickup: '3–5 rings',
    books: false,
    hours: 'Mon–Sat (limited Sunday)',
    pros: ['Flat-rate pricing (no per-minute overages)', 'Dedicated receptionists assigned to account'],
    cons: ['No Sunday coverage — bad for emergency plumbing', 'Message relay only', 'Limited integration with booking software'],
    best: false,
  },
  {
    rank: 5,
    name: 'Smith.ai',
    tagline: 'CRM-integrated, expensive at scale',
    price: '$292–$600+/mo',
    pickup: '2–3 rings (human/AI hybrid)',
    books: true,
    hours: '24/7',
    pros: ['Can book appointments (with CRM integration)', 'Good for tech-forward businesses', 'Spam filtering included'],
    cons: ['Expensive for small shops', 'Requires CRM setup to unlock booking', 'Setup complexity is high for solo operators'],
    best: false,
  },
  {
    rank: 6,
    name: 'Voicemail / no service',
    tagline: 'The status quo — and the most expensive option',
    price: '$0/mo',
    pickup: '4+ rings → voicemail',
    books: false,
    hours: 'Business hours only (effectively)',
    pros: ['No monthly cost'],
    cons: ['67–80% of callers hang up and call a competitor', 'Emergency callers will not wait for a callback', 'Estimated $125,000+/year in lost revenue for a solo shop', 'No after-hours coverage'],
    best: false,
  },
]

export default function BestAnsweringServiceForPlumbers() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="wrap-narrow">
          <a href="/blog" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontFamily: 'var(--mono)', letterSpacing: '.04em' }}>
            ← Blog
          </a>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', margin: '20px 0 16px' }}>
            <span style={{
              fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.06em',
              background: 'var(--panel)', border: '1px solid var(--line)',
              padding: '3px 8px', borderRadius: 4, color: 'var(--muted)',
            }}>BUYER&apos;S GUIDE</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>9 min read · May 2025</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
            Best Answering Service for Plumbers in 2025 (Ranked &amp; Reviewed)
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 24 }}>
            We compared 6 options across pickup speed, booking capability, 24/7 availability, and price.
            The answer for most plumbing shops is simpler than you think.
          </p>
          <div style={{
            background: 'rgba(14,14,12,.03)', border: '1px solid var(--line)',
            borderRadius: 12, padding: '16px 20px', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6,
          }}>
            <strong style={{ color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em' }}>DISCLOSURE: </strong>
            AnswerCare AI publishes this guide. We ranked ourselves #1. We&apos;ve also tried to be honest about where we&apos;re not the right fit — read the full breakdown, then decide.
          </div>
        </div>
      </section>

      {/* TL;DR summary */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap-narrow" style={{ padding: '32px 0' }}>
          <div style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 16 }}>QUICK SUMMARY</div>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { label: 'Best overall', val: 'AnswerCare AI — answers in < 2s, books the job, $199/mo flat' },
              { label: 'Best live-agent', val: 'Ruby Receptionists — professional, human, but message-only and expensive' },
              { label: 'Best 24/7 coverage', val: 'AnswerConnect — reliable human ops, message relay only' },
              { label: 'Skip', val: 'Voicemail — 67–80% of callers hang up and call your competitor' },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--muted)', whiteSpace: 'nowrap', minWidth: 120 }}>{label}</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article>
        <div className="wrap-narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>

          <h2>What matters for a plumbing answering service</h2>
          <p>
            Before ranking options, it&apos;s worth being clear about what plumbing businesses actually need
            from an answering service — because the list is specific:
          </p>
          <ul>
            <li><strong>Speed.</strong> Emergency plumbing calls — burst pipes, flooding, gas smell — go to whoever picks up first. 3 rings matters.</li>
            <li><strong>24/7 availability.</strong> Plumbing emergencies don&apos;t wait for business hours. After-hours coverage is not optional.</li>
            <li><strong>Job booking, not message-taking.</strong> A message that says &quot;John called about a leak&quot; is near-worthless. By the time you call back, the job is gone.</li>
            <li><strong>Trade literacy.</strong> The service needs to understand what &quot;P-trap,&quot; &quot;main shutoff,&quot; and &quot;pressure regulator&quot; mean — or at least know when to escalate.</li>
            <li><strong>Flat-rate pricing.</strong> Per-minute overages during a busy week kill the economics.</li>
          </ul>
          <p>
            With that framework, here&apos;s how the top options rank:
          </p>

          {/* Rankings */}
          <div style={{ marginTop: 48 }}>
            {services.map((svc) => (
              <div key={svc.name} style={{
                border: `1px solid ${svc.best ? 'rgba(159,226,176,.4)' : 'var(--line)'}`,
                background: svc.best ? 'rgba(159,226,176,.04)' : 'transparent',
                borderRadius: 18, padding: '28px 32px', marginBottom: 24,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6 }}>
                      <span style={{
                        fontSize: 12, fontFamily: 'var(--mono)', fontWeight: 700,
                        background: svc.best ? 'var(--good)' : 'rgba(14,14,12,.08)',
                        color: svc.best ? '#0a2e14' : 'var(--muted)',
                        padding: '3px 8px', borderRadius: 4,
                      }}>#{svc.rank}</span>
                      {svc.best && <span style={{ fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--good)', letterSpacing: '.06em' }}>RECOMMENDED</span>}
                    </div>
                    <h3 style={{ fontSize: 22, marginBottom: 4, letterSpacing: '-.02em' }}>{svc.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>{svc.tagline}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'var(--mono)' }}>{svc.price}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{svc.pickup} pickup · {svc.hours}</div>
                    <div style={{ fontSize: 12, marginTop: 4, fontWeight: 600, color: svc.books ? 'var(--good)' : 'var(--pain)' }}>
                      {svc.books ? '✓ Books appointments' : '✗ Message-only'}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div>
                    <div style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--good)', marginBottom: 8, letterSpacing: '.04em' }}>PROS</div>
                    {svc.pros.map(p => (
                      <div key={p} style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, paddingBottom: 6 }}>✓ {p}</div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--pain)', marginBottom: 8, letterSpacing: '.04em' }}>CONS</div>
                    {svc.cons.map(c => (
                      <div key={c} style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, paddingBottom: 6 }}>✗ {c}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2>The booking gap: why most services leave money on the table</h2>
          <p>
            The biggest difference between options isn&apos;t price or pickup speed — it&apos;s whether the
            service actually books the appointment.
          </p>
          <p>
            Most traditional answering services (Ruby, AnswerConnect, Gabbyville) are message relays.
            They answer the call, collect basic information, and send you a message. You call back.
          </p>
          <p>
            Here&apos;s the problem: <strong>by the time you call back, 40–60% of callers have already
            booked someone else.</strong> Emergency callers specifically will not wait 20–90 minutes for
            a callback. They call the next plumber.
          </p>
          <p>
            AnswerCare and Smith.ai are the two options on this list that actually book appointments.
            Smith.ai requires CRM integration and is priced for larger operations. AnswerCare is
            designed specifically for solo and small trade shops.
          </p>

          <h2>Who should use what</h2>
          <div style={{ display: 'grid', gap: 16, margin: '32px 0' }}>
            {[
              { who: 'Solo plumber, 1–2 trucks', rec: 'AnswerCare AI', reason: 'Flat $199/mo, books the job, no per-minute overages on busy days, 14-day trial to test it live.' },
              { who: 'Want a human voice, price is secondary', rec: 'Ruby Receptionists', reason: 'Professional live agents. Accept that you\'re paying for a voice, not a booking engine.' },
              { who: 'Need 24/7 coverage on a budget', rec: 'AnswerConnect', reason: 'Solid 24/7 human coverage. Plan for message-only and build your own callback system.' },
              { who: '5+ truck operation with CRM', rec: 'Smith.ai', reason: 'Worth the setup complexity at scale. Booking capability plus CRM integration.' },
            ].map(({ who, rec, reason }) => (
              <div key={who} style={{ border: '1px solid var(--line)', borderRadius: 12, padding: '18px 22px' }}>
                <div style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: 6 }}>IF YOU ARE: {who.toUpperCase()}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>→ {rec}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{reason}</div>
              </div>
            ))}
          </div>

          <h2>The $0 option: why voicemail is the most expensive choice</h2>
          <p>
            Voicemail is free. It also costs the average solo plumbing shop roughly $125,000/year in
            missed jobs — at a 2-missed-calls-per-day rate and $385 average ticket.
          </p>
          <p>
            When 67–80% of callers hang up on voicemail without leaving a message, &quot;no service&quot; isn&apos;t
            free. It&apos;s the most expensive option on this list.
          </p>
          <p>
            <a href="/blog/missed-calls-cost-plumbers" style={{ color: 'var(--accent)', fontWeight: 500 }}>See the full missed-call revenue analysis →</a>
          </p>

          <h2>Our verdict</h2>
          <p>
            For most plumbing shops — solo operators and 1–3 truck businesses — <strong>AnswerCare AI
            is the right call</strong>. It picks up in under 2 seconds, qualifies the caller, books
            the appointment, and texts you the job details. You pay $199/month flat, no per-minute
            overages, no callback gap.
          </p>
          <p>
            If you want a human voice and have the budget, Ruby Receptionists is the best live-agent option.
            Just know you&apos;re paying for professional message-taking, not job booking.
          </p>
          <p>
            <a href="/plumbers" style={{ color: 'var(--accent)', fontWeight: 500 }}>See how AnswerCare works specifically for plumbers →</a>
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 80 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-.03em', lineHeight: 1, marginBottom: 16 }}>
            Try the #1 rated option free for 14 days.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Answers in under 2 seconds. Books the job. Texts you the details. Setup takes 15 minutes.
          </p>
          <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 26px', fontSize: 16 }}>
              Start 14 days free →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost" style={{ padding: '16px 26px', fontSize: 16 }}>
              Book a setup call
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14, letterSpacing: '.04em' }}>
            $497 setup · 14 days free · then $199/mo · cancel anytime
          </div>
        </div>
      </section>
    </div>
  )
}
