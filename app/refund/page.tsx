import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }

export const metadata: Metadata = {
  title: 'Refund Policy — AnswerCare AI',
  description: 'Refund and cancellation policy for AnswerCare AI managed phone answering service.',
}

export default function RefundPage() {
  return (
    <main className="bg-[#f5f5f7] pt-[108px] pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <Link
            href="/"
            className="text-[13px] text-[#707070] hover:text-[#1d1d1f] transition-colors"
            style={MONO}
          >
            ← Back to home
          </Link>
        </div>

        <h1
          className="text-[#1d1d1f] mb-4 tracking-[-0.02em]"
          style={{ ...DISPLAY, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700 }}
        >
          Refund Policy
        </h1>
        <p className="text-[13px] text-[#707070]/60 mb-14" style={MONO}>
          Last updated: May 7, 2026
        </p>

        <div className="space-y-10" style={BODY}>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              1. Setup Fees Are Non-Refundable
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              The one-time $497 setup fee covers onboarding, configuration, script writing, integration setup, and pre-launch testing. This work begins immediately upon payment. The setup fee is non-refundable under all circumstances, including cancellation before go-live, dissatisfaction with the onboarding process, or change of business plans.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              2. 14-Day Live Trial
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65] mb-3">
              Monthly billing begins on day 15 after your go-live date — not at signup, not at setup. You use AnswerCare with real callers for 14 full days before any monthly charge is collected. If you cancel before day 15, you pay nothing beyond the $497 setup fee.
            </p>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              If we are not answering, qualifying, and sending you real booking opportunities during the 14-day live period due to a fault on our end, we will fix it or waive your first month&apos;s subscription. This applies to system failures, misconfigured forwarding on our part, or integration failures we caused.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              3. After the 14-Day Trial
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              Monthly subscription fees ($199/month) are non-refundable once billed after the 14-day live period. We do not provide prorated refunds for cancellations mid-billing-cycle. If you cancel, your service remains active through the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              4. How to Cancel
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              Email{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}with the subject line &quot;Cancel my account&quot; at least 7 days before your next billing date. We will confirm cancellation within 24 hours. Call forwarding will be deactivated at the end of your paid period, and your phone number will revert to its previous behavior.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              5. How to Cancel During the 14-Day Trial
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65] mb-3">
              Email{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}before day 15 after go-live with the subject line &quot;Cancel during trial.&quot; We will confirm cancellation within 24 hours and no monthly charge will be collected.
            </p>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              The $497 setup fee is non-refundable in all cases, including cancellation during the trial period.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              6. Disputes
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              If you believe you have been incorrectly charged, contact us at{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}before initiating a chargeback or dispute with your payment provider. We will review and respond within 2 business days. Initiating a chargeback without first contacting us may result in immediate account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#1d1d1f] mb-3" style={{ fontWeight: 600 }}>
              7. Policy Changes
            </h2>
            <p className="text-[16px] text-[#707070] leading-[1.65]">
              We may update this Refund Policy from time to time. Active clients will be notified via email of any material changes at least 14 days before they take effect. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <section className="pt-8 border-t border-[#e8e8ed]">
            <p className="text-[14px] text-[#707070]">
              Refund or billing questions? Contact us at{' '}
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
