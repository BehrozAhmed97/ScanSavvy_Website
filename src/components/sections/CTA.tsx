'use client'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ArrowRight, Smartphone, QrCode, Shield, Zap } from 'lucide-react'

export function CTA() {
  const benefits = [
    { icon: Smartphone, label: 'Mobile-First' },
    { icon: QrCode, label: 'Branded QR' },
    { icon: Shield, label: 'Zero Commission' },
    { icon: Zap, label: 'Instant Updates' },
  ]

  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-teal" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIG9wYWNpdHk9Ii4wMyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container-brand relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-display-md lg:text-display-lg font-bold text-white mb-6">
            Ready for a Menu That Works as Hard as You Do?
          </h2>
          <p className="text-body-lg lg:text-xl text-brand-teal-100 mb-10 max-w-2xl mx-auto">
            Join 100+ venues across Pakistan that ditched printed menus. Setup in 48 hours. No commission. Local support.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10" role="list" aria-label="Key benefits">
            {benefits.map((benefit) => (
              <span key={benefit.label} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white">
                <benefit.icon className="w-5 h-5" aria-hidden="true" />
                {benefit.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="secondary" className="bg-white text-brand-teal hover:bg-gray-100" asChild>
              <a href="/contact">Book a Free Demo <ArrowRight className="w-5 h-5" aria-hidden="true" /></a>
            </Button>
            <Button size="xl" variant="ghost" className="text-white border-white/30 hover:bg-white/10" asChild>
              <a href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%27d%20like%20a%20demo" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-body-sm text-brand-teal-200">
            No credit card required · 14-day money-back guarantee · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}