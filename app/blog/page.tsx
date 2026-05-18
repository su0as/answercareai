import type { Metadata } from 'next'
import { CALENDLY_SETUP_CALL_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Blog — Contractor Call Handling, AI Answering & Trade Business Tips | AnswerCare AI',
  description: 'Data-driven guides on missed call costs, AI answering services, and phone strategy for plumbers, HVAC, electricians, and every home service trade.',
  keywords: 'contractor answering service blog, missed calls plumbers, ai phone answering trades, home service business tips',
  openGraph: {
    title: 'AnswerCare AI Blog — Contractor Call & Revenue Guides',
    description: 'How much are missed calls costing you? Data-driven guides for every trade.',
    url: 'https://www.answercareai.com/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://www.answercareai.com/blog' },
}

const posts = [
  {
    slug: 'missed-calls-cost-plumbers',
    title: 'How Much Revenue Are Missed Calls Costing Plumbers?',
    description: 'The average plumbing shop misses 2–3 calls a day. At a $385 average ticket, that\'s $800+ in revenue leaking every single day. Here\'s the math — and how to stop it.',
    date: '2025-05-14',
    readTime: '7 min',
    tag: 'Data & Revenue',
    trade: 'Plumbers',
  },
  {
    slug: 'best-answering-service-for-plumbers',
    title: 'Best Answering Service for Plumbers in 2025 (Ranked & Reviewed)',
    description: 'We compared 6 answering services on speed, booking capability, and per-call vs flat-rate pricing. One option books the job without a dispatcher. Here\'s how they stack up.',
    date: '2025-05-14',
    readTime: '9 min',
    tag: 'Buyer\'s Guide',
    trade: 'Plumbers',
  },
  {
    slug: 'best-ai-answering-service-for-trades',
    title: 'Best AI Answering Service for Trades & Contractors in 2025',
    description: 'AI voice quality crossed the threshold in 2024. We tested 5 options for home service contractors — speed, job booking, price, and which one actually sounds human.',
    date: '2025-05-14',
    readTime: '10 min',
    tag: 'Buyer\'s Guide',
    trade: 'All Trades',
  },
  {
    slug: 'never-miss-a-call-contractor',
    title: 'How to Never Miss a Customer Call as a Solo Contractor',
    description: 'You\'re on a job. Your phone rings. Here\'s a practical system — call forwarding, AI answering, and follow-up texts — that keeps every lead covered without a receptionist.',
    date: '2025-05-14',
    readTime: '6 min',
    tag: 'How-To Guide',
    trade: 'All Trades',
  },
  {
    slug: 'ai-vs-traditional-answering-service-contractors',
    title: 'AI Answering Service vs Traditional Answering Service for Contractors',
    description: 'Traditional services take messages. AI answering services book the job. The cost difference is $0–150/mo. Here\'s what each actually does — and which one makes money.',
    date: '2025-05-14',
    readTime: '8 min',
    tag: 'Comparison',
    trade: 'All Trades',
  },
]

export default function BlogIndex() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'AnswerCare AI Blog',
        description: 'Data-driven guides on missed call costs, AI answering, and phone strategy for home service contractors.',
        url: 'https://www.answercareai.com/blog',
        publisher: { '@type': 'Organization', name: 'AnswerCare AI', url: 'https://www.answercareai.com' },
      })}} />

      {/* Header */}
      <section className="section" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot" />Contractor call strategy · revenue data · trade business
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-.03em', lineHeight: 1, marginBottom: 16 }}>
            The AnswerCare Blog.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 520, lineHeight: 1.55 }}>
            Data-driven guides on missed calls, AI answering services, and phone strategy for plumbers,
            HVAC, electricians, and every home service trade.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section" style={{ paddingTop: 0, borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gap: 2 }}>
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 32,
                  alignItems: 'start',
                  padding: '36px 0',
                  borderBottom: '1px solid var(--line-soft)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.06em',
                      background: 'var(--panel)', border: '1px solid var(--line)',
                      padding: '3px 8px', borderRadius: 4, color: 'var(--muted)',
                    }}>{post.tag.toUpperCase()}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{post.trade}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted-2)' }}>·</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{post.readTime} read</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 600, marginBottom: 10, lineHeight: 1.25, letterSpacing: '-.02em' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 640 }}>
                    {post.description}
                  </p>
                </div>
                <div style={{ paddingTop: 8, flexShrink: 0 }}>
                  <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    Read →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-.03em', marginBottom: 12 }}>
            Ready to stop missing calls?
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-2)', maxWidth: 400, margin: '0 auto 32px' }}>
            AnswerCare answers in under 2 seconds, qualifies the caller, and books the job. 14 days free.
          </p>
          <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://whop.com/answercare-ai/answercare-for-solo-trade-operators/"
              target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              Start 14 days free →
            </a>
            <a href={CALENDLY_SETUP_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Book a setup call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
