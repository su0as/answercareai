# /write [topic or brief file]

Write a new SEO-optimized page or blog post for AnswerCare AI.

## Process

1. **Find or create a research brief:**
   - If a brief exists at `research/[slug]-brief.md`, read it.
   - If not, run `/research-serp [topic]` first to generate one.

2. **Read all context files:**
   - `context/brand-voice.md` — tone, voice, messaging rules
   - `context/seo-guidelines.md` — technical SEO requirements
   - `context/internal-links-map.md` — which pages to link to
   - `context/target-keywords.md` — keyword priorities
   - `context/competitor-analysis.md` — competitor framing

3. **Determine the page type:**
   - **Trade vertical page:** Use `components/TradeVerticalPage.tsx` pattern. Add data to `data/tradesData.ts` and create `app/[slug]/page.tsx`.
   - **Comparison page:** Follow `app/compare/ringwell-alternative/page.tsx` pattern.
   - **Blog/guide post:** Create `app/blog/[slug]/page.tsx` as a server component.

4. **Write the content following these rules:**
   - Primary keyword in H1, first 100 words, 2–3 H2s
   - 1–2% keyword density overall
   - Trade-specific language — not generic
   - Real scenarios, specific dollar amounts
   - FAQ section with 5–6 genuine questions + answers
   - Add JSON-LD: Service + FAQPage schemas
   - Set proper Next.js `metadata` export (title, description, canonical, OG)
   - 3–5 internal links to related pages
   - Multiple CTAs: Whop purchase link + Calendly link + demo phone number
   - Add to `app/sitemap.ts`

5. **Quality checklist before saving:**
   - [ ] H1 contains primary keyword
   - [ ] Meta title 50–60 chars
   - [ ] Meta description 150–160 chars
   - [ ] Canonical URL set
   - [ ] FAQPage JSON-LD present
   - [ ] At least 3 internal links
   - [ ] At least 2 CTAs (Whop + Calendly)
   - [ ] Mobile-responsive layout (uses CSS classes, not inline grids)
   - [ ] Page added to sitemap.ts

6. **Save to:** `app/[slug]/page.tsx` (or `app/blog/[slug]/page.tsx` for blog)

Output a summary with: URL, target keyword, word count estimate, and any items that need manual review.
