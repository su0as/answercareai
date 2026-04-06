import type { Metadata } from 'next'
import VerticalPage from '@/components/VerticalPage'
import { verticals } from '@/data/verticals'

const data = verticals.dental

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
}

export default function DentalPage() {
  return <VerticalPage data={data} />
}
