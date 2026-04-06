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
            🎁 <strong className="text-text-primary">Founding Client Offer:</strong> First 10 clients get free setup + locked-in pricing forever
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
      </div>
    </section>
  )
}
