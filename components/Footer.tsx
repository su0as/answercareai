'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BODY = { fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", monospace' }

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/trades')) return null

  return (
    <footer className="bg-white border-t border-[#e8e8ed] py-10 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Top row: brand + email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
          <p className="text-[13px] text-[#707070]" style={BODY}>
            AnswerCare AI &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()}
          </p>
          <a
            href="mailto:hello@answercareai.com"
            className="text-[13px] text-[#707070] hover:text-[#1d1d1f] transition-colors underline underline-offset-2"
            style={MONO}
          >
            hello@answercareai.com
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e8e8ed] mb-5" />

        {/* Bottom row: nav links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#707070]" style={BODY}>
          <Link href="/product" className="hover:text-[#1d1d1f] transition-colors">How It Works</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <Link href="/#pricing" className="hover:text-[#1d1d1f] transition-colors">Pricing</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <Link href="/#faq" className="hover:text-[#1d1d1f] transition-colors">FAQ</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <Link href="/privacy" className="hover:text-[#1d1d1f] transition-colors">Privacy</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <Link href="/terms" className="hover:text-[#1d1d1f] transition-colors">Terms</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <Link href="/refund" className="hover:text-[#1d1d1f] transition-colors">Refund Policy</Link>
          <span className="text-[#e8e8ed]">&middot;</span>
          <a href="mailto:hello@answercareai.com" className="hover:text-[#1d1d1f] transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  )
}
