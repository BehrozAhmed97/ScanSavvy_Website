import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { Building2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Digital Menu for Cafeterias & Food Courts',
  'Meal plans, dietary filters, bulk QR deployment across stalls, shift-based menus. Built for Pakistan university and corporate cafeterias.',
  '/solutions/cafeterias'
)

const features = [
  { title: 'Meal Plan Support', description: 'Student/employee meal plans with daily limits. QR scan deducts from balance. Admin dashboard for top-ups.' },
  { title: 'Dietary Filters', description: 'Halal, vegetarian, vegan, gluten-free, nut-free. Students filter instantly. Allergen info per stall item.' },
  { title: 'Bulk QR Deployment', description: 'Generate 50+ stall QRs in one CSV upload. Each stall gets branded frame. Centralized management.' },
  { title: 'Shift-Based Menus', description: 'Breakfast / Lunch / Dinner / Late-night. Auto-switch by time. Different stalls active per shift.' },
  { title: 'Central Dashboard', description: 'One login for all stalls. Venue manager sees all scans, revenue, popular items across food court.' },
  { title: 'Stall Sub-Accounts', description: 'Each stall owner gets their own menu editor. They update their items. You oversee everything.' },
  { title: 'Peak Hour Analytics', description: 'Know exactly when 12-1 PM crush hits. Staff stalls accordingly. Reduce queue times.' },
  { title: 'WhatsApp Order to Stall', description: 'Student orders → WhatsApp to specific stall. Stall prepares → notifies when ready. No central queue.' },
]

const painPoints = [
  'Paper meal cards lost, damaged, or shared',
  'Students with allergies can\'t find safe options',
  '50+ stalls = 50+ different QR codes to manage',
  'Shift changes mean manual menu swaps at each stall',
  'No central view of what\'s selling across food court',
  'Peak hour chaos — no data to optimize staffing',
]

export default function CafeteriasPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Solutions', url: 'https://scansavvy.pk/solutions/' },
    { name: 'Cafeterias & Food Courts', url: 'https://scansavvy.pk/solutions/cafeterias/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-py pt-28 relative overflow-hidden" aria-labelledby="cafeterias-heading">
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
                  <li className="font-medium text-dark" aria-current="page">Cafeterias & Food Courts</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-brand bg-brand-teal/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-brand-teal" aria-hidden="true" />
                </div>
                <span className="px-3 py-1 text-body-sm font-medium bg-brand-teal/10 text-brand-teal-dark rounded-full">Cafeteria Vertical</span>
              </div>
              <h1 id="cafeterias-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-4">
                One Platform, Every Counter
              </h1>
              <p className="text-body-lg text-gray-600 mb-8">
                Meal plans, dietary filters, bulk QR deployment across stalls, and shift-based menus. Built for university and corporate cafeterias.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact">Book Cafeteria Demo</Link>
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
                        <Building2 className="w-12 h-12 text-brand-teal" />
                      </div>
                      <h3 className="font-display font-bold text-heading-lg mb-2">Cafeteria Demo</h3>
                      <p className="text-brand-teal-100 mb-6">Tap to explore meal plans, bulk QR & central dashboard</p>
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
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Pains We Solve for Cafeterias</h2>
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
            <h2 className="text-heading-lg font-semibold text-dark text-center mb-10">Features Built for Scale</h2>
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
            <h2 className="text-display-sm font-bold text-dark mb-4">Ready to Digitize Your Cafeteria?</h2>
            <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute menu audit. We'll show you a live demo tailored to your food court and send a custom proposal.
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