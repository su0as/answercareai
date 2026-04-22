'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BODY = { fontFamily: '"Inter Tight", Inter, Arial, sans-serif' }
const MONO = { fontFamily: '"JetBrains Mono", monospace' }

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/trades')) return null

  return (
    <footer className="bg-[#EBE7DD] border-t border-[#D5CFC1] py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-[#4A4641]" style={BODY}>
          AnswerCare AI &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4 text-[13px] text-[#4A4641]" style={BODY}>
          <a
            href="mailto:hello@answercareai.com"
            className="hover:text-[#0E0E0E] transition-colors underline underline-offset-2"
            style={MONO}
          >
            hello@answercareai.com
          </a>
          <span>&middot;</span>
          <Link href="/privacy" className="hover:text-[#0E0E0E] transition-colors">Privacy</Link>
          <span>&middot;</span>
          <Link href="/terms" className="hover:text-[#0E0E0E] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
