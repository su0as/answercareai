interface StatCardProps {
  value: string
  label: string
  sublabel: string
  accentTextClass?: string
}

export default function StatCard({ value, label, sublabel, accentTextClass = 'text-accent-home' }: StatCardProps) {
  return (
    <div className="bg-bg-primary border border-border rounded-2xl p-6 flex flex-col gap-1">
      <span className={`font-mono-accent text-4xl font-bold ${accentTextClass}`}>{value}</span>
      <span className="text-text-primary font-medium text-base">{label}</span>
      <span className="text-text-muted text-sm">{sublabel}</span>
    </div>
  )
}
