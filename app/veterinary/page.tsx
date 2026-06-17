import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Client Call Recovery for Veterinary Clinics',
  description: 'Missed calls cost vet clinics new client families and emergency revenue. AnswerCare answers after-hours, books appointments, and recovers missed inquiries.',
  keywords: 'answering service veterinary, vet clinic phone answering, veterinary appointment booking, animal hospital overflow answering',
  openGraph: {
    title: 'Client Call Recovery for Veterinary Clinics | AnswerCare AI',
    description: 'Worried pet owners who can\'t reach you find the clinic that can. We answer 24/7, triage, and book — so you keep the family.',
    url: 'https://www.answercareai.com/veterinary',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/veterinary' },
}

const faq = [
  {
    q: 'What happens when someone calls about a possible pet emergency?',
    a: 'The agent follows your exact emergency triage script. If the symptoms match your defined emergency criteria, the caller is directed to your after-hours emergency line or the nearest 24-hour emergency vet per your instructions. For urgent-but-not-emergency calls, the agent books the earliest available slot. You control exactly where the line is drawn.',
  },
  {
    q: 'Can it answer questions about vaccines, dental cleanings, or specific services?',
    a: 'Yes — we build a Q&A script from your actual service menu. The agent can describe your wellness plans, vaccine schedules, and common procedures at a general level, then route to booking. It won\'t give medical advice or make clinical recommendations — that stays with your DVMs.',
  },
  {
    q: 'Does it integrate with Avimark, Cornerstone, or eVetPractice?',
    a: 'We integrate with Google Calendar, Avimark, Cornerstone, eVetPractice, Vetter, and most veterinary PMS platforms. We confirm your stack and test the connection during onboarding before anything goes live.',
  },
  {
    q: 'How is client and patient data handled on calls?',
    /* [internal: data handling — legal review recommended before making specific compliance claims] */
    a: 'All call data is encrypted in transit and at rest. We can share our security documentation during onboarding. If your clinic has specific data-handling requirements, please review them with counsel before onboarding.',
  },
  {
    q: 'Will pet owners know they\'re not speaking with my front desk?',
    a: 'Most won\'t. The agent introduces itself as your clinic\'s booking line — using whatever language you approve. We show you the full script before going live. Our goal is for every caller to feel like they reached a helpful, knowledgeable extension of your team.',
  },
]

