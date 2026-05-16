import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'How to Never Miss a Customer Call as a Solo Contractor (2025 Guide)',
  description: 'A practical 3-step system — call forwarding, AI answering, and follow-up texts — that covers every inbound call without hiring a receptionist.',
  keywords: 'never miss a call contractor, solo contractor phone system, contractor call answering, how to answer all calls plumber hvac electrician',
  openGraph: {
    title: 'How to Never Miss a Customer Call as a Solo Contractor',
    description: 'A practical 3-step system. No receptionist needed. Every call covered.',
    url: 'https://answercareai.com/blog/never-miss-a-call-contractor',
    type: 'article',
  },
  alternates: { canonical: 'https://answercareai.com/blog/never-miss-a-call-contractor' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Never Miss a Customer Call as a Solo Contractor',
  description: 'A 3-step system using call forwarding, AI answering, and automated follow-up to ensure every inbound call is answered and booked.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', name: 'Enable conditional call forwarding', text: 'Set your phone to forward to your answering service after 2–4 rings, or immediately when you\'re on another call.' },
    { '@type': 'HowToStep', name: 'Configure your answering service', text: 'Set up a trade-specific script with your service area, availability, rates, and emergency handling.' },
    { '@type': 'HowToStep', name: 'Receive job summaries by text', text: 'After every answered call, receive a full transcript and job summary so you can follow up or show up prepared.' },
  ],
}

