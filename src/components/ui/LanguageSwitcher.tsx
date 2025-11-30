'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

type LanguageCode = 'en' | 'es' | 'fr'

interface Language {
  code: LanguageCode
  label: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = useMemo(
    () => languages.find(lang => lang.code === locale) || languages[0],
    [locale]
  )

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLanguageChange = useCallback((newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '') || '/'
    const newPathname = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    
    router.push(newPathname)
    setIsOpen(false)
  }, [pathname, router])

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 focus:outline-none rounded-lg glass-effect hover:bg-white/10 transition-all text-xs sm:text-sm"
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="uppercase font-medium">{locale}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 glass-effect !bg-black border border-white/40 rounded-md shadow-lg overflow-hidden z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left ${
                locale === lang.code ? 'bg-green-500/10 text-green-400' : 'text-gray-300'
              }`}
              role="menuitem"
              aria-current={locale === lang.code ? 'true' : undefined}
            >
              <span className="text-xl" aria-hidden="true">{lang.flag}</span>
              <div>
                <div className="font-medium text-sm">{lang.label}</div>
                <div className="text-xs text-gray-400 uppercase">{lang.code}</div>
              </div>
              {locale === lang.code && (
                <span className="ml-auto text-green-400" aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}