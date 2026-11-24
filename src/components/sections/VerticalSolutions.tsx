'use client'

import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { UtensilsCrossed, Coffee, Truck, Cake, Building2, IceCream, Utensils, Leaf } from 'lucide-react'

const verticals = [
  {
    slug: 'restaurants',
    icon: UtensilsCrossed,
    title: 'Restaurants & Fine Dining',
    tagline: 'Table-service menus that match your pace',
    description: 'Coursing support, table mapping, kitchen view, allergen matrix, multi-language for international guests.',
    features: ['Multi-course menus', 'Table QR mapping', 'Kitchen display sync', 'Allergen filters', 'Wine list integration'],
    color: 'teal',
  },
  {
    slug: 'cafes',
    icon: Coffee,
    title: 'Cafes & Coffee Shops',
    tagline: 'Daily specials updated before the kettle boils',
    description: 'Quick-edit for rotating specials, loyalty prompt, seasonal scheduling, Instagram embed for social proof.',
    features: ['Daily specials scheduler', 'Loyalty card prompt', 'Seasonal menu swap', 'Instagram feed', 'Quick price edits'],
    color: 'coral',
  },
  {
    slug: 'food-trucks',
    icon: Truck,
    title: 'Food Trucks & Street Food',
    tagline: 'Menus that move with you',
    description: 'Weatherproof QR stands, 4G-optimized loading, location-based URLs, offline-first caching.',
    features: ['Weatherproof stands', 'Offline-first cache', 'Location-based URLs', '4G-optimized', 'Compact layout'],
    color: 'teal',
  },
  {
    slug: 'bakeries',
    icon: Cake,
    title: 'Bakeries & Dessert Shops',
    tagline: 'Sell out, don\'t print out',
    description: 'Pre-order slots, pickup windows, auto-hide sold-out items, combo builder for boxes.',
    features: ['Pre-order time slots', 'Pickup window selector', 'Auto-hide sold out', 'Box combo builder', 'Daily fresh badge'],
    color: 'coral',
  },
  {
    slug: 'cafeterias',
    icon: Building2,
    title: 'Cafeterias & Food Courts',
    tagline: 'One platform, every counter',
    description: 'Meal plans, dietary filters, bulk QR deployment across stalls, shift-based menus.',
    features: ['Meal plan support', 'Dietary filters', 'Bulk QR deployment', 'Shift-based menus', 'Central dashboard'],
    color: 'teal',
  },
  {
    slug: 'desserts',
    icon: IceCream,
    title: 'Dessert & Ice Cream Parlors',
    tagline: 'Flavor rotations made effortless',
    description: 'Flavor-of-the-day scheduling, topping combos, scoop size picker, upsell badges.',
    features: ['Flavor scheduling', 'Topping combos', 'Scoop size picker', 'Upsell badges', 'Seasonal themes'],
    color: 'coral',
  },
]

const colorStyles = {
  teal: {
    iconBg: 'bg-brand-teal/10',
    iconColor: 'text-brand-teal',
    border: 'hover:border-brand-teal/50',
    badge: 'bg-brand-teal/10 text-brand-teal-dark',
  },
  coral: {
    iconBg: 'bg-brand-coral/10',
    iconColor: 'text-brand-coral',
    border: 'hover:border-brand-coral/50',
    badge: 'bg-brand-coral/10 text-brand-coral-dark',
  },
}

export function VerticalSolutions() {
  return (
    <section className="section-py" aria-labelledby="verticals-heading">
      <div className="container-brand">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="verticals-heading" className="text-display-md font-bold text-dark mb-4">
            Built for Your Type of Food Business
          </h2>
          <p className="text-body-lg text-gray-600">
            From a single food truck to a multi-branch restaurant group. Each vertical gets features that actually matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vertical, index) => {
            const colors = colorStyles[vertical.color as keyof typeof colorStyles]
            return (
              <Card
                key={vertical.slug}
                variant="interactive"
                padding="lg"
                className={`relative overflow-hidden border-gray-200 ${colors.border} transition-all duration-brand group animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-brand ${colors.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <vertical.icon className={`w-6 h-6 ${colors.iconColor}`} aria-hidden="true" />
                  </div>

                  <div className="mb-3">
                    <span className={`px-2 py-1 text-caption font-medium rounded-full ${colors.badge}`}>
                      {vertical.title}
                    </span>
                  </div>

                  <CardTitle className="text-heading-sm">{vertical.tagline}</CardTitle>
                  <CardDescription className="mt-2">{vertical.description}</CardDescription>

                  <ul className="mt-6 space-y-2" role="list">
                    {vertical.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-teal transition-colors" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" size="sm" className="mt-6 w-full justify-start" asChild>
                    <a href={`/solutions/${vertical.slug}`}>View Solution →</a>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">Don't See Your Type? Let's Talk →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}