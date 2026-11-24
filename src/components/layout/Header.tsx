'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Menu, X, Smartphone, QrCode } from 'lucide-react'

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Platform', href: '/platform' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-brand',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-brand" aria-label="Main navigation">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="ScanSavvy Home"
          >
            <LogoMark className="w-10 h-10 text-brand-teal" />
            <span className="font-display font-bold text-heading-sm text-dark hidden sm:block">
              ScanSavvy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-body-sm font-medium text-gray-700 hover:text-brand-teal transition-colors duration-brand"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-brand text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-brand ease-brand',
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-2 py-2 text-body font-medium text-gray-700 hover:text-brand-teal rounded-brand hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Button variant="primary" fullWidth asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
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