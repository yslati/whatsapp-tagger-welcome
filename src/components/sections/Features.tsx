'use client'

import { useState } from 'react'
import { featuresData } from '@/data/content'
import FeatureCard from '../ui/FeatureCard'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 space-x-2">
            <span className="gradient-green-text">Powerful</span>
            <span className="text-white">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets intuitive design. Experience the future of WhatsApp group management.
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
