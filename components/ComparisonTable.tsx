import React from 'react'
import SectionTag from './SectionTag'

interface ComparisonRow {
  others: string
  answercare: string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">The Difference</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Not software. An operations partner.
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Most AI tools hand you a product and walk away. We stay and optimize.
          </p>
        </div>

        <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-bg-secondary border-b border-border px-4 sm:px-6 py-4">
            <span className="text-xs font-mono-accent tracking-widest uppercase text-text-muted">Feature</span>
          </div>
          <div className="bg-bg-secondary border-b border-l border-border px-4 sm:px-6 py-4 text-center">
            <span className="text-xs font-mono-accent tracking-widest uppercase text-text-muted">Others</span>
          </div>
          <div className="bg-text-primary border-b border-l border-border px-4 sm:px-6 py-4 text-center">
            <span className="text-xs font-mono-accent tracking-widest uppercase text-bg-primary/80">AnswerCare</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <React.Fragment key={i}>
              <div
                className={`px-4 sm:px-6 py-4 text-sm text-text-secondary ${i < rows.length - 1 ? 'border-b border-border' : ''}`}
              >
                {['Configuration', 'Scripts', 'Quality Control', 'Reporting', 'Support', 'Relationship'][i]}
              </div>
              <div
                className={`px-4 sm:px-6 py-4 text-sm text-text-muted text-center border-l border-border ${i < rows.length - 1 ? 'border-b' : ''}`}
              >
                {row.others}
              </div>
              <div
                className={`px-4 sm:px-6 py-4 text-sm text-bg-primary font-medium text-center border-l border-border bg-text-primary ${i < rows.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                {row.answercare}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
