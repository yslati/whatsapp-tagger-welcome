'use client'

import { useState } from 'react'
import { stepsData } from '@/data/content'
import StepCard from '../ui/StepCard'

export default function StepGuide() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section id="guide" className="relative z-10 py-32 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get Started in
            <span className="gradient-green-text"> 60 Seconds</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our streamlined setup process and start tagging everyone instantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isActive={currentStep === index}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}