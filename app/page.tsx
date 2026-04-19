import type { Metadata } from 'next'
import Link from 'next/link'
import HomeROICalc from '@/components/HomeROICalc'
import HomeFAQ from '@/components/HomeFAQ'
import HomeAudioPlayer from '@/components/HomeAudioPlayer'

export const metadata: Metadata = {
  title: 'AI Phone Agent for One-Person Trades | AnswerCare AI',
  description:
    'We answer every call, book 20 jobs in 30 days, or you don\'t pay. $199/month. Live in 5 days. For locksmiths, plumbers, garage door, HVAC, and solo trade operators.',
}

// ─── Design tokens ────────────────────────────────────────────────────────
// paper:       #F5F2EC   warm off-white background
// paper-deep:  #EBE7DD   darker band for section separation
// ink:         #0E0E0E   near-black for type / contrast bands
// ink-soft:    #4A4641   muted secondary text
// line:        #D5CFC1   warm tan for 1px dividers
// accent:      #B3392D   cadmium red — the ONE accent color
// accent-soft: #E8D6D2   subtle accent tint

const DISPLAY = {
  fontFamily: 'Fraunces, Georgia, serif',
  fontOpticalSizing: 'auto' as const,
}
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const CONTAINER = 'max-w-[1200px] mx-auto px-6 sm:px-10'

