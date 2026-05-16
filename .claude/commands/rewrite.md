# /rewrite [file path or topic]

Refresh and improve an existing page — update stats, improve SEO, strengthen copy.

## Process

1. **Read the file** at the given path (or find it by topic).

2. **Audit the page** using the `/optimize` checklist mentally:
   - Is the content still accurate? (pricing, phone number, CTAs)
   - Are stats/data points still current?
   - Does it rank for its target keyword? (check GSC if available)
   - Is the content thin (< 1,200 words)?

3. **Read context files for refreshed messaging:**
   - `context/brand-voice.md`
   - `context/competitor-analysis.md` (competitors may have changed)

4. **Rewrite priorities:**
   - **Stats:** Update any year-specific data or outdated numbers
   - **Pricing:** Ensure $497 / $199 / 14 days free is correct throughout
   - **Phone number:** Confirm `+1 (754) 227-6342` everywhere
   - **CTAs:** Confirm Whop + Calendly links are current
   - **Copy:** Apply brand voice improvements — make it more specific and direct
   - **SEO:** Ensure keyword density, heading structure, and internal links are optimized
   - **FAQ:** Add any new questions that have come up from customers

5. **Track changes** — note what you updated in a comment at the top of the file:
   ```tsx
   // Last updated: [date] — [brief description of changes]
   ```

6. **Save** and confirm the file compiles without TypeScript errors.
