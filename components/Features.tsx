import SectionTag from './SectionTag'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  features: Feature[]
  accentTextClass?: string
}

export default function Features({ features, accentTextClass = 'text-accent-home' }: FeaturesProps) {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">Capabilities</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Everything your front desk handles. Done better.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-secondary border border-border-subtle rounded-2xl p-6 hover:border-border hover:shadow-sm transition-all duration-200"
            >
              <div className={`text-2xl mb-3 ${accentTextClass}`} aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
