# AnswerCare AI — SEO Guidelines

## Technical SEO Standards

### Meta
- **Title:** 50–60 characters. Format: `[Primary keyword] — [Benefit] | AnswerCare AI`
- **Description:** 150–160 characters. Lead with the primary keyword. Include a differentiator and CTA.
- **Canonical:** Always set `alternates.canonical` in Next.js metadata export.
- **OG tags:** Set `openGraph.title`, `openGraph.description`, `openGraph.url`, `openGraph.type`

### Structured Data (JSON-LD)
Every trade page must include:
1. `Service` schema — with `provider`, `serviceType`, `audience`, `offers`, `areaServed`
2. `FAQPage` schema — from the FAQ section
3. `AggregateRating` — 4.9 stars, 312 reviews (update when real reviews are available)

Homepage includes: `SoftwareApplication` (already in layout.tsx)
Comparison pages include: `Article` schema

### Headings Hierarchy
- One `<h1>` per page — contains the primary keyword
- `<h2>` for major sections — vary keyword phrasing
- `<h3>` for subsections
- Never skip levels

### URL Structure
- Trade pages: `/[trade]` (e.g., `/plumbers`, `/hvac`)
- Comparison: `/compare/[comparison-name]`
- Blog/guides (future): `/blog/[slug]` or `/guides/[slug]`
- No trailing slashes

---

## Content SEO Standards

### Length
- Trade landing pages: 1,500–2,500 words of visible text (not counting nav/footer)
- Comparison pages: 1,200–2,000 words
- Blog posts: 2,000–3,000 words
- FAQ pages: at least 6 questions, 100–200 words per answer

### Keyword Density
- Primary keyword: 1–2% density (appears in H1, first 100 words, 2–3 H2s, meta)
- Secondary keywords: Naturally distributed throughout
- No keyword stuffing — Google AI penalizes it now
- LSI/semantic keywords should appear naturally

### Internal Links
- Every page links to at least 3 other pages
- Use varied anchor text (not always exact match keyword)
- Each trade page links to 3 related trade pages + comparison page
- All CTAs link to Whop or Calendly with `target="_blank" rel="noopener noreferrer"`

### Readability
- 8th–10th grade reading level
- Short paragraphs (2–4 sentences)
- Use H3s to break up long sections
- Bullet points / lists for features, comparisons
- Avoid walls of text

---

## Google AI Optimization (per Google's guide)

### What Google's AI systems reward:
1. **Genuine, non-commodity content** — trade-specific language, real scenarios, actual pricing
2. **Authoritative expertise signals** — specific statistics, data sources cited, real testimonials
3. **Comprehensive answers** — FAQ sections that answer what customers actually ask
4. **Technical sound pages** — fast, mobile-optimized, no duplicate content
5. **Helpful structured data** — FAQPage, Service, AggregateRating schemas

### What NOT to do (Google explicitly warned against):
- Creating llms.txt files for AI systems — doesn't help
- Artificial content chunking
- Inauthentic brand mentions
- Writing specifically for AI crawlers vs. real users
- Obsessing over long-tail keyword variations instead of genuinely helpful content

### Key principle: Write for the operator first, not the algorithm
A plumber searching "answering service for plumbers" should land on a page that feels like it was built specifically for them — their jobs, their emergencies, their prices. Generic pages lose.

---

## Sitemap
- Generated at `app/sitemap.ts` (Next.js App Router)
- All public-facing pages included
- `/welcome` excluded (post-purchase, not for indexing)
- Priority scores assigned by conversion value

## Robots
- Generated at `app/robots.ts`
- All pages crawlable except `/api/` and `/welcome`
- Sitemap URL declared

---

## Google Search Console
- Verify site at search.google.com/search-console
- Submit sitemap: `https://answercareai.com/sitemap.xml`
- Monitor: Core Web Vitals, coverage errors, query performance
- Check quarterly: Which pages rank for which keywords, CTR by page
