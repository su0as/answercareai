'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  // Show sticky on homepage only; on other pages hide entirely
  // (homepage has its own sticky via scroll position)

  useEffect(() => {
    if (pathname !== '/') { setShow(false); return }
    const onScroll = () => {
      setShow(window.scrollY > 1200 && window.scrollY < document.body.scrollHeight - 1400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (pathname !== '/') return null

  return (
    <div className={`sticky-cta ${show ? 'show' : ''}`}>
      <div className="wrap" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, padding: '14px 32px', flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 14 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#9FE2B0',
            boxShadow: '0 0 0 4px rgba(159,226,176,.2)',
            animation: 'blink 1.6s infinite',
          }} />
          <span><strong>14 days free.</strong> $497 setup · cancel before day 15 and owe nothing more.</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="tel:+17542276342" className="mono" style={{ fontSize: 13, color: 'rgba(246,244,238,.7)' }}>
            (754) 227-6342
          </a>
          <a href="#pricing" className="btn btn-accent" style={{ padding: '10px 18px', fontSize: 14 }}>
            Start free →
          </a>
        </div>
      </div>
    </div>
  )
}
