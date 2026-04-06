import Link from 'next/link'

interface FinalCTAProps {
  headline?: string
  subheadline?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  accentButtonClass?: string
}

export default function FinalCTA({
  headline = 'Your front desk, reimagined.',
  subheadline = '14-day free trial. Full onboarding included. No credit card required.',
  ctaPrimary = { label: 'Start Free Trial', href: '/dental#pricing' },
  ctaSecondary = { label: 'Book a Demo', href: 'tel:+15551234567' },
  accentButtonClass = 'bg-bg-primary text-text-primary hover:bg-bg-secondary',
}: FinalCTAProps) {
  return (
    <section className="section-padding bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono-accent tracking-widest uppercase text-white/40 border border-white/10 px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          Founding Client Offer Active
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bg-primary mb-6 leading-tight">
          {headline}
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={ctaPrimary.href}
            className={`px-8 py-4 rounded-xl font-medium text-sm w-full sm:w-auto text-center transition-all duration-200 hover:scale-[1.02] ${accentButtonClass}`}
          >
            {ctaPrimary.label}
          </Link>
          <a
            href={ctaSecondary.href}
            className="px-8 py-4 rounded-xl font-medium text-sm w-full sm:w-auto text-center border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
          >
            {ctaSecondary.label}
          </a>
        </div>
        <p className="mt-6 text-xs text-white/30 font-mono-accent">
          First 10 clients: free setup + locked-in pricing. &nbsp;🎁
        </p>
      </div>
    </section>
  )
}
