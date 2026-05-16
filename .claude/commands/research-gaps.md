# /research-gaps

Analyze competitor content to identify topics AnswerCare AI is not covering but should be.

## Process

1. **Read:** `context/target-keywords.md`, `context/competitor-analysis.md`

2. **Search for what competitors rank for:**
   - Web search: "ringwell blog site:ringwell.ai"
   - Web search: "answering service for plumbers" — check all ranking pages
   - Web search: "ai receptionist for contractors" — check all ranking pages
   - Web search: "hvac answering service" — check all ranking pages

3. **Identify content gaps** — topics competitors cover that answercareai.com does NOT:
   - Blog posts / guides
   - FAQ pages
   - Comparison pages
   - Trade-specific landing pages

4. **Cross-reference against existing pages:**
   - Existing: /, /plumbers, /hvac, /electricians, /locksmiths, /roofers, /pest-control
   - Existing comparisons: /compare/ringwell-alternative, /compare/answering-service
   - Existing verticals: /dental, /legal, /realestate

5. **Produce a gap report:**
   ```
   HIGH PRIORITY GAPS (competitor ranks, we don't)
   - [keyword] → [competitor page] → Recommended URL: /[slug]
   
   MEDIUM PRIORITY GAPS (keyword has volume, no competitor owns it)
   - [keyword] → Recommended URL: /[slug]
   
   LOW PRIORITY GAPS (low volume or low fit)
   - [keyword] → Note
   ```

Save to `research/content-gaps-[date].md`.
