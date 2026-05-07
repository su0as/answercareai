'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname?.startsWith('/trades')) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] transition-all duration-300 ${
        scrolled ? 'border-b border-[#e8e8ed]' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(245,245,247,0.88)' : '#f5f5f7',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 h-full flex items-center justify-between">

        {/* Wordmark */}
        <span
          className="text-[#1d1d1f] tracking-[-0.02em] select-none"
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          AnswerCare
        </span>

        {/* Center label — desktop only */}
        <span
          className="hidden md:block text-[13px] text-[#707070]"
          style={{ fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace' }}
        >
          Built for solo trades
        </span>

        {/* Primary CTA */}
        <a
          href="tel:+18005551234"
          className="hover:opacity-85 transition-opacity"
          style={{
            backgroundColor: '#0071e3',
            color: '#ffffff',
            padding: '8px 20px',
            borderRadius: '999px',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: 400,
            fontSize: '15px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            letterSpacing: '-0.01em',
          }}
        >
          <span className="hidden sm:inline">Call demo →</span>
          <span className="sm:hidden">Call →</span>
        </a>

      </div>
    </header>
  )
}
