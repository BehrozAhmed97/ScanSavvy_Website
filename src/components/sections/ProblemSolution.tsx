'use client'

import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { Smartphone, Printer, WifiOff, Zap, Eye, Languages, Shield, Clock } from 'lucide-react'

const problems = [
  {
    icon: Printer,
    title: 'Reprinting Costs',
    description: 'Every price change means new print runs. Paper, ink, design time — it adds up fast.',
    solution: 'Update prices instantly from your phone. Changes go live in seconds across all QR codes.',
    solutionIcon: Zap,
  },
  {
    icon: Smartphone,
    title: 'Blurry PDF Menus',
    description: 'Customers pinch-zoom on tiny PDF text. No photos, no allergen info, poor experience.',
    solution: 'Native mobile menu with photos, descriptions, tags & multi-language. Designed for thumbs.',
    solutionIcon: Eye,
  },
  {
    icon: WifiOff,
    title: 'Out-of-Stock Surprises',
    description: 'Kitchen runs out, but menu still shows the item. Frustrated diners, stressed staff.',
    solution: 'One-tap availability toggle. "Sold Out" badge appears instantly. Kitchen stays in sync.',
    solutionIcon: Shield,
  },
  {
    icon: Languages,
    title: 'Language Barriers',
    description: 'Tourists and local diners need Urdu/English. Printed menus can\'t do both well.',
    solution: 'Built-in Urdu/English toggle. Add more languages anytime. No redesign needed.',
    solutionIcon: Languages,
  },
  {
    icon: Clock,
    title: 'Complex POS Training',
    description: 'Full POS systems take weeks to learn. Staff turnover means constant retraining.',
    solution: 'Menu-only dashboard. 5-minute onboarding. Staff edit prices, not inventory.',
    solutionIcon: Clock,
  },
  {
    icon: Shield,
    title: 'Commission on Orders',
    description: 'Food apps take 15–30% per order. Your margins shrink with every sale.',
    solution: 'Flat quarterly fee. Zero commission. WhatsApp ordering keeps customer relationship yours.',
    solutionIcon: Shield,
  },
]

export function ProblemSolution() {
  return (
    <section className="section-py bg-gray-50" aria-labelledby="problems-heading">
      <div className="container-brand">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="problems-heading" className="text-display-md font-bold text-dark mb-4">
            The Problem with Printed Menus — & How We Fix It
          </h2>
          <p className="text-body-lg text-gray-600">
            We talked to 50+ food business owners across Pakistan. These are the pains we heard — and the exact solutions we built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={problem.title} variant="elevated" padding="lg" className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-brand bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <problem.icon className="w-6 h-6 text-brand-teal" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-heading-sm">{problem.title}</CardTitle>
                  <CardDescription className="mt-2">{problem.description}</CardDescription>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-coral/10 flex items-center justify-center shrink-0">
                    <problem.solutionIcon className="w-4 h-4 text-brand-coral" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-medium text-body-sm text-brand-coral-dark mb-1">Solution</p>
                    <p className="text-body-sm text-gray-600">{problem.solution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}