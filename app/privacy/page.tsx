import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for AnswerCare AI — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-bg-primary pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-sm text-text-muted hover:text-text-primary transition-colors">
            ← Back to home
          </Link>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: April 13, 2026</p>

        <div className="prose-like space-y-10 text-text-secondary leading-relaxed">

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">1. Introduction</h2>
            <p>AnswerCare AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and the privacy of your callers. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. It applies to our website, marketing communications, and the managed AI receptionist Service provided to our business clients.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information in two contexts: from our business clients and from the callers your AI receptionist handles.</p>
            <h3 className="font-medium text-text-primary mb-2">From Business Clients:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Name, business name, email address, and phone number</li>
              <li>Billing and payment information (processed securely via third-party payment processors)</li>
              <li>Business details, workflows, and preferences collected during onboarding</li>
              <li>Communications with your account manager</li>
            </ul>
            <h3 className="font-medium text-text-primary mb-2">From Caller Interactions (on behalf of our clients):</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Caller name and phone number</li>
              <li>Reason for calling and information volunteered during the call</li>
              <li>Appointment details, lead information, or intake data</li>
              <li>Call recordings and transcripts (where required or permitted by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
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
            <h2 className="font-semibold text-text-primary text-xl mb-3">4. Call Recording and Disclosure</h2>
            <p>Our Service may record calls handled on your behalf. Recording practices vary by state and jurisdiction. As the business client, you are responsible for ensuring callers are properly notified of recording in accordance with the laws applicable in your jurisdiction (e.g., two-party consent states). AnswerCare AI provides configurable disclosure prompts as part of our onboarding; however, compliance with local recording laws remains your responsibility.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">5. How We Share Information</h2>
            <p className="mb-3">We do not sell your personal information or your callers&apos; information to third parties. We may share information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-text-primary">Service providers:</strong> Payment processors, cloud infrastructure providers, and telephony carriers who support our operations under strict data processing agreements</li>
              <li><strong className="text-text-primary">Your business systems:</strong> Scheduling software, CRMs, or other tools you direct us to integrate with</li>
              <li><strong className="text-text-primary">Legal authorities:</strong> Where required by law, court order, or to protect the rights and safety of AnswerCare AI, our clients, or others</li>
              <li><strong className="text-text-primary">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, with appropriate confidentiality protections</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">6. Data Retention</h2>
            <p>We retain call recordings and transcripts for 90 days by default, after which they are permanently deleted unless you have subscribed to extended retention or have a legal hold in place. Client account data is retained for the duration of your subscription plus 12 months. You may request earlier deletion of your data by contacting us.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">7. Security</h2>
            <p>We implement industry-standard technical and organizational measures to protect your data, including TLS encryption in transit, AES-256 encryption at rest, access controls limiting data to personnel who need it, and regular security reviews. No system is completely secure; we encourage you to use strong, unique passwords and to notify us immediately of any suspected unauthorized access.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">8. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, correct, or delete personal information we hold about you</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Opt out of marketing communications at any time (via the unsubscribe link in any email)</li>
              <li>Restrict or object to certain processing activities</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:privacy@answercare.ai" className="text-text-primary hover:underline">privacy@answercare.ai</a>. We will respond to all requests within 30 days.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">9. Cookies and Tracking</h2>
            <p>Our website uses essential cookies necessary for site functionality, and optional analytics cookies to understand how visitors use our site. We do not use advertising or cross-site tracking cookies. You may disable cookies in your browser settings; doing so may affect site functionality. We honor Do Not Track (DNT) signals from your browser.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">10. Children&apos;s Privacy</h2>
            <p>The Service is intended for businesses and their adult operators. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">11. California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have the right to know what personal information we collect about you, the right to request deletion of your personal information, and the right to non-discrimination for exercising your privacy rights. We do not sell personal information as defined under the CCPA. To submit a verifiable consumer request, contact us at <a href="mailto:privacy@answercare.ai" className="text-text-primary hover:underline">privacy@answercare.ai</a>.</p>
          </section>

          <section>
            <h2 className="font-semibold text-text-primary text-xl mb-3">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify active clients of material changes via email. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. Continued use of the Service after the effective date of changes constitutes acceptance of the updated policy.</p>
          </section>

          <section className="pt-6 border-t border-border">
            <p className="text-text-muted text-sm">
              Privacy questions or requests? Contact us at{' '}
              <a href="mailto:privacy@answercare.ai" className="text-text-primary hover:underline">
                privacy@answercare.ai
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
