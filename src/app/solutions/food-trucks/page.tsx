import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { Truck, CheckCircle, ArrowRight, WifiOff, Cloud, Sun, CloudRain } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Digital Menu for Food Trucks & Street Food',
  'Weatherproof QR menus for food trucks. Offline-first caching, 4G-optimized loading, location-based URLs. Built for Pakistan street food vendors.',
  '/solutions/food-trucks'
)

const features = [
  { title: 'Weatherproof QR Stands', description: 'Metal stands with UV-coated QR frames. Survive rain, sun, dust, and daily setup/teardown.' },
  { title: 'Offline-First Caching', description: 'Menu loads instantly even on patchy 4G. Service worker caches everything. Customers never see a loading spinner.' },
  { title: 'Location-Based URLs', description: 'Each parking spot gets a unique QR. Analytics show which locations drive most scans. Optimize your route.' },
  { title: '4G-Optimized Loading', description: 'Images auto-compressed for mobile data. Critical CSS inlined. First paint under 1s on 3G.' },
  { title: 'Compact Single-Page Layout', description: 'All categories on one scroll. No tap-heavy navigation. Designed for standing customers.' },
  { title: 'Daily Location Broadcast', description: 'Update "Today at: Gulberg Food Street" in header. Customers see location before scanning.' },
  { title: 'Combo Builder', description: 'Burger + Fries + Drink = Combo price. One tap adds all three. Increases average order value.' },
  { title: 'WhatsApp Order Ahead', description: 'Customers order while walking up. WhatsApp to your phone. Food ready when they arrive.' },
]

const painPoints = [
  'Paper menus fly away or get greasy in minutes',
  'No internet at some parking spots = no menu access',
  'Customers can\'t read small print in sunlight',
  'Changing location means manually updating Google Maps',
  'Rain ruins printed menus and cardboard stands',
  'Standing customers don\'t want complex navigation',
]

export default function FoodTrucksPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Solutions', url: 'https://scansavvy.pk/solutions/' },
    { name: 'Food Trucks & Street Food', url: 'https://scansavvy.pk/solutions/food-trucks/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="food-trucks-heading">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal/5 via-white to-white" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-body-sm text-gray-500">
                  <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li><Link href="/solutions" className="hover:text-brand-teal transition-colors">Solutions</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li className="font-medium text-dark" aria-current="page">Food Trucks & Street Food</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-brand bg-brand-teal/10 flex items-center justify-center">
                  <Truck className="w-7 h-7 text-brand-teal" aria-hidden="true" />
                </div>
                <span className="px-3 py-1 text-body-sm font-medium bg-brand-teal/10 text-brand-teal-dark rounded-full">Food Truck Vertical</span>
              </div>
              <h1 id="food-trucks-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                Menus That Move With You
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                Weatherproof QR stands, offline-first caching, location-based URLs, and 4G-optimized loading. Built for the street food hustle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact">Book Food Truck Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">View All Verticals</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in" aria-hidden="true">
              <div className="bg-white rounded-brand-xl border border-gray-200 shadow-brand-lg p-2 max-w-md mx-auto">
                <div className="rounded-brand-lg bg-gray-900 aspect-[9/19.5] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                        <Truck className="w-12 h-12 text-brand-teal" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg mb-2">Food Truck Demo</h3>
                      <p className="text-brand-teal-100 mb-6">Tap to explore offline mode, location broadcast & combo builder</p>
                      <Button variant="secondary" size="lg" asChild>
                        <Link href="/contact">Try Live Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Pains We Solve for Food Trucks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((pain, index) => (
                <div key={pain} className="flex items-start gap-3 p-5 bg-white rounded-brand-lg border border-gray-200 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
                  </div>
                  <p className="text-body text-gray-700">{pain}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Features Built for the Street</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="group p-6 bg-white rounded-brand-xl border border-gray-200 hover:border-brand-teal/50 hover:shadow-brand-lg transition-all duration-brand animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-brand bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-heading-sm text-dark mb-1">{feature.title}</h3>
                      <p className="text-body text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center py-12 bg-gray-50 rounded-brand-xl">
            <h2 className="text-display-sm font-bold text-dark mb-4">Ready to Digitize Your Food Truck Menu?</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute menu audit. We'll show you a live demo tailored to your truck and send a custom proposal.
            </p>
            <Button size="xl" variant="primary" asChild>
              <Link href="/contact">Start Free Menu Audit <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}