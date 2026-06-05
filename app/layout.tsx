import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Missed-Call Revenue Recovery for Service Businesses | AnswerCare AI',
    template: '%s | AnswerCare AI',
  },
  description:
    'Every unanswered call is revenue your competitor books. AnswerCare answers 24/7, qualifies callers, and books jobs for home services, property management, dental practices, and law firms.',
  keywords: [
    'missed call revenue recovery',
    'AI answering service',
    'managed AI phone answering',
    'after hours answering service',
    'dental practice answering',
    'law firm intake answering',
    'property management answering',
    'home services phone answering',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.answercareai.com',
    siteName: 'AnswerCare AI',
    title: 'Missed-Call Revenue Recovery | AnswerCare AI',
    description:
      'Every unanswered call is revenue your competitor books. AnswerCare answers 24/7 and books the job. Start with a performance pilot — pay only for what we recover.',
    images: [
      {
        url: 'https://www.answercareai.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AnswerCare AI — Missed-Call Revenue Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnswerCare AI — Missed-Call Revenue Recovery',
    description: 'Every unanswered call is revenue someone else books. We recover it — 24/7 answering, lead reactivation, job booking.',
    images: ['https://www.answercareai.com/og-default.png'],
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
        {/* Primary typefaces: Geist + Instrument Serif + Geist Mono */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
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
                'Missed-call revenue recovery for service businesses. 24/7 AI call answering, lead reactivation, and job booking for home services, property management, dental practices, and law firms.',
              url: 'https://www.answercareai.com',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '500',
                highPrice: '1500',
                priceCurrency: 'USD',
                description: 'Plans from $500/mo. Performance pilot available — pay only for recovered jobs.',
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
