export type CalcVertical = 'dental' | 'legal' | 'realestate' | 'home'

export interface ROIResults {
  missedCallsPerMonth: number
  revenueLostMonthly: number
  revenueLostAnnually: number
  revenueRecoveredMonthly: number
  roi: number          // X:1 multiplier
  paybackDays: number  // days to pay for itself
  planCost: number     // monthly plan cost used
}

// ─── Dental ──────────────────────────────────────────────────────────────────

export interface DentalInputs {
  callsPerDay: number      // slider 5–60, default 25
  missRate: number         // % 10–80, default 35
  lifetimeValue: number    // dropdown $3k/$5k/$8k/$12k, default $5k
  staffCost: number        // dropdown $0/$2500/$3500/$4500, default $3500
}

export function calcDental(i: DentalInputs): ROIResults {
  const PLAN = 349
  const CONV = 0.25        // 25% of missed calls would have booked
  const RECOVERY = 0.6     // 60% captured with AnswerCare
  const missed = i.callsPerDay * (i.missRate / 100) * 22
  const lostMonthly = missed * CONV * i.lifetimeValue
  const lostAnnually = lostMonthly * 12
  const recoveredMonthly = lostMonthly * RECOVERY
  return {
    missedCallsPerMonth: missed,
    revenueLostMonthly: lostMonthly,
    revenueLostAnnually: lostAnnually,
    revenueRecoveredMonthly: recoveredMonthly,
    roi: recoveredMonthly / PLAN,
    paybackDays: PLAN / (recoveredMonthly / 30),
    planCost: PLAN,
  }
}

// ─── Legal ───────────────────────────────────────────────────────────────────

export interface LegalInputs {
  callsPerDay: number      // slider 3–40, default 12
  voicemailRate: number    // % 15–80, default 42
  caseValue: number        // dropdown $2k/$5k/$10k/$25k/$50k, default $10k
  billingRate: number      // dropdown $150/$250/$350/$500, default $300
}

export function calcLegal(i: LegalInputs): ROIResults {
  const PLAN = 449
  const CONV = 0.15
  const RECOVERY = 0.6
  const missed = i.callsPerDay * (i.voicemailRate / 100) * 22
  const lostMonthly = missed * CONV * i.caseValue
  const lostAnnually = lostMonthly * 12
  const recoveredMonthly = lostMonthly * RECOVERY
  return {
    missedCallsPerMonth: missed,
    revenueLostMonthly: lostMonthly,
    revenueLostAnnually: lostAnnually,
    revenueRecoveredMonthly: recoveredMonthly,
    roi: recoveredMonthly / PLAN,
    paybackDays: PLAN / (recoveredMonthly / 30),
    planCost: PLAN,
  }
}

// ─── Real Estate ─────────────────────────────────────────────────────────────

export interface RealEstateInputs {
  callsPerWeek: number     // slider 5–50, default 20
  missRate: number         // % 20–70, default 42
  commission: number       // dropdown $5k/$8k/$12k/$20k, default $10k
  conversionDenom: number  // 1-in-X: 5/8/10/15, default 8
}

export function calcRealEstate(i: RealEstateInputs): ROIResults {
  const PLAN = 349
  const RECOVERY = 0.6
  const missed = i.callsPerWeek * (i.missRate / 100) * 4.33
  const conv = 1 / i.conversionDenom
  const lostMonthly = missed * conv * i.commission
  const lostAnnually = lostMonthly * 12
  const recoveredMonthly = lostMonthly * RECOVERY
  return {
    missedCallsPerMonth: missed,
    revenueLostMonthly: lostMonthly,
    revenueLostAnnually: lostAnnually,
    revenueRecoveredMonthly: recoveredMonthly,
    roi: recoveredMonthly / PLAN,
    paybackDays: PLAN / (recoveredMonthly / 30),
    planCost: PLAN,
  }
}

// ─── Home (generic) ──────────────────────────────────────────────────────────

export interface HomeInputs {
  callsPerDay: number      // slider 5–50, default 15
  missRate: number         // % 10–80, default 38
  customerValue: number    // input, default 500
}

export function calcHome(i: HomeInputs): ROIResults {
  const PLAN = 349
  const CONV = 0.20
  const RECOVERY = 0.6
  const missed = i.callsPerDay * (i.missRate / 100) * 22
  const lostMonthly = missed * CONV * i.customerValue
  const lostAnnually = lostMonthly * 12
  const recoveredMonthly = lostMonthly * RECOVERY
  return {
    missedCallsPerMonth: missed,
    revenueLostMonthly: lostMonthly,
    revenueLostAnnually: lostAnnually,
    revenueRecoveredMonthly: recoveredMonthly,
    roi: recoveredMonthly / PLAN,
    paybackDays: PLAN / (recoveredMonthly / 30),
    planCost: PLAN,
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function fmt(n: number, prefix = '$'): string {
  if (n >= 1_000_000) return `${prefix}${(n / 1_000_000).toFixed(1)}M`
  if (n >= 10_000)    return `${prefix}${Math.round(n / 1_000)}k`
  if (n >= 1_000)     return `${prefix}${(n / 1_000).toFixed(1)}k`
  return `${prefix}${Math.round(n).toLocaleString()}`
}
