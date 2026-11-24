import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata(
  'Privacy Policy — ScanSavvy',
  'ScanSavvy Privacy Policy. How we collect, use, and protect your personal information.',
  '/privacy'
)

export default function PrivacyPage() {
  const structuredData = breadcrumbSchema([
    { name: 'Home', url: 'https://scansavvy.pk/' },
    { name: 'Privacy Policy', url: 'https://scansavvy.pk/privacy/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section-py pt-28" aria-labelledby="privacy-heading">
        <div className="container-brand">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-body-sm text-gray-500">
              <li><Link href="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
              <li className="text-gray-300" aria-hidden="true">/</li>
              <li className="font-medium text-dark" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          <article className="max-w-3xl mx-auto prose prose-lg prose-gray dark:prose-invert max-w-none">
            <h1 id="privacy-heading" className="text-display-md font-bold text-dark mb-8">Privacy Policy</h1>
            <p className="text-body text-gray-600 mb-6">
              Effective Date: November 2026<br />
              ScanSavvy ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website scansavvy.pk ("the Site") or use our digital menu platform.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-body text-gray-600 mb-4">We may collect information about you in the following ways:</p>
            <ul className="list-disc list-inside text-body text-gray-600 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, venue name, and role when you fill out our contact or demo forms.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and referral source to improve the Site.</li>
              <li><strong>Cookies:</strong> We use cookies to remember preferences and analyze traffic. You may disable cookies in your browser settings.</li>
            </ul>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-body text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-body text-gray-600 mb-6 space-y-2">
              <li>Respond to your inquiries and schedule demo calls.</li>
              <li>Send you updates about ScanSavvy features and pricing (you may opt out at any time).</li>
              <li>Improve the Site and our digital menu platform.</li>
              <li>Comply with legal obligations under applicable Pakistani law.</li>
            </ul>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">3. Data Sharing & Disclosure</h2>
            <p className="text-body text-gray-600 mb-4">We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc list-inside text-body text-gray-600 mb-6 space-y-2">
              <li>Service providers (hosting, analytics, email, WhatsApp) who process data on our behalf.</li>
              <li>Legal authorities when required by law.</li>
            </ul>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">4. Data Security</h2>
            <p className="text-body text-gray-600 mb-6">
              We implement industry-standard technical and organizational measures to protect your information, including encryption in transit (HTTPS), access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">5. Data Retention</h2>
            <p className="text-body text-gray-600 mb-6">
              We retain personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">6. Your Rights</h2>
            <p className="text-body text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-body text-gray-600 mb-6 space-y-2">
              <li>Access and obtain a copy of your personal information.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal information.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Lodge a complaint with the relevant data protection authority in Pakistan.</li>
            </ul>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-body text-gray-600 mb-6">
              Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">8. International Data Transfers</h2>
            <p className="text-body text-gray-600 mb-6">
              Your data may be processed in Pakistan or other countries where our service providers operate. We ensure appropriate safeguards are in place for any cross-border transfers.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">9. Changes to This Policy</h2>
            <p className="text-body text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. We encourage you to review it periodically.
            </p>

            <h2 className="font-display font-semibold text-heading-md text-dark mt-10 mb-4">10. Contact Us</h2>
            <p className="text-body text-gray-600 mb-6">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-brand-xl p-6 mt-8">
              <p className="font-medium text-dark mb-2"><strong>ScanSavvy</strong></p>
              <p className="text-body text-gray-600 mb-2">
                Lahore, Pakistan<br />
                Email: hello@scansavvy.pk<br />
                WhatsApp: +92 300 000 0000
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}