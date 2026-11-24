import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Smartphone, QrCode, MapPin, Mail, Phone, Globe, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Platform', href: '/platform' },
    { name: 'Pricing', href: '/contact' },
    { name: 'Demo', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'API Docs', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Status', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'DPA', href: '#' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/scansavvy', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/scansavvy', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/scansavvy', icon: Instagram },
  { name: 'WhatsApp', href: 'https://wa.me/923000000000', icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300" role="contentinfo">
      <div className="container-brand py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="ScanSavvy Home">
              <LogoMark className="w-12 h-12 text-white" />
              <span className="font-display font-bold text-heading-lg text-white">ScanSavvy</span>
            </Link>
            <p className="text-body text-gray-400 mb-6 max-w-xs">
              Digital Menu Infrastructure for Food Businesses. Branded QR micro-portals. Real-time menu control. Zero commission.
            </p>
            <div className="flex flex-wrap gap-2 text-body-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Lahore, Pakistan
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" aria-hidden="true" />
                Serving PK Nationwide
              </span>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product links">
            <h3 className="font-display font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resource links">
            <h3 className="font-display font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3 mb-6" role="list">
              <li>
                <a
                  href="mailto:hello@scansavvy.pk"
                  className="flex items-center gap-2 text-body-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  hello@scansavvy.pk
                </a>
              </li>
              <li>
                <a
                  href="tel:+923000000000"
                  className="flex items-center gap-2 text-body-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  +92 300 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923000000000?text=Hi%20ScanSavvy%2C%20I%27d%20like%20to%20book%20a%20demo"
                  className="flex items-center gap-2 text-body-sm text-brand-teal-light hover:text-brand-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <div className="flex gap-4" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-gray-500">
            © {new Date().getFullYear()} ScanSavvy. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-body-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="18" height="18" fill="currentColor" />
      <rect x="8" y="8" width="14" height="14" fill="white" />
      <rect x="10" y="10" width="10" height="10" fill="currentColor" />
      <rect x="12" y="12" width="6" height="6" fill="white" />

      <rect x="40" y="6" width="18" height="18" fill="currentColor" />
      <rect x="42" y="8" width="14" height="14" fill="white" />
      <rect x="44" y="10" width="10" height="10" fill="currentColor" />
      <rect x="46" y="12" width="6" height="6" fill="white" />

      <rect x="6" y="40" width="18" height="18" fill="currentColor" />
      <rect x="8" y="42" width="14" height="14" fill="white" />
      <rect x="10" y="44" width="10" height="10" fill="currentColor" />
      <rect x="12" y="46" width="6" height="6" fill="white" />

      <rect x="38" y="6" width="20" height="32" rx="3" fill="white" />
      <rect x="40" y="10" width="16" height="24" rx="2" fill="currentColor" />
      <rect x="44" y="14" width="8" height="2" rx="1" fill="white" />
      <rect x="44" y="20" width="8" height="2" rx="1" fill="white" />
      <rect x="44" y="26" width="8" height="2" rx="1" fill="white" />
    </svg>
  )
}