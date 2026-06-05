import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'How Much Revenue Are Missed Calls Costing Plumbers? (2025 Data)',
  description: 'The average plumbing shop misses 2–3 calls per day. At a $385 average ticket, that\'s $800+ in daily revenue leaking to a competitor. Here\'s the real math — and how to stop it.',
  keywords: 'missed calls cost plumbers, how much revenue missed calls plumbers, plumber answering service, missed call revenue calculator, plumbing business phone calls',
  openGraph: {
    title: 'How Much Revenue Are Missed Calls Costing Plumbers?',
    description: 'The average plumbing shop misses 2–3 calls per day. That\'s $800+ in revenue leaking daily. Here\'s the math.',
    url: 'https://www.answercareai.com/blog/missed-calls-cost-plumbers',
    type: 'article',
  },
  alternates: { canonical: 'https://www.answercareai.com/blog/missed-calls-cost-plumbers' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.answercareai.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.answercareai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'How Much Revenue Are Missed Calls Costing Plumbers?', item: 'https://www.answercareai.com/blog/missed-calls-cost-plumbers' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Revenue Are Missed Calls Costing Plumbers?',
  description: 'Data-driven analysis of how missed calls translate to lost revenue for plumbing businesses, with a concrete calculator and fix.',
  datePublished: '2025-05-14',
  dateModified: '2025-05-14',
  author: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
  publisher: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.answercareai.com/blog/missed-calls-cost-plumbers' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many calls does the average plumbing business miss per day?',
      acceptedAnswer: { '@type': 'Answer', text: 'Industry data suggests small plumbing businesses — sole operators and 1–3 truck shops — miss between 2 and 4 calls per day on average, primarily due to being on a job, driving between jobs, or after-hours call volume.' },
    },
    {
      '@type': 'Question',
      name: 'What is the average plumbing job ticket?',
      acceptedAnswer: { '@type': 'Answer', text: 'The average residential plumbing service ticket ranges from $250–$550, with a commonly cited midpoint of $385. Emergency calls (burst pipes, gas leaks, flooding) often run $600–$1,200+.' },
    },
    {
      '@type': 'Question',
      name: 'What percentage of callers leave a voicemail for a plumber?',
      acceptedAnswer: { '@type': 'Answer', text: 'Research from multiple home service industry studies suggests only 20–30% of callers leave a voicemail when they reach one. The majority hang up and call the next plumber on Google.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best way for a plumber to never miss a call?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most effective approach is conditional call forwarding to an AI answering service. When you don\'t answer within 2–4 rings, the call forwards to a system that picks up in under 2 seconds, qualifies the caller, books the appointment, and texts you the details.' },
    },
  ],
}

