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
        <p
          className="text-[13px] text-[#4A4641]"
          style={BODY}
        >
          AnswerCare AI &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()} &nbsp;&middot;&nbsp;{' '}
          <a
            href="mailto:rdx@answercare.ai"
            className="hover:text-[#0E0E0E] transition-colors underline underline-offset-2"
          >
            rdx@answercare.ai
          </a>
        </p>
        <div className="flex items-center gap-4 text-[13px] text-[#4A4641]" style={BODY}>
          <a
            href="tel:+18005551234"
            className="hover:text-[#0E0E0E] transition-colors"
            style={{ ...MONO, fontSize: '12px' }}
          >
            (800) 555-1234
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
