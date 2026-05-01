import type { Metadata } from 'next'
import HomeROICalc from '@/components/HomeROICalc'
import HomeFAQ from '@/components/HomeFAQ'
import HomeAudioPlayer from '@/components/HomeAudioPlayer'

export const metadata: Metadata = {
  title: 'AI Phone Agent for One-Person Trades | AnswerCare AI',
  description:
    'Stop losing jobs to voicemail. AI phone agent for solo trade operators — books 20 jobs in 30 days or your first month is free. Plans from $99/month, $0 setup. Live in 5 days.',
}

// ─── Design tokens ─────────────────────────────────────────────────────────────
// paper:       #F5F2EC   warm off-white page background
// paper-deep:  #EBE7DD   alternating section bands
// ink:         #0E0E0E   near-black type / contrast bands
// ink-soft:    #4A4641   secondary/muted text
// line:        #D5CFC1   1px hairline dividers
// accent:      #B3392D   cadmium red — ONE accent, ~3% of pixels max
// success:     #2D6A4F   ONLY for "first month free" badge and comparison checkmarks

const DISPLAY = {
  fontFamily: 'Fraunces, Georgia, serif',
  fontOpticalSizing: 'auto' as const,
}
const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const CONTAINER = 'max-w-[1200px] mx-auto px-5 sm:px-10'

// Primary button — exactly 4 canonical placements: nav, hero, pricing, final CTA
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

// Secondary (ghost) button
const BTN_SECONDARY: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#0E0E0E',
  padding: '20px 32px',
  borderRadius: '6px',
  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
  fontWeight: 500,
  fontSize: '16px',
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid rgba(14,14,14,0.2)',
  textDecoration: 'none',
  letterSpacing: '0em',
}

// ─── Section label ──────────────────────────────────────────────────────────────
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

// ─── Comparison table data ──────────────────────────────────────────────────────
type CellVal = true | false | string

interface CompRow {
  feature: string
  voicemail: CellVal
  human: CellVal
  answering: CellVal
  answercare: CellVal
}

const compRows: CompRow[] = [
  { feature: 'Cost per month', voicemail: '$0', human: '$3,800+', answering: '$255+/mo', answercare: '$199/mo *' },
  { feature: '24/7 coverage', voicemail: false, human: 'No (9–5 only)', answering: true, answercare: true },
  { feature: 'Answers in < 2 seconds', voicemail: false, human: 'Usually', answering: 'Varies', answercare: 'Always' },
  { feature: 'Never on lunch break', voicemail: false, human: false, answering: false, answercare: true },
  { feature: 'Books into your calendar', voicemail: false, human: 'Manual', answering: 'Manual', answercare: 'Automatic' },
  { feature: 'Custom script for your trade', voicemail: false, human: 'Weeks to train', answering: 'Generic', answercare: 'Day 1, yours' },
  { feature: 'SMS to you on every booking', voicemail: false, human: 'Usually', answering: 'Sometimes', answercare: 'Every call' },
  { feature: 'Handles 2 calls at once', voicemail: false, human: false, answering: true, answercare: true },
  { feature: 'Approx. cost per booked job', voicemail: '—', human: '~$38', answering: '~$15', answercare: '~$4' },
]