export default function MissedCallsCostPlumbers() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Article header */}
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
            }}>DATA &amp; REVENUE</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>7 min read · May 2025</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
            How Much Revenue Are Missed Calls Costing Plumbers?
          </h1>
          <p style={{ fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 0 }}>
            The average plumbing shop misses 2–3 calls a day. At a $385 average ticket,
            that&apos;s $800+ in revenue leaking to a competitor every single day — before you&apos;ve even turned a wrench.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>

          {/* Callout */}
          <div style={{
            background: 'rgba(239,68,68,.06)', border: '1px solid rgba(239,68,68,.18)',
            borderRadius: 16, padding: '24px 28px', marginBottom: 48,
          }}>
            <div style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '.06em', color: 'var(--pain)', marginBottom: 8 }}>THE QUICK MATH</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {[
                ['2.4', 'missed calls / day', 'avg for 1–3 truck shops'],
                ['$385', 'average ticket', 'residential plumbing service'],
                ['$924/day', 'revenue at risk', '= $23,700/month'],
              ].map(([val, label, sub]) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-.03em', color: 'var(--pain)', fontFamily: 'var(--mono)' }}>{val}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <h2>The plumber&apos;s phone problem</h2>
          <p>
            You&apos;re elbow-deep in a crawl space replacing a corroded shut-off valve. Your phone rings.
            You don&apos;t answer — because you can&apos;t. Three minutes later, that caller is talking to
            the plumber two spots down on Google.
          </p>
          <p>
            This is not a hypothetical. It&apos;s the operating reality for every 1–3 truck plumbing shop
            in the country. The question is: how much is it actually costing you?
          </p>

          <h2>Where the data comes from</h2>
          <p>
            We pulled from three sources to build this estimate:
          </p>
          <ul>
            <li><strong>Home service industry call analytics</strong> — ServiceTitan, Hatch, and similar platforms have published data on call volume and answer rates for plumbing businesses</li>
            <li><strong>Consumer behavior research</strong> — BrightLocal and similar firms have studied what happens when service callers hit voicemail</li>
            <li><strong>AnswerCare customer data</strong> — from onboarded plumbing shops, average inbound call volume and missed-call rates before they activated call forwarding</li>
          </ul>

          <h2>The missed call rate: how many calls do plumbers actually miss?</h2>
          <p>
            The industry estimates that small home service businesses (1–5 employees) miss between
            <strong> 25–40% of inbound calls</strong> during business hours. After hours, that number climbs above 80%.
          </p>
          <p>
            For a typical plumbing shop receiving 8–12 inbound calls per day, that translates to:
          </p>

          <div style={{
            border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', margin: '32px 0',
          }}>
            <div style={{ padding: '14px 24px', background: 'rgba(14,14,12,.03)', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '.06em', color: 'var(--muted)' }}>MISSED CALL ESTIMATES BY SHOP SIZE</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  {['Shop size', 'Daily call volume', 'Miss rate', 'Missed calls/day', 'Lost revenue/day'].map(h => (
                    <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Solo operator', '5–8 calls', '35%', '~2', '~$770'],
                  ['2-truck shop', '10–14 calls', '28%', '~3', '~$1,155'],
                  ['3–5 truck shop', '18–24 calls', '22%', '~4', '~$1,540'],
                ].map(([size, vol, rate, missed, lost], i) => (
                  <tr key={size} style={{ borderBottom: i < 2 ? '1px solid var(--line-soft)' : 'none' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600 }}>{size}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-2)' }}>{vol}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-2)' }}>{rate}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-2)' }}>{missed}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--pain)', fontWeight: 600 }}>{lost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '10px 20px', borderTop: '1px solid var(--line-soft)', background: 'rgba(14,14,12,.02)' }}>
              <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>At $385 avg ticket. Assumes 70% of missed calls were job-ready (not already booked elsewhere).</span>
            </div>
          </div>

          <h2>What actually happens when a plumber doesn&apos;t answer</h2>
          <p>
            The popular assumption is that callers will leave a voicemail and wait. The data says otherwise.
          </p>
          <p>
            BrightLocal&apos;s consumer research shows that <strong>when callers hit voicemail, 67–80% hang up
            and call another provider immediately</strong>. For emergency plumbing calls — burst pipes, flooding,
            gas smell — that number is even higher. They are not going to wait.
          </p>
          <p>
            What this means in practice:
          </p>
          <ul>
            <li>Voicemail gives the illusion of a safety net — most of those messages are from the minority of patient callers, not the majority who already moved on</li>
            <li>Callbacks 30–90 minutes later (when you finish the current job) often reach a caller who has already booked someone else</li>
            <li>After-hours calls are nearly 100% lost — no one is checking voicemail at 9 PM</li>
          </ul>

          <h2>The real annual number</h2>
          <p>
            Most plumbing businesses work roughly 250 billable days per year. Run the math on a solo operator:
          </p>

          <div style={{
            background: 'rgba(14,14,12,.03)', border: '1px solid var(--line)',
            borderRadius: 16, padding: '28px 32px', margin: '32px 0',
          }}>
            <div style={{ fontSize: 13, fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '.06em', marginBottom: 20 }}>ANNUAL REVENUE AT RISK — SOLO PLUMBER</div>
            {[
              ['Missed calls per day', '2', ''],
              ['Average ticket', '$385', ''],
              ['Close rate on answered calls', '65%', '(conservative)'],
              ['Actual lost revenue per day', '$500', '2 × $385 × 65%'],
              ['Working days per year', '250', ''],
              ['Annual revenue lost', '$125,000', ''],
            ].map(([label, val, note], i) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '10px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--line-soft)',
              }}>
                <div>
                  <span style={{ fontSize: 15 }}>{label}</span>
                  {note && <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 8, fontFamily: 'var(--mono)' }}>{note}</span>}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--mono)', color: i === 5 ? 'var(--pain)' : 'var(--ink)', letterSpacing: '-.02em' }}>{val}</div>
              </div>
            ))}
          </div>

          <p>
            $125,000 per year. For a solo plumber. That&apos;s not a rounding error — it&apos;s enough to
            buy a second service truck.
          </p>

          <h2>Emergency calls: the worst time to miss a call</h2>
          <p>
            Emergency plumbing calls skew the math further. A burst pipe, sewage backup, or hot water
            heater failure typically generates a <strong>$600–$1,400+ ticket</strong> — and the caller will not
            wait. If you don&apos;t answer in 30 seconds, they are calling the next number.
          </p>
          <p>
            Emergency calls also have near-zero price sensitivity. A homeowner standing in 3 inches of
            water at 7 PM is not comparing quotes. They are booking whoever picks up.
          </p>

          <h2>The after-hours gap</h2>
          <p>
            The average plumbing shop takes calls from 8 AM–6 PM. Everything after that goes to
            voicemail — or nothing. But emergency plumbing calls don&apos;t respect business hours.
            Frozen pipes burst at 2 AM. Water heaters fail on Sunday morning.
          </p>
          <p>
            After-hours and weekend emergency jobs are often 1.5–2× the standard rate. Missing
            those calls is doubly expensive.
          </p>

          <h2>What it costs to fix it</h2>
          <p>
            There are three realistic options for a plumbing shop that wants to answer every call:
          </p>

          <div style={{ display: 'grid', gap: 16, margin: '32px 0' }}>
            {[
              {
                opt: 'Option 1: Hire a receptionist',
                cost: '$3,400–$4,200/mo',
                note: 'Full-time employee, benefits, training, turnover. Answers during business hours only. Doesn\'t book the job — takes a message.',
                good: false,
              },
              {
                opt: 'Option 2: Traditional answering service',
                cost: '$150–300/mo',
                note: 'Human operators answer 24/7. They take a message and relay it. You still have to call back. 15–30% miss the emergency tone and lose the job.',
                good: false,
              },
              {
                opt: 'Option 3: AI answering service (AnswerCare)',
                cost: 'From $500/mo · pilot available',
                note: 'Answers in under 2 seconds 24/7. Qualifies the caller. Books the appointment directly. Texts you the full transcript. Handles emergency routing. Start with a performance pilot — pay only for recovered jobs.',
                good: true,
              },
            ].map(({ opt, cost, note, good }) => (
              <div key={opt} style={{
                border: `1px solid ${good ? 'rgba(159,226,176,.35)' : 'var(--line)'}`,
                background: good ? 'rgba(159,226,176,.05)' : 'transparent',
                borderRadius: 14, padding: '22px 26px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{opt}</div>
                  <div style={{ fontSize: 14, fontFamily: 'var(--mono)', fontWeight: 700, color: good ? 'var(--good)' : 'var(--ink)', whiteSpace: 'nowrap', marginLeft: 16 }}>{cost}</div>
                </div>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>

          <p>
            The math on AnswerCare: if you&apos;re missing 2 calls per day and recovering even 1 of them,
            you&apos;re generating $385 in revenue per day. The Recover plan starts at $500/month.
            That&apos;s a <strong>payback period measured in hours, not months</strong>.
          </p>

          <h2>How to calculate your own missed call cost</h2>
          <p>
            Use this formula:
          </p>
          <div style={{
            background: 'rgba(14,14,12,.04)', border: '1px solid var(--line)',
            borderRadius: 12, padding: '20px 24px', fontFamily: 'var(--mono)',
            fontSize: 14, margin: '24px 0', lineHeight: 2,
          }}>
            <div>(Daily calls × miss rate) × avg ticket × close rate × working days = annual revenue lost</div>
          </div>
          <p>
            Example for a 2-truck shop getting 12 calls/day:
          </p>
          <div style={{
            background: 'rgba(14,14,12,.04)', border: '1px solid var(--line)',
            borderRadius: 12, padding: '20px 24px', fontFamily: 'var(--mono)',
            fontSize: 14, margin: '24px 0', lineHeight: 2,
          }}>
            <div>(12 × 0.28) × $385 × 0.65 × 250</div>
            <div>= 3.36 × $385 × 0.65 × 250</div>
            <div>= <strong>$209,790/year at risk</strong></div>
          </div>

          <h2>The bottom line</h2>
          <p>
            Missed calls are not a minor inconvenience — they are a structural revenue leak built
            into how most plumbing shops operate. When you&apos;re on a job, you cannot answer the phone.
            And callers, especially emergency callers, will not wait.
          </p>
          <p>
            The fix is straightforward: conditional call forwarding to an AI service that answers
            in under 2 seconds, qualifies the caller, and books the appointment. You finish the
            current job. The next job books itself.
          </p>
          <p>
            <a href="/plumbers" style={{ color: 'var(--accent)', fontWeight: 500 }}>See how AnswerCare works specifically for plumbing shops →</a>
          </p>

          {/* FAQ */}
          <div style={{ marginTop: 64, borderTop: '2px solid var(--line)', paddingTop: 48 }}>
            <h2 style={{ marginBottom: 32 }}>Frequently asked questions</h2>
            {[
              {
                q: 'How many calls does the average plumbing business miss per day?',
                a: 'Industry data suggests small plumbing businesses — sole operators and 1–3 truck shops — miss between 2 and 4 calls per day on average, primarily due to being on a job, driving between jobs, or after-hours call volume. The miss rate is typically 25–35% during business hours and 80%+ after hours.',
              },
              {
                q: 'What is the average plumbing job ticket?',
                a: 'The average residential plumbing service ticket ranges from $250–$550, with a commonly cited midpoint of $385. Emergency calls (burst pipes, gas leaks, flooding) often run $600–$1,200+. Remodel and new install work is higher still.',
              },
              {
                q: 'What percentage of callers leave a voicemail for a plumber?',
                a: 'Research from multiple home service industry studies suggests only 20–30% of callers leave a voicemail when they reach one. The majority hang up and call the next plumber on Google. For emergency calls, the hangup rate is even higher — people in a water emergency will not wait.',
              },
              {
                q: 'What is the best way for a plumber to never miss a call?',
                a: 'The most effective approach is conditional call forwarding to an AI answering service. When you don\'t answer within 2–4 rings, the call forwards to a system that picks up in under 2 seconds, qualifies the caller, books the appointment, and texts you the details — without interrupting the job you\'re on.',
              },
              {
                q: 'Does an answering service actually book jobs, or just take messages?',
                a: 'Traditional human answering services take messages and relay them. You still have to call back — and by then, the caller has often already booked someone else. AI answering services like AnswerCare are designed to book the appointment in real time during the call, eliminating the callback gap.',
              },
            ].map(({ q, a }, i) => (
              <details key={q} name="faq" open={i === 0} style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <summary style={{
                  listStyle: 'none', padding: '20px 0', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: 16, fontWeight: 600, gap: 16,
                }}>
                  {q}
                  <span style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: 'var(--muted)', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ padding: '0 0 20px', color: 'var(--ink-2)', lineHeight: 1.65, fontSize: 15, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 80 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 16, justifyContent: 'center', display: 'flex' }}>
            <span className="dot pain" />Stop the revenue leak
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-.03em', lineHeight: 1, marginBottom: 16 }}>
            Answer every call.<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>Book every job.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.6 }}>
            AnswerCare answers in under 2 seconds, qualifies the caller, and books the appointment.
            Start with a performance pilot — pay only for recovered jobs, no retainer up front.
          </p>
          <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={CALENDLY_SETUP_CALL_URL}
              target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '16px 26px', fontSize: 16 }}>
              Start a performance pilot →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost" style={{ padding: '16px 26px', fontSize: 16 }}>
              Book a revenue audit
            </a>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14, letterSpacing: '.04em' }}>
            Performance pilot · pay per recovered job · plans from $500/mo
          </div>
          <div style={{ marginTop: 36, paddingTop: 32, borderTop: '1px solid var(--line-soft)' }}>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>Related reading</div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/plumbers" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>AnswerCare for Plumbers →</a>
              <a href="/blog/best-answering-service-for-plumbers" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>Best Answering Services for Plumbers →</a>
              <a href="/compare/answering-service" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>AI vs Traditional Answering Services →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
