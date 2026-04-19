import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Phone Agent for Solo Trade Operators | AnswerCare AI',
  description:
    'We answer every call, book 20 jobs in 30 days, or you don\'t pay — and we\'ll Zelle you $500. $199/month. 5-day setup. Works with Jobber, Housecall Pro, Google Calendar.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://answercare.ai/trades',
    siteName: 'AnswerCare AI',
    title: 'AI Phone Agent for Solo Trade Operators | AnswerCare AI',
    description:
      '20 booked jobs in 30 days or you don\'t pay. $199/month, 5-day setup.',
  },
}

export default function TradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
