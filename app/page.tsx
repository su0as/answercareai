import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import HomeFAQ from '@/components/HomeFAQ'
import HomeAudioPlayer from '@/components/HomeAudioPlayer'

export const metadata: Metadata = {
  title: 'AI Phone Agent for One-Person Trades | AnswerCare AI',
  description:
    'We answer every call, book 20 jobs in 30 days, or you don\'t pay. $199/month. Live in 5 days. For locksmiths, plumbers, garage door, HVAC, and solo trade operators.',
}

// ─── Design tokens ────────────────────────────────────────────────────────────
// paper:       #F5F2EC   warm off-white page background
// paper-deep:  #EBE7DD   section separator bands
// ink:         #0E0E0E   near-black text / contrast bands
// ink-soft:    #4A4641   secondary/muted text
// line:        #D5CFC1   1px hairline dividers
// accent:      #B3392D   cadmium red — ONE accent only (~2% of pixels)

const DISPLAY = {
  fontFamily: 'Fraunces, Georgia, serif',
  fontOpticalSizing: 'auto' as const,
}
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const CONTAINER = 'max-w-[1200px] mx-auto px-5 sm:px-10'

// Primary button — appears on FOUR places only: hero, audio, pricing, final CTA
const BTN_PRIMARY: React.CSSProperties = {
  backgroundColor: '#B3392D',
  color: '#F5F2EC',
  padding: '20px 32px',
  borderRadius: '6px',
  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
  fontWeight: 500,
  fontSize: '16px',
  display: 'inline-flex',
  alignItems: 'center',
  boxShadow: '0 1px 0 rgba(0,0,0,0.12)',
  textDecoration: 'none',
  letterSpacing: '0em',
}

