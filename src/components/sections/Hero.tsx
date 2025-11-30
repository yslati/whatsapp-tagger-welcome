import { Sparkles, ArrowRight, MessageCircle, ChevronDown, Download } from 'lucide-react'
import { siteConfig, whatsappExtensionUrl, whatsappWebUrl } from '@/data/content'
import StatsGrid from '../ui/StatsGrid'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const tInfo = useTranslations('info')
  
  const statsData = [
    { label: t('stats.zeroConfig'), value: t('stats.oneClick'), icon: "MousePointer2" },
    { label: t('stats.activeUsers'), value: "4K+", icon: "Users" },
    { label: t('stats.groupsTagged'), value: "2M+", icon: "MessageCircle" },
    { label: t('stats.timeSaved'), value: "1000hrs", icon: "Zap" }
  ]
  
  return (
    <section className="relative z-10 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="hero-fade-in">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">{t('version')} {siteConfig.version} • {t('badge')}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              {t('title1')}
            </span>
            <br />
            <span className="text-white">
              {t('title2')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {tInfo('description')} {t('subtitle')}
            <span className="text-green-400 font-semibold"> {t('subtitleHighlight')}</span>.
          </p>

          <StatsGrid stats={statsData} />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={whatsappWebUrl} target='_blank'>
              <button className="group cursor-pointer relative gradient-green hover:from-green-400 hover:to-green-500 px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover-lift">
                <div className="absolute inset-0 bg-linear-to-r from-green-400 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative flex items-center gap-3 text-sm md:text-base">
                  <MessageCircle className="w-6 h-6" />
                  {t('startNow')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
            
            <Link href={whatsappExtensionUrl} target="_blank">
              <button className="group cursor-pointer glass-effect hover:bg-white/20 px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg text-white hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center text-sm md:text-base">
                    <Download className="w-5 h-5" />
                  </div>
                  {t('downloadExtension')}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-green-400/60" />
      </div>

    </section>
  )
}