'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 26, height: 26, borderRadius: 8,
        background: 'var(--ink)', color: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 2.2c0-.8.7-1.4 1.5-1.2l1.7.4c.6.1 1 .6 1 1.2v1.6c0 .5-.3.9-.7 1.1l-.9.4c.6 1.6 1.7 2.7 3.3 3.3l.4-.9c.2-.4.6-.7 1.1-.7h1.6c.6 0 1.1.4 1.2 1l.4 1.7c.2.8-.4 1.5-1.2 1.5C5.4 11.6 2.4 8.6 3 2.2Z" fill="currentColor"/>
        </svg>
        <span style={{
          position: 'absolute', top: -2, right: -2,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 0 2px var(--bg)',
        }} />
      </div>
      <span style={{ fontWeight: 600, letterSpacing: '-.01em', fontSize: 17 }}>AnswerCare</span>
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  if (pathname?.startsWith('/trades')) return null

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(246,244,238,.85)',
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      borderBottom: '1px solid var(--line-soft)',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/">
          <Logo />
        </Link>

        <nav style={{ display: 'flex', gap: 28, fontSize: 14 }}>
          <a href="/#how" className="ulink" style={{ color: 'var(--ink-2)' }}>How it works</a>
          <a href="/#calc" className="ulink" style={{ color: 'var(--ink-2)' }}>ROI calculator</a>
          <a href="/#proof" className="ulink" style={{ color: 'var(--ink-2)' }}>Proof</a>
          <a href="/#pricing" className="ulink" style={{ color: 'var(--ink-2)' }}>Pricing</a>
          <a href="/#faq" className="ulink" style={{ color: 'var(--ink-2)' }}>FAQ</a>
        </nav>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="tel:+17542276342" className="mono" style={{ fontSize: 13, color: 'var(--muted)' }}>
            +1 (754) 227-6342
          </a>
          <a href="/#pricing" className="btn btn-primary" style={{ padding: '10px 16px', fontSize: 14 }}>
            Start free <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
