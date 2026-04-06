interface AddOn {
  name: string
  price: string
  description: string
  icon: string
}

interface AddOnCardProps {
  addOn: AddOn
  accentTextClass?: string
}

export default function AddOnCard({ addOn, accentTextClass = 'text-accent-home' }: AddOnCardProps) {
  return (
    <div className="bg-bg-primary border border-border rounded-xl p-5 flex gap-4 hover:shadow-sm hover:scale-[1.005] transition-all duration-200">
      <div className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{addOn.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-medium text-text-primary text-sm">{addOn.name}</h3>
          <span className={`font-mono-accent text-xs flex-shrink-0 ${accentTextClass}`}>{addOn.price}</span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">{addOn.description}</p>
      </div>
    </div>
  )
}
