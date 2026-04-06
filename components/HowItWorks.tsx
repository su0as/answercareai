import SectionTag from './SectionTag'

interface Step {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  steps: Step[]
  id?: string
}

export default function HowItWorks({ steps, id }: HowItWorksProps) {
  return (
    <section id={id} className="section-padding bg-bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <SectionTag className="mb-4 border-white/20 text-white/50">Process</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-bg-primary mt-4">
            From sign-up to live in under a week.
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            We do all the heavy lifting. You forward your calls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-6 h-px bg-white/10 z-10" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <div className="font-mono-accent text-4xl font-bold text-white/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-bg-primary font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
