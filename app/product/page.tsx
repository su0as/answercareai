import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'How AnswerCare Works — Technical Overview',
  description:
    'Technical architecture and feature specification for AnswerCare AI — automated phone-based appointment booking software for small service businesses.',
}

export default function ProductPage() {
  return (
    <main className="bg-[#F5F2EC] pt-[108px] pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <Link
            href="/"
            className="text-[13px] text-[#4A4641] hover:text-[#0E0E0E] transition-colors"
            style={MONO}
          >
            ← Back to home
          </Link>
        </div>

        <h1
          className="text-[#0E0E0E] mb-4 tracking-[-0.02em]"
          style={{ ...DISPLAY, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400 }}
        >
          How AnswerCare Works
        </h1>
        <p className="text-[13px] text-[#4A4641]/60 mb-14" style={MONO}>
          Technical overview — last updated May 7, 2026
        </p>

        <div className="space-y-12" style={BODY}>

          {/* Architecture */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              Architecture
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              AnswerCare is a B2B SaaS application that integrates voice telephony infrastructure with natural language processing and calendar systems to automate appointment booking workflows for small service businesses.
            </p>
          </section>

          {/* Components */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              Components
            </h2>
            <div className="border-t border-[#D5CFC1]">
              {[
                { label: 'Voice transport', value: 'Twilio (regulated US telecommunications provider)' },
                { label: 'Natural language processing', value: 'Retell + OpenAI GPT' },
                { label: 'Calendar integration', value: 'Google Calendar, Jobber, Housecall Pro, ServiceM8' },
                { label: 'SMS notifications', value: 'Twilio Messaging API' },
                { label: 'Customer dashboard', value: 'Web-based admin interface' },
                { label: 'Data storage', value: 'Encrypted at rest, US-based infrastructure' },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-[#D5CFC1] py-4 grid grid-cols-5 gap-6 items-start">
                  <p className="col-span-2 text-[14px] text-[#0E0E0E]" style={{ ...MONO, fontWeight: 500 }}>
                    {label}
                  </p>
                  <p className="col-span-3 text-[15px] text-[#4A4641] leading-[1.55]">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What the platform does */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              What the platform does
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-5">
              When a customer calls a business that has set up AnswerCare:
            </p>
            <div className="border-t border-[#D5CFC1]">
              {[
                'The call is forwarded from the business\'s main line to a Twilio number provisioned for that business',
                'Retell\'s LLM-based voice agent answers within 2 seconds using a custom configuration written for that business',
                'The agent collects caller information, qualifies the request, and schedules an appointment if applicable',
                'The booking is automatically created in the business\'s connected calendar',
                'The business owner receives an SMS notification with the booking details',
                'A full call transcript and recording is stored in the customer dashboard',
              ].map((step, i) => (
                <div key={i} className="border-b border-[#D5CFC1] py-4 flex items-start gap-5">
                  <span
                    className="text-[#4A4641]/40 flex-shrink-0 mt-0.5"
                    style={{ ...MONO, fontSize: '12px', minWidth: '24px' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] text-[#4A4641] leading-[1.6]">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What AnswerCare does NOT do */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              What AnswerCare does NOT do
            </h2>
            <div className="border-t border-[#D5CFC1]">
              {[
                'Does not generate or purchase leads on behalf of customers',
                'Does not run advertising campaigns',
                'Does not provide marketing or SEO services',
                'Does not act as a telecommunications carrier',
                'Does not collect payments on behalf of customers',
              ].map((item) => (
                <div key={item} className="border-b border-[#D5CFC1] py-3.5 flex items-start gap-4">
                  <span className="text-[#4A4641]/30 flex-shrink-0 mt-0.5" style={MONO}>—</span>
                  <p className="text-[15px] text-[#4A4641] leading-[1.55]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Subscription details */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              Subscription details
            </h2>
            <p className="text-[15px] text-[#4A4641] leading-[1.65] mb-4">
              Standard B2B SaaS billing:
            </p>
            <div className="border-t border-[#D5CFC1]">
              {[
                { label: 'Setup fee', value: '$497 one-time (configuration and onboarding)' },
                { label: 'Monthly subscription', value: '$199/month, billed monthly in advance' },
                { label: 'Cancellation', value: 'Anytime with 7 days notice' },
                { label: 'Performance guarantee', value: '30-day performance guarantee on first month subscription' },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-[#D5CFC1] py-4 grid grid-cols-5 gap-6 items-start">
                  <p className="col-span-2 text-[14px] text-[#0E0E0E]" style={{ ...MONO, fontWeight: 500 }}>
                    {label}
                  </p>
                  <p className="col-span-3 text-[15px] text-[#4A4641] leading-[1.55]">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integrations */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              Integration
            </h2>
            <p className="text-[15px] text-[#4A4641] leading-[1.65] mb-4">
              AnswerCare integrates with:
            </p>
            <div className="border-t border-[#D5CFC1]">
              {[
                'Google Calendar',
                'Jobber',
                'Housecall Pro',
                'ServiceM8',
                'Generic webhooks via Zapier',
              ].map((item) => (
                <div key={item} className="border-b border-[#D5CFC1] py-3.5 flex items-start gap-4">
                  <span className="text-[#4A4641]/30 flex-shrink-0 mt-0.5" style={MONO}>→</span>
                  <p className="text-[15px] text-[#4A4641]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-4" style={{ fontWeight: 600 }}>
              Compliance
            </h2>
            <div className="border-t border-[#D5CFC1]">
              {[
                'HIPAA-considerate data handling',
                'US phone infrastructure (Twilio)',
                'Encrypted call recording storage',
                'Customer data deletion on request',
                'GDPR and CCPA compliant',
              ].map((item) => (
                <div key={item} className="border-b border-[#D5CFC1] py-3.5 flex items-start gap-4">
                  <span className="text-[#4A4641]/30 flex-shrink-0 mt-0.5" style={MONO}>—</span>
                  <p className="text-[15px] text-[#4A4641]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer contact */}
          <section className="pt-6 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]">
              Technical questions?{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
