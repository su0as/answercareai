'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname?.startsWith('/trades')) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300 ${
        scrolled ? 'border-b border-[#D5CFC1]' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(245,242,236,0.92)' : '#F5F2EC',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 h-full flex items-center justify-between">

        {/* Wordmark — Fraunces, no "AI" suffix */}
        <span
          className="text-[#0E0E0E] tracking-[-0.01em] select-none"
          style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontWeight: 600,
            fontSize: '20px',
            fontOpticalSizing: 'auto',
          }}
        >
          AnswerCare
        </span>

        {/* Primary CTA — visible at all times */}
        <a
          href="tel:+18005551234"
          className="hover:opacity-85 transition-opacity"
          style={{
            backgroundColor: '#B3392D',
            color: '#F5F2EC',
            padding: '10px 20px',
            borderRadius: '6px',
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            boxShadow: '0 1px 0 rgba(0,0,0,0.12)',
            letterSpacing: '0em',
          }}
        >
          <span className="hidden sm:inline">Call demo →</span>
          <span className="sm:hidden">Call →</span>
        </a>

      </div>
    </header>
  )
}
