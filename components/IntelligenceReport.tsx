import SectionTag from './SectionTag'

interface ReportMetric {
  label: string
  value: string
  change: string
  positive: boolean
}

interface IntelligenceReportProps {
  metrics: ReportMetric[]
  isDark?: boolean
  caption?: string
}

export default function IntelligenceReport({
  metrics,
  isDark = false,
  caption = 'Every Full Operations client receives this monthly.',
}: IntelligenceReportProps) {
  const bg = isDark ? 'bg-bg-dark' : 'bg-bg-secondary'
  const textH = isDark ? 'text-bg-primary' : 'text-text-primary'
  const textSub = isDark ? 'text-white/50' : 'text-text-secondary'
  const tagClass = isDark ? 'border-white/20 text-white/50' : ''
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-bg-primary border-border'

  return (
    <section className={`section-padding ${bg}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <SectionTag className={`mb-4 ${tagClass}`}>Intelligence Report</SectionTag>
            <h2 className={`font-display text-4xl sm:text-5xl ${textH} mt-4 leading-tight`}>
              Your business, in numbers. Every month.
            </h2>
            <p className={`mt-6 ${textSub} leading-relaxed`}>
              Full Operations clients receive a detailed monthly report — calls handled, revenue attributed, appointment rates, satisfaction scores, and recommended optimizations for the next month.
            </p>
            <p className={`mt-4 ${textSub} leading-relaxed`}>
              Not a dashboard you have to check. A document your account manager walks you through.
            </p>
            <p className={`mt-6 text-xs font-mono-accent ${isDark ? 'text-white/30' : 'text-text-muted'} tracking-wide`}>
              {caption}
            </p>
          </div>

          {/* Right: mock report card */}
          <div className={`border ${cardBg} rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className={`text-xs font-mono-accent tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-text-muted'}`}>
                  Monthly Report
                </p>
                <p className={`text-sm font-semibold mt-0.5 ${isDark ? 'text-white/80' : 'text-text-primary'}`}>
                  March 2026
                </p>
              </div>
              <div className={`text-xs px-2.5 py-1 rounded-full font-mono-accent ${isDark ? 'bg-white/10 text-white/60' : 'bg-success/10 text-success'}`}>
                Full Operations
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-xl p-4 ${isDark ? 'bg-white/5' : 'bg-bg-secondary'}`}
                >
                  <p className={`text-xs ${isDark ? 'text-white/40' : 'text-text-muted'} mb-1`}>
                    {metric.label}
                  </p>
                  <p className={`font-mono-accent text-xl font-bold ${isDark ? 'text-white' : 'text-text-primary'}`}>
                    {metric.value}
                  </p>
                  <p className={`text-xs mt-0.5 ${metric.positive ? (isDark ? 'text-green-400' : 'text-success') : 'text-red-400'}`}>
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
