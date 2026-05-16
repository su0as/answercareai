# /optimize [file path]

Audit and optimize an existing page for SEO. Run a full on-page SEO check and apply improvements.

## Process

1. **Read the file** at the given path.

2. **Read context files:**
   - `context/seo-guidelines.md`
   - `context/brand-voice.md`
   - `context/internal-links-map.md`

3. **Run the SEO audit checklist:**

   ### Technical
   - [ ] `metadata` export present with title, description, keywords, OG, canonical
   - [ ] Title is 50–60 characters
   - [ ] Description is 150–160 characters
   - [ ] Canonical URL is correct
   - [ ] Page added to `app/sitemap.ts`
   - [ ] JSON-LD structured data present (Service, FAQPage, Article, etc.)

   ### On-Page SEO
   - [ ] Primary keyword in H1
   - [ ] Primary keyword in first 100 words
   - [ ] Primary keyword in 2–3 H2 headings
   - [ ] Keyword density 1–2% (count occurrences, divide by word count)
   - [ ] Secondary/LSI keywords naturally distributed
   - [ ] No keyword stuffing (no awkward repetition)

   ### Content Quality
   - [ ] H1 > H2 > H3 hierarchy maintained (no skipped levels)
   - [ ] FAQ section present with 5+ questions
   - [ ] Paragraphs ≤ 4 sentences
   - [ ] Reading level appropriate (avoid jargon without explanation)
   - [ ] Specific dollar amounts, time claims, percentages cited

   ### Links
   - [ ] 3–5 internal links to related pages
   - [ ] Anchor text varies (not always exact keyword)
   - [ ] CTAs link to Whop + Calendly with `target="_blank" rel="noopener noreferrer"`
   - [ ] External links to credible sources where claims are made

   ### Mobile / Performance
   - [ ] No inline `display: 'grid', gridTemplateColumns: ...` (use CSS classes instead)
   - [ ] All responsive grid classes used (hero-grid, story-grid, etc.)
   - [ ] Images have alt text (if any)

4. **Apply fixes directly** — edit the file to resolve any failing checks.

5. **Output an audit report:**
   ```
   File: [path]
   Audit date: [date]
   
   PASSED: [list items]
   FIXED: [list items + what was changed]
   NEEDS MANUAL REVIEW: [list items that require content decisions]
   
   SEO Score: [X/20 checks passing]
   Recommended next action: [publish / needs more work / needs research]
   ```
