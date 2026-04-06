import Link from 'next/link'
import SectionTag from './SectionTag'

interface Industry {
  icon: string
  name: string
  description: string
  integration: string
  href: string
  accent: string
  accentText: string
}

interface IndustryCardsProps {
  industries: Industry[]
}

export default function IndustryCards({ industries }: IndustryCardsProps) {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">Industries</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Built for your industry.
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Generic AI tools don&apos;t know your business. We do. Each vertical gets custom scripts, workflows, and integrations built for how they actually operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className={`group block bg-bg-primary rounded-2xl border-t-4 ${industry.accent} border border-border p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-200`}
            >
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-text-primary text-lg mb-2">{industry.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{industry.description}</p>
              <div className={`text-xs font-mono-accent ${industry.accentText} flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                {industry.integration}
              </div>
              <div className={`mt-4 text-sm font-medium ${industry.accentText} flex items-center gap-1 group-hover:gap-2 transition-all duration-200`}>
                Learn more <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
