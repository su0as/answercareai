'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  if (pathname === '/' || pathname?.startsWith('/trades')) return null

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDismissed(sessionStorage.getItem('ctaDismissed') === 'true')
    }
  }, [])

  useEffect(() => {
    // Watch the hero section sentinel
    const hero = document.querySelector('main > :first-child')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('ctaDismissed', 'true')
    setDismissed(true)
  }

  if (dismissed || !visible) return null

  return (
    <>
      {/* Desktop: floating pill bottom-right */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-center gap-2 animate-fade-up">
        <a
          href="tel:+18005551234"
          className="flex items-center gap-2.5 bg-bg-dark text-bg-primary border border-white/20 pl-4 pr-3 py-3 rounded-full text-sm font-medium hover:border-white/50 transition-all duration-200 hover:scale-[1.02] shadow-lg"
          aria-label="Call demo line (800) 555-1234"
        >
          <span className="text-base" aria-hidden="true">📞</span>
          <span>Hear it live — (800) 555-1234</span>
        </a>
        <button
          onClick={dismiss}
          className="w-7 h-7 rounded-full bg-bg-dark border border-white/20 text-white/50 hover:text-white flex items-center justify-center text-xs hover:border-white/40 transition-all duration-150"
          aria-label="Dismiss demo CTA"
        >
          ×
        </button>
      </div>

      {/* Mobile: full-width bottom bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 animate-fade-up">
        <div className="bg-bg-dark border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
          <a
            href="tel:+18005551234"
            className="flex-1 flex items-center justify-center gap-2 text-bg-primary text-sm font-medium py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span aria-hidden="true">📞</span>
            Call Demo — (800) 555-1234
          </a>
          <button
            onClick={dismiss}
            className="text-white/40 hover:text-white text-lg w-8 h-8 flex items-center justify-center flex-shrink-0"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      </div>
    </>
  )
}
