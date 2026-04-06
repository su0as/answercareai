import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard'
import DemoCallCTA from '@/components/DemoCallCTA'
import PainPoints from '@/components/PainPoints'
import ROICalculator from '@/components/ROICalculator'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import IntelligenceReport from '@/components/IntelligenceReport'
import ImpactChart from '@/components/ImpactChart'
import PricingSection from '@/components/PricingSection'
import ValueStack from '@/components/ValueStack'
import FinalCTA from '@/components/FinalCTA'
import SectionTag from '@/components/SectionTag'
import type { VerticalData } from '@/data/verticals'
import type { CalcVertical } from '@/lib/calculations'

const howItWorksSteps = [
  {
    number: '01',
    title: 'We Learn Your Business',
    description: 'Discovery call with your account manager. We study your workflow, your callers, and your edge cases.',
  },
  {
    number: '02',
    title: 'Forward Your Calls',
    description: 'Choose overflow, after-hours, or full coverage. We handle the rest — integration, scripting, and go-live.',
  },
  {
    number: '03',
    title: 'We Manage & Optimize',
    description: 'Weekly call reviews, monthly intelligence reports, ongoing script improvements. Set and forget — for real.',
  },
]

interface VerticalPageProps {
  data: VerticalData
}

export default function VerticalPage({ data }: VerticalPageProps) {
  return (
    <>
      {/* Hero */}
      <Hero
        tag={data.tagline}
        headline={data.headline}
        subheadline={data.subheadline}
        ctaPrimary={{ label: 'Start Free Trial', href: '#pricing' }}
        ctaSecondary={{
          label: `Call Demo Line → ${data.demoPhone}`,
          href: `tel:+${data.demoPhone.replace(/\D/g, '')}`,
          phone: 'true',
        }}
        trustBadges={['14-day free trial', 'No credit card', 'Full onboarding included']}
        accentButtonClass={data.accentButtonClass}
        accentButtonOutlineClass={data.accentButtonOutlineClass}
      />

      {/* Stats */}
      <section className="section-padding bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
                accentTextClass={data.accentTextClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <DemoCallCTA
        phone={data.demoPhone}
        prompts={data.demoPrompts}
        accentTextClass={data.accentTextClass}
        accentButtonClass="bg-bg-primary text-text-primary hover:bg-bg-secondary"
      />

      {/* Pain Points */}
      <PainPoints painPoints={data.painPoints} />

      {/* Change 1: ROI Calculator */}
      <ROICalculator
        vertical={data.key as CalcVertical}
        accentTextClass={data.accentTextClass}
        accentColor={data.accentColor}
      />

      {/* How It Works */}
      <HowItWorks steps={howItWorksSteps} />

      {/* Features / Capabilities */}
      <Features features={data.features} accentTextClass={data.accentTextClass} />

      {/* Change 2: Intelligence Report + Impact Chart */}
      <section className="section-padding bg-bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <SectionTag className="mb-4 border-white/20 text-white/50">Intelligence Report</SectionTag>
              <h2 className="font-display text-4xl sm:text-5xl text-bg-primary mt-4 leading-tight">
                Your business, in numbers. Every month.
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                Full Operations clients receive a detailed monthly report — calls handled, revenue attributed, appointment rates, satisfaction scores, and recommended optimizations for the next month.
              </p>
              <p className="mt-4 text-white/50 leading-relaxed">
                Not a dashboard you have to check. A document your account manager walks you through.
              </p>

              {/* Mock report card */}
              <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-mono-accent tracking-widest uppercase text-white/30">Monthly Report</p>
                    <p className="text-sm font-semibold text-white/80 mt-0.5">March 2026</p>
                  </div>
                  <div className="text-xs px-2.5 py-1 rounded-full font-mono-accent bg-white/10 text-white/50">Full Operations</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {data.reportMetrics.map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs text-white/30 mb-1">{m.label}</p>
                      <p className="font-mono-accent text-lg font-bold text-white">{m.value}</p>
                      <p className="text-xs mt-0.5 text-green-400">{m.change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Impact chart */}
            <div>
              <ImpactChart
                metrics={data.impactMetrics}
                accentColor={data.accentColor}
                accentTextClass={data.accentTextClass}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — with Change 4 cost ladder inside PricingSection */}
      <PricingSection
        id="pricing"
        tiers={data.pricingTiers}
        accentButtonClass={data.accentButtonClass}
        accentTextClass={data.accentTextClass}
        accentBorderClass={data.accentBorderClass}
        accentBgClass={data.accentBgClass}
      />

      {/* Change 8: Value stack */}
      <ValueStack
        accentTextClass={data.accentTextClass}
        accentColor={data.accentColor}
        accentBgClass={data.accentBgClass}
      />

      {/* Final CTA */}
      <FinalCTA
        headline={`Your ${data.shortName.toLowerCase()} practice, reimagined.`}
        subheadline="14-day free trial. Full onboarding. Dedicated account manager. No credit card required."
        ctaPrimary={{ label: 'Start Free Trial', href: '#pricing' }}
        ctaSecondary={{ label: `Call Demo: ${data.demoPhone}`, href: `tel:+${data.demoPhone.replace(/\D/g, '')}` }}
        accentButtonClass="bg-bg-primary text-text-primary hover:bg-bg-secondary"
      />
    </>
  )
}
