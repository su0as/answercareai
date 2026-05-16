# /research-topics

Generate a prioritized list of new content topics for AnswerCare AI.

## Process

1. **Read:** `context/target-keywords.md`, `context/brand-voice.md`, `context/seo-guidelines.md`

2. **Brainstorm by category:**

   ### New trade vertical pages (target: 1 per trade)
   Look for trades NOT yet covered: garage door, appliance repair, HVAC (commercial), general contractor, handyman, pool service, window/door, flooring, painting, tree service, septic/drain

   ### Blog / guide posts (target: 2,000+ words, informational intent)
   - "How much revenue are missed calls costing [trade] businesses?"
   - "Best answering service for [trade] in 2025"
   - "AI answering service vs traditional answering service: full comparison"
   - "How to never miss a call as a solo [trade]"
   - "What to do when your phone rings during a job"

   ### Comparison pages (target: competitor-specific or category)
   - Named competitors: Voios, Capta, Ruby Receptionist, AnswerConnect
   - Category comparisons: AI vs. human, 24/7 vs. business hours

   ### Local/geo pages (future, when business scales)
   - "AI answering service for plumbers in [city]"
   - Requires 50+ cities, only worthwhile at scale

3. **Score each topic:**
   - Search volume: High / Medium / Low
   - Competition: High / Medium / Low
   - Fit (how well it converts to AnswerCare customers): High / Medium / Low
   - Content effort: Easy / Medium / Hard

4. **Output prioritized topic queue:**
   ```
   QUEUE — ordered by (fit × volume / competition)
   
   1. [Topic] | URL: /[slug] | Volume: H/M/L | Competition: H/M/L | Effort: E/M/H
   2. ...
   ```

Save to `research/topic-queue-[date].md`.
