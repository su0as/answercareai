import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'Terms of Service — AnswerCare AI',
  description: 'Terms of Service for AnswerCare AI managed AI receptionist service.',
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
          Last updated: April 13, 2026
        </p>

        <div className="space-y-10" style={BODY}>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              By accessing or using the AnswerCare AI service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service. These Terms apply to all users, clients, and other individuals who access or use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              2. Description of Service
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              AnswerCare AI provides a managed AI-powered receptionist service for small businesses in the United States. Our Service includes 24/7 call handling, appointment booking, lead capture, call transcription, and monthly intelligence reporting. The Service is delivered as a managed subscription — we configure, monitor, and continuously optimize your AI receptionist on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              3. Setup Fees and Subscriptions
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              Use of the Service requires payment of a one-time setup fee and an ongoing monthly subscription fee, as outlined in your selected pricing tier.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li><strong className="text-[#0E0E0E] font-medium">Setup Fee:</strong> The setup fee is a one-time, non-refundable payment that covers onboarding, configuration, scripting, and testing of your AI receptionist. Payment of the setup fee initiates the onboarding process.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Monthly Subscription:</strong> Monthly fees are billed in advance on a recurring basis. Your subscription begins on your go-live date.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Founding Client Pricing:</strong> Clients who join under a founding pricing offer will have their monthly rate locked for the life of the account, provided their subscription remains active and in good standing.</li>
              <li><strong className="text-[#0E0E0E] font-medium">Price Changes:</strong> We reserve the right to change subscription pricing with 30 days&apos; written notice to non-founding clients.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              4. Free Trial
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We offer a 14-day free trial for new clients. During the free trial, full Service functionality is available. No credit card is required to begin a trial, but payment information must be provided prior to go-live if you choose to continue. We reserve the right to limit or terminate free trials at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              5. Cancellation and Refunds
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-3">
              You may cancel your monthly subscription at any time. Cancellation takes effect at the end of the current billing cycle. We do not provide prorated refunds for unused time within a billing period.
            </p>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The one-time setup fee is non-refundable under all circumstances, including early cancellation, dissatisfaction, or change of business circumstances. This fee compensates for the dedicated time and resources invested in your onboarding and configuration.
            </p>
          </section>

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
              <li>Reviewing and approving your AI script before go-live</li>
              <li>Complying with all applicable laws, including telecommunications and consumer privacy laws in your jurisdiction</li>
              <li>Notifying AnswerCare AI of changes to your business that may affect call handling (e.g., new services, updated hours, staff changes)</li>
              <li>Ensuring that all callers to your business are aware they may interact with an AI system, as required by applicable law</li>
            </ul>
          </section>

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
              <li>Collect or process sensitive personal data (including medical records, financial account numbers, or social security numbers) through the AI system without appropriate legal authorization</li>
              <li>Violate any federal, state, or local telecommunications laws</li>
              <li>Attempt to reverse-engineer, copy, or resell any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              8. Intellectual Property
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              All technology, software, processes, scripts, templates, and systems underlying the Service are the intellectual property of AnswerCare AI or its licensors. Your use of the Service does not grant you any ownership rights. Call recordings, transcripts, and reports generated for your account belong to you; you grant AnswerCare AI a limited license to use them to operate and improve the Service.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              9. Service Availability and Uptime
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We target 99.9% uptime for the Service. Scheduled maintenance, force majeure events, carrier outages, or circumstances beyond our reasonable control may result in temporary interruptions. We will make commercially reasonable efforts to notify clients of planned downtime in advance. AnswerCare AI is not liable for losses arising from service interruptions outside our reasonable control.
            </p>
          </section>

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

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              11. Disclaimers
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. AnswerCare AI does not guarantee specific business outcomes, revenue recovery amounts, or ROI figures. Any projections or estimates provided are for illustrative purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              12. Governing Law and Disputes
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration under the rules of the American Arbitration Association in the state where the client&apos;s business is located. You waive your right to participate in class action lawsuits or class-wide arbitrations.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              13. Changes to These Terms
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We may update these Terms from time to time. We will notify active clients of material changes via email at least 14 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree to the revised Terms, you may cancel your subscription before the effective date.
            </p>
          </section>

          <section className="pt-8 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]">
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:hello@answercare.ai" className="text-[#B3392D] hover:underline" style={MONO}>
                hello@answercare.ai
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
