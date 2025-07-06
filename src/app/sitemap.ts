import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    // {
    //   url: `${baseUrl}/terms`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ]
}