export default function NeverMissACallContractor() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            }}>HOW-TO GUIDE</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>6 min read · May 2025</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 20 }}>
            How to Never Miss a Customer Call as a Solo Contractor
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            You&apos;re on a job. The phone rings. You can&apos;t answer.
            Here&apos;s a practical system — three steps, 15 minutes to set up — that keeps
            every call covered without hiring anyone.
          </p>
        </div>
      </section>

      <article style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap-narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>

          <h2>The problem with &quot;I&apos;ll call them back&quot;</h2>
          <p>
            Every contractor has said it: &quot;I&apos;ll call them back when I finish this job.&quot;
            That callback happens 30–90 minutes later, and about half the time, the caller has
            already booked someone else.
          </p>
          <p>
            For emergency trades — plumbing, HVAC, electrical, locksmith — the callback gap is fatal.
            Someone calling with a burst pipe at 7 PM is not waiting 45 minutes. They&apos;re calling
            the next number.
          </p>
          <p>
            The solution is not to answer every call yourself. You physically cannot do that and
            also do the work. The solution is a system that answers for you, immediately, and
            handles the call the same way you would.
          </p>

          <h2>The 3-step system</h2>

          {/* Step 1 */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 42, fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--muted-2)', lineHeight: 1, minWidth: 48 }}>01</div>
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>Enable conditional call forwarding — 5 minutes</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 16 }}>
                  Conditional call forwarding routes your calls to another number when you don&apos;t answer.
                  It&apos;s a built-in feature on every smartphone and carrier — you don&apos;t need a new
                  number, app, or equipment. Your existing phone number stays the same.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { label: 'iPhone', steps: ['Go to Settings → Phone', 'Find "Call Forwarding" (carrier dependent)', 'Or dial *61*[forwarding number]# from keypad'] },
                    { label: 'Android', steps: ['Go to Phone app → Settings → Calls', 'Select "Call Forwarding"', 'Set "Forward when unanswered" to your service number'] },
                  ].map(({ label, steps }) => (
                    <div key={label} style={{ background: 'rgba(14,14,12,.03)', borderRadius: 10, padding: '16px 18px' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--mono)', marginBottom: 10 }}>{label}</div>
                      {steps.map((s, i) => (
                        <div key={i} style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: 4 }}>{i + 1}. {s}</div>
                      ))}
                    </div>
                  ))}
                </div>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, marginTop: 16, lineHeight: 1.6 }}>
                  Set it to forward after 2–4 rings (not immediately — if you can grab the phone, do).
                  You can also set it to forward when your line is busy (i.e., you&apos;re already on a call).
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 42, fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--muted-2)', lineHeight: 1, minWidth: 48 }}>02</div>
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>Set up your answering service — 15 minutes</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 16 }}>
                  The forwarding number is where things differ between a good setup and a bad one.
                  Here&apos;s what the forwarding needs to do:
                </p>
                <ul style={{ color: 'var(--ink-2)', lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
                  <li><strong>Answer immediately.</strong> 4+ seconds of ringing after forwarding = caller hangs up. Under 2 seconds = caller stays on.</li>
                  <li><strong>Sound like a professional who knows your business.</strong> &quot;Thanks for calling [Your Name] Plumbing, how can I help?&quot; — not a generic robot.</li>
                  <li><strong>Qualify the caller.</strong> What&apos;s the issue? What&apos;s the address? Is it an emergency or a scheduled job?</li>
                  <li><strong>Book the appointment.</strong> Not &quot;I&apos;ll have someone call you back.&quot; Actually schedule it — day, time, confirmed.</li>
                  <li><strong>Send you a summary.</strong> After the call, text you the caller name, number, issue, address, and appointment time.</li>
                </ul>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>
                  With AnswerCare, this is the 15-minute setup call — we learn your trade, service area,
                  rates, and calendar. You approve the script before anything goes live.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 42, fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--muted-2)', lineHeight: 1, minWidth: 48 }}>03</div>
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>Read job summaries between jobs — 30 seconds per call</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 16 }}>
                  Every call that comes in generates a text with:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 16 }}>
                  {['Caller name + phone number', 'Service address', 'Issue described', 'Appointment booked', 'Emergency flag (if applicable)', 'Full transcript available'].map(item => (
                    <div key={item} style={{ fontSize: 13, color: 'var(--ink-2)', display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ color: 'var(--good)', fontWeight: 700 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>
                  You glance at the text when you finish the current job. The next job is already booked.
                  Show up prepared — you know the address, the issue, and the customer&apos;s name.
                </p>
              </div>
            </div>
          </div>

          <h2>What this costs vs what it earns</h2>
          <p>
            The math is straightforward. If you&apos;re missing 2 calls a day (conservative for a solo operator)
            and recovering 1 of them:
          </p>
          <div style={{
            background: 'rgba(14,14,12,.03)', border: '1px solid var(--line)',
            borderRadius: 12, padding: '24px 28px', margin: '24px 0',
          }}>
            {[
              ['AnswerCare monthly cost', '$199/mo'],
              ['Calls recovered per month (conservative)', '20'],
              ['Average ticket (plumbing)', '$385'],
              ['Revenue recovered per month', '$7,700'],
              ['Net gain after service cost', '$7,501'],
            ].map(([label, val], i) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--line-soft)',
              }}>
                <span style={{ fontSize: 15, color: i === 4 ? 'var(--ink)' : 'var(--ink-2)' }}>{label}</span>
                <span style={{ fontSize: 16, fontFamily: 'var(--mono)', fontWeight: 700, color: i === 4 ? 'var(--good)' : 'var(--ink)' }}>{val}</span>
              </div>
            ))}
          </div>
          <p>
            The payback period is measured in hours. One recovered emergency job covers the
            entire month&apos;s subscription.
          </p>

          <h2>What about after-hours calls?</h2>
          <p>
            This system runs 24/7 automatically. Emergency calls at 2 AM forward to AnswerCare,
            get answered in under 2 seconds, and book a job. You wake up to a text with the
            appointment already set.
          </p>
          <p>
            After-hours and weekend emergency jobs in most trades are priced at 1.25–1.5×
            the standard rate. Those are your highest-margin calls — and the ones most likely
            to go to voicemail under the old setup.
          </p>

          <h2>Frequently asked questions</h2>
          {[
            {
              q: 'Will callers know they\'re talking to AI?',
              a: 'Modern AI voice quality has improved to the point where the majority of callers cannot tell the difference in a blind test. The voice is natural, responds in under 1 second, and is scripted to sound like your business. Most callers assume they\'ve reached a receptionist.',
            },
            {
              q: 'What if I want to handle the call myself sometimes?',
              a: 'Conditional forwarding means you only forward when you don\'t answer. If you grab the phone, you take the call. AnswerCare only picks up what you miss — it\'s a net, not a replacement.',
            },
            {
              q: 'What happens with a true emergency — gas leak, flooding, someone in danger?',
              a: 'AnswerCare can be configured to call your personal cell directly for flagged emergencies — bypassing the normal booking flow. You define what counts as an emergency (water in the basement, gas smell, etc.) during setup.',
            },
            {
              q: 'Does this work for after-hours calls?',
              a: 'Yes. The system runs 24/7. A call at 3 AM forwards to AnswerCare, gets answered in under 2 seconds, the job gets booked, and you receive a text. You wake up to confirmed appointments, not missed voicemails.',
            },
          ].map(({ q, a }, i) => (
            <details key={q} name="faq" open={i === 0} style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <summary style={{
                listStyle: 'none', padding: '18px 0', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: 16, fontWeight: 600, gap: 16,
              }}>
                {q}
                <span style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: 'var(--muted)', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ padding: '0 0 18px', color: 'var(--ink-2)', lineHeight: 1.65, fontSize: 15, margin: 0 }}>{a}</p>
            </details>
          ))}

          <div style={{ marginTop: 48 }}>
            <h2>Related guides</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                { href: '/blog/missed-calls-cost-plumbers', label: 'How Much Revenue Are Missed Calls Costing Plumbers?', tag: 'Data & Revenue' },
                { href: '/blog/ai-vs-traditional-answering-service-contractors', label: 'AI Answering vs Traditional Answering Service', tag: 'Comparison' },
                { href: '/contractors', label: 'AnswerCare for Contractors — All Trades', tag: 'Product' },
              ].map(({ href, label, tag }) => (
                <a key={href} href={href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px', border: '1px solid var(--line)', borderRadius: 10,
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
                  <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 16 }}>Read →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 80 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-.03em', lineHeight: 1, marginBottom: 16 }}>
            Set it up in 15 minutes.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Call forwarding + AnswerCare. Every call answered, every job booked, every summary texted to you. 14 days free.
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
        </div>
      </section>
    </div>
  )
}
