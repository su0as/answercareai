import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'Terms of Service — AnswerCare AI',
  description: 'Terms of Service for AnswerCare AI automated phone scheduling software.',
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-[13px] text-[#4A4641]/60 mb-14" style={MONO}>
          Last updated: May 7, 2026
        </p>

        <div className="space-y-10" style={BODY}>

          {/* 1 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              By accessing or using the AnswerCare AI service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service. These Terms apply to all users, clients, and other individuals who access or use our Service.
            </p>
          </section>

          {/* 2 — rewritten: software platform framing, not "managed service" */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              2. Description of Service
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              AnswerCare AI is a software platform that provides automated phone-based appointment booking and customer scheduling for small service businesses in the United States. The platform handles inbound communications, captures lead information, schedules appointments into your calendar, and delivers monthly performance reports. The Service is delivered as a software subscription with one-time setup configuration.
            </p>
          </section>

          {/* 3 — Founding Client Pricing capped at 20 customers */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              3. Setup Fees and Subscriptions
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              Use of the Service requires payment of a one-time setup fee and an ongoing monthly subscription fee.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li><strong className="text-[#0E0E0E] font-medium">Setup Fee:</strong> The setup fee is a one-time, non-refundable payment that covers onboarding, configuration, scripting, and testing. Payment of the setup fee initiates the onboarding process.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Monthly Subscription:</strong> Monthly fees are billed in advance on a recurring basis. Your subscription begins on your go-live date.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Founding Client Pricing:</strong> Clients who join during the Founding Client period (first 20 paying customers) will have their monthly subscription rate locked at $199/month for as long as their subscription remains continuously active and in good standing. Founding rates apply only to the original subscription tier and do not transfer to upgraded service tiers.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Price Changes:</strong> We reserve the right to change subscription pricing with 30 days&apos; written notice to non-founding clients.</li>
            </ul>
          </section>

          {/* 4 — replaced Free Trial with First-Month Performance Guarantee */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              4. First-Month Performance Guarantee
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              New clients are eligible for our first-month performance guarantee. After your one-time setup fee is paid and your service goes live:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>We track every booked job from day 1, timestamped and logged</li>
              <li>On day 31, we share the complete booking log with you</li>
              <li>If we book fewer than 20 qualified jobs in your first 30 days of live service, your first month subscription fee ($199) is waived</li>
              <li>If we book 20 or more qualified jobs, you continue at $199/month and your first month is charged on day 31</li>
              <li>&quot;Qualified jobs&quot; are defined in our Refund Policy</li>
            </ul>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The setup fee is non-refundable in all cases. See our{' '}
              <Link href="/refund" className="text-[#B3392D] hover:underline">
                Refund Policy
              </Link>
              {' '}for full details.
            </p>
          </section>

          {/* 5 — simplified: defer to Refund Policy */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              5. Cancellation and Refunds
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Cancellation, refunds, and the first-month performance guarantee are governed by our{' '}
              <Link href="/refund" className="text-[#B3392D] hover:underline">
                Refund Policy
              </Link>
              , which is incorporated into these Terms by reference. Please review the Refund Policy at answercareai.com/refund for complete details.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              6. Your Responsibilities
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              As a client, you are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Providing accurate business information during onboarding</li>
              <li>Ensuring your call forwarding is properly configured</li>
              <li>Reviewing and approving your script before go-live</li>
              <li>Complying with all applicable laws, including telecommunications and consumer privacy laws in your jurisdiction</li>
              <li>Notifying AnswerCare AI of changes to your business that may affect call handling (e.g., new services, updated hours, staff changes)</li>
              <li>Ensuring that all callers to your business are aware they may interact with an automated system, as required by applicable law</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              7. Prohibited Uses
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              You may not use the Service to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Engage in any illegal activity or assist in any unlawful conduct</li>
              <li>Deceive, defraud, or harm callers or third parties</li>
              <li>Collect or process sensitive personal data (including medical records, financial account numbers, or social security numbers) through the platform without appropriate legal authorization</li>
              <li>Violate any federal, state, or local telecommunications laws</li>
              <li>Attempt to reverse-engineer, copy, or resell any part of the Service</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              8. Intellectual Property
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              All technology, software, processes, scripts, templates, and systems underlying the Service are the intellectual property of AnswerCare AI or its licensors. Your use of the Service does not grant you any ownership rights. Call recordings, transcripts, and reports generated for your account belong to you; you grant AnswerCare AI a limited license to use them to operate and improve the Service.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              9. Service Availability and Uptime
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We target 99.9% uptime for the Service. Scheduled maintenance, force majeure events, carrier outages, or circumstances beyond our reasonable control may result in temporary interruptions. We will make commercially reasonable efforts to notify clients of planned downtime in advance. AnswerCare AI is not liable for losses arising from service interruptions outside our reasonable control.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              10. Limitation of Liability
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              To the maximum extent permitted by applicable law, AnswerCare AI and its affiliates, officers, employees, and agents shall not be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of revenue, profits, or business opportunities arising from service interruptions</li>
              <li>Errors or omissions in call handling, scheduling, or reporting</li>
              <li>Actions of callers, third-party carriers, or software integrations</li>
            </ul>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Our total liability to you for any claim arising from or relating to these Terms or the Service shall not exceed the total fees paid by you to AnswerCare AI in the three (3) months preceding the claim.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              11. Disclaimers
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. AnswerCare AI does not guarantee specific business outcomes, revenue recovery amounts, or ROI figures. Any projections or estimates provided are for illustrative purposes only.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              12. Governing Law and Disputes
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration under the rules of the American Arbitration Association in the state where the client&apos;s business is located. You waive your right to participate in class action lawsuits or class-wide arbitrations.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              13. Changes to These Terms
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We may update these Terms from time to time. We will notify active clients of material changes via email at least 14 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree to the revised Terms, you may cancel your subscription before the effective date.
            </p>
          </section>

          {/* 14 — new: Telecommunications and Caller Disclosure */}
          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              14. Telecommunications and Caller Disclosure
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-3">
              The Service may include AI-driven voice interactions with your callers. As a Client, you are responsible for any caller disclosure obligations required by applicable laws in your jurisdiction (including but not limited to laws requiring disclosure that callers are interacting with AI systems). AnswerCare AI provides recommended caller disclosure language but does not guarantee compliance with your specific local, state, or federal requirements.
            </p>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              AnswerCare AI is not a telecommunications carrier and does not provide telecommunications services as defined by the U.S. Federal Communications Commission. Voice and SMS infrastructure is provided by third-party carriers (e.g., Twilio Inc.) under their respective terms of service.
            </p>
          </section>

          <section className="pt-8 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]">
              Questions about these Terms? Contact us at{' '}
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
