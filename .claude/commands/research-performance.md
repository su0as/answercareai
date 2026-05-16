# /research-performance

Analyze which existing pages are performing (or underperforming) to prioritize content updates.

## Process

1. **Check Google Search Console (manually):**
   - Go to search.google.com/search-console
   - Site: answercareai.com
   - Export top queries, top pages, impressions, clicks, CTR, position

2. **Identify content priorities from data:**

   ### Quick wins (already ranking, just needs CTR improvement)
   - Pages ranking positions 6–15 with good impressions but low CTR
   - Fix: Improve title tag and meta description
   - These can move to page 1 with small changes

   ### Fallen pages (was ranking, now dropped)
   - Compare performance vs. 3 months ago
   - Likely needs a content refresh or new backlinks

   ### Zero-impression pages (published but not indexed or ranking)
   - Check: Is the page in sitemap? Is it crawlable? Is content thin?

   ### High-volume opportunity keywords (appear in queries but no dedicated page)
   - These signal what to write next

3. **Output a performance report:**
   ```
   TOP PERFORMING PAGES (by clicks):
   1. [URL] — [X] clicks, [X] impressions, [CTR]%, pos [X]
   
   QUICK WIN OPPORTUNITIES:
   1. [URL] — ranking pos [X] — fix: [what to change]
   
   ZERO-IMPRESSION PAGES (check indexing):
   1. [URL] — likely issue: [reason]
   
   NEXT CONTENT TO WRITE (based on query data):
   1. [query] — [X] impressions, 0 clicks — recommended page: /[slug]
   ```

Save to `research/performance-[date].md`.

## Note
Until the site has 3+ months of GSC data, this command is most useful for:
- Confirming pages are indexed (Coverage report)
- Checking sitemap submission status
- Monitoring for manual actions or crawl errors
