const metrics = [
  { icon: '📞', value: '1.8s', label: 'average response time' },
  { icon: '📅', value: '94%', label: 'appointment show rate' },
  { icon: '⭐', value: '4.8/5', label: 'caller satisfaction score' },
  { icon: '🔄', value: '0%', label: 'missed call rate (avg client)' },
  { icon: '📈', value: '22:1', label: 'average ROI, Growth plan' },
  { icon: '💰', value: '$34k', label: 'avg monthly revenue attributed' },
]

export default function MetricStrip() {
  return (
    <section className="bg-bg-secondary border-y border-border py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-mono-accent tracking-widest uppercase text-text-muted mb-8">
          Projected outcomes · Based on industry averages
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">{m.icon}</div>
              <div className="font-mono-accent text-2xl font-bold text-text-primary mb-1">
                {m.value}
              </div>
              <div className="text-xs text-text-muted leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-text-muted mt-6 italic">
          Projected 22:1 ROI based on industry averages. Your actual results may vary.
        </p>
      </div>
    </section>
  )
}
