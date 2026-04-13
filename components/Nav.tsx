'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dental', label: 'Dental' },
  { href: '/legal', label: 'Legal' },
  { href: '/realestate', label: 'Real Estate' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="AnswerCare AI Home">
          <div className="w-8 h-8 bg-text-primary rounded-lg flex items-center justify-center text-bg-primary font-serif font-bold text-sm group-hover:bg-accent-home transition-colors duration-200">
            A
          </div>
          <span className="font-semibold text-text-primary text-sm tracking-tight">
            AnswerCare<span className="text-text-muted">.ai</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-text-primary font-medium bg-bg-secondary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18005551234"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            (800) 555-1234
          </a>
          <Link
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-text-primary text-bg-primary text-sm px-4 py-2 rounded-lg font-medium hover:bg-accent-home transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-3 text-sm rounded-lg my-0.5 transition-colors ${
                pathname === link.href
                  ? 'text-text-primary font-medium bg-bg-secondary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border-subtle mt-2 flex flex-col gap-2">
            <a
              href="tel:+18005551234"
              className="block px-3 py-2.5 text-sm text-text-secondary text-center border border-border rounded-lg"
            >
              Call: (800) 555-1234
            </a>
            <Link
              href="https://calendly.com/answercare-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2.5 text-sm text-center bg-text-primary text-bg-primary rounded-lg font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
