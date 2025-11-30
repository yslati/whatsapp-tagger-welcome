import { siteConfig, navigationLinks } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function Navigation() {
  const locale = useLocale()
  return (
    <nav className="relative z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image src={'/logo.png'} alt='Logo' className='select-none cursor-pointer' width={40} height={40} />
              <span className="hidden sm:block text-lg lg:text-xl font-bold gradient-green-text">
                {siteConfig.name}
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`} 
                className="hover:text-green-400 transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link href={`mailto:${siteConfig.creator.email}`}>
              <button className="cursor-pointer gradient-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all text-xs sm:text-sm font-medium">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}