// ─── Section label (editorial horizontal rule) ────────────────────────────────
function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-16 sm:mb-20">
      <span
        className="text-[11px] text-[#4A4641] tracking-[0.10em] whitespace-nowrap uppercase"
        style={MONO}
      >
        — {n} / {title}
      </span>
      <div className="flex-1 h-px bg-[#D5CFC1]" />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="bg-[#F5F2EC] text-[#0E0E0E]">

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Single unified block: headline + phone number + primary button.
          No separate "call" section below. Clears the 60px sticky nav.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pt-[108px] sm:pt-[136px] pb-24 sm:pb-32">
        <div className={CONTAINER}>

          {/* Eyebrow */}
          <p
            className="text-[11px] text-[#4A4641] tracking-[0.12em] uppercase mb-12"
            style={MONO}
          >
            24/7 AI Phone Agent for Solo Trade Operators
          </p>

          {/* Asymmetric 12-col grid: H1 left (9 cols), subhead anchored bottom-right (4 cols) */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-14 sm:mb-18">
            <h1
              className="col-span-12 lg:col-span-9 text-[#0E0E0E] leading-[0.95] tracking-[-0.035em]"
              style={{ ...DISPLAY, fontSize: 'clamp(64px, 8.5vw, 120px)' }}
            >
              Stop losing<br />
              jobs to<br />
              voicemail.
            </h1>

            <p
              className="col-span-12 lg:col-start-9 lg:col-span-4 mt-10 lg:mt-0 pb-2 text-[#4A4641] leading-[1.5]"
              style={{ ...BODY, fontSize: 'clamp(18px, 1.8vw, 22px)' }}
            >
              Every call answered. Every caller qualified. Every job booked — while you&apos;re under a sink, on a ladder, or halfway through the drive.
            </p>
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[11px] text-[#4A4641] uppercase tracking-[0.10em] whitespace-nowrap"
              style={MONO}
            >
              — call to hear it work
            </span>
            <div className="flex-1 h-px bg-[#D5CFC1]" />
          </div>

          {/* Phone number — the typographic anchor */}
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity mb-8"
            style={{ ...MONO, fontSize: 'clamp(44px, 8vw, 120px)', color: '#B3392D' }}
            aria-label="Call +1 800 555 1234"
          >
            +1 (800) 555-1234
          </a>

          {/* Primary button + secondary link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
            <a
              href="tel:+18005551234"
              style={BTN_PRIMARY}
              className="hover:opacity-85 transition-opacity"
            >
              Call the demo →
            </a>
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-[#4A4641] hover:text-[#0E0E0E] transition-colors underline underline-offset-4"
              style={BODY}
            >
              Or book a 15-minute setup call →
            </a>
          </div>

          {/* Tiny spec tags */}
          <div className="flex flex-wrap gap-3">
            {['setup: $497', 'monthly: $199', 'live in 5 days'].map((tag) => (
              <span key={tag} className="text-[12px] text-[#4A4641]/50" style={MONO}>
                [ {tag} ]
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — ROI CALCULATOR  (moved up from v2 position 7)
          Prospect calculates their own loss BEFORE the pitch.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="02" title="RUN YOUR NUMBERS" />
          <HomeROICalc />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — THE PROBLEM  (editorial narrative, not stat cards)
          Narrative 8 cols + marginalia stats 4 cols
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="03" title="THE PROBLEM" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-12 gap-y-10">

            {/* Narrative — 8 cols */}
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="text-[#0E0E0E] leading-[1.08] tracking-[-0.02em] mb-9"
                style={{ ...DISPLAY, fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                It&apos;s 2:43 PM.<br />
                You&apos;re under a sink.
              </h2>
              <p
                className="text-[#4A4641] leading-[1.65] mb-6"
                style={{ ...BODY, fontSize: '19px' }}
              >
                A customer calls with an emergency lockout — a $185 job that needs someone on-site in an hour. Your phone rings twice. You can&apos;t reach it. They hit voicemail. They hang up.
              </p>
              <p
                className="text-[#4A4641] leading-[1.65] mb-8"
                style={{ ...BODY, fontSize: '19px' }}
              >
                They call the next locksmith on Google. They book with him.
              </p>
              <p
                className="text-[#0E0E0E] leading-[1.4]"
                style={{ ...BODY, fontSize: '22px', fontWeight: 600 }}
              >
                You just lost a job you didn&apos;t even know existed.
              </p>
              <p
                className="mt-8 text-[#4A4641]/70 leading-[1.6]"
                style={{ ...BODY, fontSize: '16px', fontStyle: 'italic' }}
              >
                Hiring a receptionist costs $3,800/month, goes home at 5 PM, and can&apos;t answer two calls at once.
              </p>
            </div>

            {/* Marginalia stats — 4 cols */}
            <div className="col-span-12 lg:col-span-4">
              {[
                { n: '85%', label: 'of voicemail callers never call back', source: 'Invoca, 2024' },
                { n: '4–12×', label: 'per week this happens to the average solo shop', source: null },
                { n: '$4,200', label: 'average monthly revenue lost to missed calls', source: null },
              ].map(({ n, label, source }) => (
                <div key={n} className="border-t border-[#D5CFC1] pt-5 pb-6">
                  <span
                    className="block leading-[1.0] tracking-[-0.02em] mb-2"
                    style={{ ...MONO, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#B3392D' }}
                  >
                    {n}
                  </span>
                  <p className="text-[14px] text-[#4A4641] leading-[1.5]" style={BODY}>
                    {label}
                  </p>
                  {source && (
                    <p className="text-[11px] text-[#4A4641]/50 mt-1" style={MONO}>{source}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — HOW IT WORKS  (three steps, oversized mono numbers)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="04" title="HOW IT WORKS" />

          <div>
            {[
              {
                n: '01',
                title: 'Setup',
                detail: '30 minutes of your time',
                body: 'We learn your trade, service area, rates, and job types. We write your custom call script. You review and approve it.',
              },
              {
                n: '02',
                title: 'Go Live',
                detail: 'End of week 1',
                body: 'We forward your existing phone line. Every call now reaches the AI in under 2 seconds. Booking details land in your calendar and your SMS inbox.',
              },
              {
                n: '03',
                title: 'Guarantee Window',
                detail: 'Days 1–30',
                body: '20 booked jobs in 30 days. If we fall short, you pay nothing and receive $500 via Zelle within 48 hours. We track every booking from day one.',
              },
            ].map(({ n, title, detail, body }) => (
              <div
                key={n}
                className="border-t border-[#D5CFC1] py-8 sm:py-10 grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start"
              >
                {/* Oversized mono step number — 64-72px */}
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="leading-[1.0] text-[#D5CFC1]"
                    style={{ ...MONO, fontSize: 'clamp(40px, 5vw, 72px)' }}
                  >
                    {n}
                  </span>
                </div>

                {/* Title + tag */}
                <div className="col-span-10 sm:col-span-3 pt-2">
                  <p
                    className="text-[#0E0E0E] mb-1"
                    style={{ ...BODY, fontSize: '19px', fontWeight: 500 }}
                  >
                    {title}
                  </p>
                  <span className="text-[11px] text-[#4A4641]/60 tracking-[0.08em]" style={MONO}>
                    [ {detail} ]
                  </span>
                </div>

                {/* Body */}
                <div className="col-span-12 sm:col-span-8 mt-4 sm:mt-0">
                  <p className="text-[19px] text-[#4A4641] leading-[1.65]" style={BODY}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#D5CFC1]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — HEAR IT WORK  (audio proof)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="05" title="HEAR IT WORK" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-10">

            {/* Left — 4 cols */}
            <div className="col-span-12 lg:col-span-4">
              <h2
                className="text-[#0E0E0E] leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ ...DISPLAY, fontSize: 'clamp(28px, 3vw, 40px)' }}
              >
                Real calls.<br />
                Anonymized.
              </h2>
              <p className="text-[17px] text-[#4A4641] leading-[1.6] mb-7" style={BODY}>
                Press play — or call the demo line yourself. You&apos;ll speak with the same agent that answers your shop&apos;s calls.
              </p>
              <a
                href="tel:+18005551234"
                style={{
                  ...BTN_PRIMARY,
                  padding: '14px 24px',
                  fontSize: '15px',
                }}
                className="hover:opacity-85 transition-opacity"
              >
                Call demo →
              </a>
            </div>

            {/* Right — 8 cols */}
            <div className="col-span-12 lg:col-span-8">
              <HomeAudioPlayer />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — THE GUARANTEE  (largest typographic event)
          $500 inline in mono accent-red at headline scale
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="06" title="THE GUARANTEE" />

          {/* The headline — biggest type on the page */}
          <h2
            className="text-[#0E0E0E] leading-[1.02] tracking-[-0.025em] mb-14 sm:mb-18"
            style={{ ...DISPLAY, fontSize: 'clamp(52px, 8vw, 112px)' }}
          >
            20 booked jobs<br />
            in 30 days.<br />
            <br />
            Or you pay $0<br />
            and we Zelle you{' '}
            <span
              style={{
                fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
                color: '#B3392D',
                fontSize: '0.80em',
                letterSpacing: '-0.02em',
              }}
            >
              $500.
            </span>
          </h2>

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[19px] text-[#4A4641] leading-[1.65] mb-9" style={BODY}>
                You hand us your phone line. We hand you a money-back guarantee and $500 for your time if we don&apos;t deliver. Here&apos;s how it works:
              </p>

              <div>
                {[
                  'We start tracking booked jobs from day 1.',
                  'On day 31, we show you the log. You count.',
                  'Below 20? You pay nothing and receive $500 within 48 hours.',
                  'At 20 or above? You continue at $199/month. Cancel any month, 7 days notice.',
                ].map((item, i) => (
                  <div key={i} className="border-t border-[#D5CFC1] py-4 flex items-start gap-4">
                    <span className="text-[#B3392D] text-[11px] mt-0.5 flex-shrink-0" style={MONO}>—</span>
                    <p className="text-[17px] text-[#4A4641] leading-[1.55]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>

              <p className="mt-5 text-[12px] text-[#4A4641]/60" style={MONO}>
                ★ Yes, we&apos;ve paid this out. It happens. That&apos;s the deal.
              </p>

              <div className="mt-10">
                <a
                  href="https://calendly.com/answercare-ai/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={BTN_PRIMARY}
                  className="hover:opacity-85 transition-opacity"
                >
                  Start your 30-day guarantee →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 — PRICING  (id="pricing" for ROI calc anchor)
          One plan. One button. Transparent.
      ══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="07" title="PRICING" />

          <p
            className="text-[11px] text-[#4A4641]/60 uppercase tracking-[0.10em] mb-8"
            style={MONO}
          >
            one plan · no surprises
          </p>

          <div className="max-w-[640px]">
            <div className="border border-[#D5CFC1] rounded-sm p-8 sm:p-10">

              {/* Price display */}
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  className="text-[#0E0E0E] leading-[1.0] tracking-[-0.02em]"
                  style={{ ...MONO, fontSize: 'clamp(48px, 6vw, 72px)' }}
                >
                  $199
                </span>
                <span className="text-[20px] text-[#4A4641]" style={BODY}>/month</span>
              </div>
              <p className="text-[16px] text-[#4A4641] mb-2" style={BODY}>
                + <span className="text-[#0E0E0E]" style={MONO}>$497</span> one-time setup
              </p>
              <p className="text-[13px] text-[#4A4641]/60 mb-8" style={BODY}>
                Setup is non-refundable. Covers onboarding, script, integration, and testing.
              </p>

              {/* Founding rate tag */}
              <div className="bg-[#F5F2EC] border border-[#D5CFC1] rounded px-4 py-2.5 mb-8 inline-block">
                <p className="text-[12px] text-[#4A4641]" style={MONO}>
                  ★ FOUNDING RATE — 7 of 20 spots remaining. Rate locked for life.
                </p>
              </div>

              {/* Features */}
              <div className="border-t border-[#D5CFC1] mb-8">
                {[
                  'Unlimited calls (soft cap 500/mo)',
                  '24/7 — nights, weekends, holidays',
                  'Custom script for your trade and service area',
                  'Booking into Google Calendar, Jobber, Housecall Pro, ServiceM8',
                  'Real-time SMS on every booking',
                  'Monthly call log and performance report',
                  'US phone number, forwarded from your existing line',
                  '30-day performance guarantee',
                  '7-day cancellation notice, no contract',
                ].map((f) => (
                  <div key={f} className="border-b border-[#D5CFC1]/50 py-3 flex items-start gap-3">
                    <span className="text-[#B3392D] text-[11px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
                    <p className="text-[15px] text-[#4A4641] leading-[1.5]" style={BODY}>{f}</p>
                  </div>
                ))}
              </div>

              {/* Primary button — full width inside card */}
              <a
                href="https://calendly.com/answercare-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...BTN_PRIMARY, display: 'flex', justifyContent: 'center' }}
                className="hover:opacity-85 transition-opacity"
              >
                Start your 30-day guarantee →
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 — WHO IT'S FOR  (visually differentiated columns)
          Left: dark, accent arrows. Right: muted, em-dashes.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="08" title="WHO IT'S FOR" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-12">

            {/* FOR — confident, dark, accent red arrows */}
            <div className="col-span-12 lg:col-span-5">
              <h3
                className="text-[#0E0E0E] mb-7"
                style={{ ...BODY, fontSize: '19px', fontWeight: 600 }}
              >
                This is for you if
              </h3>
              <div>
                {[
                  'You\'re a one-person or two-person trade shop',
                  'You do $200K+ in annual revenue',
                  'You receive 40+ inbound calls per month',
                  'You miss jobs because you\'re on jobs',
                ].map((item) => (
                  <div key={item} className="border-t border-[#D5CFC1] py-4 flex items-start gap-3">
                    <span className="text-[#B3392D] text-[12px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
                    <p className="text-[17px] text-[#0E0E0E] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>
            </div>

            {/* Gap */}
            <div className="hidden lg:block col-span-1" />

            {/* NOT FOR — quiet, muted, em-dashes */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <h3
                className="text-[#4A4641] mb-7"
                style={{ ...BODY, fontSize: '19px', fontWeight: 400 }}
              >
                This isn&apos;t for you if
              </h3>
              <div>
                {[
                  'You already have a dispatcher who never misses a call',
                  'You want the AI to give technical diagnoses',
                  'You want month-to-month without a 30-day commitment',
                  'You do under $200K/year',
                ].map((item) => (
                  <div key={item} className="border-t border-[#D5CFC1] py-4 flex items-start gap-3">
                    <span className="text-[#4A4641]/40 text-[12px] mt-0.5 flex-shrink-0" style={MONO}>—</span>
                    <p className="text-[17px] text-[#4A4641] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9 — FAQ  (mono Q numbers, one open at a time)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="09" title="QUESTIONS" />
          <div className="max-w-3xl">
            <HomeFAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 10 — FOUNDER NOTE  (trust, 4 sentences)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="10" title="WHO'S BEHIND THIS" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-12 gap-y-10">

            {/* Photo placeholder */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <div
                className="w-40 h-40 sm:w-full sm:aspect-square rounded-sm border border-[#D5CFC1] flex items-center justify-center"
                style={{ backgroundColor: '#D5CFC1' }}
              >
                <span className="text-[12px] text-[#4A4641]/50" style={MONO}>[ photo ]</span>
              </div>
              <p className="mt-3 text-[11px] text-[#4A4641]/40" style={MONO}>
                real photo pending
              </p>
            </div>

            {/* Letter — 7 cols */}
            <div className="col-span-12 sm:col-span-8 lg:col-span-7">
              <h3
                className="text-[#0E0E0E] mb-6"
                style={{ ...BODY, fontSize: '22px', fontWeight: 500 }}
              >
                Hi, I&apos;m RDX.
              </h3>
              <div
                className="text-[#4A4641] leading-[1.7] space-y-5"
                style={{ ...BODY, fontSize: '19px' }}
              >
                <p>
                  I built AnswerCare from India because I kept watching small trade shops lose real money to voicemail. I&apos;m the person who&apos;ll take your setup call — no support queue, no account manager layer.
                </p>
                <p>
                  If the 30-day guarantee doesn&apos;t land the way you hoped, I Zelle you $500 within 48 hours. That&apos;s the standard I hold myself to.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-6" style={{ ...MONO, fontSize: '13px' }}>
                <a
                  href="mailto:rdx@answercare.ai"
                  className="text-[#0E0E0E] hover:opacity-60 transition-opacity underline underline-offset-4"
                >
                  rdx@answercare.ai
                </a>
                <a
                  href="https://calendly.com/answercare-ai/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A4641]/60 hover:text-[#0E0E0E] transition-colors"
                >
                  calendly.com/answercare-setup
                </a>
              </div>

              <p
                className="mt-8 text-[#0E0E0E]"
                style={{ ...DISPLAY, fontSize: '22px', fontStyle: 'italic' }}
              >
                — RDX
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 11 — FINAL CTA  (full-bleed ink band)
          Last conversion moment. Phone number is the typographic event.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0E0E0E] py-24 sm:py-32">
        <div className={CONTAINER}>

          <p
            className="text-[11px] text-white/25 uppercase tracking-[0.12em] mb-10"
            style={MONO}
          >
            one last thing —
          </p>

          <h2
            className="text-[#F5F2EC] leading-[1.05] tracking-[-0.025em] mb-10"
            style={{ ...DISPLAY, fontSize: 'clamp(44px, 7vw, 88px)' }}
          >
            Stop losing $185 jobs<br />
            to voicemail.
          </h2>

          {/* Phone number — largest mono on the page */}
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity mb-10"
            style={{ ...MONO, fontSize: 'clamp(44px, 8vw, 112px)', color: '#B3392D' }}
          >
            +1 (800) 555-1234
          </a>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
            <a
              href="tel:+18005551234"
              style={{ ...BTN_PRIMARY, backgroundColor: '#F5F2EC', color: '#0E0E0E' }}
              className="hover:opacity-85 transition-opacity"
            >
              Call the demo
            </a>
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-[#F5F2EC]/60 hover:text-[#F5F2EC] transition-colors underline underline-offset-4"
              style={BODY}
            >
              Book a 15-minute setup call →
            </a>
          </div>

          {/* Spec tags */}
          <div className="flex flex-wrap gap-3">
            {['setup $497', 'monthly $199', 'live in 5 days', 'cancel anytime'].map((tag) => (
              <span key={tag} className="text-[12px] text-white/20" style={MONO}>
                [ {tag} ]
              </span>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
