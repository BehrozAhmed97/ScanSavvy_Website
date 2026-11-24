import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/sections/ContactForm'
import { Smartphone, QrCode, Shield, Zap, MessageCircle } from 'lucide-react'

export const metadata: Metadata = generateMetadata(
  'Contact ScanSavvy — Book a Free Demo',
  'Get in touch with ScanSavvy. Book a free 30-minute discovery call for your food business digital menu solution.',
  '/contact'
)

const benefits = [
  { icon: Smartphone, title: 'No App Download', description: 'Customers scan & browse instantly in mobile browser.' },
  { icon: QrCode, title: 'Branded QR Frames', description: 'Your logo, colors, and style on every QR code.' },
  { icon: Shield, title: 'Zero Commission', description: 'Flat quarterly fee. We never take a % of your orders.' },
  { icon: Zap, title: 'Instant Updates', description: 'Edit prices & availability. Changes go live in seconds.' },
]

export default function ContactPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Contact', url: 'https://scansavvy.pk/contact/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section-py pt-28" aria-labelledby="contact-heading">
        <div className="container-brand">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-brand bg-brand-teal flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-brand-teal-dark">Get in Touch</span>
              </div>
              <h1 id="contact-heading" className="text-display-md lg:text-display-lg font-bold text-dark mb-6">
                Book Your Free Discovery Call
              </h1>
              <p className="text-body-lg text-gray-600 mb-8 max-w-lg">
                Tell us about your venue. We'll schedule a 30-minute call to audit your current menu flow and show you a live ScanSavvy demo tailored to your business.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5`}>
                      <benefit.icon className="w-5 h-5 text-brand-teal" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-body-lg text-dark mb-1">{benefit.title}</h4>
                      <p className="text-body-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-gray-50 rounded-brand-xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h3 className="font-display font-semibold text-heading-md text-dark mb-6">Request a Demo</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="border-t border-gray-200 pt-12 mt-16">
            <h3 className="font-display font-semibold text-heading-md text-dark text-center mb-10">
              Prefer to Reach Out Directly?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
              <div className="text-center p-8 rounded-brand-xl border border-gray-200 bg-white hover:shadow-brand transition-all duration-brand group">
                <MessageCircle className="w-10 h-10 text-brand-teal mx-auto mb-4" aria-hidden="true" />
                <h4 className="font-display font-semibold text-heading-sm text-dark mb-2">WhatsApp</h4>
                <p className="text-body text-gray-600 mb-4">Quickest response — business hours</p>
                <a
                  href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%27d%20like%20to%20book%20a%20demo"
                  className="flex items-center justify-center gap-2 font-display font-medium text-body-sm text-brand-teal hover:text-brand-teal-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                  <span className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
              </div>
              <div className="text-center p-8 rounded-brand-xl border border-gray-200 bg-white hover:shadow-brand transition-all duration-brand group">
                <Smartphone className="w-10 h-10 text-brand-teal mx-auto mb-4" aria-hidden="true" />
                <h4 className="font-display font-semibold text-heading-sm text-dark mb-2">Call Us</h4>
                <p className="text-body text-gray-600 mb-4">Lahore office — 10 AM to 6 PM PKT</p>
                <a
                  href="tel:+923000000000"
                  className="flex items-center justify-center gap-2 font-display font-medium text-body-sm text-brand-teal hover:text-brand-teal-dark transition-colors"
                >
                  +92 300 000 0000
                </a>
              </div>
              <div className="text-center p-8 rounded-brand-xl border border-gray-200 bg-white hover:shadow-brand transition-all duration-brand group">
                <Mail className="w-10 h-10 text-brand-teal mx-auto mb-4" aria-hidden="true" />
                <h4 className="font-display font-semibold text-heading-sm text-dark mb-2">Email</h4>
                <p className="text-body text-gray-600 mb-4">Proposals & partnership inquiries</p>
                <a
                  href="mailto:hello@scansavvy.pk"
                  className="flex items-center justify-center gap-2 font-display font-medium text-body-sm text-brand-teal hover:text-brand-teal-dark transition-colors"
                >
                  hello@scansavvy.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Mail({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}