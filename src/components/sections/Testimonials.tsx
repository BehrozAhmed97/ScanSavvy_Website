'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'ScanSavvy cut our menu printing costs by 80% and updates take 30 seconds. My managers update prices from their phones between tables.',
    author: 'Ahmed Hassan',
    role: 'Operations Manager',
    venue: 'Cafe Chain • Lahore (3 locations)',
    avatar: 'AH',
    metric: '80% print cost reduction',
  },
  {
    quote: 'Finally a menu tool our kitchen staff actually uses. No complex POS, just tap "Sold Out" and it\'s gone. WhatsApp orders come straight to our phone.',
    author: 'Fatima Khan',
    role: 'Owner',
    venue: 'Food Truck • Karachi',
    avatar: 'FK',
    metric: 'Zero training time',
  },
  {
    quote: 'We run a university cafeteria with 12 counters. Bulk QR deployment saved us weeks. Students scan, see dietary filters, order via WhatsApp. Brilliant.',
    author: 'Dr. Rashid Mahmood',
    role: 'Director, Student Services',
    venue: 'University • Islamabad',
    avatar: 'RM',
    metric: '12 counters deployed in 2 days',
  },
  {
    quote: 'The branded QR stands look premium on our tables. Guests comment on the photos and Urdu toggle. It feels like our brand, not a generic app.',
    author: 'Sarah Malik',
    role: 'Marketing Head',
    venue: 'Fine Dining • Lahore',
    avatar: 'SM',
    metric: '4.8/5 guest satisfaction',
  },
]

export function Testimonials() {
  return (
    <section className="section-py bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container-brand">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="testimonials-heading" className="text-display-md font-bold text-dark mb-4">
            Trusted by Food Businesses Across Pakistan
          </h2>
          <p className="text-body-lg text-gray-600">
            Real results from venues that made the switch from printed menus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.author} variant="elevated" padding="lg" className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-brand-teal/20 mb-4" aria-hidden="true" />

              <blockquote className="text-body text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center font-display font-bold text-brand-teal">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-medium text-body text-dark">{testimonial.author}</p>
                    <p className="text-body-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-caption text-gray-400">{testimonial.venue}</p>
                  </div>
                </div>
                <p className="mt-3 px-2 py-1.5 bg-brand-coral/10 text-brand-coral-dark text-caption font-medium rounded-full inline-block">
                  {testimonial.metric}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}