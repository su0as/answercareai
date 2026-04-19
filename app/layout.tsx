import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AI Phone Agent for One-Person Trades | AnswerCare AI',
    template: '%s | AnswerCare AI',
  },
  description:
    'We answer every call, book 20 jobs in 30 days, or you don\'t pay. $199/month. Live in 5 days. For locksmiths, plumbers, garage door, HVAC, and solo trade operators.',
  keywords: [
    'AI receptionist',
    'managed AI answering service',
    'small business phone answering',
    'dental AI receptionist',
    'legal intake AI',
    'real estate lead capture',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://answercare.ai',
    siteName: 'AnswerCare AI',
    title: 'AnswerCare AI — Managed AI Receptionist for Small Business',
    description:
      'Managed AI receptionist service. Every call answered. Every appointment booked. Monthly intelligence reports. 14-day free trial.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnswerCare AI — Managed AI Receptionist',
    description: 'Not software. An operations partner. 14-day free trial.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload display font */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;700&family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'AnswerCare AI',
              applicationCategory: 'BusinessApplication',
              description:
                'Managed AI receptionist service for US small businesses. 24/7 call handling, appointment booking, and monthly intelligence reports.',
              url: 'https://answercare.ai',
              offers: {
                '@type': 'Offer',
                price: '199',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
              },
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
