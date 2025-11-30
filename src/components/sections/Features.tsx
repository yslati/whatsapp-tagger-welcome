'use client'

import { useState } from 'react'
import FeatureCard from '../ui/FeatureCard'
import { useTranslations } from 'next-intl'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)
  const t = useTranslations('features')
  
  const featuresData = [
    {
      icon: "Users",
      title: t('allGroupTypes.title'),
      description: t('allGroupTypes.description'),
      stats: t('allGroupTypes.stats')
    },
    {
      icon: "Zap",
      title: t('lightningFast.title'),
      description: t('lightningFast.description'),
      stats: t('lightningFast.stats')
    },
    {
      icon: "Shield",
      title: t('privacyFirst.title'),
      description: t('privacyFirst.description'),
      stats: t('privacyFirst.stats')
    }
  ]

  return (
    <section id="features" className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 space-x-2">
            <span className="gradient-green-text">{t('title1')}</span>
            <span className="text-white">{t('title2')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isActive={activeFeature === index}
              onHover={() => setActiveFeature(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
