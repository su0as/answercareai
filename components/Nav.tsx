'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DISPLAY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", monospace' }

export default function Nav() {
  const pathname = usePathname()

  // Hidden on trades page (has its own inline nav)
  if (pathname?.startsWith('/trades')) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2EC] border-b border-[#D5CFC1]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          aria-label="AnswerCare AI"
        >
          <span
            className="text-[#0E0E0E] text-[15px]"
            style={{ ...DISPLAY, fontWeight: 600 }}
          >
            AnswerCare.ai
          </span>
        </Link>

        {/* Desktop right */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="tel:+18005551234"
            className="text-[#4A4641] hover:text-[#0E0E0E] transition-colors"
            style={{ ...MONO, fontSize: '13px', letterSpacing: '-0.01em' }}
          >
            +1 (800) 555-1234
          </a>
          <a
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#0E0E0E] border border-[#0E0E0E] px-4 py-1.5 rounded hover:bg-[#0E0E0E] hover:text-[#F5F2EC] transition-all"
            style={{ ...DISPLAY, fontWeight: 500 }}
          >
            Get started →
          </a>
        </div>

        {/* Mobile */}
        <a
          href="tel:+18005551234"
          className="sm:hidden text-[13px] text-[#B3392D] border border-[#B3392D] px-3 py-1.5 rounded"
          style={{ ...MONO, letterSpacing: '-0.01em' }}
        >
          📞 Call
        </a>
      </div>
    </header>
  )
}
