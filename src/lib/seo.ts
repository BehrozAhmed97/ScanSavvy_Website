import { Metadata } from 'next'

export const siteConfig = {
  name: 'ScanSavvy',
  description: 'Digital Menu Infrastructure for Food Businesses. Branded QR micro-portals. Real-time menu control. Zero commission. Built for Pakistan\'s food industry.',
  url: 'https://scansavvy.pk',
  ogImage: '/og-image.png',
  twitterHandle: '@scansavvy',
  businessName: 'ScanSavvy',
  businessType: 'SoftwareCompany',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  phone: '+92-300-0000000',
  email: 'hello@scansavvy.pk',
  sameAs: [
    'https://www.linkedin.com/company/scansavvy',
    'https://twitter.com/scansavvy',
    'https://www.instagram.com/scansavvy',
    'https://wa.me/923000000000',
  ],
}

export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const fullUrl = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: siteConfig.ogImage,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: siteConfig.address,
    sameAs: siteConfig.sameAs,
    priceRange: '$$$',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Bank Transfer, JazzCash, Easypaisa',
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Menu Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          description: 'Single-location digital menu with QR micro-portal',
          category: 'SaaS',
        },
        {
          '@type': 'Offer',
          name: 'Growth Plan',
          description: 'Multi-location with ordering & WhatsApp integration',
          category: 'SaaS',
        },
        {
          '@type': 'Offer',
          name: 'Enterprise Plan',
          description: 'Custom domain, API access, POS integration, SLA',
          category: 'SaaS',
        },
      ],
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function productSchema(name: string, description: string, price?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: price
      ? {
          '@type': 'Offer',
          priceCurrency: 'PKR',
          price: price.replace(/[^\d]/g, ''),
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  }
}