'use client'

import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { LayoutDashboard, QrCode, BarChart3, PlugZap, Shield, Globe, Zap, CheckCircle } from 'lucide-react'

const pillars = [
  {
    icon: LayoutDashboard,
    title: 'Menu Builder',
    description: 'Drag-drop categories, rich items with photos, tags & scheduling. Duplicate across locations in one click.',
    features: [
      'Categories & subcategories',
      'Photos, descriptions, allergens',
      'Halal/Vegetarian/Vegan tags',
      'Scheduled availability (happy hour)',
      'Bulk price updates',
      'Role-based permissions',
    ],
    link: '/platform#menu-builder',
  },
  {
    icon: QrCode,
    title: 'QR Engine',
    description: 'Branded frames with your logo & colors. Bulk PDF for stands. Dynamic URLs that never break.',
    features: [
      'Custom frames (logo, colors, shape)',
      'Bulk print-ready PDF',
      'Dynamic destination URLs',
      'Scan tracking with UTM params',
      'A/B frame testing',
      'Error correction Level M',
    ],
    link: '/platform#qr-engine',
  },
  {
    icon: BarChart3,
    title: 'Insights Dashboard',
    description: 'Real-time scan analytics. Know what sells, when peaks hit, and how diners engage.',
    features: [
      'Scans/day, unique visitors',
      'Popular items & categories',
      'Peak hours & day parts',
      'Device & OS breakdown',
      'Language preference',
      'CSV export & webhooks',
    ],
    link: '/platform#insights',
  },
  {
    icon: PlugZap,
    title: 'Integrations',
    description: 'Connect with the tools you already use. WhatsApp ordering, POS sync, API for custom builds.',
    features: [
      'WhatsApp cart → order message',
      'POS webhooks (Foodics, Indolj, POSist)',
      'REST API for menu CRUD (Enterprise)',
      'Webhook events for scans/orders',
      'Sandbox environment',
      'Rate limits & docs',
    ],
    link: '/platform#integrations',
  },
]

const enterpriseFeatures = [
  { icon: Shield, title: '99.9% Uptime SLA', description: 'Edge CDN, auto-failover, DDoS protection' },
  { icon: Globe, title: 'Pakistan Data Residency', description: 'Data hosted in-region. GDPR-ready.' },
  { icon: Zap, title: 'Sub-1s Load on 3G', description: 'Optimized for Pakistan mobile networks' },
  { icon: CheckCircle, title: 'ISO 27001 Hosting', description: 'SOC 2 compliant infrastructure' },
]

export function PlatformHighlights() {
  return (
    <section className="section-py bg-gray-50" aria-labelledby="platform-heading">
      <div className="container-brand">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="platform-heading" className="text-display-md font-bold text-dark mb-4">
            Platform Capabilities
          </h2>
          <p className="text-body-lg text-gray-600">
            Four pillars that power your digital menu. Each built for the realities of Pakistan&apos;s food industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <Card key={pillar.title} variant="elevated" padding="lg" className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 rounded-brand bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <pillar.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <CardTitle className="text-heading-sm">{pillar.title}</CardTitle>
              <CardDescription className="mt-2">{pillar.description}</CardDescription>

              <ul className="mt-6 space-y-2" role="list">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-body-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-teal/70 shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={pillar.link}
                className="mt-6 inline-flex items-center gap-1.5 font-display font-medium text-body-sm text-brand-teal hover:text-brand-teal-dark transition-colors"
              >
                Learn more
                <span className="w-4 h-4" aria-hidden="true">→</span>
              </a>
            </Card>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="font-display font-semibold text-heading-md text-dark text-center mb-8">
            Enterprise-Grade Infrastructure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-brand-lg bg-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-brand-teal" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-body-lg text-dark mb-2">{feature.title}</h4>
                <p className="text-body-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}