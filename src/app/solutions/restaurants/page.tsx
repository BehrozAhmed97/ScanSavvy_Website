import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { UtensilsCrossed, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Digital Menu for Restaurants & Fine Dining',
  'Table-service digital menus with coursing, table mapping, kitchen view, allergen matrix, and multi-language support. Built for Pakistan restaurants.',
  '/solutions/restaurants'
)

const features = [
  { title: 'Multi-Course Menu Structure', description: 'Organize by courses (Amuse, Starters, Mains, Desserts, Digestifs). Diners navigate naturally.' },
  { title: 'Table QR Mapping', description: 'Each table gets a unique QR. Orders tagged with table number. Staff knows exactly where to deliver.' },
  { title: 'Kitchen Display Sync', description: 'Orders route to kitchen screen with course firing. "Fire Mains" button for coordinated service.' },
  { title: 'Allergen & Dietary Matrix', description: 'Tag items with allergens (nuts, dairy, gluten) and diets (halal, vegetarian, vegan). Diners filter instantly.' },
  { title: 'Wine & Beverage Integration', description: 'Separate wine list with vintage, region, glass/bottle pricing. Pairing suggestions per dish.' },
  { title: 'Multi-Language Support', description: 'Urdu/English toggle built-in. Add Arabic, Chinese, or any language for international guests.' },
  { title: 'Private Dining Menus', description: 'Create hidden menus for events, tasting menus, or VIP rooms. Access via unique QR.' },
  { title: 'Captain/Waiter Mode', description: 'Staff can place orders on behalf of guests from their own phone. No POS terminal needed.' },
]

const painPoints = [
  'Printed menus outdated by the time they hit tables',
  'Guests with allergies ask staff for every dish',
  'Multi-course timing chaos — mains arrive before starters',
  'Wine list changes mean expensive reprints',
  'Tourist guests struggle with English-only menus',
  'Special event menus require separate design & print',
]

export default function RestaurantsPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Solutions', url: 'https://scansavvy.pk/solutions/' },
    { name: 'Restaurants & Fine Dining', url: 'https://scansavvy.pk/solutions/restaurants/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="restaurants-heading">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal/5 via-white to-white" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container-brand">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-body-sm text-gray-500">
                  <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li><Link href="/solutions" className="hover:text-brand-teal transition-colors">Solutions</Link></li>
                  <li className="text-gray-300" aria-hidden="true">/</li>
                  <li className="font-medium text-dark" aria-current="page">Restaurants & Fine Dining</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-brand bg-brand-teal/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-7 h-7 text-brand-teal" aria-hidden="true" />
                </div>
                <span className="px-3 py-1 text-body-sm font-medium bg-brand-teal/10 text-brand-teal-dark rounded-full">Restaurant Vertical</span>
              </div>
              <h1 id="restaurants-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                Table-Service Menus That Match Your Pace
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                From fine dining to casual eateries. Coursing, table mapping, kitchen sync, and allergen safety — all in a beautiful mobile menu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact">Book Restaurant Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">View All Verticals</Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-scale-in" aria-hidden="true">
              <div className="bg-white rounded-brand-xl border border-gray-200 shadow-brand-lg p-2 max-w-md mx-auto">
                <div className="rounded-brand-lg bg-gray-900 aspect-[9/19.5] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                        <UtensilsCrossed className="w-12 h-12 text-brand-teal" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg mb-2">Fine Dining Demo</h3>
                      <p className="text-brand-teal-100 mb-6">Tap to explore coursing, wine pairing & table mapping</p>
                      <Button variant="secondary" size="lg" asChild>
                        <Link href="/contact">Try Live Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Pains We Solve for Restaurants</h2>
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

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Features Built for Table Service</h2>
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

          {/* CTA */}
          <div className="text-center py-12 bg-gray-50 rounded-brand-xl">
            <h2 className="text-display-sm font-bold text-dark mb-4">Ready to Digitize Your Restaurant Menu?</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute menu audit. We'll show you a live demo tailored to your venue and send a custom proposal.
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