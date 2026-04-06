'use client'

import { useRouter } from 'next/navigation'

const options = [
  { label: 'Dental Practice', href: '/dental', emoji: '🦷' },
  { label: 'Law Firm', href: '/legal', emoji: '⚖️' },
  { label: 'Real Estate', href: '/realestate', emoji: '🏠' },
  { label: 'Other Business', href: '#all-industries', emoji: '🏢' },
]

export default function QuickQualifier() {
  const router = useRouter()

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      router.push(href)
    }
  }

  return (
    <section className="bg-bg-primary py-10 border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-text-muted mb-5 font-mono-accent tracking-wide uppercase">
          Quick start
        </p>
        <p className="text-base sm:text-lg font-medium text-text-primary mb-5">
          I run a…
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {options.map((opt) => (
            <button
              key={opt.href}
              onClick={() => handleClick(opt.href)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-primary hover:bg-bg-secondary transition-all duration-200 hover:scale-[1.02]"
            >
              <span aria-hidden="true">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
