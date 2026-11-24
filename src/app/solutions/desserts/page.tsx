import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { IceCream, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Digital Menu for Dessert & Ice Cream Parlors',
  'Flavor-of-the-day scheduling, topping combos, scoop size picker, upsell badges. Built for Pakistan dessert shops and ice cream parlors.',
  '/solutions/desserts'
)

const features = [
  { title: 'Flavor Scheduling', description: 'Set "Flavor of the Day" calendar. Auto-swap at midnight. Customers always see today\'s specials.' },
  { title: 'Topping Combos', description: 'Create "Sundae Builder: Base + 3 Toppings + Sauce". Visual picker. Price calculates automatically.' },
  { title: 'Scoop Size Picker', description: 'Single / Double / Triple / Waffle Cone. Each with own price. Customers choose visually.' },
  { title: 'Upsell Badges', description: 'Add "Add a Waffle +150" or "Double Scoop +80" badges. Drives 20%+ higher average order.' },
  { title: 'Seasonal Themes', description: 'Mango Mania (Summer), Gulab Jamun (Winter), Eid Specials. Swap entire theme with colors & photos.' },
  { title: 'Dietary Tags', description: 'Sugar-free, dairy-free, vegan, nut-free. Parents filter for kids\' allergies instantly.' },
  { title: 'Takeaway Packaging Selector', description: 'Cup / Cone / Tub / Party Pack. Packaging cost auto-added. Customer sees total upfront.' },
  { title: 'WhatsApp Party Orders', description: 'Birthday party packs (20 cups + toppings). Customer orders via WhatsApp. You confirm & schedule.' },
]

const painPoints = [
  'Flavor board chalk smudges in freezer condensation',
  'Customers ask "What flavors today?" every visit',
  'Topping prices explained verbally = errors',
  'Party orders managed on WhatsApp = missed details',
  'Seasonal menu (mango/winter) = reprint costs',
  'No photos = fewer impulse "that looks good" orders',
]

export default function DessertsPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Solutions', url: 'https://scansavvy.pk/solutions/' },
    { name: 'Dessert & Ice Cream Parlors', url: 'https://scansavvy.pk/solutions/desserts/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="desserts-heading">
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
                  <li className="font-medium text-dark" aria-current="page">Dessert & Ice Cream Parlors</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-brand bg-brand-coral/10 flex items-center justify-center">
                  <IceCream className="w-7 h-7 text-brand-coral" aria-hidden="true" />
                </div>
                <span className="px-3 py-1 text-body-sm font-medium bg-brand-coral/10 text-brand-coral-dark rounded-full">Dessert Vertical</span>
              </div>
              <h1 id="desserts-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                Flavor Rotations Made Effortless
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                Flavor-of-the-day scheduling, topping combos, scoop size picker, and upsell badges. Built for dessert shops that rotate daily.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="coral" asChild>
                  <Link href="/contact">Book Dessert Demo</Link>
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
                        <IceCream className="w-12 h-12 text-brand-coral" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg mb-2">Dessert Demo</h3>
                      <p className="text-brand-coral-100 mb-6">Tap to explore flavor scheduler, sundae builder & upsell badges</p>
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
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Pains We Solve for Dessert Shops</h2>
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
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Features Built for Daily Rotation</h2>
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
            <h2 className="text-display-sm font-bold text-dark mb-4">Ready to Digitize Your Dessert Menu?</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute menu audit. We'll show you a live demo tailored to your parlor and send a custom proposal.
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