// ─── Trade Vertical SEO Data ────────────────────────────────────────────────
// Each entry powers a full niche SEO landing page at /<slug>
// Genuine trade-specific content — not a template fill-in

export interface TradeData {
  slug: string
  trade: string            // "plumbers"
  tradeSingular: string    // "plumber"
  tradeAdj: string         // "plumbing"
  headline: string
  subheadline: string
  seoTitle: string
  seoDescription: string
  ogImage?: string
  accentColor: string
  heroEyebrow: string

  // Numbers that appear in the hero/story
  avgTicket: string        // "$385"
  missedCallsPerDay: string
  emergencyPct: string     // "67%"
  voicemailHangupPct: string // "85%"

  // Story scene — the "2:43 PM" moment specific to this trade
  storyTime: string        // "11:22 AM"
  storyScenario: string    // "You're replacing a water heater..."
  storyCallerSituation: string
  storyLostJobValue: string

  // Pain points (3)
  painPoints: {
    title: string
    body: string
    stat?: string
  }[]

  // Common call types
  callTypes: {
    type: string
    urgency: 'emergency' | 'urgent' | 'routine'
    pct: string
    ticket: string
  }[]

  // Trade-specific FAQ (5-6 questions)
  faq: {
    q: string
    a: string
  }[]

  // Social proof
  testimonial: {
    quote: string
    name: string
    biz: string
    city: string
    stat: string
    statLabel: string
    avatarColor: string
  }

  // Primary + secondary keywords (for meta/content hints)
  primaryKeyword: string
  secondaryKeywords: string[]
  longTailKeywords: string[]

  // Internal link suggestions
  relatedTrades: string[]   // slugs
}

// ─────────────────────────────────────────────────────────────────────────────

