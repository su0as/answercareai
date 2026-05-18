import type { Metadata } from 'next'
import { tradesData } from '@/data/tradesData'
import TradeVerticalPage from '@/components/TradeVerticalPage'

const data = tradesData['electricians']

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  keywords: [data.primaryKeyword, ...data.secondaryKeywords].join(', '),
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: `https://www.answercareai.com/electricians`,
    siteName: 'AnswerCare AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seoTitle,
    description: data.seoDescription,
  },
  alternates: {
    canonical: `https://www.answercareai.com/electricians`,
  },
}

export default function Page() {
  return <TradeVerticalPage data={data} />
}
