'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Compute hide flag — must NOT be used for early return before hooks
  const shouldHide = pathname === '/' || pathname?.startsWith('/trades')

  // All hooks must fire unconditionally — Rules of Hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDismissed(sessionStorage.getItem('ctaDismissed') === 'true')
    }
  }, [])

  useEffect(() => {
    if (shouldHide) return
    // Watch the hero section sentinel
    const hero = document.querySelector('main > :first-child')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [shouldHide])

  const dismiss = () => {
    sessionStorage.setItem('ctaDismissed', 'true')
    setDismissed(true)
  }

  if (shouldHide || dismissed || !visible) return null

  return (
    <>
      {/* Desktop: floating pill bottom-right */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-center gap-2 animate-fade-up">
        <a
          href="tel:+18005551234"
          className="flex items-center gap-2.5 pl-4 pr-3 py-3 rounded-full text-sm font-medium hover:opacity-85 transition-opacity"
          style={{
            backgroundColor: '#1d1d1f',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.12)',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            textDecoration: 'none',
          }}
          aria-label="Call demo line (800) 555-1234"
        >
          <span className="text-base" aria-hidden="true">📞</span>
          <span>Hear it live — (800) 555-1234</span>
        </a>
        <button
          onClick={dismiss}
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-150 hover:opacity-70"
          style={{
            backgroundColor: '#1d1d1f',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
          }}
          aria-label="Dismiss demo CTA"
        >
          ×
        </button>
      </div>

      {/* Mobile: full-width bottom bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 animate-fade-up">
        <div
          className="px-4 py-3 flex items-center justify-between gap-3"
          style={{
            backgroundColor: '#1d1d1f',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <a
            href="tel:+18005551234"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-full hover:opacity-85 transition-opacity"
            style={{
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              textDecoration: 'none',
            }}
          >
            <span aria-hidden="true">📞</span>
            Call Demo — (800) 555-1234
          </a>
          <button
            onClick={dismiss}
            className="text-lg w-8 h-8 flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      </div>
    </>
  )
}
