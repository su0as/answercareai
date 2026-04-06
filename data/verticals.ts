import type { VerticalKey } from '@/lib/theme'

export interface StatCard {
  value: string
  label: string
  sublabel: string
}

export interface ImpactMetric {
  label: string
  before: string
  after: string
  direction: 'up' | 'down'
}

export interface PainPoint {
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: string
  setupOriginal: string
  calls: string
  features: string[]
  isFeatured?: boolean
  badge?: string
}

export interface AddOn {
  name: string
  price: string
  description: string
  icon: string
}

export interface ReportMetric {
  label: string
  value: string
  change: string
  positive: boolean
}

export interface DemoPrompt {
  text: string
}

export interface VerticalData {
  key: VerticalKey
  name: string
  shortName: string
  icon: string
  tagline: string
  headline: string
  subheadline: string
  accentColor: string
  accentClass: string
  accentTextClass: string
  accentBgClass: string
  accentBorderClass: string
  accentButtonClass: string
  accentButtonOutlineClass: string
  demoPhone: string
  demoPrompts: DemoPrompt[]
  stats: StatCard[]
  painPoints: PainPoint[]
  features: Feature[]
  reportMetrics: ReportMetric[]
  impactMetrics: ImpactMetric[]
  pricingTiers: PricingTier[]
  addOns: AddOn[]
  metaTitle: string
  metaDescription: string
}

const addOns: AddOn[] = [
  {
    name: 'Google Maps Domination',
    price: '$149/mo',
    description: 'GBP optimization, review campaigns, and local SEO to dominate your local search results.',
    icon: '📍',
  },
  {
    name: 'Reputation Engine',
    price: '$99/mo',
    description: 'Automated review requests, sentiment monitoring, and AI-drafted response management.',
    icon: '⭐',
  },
  {
    name: 'Reactivation Campaigns',
    price: '$129/mo',
    description: 'AI outbound calls to dormant clients, re-engaging your existing database for new revenue.',
    icon: '📞',
  },
  {
    name: 'Social Content Studio',
    price: '$179/mo',
    description: 'AI-generated posts, scheduling, and platform management across all major social channels.',
    icon: '📱',
  },
  {
    name: 'Meta & Google Ads',
    price: '$249–299/mo',
    description: 'Local ad campaigns, creative production, budget optimization, and transparent reporting.',
    icon: '📊',
  },
  {
    name: 'Brand Visual Package',
    price: '$349–449/mo',
    description: 'Photo and video asset optimization, templates, and full visual identity management.',
    icon: '🎨',
  },
]