export const tradesData: Record<string, TradeData> = {

  plumbers: {
    slug: 'plumbers',
    trade: 'plumbers',
    tradeSingular: 'plumber',
    tradeAdj: 'plumbing',
    headline: 'AI Phone Answering for Plumbers',
    subheadline: 'Answer every call in under 2 seconds while you\'re under a sink, on a job site, or driving between calls — and never lose a booked job to voicemail again.',
    seoTitle: 'AI Answering Service for Plumbers — Never Miss an Emergency Call',
    seoDescription: 'AnswerCare answers every plumbing call 24/7 in under 2 seconds, books the job, and texts you the details. $199/mo. No per-call fees. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For solo plumbers & plumbing contractors · 24/7/365',

    avgTicket: '$385',
    missedCallsPerDay: '6–10',
    emergencyPct: '67%',
    voicemailHangupPct: '85%',

    storyTime: '11:22 AM',
    storyScenario: 'You\'re replacing a corroded water heater in a crawl space.',
    storyCallerSituation: 'A homeowner calls with a burst pipe — water is spraying under their kitchen sink. It\'s urgent, they need someone within the hour.',
    storyLostJobValue: '$480',

    painPoints: [
      {
        title: 'Every missed call is an emergency someone else handles',
        body: 'Plumbing emergencies don\'t schedule themselves. When a pipe bursts at 2 PM on a Tuesday, the homeowner calls the first three plumbers on Google and hires whoever picks up. If that\'s not you, it\'s someone else.',
        stat: '92% of emergency plumbing callers hire the first person who answers',
      },
      {
        title: 'You\'re on-site all day — physically unable to answer',
        body: 'Under a sink, in an attic, dealing with a hot-water line — you can\'t stop mid-job to answer a new call. But every time your phone goes to voicemail, you\'re handing that job to a competitor.',
        stat: 'Plumbers miss an average of 6–10 inbound calls per workday',
      },
      {
        title: 'Answering services take messages. AnswerCare books jobs.',
        body: 'Traditional answering services cost $150–300/mo and leave a note that you\'ll call back. By then, the customer has already booked someone else. AnswerCare qualifies, schedules, and confirms the booking in real time.',
        stat: 'Jobs booked on first contact close at 3× the rate of callbacks',
      },
    ],

    callTypes: [
      { type: 'Burst pipe / emergency leak', urgency: 'emergency', pct: '28%', ticket: '$350–650' },
      { type: 'Clogged drain / sewer backup', urgency: 'urgent', pct: '22%', ticket: '$180–320' },
      { type: 'Water heater replacement', urgency: 'urgent', pct: '18%', ticket: '$900–1,800' },
      { type: 'Toilet / fixture repair', urgency: 'routine', pct: '15%', ticket: '$120–280' },
      { type: 'Pricing inquiry / estimate', urgency: 'routine', pct: '17%', ticket: 'varies' },
    ],

    faq: [
      {
        q: 'What happens if a caller reports a gas smell or major flooding?',
        a: 'AnswerCare can be configured to immediately escalate life-safety calls — it advises the caller to call 911 first, then texts you a priority alert within 10 seconds. For flooding emergencies, it captures address and situation and rings your cell directly.',
      },
      {
        q: 'Can it give callers a rough price for common plumbing jobs?',
        a: 'Yes. During setup, we build a rate card for your common service types — drain clearing, water heater installs, leak repairs. The agent gives callers a "ballpark from $X" range, then collects the details needed to give you an accurate quote. No price promises beyond your rate card.',
      },
      {
        q: 'I cover multiple zip codes. Can it screen for service area?',
        a: 'Absolutely. You give us your service area during setup — by zip code, city, or radius from your shop. Calls from outside that area are politely declined or redirected. Callers inside the area go straight to booking.',
      },
      {
        q: 'Does it handle after-hours emergency calls differently?',
        a: 'Yes. You set after-hours rules: emergency calls can still book (at your after-hours rate), while non-urgent calls get scheduled for the next business day. The agent knows the difference based on the caller\'s description.',
      },
      {
        q: 'What if a caller wants to speak to a real person?',
        a: 'If a caller explicitly asks to speak with you, AnswerCare takes their callback info, tells them you\'re on a job, and gives them a realistic call-back window based on your schedule. You get a text with the transcript within 60 seconds.',
      },
      {
        q: 'How fast can I get set up?',
        a: 'Most plumbers are live the same day. Setup is a 15-minute call where we learn your service area, common jobs, rates, and calendar. We write your custom call script, you approve it, and we forward your calls. Typical go-live: same day or next morning.',
      },
    ],

    testimonial: {
      quote: 'First week, AnswerCare booked four jobs I would have missed. Paid for itself before the first $199 bill hit.',
      name: 'Marcus W.',
      biz: 'McNeil Plumbing',
      city: 'Boise, ID',
      stat: '+$3,200',
      statLabel: 'first-week revenue',
      avatarColor: '#5A6F8E',
    },

    primaryKeyword: 'ai answering service for plumbers',
    secondaryKeywords: [
      'plumber answering service',
      'phone answering for plumbers',
      'plumbing company answering service',
      'ai receptionist for plumbers',
      'missed calls plumber',
    ],
    longTailKeywords: [
      'best answering service for solo plumber',
      'how to answer more calls as a plumber',
      'plumbing answering service 24/7',
      'ai phone agent for plumbing business',
      'never miss a plumbing call',
    ],
    relatedTrades: ['hvac', 'electricians', 'locksmiths'],
  },

  // ─────────────────────────────────────────────────────────────────────────

  hvac: {
    slug: 'hvac',
    trade: 'hvac contractors',
    tradeSingular: 'HVAC contractor',
    tradeAdj: 'HVAC',
    headline: 'AI Phone Answering for HVAC Contractors',
    subheadline: 'Your AC-down calls don\'t wait until you\'re back in the truck. AnswerCare answers, qualifies, and books while you\'re finishing the job.',
    seoTitle: 'AI Answering Service for HVAC Contractors — 24/7 Call Coverage',
    seoDescription: 'AnswerCare answers every HVAC call in under 2 seconds, handles emergency AC/heat calls, books service appointments, and texts you the details. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For solo HVAC techs & small HVAC companies · 24/7/365',

    avgTicket: '$420',
    missedCallsPerDay: '8–14',
    emergencyPct: '71%',
    voicemailHangupPct: '83%',

    storyTime: '2:15 PM',
    storyScenario: 'You\'re running a refrigerant recharge on a commercial rooftop unit.',
    storyCallerSituation: 'A homeowner calls — their AC stopped working with 95°F heat outside and a 2-year-old inside. They need someone today.',
    storyLostJobValue: '$540',

    painPoints: [
      {
        title: 'Peak season = call volume you can\'t physically handle alone',
        body: 'July in Texas or January in Minnesota, your phone rings non-stop. You\'re on one job while three people are calling for the same-day service you can\'t schedule because you\'re too busy to answer.',
        stat: 'HVAC call volume spikes 340% in peak months vs. shoulder season',
      },
      {
        title: 'A family without AC or heat is not waiting for a callback',
        body: 'Temperature emergencies are urgent. When someone\'s heat goes out at 11 PM, they\'re calling five contractors simultaneously and hiring whoever answers first. If you miss it, that $650 repair goes to someone else.',
        stat: '78% of HVAC emergency callers book within the first conversation',
      },
      {
        title: 'Seasonal tune-up scheduling requires a full-time scheduler',
        body: 'Spring and fall, you need to fill your maintenance schedule for 60–100 customers. Managing inbound calls for that while doing service work is impossible alone — and hiring a scheduler for $18/hr adds $3,400/mo in overhead.',
        stat: 'Maintenance agreements = 3× higher customer lifetime value',
      },
    ],

    callTypes: [
      { type: 'AC not cooling (emergency)', urgency: 'emergency', pct: '31%', ticket: '$250–600' },
      { type: 'No heat / heating failure', urgency: 'emergency', pct: '24%', ticket: '$280–700' },
      { type: 'System replacement estimate', urgency: 'urgent', pct: '19%', ticket: '$3,500–10,000' },
      { type: 'Annual tune-up / maintenance', urgency: 'routine', pct: '18%', ticket: '$80–180' },
      { type: 'Air quality / IAQ questions', urgency: 'routine', pct: '8%', ticket: '$200–600' },
    ],

    faq: [
      {
        q: 'Can it handle the "my AC stopped working and it\'s 95 degrees" urgency?',
        a: 'Yes — that\'s exactly what it\'s built for. AnswerCare identifies emergency framing ("not cooling," "no heat," temperature extremes) and triggers an expedited flow: captures address, confirms same-day availability from your calendar, books the slot, and sends you a priority text. You get the call details before you finish the job you\'re on.',
      },
      {
        q: 'Can it schedule seasonal tune-ups and maintenance renewals?',
        a: 'Absolutely. We configure AnswerCare with your maintenance pricing and available slots. It handles inbound tune-up requests, renewal calls from existing customers, and even upsell conversations for maintenance agreements — all automatically booked into your calendar.',
      },
      {
        q: 'Does it understand HVAC terminology? Will callers get confused?',
        a: 'We write a custom script during your setup that uses your terminology and covers your service types — heat pumps, mini-splits, package units, commercial rooftop, etc. The agent speaks your language. Callers don\'t notice the difference.',
      },
      {
        q: 'What about commercial HVAC vs. residential — can it differentiate?',
        a: 'Yes. During setup, you tell us which job types you take, your commercial vs. residential service areas, and any minimum job size thresholds. Calls that don\'t fit your criteria get politely declined rather than booked as jobs you\'ll have to cancel later.',
      },
      {
        q: 'Can I integrate it with ServiceTitan or Jobber?',
        a: 'We integrate with Google Calendar, Housecall Pro, Jobber, ServiceM8, and any iCal-compatible tool. ServiceTitan integration is via calendar export. New bookings appear in your dispatch board automatically.',
      },
      {
        q: 'What happens during the shoulder season when call volume drops?',
        a: 'You still pay $199/mo — the value shifts from emergency triage to capturing the fewer calls that come in (which are often high-value replacement leads). Many HVAC contractors use the shoulder season to test AnswerCare at lower volume before they need it for summer.',
      },
    ],

    testimonial: {
      quote: 'Peak season used to mean 30% of calls going to voicemail. Last summer, zero went unanswered. I picked up 11 additional jobs in July alone.',
      name: 'Devon R.',
      biz: 'Apex HVAC',
      city: 'Reno, NV',
      stat: '11 jobs',
      statLabel: 'extra bookings in first July',
      avatarColor: '#7A5B43',
    },

    primaryKeyword: 'ai answering service for hvac contractors',
    secondaryKeywords: [
      'hvac answering service',
      'hvac call answering',
      'phone answering for hvac',
      'hvac contractor receptionist',
      'ai receptionist for hvac',
    ],
    longTailKeywords: [
      'best answering service for hvac company',
      '24 hour hvac answering service',
      'hvac emergency call answering',
      'how to handle hvac calls while on a job',
      'ai phone agent for hvac business',
    ],
    relatedTrades: ['plumbers', 'electricians', 'roofers'],
  },

  // ─────────────────────────────────────────────────────────────────────────

  electricians: {
    slug: 'electricians',
    trade: 'electricians',
    tradeSingular: 'electrician',
    tradeAdj: 'electrical',
    headline: 'AI Phone Answering for Electricians',
    subheadline: 'You can\'t answer a call while your hands are in a panel. AnswerCare handles it — books the job, texts you the details, and the customer never hits voicemail.',
    seoTitle: 'AI Answering Service for Electricians — Answer Every Call, Book Every Job',
    seoDescription: 'AnswerCare answers every electrical call 24/7 in under 2 seconds. Handles emergencies, books service calls, and integrates with your calendar. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For solo electricians & electrical contractors · 24/7/365',

    avgTicket: '$320',
    missedCallsPerDay: '5–9',
    emergencyPct: '52%',
    voicemailHangupPct: '87%',

    storyTime: '3:47 PM',
    storyScenario: 'You\'re working inside a 200-amp service panel on a whole-home rewire.',
    storyCallerSituation: 'A homeowner calls — half their house has no power and they smell something burning near the breaker box.',
    storyLostJobValue: '$525',

    painPoints: [
      {
        title: 'Live electrical work means you genuinely cannot stop to answer',
        body: 'Working on a service panel, pulling wire through conduit, or installing a subpanel — stopping mid-job isn\'t just inconvenient, it\'s dangerous. Your calls go unanswered, and callers don\'t wait.',
        stat: '87% of electrical callers who reach voicemail don\'t leave a message — they call the next listing',
      },
      {
        title: 'Electrical emergencies are the highest-urgency calls in any trade',
        body: 'Burning smells, flickering lights, sparking outlets — these callers are scared and need someone immediately. The electrician who answers first gets the job. Every call you miss to a competitor is a safety situation someone else is handling.',
        stat: 'Electrical emergency calls convert at 94% when answered on the first call',
      },
      {
        title: 'Permit scheduling and inspection coordination require a second brain',
        body: 'Panel upgrades, EV charger installs, new construction rough-ins — the back-and-forth coordination is a part-time job. AnswerCare handles the scheduling, confirmation, and follow-up so you can focus on the work.',
        stat: 'Electricians who answer same-day close 2.8× more estimates than those who call back next day',
      },
    ],

    callTypes: [
      { type: 'Power outage / no power to outlets', urgency: 'emergency', pct: '26%', ticket: '$180–480' },
      { type: 'Burning smell / sparking (safety)', urgency: 'emergency', pct: '18%', ticket: '$300–800' },
      { type: 'Panel upgrade / service upgrade', urgency: 'urgent', pct: '22%', ticket: '$1,500–4,500' },
      { type: 'EV charger installation', urgency: 'routine', pct: '16%', ticket: '$600–1,200' },
      { type: 'General repair / outlet / switch', urgency: 'routine', pct: '18%', ticket: '$120–320' },
    ],

    faq: [
      {
        q: 'What if a caller describes a potential fire hazard or safety emergency?',
        a: 'AnswerCare is configured to recognize safety language — "burning smell," "sparks," "smoke from panel." When detected, it immediately advises the caller to cut power at the main breaker if safe to do so, and texts you a priority alert. For genuine emergencies, it can be set to ring your personal phone directly, bypassing the normal queue.',
      },
      {
        q: 'Can it handle permit and inspection scheduling?',
        a: 'Yes. We configure AnswerCare with your permit submission workflow and inspection scheduling process. It captures the job address, permit number if applicable, and requested inspection window, then books it into your calendar. No more back-and-forth voicemails with inspectors or customers.',
      },
      {
        q: 'I do both residential and commercial work. Can it handle both call types?',
        a: 'Absolutely. During setup, you define your commercial and residential service types separately, including any minimum job sizes or geographic restrictions. The agent routes calls to the appropriate flow based on what the caller describes.',
      },
      {
        q: 'Can it give estimates for common jobs like outlet installs or panel upgrades?',
        a: 'We build a rate card for your common service types during setup. The agent provides "starting from" ranges, explains what factors affect pricing, and books an estimate appointment when the job scope requires a site visit. No guessing without your approval.',
      },
      {
        q: 'What about calls from existing customers vs. new leads?',
        a: 'AnswerCare handles both. Existing customers calling for follow-up work or to check on permit status get routed through a returning-customer flow. New leads get a qualification and booking flow. You get a text for every call with full transcript.',
      },
      {
        q: 'How does it handle after-hours calls for non-emergencies?',
        a: 'You set after-hours rules during setup. Non-emergency calls (new installs, estimate requests) get scheduled for next-business-day callbacks. Emergency calls (safety situations) can still be booked at your after-hours rate. The agent knows the difference based on the caller\'s language.',
      },
    ],

    testimonial: {
      quote: 'I was dropping 4-5 calls a day while working in panels. AnswerCare answered all of them. Three became recurring commercial clients.',
      name: 'James T.',
      biz: 'Thornton Electric',
      city: 'Columbus, OH',
      stat: '+$5,400',
      statLabel: 'month-one revenue captured',
      avatarColor: '#4A5E3A',
    },

    primaryKeyword: 'ai answering service for electricians',
    secondaryKeywords: [
      'electrician answering service',
      'phone answering for electricians',
      'electrical contractor answering service',
      'ai receptionist for electricians',
      '24 hour electrician answering service',
    ],
    longTailKeywords: [
      'best answering service for solo electrician',
      'how to handle calls while doing electrical work',
      'electrician missed call solution',
      'ai phone agent for electrical business',
      'answering service for electrical contractor',
    ],
    relatedTrades: ['plumbers', 'hvac', 'locksmiths'],
  },

  // ─────────────────────────────────────────────────────────────────────────

  locksmiths: {
    slug: 'locksmiths',
    trade: 'locksmiths',
    tradeSingular: 'locksmith',
    tradeAdj: 'locksmith',
    headline: 'AI Phone Answering for Locksmiths',
    subheadline: 'Lockout calls don\'t wait. AnswerCare answers in 2 seconds, collects the address, confirms availability, and books the job before the caller tries the next Google listing.',
    seoTitle: 'AI Answering Service for Locksmiths — Answer Every Lockout Call Instantly',
    seoDescription: 'Locksmiths lose more jobs to slow phone pickup than any other trade. AnswerCare answers in under 2 seconds, books the job, and texts you the address. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For mobile locksmiths & locksmith shops · 24/7/365',

    avgTicket: '$145',
    missedCallsPerDay: '8–16',
    emergencyPct: '91%',
    voicemailHangupPct: '94%',

    storyTime: '9:47 PM',
    storyScenario: 'You\'re finishing a car lockout in a parking garage — keys are out, customer is paying.',
    storyCallerSituation: 'Someone locked their keys in their car at a gas station 2 miles away. They\'ve already called three locksmiths and you\'re the fourth.',
    storyLostJobValue: '$145',

    painPoints: [
      {
        title: 'Locksmiths have the highest voicemail abandon rate of any trade',
        body: 'A stranded person doesn\'t wait. Studies show 94% of locksmith callers who reach voicemail immediately call the next locksmith on Google. Your phone rings once while you\'re with another customer — and that $150 job is gone.',
        stat: '94% of lockout callers who reach voicemail call a competitor immediately',
      },
      {
        title: 'You\'re mobile all day — every job means missed calls during service',
        body: 'You can\'t talk to a new caller while extracting a broken key. Every lockout you\'re working on is a window where you\'re unreachable and calls are going unanswered. At 8–16 calls per day, that\'s thousands of dollars in missed work monthly.',
        stat: 'Average locksmith misses 11 calls per workday while on jobs',
      },
      {
        title: 'Speed-to-answer is the only competitive advantage that matters',
        body: 'Locksmiths compete on one thing: who picks up fastest. Your skill, your prices, your reviews — none of it matters if you don\'t answer. AnswerCare answers in under 2 seconds, 24/7, while you\'re working.',
        stat: 'Locksmiths who answer within 5 seconds win 73% more jobs than those who answer in 30+ seconds',
      },
    ],

    callTypes: [
      { type: 'Car lockout', urgency: 'emergency', pct: '42%', ticket: '$75–165' },
      { type: 'Home / residential lockout', urgency: 'emergency', pct: '28%', ticket: '$95–185' },
      { type: 'Lock replacement / rekey', urgency: 'urgent', pct: '14%', ticket: '$120–280' },
      { type: 'Commercial lock / access control', urgency: 'urgent', pct: '10%', ticket: '$200–600' },
      { type: 'Safe opening / combination change', urgency: 'routine', pct: '6%', ticket: '$150–350' },
    ],

    faq: [
      {
        q: 'Lockout callers are impatient — does the AI really sound fast enough?',
        a: 'Yes. AnswerCare picks up in under 2 seconds with no hold music, no menu. The first thing callers hear is a warm, immediate greeting. We built this specifically for trades where caller patience is measured in seconds, not minutes. Test it yourself: call (754) 227-6342.',
      },
      {
        q: 'Can it handle the geographic dispatch — only booking jobs I can actually reach?',
        a: 'Absolutely. We configure your service area by zip code or radius from your current location (or your shop base). Calls from outside your area are declined politely. Calls inside get booked. If you cover multiple zones with different ETAs, we can configure that too.',
      },
      {
        q: 'Can it give ETAs when booking?',
        a: 'Yes. You set your general ETA ranges during setup (e.g., "30–45 minutes for cars, 45–60 minutes for residential"). The agent quotes those ranges honestly and books the slot. If you\'re on a long job and unavailable for 90 minutes, you can update your availability and the agent reflects it.',
      },
      {
        q: 'What about late-night and weekend calls? Those are my highest-ticket jobs.',
        a: 'After-hours and weekend coverage is where AnswerCare pays for itself fastest for locksmiths. You can set after-hours rates in your script — the agent quotes the after-hours rate, gets agreement, and books the job. No calls go to voicemail at 11 PM.',
      },
      {
        q: 'What if a caller sounds dangerous or threatening?',
        a: 'AnswerCare is configured to disengage from hostile calls — it doesn\'t argue or escalate, it collects the minimum information and ends the call professionally. You get a transcript. Calls with potential safety concerns (e.g., someone claiming to be locked out of a home that\'s not theirs) can be escalated to you directly for verification.',
      },
      {
        q: 'I run both a dispatch operation and a physical shop. Can it handle both flows?',
        a: 'Yes. We configure separate call flows for mobile dispatch (lockout booking) and in-shop services (rekeying appointments, safe opening scheduling). Each flow has different qualification steps and calendar slots. One number, two flows, all calls answered.',
      },
    ],

    testimonial: {
      quote: 'I was losing 8-10 calls a day while on jobs. AnswerCare answered all of them. My revenue went up $2,800 the first month and I didn\'t work any harder.',
      name: 'Hank S.',
      biz: "Hank's Locksmith",
      city: 'Sacramento, CA',
      stat: '+$2,800',
      statLabel: 'first-month revenue increase',
      avatarColor: '#3F5D4D',
    },

    primaryKeyword: 'ai answering service for locksmiths',
    secondaryKeywords: [
      'locksmith answering service',
      'phone answering for locksmiths',
      'locksmith call answering',
      '24 hour locksmith answering service',
      'ai receptionist for locksmiths',
    ],
    longTailKeywords: [
      'best answering service for mobile locksmith',
      'how to answer more lockout calls',
      'locksmith missed call solution',
      'ai phone agent for locksmith business',
      'never miss a lockout call',
    ],
    relatedTrades: ['plumbers', 'electricians', 'pest-control'],
  },

  // ─────────────────────────────────────────────────────────────────────────

  roofers: {
    slug: 'roofers',
    trade: 'roofing contractors',
    tradeSingular: 'roofer',
    tradeAdj: 'roofing',
    headline: 'AI Phone Answering for Roofing Contractors',
    subheadline: 'Storm season floods your phone while you\'re on a roof. AnswerCare handles every call — books the estimate, captures the lead, and texts you the address before you come down.',
    seoTitle: 'AI Answering Service for Roofing Contractors — Never Miss a Storm Lead',
    seoDescription: 'AnswerCare answers every roofing call 24/7, qualifies storm leads, books estimates, and captures insurance job info — all while you\'re on a roof. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For solo roofers & roofing contractors · 24/7/365',

    avgTicket: '$4,200',
    missedCallsPerDay: '5–12',
    emergencyPct: '58%',
    voicemailHangupPct: '81%',

    storyTime: '4:30 PM',
    storyScenario: 'You\'re 30 feet up, finishing a TPO membrane installation.',
    storyCallerSituation: 'A homeowner calls — their ceiling is dripping after last night\'s storm and they\'re in a panic. They want someone to look at it today.',
    storyLostJobValue: '$8,500',

    painPoints: [
      {
        title: 'Storm season creates a call surge that\'s impossible to handle alone',
        body: 'After a hail event, your phone rings 40 times in 24 hours. You\'re on roofs all day, can\'t answer, and those leads go to the three other roofing companies who answer. One storm week of missed calls can mean $50,000+ in lost estimate appointments.',
        stat: 'Roofing call volume increases 600-900% in the 48 hours after a major storm',
      },
      {
        title: 'High-ticket roofing jobs go to whoever shows up first with an estimate',
        body: 'A homeowner with a damaged roof gets 4 estimates. They typically choose the first company that called back, all else being equal. If you answered the call, booked the estimate slot, and got there — you have the inside track on a $5,000–20,000 job.',
        stat: '68% of homeowners choose the first roofing contractor to provide an estimate',
      },
      {
        title: 'Insurance jobs require information gathering that an AI does better than voicemail',
        body: 'Insurance claims need: date of damage, insurance company, claim number, adjuster name. Most homeowners don\'t know to leave this on voicemail. AnswerCare walks them through it, captures everything, and gives you a ready-to-go estimate package.',
        stat: 'Insurance roofing jobs average $12,000+ vs. $2,400 for retail repairs',
      },
    ],

    callTypes: [
      { type: 'Storm damage / emergency leak', urgency: 'emergency', pct: '34%', ticket: '$1,500–18,000' },
      { type: 'Insurance claim / adjuster coordination', urgency: 'urgent', pct: '24%', ticket: '$8,000–25,000' },
      { type: 'Roof replacement estimate', urgency: 'urgent', pct: '22%', ticket: '$5,000–18,000' },
      { type: 'Repair / patch / maintenance', urgency: 'routine', pct: '12%', ticket: '$300–1,500' },
      { type: 'New construction / commercial bid', urgency: 'routine', pct: '8%', ticket: '$10,000+' },
    ],

    faq: [
      {
        q: 'Can it handle insurance claim calls and capture adjuster information?',
        a: 'Yes — this is a high-value configuration we set up for roofing contractors. The agent walks insurance callers through: date of loss, insurance company, claim number, adjuster name, and contact info. You get a complete intake form in your text message before you\'ve finished the job you\'re on.',
      },
      {
        q: 'What happens during a storm event when calls are coming in all at once?',
        a: 'AnswerCare handles concurrent calls with no queue. Every caller gets answered immediately — there\'s no "please hold." During surge events, you can activate a "storm mode" flow that prioritizes lead capture and estimate scheduling over detailed qualification.',
      },
      {
        q: 'Can it qualify leads? I don\'t want to drive an hour for a $200 repair.',
        a: 'Absolutely. During setup, you define your minimum job size, geographic limits, and job types you don\'t take. The agent qualifies callers on all of these before booking. Callers who don\'t meet criteria are politely declined or referred out.',
      },
      {
        q: 'Can it handle commercial roofing leads differently from residential?',
        a: 'Yes. Commercial calls get a different qualification flow — square footage, building type, timeline, and whether it\'s a bid or immediate repair. Commercial leads get flagged for you to follow up personally vs. residential leads which go straight to your estimate calendar.',
      },
      {
        q: 'What about winter when call volume drops? Is it worth it off-season?',
        a: 'Many roofing contractors keep AnswerCare year-round because: (1) the leads that do come in off-season are often high-intent (roof failing, planning ahead), and (2) being ready when spring hits — rather than scrambling to set it up after the first storm — is worth $199/mo.',
      },
      {
        q: 'Do I have to give out a new phone number?',
        a: 'No. You set conditional call forwarding on your existing number — your number stays yours. AnswerCare answers when you don\'t pick up within 1-4 rings (you choose). If you answer, it never triggers. Cancel and forwarding is off in 5 minutes.',
      },
    ],

    testimonial: {
      quote: 'Last hail storm I got 34 calls in 24 hours while I was on roofs. AnswerCare booked 22 estimate appointments. Old me would have answered 4.',
      name: 'Carlos M.',
      biz: 'Peak Roofing Co.',
      city: 'Denver, CO',
      stat: '22 estimates',
      statLabel: 'booked from 34 storm calls',
      avatarColor: '#7A4B3A',
    },

    primaryKeyword: 'ai answering service for roofing contractors',
    secondaryKeywords: [
      'roofing answering service',
      'phone answering for roofers',
      'roofing contractor call answering',
      'storm lead answering service',
      'ai receptionist for roofers',
    ],
    longTailKeywords: [
      'best answering service for roofing company',
      'how to handle storm calls as a roofer',
      'roofing company missed call solution',
      'ai phone agent for roofing business',
      'never miss a roofing lead',
    ],
    relatedTrades: ['hvac', 'plumbers', 'pest-control'],
  },

  // ─────────────────────────────────────────────────────────────────────────

  'pest-control': {
    slug: 'pest-control',
    trade: 'pest control operators',
    tradeSingular: 'pest control operator',
    tradeAdj: 'pest control',
    headline: 'AI Phone Answering for Pest Control',
    subheadline: 'Same-day service converts 3× better than next-day callbacks. AnswerCare answers every call instantly, books the treatment, and keeps your route full while you\'re in the field.',
    seoTitle: 'AI Answering Service for Pest Control — Fill Your Route Without Answering the Phone',
    seoDescription: 'AnswerCare answers every pest control call 24/7, books same-day treatments, handles seasonal surges, and texts you new job details. 14 days free.',
    accentColor: '#1F44FF',
    heroEyebrow: 'For solo pest control operators & small PCOs · 24/7/365',

    avgTicket: '$210',
    missedCallsPerDay: '6–12',
    emergencyPct: '44%',
    voicemailHangupPct: '82%',

    storyTime: '10:15 AM',
    storyScenario: 'You\'re treating a German roach infestation in a restaurant kitchen.',
    storyCallerSituation: 'A homeowner calls — they found a large wasp nest by their back door and their kid was just stung twice.',
    storyLostJobValue: '$195',

    painPoints: [
      {
        title: 'Pest infestations feel urgent to the caller — speed wins the booking',
        body: 'Someone calling about a wasp nest, a rat sighting, or bed bugs is not waiting for a callback. They\'re distressed and want someone coming today. The PCO who answers first and offers same-day service gets the job.',
        stat: 'Same-day pest control bookings convert at 3× the rate of next-day callbacks',
      },
      {
        title: 'Seasonal surges create impossible call volume for one-truck operators',
        body: 'Ant season, mosquito season, rodent season — every spring and fall your phone goes from 3 calls a day to 15. You\'re running routes, can\'t answer, and those $200 jobs are going to regional chains that have a receptionist.',
        stat: 'Pest control call volume increases 400% in peak spring/summer months',
      },
      {
        title: 'Recurring service agreements are your most valuable revenue — and they come from inbound calls',
        body: 'A quarterly pest control customer is worth $800/year with no sales effort after the first booking. Every inbound call you miss is potentially a 5-year recurring relationship you never started.',
        stat: 'Recurring pest customers have 4.2× higher lifetime value than one-time service calls',
      },
    ],

    callTypes: [
      { type: 'Emergency / stinging insects / rodents', urgency: 'emergency', pct: '29%', ticket: '$150–350' },
      { type: 'New infestation (ants, roaches, bed bugs)', urgency: 'urgent', pct: '31%', ticket: '$200–600' },
      { type: 'Recurring service enrollment', urgency: 'routine', pct: '22%', ticket: '$80–120/quarter' },
      { type: 'Termite inspection / treatment', urgency: 'urgent', pct: '12%', ticket: '$500–2,500' },
      { type: 'Commercial account inquiry', urgency: 'routine', pct: '6%', ticket: '$300+/mo' },
    ],

    faq: [
      {
        q: 'Can it handle calls about dangerous pests — wasps, yellow jackets, aggressive rodents?',
        a: 'Yes. AnswerCare identifies urgency language ("my kid just got stung," "rat in the house") and routes those calls through an expedited booking flow. Same-day slots are offered first, with the agent capturing address and access details. You get a priority text.',
      },
      {
        q: 'Can it enroll callers in recurring quarterly or monthly service plans?',
        a: 'Absolutely — this is one of the highest-value configurations for PCOs. The agent explains your recurring program, quotes the monthly/quarterly rate, gets agreement, and books the first treatment. You get a signed-up customer without ever picking up the phone.',
      },
      {
        q: 'Can it handle the seasonal scripts — mosquito treatment in spring, rodent proofing in fall?',
        a: 'Yes. We update your call script seasonally as needed. Spring script might lead with mosquito reduction and ant prevention. Fall script focuses on rodent exclusion and spider control. One quick update call with us and you\'re running the right seasonal pitch.',
      },
      {
        q: 'What about calls from existing customers checking on their next service date?',
        a: 'Existing customers calling for service status, rescheduling, or add-on services get handled through a returning-customer flow. We capture their name, address, and question, and text you immediately — or can book the reschedule directly into your calendar.',
      },
      {
        q: 'Can it handle commercial accounts and restaurant pest control calls?',
        a: 'Commercial calls get a different qualification flow — type of establishment, square footage, previous provider, inspection requirements. Commercial leads are flagged for personal follow-up rather than self-serve booking, since those accounts usually need a site visit first.',
      },
      {
        q: 'I cover a large geographic area. Can it filter by service zone?',
        a: 'Yes. We configure your service area by zip code or city. Calls from outside your zones get politely declined. You never drive an hour for a $150 job outside your route.',
      },
    ],

    testimonial: {
      quote: 'Spring surge used to be a nightmare — I was missing 8-10 calls a day from my truck. AnswerCare handles all of them. Last April was my best month ever.',
      name: 'Ray P.',
      biz: 'PestShield Pros',
      city: 'Phoenix, AZ',
      stat: '+$4,100',
      statLabel: 'revenue in first spring season',
      avatarColor: '#5C4A7A',
    },

    primaryKeyword: 'ai answering service for pest control',
    secondaryKeywords: [
      'pest control answering service',
      'phone answering for pest control',
      'pest control call answering',
      'ai receptionist for pest control',
      '24 hour pest control answering service',
    ],
    longTailKeywords: [
      'best answering service for pest control company',
      'how to handle pest control calls while on route',
      'pest control missed call solution',
      'ai phone agent for pest control business',
      'never miss a pest control call',
    ],
    relatedTrades: ['plumbers', 'locksmiths', 'roofers'],
  },
}

export const tradeKeys = Object.keys(tradesData) as (keyof typeof tradesData)[]
