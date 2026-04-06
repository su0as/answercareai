import type { Metadata } from 'next'
import VerticalPage from '@/components/VerticalPage'
import { verticals } from '@/data/verticals'

const data = verticals.realestate

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
}

export default function RealEstatePage() {
  return <VerticalPage data={data} />
}
