import { Heart } from 'lucide-react'
import { footerData, siteConfig } from '@/data/content'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
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
          Made with <Heart className="w-4 h-4 text-green-400 inline mx-1" /> for the WhatsApp community
        </p>
        
        <div className="flex justify-center gap-8 text-sm text-gray-400">
          {
            footerData.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <button className="hover:text-green-400 transition-colors cursor-pointer">
                  { item.label }
                </button>
              </Link>
            ))
          }
        </div>
        
        <div className="mt-6 pt-6 border-t border-green-500/20">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name} v{siteConfig.version} • Created by {siteConfig.creator.name}
          </p>
        </div>
      </div>
    </footer>
  )
}