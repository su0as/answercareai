interface DemoPrompt {
  text: string
}

interface DemoCallCTAProps {
  phone: string
  prompts: DemoPrompt[]
  accentTextClass?: string
  accentButtonClass?: string
}

export default function DemoCallCTA({
  phone,
  prompts,
  accentTextClass = 'text-accent-home',
  accentButtonClass = 'bg-bg-primary text-text-primary hover:bg-bg-secondary',
}: DemoCallCTAProps) {
  return (
    <section className="section-padding bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 p-8 sm:p-12 text-center">
          <div className="text-4xl mb-4" aria-hidden="true">📞</div>
          <h2 className="font-display text-3xl sm:text-4xl text-bg-primary mb-4">
            Hear it in action.
          </h2>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            Call our live demo line and experience exactly what your callers will hear. Try any of these prompts:
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {prompts.map((prompt, i) => (
              <span
                key={i}
                className="text-xs font-mono-accent text-white/40 border border-white/10 px-3 py-1.5 rounded-full"
              >
                {prompt.text}
              </span>
            ))}
          </div>

          <a
            href={`tel:+${phone.replace(/\D/g, '')}`}
            className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02] ${accentButtonClass}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 1.5C3.5 1.5 2 1.5 2 3c0 6.627 5.373 12 12 12 1.5 0 1.5-1.5 1.5-1.5v-2c0 0-1.5-.5-2-.5-.5 0-1 .5-1.5 1-.5.5-1.5.5-2.5-.5-1-1-1-2-.5-2.5.5-.5 1-1 1-1.5s-.5-2-.5-2H3.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Call Demo Line: {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
