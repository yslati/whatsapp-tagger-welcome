'use client'

import { useState, useEffect, useMemo } from 'react'

interface ParticleProps {
  id: number
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

export function AnimatedBackground({ particleCount = 30 }: { particleCount?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  const particles = useMemo<ParticleProps[]>(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${(i * 7.3) % 100}%`,
      top: `${(i * 11.7) % 100}%`,
      animationDelay: `${(i * 0.1) % 3}s`,
      animationDuration: `${2 + ((i * 0.13) % 3)}s`
    }))
  , [particleCount])

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-green-800/10 to-black"></div>
      
      {mounted && (
        <>
          <div 
            className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl transition-all duration-100 ease-out"
            style={{
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-green-400/15 rounded-full blur-3xl transition-all duration-150 ease-out"
            style={{
              right: mousePosition.x / 15,
              bottom: mousePosition.y / 15,
              transform: 'translate(50%, 50%)'
            }}
          />
          
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}
