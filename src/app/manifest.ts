import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/content'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'WhatsApp everyone',
    description: siteConfig.description,
    start_url: '/en',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/icon16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
      {
        src: '/og-image.png',
        sizes: '440x280',
        type: 'image/png',
      }
    ],
  }
}