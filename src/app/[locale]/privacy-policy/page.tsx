import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'

const PrivacyPolicyPage = () => {
  const t = useTranslations('privacyPolicy');
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/20 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6">
            {['intro', 'paragraph1', 'paragraph2', 'paragraph3'].map((key) => (
              <p key={key} className="text-lg text-gray-300 leading-relaxed">
                {t(key)}
              </p>
            ))}

            <div className="pt-8 border-t border-green-500/20">
              <p className="text-sm text-gray-400">
                {t('lastUpdated')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 
export default PrivacyPolicyPage;