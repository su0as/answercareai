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

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/trades')) return null

  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '36px 0', background: 'rgba(14,14,12,.02)' }}>
      <div className="wrap" style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Logo />
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
            EST. 2024 · AUSTIN, TX
          </span>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--muted)', flexWrap: 'wrap' }}>
          <Link href="/privacy" className="ulink">Privacy</Link>
          <Link href="/terms" className="ulink">Terms</Link>
          <Link href="/refund" className="ulink">Refund</Link>
          <Link href="/product" className="ulink">How It Works</Link>
          <a href="mailto:hello@answercareai.com" className="ulink">hello@answercareai.com</a>
        </div>
      </div>
    </footer>
  )
}
