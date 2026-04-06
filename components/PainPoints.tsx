import SectionTag from './SectionTag'

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface PainPointsProps {
  painPoints: PainPoint[]
}

export default function PainPoints({ painPoints }: PainPointsProps) {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">Pain Points</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Sound familiar?
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            These are the exact problems AnswerCare was built to solve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-bg-primary border border-border rounded-2xl p-6 hover:shadow-sm hover:scale-[1.005] transition-all duration-200"
            >
              <div className="text-2xl mb-3" aria-hidden="true">{point.icon}</div>
              <h3 className="font-semibold text-text-primary mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
