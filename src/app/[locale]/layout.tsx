import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../globals.css";
import { siteConfig } from "@/data/content";
import GoogleAnalytics from "@/components/tools/GoogleAnalytics";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/tools/GoogleTagManager";
import MicrosoftClarity from "@/components/tools/MicrosoftClarity";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'WhatsApp Everyone Tagger - Tag All Group Members Instantly',
  description: 'The most advanced WhatsApp group tagging extension. Works in any language, any group size, with zero configuration. Your group management just got 10x easier.',
  keywords: 'WhatsApp, group tagging, extension, Chrome, group management, tag everyone',
  authors: [{ name: siteConfig.creator.name, url: siteConfig.creator.portfolio }],
  creator: siteConfig.creator.name,
  icons: {
    icon: '/logo.png',
    shortcut: '/icon16.png',
  },
  openGraph: {
    title: 'WhatsApp Everyone Tagger - Tag All Group Members Instantly',
    description: 'The most advanced WhatsApp group tagging extension. Works in any language, any group size, with zero configuration.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 440,
        height: 280,
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Everyone Tagger - Tag All Group Members Instantly',
    description: 'The most advanced WhatsApp group tagging extension. Works in any language, any group size, with zero configuration.',
    images: ['/og-image.png'],
    creator: '@slt_yassin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <GoogleTagManagerHead />
        <MicrosoftClarity />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} >
          {children}
        </NextIntlClientProvider>
        <GoogleTagManagerBody />
      </body>
    </html>
  );
}
