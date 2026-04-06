'use client'

import { useState } from 'react'
import SectionTag from './SectionTag'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  id?: string
}

export default function FAQ({ items, id }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id={id} className="section-padding bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">FAQ</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Questions we get a lot.
          </h2>
        </div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-bg-secondary transition-colors duration-150"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-text-primary text-sm sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-text-muted transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
