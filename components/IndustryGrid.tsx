'use client'

import { useState } from 'react'
import SectionTag from './SectionTag'

interface IndustryPill {
  label: string
  description: string
}

const industries: IndustryPill[] = [
  { label: 'Plumbing & HVAC', description: '24/7 emergency dispatch, job scheduling, quote requests' },
  { label: 'Electrical', description: 'Service scheduling, emergency calls, estimate follow-ups' },
  { label: 'Roofing', description: 'Storm damage intake, estimate requests, crew dispatch' },
  { label: 'General Contractors', description: 'Project inquiries, subcontractor coordination, quote scheduling' },
  { label: 'Veterinary', description: 'Appointment booking, emergency triage, prescription refill requests' },
  { label: 'Med Spas', description: 'Treatment consultations, booking, package inquiries' },
  { label: 'Chiropractic', description: 'New patient intake, appointment booking, insurance screening' },
  { label: 'Physical Therapy', description: 'Referral intake, scheduling, insurance verification' },
  { label: 'Accounting & CPA', description: 'Client intake, tax season overflow, document request follow-ups' },
  { label: 'Financial Advisors', description: 'Prospect qualification, consultation scheduling, client follow-up' },
  { label: 'Insurance', description: 'Policy inquiries, claims intake, new client screening' },
  { label: 'Property Management', description: 'Maintenance requests, tenant inquiries, showing scheduling' },
  { label: 'Mortgage', description: 'Pre-qual intake, document collection, application follow-ups' },
  { label: 'Home Inspection', description: 'Booking, report delivery, referral capture' },
  { label: 'Salons & Spas', description: 'Appointment booking, service inquiries, cancellation handling' },
  { label: 'Auto Repair', description: 'Service scheduling, estimate requests, pickup notifications' },
  { label: 'Cleaning Services', description: 'Quote requests, scheduling, recurring booking management' },
  { label: 'Landscaping', description: 'Seasonal quote intake, service scheduling, emergency requests' },
  { label: 'Optometry', description: 'Exam scheduling, prescription inquiries, insurance verification' },
  { label: 'Mental Health', description: 'New patient intake, crisis triage, insurance screening' },
]

export default function IndustryGrid() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="all-industries" className="section-padding bg-bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionTag className="mb-4">All Industries</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
            Built for any business that lives and dies by the phone.
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            If your revenue depends on answering calls, booking appointments, or capturing leads — we can build it for you.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center">
          {industries.map((ind) => {
            const isActive = active === ind.label
            return (
              <div key={ind.label} className="relative">
                <button
                  onClick={() => setActive(isActive ? null : ind.label)}
                  className={`px-3.5 py-2 rounded-full border text-sm transition-all duration-200 ${
                    isActive
                      ? 'border-text-primary bg-text-primary text-bg-primary'
                      : 'border-border text-text-secondary hover:border-text-primary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                >
                  {ind.label}
                </button>
                {isActive && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-56">
                    <div className="bg-text-primary text-bg-primary text-xs rounded-xl px-3 py-2.5 leading-relaxed shadow-lg">
                      {ind.description}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-text-primary" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-secondary mb-4">
            Don&apos;t see your industry? We customize AnswerCare for any appointment-based or call-dependent business.
          </p>
          <a
            href="https://calendly.com/answercare-ai/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary border border-text-primary px-5 py-2.5 rounded-xl hover:bg-text-primary hover:text-bg-primary transition-all duration-200"
          >
            Tell us about your business →
          </a>
        </div>
      </div>
    </section>
  )
}
