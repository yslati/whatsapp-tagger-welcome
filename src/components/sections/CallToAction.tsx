import { whatsappWebUrl } from '@/data/content'
import { Heart, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function CallToAction() {
  const t = useTranslations('cta')
  
  return (
    <section className="relative z-10 py-32 bg-linear-to-r from-green-900/30 to-green-800/20 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <div className="group inline-flex items-center gap-2 bg-linear-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/20 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-green-400 group-hover:text-red-400 group-hover:fill-red-400 transition-all duration-100" />
            <span className="text-sm font-medium">{t('badge')}</span>
          </div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
          {t('title1')}
          <br />
          <span className="gradient-green-text">
            {t('title2')}
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        
        <Link href={whatsappWebUrl} target='_blank'>
          <button className="group cursor-pointer gradient-green hover:from-green-400 hover:to-green-500 px-16 py-6 rounded-3xl font-bold text-xl text-white shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover-lift">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 group-hover:fill-amber-300 group-hover:text-amber-300 transition-all duration-100" />
              {t('button')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  )
}