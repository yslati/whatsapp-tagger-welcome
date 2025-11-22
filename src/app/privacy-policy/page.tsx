import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { Shield } from 'lucide-react'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/20 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              WhatsApp Everyone Tagger does not collect, store, or transmit any user data.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              The extension operates entirely locally within your browser and only interacts with the WhatsApp Web interface when you click the "Tag Everyone" button.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              No information is sent to any external servers, and no analytics or tracking is implemented.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              The extension requires permissions to access the WhatsApp Web page only to identify group members and insert @ mentions in the text input field.
            </p>

            <div className="pt-8 border-t border-green-500/20">
              <p className="text-sm text-gray-400">
                Last updated: April 2025
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