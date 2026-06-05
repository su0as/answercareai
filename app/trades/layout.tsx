import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Phone Agent for Solo Trade Operators | AnswerCare AI',
  description:
    'Every missed call is revenue your competitor books. AnswerCare answers 24/7, qualifies, and books jobs for contractors. Start with a performance pilot — pay only for what we recover.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.answercareai.com/trades',
    siteName: 'AnswerCare AI',
    title: 'AI Phone Answering for Contractors | AnswerCare AI',
    description:
      'Missed calls are missed jobs. AnswerCare answers 24/7, books the job, texts the tech. Plans from $500/mo.',
  },
}

export default function TradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