export default function VeterinaryPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Client Call Recovery for Veterinary Clinics',
        description: 'AnswerCare AI answers overflow and after-hours calls for veterinary clinics and animal hospitals, booking new clients and scheduling appointments directly into the practice management system.',
        provider: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
        serviceType: 'Veterinary Practice Answering Service',
        audience: { '@type': 'BusinessAudience', audienceType: 'Veterinary clinic owners and practice managers' },
        areaServed: { '@type': 'Country', name: 'United States' },
      })}} />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot pain" />For veterinary clinics &amp; animal hospitals · be the clinic that was there when it mattered
              </div>
              <h1 style={{ textWrap: 'balance' } as React.CSSProperties}>
                Worried Pet Owners<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>Find the Clinic That Answers.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, maxWidth: 520, lineHeight: 1.55 }}>
                When a pet owner calls after hours and gets voicemail, they don&apos;t wait — they call the next clinic on the list.
                AnswerCare answers, helps them understand what to do, and books the appointment.
                That&apos;s the clinic they come back to for the life of that pet.
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
                {[['< 2 sec','pickup time'],['24/7/365','always on'],['Grow plan','$900/mo'],['$1,000+','avg annual value/family']].map(([v,l]) => (
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
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>CALLS ANSWERCARE HANDLES FOR VET CLINICS</span>
              </div>
              {[
                { type: 'New client — wellness or sick visit', val: '$1,000–1,500+ annual spend per family', urgent: true },
                { type: 'After-hours urgent / sick pet', val: 'Triaged → emergency redirect or earliest slot', urgent: true },
                { type: 'Prescription refill / status check', val: 'Logged for team follow-up next business day', urgent: false },
                { type: 'Wellness plan / membership inquiry', val: 'Explained and enrollment booked', urgent: false },
                { type: 'Reschedule / cancellation', val: 'Rescheduled, slot recovered', urgent: false },
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
                  Recommended plan: <strong>Grow ($900/mo)</strong> — 24/7, PMS integration, quarterly optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triage nuance story */}
      <section className="section" style={{ background: 'var(--ink)', color: '#F4F0E6' }}>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 16 }}><span className="dot pain" />The moment that defines the relationship</div>
              <h2 className="serif" style={{ fontStyle: 'italic', color: '#fff' }}>
                It&apos;s Sunday morning.<br />A dog started limping badly overnight.
              </h2>
              <div style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,240,230,.8)', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p>The owner isn&apos;t sure if this is an emergency or something that can wait until Monday. They call your clinic hoping someone will tell them what to do. Voicemail. They call the next clinic — and that clinic answers, reassures them it can wait, and books Monday morning at 9 AM.</p>
                <p style={{ color: '#fff', fontWeight: 500, fontSize: 21 }} className="serif">
                  &ldquo;You didn&apos;t need to see the dog Sunday. You just needed to answer.&rdquo;
                </p>
                <p style={{ color: 'rgba(244,240,230,.6)', fontSize: 14 }}>
                  Being the clinic that helped in that moment — even just by answering, triaging, and booking — is what builds a client relationship worth $1,000+ per year for the life of that pet.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '$1k+', label: 'average annual veterinary spend per pet-owning household across wellness and sick visits', accent: false },
                { n: 'Most', label: 'new pet-owner callers who reach voicemail book with the first clinic that helps them instead', accent: false },
                { n: 'Years', label: 'a single answered call can win — pet owners stay loyal to the clinic that was there first', accent: true },
                { n: '0', label: 'new client calls should reach your voicemail — the relationship starts with that first answer', accent: false },
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
              <h2>What are missed calls costing your practice each month?</h2>
            </div>
          </div>
          <HomeROICalc
            valueLabel="Average annual value per client family"
            valueSub="Typical annual spend per household across all pets."
            defaultValue={1000}
            benchmarkNote="New pet-owner callers convert at 55–65% when a live voice answers on the first call."
            defaultCloseRate={60}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'rgba(14,14,12,.02)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}><span className="dot" />How it works</div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { n: '01', t: 'Revenue audit — 15 min', body: 'We look at your call volume, evening and weekend patterns, average client lifetime value, and your missed-inquiry backlog. You see exactly how many client families your voicemail is giving to competitors.' },
              { n: '02', t: 'Triage script + go live', body: 'Emergency protocol, new-client intake, wellness booking, and after-hours coverage — all configured to your exact criteria. We test edge cases before going live so the triage handles every scenario correctly.' },
              { n: '03', t: 'Every call builds the relationship', body: 'New client families booked, after-hours worries handled, and missed inquiries recovered — all attributed. Continue on a plan or stay on performance.' },
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
              <defs><pattern id="dots-vt" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots-vt)" />
            </svg>
            <div style={{ position: 'relative', maxWidth: 640 }}>
              <div className="eyebrow" style={{ color: 'rgba(244,240,230,.55)', marginBottom: 14 }}><span className="dot good" />No retainer. No risk.</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
                Give us your list of missed inquiries.<br />
                <span className="serif" style={{ fontStyle: 'italic' }}>We&apos;ll recover the client families you didn&apos;t know you lost.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(244,240,230,.8)', lineHeight: 1.6, marginBottom: 28 }}>
                We re-contact pet owners who called, hit voicemail, and went elsewhere. Some will still be looking for a new vet — we find them, re-qualify them, and book the appointment. You pay only for clients booked.
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
              &ldquo;Our front desk is slammed during clinic hours and completely offline after 6 PM. New client families were calling evenings and weekends, hitting voicemail, and finding another vet. AnswerCare fixed that — nine new client families in the first month, most of them evening calls we would have lost.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7A5B43, var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>AC</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. Amanda C., DVM</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Owner · Pinebrook Animal Hospital · Denver, CO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow">
          <div className="section-head"><div><div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div><h2>Questions veterinary practices ask.</h2></div></div>
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
            Be the clinic that was there when it mattered.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460, margin: '20px auto 0' }}>
            Book a revenue audit. We&apos;ll show you how many client families your voicemail sent to another practice.
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
