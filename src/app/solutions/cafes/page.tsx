import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { Coffee, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Digital Menu for Cafes & Coffee Shops',
  'Quick-edit digital menus for cafes. Daily specials scheduler, loyalty prompts, seasonal swap, Instagram embed. Built for Pakistan cafes.',
  '/solutions/cafes'
)

const features = [
  { title: 'Daily Specials Scheduler', description: 'Set morning pastries, lunch combos, evening desserts. Auto-switch at specified times. No manual updates needed.' },
  { title: 'Loyalty Card Prompt', description: 'Built-in "Buy 9, Get 1 Free" digital stamp card. Diners tap to track. Drives repeat visits.' },
  { title: 'Seasonal Menu Swap', description: 'Winter menu → Summer menu in one click. Schedule ahead. Archive old seasons for next year.' },
  { title: 'Instagram Feed Embed', description: 'Show your latest food photos directly in the menu. Social proof that drives orders.' },
  { title: 'Quick Price Edits', description: 'Coffee bean cost up? Update all espresso drinks in 10 seconds from your phone.' },
  { title: 'Quick-Add Modifiers', description: 'Oat milk (+50), Extra shot (+30), Syrup (+20). Modifiers apply across drinks instantly.' },
  { title: 'Takeaway Pre-Order', description: 'Diners order ahead, pick up at counter. WhatsApp notification when ready.' },
  { title: 'Barista Mode', description: 'Simple kitchen view for baristas. Tap "Ready" → customer gets WhatsApp. No POS needed.' },
]

const painPoints = [
  'Chalkboard specials smudge and are hard to read',
  'Printed menus can\'t handle daily pastry changes',
  'Loyalty cards get lost or forgotten',
  'Seasonal menus mean reprint costs every quarter',
  'No photos on menu = fewer impulse orders',
  'Baristas waste time explaining modifiers verbally',
]

export default function CafesPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Solutions', url: 'https://scansavvy.pk/solutions/' },
    { name: 'Cafes & Coffee Shops', url: 'https://scansavvy.pk/solutions/cafes/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="cafes-heading">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-coral/5 via-white to-white" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-body-sm text-gray-500">
                  <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li><Link href="/solutions" className="hover:text-brand-teal transition-colors">Solutions</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li className="font-medium text-dark" aria-current="page">Cafes & Coffee Shops</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-brand bg-brand-coral/10 flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-brand-coral" aria-hidden="true" />
                </div>
                <span className="px-3 py-1 text-body-sm font-medium bg-brand-coral/10 text-brand-coral-dark rounded-full">Cafe Vertical</span>
              </div>
              <h1 id="cafes-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                Daily Specials Updated Before the Kettle Boils
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                Quick-edit menus for rotating specials, loyalty prompts, seasonal scheduling, and Instagram embed. Built for the cafe rhythm.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="coral" asChild>
                  <Link href="/contact">Book Cafe Demo</Link>
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
                      <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-brand-coral/20 flex items-center justify-center">
                        <Coffee className="w-12 h-12 text-brand-coral" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg mb-2">Cafe Demo</h3>
                      <p className="text-brand-coral-100 mb-6">Tap to explore specials scheduler, loyalty & Instagram feed</p>
                      <Button variant="coral" size="lg" asChild>
                        <Link href="/contact">Try Live Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Pains We Solve for Cafes</h2>
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
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Features Built for the Cafe Rhythm</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="group p-6 bg-white rounded-brand-xl border border-gray-200 hover:border-brand-coral/50 hover:shadow-brand-lg transition-all duration-brand animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-brand bg-brand-coral/10 flex items-center justify-center shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-brand-coral group-hover:text-white transition-colors" aria-hidden="true" />
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
            <h2 className="text-display-sm font-bold text-dark mb-4">Ready to Digitize Your Cafe Menu?</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute menu audit. We'll show you a live demo tailored to your cafe and send a custom proposal.
            </p>
            <Button size="xl" variant="coral" asChild>
              <Link href="/contact">Start Free Menu Audit <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}