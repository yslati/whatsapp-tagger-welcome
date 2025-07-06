import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import CallToAction from '@/components/sections/CallToAction'
import Features from '@/components/sections/Features'
import Hero from '@/components/sections/Hero'
import StepGuide from '@/components/sections/StepGuide'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navigation />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Features />
          <StepGuide />
          <CallToAction />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}