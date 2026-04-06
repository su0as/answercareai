'use client'

interface SocialProofTickerProps {
  items: string[]
}

export default function SocialProofTicker({ items }: SocialProofTickerProps) {
  const doubled = [...items, ...items]

  return (
    <div className="bg-bg-secondary border-y border-border overflow-hidden py-4" aria-hidden="true">
      <div className="ticker-track flex whitespace-nowrap gap-0">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 px-8 flex-shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
            <span className="text-sm font-mono-accent text-text-secondary tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