// ─── Section label (editorial horizontal rule) ─────────────────────────────
function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-14 sm:mb-18">
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

      {/* ────────────────────────────────────────────────────────────────
          SECTION 1: HERO
          Asymmetric: headline left 9-col, subhead bottom-right, phone declaration
      ──────────────────────────────────────────────────────────────── */}
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28">
        <div className={CONTAINER}>
          {/* Eyebrow */}
          <p
            className="text-[11px] text-[#4A4641] tracking-[0.12em] uppercase mb-10"
            style={MONO}
          >
            24/7 AI Phone Agent for Solo Trade Operators
          </p>

          {/* Asymmetric grid: headline + subhead */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end">
            <h1
              className="col-span-12 lg:col-span-9 text-[#0E0E0E] leading-[1.0] tracking-[-0.03em]"
              style={{
                ...DISPLAY,
                fontSize: 'clamp(52px, 8vw, 96px)',
              }}
            >
              Stop losing<br />
              jobs to<br />
              voicemail.
            </h1>

            <p
              className="col-span-12 lg:col-start-9 lg:col-span-4 mt-8 lg:mt-0 pb-1 text-[#4A4641] leading-[1.55]"
              style={{ ...BODY, fontSize: '18px' }}
            >
              Every call answered, every caller qualified, every job booked — while you&apos;re under a sink, on a ladder, or halfway through the drive.
            </p>
          </div>

          {/* Phone number as the primary declaration */}
          <div className="mt-14 pt-8 border-t border-[#D5CFC1]">
            <p
              className="text-[11px] text-[#4A4641] uppercase tracking-[0.12em] mb-5"
              style={MONO}
            >
              Call to hear it work. Free. Two minutes.
            </p>
            <a
              href="tel:+18005551234"
              className="block text-[#B3392D] leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity"
              style={{ ...MONO, fontSize: 'clamp(38px, 7vw, 88px)' }}
              aria-label="Call demo line at +1 (800) 555-1234"
            >
              +1 (800) 555-1234
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#4A4641] hover:text-[#0E0E0E] transition-colors underline underline-offset-4"
              style={BODY}
            >
              Book a 15-min setup call →
            </a>
            <span className="text-[#D5CFC1] text-[12px]">
              ·
            </span>
            <span className="text-[13px] text-[#4A4641]" style={MONO}>
              [ setup: $497 &nbsp;·&nbsp; monthly: $199 ]
            </span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 2: CALL IT NOW  (ink black band)
      ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-16 sm:py-20">
        <div className={CONTAINER}>
          <p
            className="text-[11px] text-white/30 uppercase tracking-[0.12em] mb-7"
            style={MONO}
          >
            Place the call. Hear it work.
          </p>
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity"
            style={{ ...MONO, fontSize: 'clamp(36px, 7vw, 96px)', color: '#B3392D' }}
          >
            +1 (800) 555-1234
          </a>
          <p
            className="mt-6 text-[15px] text-white/40 max-w-lg leading-[1.55]"
            style={BODY}
          >
            You&apos;ll speak with the same AI that&apos;ll answer your shop&apos;s calls. Ask it anything — scheduling, emergencies, pricing questions. The call is free and takes 2 minutes.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 3: THE PROBLEM  (editorial narrative, not stat cards)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="01" title="THE PROBLEM" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-10">
            {/* Narrative — 7 cols */}
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="text-[#0E0E0E] leading-[1.08] tracking-[-0.02em] mb-8"
                style={{ ...DISPLAY, fontSize: 'clamp(32px, 4.5vw, 52px)' }}
              >
                It&apos;s 2:43 PM.<br />
                You&apos;re under a sink.
              </h2>
              <p
                className="text-[#4A4641] leading-[1.65] mb-6"
                style={{ ...BODY, fontSize: '18px' }}
              >
                A customer calls with an emergency lockout — a $185 job that needs someone on-site in an hour. Your phone rings twice. You can&apos;t reach it. They hit voicemail. They hang up.
              </p>
              <p
                className="text-[#4A4641] leading-[1.65] mb-6"
                style={{ ...BODY, fontSize: '18px' }}
              >
                They call the next locksmith on Google. They book with him.
              </p>
              <p
                className="text-[#0E0E0E] leading-[1.5]"
                style={{ ...BODY, fontSize: '18px', fontWeight: 500 }}
              >
                You just lost a job you didn&apos;t even know existed.
              </p>
            </div>

            {/* Stats — 5 cols, vertical list with mono numbers (NOT 3-col card grid) */}
            <div className="col-span-12 lg:col-span-5 space-y-0">
              {[
                { n: '85%', label: 'of callers who hit voicemail never call back.', source: 'Invoca, 2024' },
                { n: '4–12×', label: 'per week this happens to the average one-truck shop.', source: null },
                { n: '$4,200', label: 'average monthly revenue lost to missed calls, at a $350 average job.', source: null },
              ].map(({ n, label, source }) => (
                <div key={n} className="border-t border-[#D5CFC1] pt-6 pb-6 flex items-start gap-5">
                  <span
                    className="text-[#B3392D] leading-[1.0] tracking-[-0.02em] flex-shrink-0"
                    style={{ ...MONO, fontSize: 'clamp(28px, 3.5vw, 40px)' }}
                  >
                    {n}
                  </span>
                  <div>
                    <p className="text-[14px] text-[#4A4641] leading-[1.55]" style={BODY}>
                      {label}
                    </p>
                    {source && (
                      <p className="text-[11px] text-[#4A4641]/50 mt-1" style={MONO}>
                        {source}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring aside */}
          <div className="mt-12 pt-8 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]" style={MONO}>
              ↳ Hiring a receptionist costs $3,800/month, goes home at 5 PM, and can&apos;t answer two calls at once.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 4: HOW IT WORKS  (vertical list with hairline rules)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="02" title="HOW IT WORKS" />

          <div className="space-y-0">
            {[
              {
                n: '01',
                title: 'Setup',
                detail: 'Week 1',
                body: '30 minutes of your time. We learn your trade, service area, rates, and job types. We write your custom call script. You review and approve it.',
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
              <div key={n} className="border-t border-[#D5CFC1] py-8 grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start">
                {/* Oversized mono step number */}
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="text-[#D5CFC1] leading-[1.0]"
                    style={{ ...MONO, fontSize: 'clamp(32px, 3.5vw, 48px)' }}
                  >
                    {n}
                  </span>
                </div>
                {/* Step title + detail tag */}
                <div className="col-span-10 sm:col-span-3">
                  <p
                    className="text-[#0E0E0E] mb-1"
                    style={{ ...BODY, fontSize: '17px', fontWeight: 500 }}
                  >
                    {title}
                  </p>
                  <span
                    className="text-[11px] text-[#4A4641]/60 tracking-[0.08em]"
                    style={MONO}
                  >
                    [ {detail} ]
                  </span>
                </div>
                {/* Body */}
                <div className="col-span-12 sm:col-span-8 sm:col-start-5 mt-3 sm:mt-0">
                  <p className="text-[16px] text-[#4A4641] leading-[1.6]" style={BODY}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#D5CFC1]" />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 5: HEAR IT IN ACTION  (custom audio players)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="03" title="HEAR IT WORK" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <h2
                className="text-[#0E0E0E] leading-[1.1] tracking-[-0.02em] mb-4"
                style={{ ...DISPLAY, fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                Real calls.<br />
                Anonymized.
              </h2>
              <p className="text-[15px] text-[#4A4641] leading-[1.6]" style={BODY}>
                Press play — or call the demo line yourself. You&apos;ll speak with the same agent that answers your shop&apos;s calls.
              </p>
              <a
                href="tel:+18005551234"
                className="mt-5 inline-block text-[13px] text-[#B3392D] underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={MONO}
              >
                +1 (800) 555-1234 →
              </a>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <HomeAudioPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 6: THE GUARANTEE  (largest type on the page)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="04" title="THE GUARANTEE" />

          {/* Massive headline */}
          <div className="mb-14 sm:mb-18">
            <h2
              className="text-[#0E0E0E] leading-[1.02] tracking-[-0.025em]"
              style={{ ...DISPLAY, fontSize: 'clamp(52px, 8.5vw, 120px)' }}
            >
              20 booked jobs<br />
              in 30 days.<br />
              <br />
              Or you pay $0<br />
              and we Zelle you{' '}
              <span
                style={{
                  ...MONO,
                  color: '#B3392D',
                  fontSize: '0.78em',
                  letterSpacing: '-0.02em',
                }}
              >
                $500.
              </span>
            </h2>
          </div>

          {/* Mechanics */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-8" style={BODY}>
                You hand us your phone line. We hand you a money-back guarantee and $500 for your time if we don&apos;t deliver. Here&apos;s how it works:
              </p>
              <div className="space-y-0">
                {[
                  'We start tracking booked jobs from day 1.',
                  'On day 31, we show you the log. You count.',
                  'Below 20? You pay nothing and receive $500 within 48 hours.',
                  'At 20 or above? You continue at $199/month. Cancel any month, 7 days notice.',
                ].map((item, i) => (
                  <div key={i} className="border-t border-[#D5CFC1] py-4 flex items-start gap-4">
                    <span className="text-[11px] text-[#B3392D] flex-shrink-0 mt-1" style={MONO}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[15px] text-[#4A4641] leading-[1.55]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>

              {/* Marginalia note */}
              <p className="mt-5 text-[12px] text-[#4A4641]/60" style={MONO}>
                ★ Yes, we&apos;ve paid this out. It happens. That&apos;s the deal.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0">
              <div className="border border-[#D5CFC1] rounded-sm p-6">
                <p className="text-[11px] text-[#4A4641]/60 uppercase tracking-[0.10em] mb-3" style={MONO}>
                  qualifying criteria
                </p>
                {[
                  'One-person or two-person trade shop',
                  '$200K+ annual revenue',
                  '40+ inbound calls/month',
                  'Approve a 15-min script review',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 mb-2.5">
                    <span className="text-[#B3392D] text-[11px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
                    <p className="text-[13px] text-[#4A4641] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[14px] text-[#F5F2EC] bg-[#0E0E0E] px-6 py-3 rounded hover:opacity-80 transition-opacity"
              style={{ ...BODY, fontWeight: 500 }}
            >
              Start your 30-day guarantee →
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 7: ROI CALCULATOR  (2:3 asymmetric split)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="05" title="RUN THE NUMBERS" />
          <HomeROICalc />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 8: QUALIFICATION  (two columns, different visual treatment)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="06" title="WHO IT'S FOR" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-12">
            {/* For — accent red bullets */}
            <div className="col-span-12 lg:col-span-5">
              <h3
                className="text-[#0E0E0E] mb-7"
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                This is for you if
              </h3>
              <div className="space-y-0">
                {[
                  'You\'re a one-person or two-person trade shop',
                  'You do $200K+ in annual revenue',
                  'You receive 40+ inbound calls per month',
                  'You miss jobs because you\'re on jobs',
                ].map((item) => (
                  <div key={item} className="border-t border-[#D5CFC1] py-4 flex items-start gap-3">
                    <span className="text-[#B3392D] text-[12px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
                    <p className="text-[15px] text-[#0E0E0E] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>
            </div>

            {/* Gap spacer */}
            <div className="hidden lg:block col-span-1" />

            {/* Not for — muted dashes */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <h3
                className="text-[#4A4641] mb-7"
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                This isn&apos;t for you if
              </h3>
              <div className="space-y-0">
                {[
                  'You already have a dispatcher who never misses a call',
                  'You want the AI to give technical diagnoses',
                  'You want month-to-month without a 30-day commitment',
                  'You do under $200K/year',
                ].map((item) => (
                  <div key={item} className="border-t border-[#D5CFC1] py-4 flex items-start gap-3">
                    <span className="text-[#4A4641]/50 text-[12px] mt-0.5 flex-shrink-0" style={MONO}>—</span>
                    <p className="text-[15px] text-[#4A4641] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 9: PRICING  (one card, no toggle, transparent)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="07" title="PRICING" />

          <div className="max-w-2xl">
            <div className="border border-[#D5CFC1] rounded-sm p-8 sm:p-10">
              <p
                className="text-[11px] text-[#4A4641]/60 uppercase tracking-[0.10em] mb-6"
                style={MONO}
              >
                one plan · no surprises
              </p>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-[#0E0E0E] leading-[1.0] tracking-[-0.02em]"
                  style={{ ...MONO, fontSize: 'clamp(42px, 6vw, 64px)' }}
                >
                  $199
                </span>
                <span className="text-[18px] text-[#4A4641]" style={BODY}>/month</span>
              </div>
              <p className="text-[14px] text-[#4A4641] mb-2" style={BODY}>
                + <span className="text-[#0E0E0E] font-medium" style={MONO}>$497</span> one-time setup
              </p>
              <p className="text-[12px] text-[#4A4641]/60 mb-8" style={BODY}>
                Setup is non-refundable. Covers onboarding, script, integration, and testing.
              </p>

              {/* Founding note */}
              <div className="border border-[#D5CFC1] rounded px-4 py-3 mb-8 inline-block">
                <p className="text-[12px] text-[#4A4641]" style={MONO}>
                  ★ Founding rate — 7 of 10 spots remaining. Rate locked for life.
                </p>
              </div>

              {/* Features */}
              <div className="border-t border-[#D5CFC1] pt-6 space-y-0 mb-8">
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
                    <p className="text-[14px] text-[#4A4641] leading-[1.5]" style={BODY}>{f}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/answercare-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[14px] text-[#F5F2EC] bg-[#0E0E0E] px-6 py-3 rounded hover:opacity-80 transition-opacity w-full sm:w-auto justify-center sm:justify-start"
                style={{ ...BODY, fontWeight: 500 }}
              >
                Start your 30-day guarantee →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 10: FAQ  (hairline rules, mono Q numbers)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="08" title="QUESTIONS" />

          <div className="max-w-3xl">
            <HomeFAQ />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 11: FOUNDER NOTE  (trust through transparency)
      ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="09" title="WHO BUILDS THIS" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-12 gap-y-10">
            {/* Photo placeholder */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <div className="w-32 h-32 sm:w-full sm:aspect-square rounded-sm bg-[#EBE7DD] border border-[#D5CFC1] flex items-center justify-center">
                <span className="text-[13px] text-[#4A4641]" style={MONO}>rdx@</span>
              </div>
              <p className="mt-3 text-[11px] text-[#4A4641]/60" style={MONO}>
                [ add real photo here ]
              </p>
            </div>

            {/* Letter */}
            <div className="col-span-12 sm:col-span-8 lg:col-span-7">
              <div
                className="text-[#4A4641] leading-[1.7] space-y-5"
                style={{ ...BODY, fontSize: '17px' }}
              >
                <p>
                  Hey — I&apos;m RDX. I run AnswerCare from India. I built this because I watched too many small trade shops lose real money to voicemail while I sat on the other side of the world knowing I could fix it.
                </p>
                <p>
                  I&apos;m the person who&apos;ll take your setup call. My email is{' '}
                  <a
                    href="mailto:rdx@answercare.ai"
                    className="text-[#0E0E0E] underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    rdx@answercare.ai
                  </a>
                  {' '}and my Calendly is{' '}
                  <a
                    href="https://calendly.com/answercare-ai/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0E0E0E] underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    here
                  </a>
                  . No ticket queue. Just me.
                </p>
                <p>
                  If the guarantee doesn&apos;t land the way you hoped, the $500 shows up in 48 hours. That&apos;s the standard I hold myself to.
                </p>
              </div>

              {/* Signature */}
              <p
                className="mt-7 text-[#0E0E0E]"
                style={{ ...DISPLAY, fontSize: '22px', fontStyle: 'italic' }}
              >
                — RDX
              </p>
              <p className="mt-2 text-[12px] text-[#4A4641]/60" style={MONO}>
                rdx@answercare.ai &nbsp;·&nbsp; US support 6 AM–10 PM EST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          SECTION 12: FINAL CTA  (ink black band)
      ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-20 sm:py-28">
        <div className={CONTAINER}>
          <p
            className="text-[11px] text-white/25 uppercase tracking-[0.12em] mb-8"
            style={MONO}
          >
            — 10 / START HERE
          </p>
          <h2
            className="text-[#F5F2EC] leading-[1.05] tracking-[-0.025em] mb-8"
            style={{ ...DISPLAY, fontSize: 'clamp(38px, 6vw, 76px)' }}
          >
            Stop losing $185 jobs<br />
            to voicemail.
          </h2>
          <p
            className="text-[16px] text-white/40 max-w-xl leading-[1.6] mb-12"
            style={BODY}
          >
            Call the demo, or book a 15-minute setup call. Either way, you&apos;ll know in 30 minutes whether this is for you.
          </p>

          {/* Phone number — the typographic event */}
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity mb-8"
            style={{ ...MONO, fontSize: 'clamp(36px, 6.5vw, 80px)', color: '#B3392D' }}
          >
            +1 (800) 555-1234
          </a>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[14px] text-[#0E0E0E] bg-[#F5F2EC] px-6 py-3 rounded hover:opacity-80 transition-opacity"
              style={{ ...BODY, fontWeight: 500 }}
            >
              Book a 15-min setup call →
            </a>
            <span className="text-[12px] text-white/20" style={MONO}>
              [ $497 setup · $199/month · 20 jobs guaranteed ]
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}
