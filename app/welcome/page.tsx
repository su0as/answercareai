import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'Welcome — AnswerCare AI',
  description: 'Your setup payment is confirmed. Here\'s what happens next.',
  robots: { index: false, follow: false },
}

export default function WelcomePage() {
  return (
    <main className="bg-[#F5F2EC] min-h-screen pt-[108px] pb-24 px-4 sm:px-6">
      <div className="max-w-[640px] mx-auto">

        {/* Confirmation badge */}
        <div
          className="inline-flex items-center gap-2 rounded px-3 py-2 mb-10"
          style={{
            backgroundColor: 'rgba(45,106,79,0.08)',
            border: '1px solid rgba(45,106,79,0.2)',
          }}
        >
          <span style={{ color: '#2D6A4F', fontSize: '13px', ...MONO }}>
            ★ PAYMENT CONFIRMED
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[#0E0E0E] leading-[1.05] tracking-[-0.025em] mb-6"
          style={{ ...DISPLAY, fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 400 }}
        >
          Welcome to<br />AnswerCare.
        </h1>

        <p className="text-[18px] text-[#4A4641] leading-[1.6] mb-14" style={BODY}>
          Your $497 setup payment is confirmed. Here&apos;s what happens next.
        </p>

        {/* Steps */}
        <div className="border-t border-[#D5CFC1] mb-14">

          {/* Step 1 */}
          <div className="border-b border-[#D5CFC1] py-8 grid grid-cols-[48px_1fr] gap-5 items-start">
            <span
              className="text-[#2D6A4F] leading-[1.0]"
              style={{ ...MONO, fontSize: '28px', fontWeight: 400 }}
            >
              1
            </span>
            <div>
              <p className="text-[#0E0E0E] mb-2" style={{ ...BODY, fontSize: '18px', fontWeight: 500 }}>
                Check your email
              </p>
              <p className="text-[16px] text-[#4A4641] leading-[1.6]" style={BODY}>
                A confirmation receipt will arrive within 5 minutes. If you don&apos;t see it, check your spam folder or reply to this page&apos;s URL in your browser history.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-b border-[#D5CFC1] py-8 grid grid-cols-[48px_1fr] gap-5 items-start">
            <span
              className="text-[#2D6A4F] leading-[1.0]"
              style={{ ...MONO, fontSize: '28px', fontWeight: 400 }}
            >
              2
            </span>
            <div>
              <p className="text-[#0E0E0E] mb-2" style={{ ...BODY, fontSize: '18px', fontWeight: 500 }}>
                Book your 30-minute setup call
              </p>
              <p className="text-[16px] text-[#4A4641] leading-[1.6] mb-5" style={BODY}>
                This is where we learn your trade, service area, rates, and how you want calls handled. Pick any slot that works for you.
              </p>
              <a
                href="https://calendly.com/answercare-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-85 transition-opacity inline-flex items-center"
                style={{
                  backgroundColor: '#2D6A4F',
                  color: '#F5F2EC',
                  padding: '14px 24px',
                  borderRadius: '6px',
                  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 0 rgba(0,0,0,0.12)',
                }}
              >
                Book your setup call →
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-b border-[#D5CFC1] py-8 grid grid-cols-[48px_1fr] gap-5 items-start">
            <span
              className="text-[#2D6A4F] leading-[1.0]"
              style={{ ...MONO, fontSize: '28px', fontWeight: 400 }}
            >
              3
            </span>
            <div>
              <p className="text-[#0E0E0E] mb-2" style={{ ...BODY, fontSize: '18px', fontWeight: 500 }}>
                Go live within 5 days
              </p>
              <p className="text-[16px] text-[#4A4641] leading-[1.6]" style={BODY}>
                After the setup call we write your custom script, configure your forwarding number, and connect your calendar. Most clients are live within 3&ndash;5 days of the call.
              </p>
            </div>
          </div>

        </div>

        {/* Guarantee reminder */}
        <div
          className="rounded px-5 py-4 mb-12"
          style={{
            backgroundColor: 'rgba(45,106,79,0.06)',
            border: '1px solid rgba(45,106,79,0.15)',
          }}
        >
          <p className="text-[13px] leading-[1.65]" style={{ ...BODY, color: '#2D6A4F' }}>
            <strong style={{ fontWeight: 600 }}>Your 30-day guarantee</strong> starts the day we go live — not today. You&apos;ll get a confirmation SMS and email the moment your line is active.
          </p>
        </div>

        {/* Divider + sign-off */}
        <div className="border-t border-[#D5CFC1] pt-8">
          <p className="text-[16px] text-[#4A4641] leading-[1.7] mb-1" style={BODY}>
            Questions? Reply to your receipt email or message us at{' '}
            <a
              href="mailto:hello@answercareai.com"
              className="text-[#2D6A4F] hover:underline"
              style={MONO}
            >
              hello@answercareai.com
            </a>
            .
          </p>
          <p className="text-[16px] text-[#4A4641] leading-[1.7] mb-10" style={BODY}>
            Every new customer gets direct access to the founder during setup.
          </p>

          <p className="text-[15px] text-[#4A4641]/70 italic" style={BODY}>
            — The AnswerCare team
          </p>
        </div>

        {/* Back link */}
        <div className="mt-14">
          <Link
            href="/"
            className="text-[13px] text-[#4A4641]/50 hover:text-[#4A4641] transition-colors"
            style={MONO}
          >
            ← Back to home
          </Link>
        </div>

      </div>
    </main>
  )
}
