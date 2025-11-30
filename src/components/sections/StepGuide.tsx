'use client'

import { useState } from 'react'
import StepCard from '../ui/StepCard'
import { useTranslations } from 'next-intl'

export default function StepGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const t = useTranslations('stepGuide')
  
  const stepsData = [
    {
      title: t('steps.install.title'),
      description: t('steps.install.description'),
      icon: "Download",
      gradient: "from-green-600 to-green-700"
    },
    {
      title: t('steps.open.title'),
      description: t('steps.open.description'),
      icon: "Globe",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: t('steps.select.title'),
      description: t('steps.select.description'),
      icon: "Users",
      gradient: "from-green-700 to-green-800"
    },
    {
      title: t('steps.click.title'),
      description: t('steps.click.description'),
      icon: "Zap",
      gradient: "from-green-800 to-green-900"
    }
  ]

  return (
    <section id="guide" className="relative z-10 py-32 bg-linear-to-r from-gray-900/50 to-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {t('title1')}
            <span className="gradient-green-text"> {t('title2')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
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