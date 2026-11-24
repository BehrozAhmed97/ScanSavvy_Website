'use client'

import { Button } from '@/components/ui/Button'
import { QRCodePlaceholder } from '@/components/ui/QRFrame'
import { cn } from '@/lib/utils'
import { ArrowRight, Smartphone, CheckCircle, Shield, Zap } from 'lucide-react'

export function Hero() {
  const trustBadges = [
    { icon: Shield, label: '99.9% Uptime SLA' },
    { icon: Smartphone, label: 'Works on Any Phone' },
    { icon: Zap, label: 'Instant Updates' },
    { icon: CheckCircle, label: 'Zero Commission' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBBOTQ4OCIgb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-brand py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 mb-8" role="list" aria-label="Trust indicators">
              {trustBadges.map((badge, index) => (
                <span key={badge.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-body-sm font-medium text-gray-700 animate-fade-in delay-100" style={{ animationDelay: `${index * 100}ms` }}>
                  <badge.icon className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 id="hero-heading" className="text-display-xl font-bold text-dark mb-6 animate-fade-in delay-200">
              Digital Menu Infrastructure{' '}
              <span className="text-brand-teal">for Food Businesses</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-gray-600 mb-8 max-w-xl animate-fade-in delay-300">
              Branded QR micro-portals. Real-time menu control. Zero commission. Built for Pakistan&apos;s food industry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
              <Button size="xl" variant="primary" asChild>
                <a href="/contact">Book a Demo <ArrowRight className="w-5 h-5" aria-hidden="true" /></a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="/platform">See Platform</a>
              </Button>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-body-sm text-gray-500 animate-fade-in delay-500">
              <a href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%27d%20like%20a%20demo" className="flex items-center gap-2 hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                WhatsApp Us
              </a>
              <span className="flex items-center gap-2">
                <Calendly className="w-5 h-5" aria-hidden="true" />
                <a href="https://calendly.com/scansavvy/discovery-call" className="hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">15-min Call</a>
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in delay-300" aria-hidden="true">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative max-w-md mx-auto">
                <PhoneMockup />
              </div>

              {/* Floating QR Frame */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10">
                <QRCodePlaceholder size="lg" />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6">
                <div className="bg-white rounded-brand-xl border border-gray-200 p-4 shadow-brand-lg animate-fade-in delay-400">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-brand bg-brand-teal/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-body">Setup in 48 Hours</p>
                      <p className="text-body-sm text-gray-500">We build your menu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative" role="img" aria-label="ScanSavvy mobile menu demo">
      {/* Phone Frame */}
      <div className="relative w-full aspect-[9/19.5] max-w-[320px] mx-auto rounded-[36px] bg-gray-900 shadow-2xl border-4 border-gray-800 p-1">
        <div className="w-full h-full rounded-[32px] bg-white overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-10 flex items-center justify-between px-4 text-xs text-gray-500">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="w-7 h-4 bg-gray-300 rounded-full" />
              <span className="w-5 h-5 bg-gray-300 rounded-full" />
            </div>
          </div>

          {/* Menu Content */}
          <div className="p-4 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(100% - 40px)' }}>
            {/* Venue Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-heading-md text-dark">The Spice Route</h3>
                  <p className="text-body-sm text-gray-500">Fine Dining • Lahore</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-body-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Gulberg III</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Open until 11 PM</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              {menuCategories.map((category) => (
                <div key={category.name} className="animate-fade-in">
                  <h4 className="font-display font-semibold text-heading-sm text-dark mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-coral" />
                    {category.name}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <MenuItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 flex items-center justify-between px-4">
            <button className="flex flex-col items-center gap-1 text-body-sm font-medium text-brand-teal">
              <Smartphone className="w-5 h-5" />
              Order via WhatsApp
            </button>
            <button className="flex flex-col items-center gap-1 text-body-sm font-medium text-gray-600">
              <Phone className="w-5 h-5" />
              Call Venue
            </button>
            <button className="flex flex-col items-center gap-1 text-body-sm font-medium text-gray-600">
              <Share className="w-5 h-5" />
              Share Menu
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-5 bg-gray-900 rounded-b-lg" />
    </div>
  )
}

function MenuItem({ name, description, price, tags, available = true }: MenuItemProps) {
  if (!available) {
    return (
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-brand opacity-60">
        <div className="flex-1">
          <p className="font-medium text-dark line-through">{name}</p>
          <p className="text-body-sm text-gray-500">{description}</p>
        </div>
        <span className="px-2 py-1 text-caption font-medium bg-red-50 text-red-600 rounded-full">Sold Out</span>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-brand hover:bg-gray-50 transition-colors">
      <div className="w-16 h-16 rounded-brand bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h5 className="font-medium text-body text-dark">{name}</h5>
          <span className="font-display font-bold text-body text-brand-teal whitespace-nowrap">PKR {price}</span>
        </div>
        <p className="text-body-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-caption font-medium rounded-full bg-brand-teal/10 text-brand-teal-dark">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface MenuItemProps {
  name: string
  description: string
  price: number
  tags?: string[]
  available?: boolean
}

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Chicken Tikka', description: 'Boneless chicken marinated in yogurt & spices, grilled to perfection', price: 1200, tags: ['Halal', 'Gluten-Free'] },
      { name: 'Seekh Kebabs', description: 'Minced lamb with herbs & spices, skewered & charcoal grilled', price: 1400, tags: ['Halal'] },
      { name: 'Vegetable Samosa', description: 'Crispy pastry filled with spiced potatoes & peas', price: 450, tags: ['Vegetarian', 'Vegan'] },
    ],
  },
  {
    name: 'Mains',
    items: [
      { name: 'Butter Chicken', description: 'Tender chicken in rich tomato & cream sauce with fenugreek', price: 1800, tags: ['Halal', 'Contains Dairy'] },
      { name: 'Lamb Biryani', description: 'Fragrant basmati rice layered with slow-cooked lamb & saffron', price: 2200, tags: ['Halal', 'Signature Dish'] },
      { name: 'Palak Paneer', description: 'Fresh cottage cheese in spiced spinach gravy', price: 1500, tags: ['Vegetarian', 'Halal', 'Contains Dairy'] },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Mango Lassi', description: 'Sweet yogurt drink with Alphonso mango pulp', price: 400, tags: ['Vegetarian', 'Halal'] },
      { name: 'Masala Chai', description: 'Traditional spiced tea with milk', price: 200, tags: ['Vegetarian', 'Halal'] },
      { name: 'Fresh Lime Soda', description: 'Refreshing lime with mint & soda water', price: 250, tags: ['Vegan', 'Halal'] },
    ],
  },
]

// Icons for phone mockup
function QrCode({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="5" y="5" width="3" height="3" />
      <rect x="16" y="5" width="3" height="3" />
      <rect x="5" y="16" width="3" height="3" />
    </svg>
  )
}

function Clock({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Phone({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Share({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function Calendly({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}