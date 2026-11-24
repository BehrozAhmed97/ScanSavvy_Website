'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { Search, Sparkles, Truck, Smartphone, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover & Audit',
    description: 'We hop on a 15-minute call to understand your menu, workflow, and pain points. No sales pitch — just listening.',
    icon: Search,
    details: [
      'Menu structure review',
      'Photo audit & gaps',
      'Multi-location mapping',
      'Integration needs',
    ],
  },
  {
    number: '02',
    title: 'We Build It',
    description: 'Our team designs, populates, and QAs your branded micro-portal. You review and approve. Ready in 48 hours.',
    icon: Sparkles,
    details: [
      'Branded QR frames',
      'Menu population',
      'Photo optimization',
      'Urdu/English setup',
    ],
  },
  {
    number: '03',
    title: 'Deploy & Train',
    description: 'QR stands delivered to your venue. We train your staff (5 mins). You\'re live before the lunch rush.',
    icon: Truck,
    details: [
      'Metal/acrylic stands',
      'Staff walkthrough',
      'WhatsApp support group',
      'Go-live checklist',
    ],
  },
  {
    number: '04',
    title: 'You Update Anytime',
    description: 'Change prices, add specials, toggle availability — from your phone. We maintain the infrastructure.',
    icon: Smartphone,
    details: [
      'Instant live updates',
      'Scan analytics',
      'Quarterly reviews',
      'Feature requests',
    ],
  },
]

export function HowItWorks() {
  return (
    <section className="section-py" aria-labelledby="how-heading">
      <div className="container-brand">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="how-heading" className="text-display-md font-bold text-dark mb-4">
            From Print to Digital in 4 Steps
          </h2>
          <p className="text-body-lg text-gray-600">
            We handle the heavy lifting. You get a menu that works as hard as your kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.number} variant="interactive" padding="lg" className="relative animate-slide-up group" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-brand-teal text-white font-display font-bold text-heading-sm flex items-center justify-center">
                {step.number}
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1 right-0 w-full h-0.5 bg-gradient-to-r from-brand-teal/20 to-transparent" />
              )}

              <div className="pt-8">
                <div className="w-12 h-12 rounded-brand bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <step.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" aria-hidden="true" />
                </div>

                <CardTitle className="text-heading-md">{step.title}</CardTitle>
                <p className="mt-3 text-body text-gray-600">{step.description}</p>

                <ul className="mt-6 space-y-2" role="list">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-body-sm text-gray-600">
                      <ArrowRight className="w-4 h-4 text-brand-teal/50 group-hover:text-brand-teal transition-colors" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Connector */}
        <div className="lg:hidden mt-8 flex items-center justify-center gap-2 text-brand-teal/30">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-16 h-0.5 bg-current" />
          ))}
        </div>
      </div>
    </section>
  )
}