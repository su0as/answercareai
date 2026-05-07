import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'Refund Policy — AnswerCare AI',
  description: 'Refund and cancellation policy for AnswerCare AI managed phone answering service.',
}

export default function RefundPage() {
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
          Refund Policy
        </h1>
        <p className="text-[13px] text-[#4A4641]/60 mb-14" style={MONO}>
          Last updated: May 7, 2026
        </p>

        <div className="space-y-10" style={BODY}>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              1. Setup Fees Are Non-Refundable
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The one-time $497 setup fee covers onboarding, configuration, script writing, integration setup, and pre-launch testing. This work begins immediately upon payment. The setup fee is non-refundable under all circumstances, including cancellation before go-live, dissatisfaction with the onboarding process, or change of business plans.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              2. First-Month Guarantee
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-3">
              We guarantee results in your first 30 days of live service. If we do not book at least 20 jobs on your behalf within the first 30 days of your go-live date, your first month&apos;s subscription fee ($199) is waived — you do not pay it, and if it has already been charged, it is refunded in full.
            </p>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              This guarantee applies only to the first month. It is contingent on your call forwarding being active and correctly configured for the full 30-day period, and on you not having paused or requested changes to the service during the evaluation window.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              3. After the First 30 Days
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Monthly subscription fees are non-refundable after the first 30-day guarantee period. We do not provide prorated refunds for cancellations mid-billing-cycle. If you cancel, your service remains active through the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              4. How to Cancel
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Email{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}with the subject line &quot;Cancel my account&quot; at least 7 days before your next billing date. We will confirm cancellation within 24 hours. Call forwarding will be deactivated at the end of your paid period, and your phone number will revert to its previous behavior.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              5. How to Claim the First-Month Guarantee
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-3">
              If you believe we did not meet the 20-job threshold in your first 30 days, email{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}within 7 days of your day-31 billing date with the subject line &quot;First-month guarantee claim.&quot;
            </p>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We will pull your call logs and confirm the count within 2 business days. If the threshold was not met, the $199 will be waived or refunded without argument. No screenshots, no case-building — we have the logs.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              6. Disputes
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              If you believe you have been incorrectly charged, contact us at{' '}
              <a href="mailto:hello@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercareai.com
              </a>
              {' '}before initiating a chargeback or dispute with your payment provider. We will review and respond within 2 business days. Initiating a chargeback without first contacting us may result in immediate account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              7. Policy Changes
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We may update this Refund Policy from time to time. Active clients will be notified via email of any material changes at least 14 days before they take effect. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <section className="pt-8 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]">
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
