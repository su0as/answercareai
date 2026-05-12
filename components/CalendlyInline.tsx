'use client'

import Script from 'next/script'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export default function CalendlyInline() {
  return (
    <>
      <div
        className="calendly-inline-widget overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white"
        data-url={CALENDLY_SETUP_CALL_URL}
        style={{ minWidth: 320, height: 700 }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
