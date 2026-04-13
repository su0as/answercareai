'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string; phone?: string }
  trustBadges?: string[]
  tag?: string
  accentButtonClass?: string
  accentButtonOutlineClass?: string
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  trustBadges,
  tag,
  accentButtonClass = 'bg-text-primary hover:bg-accent-home text-bg-primary',
  accentButtonOutlineClass = 'border-2 border-text-primary text-text-primary hover:bg-bg-secondary',
}: HeroProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 bg-bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        {tag && (
          <div
            className={`mb-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="inline-block text-xs font-mono-accent tracking-widest uppercase text-text-secondary border border-border px-3 py-1.5 rounded-full">
              {tag}
            </span>
          </div>
        )}

        {!tag && (
          <div
            className={`mb-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono-accent tracking-widest uppercase text-text-secondary border border-border px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block animate-pulse" />
              Founding Client Offer — 30% off setup, rate locked for life
            </span>
          </div>
        )}

        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl text-text-primary leading-tight mb-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '80ms' }}
        >
          {headline}
        </h1>

        <p
          className={`text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '160ms' }}
        >
          {subheadline}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '240ms' }}
        >
          <Link
            href={ctaPrimary.href}
            target={ctaPrimary.href.startsWith('http') ? '_blank' : undefined}
            rel={ctaPrimary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`px-6 py-3.5 rounded-xl font-medium text-sm w-full sm:w-auto text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${accentButtonClass}`}
          >
            {ctaPrimary.label}
          </Link>
          {ctaSecondary.phone ? (
            <a
              href={ctaSecondary.href}
              className={`px-6 py-3.5 rounded-xl font-medium text-sm w-full sm:w-auto text-center transition-all duration-200 hover:scale-[1.01] ${accentButtonOutlineClass}`}
            >
              {ctaSecondary.label}
            </a>
          ) : (
            <Link
              href={ctaSecondary.href}
              className={`px-6 py-3.5 rounded-xl font-medium text-sm w-full sm:w-auto text-center transition-all duration-200 hover:scale-[1.01] ${accentButtonOutlineClass}`}
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>

        {trustBadges && trustBadges.length > 0 && (
          <div
            className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '320ms' }}
          >
            {trustBadges.map((badge, i) => (
              <span key={i} className="text-xs text-text-muted">
                {i > 0 && <span className="mr-4">&bull;</span>}
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
