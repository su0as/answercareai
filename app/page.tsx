import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import QuickQualifier from '@/components/QuickQualifier'
import MetricStrip from '@/components/MetricStrip'
import ComparisonTable from '@/components/ComparisonTable'
import IndustryCards from '@/components/IndustryCards'
import IndustryGrid from '@/components/IndustryGrid'
import HowItWorks from '@/components/HowItWorks'
import ROICalculator from '@/components/ROICalculator'
import IntelligenceReport from '@/components/IntelligenceReport'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import { comparisonRows, industries, howItWorksSteps, reportMetrics, faqs } from '@/data/home'

export const metadata: Metadata = {
  title: 'AnswerCare AI — Managed AI Receptionist for Small Business',
  description:
    'AnswerCare AI — Managed AI receptionist for dental practices, law firms, and real estate. 24/7 call handling, appointment booking, and monthly intelligence reports.',
}

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Your front desk. Managed by AI. Optimized by humans."
        subheadline="AnswerCare is your managed AI receptionist — we handle every call, book every appointment, and send you monthly intelligence reports. Not software. An operations partner."
        ctaPrimary={{ label: 'Start Free Trial', href: 'https://calendly.com/answercare-ai/discovery-call' }}
        ctaSecondary={{
          label: 'Call Our Demo Line → (800) 555-1234',
          href: 'tel:+18005551234',
          phone: 'true',
        }}
        trustBadges={['14-day free trial', 'No credit card', 'Cancel anytime']}
      />

      {/* Change 7: Quick qualifier */}
      <QuickQualifier />

      {/* Change 6: Metric-based social proof */}
      <MetricStrip />

      <ComparisonTable rows={comparisonRows} />

      <IndustryCards industries={industries} />

      {/* Change 3: All-industries grid */}
      <IndustryGrid />

      <HowItWorks steps={howItWorksSteps} id="how-it-works" />

      {/* Change 1 (simplified): ROI Calculator for general businesses */}
      <ROICalculator vertical="home" />

      <IntelligenceReport metrics={reportMetrics} />

      <FAQ items={faqs} id="faq" />

      <FinalCTA />
    </>
  )
}
