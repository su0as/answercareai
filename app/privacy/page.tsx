import type { Metadata } from 'next'
import Link from 'next/link'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }
const DISPLAY = { fontFamily: 'Fraunces, Georgia, serif', fontOpticalSizing: 'auto' as const }

export const metadata: Metadata = {
  title: 'Privacy Policy — AnswerCare AI',
  description: 'Privacy Policy for AnswerCare AI — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-[13px] text-[#4A4641]/60 mb-14" style={MONO}>
          Last updated: April 13, 2026
        </p>

        <div className="space-y-10" style={BODY}>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              1. Introduction
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              AnswerCare AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and the privacy of your callers. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. It applies to our website, marketing communications, and the automated phone scheduling Service provided to our business clients.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              2. Information We Collect
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              We collect information in two contexts: from our business clients and from the callers your AI receptionist handles.
            </p>
            <p className="text-[15px] text-[#0E0E0E] mb-2" style={{ fontWeight: 500 }}>From Business Clients:</p>
            <ul className="list-disc pl-5 space-y-2 mb-5 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Name, business name, email address, and phone number</li>
              <li>Billing and payment information (processed securely via third-party payment processors)</li>
              <li>Business details, workflows, and preferences collected during onboarding</li>
              <li>Communications with your account manager</li>
            </ul>
            <p className="text-[15px] text-[#0E0E0E] mb-2" style={{ fontWeight: 500 }}>From Caller Interactions (on behalf of our clients):</p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Caller name and phone number</li>
              <li>Reason for calling and information volunteered during the call</li>
              <li>Appointment details, lead information, or intake data</li>
              <li>Call recordings and transcripts (where required or permitted by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>To provision, operate, and improve the Service for your business</li>
              <li>To generate your monthly intelligence reports and performance analytics</li>
              <li>To communicate with you about your account, onboarding, and updates</li>
              <li>To process billing and payments</li>
              <li>To comply with legal obligations, including applicable telecommunications laws</li>
              <li>To train and improve our AI models — using only anonymized, aggregated data</li>
              <li>To send marketing communications (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              4. Call Recording and Disclosure
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Our Service may record calls handled on your behalf. Recording practices vary by state and jurisdiction. As the business client, you are responsible for ensuring callers are properly notified of recording in accordance with the laws applicable in your jurisdiction (e.g., two-party consent states). AnswerCare AI provides configurable disclosure prompts as part of our onboarding; however, compliance with local recording laws remains your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              5. How We Share Information
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              We do not sell your personal information or your callers&apos; information to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#4A4641] leading-[1.65]">
              <li><strong className="text-[#0E0E0E] font-medium">Service providers:</strong> Payment processors, cloud infrastructure providers, and telephony carriers who support our operations under strict data processing agreements</li>
              <li><strong className="text-[#0E0E0E] font-medium">Your business systems:</strong> Scheduling software, CRMs, or other tools you direct us to integrate with</li>
              <li><strong className="text-[#0E0E0E] font-medium">Legal authorities:</strong> Where required by law, court order, or to protect the rights and safety of AnswerCare AI, our clients, or others</li>
              <li><strong className="text-[#0E0E0E] font-medium">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, with appropriate confidentiality protections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              6. Data Retention
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We retain call recordings and transcripts for 90 days by default, after which they are permanently deleted unless you have subscribed to extended retention or have a legal hold in place. Client account data is retained for the duration of your subscription plus 12 months. You may request earlier deletion of your data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              7. Security
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We implement industry-standard technical and organizational measures to protect your data, including TLS encryption in transit, AES-256 encryption at rest, access controls limiting data to personnel who need it, and regular security reviews. No system is completely secure; we encourage you to use strong, unique passwords and to notify us immediately of any suspected unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              8. Your Rights
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65] mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-[15px] text-[#4A4641] leading-[1.65]">
              <li>Access, correct, or delete personal information we hold about you</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Opt out of marketing communications at any time (via the unsubscribe link in any email)</li>
              <li>Restrict or object to certain processing activities</li>
            </ul>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@answercareai.com" className="text-[#B3392D] hover:underline">
                privacy@answercareai.com
              </a>
              . We will respond to all requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              9. Cookies and Tracking
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              Our website uses essential cookies necessary for site functionality, and optional analytics cookies to understand how visitors use our site. We do not use advertising or cross-site tracking cookies. You may disable cookies in your browser settings; doing so may affect site functionality. We honor Do Not Track (DNT) signals from your browser.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              10. Children&apos;s Privacy
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              The Service is intended for businesses and their adult operators. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              11. California Privacy Rights (CCPA)
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              If you are a California resident, you have the right to know what personal information we collect about you, the right to request deletion of your personal information, and the right to non-discrimination for exercising your privacy rights. We do not sell personal information as defined under the CCPA. To submit a verifiable consumer request, contact us at{' '}
              <a href="mailto:privacy@answercareai.com" className="text-[#B3392D] hover:underline">
                privacy@answercareai.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#0E0E0E] mb-3" style={{ fontWeight: 600 }}>
              12. Changes to This Policy
            </h2>
            <p className="text-[16px] text-[#4A4641] leading-[1.65]">
              We may update this Privacy Policy from time to time. We will notify active clients of material changes via email. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. Continued use of the Service after the effective date of changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="pt-8 border-t border-[#D5CFC1]">
            <p className="text-[14px] text-[#4A4641]">
              Privacy questions or requests? Contact us at{' '}
              <a href="mailto:privacy@answercareai.com" className="text-[#B3392D] hover:underline" style={MONO}>
                privacy@answercareai.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
