import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-bg-primary rounded-lg flex items-center justify-center text-bg-dark font-serif font-bold text-sm">
                A
              </div>
              <span className="font-semibold text-sm tracking-tight">
                AnswerCare<span className="text-text-muted">.ai</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Managed AI receptionist service for US small businesses. Not software — an operations partner.
            </p>
            <div className="mt-4">
              <a
                href="tel:+18005551234"
                className="text-sm text-text-secondary hover:text-bg-primary transition-colors"
              >
                (800) 555-1234
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-mono-accent tracking-widest uppercase text-text-muted mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/dental"
                  className="text-sm text-text-secondary hover:text-bg-primary transition-colors"
                >
                  Dental Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-text-secondary hover:text-bg-primary transition-colors"
                >
                  Law Firms
                </Link>
              </li>
              <li>
                <Link
                  href="/realestate"
                  className="text-sm text-text-secondary hover:text-bg-primary transition-colors"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-mono-accent tracking-widest uppercase text-text-muted mb-4">
              Product
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/dental#pricing" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="tel:+18005551234" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  Demo Line
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-mono-accent tracking-widest uppercase text-text-muted mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-text-muted">About</span>
              </li>
              <li>
                <a href="mailto:hello@answercare.ai" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-bg-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AnswerCare AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>Enterprise-grade security</span>
            <span>&bull;</span>
            <span>Bank-level encryption</span>
            <span>&bull;</span>
            <span>99.9% uptime</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
