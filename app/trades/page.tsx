import Link from 'next/link'
import TradesROICalc from '@/components/trades/TradesROICalc'
import TradesFAQ from '@/components/trades/TradesFAQ'

// ─── Design tokens (trades palette) ────────────────────────────────────────
// bg:      #FFFFFF / #F5F5F5 / #0A0A0A
// text:    #0A0A0A / #525252 / #FFFFFF
// accent:  #E85D04 (construction orange) / hover #C94C00
// warm:    #FEC89A
// border:  #E5E5E5
// fonts:   "Inter Tight" 800 (display) / Inter 400-500 (body) / JetBrains Mono (phone)

const DISPLAY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const BODY = { fontFamily: 'Inter, system-ui, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", monospace' }

// ─── Trades Nav ─────────────────────────────────────────────────────────────
function TradesNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/trades" className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black"
            style={{ backgroundColor: '#E85D04', ...DISPLAY }}
          >
            A
          </div>
          <span className="font-bold text-[#0A0A0A] text-sm" style={DISPLAY}>
            AnswerCare<span className="text-[#525252] font-normal">.ai</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+18005551234" className="text-sm text-[#525252]" style={{ ...MONO, fontSize: '13px' }}>
            (800) 555-1234
          </a>
          <a
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#E85D04', ...DISPLAY }}
          >
            Book a call →
          </a>
        </div>

        <a
          href="tel:+18005551234"
          className="sm:hidden text-sm font-semibold text-white px-4 py-2 rounded-lg"
          style={{ backgroundColor: '#E85D04', ...DISPLAY }}
        >
          📞 Call now
        </a>
      </div>
    </header>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function TradesPage() {
  return (
    <div className="bg-white" style={BODY}>
      <TradesNav />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-5"
            style={BODY}
          >
            24/7 AI PHONE AGENT FOR SOLO TRADE OPERATORS
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0A0A0A] leading-[1.05] mb-6"
            style={DISPLAY}
          >
            Stop losing jobs<br className="hidden sm:block" /> to voicemail.
          </h1>

          <p className="text-lg sm:text-xl text-[#525252] max-w-xl mx-auto leading-relaxed mb-10" style={BODY}>
            Our AI answers every call, qualifies the caller, and books{' '}
            <strong className="text-[#0A0A0A]">20 jobs into your calendar in 30 days</strong> — or you don&apos;t pay.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white text-sm w-full sm:w-auto text-center transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: '#E85D04', ...DISPLAY }}
            >
              <span>📞</span>
              Call our live demo →
            </a>
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl font-semibold text-[#0A0A0A] text-sm w-full sm:w-auto text-center border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all"
              style={DISPLAY}
            >
              Book a 15-min setup call →
            </a>
          </div>

          <p className="text-xs text-[#525252]" style={BODY}>
            US phone number &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; No contract
          </p>
        </div>
      </section>

      {/* ── Section 2: Call It Now ──────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase text-white/40 mb-6" style={BODY}>
            Don&apos;t take our word for it. Place a call.
          </p>
          <a
            href="tel:+18005551234"
            className="block font-black text-white leading-none mb-6 hover:opacity-80 transition-opacity"
            style={{ ...MONO, fontSize: 'clamp(36px, 10vw, 80px)' }}
          >
            +1 (800) 555-1234
          </a>
          <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={BODY}>
            You&apos;ll speak with the same AI that will answer your business&apos;s calls.
            Ask it about rates, scheduling, or throw it a curveball. The call is free and takes 2 minutes.
          </p>
        </div>
      </section>

      {/* ── Section 3: The Problem ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-12">
            {[
              {
                stat: '38%',
                label: 'Of business-hours calls go unanswered at the average one-truck trade operation.',
              },
              {
                stat: '85%',
                label: 'Of callers who hit voicemail don\'t call back. They call the next contractor on Google.',
              },
              {
                stat: '$4,200/mo',
                label: 'Lost monthly by the average solo operator to missed calls — based on a $350 average job.',
              },
            ].map(({ stat, label }) => (
              <div key={stat} className="text-center sm:text-left">
                <p
                  className="font-black text-[#E85D04] leading-none mb-3"
                  style={{ ...DISPLAY, fontSize: 'clamp(42px, 8vw, 64px)' }}
                >
                  {stat}
                </p>
                <p className="text-[#525252] text-sm leading-relaxed" style={BODY}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E5E5E5] pt-8 text-center">
            <p className="text-[#525252] text-sm sm:text-base max-w-2xl mx-auto" style={BODY}>
              Hiring a human receptionist costs{' '}
              <strong className="text-[#0A0A0A]">$3,800/month</strong>, goes home at 5pm,
              and can&apos;t answer two calls at once.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-4" style={BODY}>
              Simple setup, fast go-live
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0A0A0A]"
              style={DISPLAY}
            >
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Setup (Week 1)',
                body: '30-minute call. We learn your trade, service area, rates, and job types. We write your custom call script. You review and approve it in 15 minutes.',
              },
              {
                num: '02',
                title: 'Go Live (End of Week 1)',
                body: 'We forward your existing phone line. Every call now reaches our AI in under 2 seconds. Booking details land in your calendar and your SMS inbox.',
              },
              {
                num: '03',
                title: 'Guarantee Window (Days 1–30)',
                body: 'If we don\'t book 20 jobs in 30 days, you pay nothing. We Zelle you $500 for your time. No argument, no exceptions.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-white rounded-2xl p-7 border border-[#E5E5E5]">
                <p
                  className="font-black text-[#E5E5E5] text-4xl mb-4 leading-none"
                  style={DISPLAY}
                >
                  {num}
                </p>
                <h3 className="font-bold text-[#0A0A0A] mb-2 text-base" style={DISPLAY}>
                  {title}
                </h3>
                <p className="text-[#525252] text-sm leading-relaxed" style={BODY}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4.5: While You're On The Job (NEW) ─────────────────── */}
      <section className="bg-[#0A0A0A] py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.15em] uppercase text-white/30 mb-8"
            style={BODY}
          >
            While you&apos;re under a sink, on a roof, or on a ladder...
          </p>

          <div className="space-y-5 mb-10">
            {[
              { time: '2:43 PM', text: 'A customer calls. Emergency lockout.' },
              { text: 'Your phone rings. You can\'t answer — you\'re halfway through a job.' },
              { text: 'They hit voicemail. They call the next locksmith on Google.' },
              {
                text: 'You just lost a $185 job you didn\'t even know existed.',
                highlight: true,
              },
            ].map(({ time, text, highlight }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                  style={{ backgroundColor: highlight ? '#E85D04' : 'rgba(255,255,255,0.2)' }}
                />
                <p
                  className="text-base sm:text-lg leading-snug"
                  style={{ ...BODY, color: highlight ? '#fff' : 'rgba(255,255,255,0.55)' }}
                >
                  {time && (
                    <span className="text-[#E85D04] mr-2" style={MONO}>
                      {time}
                    </span>
                  )}
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm mb-10 border-t border-white/10 pt-6" style={BODY}>
            That happens <strong className="text-white/60">4–12 times a week</strong> to the average one-truck operation.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="font-black text-xl sm:text-2xl text-white mb-3" style={DISPLAY}>
              AnswerCare picks up every single one.
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed" style={BODY}>
              In under 2 seconds. Collects the job details. Texts you the booking the moment you put the wrench down.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Demo Recordings ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-4" style={BODY}>
              Hear it in action
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A]" style={DISPLAY}>
              Real calls. Real AI.
            </h2>
            <p className="mt-3 text-[#525252]" style={BODY}>
              (Names changed. Actual call recordings from our demo agent.)
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                scenario: 'Emergency lockout — caller stranded in a parking lot',
                duration: '1:10',
                desc: 'Caller locked out at night. AI collects address, confirms coverage, books same-night service.',
              },
              {
                scenario: 'Garage door off track — homeowner can\'t get car out',
                duration: '0:50',
                desc: 'Caller needs ASAP service. AI slots them into next available window, sends SMS confirmation.',
              },
              {
                scenario: 'Caller asks for a quote, wants to schedule drain cleaning',
                duration: '1:05',
                desc: 'AI gives ballpark rate, collects job details, books the appointment without a callback needed.',
              },
            ].map(({ scenario, duration, desc }) => (
              <div key={scenario} className="border border-[#E5E5E5] rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <a
                    href="tel:+18005551234"
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#E85D04' }}
                    title="Call the demo line to hear it live"
                  >
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 ml-0.5">
                      <path d="M5 3L13 8L5 13V3z" />
                    </svg>
                  </a>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-[#0A0A0A] text-sm" style={DISPLAY}>
                        &ldquo;{scenario}&rdquo;
                      </p>
                    </div>
                    <p className="text-[#525252] text-xs mb-2" style={{ ...MONO, color: '#525252' }}>
                      {duration}
                    </p>
                    <p className="text-[#525252] text-sm" style={BODY}>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-[#525252]" style={BODY}>
            Want to run your own test?{' '}
            <a href="tel:+18005551234" className="font-semibold underline underline-offset-2" style={{ color: '#E85D04' }}>
              Call the demo line →
            </a>
          </p>
        </div>
      </section>

      {/* ── Section 6: Guarantee ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FEC89A]/20 border-y border-[#E85D04]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-black text-[#0A0A0A] mb-6 leading-tight"
            style={{ ...DISPLAY, fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            20 booked jobs in 30 days.<br />
            Or you pay $0 and we Zelle you $500.
          </h2>

          <p className="text-[#525252] mb-10 max-w-xl mx-auto" style={BODY}>
            You hand us your phone line. We hand you a money-back guarantee and $500 for your time if we don&apos;t deliver. Here&apos;s how it works:
          </p>

          <div className="text-left grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              'We start tracking booked jobs from day 1.',
              'On day 31, we show you the booking log. You count.',
              'Below 20? You pay nothing and receive $500 via Zelle within 48 hours.',
              'At 20 or above? You continue at $199/month — cancel any month with 7 days notice.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#E5E5E5] rounded-xl p-4">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: '#E85D04', ...DISPLAY }}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-[#0A0A0A] leading-relaxed" style={BODY}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: '#E85D04', ...DISPLAY }}
          >
            Start your 30-day guarantee →
          </a>
        </div>
      </section>

      {/* ── Section 7: ROI Calculator ─────────────────────────────────── */}
      <TradesROICalc />

      {/* ── Section 8: Qualification ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A]" style={DISPLAY}>
              Who this is for.
            </h2>
            <p className="mt-3 text-[#525252]" style={BODY}>
              We only take clients where we can realistically hit our guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#E5E5E5] rounded-2xl p-6 sm:p-8">
              <h3 className="font-bold text-[#0A0A0A] mb-5 flex items-center gap-2" style={DISPLAY}>
                <span className="text-[#E85D04]">✓</span> This is for you if
              </h3>
              <ul className="space-y-3">
                {[
                  'You run a solo or small-team trade business (locksmith, plumber, HVAC, garage door, electrician, etc.)',
                  'You receive 40+ inbound calls per month',
                  'You\'re often on jobs and miss calls you can\'t answer',
                  'You can review and approve a custom call script in a 15-minute call',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#0A0A0A]" style={BODY}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E85D04]" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6.5 11.5 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 bg-[#F5F5F5]">
              <h3 className="font-bold text-[#0A0A0A] mb-5 flex items-center gap-2" style={DISPLAY}>
                <span className="text-[#525252]">✗</span> This isn&apos;t for you if
              </h3>
              <ul className="space-y-3">
                {[
                  'You have a full dispatch team that already answers every call',
                  'You want the AI to give technical diagnosis or safety advice over the phone',
                  'You want month-to-month tinkering without committing to a 30-day window',
                  'Your business does fewer than 40 inbound calls per month',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#525252]" style={BODY}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#525252]" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Pricing ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.15em] uppercase text-[#525252] mb-4" style={BODY}>
              Transparent pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A]" style={DISPLAY}>
              One plan. No surprises.
            </h2>
          </div>

          <div className="bg-white border-2 border-[#E85D04] rounded-2xl p-7 sm:p-10">
            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-black text-[#0A0A0A]" style={{ ...DISPLAY, fontSize: '48px' }}>$199</span>
                <span className="text-[#525252] text-lg" style={BODY}>/month</span>
              </div>
              <p className="text-[#525252] text-sm" style={BODY}>
                + <strong className="text-[#0A0A0A]">$497</strong> one-time setup fee{' '}
                <span className="text-xs">(non-refundable — covers script, integration, testing)</span>
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-[#FEC89A]/30 border border-[#E85D04]/20 text-[#0A0A0A] text-xs px-3 py-1.5 rounded-full" style={BODY}>
                🎁 <strong>Founding rate:</strong> Lock this price for life — 7 of 10 spots remaining
              </div>
            </div>

            <ul className="space-y-3 mb-8 border-t border-[#E5E5E5] pt-6">
              {[
                'Unlimited inbound calls (soft cap at 500/mo — call us at volume)',
                '24/7 coverage including weekends, nights, and holidays',
                'Custom call script built for your trade and service area',
                'Booking sync to Google Calendar, Jobber, Housecall Pro, or ServiceM8',
                'Real-time SMS to you on every booked job',
                'Monthly call log and performance report',
                'Number forwarding — your existing number, no porting',
                'US-based phone infrastructure (Twilio)',
                '30-day performance guarantee',
                '7-day cancellation notice — no contracts, no lock-in',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-[#0A0A0A]" style={BODY}>
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E85D04]" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6.5 11.5 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: '#E85D04', ...DISPLAY }}
            >
              Start your 30-day guarantee →
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 10: FAQ ────────────────────────────────────────────── */}
      <TradesFAQ />

      {/* ── Section 11: Founder Note ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-7 sm:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0"
                style={{ backgroundColor: '#0A0A0A', ...DISPLAY }}
              >
                R
              </div>
              <div>
                <p className="font-bold text-[#0A0A0A] text-sm" style={DISPLAY}>RDX</p>
                <p className="text-[#525252] text-xs" style={BODY}>Founder, AnswerCare AI</p>
              </div>
            </div>

            <div className="space-y-4 text-[#525252] text-sm leading-relaxed" style={BODY}>
              <p>
                Hey — I&apos;m RDX. I built AnswerCare AI after watching trade operators lose real money to voicemail,
                often multiple times a day. You&apos;re on a ladder. A customer calls. You can&apos;t answer.
                They hang up and call the next contractor on Google. That job never existed for you.
              </p>
              <p>
                I built this to fix that specific problem. I run this from India, my US hours are 6 AM–10 PM EST,
                and I&apos;m the person who takes your setup call. No support ticket. No queue. Just me and your custom call script.
              </p>
              <p>
                If we don&apos;t book 20 jobs in 30 days, the $500 shows up in your Zelle within 48 hours.
                That&apos;s what I hold myself to.
              </p>
            </div>

            <p className="mt-6 text-[#0A0A0A] font-bold text-base" style={{ ...DISPLAY, fontStyle: 'italic' }}>
              — RDX
            </p>
            <p className="mt-2 text-xs text-[#525252]" style={BODY}>
              <a href="mailto:rdx@answercare.ai" className="underline underline-offset-2 hover:text-[#E85D04] transition-colors">
                rdx@answercare.ai
              </a>
              {' '}· US support 6 AM–10 PM EST
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 12: Final CTA ──────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 sm:py-28 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ ...DISPLAY, fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            Stop losing $350 to voicemail.
          </h2>
          <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto" style={BODY}>
            Call the demo, or book a 15-minute setup call. Either way, you&apos;ll know in
            30 minutes whether this is for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+18005551234"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-sm w-full sm:w-auto transition-all hover:opacity-90"
              style={{ backgroundColor: '#E85D04', ...DISPLAY }}
            >
              <span>📞</span>
              Call the live demo: (800) 555-1234
            </a>
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl font-semibold text-white text-sm w-full sm:w-auto text-center border border-white/20 hover:border-white/50 transition-all"
              style={DISPLAY}
            >
              Book a 15-min setup call →
            </a>
          </div>

          <p className="mt-6 text-xs text-white/25" style={BODY}>
            20 booked jobs in 30 days — or you pay $0 and we Zelle you $500.
          </p>
        </div>
      </section>

      {/* ── Trades Footer ──────────────────────────────────────────────── */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30" style={BODY}>
            &copy; {new Date().getFullYear()} AnswerCare AI &nbsp;·&nbsp;{' '}
            <a href="mailto:rdx@answercare.ai" className="hover:text-white/60 transition-colors">
              rdx@answercare.ai
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30" style={BODY}>
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <span>&middot;</span>
            <a href="tel:+18005551234" className="hover:text-white/60 transition-colors" style={MONO}>
              (800) 555-1234
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
