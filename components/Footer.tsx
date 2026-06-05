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
    <footer style={{ borderTop: '1px solid var(--line)', padding: '48px 0 36px', background: 'rgba(14,14,12,.02)' }}>
      <div className="wrap">
        {/* Top row: logo + columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: '40px 48px', marginBottom: 40 }}>
          <div>
            <Logo />
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginTop: 10 }}>
              EST. 2024 · AUSTIN, TX
            </div>
            <a href="mailto:hello@answercareai.com" className="ulink" style={{ fontSize: 13, color: 'var(--muted)', display: 'block', marginTop: 10 }}>
              hello@answercareai.com
            </a>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 14 }}>SOLUTIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href="/missed-revenue" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Missed Revenue Recovery</Link>
              <Link href="/home-services" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Home Services</Link>
              <Link href="/property-management" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Property Management</Link>
              <Link href="/dental-medical" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Dental & Medical</Link>
              <Link href="/law-firms" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Law Firms</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 14 }}>TRADES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href="/plumbers" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Plumbers</Link>
              <Link href="/hvac" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>HVAC</Link>
              <Link href="/electricians" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Electricians</Link>
              <Link href="/contractors" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>All Contractors</Link>
              <Link href="/blog" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Blog</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 14 }}>COMPANY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href="/product" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>How It Works</Link>
              <Link href="/#pricing" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Pricing</Link>
              <Link href="/privacy" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Privacy</Link>
              <Link href="/terms" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Terms</Link>
              <Link href="/refund" className="ulink" style={{ fontSize: 13, color: 'var(--ink-2)' }}>Refund</Link>
            </div>
          </div>
        </div>
        {/* Bottom row */}
        <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>
            © {new Date().getFullYear()} AnswerCare AI. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>
            Plans from $500/mo · Performance pilot available
          </span>
        </div>
      </div>
    </footer>
  )
}
