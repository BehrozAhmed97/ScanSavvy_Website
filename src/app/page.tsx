import { Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { PlatformHighlights } from '@/components/sections/PlatformHighlights'
import { VerticalSolutions } from '@/components/sections/VerticalSolutions'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <PlatformHighlights />
      <VerticalSolutions />
      <Testimonials />
      <CTA />
    </>
  )
}