function CellDisplay({ value, isAnswerCare }: { value: CellVal; isAnswerCare?: boolean }) {
  if (value === true) {
    return (
      <span style={{ color: '#2D6A4F', fontWeight: 600, fontFamily: '"Inter Tight", Inter, sans-serif', fontSize: '15px' }}>
        ✓
      </span>
    )
  }
  if (value === false) {
    return (
      <span style={{ color: '#4A4641', opacity: 0.3, fontFamily: '"JetBrains Mono", monospace', fontSize: '13px' }}>
        —
      </span>
    )
  }
  return (
    <span
      style={{
        color: isAnswerCare ? '#0E0E0E' : '#4A4641',
        fontFamily: '"Inter Tight", Inter, sans-serif',
        fontSize: isAnswerCare ? '14px' : '13px',
        fontWeight: isAnswerCare ? 600 : 400,
      }}
    >
      {value}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="bg-[#F5F2EC] text-[#0E0E0E]">

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          One block: headline + phone + primary CTA. No second "call" section.
          Clears 64px sticky nav with pt-[108px].
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-[108px] sm:pt-[140px] pb-24 sm:pb-32">
        <div className={CONTAINER}>

          {/* Eyebrow */}
          <p
            className="text-[11px] text-[#4A4641] tracking-[0.12em] uppercase mb-12"
            style={MONO}
          >
            24/7 PHONE ANSWERING · BUILT FOR SOLO TRADE OPERATORS
          </p>

          {/* Asymmetric 12-col: H1 left (9), subhead bottom-right (4) */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-14">
            <h1
              className="col-span-12 lg:col-span-9 text-[#0E0E0E] leading-[0.95] tracking-[-0.035em]"
              style={{ ...DISPLAY, fontSize: 'clamp(64px, 8.5vw, 120px)' }}
            >
              Stop losing<br />
              $4,375/mo<br />
              to voicemail.
            </h1>

            <p
              className="col-span-12 lg:col-start-9 lg:col-span-4 mt-10 lg:mt-0 pb-2 text-[#4A4641] leading-[1.5]"
              style={{ ...BODY, fontSize: 'clamp(18px, 1.8vw, 22px)' }}
            >
              We answer every call. We qualify every caller. We book every job — while you&apos;re under a sink, on a ladder, or halfway through the drive.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[11px] text-[#4A4641] uppercase tracking-[0.10em] whitespace-nowrap"
              style={MONO}
            >
              — call to hear it work
            </span>
            <div className="flex-1 h-px bg-[#D5CFC1]" />
          </div>

          {/* Phone number — largest element in the hero */}
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity mb-8"
            style={{ ...MONO, fontSize: 'clamp(44px, 8vw, 120px)', color: '#B3392D' }}
            aria-label="Call +1 800 555 1234"
          >
            +1 (800) 555-1234
          </a>

          {/* Primary + secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
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
              style={BTN_SECONDARY}
              className="hover:bg-[#E8D6D2] hover:border-[#B3392D] hover:text-[#B3392D] transition-all"
            >
              Book a 15-min setup call
            </a>
          </div>

          {/* Tag row — "FIRST MONTH FREE" in success green */}
          <div className="flex flex-wrap gap-2.5">
            <span
              className="text-[13px] px-2.5 py-1 rounded"
              style={{
                ...MONO,
                color: '#2D6A4F',
                backgroundColor: 'rgba(45,106,79,0.08)',
                border: '1px solid rgba(45,106,79,0.2)',
                letterSpacing: '0.12em',
              }}
            >
              [ FIRST MONTH FREE ]
            </span>
            {['$497 SETUP', '$199/MO AFTER', 'LIVE IN 5 DAYS'].map((tag) => (
              <span key={tag} className="text-[13px] text-[#4A4641]/50" style={{ ...MONO, letterSpacing: '0.12em' }}>
                [ {tag} ]
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — TRUST SIGNAL BAND
          Four quantifiable claims. No fake logos. No invented testimonials.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-[#EBE7DD] border-y border-[#D5CFC1]">
        <div className={CONTAINER}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {[
              { metric: '< 2 sec', label: 'to pick up' },
              { metric: '24/7/365', label: 'coverage, no exceptions' },
              { metric: '100%', label: 'of calls logged and transcribed' },
              { metric: '5 days', label: 'average setup to live' },
            ].map(({ metric, label }) => (
              <div key={metric} className="text-center sm:text-left">
                <div
                  className="leading-[1.0] tracking-[-0.02em] mb-2"
                  style={{ ...MONO, fontSize: 'clamp(24px, 3vw, 36px)', color: '#0E0E0E' }}
                >
                  {metric}
                </div>
                <p className="text-[13px] text-[#4A4641] leading-[1.4]" style={BODY}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — ROI CALCULATOR
          Prospect calculates their own loss before reading the pitch.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="03" title="RUN YOUR NUMBERS" />
          <HomeROICalc />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — THE PROBLEM
          Editorial narrative (8 cols) + marginalia metrics (4 cols).
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="04" title="THE PROBLEM" />

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
              <p className="text-[#4A4641] leading-[1.65] mb-6" style={{ ...BODY, fontSize: '19px' }}>
                A customer calls with an emergency lockout — a $185 job that needs someone on-site in an hour. Your phone rings twice. You can&apos;t reach it. They hit voicemail. They hang up.
              </p>
              <p className="text-[#4A4641] leading-[1.65] mb-8" style={{ ...BODY, fontSize: '19px' }}>
                They call the next locksmith on Google. They book with him.
              </p>
              <p className="text-[#0E0E0E] leading-[1.4] mb-8" style={{ ...BODY, fontSize: '22px', fontWeight: 600 }}>
                &ldquo;You just lost a job you didn&apos;t even know existed.&rdquo;
              </p>
              <p className="text-[#4A4641]/70 leading-[1.6]" style={{ ...BODY, fontSize: '16px', fontStyle: 'italic' }}>
                Hiring a receptionist costs $3,800/month, goes home at 5 PM, and can&apos;t answer two calls at once.
              </p>
            </div>

            {/* Marginalia stats — 4 cols */}
            <div className="col-span-12 lg:col-span-4">
              {[
                { n: '85%', label: 'of voicemail callers never call back', source: 'Invoca, 2024' },
                { n: '4–12×', label: 'per week this happens to the average solo shop', source: null },
                { n: '$4,200', label: 'average monthly revenue lost at $350/job', source: null },
                { n: '67%', label: 'of after-hours calls go unanswered at one-person shops', source: null },
              ].map(({ n, label, source }) => (
                <div key={n} className="border-t border-[#D5CFC1] pt-5 pb-5">
                  <span
                    className="block leading-[1.0] tracking-[-0.02em] mb-2"
                    style={{ ...MONO, fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#0E0E0E' }}
                  >
                    {n}
                  </span>
                  <p className="text-[14px] text-[#4A4641] leading-[1.5]" style={BODY}>{label}</p>
                  {source && (
                    <p className="text-[11px] text-[#4A4641]/50 mt-1" style={MONO}>{source}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — HEAR IT WORK
          Audio proof. These recordings ARE the testimonials at this stage.
      ══════════════════════════════════════════════════════════════════════ */}
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
                Real calls.<br />Anonymized.
              </h2>
              <p className="text-[17px] text-[#4A4641] leading-[1.6] mb-7" style={BODY}>
                Three recordings of the same service that&apos;ll answer your shop&apos;s calls. Listen, then call the demo line yourself to hear it live.
              </p>
              <a
                href="tel:+18005551234"
                style={{
                  ...BTN_SECONDARY,
                  padding: '12px 24px',
                  fontSize: '15px',
                }}
                className="hover:bg-[#E8D6D2] hover:border-[#B3392D] hover:text-[#B3392D] transition-all"
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

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — COMPARISON TABLE
          Your options, side by side. AnswerCare column highlighted.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="06" title="HOW IT COMPARES" />

          <h2
            className="text-[#0E0E0E] leading-[1.1] tracking-[-0.015em] mb-12"
            style={{ ...DISPLAY, fontSize: 'clamp(28px, 3.5vw, 40px)' }}
          >
            Your four options for handling calls.
          </h2>

          {/* Horizontally scrollable on mobile */}
          <div className="overflow-x-auto -mx-5 sm:-mx-10 px-5 sm:px-10">
            <div style={{ minWidth: '680px' }}>

              {/* Column headers */}
              <div
                className="grid pb-3 mb-0"
                style={{ gridTemplateColumns: '2.2fr 1fr 1.6fr 1.5fr 1.6fr' }}
              >
                <div />
                {[
                  { label: 'Voicemail', isAC: false },
                  { label: 'Human receptionist', isAC: false },
                  { label: 'Smith.ai', isAC: false },
                  { label: 'AnswerCare AI', isAC: true },
                ].map(({ label, isAC }) => (
                  <div
                    key={label}
                    className="px-3 py-2.5"
                    style={{
                      backgroundColor: isAC ? '#F5F2EC' : 'transparent',
                      borderRadius: isAC ? '4px 4px 0 0' : undefined,
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.08em]"
                      style={{ ...MONO, color: isAC ? '#0E0E0E' : '#4A4641' }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {compRows.map((row, i) => (
                <div
                  key={i}
                  className="grid border-t border-[#D5CFC1]"
                  style={{ gridTemplateColumns: '2.2fr 1fr 1.6fr 1.5fr 1.6fr' }}
                >
                  <div className="py-3 pr-4">
                    <p className="text-[13px] text-[#4A4641]" style={BODY}>{row.feature}</p>
                  </div>
                  {(['voicemail', 'human', 'answering', 'answercare'] as const).map((col) => {
                    const isAC = col === 'answercare'
                    return (
                      <div
                        key={col}
                        className="py-3 px-3 flex items-center"
                        style={{ backgroundColor: isAC ? '#F5F2EC' : 'transparent' }}
                      >
                        <CellDisplay value={row[col]} isAnswerCare={isAC} />
                      </div>
                    )
                  })}
                </div>
              ))}

              {/* Last border */}
              <div className="border-t border-[#D5CFC1]" />
            </div>
          </div>

          <p className="mt-4 text-[11px] text-[#4A4641]/60" style={MONO}>
            Based on $350 avg job, 50 calls/month. Smith.ai pricing per public plans, April 2026. First month free on all AnswerCare plans if fewer than 20 jobs booked.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — HOW IT WORKS
          Three steps. Oversized mono anchors (64–72px).
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="07" title="HOW IT WORKS" />

          <div>
            {[
              {
                n: '01',
                title: 'Setup',
                detail: 'Week 1, days 1–3',
                body: '30-minute discovery call. We learn your trade, service area, rates, job types, and how you want calls handled. We write your custom call script. You review and approve.',
              },
              {
                n: '02',
                title: 'Go Live',
                detail: 'Week 1, day 5',
                body: 'We forward your existing phone line. Every incoming call is answered in under 2 seconds. Bookings land in your calendar and your SMS inbox.',
              },
              {
                n: '03',
                title: 'Guarantee Window',
                detail: 'Days 1–30 live',
                body: 'We track every booked job from day 1. If we book fewer than 20 in 30 days, your first month is free — you only paid the $497 setup. Hit 20+ and you continue at $199/month. Cancel any month, 7 days notice.',
              },
            ].map(({ n, title, detail, body }) => (
              <div
                key={n}
                className="border-t border-[#D5CFC1] py-8 sm:py-10 grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="leading-[1.0] text-[#D5CFC1]"
                    style={{ ...MONO, fontSize: 'clamp(40px, 5vw, 72px)' }}
                  >
                    {n}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-3 pt-2">
                  <p className="text-[#0E0E0E] mb-1" style={{ ...BODY, fontSize: '19px', fontWeight: 500 }}>
                    {title}
                  </p>
                  <span className="text-[11px] text-[#4A4641]/60 tracking-[0.08em]" style={MONO}>
                    [ {detail} ]
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-8 mt-4 sm:mt-0">
                  <p className="text-[19px] text-[#4A4641] leading-[1.65]" style={BODY}>{body}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#D5CFC1]" />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — THE GUARANTEE  (rewritten — no $500 payout)
          New offer: first month free if < 20 jobs in 30 days.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="08" title="THE GUARANTEE" />

          {/* Headline — biggest display type on the page */}
          <h2
            className="text-[#0E0E0E] leading-[1.02] tracking-[-0.025em] mb-12 sm:mb-16"
            style={{ ...DISPLAY, fontSize: 'clamp(48px, 7.5vw, 112px)' }}
          >
            20 booked jobs<br />
            in 30 days.<br />
            <br />
            Or your first<br />
            month is on us.
          </h2>

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <div className="col-span-12 lg:col-span-7">

              <p className="text-[19px] text-[#4A4641] leading-[1.65] mb-9" style={BODY}>
                No credit card held against the guarantee. We go live, track every booked job from day one, and on day 31 we show you the full log. Under 20 jobs? Your first month is free — keep the service, try another 30 days, or walk away.
              </p>

              <div>
                {[
                  'We track every booked job from day 1, timestamped and logged.',
                  'On day 31 we show you the full booking log, ready to count.',
                  'Under 20 jobs? Your first month is free. We eat it.',
                  '20+ jobs? You continue at $199/month. Cancel any month, 7 days notice.',
                ].map((item, i) => (
                  <div key={i} className="border-t border-[#D5CFC1] py-4 flex items-start gap-4">
                    <span className="text-[#4A4641]/40 text-[11px] mt-0.5 flex-shrink-0" style={MONO}>—</span>
                    <p className="text-[17px] text-[#4A4641] leading-[1.55]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>

              {/* Success-green callout */}
              <div
                className="mt-6 px-4 py-3 rounded inline-block"
                style={{
                  backgroundColor: 'rgba(45,106,79,0.08)',
                  border: '1px solid rgba(45,106,79,0.2)',
                }}
              >
                <p className="text-[12px]" style={{ ...MONO, color: '#2D6A4F' }}>
                  ★ No credit card held against the guarantee. No clawback. No fine print.
                </p>
              </div>

              <div className="mt-8">
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

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — WHAT YOU GET
          8-item value stack. Makes $199 feel underpriced.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="09" title="WHAT YOU GET" />

          <h2
            className="text-[#0E0E0E] leading-[1.1] tracking-[-0.015em] mb-12"
            style={{ ...DISPLAY, fontSize: 'clamp(28px, 3.5vw, 40px)' }}
          >
            Built for one-truck operations.<br />
            Everything included.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {[
              {
                n: '01',
                title: 'Custom call script',
                desc: 'Written for your specific trades, pricing, service area, and how you want calls handled. Reviewed and approved by you before launch.',
              },
              {
                n: '02',
                title: 'US phone number',
                desc: 'Real Twilio US number, forwarded from your existing line. Your number stays yours. No caller ever sees ours.',
              },
              {
                n: '03',
                title: '24/7 answering',
                desc: 'Nights, weekends, holidays, lunch breaks, while you\'re driving. The line is always live. Every call picked up in under 2 seconds.',
              },
              {
                n: '04',
                title: 'Calendar booking',
                desc: 'Integrates with Google Calendar, Jobber, Housecall Pro, ServiceM8. Bookings land in your schedule automatically, no manual entry.',
              },
              {
                n: '05',
                title: 'SMS notifications',
                desc: 'Every call triggers an SMS to your phone with caller name, number, job type, booking time, and full transcript if you want it.',
              },
              {
                n: '06',
                title: 'Monthly performance report',
                desc: 'Exact call log, booking rate, peak times, revenue captured. Delivered on day 1 of each month. See what you would\'ve missed.',
              },
              {
                n: '07',
                title: 'Spam and robocall filtering',
                desc: 'Detects and auto-rejects spam before it wastes a cycle. Your monthly report shows how many were screened out.',
              },
              {
                n: '08',
                title: 'Cancel anytime',
                desc: '7 days notice, no contract, no clawback of setup fee. If it\'s not working, you walk. We\'d rather lose a customer than trap one.',
              },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                className="border-t border-[#D5CFC1] py-7 sm:pr-10 flex items-start gap-4"
              >
                <span
                  className="text-[#4A4641] flex-shrink-0 mt-0.5 whitespace-nowrap"
                  style={{ ...MONO, fontSize: '13px' }}
                >
                  ⟶ {n}
                </span>
                <div>
                  <p className="text-[#0E0E0E] mb-2" style={{ ...BODY, fontSize: '17px', fontWeight: 500 }}>
                    {title}
                  </p>
                  <p className="text-[15px] text-[#4A4641] leading-[1.6]" style={BODY}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — PRICING  (id="pricing" anchors ROI calc CTA)
          One plan. No tiers. No upsells. First month free badge. Founding rate.
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="10" title="PRICING" />

          <p
            className="text-[11px] text-[#4A4641]/60 uppercase tracking-[0.10em] mb-8"
            style={MONO}
          >
            one plan · no tiers · no upsells
          </p>

          <div className="max-w-[640px]">
            <div className="border border-[#D5CFC1] rounded-sm bg-[#F5F2EC] overflow-hidden">

              {/* First month free badge */}
              <div
                className="px-8 sm:px-10 py-3"
                style={{
                  backgroundColor: 'rgba(45,106,79,0.08)',
                  borderBottom: '1px solid rgba(45,106,79,0.2)',
                }}
              >
                <p className="text-[12px]" style={{ ...MONO, color: '#2D6A4F' }}>
                  ★ FIRST MONTH FREE IF WE DON&apos;T HIT 20 JOBS
                </p>
              </div>

              <div className="p-8 sm:p-10">

                {/* Pricing display */}
                <div className="mb-1 flex items-baseline gap-3">
                  <span
                    className="leading-[1.0] tracking-[-0.02em]"
                    style={{ ...MONO, fontSize: 'clamp(48px, 6vw, 72px)', color: '#0E0E0E' }}
                  >
                    $199
                  </span>
                  <span className="text-[18px] text-[#4A4641]" style={BODY}>/month</span>
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="text-[22px] text-[#4A4641]" style={MONO}>+ $497</span>
                  <span className="text-[16px] text-[#4A4641]" style={BODY}>one-time setup</span>
                </div>
                <p className="text-[13px] text-[#4A4641]/60 mb-8" style={BODY}>
                  Monthly billing starts day 31 — only if we hit 20 jobs. No credit card held against the guarantee.
                </p>

                {/* Founding rate */}
                <div className="bg-[#EBE7DD] border border-[#D5CFC1] rounded px-4 py-2.5 mb-8 inline-block">
                  <p className="text-[12px] text-[#4A4641]" style={MONO}>
                    ★ FOUNDING RATE — 13 of 20 spots remaining. Rate locked for life.
                  </p>
                </div>

                {/* Feature list */}
                <div className="border-t border-[#D5CFC1] mb-8">
                  {[
                    'Unlimited inbound calls (soft cap 500/mo)',
                    '24/7 coverage — nights, weekends, holidays',
                    'Custom call script for your trade & service area',
                    'Booking into Google Calendar, Jobber, Housecall Pro, ServiceM8',
                    'Real-time SMS notifications on every booking',
                    'Monthly performance report with full call log',
                    'Spam & robocall filtering',
                    'US phone infrastructure (Twilio)',
                    '30-day performance guarantee',
                    '7-day cancellation, no contract',
                  ].map((f) => (
                    <div key={f} className="border-b border-[#D5CFC1]/50 py-3 flex items-start gap-3">
                      <span className="text-[#4A4641]/50 text-[11px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 11 — WHO IT'S FOR
          Visually differentiated columns: confident left, quiet right.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28">
        <div className={CONTAINER}>
          <SectionLabel n="11" title="IS THIS FOR YOU" />

          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-12">

            {/* FOR — dark, accent-red arrows */}
            <div className="col-span-12 lg:col-span-5">
              <h3 className="text-[#0E0E0E] mb-7" style={{ ...BODY, fontSize: '19px', fontWeight: 600 }}>
                This is for you if
              </h3>
              <div>
                {[
                  'You run a one-person or two-person trade shop',
                  'You do $200K+ in annual revenue',
                  'You receive 40+ inbound calls per month',
                  'You miss jobs because you\'re on jobs',
                  'You\'ve lost sleep over how much voicemail is costing you',
                ].map((item) => (
                  <div key={item} className="border-t border-[#D5CFC1] py-4 flex items-start gap-3">
                    <span className="text-[#0E0E0E] text-[12px] mt-0.5 flex-shrink-0" style={MONO}>→</span>
                    <p className="text-[17px] text-[#0E0E0E] leading-[1.5]" style={BODY}>{item}</p>
                  </div>
                ))}
                <div className="border-t border-[#D5CFC1]" />
              </div>
            </div>

            <div className="hidden lg:block col-span-1" />

            {/* NOT FOR — muted, em-dashes */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <h3 className="text-[#4A4641] mb-7" style={{ ...BODY, fontSize: '19px', fontWeight: 400 }}>
                This isn&apos;t for you if
              </h3>
              <div>
                {[
                  'You already have a dispatcher who never misses a call',
                  'You want the service to give technical diagnoses or quotes',
                  'You want month-to-month without the 30-day guarantee window',
                  'You do under $200K/year (our math won\'t work for you yet)',
                  'You\'re not willing to forward calls to a new number',
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

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 12 — FAQ  (10 questions, expanded from 8)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#EBE7DD]">
        <div className={CONTAINER}>
          <SectionLabel n="12" title="QUESTIONS" />
          <div className="max-w-3xl">
            <HomeFAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 13 — FINAL CTA  (full-bleed ink band)
          New headline. Phone number is the typographic event.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0E0E0E] py-24 sm:py-32">
        <div className={CONTAINER}>

          <p
            className="text-[11px] text-white/25 uppercase tracking-[0.12em] mb-10"
            style={MONO}
          >
            one last thing —
          </p>

          <h2
            className="text-[#F5F2EC] leading-[1.05] tracking-[-0.025em] mb-8"
            style={{ ...DISPLAY, fontSize: 'clamp(40px, 6.5vw, 88px)' }}
          >
            Every missed call is a job<br />
            you already paid for.
          </h2>

          <p className="text-[17px] text-white/50 leading-[1.6] max-w-xl mb-12" style={BODY}>
            You ran the ads. You built the Google Business Profile. You earned the reviews. Then the phone rings and you can&apos;t answer. Stop letting voicemail collect the revenue.
          </p>

          {/* Phone number — largest mono on the page */}
          <a
            href="tel:+18005551234"
            className="block leading-[1.0] tracking-[-0.02em] hover:opacity-70 transition-opacity mb-10"
            style={{ ...MONO, fontSize: 'clamp(44px, 8vw, 112px)', color: '#B3392D' }}
          >
            +1 (800) 555-1234
          </a>

          {/* Primary (inverted) + secondary */}
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
          <div className="flex flex-wrap gap-2.5">
            <span
              className="text-[11px] px-2.5 py-1 rounded"
              style={{
                ...MONO,
                color: 'rgba(45,106,79,0.9)',
                backgroundColor: 'rgba(45,106,79,0.12)',
                border: '1px solid rgba(45,106,79,0.25)',
              }}
            >
              [ FIRST MONTH FREE ]
            </span>
            {['$497 SETUP', '$199/MONTH', '5-DAY SETUP', 'CANCEL ANYTIME'].map((tag) => (
              <span key={tag} className="text-[11px] text-white/20" style={MONO}>
                [ {tag} ]
              </span>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
