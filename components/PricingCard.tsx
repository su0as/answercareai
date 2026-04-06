import Link from 'next/link'

interface PricingTier {
  name: string
  price: string
  setupOriginal: string
  calls: string
  features: string[]
  isFeatured?: boolean
  badge?: string
}

interface PricingCardProps {
  tier: PricingTier
  accentButtonClass?: string
  accentTextClass?: string
  accentBorderClass?: string
}

export default function PricingCard({
  tier,
  accentButtonClass = 'bg-text-primary text-bg-primary hover:bg-accent-home',
  accentTextClass = 'text-accent-home',
  accentBorderClass = 'border-accent-home',
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-200 hover:shadow-md ${
        tier.isFeatured
          ? `${accentBorderClass} bg-bg-primary shadow-sm`
          : 'border-border bg-bg-primary hover:border-border'
      }`}
    >
      {tier.badge && (
        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2`}>
          <span className={`text-xs font-mono-accent tracking-wide px-3 py-1 rounded-full ${accentTextClass} bg-bg-primary border ${accentBorderClass}`}>
            {tier.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-semibold text-text-primary mb-1">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-mono-accent text-3xl font-bold text-text-primary">{tier.price}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="line-through">${tier.setupOriginal} setup</span>
          <span className="text-success font-medium">FREE setup</span>
        </div>
        <div className="mt-2 text-xs font-mono-accent text-text-secondary">
          {tier.calls}
        </div>
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <svg
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accentTextClass}`}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 4L6.5 11.5 3 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="tel:+15551234567"
        className={`block text-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.01] ${
          tier.isFeatured
            ? accentButtonClass
            : 'border border-border text-text-secondary hover:border-text-primary hover:text-text-primary'
        }`}
      >
        Start Free Trial
      </Link>

      <p className="text-center text-xs text-text-muted mt-3">14-day free trial • No credit card</p>
    </div>
  )
}