export const verticals: Record<VerticalKey, VerticalData> = {
  dental: {
    key: 'dental',
    name: 'Dental Practices',
    shortName: 'Dental',
    icon: '🦷',
    tagline: 'For Dental Practices',
    headline: 'Every patient call. Answered, booked, and followed up.',
    subheadline:
      'AnswerCare manages your front desk calls 24/7 — appointment booking, insurance screening, emergency triage, and patient recalls. We integrate with your PMS so your staff only touches what humans need to touch.',
    accentColor: '#2E6EB5',
    accentClass: 'accent-dental',
    accentTextClass: 'text-accent-dental',
    accentBgClass: 'bg-accent-dental',
    accentBorderClass: 'border-accent-dental',
    accentButtonClass: 'bg-accent-dental hover:bg-blue-700 text-white',
    accentButtonOutlineClass: 'border-2 border-accent-dental text-accent-dental hover:bg-blue-50',
    demoPhone: '(555) 123-4567',
    demoPrompts: [
      { text: '"I\'d like to schedule a cleaning for next week"' },
      { text: '"Do you accept Delta Dental insurance?"' },
      { text: '"I\'m having a toothache — is it an emergency?"' },
      { text: '"Can I cancel my appointment for tomorrow?"' },
    ],
    stats: [
      { value: '67%', label: 'of dental practices', sublabel: 'miss calls during peak hours' },
      { value: '$2,800', label: 'average value', sublabel: 'of a new patient over their lifetime' },
      { value: '22%', label: 'average no-show rate', sublabel: 'before automated reminders' },
    ],
    painPoints: [
      {
        icon: '📵',
        title: 'Calls going to voicemail',
        description: 'Patients who can\'t reach you call the next dentist. You\'re losing new patients every day to missed calls during lunch, peak hours, and after close.',
      },
      {
        icon: '📋',
        title: 'Staff buried in admin',
        description: 'Your front desk team is fielding the same insurance questions repeatedly. Every call they handle is time not spent on patients in the chair.',
      },
      {
        icon: '📅',
        title: 'No-shows killing revenue',
        description: 'A hygienist chair sitting empty costs $200–400 per hour. Without proactive reminders and rebooking, no-shows quietly drain your revenue.',
      },
      {
        icon: '🌙',
        title: 'After-hours anxiety',
        description: 'Patients with tooth pain call after 6pm and hear voicemail. They assume you don\'t care. They find a competitor with an emergency line.',
      },
    ],
    features: [
      {
        icon: '📅',
        title: '24/7 Appointment Booking',
        description: 'Real-time scheduling directly into Dentrix or Eaglesoft. No double bookings. No call-back required.',
      },
      {
        icon: '🦷',
        title: 'Insurance Screening',
        description: 'AI collects insurance info upfront, flags out-of-network patients, and sets accurate expectations before they arrive.',
      },
      {
        icon: '🚨',
        title: 'Emergency Triage',
        description: 'After-hours dental emergencies are screened and escalated appropriately — urgent referrals vs. next-day booking.',
      },
      {
        icon: '📲',
        title: 'SMS Appointment Reminders',
        description: 'Automated confirmation and reminder texts with two-way responses. No-shows drop. Revenue stabilizes.',
      },
      {
        icon: '🔄',
        title: 'Patient Recall',
        description: 'AI reaches out to patients overdue for cleanings and hygiene appointments, filling your schedule proactively.',
      },
      {
        icon: '📊',
        title: 'PMS Integration',
        description: 'Direct integration with Dentrix, Eaglesoft, and Open Dental. Your schedule stays in one place.',
      },
    ],
    reportMetrics: [
      { label: 'Calls Handled', value: '312', change: '+18%', positive: true },
      { label: 'New Patients Booked', value: '41', change: '+31%', positive: true },
      { label: 'Revenue Attributed', value: '$28,400', change: '+22%', positive: true },
      { label: 'No-Show Rate', value: '7.1%', change: '↓ from 22%', positive: true },
      { label: 'Avg Response Time', value: '1.6s', change: 'target: <2s', positive: true },
      { label: 'Patient Satisfaction', value: '4.9/5', change: '+0.4', positive: true },
    ],
    impactMetrics: [
      { label: 'No-show rate', before: '22%', after: '8.2%', direction: 'down' },
      { label: 'After-hours capture', before: '0%', after: '100%', direction: 'up' },
      { label: 'Appointments booked', before: 'baseline', after: '+87/mo', direction: 'up' },
      { label: 'Staff time saved', before: '0 hrs', after: '12 hrs/wk', direction: 'up' },
    ],
    pricingTiers: [
      {
        name: 'Essentials',
        price: '$199/mo',
        setupOriginal: '$399',
        calls: '200 calls/mo',
        features: [
          '24/7 AI answering',
          'Appointment booking',
          'SMS reminders',
          'Basic intake',
          'Email summary reports',
          'Email support',
        ],
      },
      {
        name: 'Growth',
        price: '$349/mo',
        setupOriginal: '$399',
        calls: '500 calls/mo',
        features: [
          'Everything in Essentials',
          'Dentrix / Eaglesoft integration',
          'Insurance screening',
          'Emergency triage',
          'Weekly optimization calls',
          'Priority support',
        ],
        isFeatured: true,
        badge: 'Most Popular',
      },
      {
        name: 'Full Operations',
        price: '$549/mo',
        setupOriginal: '$399',
        calls: 'Unlimited calls',
        features: [
          'Everything in Growth',
          'Monthly Intelligence Report',
          'A/B script testing',
          'Intake automation',
          'Revenue dashboard',
          'Dedicated account manager',
        ],
      },
    ],
    addOns,
    metaTitle: 'AI Receptionist for Dental Practices | AnswerCare',
    metaDescription:
      'AnswerCare handles every dental patient call — appointment booking, insurance screening, emergency triage — 24/7. Integrates with Dentrix and Eaglesoft. Start free.',
  },

  legal: {
    key: 'legal',
    name: 'Law Firms',
    shortName: 'Legal',
    icon: '⚖️',
    tagline: 'For Law Firms',
    headline: 'Every potential client, captured. Every intake, handled.',
    subheadline:
      'AnswerCare screens and captures every inbound lead — 24/7. Practice area qualification, conflict checks, urgency escalation, and direct booking into Clio or MyCase. You focus on clients. We handle intake.',
    accentColor: '#7A5C3E',
    accentClass: 'accent-legal',
    accentTextClass: 'text-accent-legal',
    accentBgClass: 'bg-accent-legal',
    accentBorderClass: 'border-accent-legal',
    accentButtonClass: 'bg-accent-legal hover:bg-amber-900 text-white',
    accentButtonOutlineClass: 'border-2 border-accent-legal text-accent-legal hover:bg-amber-50',
    demoPhone: '(555) 123-4567',
    demoPrompts: [
      { text: '"I was in a car accident last week and need help"' },
      { text: '"I\'m going through a divorce — do you handle that?"' },
      { text: '"I need to speak with an attorney today — it\'s urgent"' },
      { text: '"What\'s your hourly rate?"' },
    ],
    stats: [
      { value: '42%', label: 'of legal calls', sublabel: 'go unanswered after business hours' },
      { value: '$8,400', label: 'average case value', sublabel: 'lost per missed qualified lead' },
      { value: '73%', label: 'of potential clients', sublabel: 'don\'t leave voicemails' },
    ],
    painPoints: [
      {
        icon: '📵',
        title: 'Missing evening calls',
        description: 'Legal emergencies don\'t happen 9–5. Potential clients calling after hours hear voicemail and call the next firm on Google. You never knew they called.',
      },
      {
        icon: '⚖️',
        title: 'Unqualified intake burden',
        description: 'Your paralegals spend hours on calls that don\'t convert. Screening practice area fit, jurisdiction, and statute of limitations before a consultation isn\'t billable — but it takes real time.',
      },
      {
        icon: '🔄',
        title: 'Inconsistent intake quality',
        description: 'Different staff collect different information. Some leads are well-documented; others arrive with barely a name. Inconsistent intake leads to missed context and poor client experience.',
      },
      {
        icon: '💰',
        title: 'Revenue lost to intake gaps',
        description: 'A qualified personal injury case worth $40K called at 8pm on a Friday. They got voicemail. They hired a competitor. This happens more than you realize.',
      },
    ],
    features: [
      {
        icon: '📋',
        title: '24/7 Intake Screening',
        description: 'Practice area qualification, jurisdiction check, and initial fact-gathering — all before you spend a minute on the call.',
      },
      {
        icon: '⚖️',
        title: 'Conflict Flagging',
        description: 'AI screens potential conflict-of-interest signals and flags for attorney review before booking consultations.',
      },
      {
        icon: '🚨',
        title: 'Urgency Escalation',
        description: 'Emergency legal situations trigger immediate escalation paths — on-call attorney contact, emergency scheduling, or referral protocols.',
      },
      {
        icon: '🌐',
        title: 'Bilingual Intake',
        description: 'English and Spanish intake available on all plans. Expand your addressable market without additional staff.',
      },
      {
        icon: '🔗',
        title: 'Clio & MyCase Integration',
        description: 'New matters created directly in your practice management software. No double-entry. No lost leads.',
      },
      {
        icon: '📊',
        title: 'Practice Area Analytics',
        description: 'Monthly breakdown of call volume, conversion rates, and revenue by practice area. Know where your marketing is working.',
      },
    ],
    reportMetrics: [
      { label: 'Calls Handled', value: '187', change: '+24%', positive: true },
      { label: 'Consultations Booked', value: '34', change: '+41%', positive: true },
      { label: 'Revenue Attributed', value: '$52,800', change: '+29%', positive: true },
      { label: 'After-Hours Captured', value: '38%', change: 'previously 0%', positive: true },
      { label: 'Avg Response Time', value: '1.9s', change: 'target: <2s', positive: true },
      { label: 'Caller Satisfaction', value: '4.7/5', change: '+0.5', positive: true },
    ],
    impactMetrics: [
      { label: 'Intake calls missed', before: '42%', after: '0%', direction: 'down' },
      { label: 'Case qualification', before: 'manual', after: 'automated', direction: 'up' },
      { label: 'Consultations booked', before: 'baseline', after: '+34/mo', direction: 'up' },
      { label: 'Billable time recovered', before: '0 hrs', after: '5 hrs/wk', direction: 'up' },
    ],
    pricingTiers: [
      {
        name: 'Solo Practice',
        price: '$249/mo',
        setupOriginal: '$499',
        calls: '150 calls/mo',
        features: [
          '24/7 intake screening',
          'Case type qualification',
          'Consultation booking',
          'Email intake summaries',
          'Basic conflict flagging',
          'Email support',
        ],
      },
      {
        name: 'Growing Firm',
        price: '$449/mo',
        setupOriginal: '$499',
        calls: '400 calls/mo',
        features: [
          'Everything in Solo',
          'Clio / MyCase integration',
          'Urgency escalation',
          'Bilingual intake (EN/ES)',
          'Weekly optimization calls',
          'Priority support',
        ],
        isFeatured: true,
        badge: 'Most Popular',
      },
      {
        name: 'Full Operations',
        price: '$699/mo',
        setupOriginal: '$499',
        calls: 'Unlimited calls',
        features: [
          'Everything in Growing Firm',
          'Monthly Intelligence Report',
          'Multi-attorney routing',
          'Practice area analytics',
          'Revenue attribution',
          'Dedicated account manager',
        ],
      },
    ],
    addOns,
    metaTitle: 'AI Receptionist for Law Firms | AnswerCare',
    metaDescription:
      'AnswerCare captures every legal lead 24/7 — intake screening, conflict checks, urgency escalation, Clio and MyCase integration. Start your free trial today.',
  },

  realestate: {
    key: 'realestate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    icon: '🏠',
    tagline: 'For Real Estate Agents & Teams',
    headline: 'Every lead, captured. Every showing, scheduled.',
    subheadline:
      'AnswerCare qualifies buyer and seller leads 24/7 — showing scheduling, listing inquiries, seller capture, and direct CRM sync. In real estate, speed-to-lead is everything. We respond in 1.8 seconds.',
    accentColor: '#B8612D',
    accentClass: 'accent-realestate',
    accentTextClass: 'text-accent-realestate',
    accentBgClass: 'bg-accent-realestate',
    accentBorderClass: 'border-accent-realestate',
    accentButtonClass: 'bg-accent-realestate hover:bg-orange-700 text-white',
    accentButtonOutlineClass: 'border-2 border-accent-realestate text-accent-realestate hover:bg-orange-50',
    demoPhone: '(555) 123-4567',
    demoPrompts: [
      { text: '"I saw your listing on Zillow — can I schedule a showing?"' },
      { text: '"I\'m thinking of selling my home. What\'s it worth?"' },
      { text: '"What\'s the best time to buy in this market?"' },
      { text: '"I\'m pre-approved for $650K — do you have anything?"' },
    ],
    stats: [
      { value: '78%', label: 'of leads', sublabel: 'go to the first agent who responds' },
      { value: '5 min', label: 'average response time', sublabel: 'increases close rate by 400%' },
      { value: '$18K', label: 'average commission', sublabel: 'lost per missed qualified lead' },
    ],
    painPoints: [
      {
        icon: '⏱️',
        title: 'Speed-to-lead is everything',
        description: 'Buyers and sellers contact multiple agents simultaneously. The first to respond wins. While you\'re showing a property, leads are going cold.',
      },
      {
        icon: '🌙',
        title: 'Weekend and evening calls',
        description: 'Real estate interest peaks on weekends when buyers are browsing listings. Missing those calls doesn\'t just lose a lead — it loses a commission.',
      },
      {
        icon: '📋',
        title: 'Unqualified leads wasting time',
        description: 'Not every inquiry is a serious buyer. Without qualification, you spend hours showing properties to tire-kickers who aren\'t pre-approved or ready to move.',
      },
      {
        icon: '🔄',
        title: 'Leads falling through the cracks',
        description: 'When you\'re busy closing a deal, new leads go to voicemail and never get followed up. Every missed follow-up is a deal you\'ll never know you lost.',
      },
    ],
    features: [
      {
        icon: '🏠',
        title: '24/7 Lead Capture',
        description: 'Every buyer and seller inquiry answered instantly — at midnight, on weekends, during showings.',
      },
      {
        icon: '✅',
        title: 'Lead Qualification',
        description: 'AI screens for pre-approval status, timeline, area, and budget. You only talk to serious prospects.',
      },
      {
        icon: '📅',
        title: 'Showing Scheduling',
        description: 'Buyers can schedule showings directly through the AI, synced to your calendar. No back-and-forth.',
      },
      {
        icon: '🌐',
        title: 'Bilingual Support',
        description: 'English and Spanish support available. Reach the full market in your area without additional staff.',
      },
      {
        icon: '🔗',
        title: 'CRM Integration',
        description: 'Direct sync with Follow Up Boss, kvCORE, and major real estate CRMs. Leads enter your pipeline automatically.',
      },
      {
        icon: '📊',
        title: 'Conversion Analytics',
        description: 'Monthly report on lead volume, qualification rate, showing-to-offer conversion, and revenue by source.',
      },
    ],
    reportMetrics: [
      { label: 'Calls Handled', value: '284', change: '+31%', positive: true },
      { label: 'Showings Scheduled', value: '63', change: '+47%', positive: true },
      { label: 'Revenue Attributed', value: '$74,500', change: '+38%', positive: true },
      { label: 'After-Hours Leads', value: '41%', change: 'previously lost', positive: true },
      { label: 'Avg Response Time', value: '1.8s', change: 'vs 23 min industry', positive: true },
      { label: 'Lead Satisfaction', value: '4.8/5', change: '+0.6', positive: true },
    ],
    impactMetrics: [
      { label: 'Leads missed', before: '42%', after: '0%', direction: 'down' },
      { label: 'Response time', before: '4 hrs', after: '1.8 sec', direction: 'down' },
      { label: 'Showings booked', before: 'baseline', after: '+28/mo', direction: 'up' },
      { label: 'Qualified leads', before: 'baseline', after: '+40% CVR', direction: 'up' },
    ],
    pricingTiers: [
      {
        name: 'Solo Agent',
        price: '$199/mo',
        setupOriginal: '$399',
        calls: '200 calls/mo',
        features: [
          '24/7 lead capture',
          'Basic qualification',
          'Showing scheduling',
          'Calendar sync',
          'Email lead summaries',
          'Email support',
        ],
      },
      {
        name: 'Top Producer',
        price: '$349/mo',
        setupOriginal: '$399',
        calls: '500 calls/mo',
        features: [
          'Everything in Solo Agent',
          'CRM integration (FUB / kvCORE)',
          'Listing inquiry handling',
          'Seller capture scripts',
          'Bilingual support (EN/ES)',
          'Weekly optimization calls',
        ],
        isFeatured: true,
        badge: 'Most Popular',
      },
      {
        name: 'Team & Brokerage',
        price: '$549/mo',
        setupOriginal: '$399',
        calls: 'Unlimited calls',
        features: [
          'Everything in Top Producer',
          'Monthly Intelligence Report',
          'Multi-agent routing',
          'Conversion analytics',
          'Revenue attribution',
          'Dedicated account manager',
        ],
      },
    ],
    addOns,
    metaTitle: 'AI Receptionist for Real Estate Agents | AnswerCare',
    metaDescription:
      'AnswerCare captures and qualifies every real estate lead 24/7 — showing scheduling, CRM integration, bilingual support. Respond in 1.8 seconds. Start free.',
  },
}
