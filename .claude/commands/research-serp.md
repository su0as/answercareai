# /research-serp [keyword]

Research the SERP for a target keyword and produce a content brief.

## What to do

Given the keyword `$ARGUMENTS`:

1. **Read context files first:**
   - `context/brand-voice.md`
   - `context/target-keywords.md`
   - `context/seo-guidelines.md`
   - `context/competitor-analysis.md`

2. **Web search the keyword** — fetch the top 5–10 results:
   - What types of pages rank? (listicles, landing pages, comparison pages, blog posts)
   - What questions do they answer?
   - What word count / depth do ranking pages have?
   - What structured data do they use?
   - What CTAs / offers are present?

3. **Identify the search intent:**
   - Informational (research stage)
   - Commercial (comparing options)
   - Transactional (ready to buy)
   - Navigational (looking for a specific brand)

4. **Analyze keyword variations** — identify related terms, LSI keywords, and questions from "People Also Ask" that should be addressed.

5. **Produce a content brief:**
   ```
   Keyword: [keyword]
   Intent: [type]
   Recommended page type: [landing page / blog post / comparison]
   Recommended URL: answercareai.com/[slug]
   Recommended title (50-60 chars): 
   Recommended meta description (150-160 chars):
   
   H1 suggestion:
   H2 sections to cover:
   - 
   - 
   - 
   
   Primary keyword density target: 1-2%
   Secondary/LSI keywords to include:
   - 
   
   Target word count: [X] words
   JSON-LD schemas needed: 
   Internal links to include:
   External links to cite:
   
   Competitive differentiators to emphasize:
   - 
   
   FAQs to include (from PAA + buyer questions):
   1.
   2.
   3.
   ```

Save the brief to `research/[keyword-slug]-brief.md`.
