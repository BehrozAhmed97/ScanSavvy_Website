import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import {
  LayoutDashboard,
  QrCode,
  BarChart3,
  PlugZap,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Layers,
  Smartphone,
  UserCheck,
  Send,
} from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'ScanSavvy Platform — Digital Menu Infrastructure',
  'Menu Builder, QR Engine, Insights Dashboard, and Integrations. Enterprise-grade digital menu platform for Pakistan food businesses.',
  '/platform'
)

const pillars = [
  {
    id: 'menu-builder',
    icon: Layers,
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
    color: 'teal',
  },
  {
    id: 'qr-engine',
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
    color: 'teal',
  },
  {
    id: 'insights',
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
    color: 'teal',
  },
  {
    id: 'integrations',
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
    color: 'coral',
  },
]

const enterpriseFeatures = [
  { icon: Shield, title: '99.9% Uptime SLA', description: 'Edge CDN, auto-failover, DDoS protection' },
  { icon: Globe, title: 'Pakistan Data Residency', description: 'Data hosted in-region. GDPR-ready.' },
  { icon: Zap, title: 'Sub-1s Load on 3G', description: 'Optimized for Pakistan mobile networks' },
  { icon: UserCheck, title: 'ISO 27001 Hosting', description: 'SOC 2 compliant infrastructure' },
]

const howItWorks = [
  {
    icon: Smartphone,
    title: 'Scan the QR',
    description: 'Customers scan your branded QR code on their phone — no app download.',
  },
  {
    icon: Send,
    title: 'Browse Menu',
    description: 'Beautiful mobile menu with photos, tags, and Urdu/English toggle.',
  },
  {
    icon: CheckCircle,
    title: 'Update Anytime',
    description: 'Edit prices & availability from your dashboard. Changes go live instantly.',
  },
]

export default function PlatformPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Platform', url: 'https://scansavvy.pk/platform/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="platform-heading">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal/5 via-white to-white" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container-brand">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="animate-fade-in delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-brand bg-brand-teal flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-brand-teal-dark">Platform</span>
              </div>
              <h1 id="platform-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                Digital Menu Infrastructure
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                Four pillars power your digital menu. Menu Builder, QR Engine, Insights Dashboard, Integrations — built for Pakistan's food industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact">Book Platform Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">View Solutions</Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative animate-scale-in delay-300" aria-hidden="true">
              <div className="bg-white rounded-brand-xl border border-gray-200 shadow-brand-lg p-2 max-w-lg mx-auto">
                <div className="rounded-brand-lg bg-gray-100 aspect-[16/9] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center p-10">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                        <LayoutDashboard className="w-16 h-16 text-brand-teal" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg text-dark mb-2">Dashboard Preview</h3>
                      <p className="text-gray-500 mb-4">Live menu analytics, item management & QR controls</p>
                      <Button variant="secondary" size="md" asChild>
                        <Link href="/contact">Get Live Access</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Platform Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => {
                const colorStyles = {
                  teal: { iconBg: 'bg-brand-teal/10', iconColor: 'text-brand-teal', border: 'hover:border-brand-teal/50' },
                  coral: { iconBg: 'bg-brand-coral/10', iconColor: 'text-brand-coral', border: 'hover:border-brand-coral/50' },
                }
                const colors = colorStyles[pillar.color as keyof typeof colorStyles]
                return (
                  <Card key={pillar.id} variant="interactive" padding="lg" className={`relative overflow-hidden border-gray-200 ${colors.border} transition-all duration-brand group animate-slide-up`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-brand ${colors.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                        <pillar.icon className={`w-6 h-6 ${colors.iconColor}`} aria-hidden="true" />
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

                      <Link
                        href={`#${pillar.id}`}
                        className="mt-6 inline-flex items-center gap-1.5 font-display font-medium text-body-sm text-brand-teal hover:text-brand-teal-dark transition-colors"
                      >
                        Deep Dive
                        <span className="w-4 h-4" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="border-t border-gray-200 pt-12 mb-20">
            <h3 className="font-display font-semibold text-heading-md text-dark text-center mb-8">
              Enterprise-Grade Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-14 h-14 rounded-brand-lg bg-brand-teal/10 flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-7 h-7 text-brand-teal" aria-hidden="true" />
                  </div>
                  <h4 className="font-display font-semibold text-body-lg text-dark mb-2">{feature.title}</h4>
                  <p className="text-body-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="font-display font-semibold text-heading-md text-dark text-center mb-10">
              How Your Digital Menu Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4 p-6 bg-white rounded-brand-xl border border-gray-200 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-12 h-12 rounded-brand bg-brand-teal/10 flex items-center justify-center shrink-0`}>
                    <step.icon className="w-6 h-6 text-brand-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-heading-sm text-dark mb-1">{step.title}</h4>
                    <p className="text-body text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 bg-gray-50 rounded-brand-xl">
            <h2 className="text-display-sm font-bold text-dark mb-4">See the Platform in Action</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute platform walkthrough. We'll show you the dashboard, QR engine, and integrations live.
            </p>
            <Button size="xl" variant="primary" asChild>
              <Link href="/contact">Book Platform Demo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}