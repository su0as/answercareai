import PricingCard from './PricingCard'
import CostLadder from './CostLadder'
import SectionTag from './SectionTag'

interface PricingTier {
  name: string
  price: string
  setupOriginal: string
  calls: string
  features: string[]
  isFeatured?: boolean
  badge?: string
}

interface PricingSectionProps {
  tiers: PricingTier[]
  accentButtonClass?: string
  accentTextClass?: string
  accentBorderClass?: string
  accentBgClass?: string
  id?: string
  showCostLadder?: boolean
}

export default function PricingSection({
  tiers,
  accentButtonClass,
  accentTextClass,
  accentBorderClass,
  accentBgClass,
  id,
  showCostLadder = true,
}: PricingSectionProps) {
  return (
    <section id={id} className="section-padding bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <SectionTag className="mb-4">Pricing</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            All plans include a 14-day free trial. Full onboarding. No credit card required.
          </p>
        </div>

        {/* Change 4: Cost ladder ROI anchor */}
        {showCostLadder && (
          <div className="mt-10 mb-4 bg-bg-primary rounded-2xl border border-border p-6 sm:p-8">
            <CostLadder
              accentTextClass={accentTextClass}
              accentBgClass={accentBgClass}
            />
          </div>
        )}

        {/* Founding offer */}
        <div className="mb-10 text-center">
          <span className="inline-block text-sm text-text-secondary border border-dashed border-border px-4 py-2 rounded-xl">
            🎁 <strong className="text-text-primary">Founding Client Offer:</strong> 30% off setup + rate locked for life <span className="text-accent-home font-semibold">(7 of 10 spots remaining)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              accentButtonClass={accentButtonClass}
              accentTextClass={accentTextClass}
              accentBorderClass={accentBorderClass}
            />
          ))}
        </div>

        {/* What's included in setup accordion */}
        <SetupAccordion accentTextClass={accentTextClass} />

        <p className="mt-6 text-center text-xs text-text-muted max-w-xl mx-auto">
          For comparison, a typical virtual receptionist charges $500–$1,500 for setup, plus $15–$25/hr ongoing. AnswerCare AI is a fixed monthly rate — no hourly billing, no surprises.
        </p>
      </div>
    </section>
  )
}

function SetupAccordion({ accentTextClass }: { accentTextClass?: string }) {
  return (
    <details className="mt-8 bg-bg-primary border border-border rounded-2xl group">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none">
        <span className="text-sm font-medium text-text-primary">What&apos;s included in setup?</span>
        <svg
          className="w-4 h-4 text-text-muted transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="px-6 pb-6 pt-2 border-t border-border-subtle">
        <ul className="space-y-2.5 mt-3">
          {[
            'Discovery call with your dedicated account manager (60 min)',
            'Custom script written for your business, workflows, and edge cases',
            'Integration with your scheduling software or CRM',
            'Call forwarding configuration and technical testing',
            'Staff training on how to work alongside the AI',
            'Two rounds of script revisions before go-live',
            '30-day check-in call after launch to tune performance',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accentTextClass ?? 'text-accent-home'}`}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M13 4L6.5 11.5 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}
