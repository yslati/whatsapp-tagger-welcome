import { Heart } from 'lucide-react'
import { siteConfig } from '@/data/content'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')
  
  const footerData = [
    {
      label: t('privacyPolicy'),
      href: '/privacy-policy',
    },
    {
      label: t('portfolio'),
      href: siteConfig.creator.portfolio,
    },
    {
      label: t('github'),
      href: siteConfig.creator.github,
    },
    {
      label: t('contact'),
      href: `mailto:${siteConfig.creator.email}`,
    },
  ]
  
  return (
    <footer className="relative z-10 backdrop-blur-xl bg-black/50 border-t border-green-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <span className="text-xl font-bold gradient-green-text">
            {siteConfig.name}
          </span>
        </div>
        
        <p className="text-gray-400 mb-6">
          {t('madeWith')} <Heart className="w-4 h-4 text-green-400 inline mx-1" /> {t('forCommunity')}
        </p>
        
        <div className="flex justify-center gap-8 text-sm text-gray-400">
          {
            footerData.map((item, index) => {
              const isInternalLink = item.href.startsWith('/')
              const href = isInternalLink ? `/${locale}${item.href}` : item.href
              return (
                <Link key={index} href={href} target={isInternalLink ? undefined : "_blank"}>
                  <button className="hover:text-green-400 transition-colors cursor-pointer">
                    { item.label }
                  </button>
                </Link>
              )
            })
          }
        </div>
        
        <div className="mt-6 pt-6 border-t border-green-500/20">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name} v{siteConfig.version} • {t('copyright')} {siteConfig.creator.name}
          </p>
        </div>
      </div>
    </footer>
  )
}