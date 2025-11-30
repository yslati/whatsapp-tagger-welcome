export const whatsappWebUrl = "https://web.whatsapp.com";
export const whatsappExtensionUrl = "https://chromewebstore.google.com/detail/whatsapp-everyone-tagger/afncdbgiiinphhonknflambmlobgpdlo";

export const siteConfig = {
  name: "WhatsApp Everyone Tagger",
  version: "2.2.4",
  description: "The most advanced WhatsApp group tagging extension. Works in any language, any group size, with zero configuration.",
  url: "https://www.tageveryone.online/",
  creator: {
    name: "Yassin Slati",
    email: "contact@slati.me",
    portfolio: "https://slati.me",
    github: "https://github.com/yslati/whatsapp-everyone-tagger"
  }
}

export const navigationLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#guide", label: "Guide" },
  { href: "/privacy-policy", label: "Privacy Policy" }
]

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export const statsData: Stat[] = [
  { label: "Zero configuration", value: "One-Click", icon: "MousePointer2" },
  { label: "Active Users", value: "4K+", icon: "Users" },
  { label: "Groups Tagged", value: "2M+", icon: "MessageCircle" },
  { label: "Time Saved", value: "1000hrs", icon: "Zap" }
]

export type Feature = {
  icon: string
  title: string
  description: string
  stats: string
}

export const featuresData: Feature[] = [
  {
    icon: "Users",
    title: "All Group Types",
    description: "Compatible with regular groups, communities, and enterprise groups up to 4000+ members",
    stats: "4k+ Members"
  },
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Tag hundreds of members in seconds with our optimized algorithm",
    stats: "< 2 Seconds"
  },
  {
    icon: "Shield",
    title: "Privacy First",
    description: "Zero data collection, end-to-end privacy, open source and transparent",
    stats: "100% Private"
  }
]

export type Step = {
  icon: string;
  gradient: string;
  title: string;
  description: string;
}

export const stepsData: Step[] = [
  {
    title: "Install Extension",
    description: "Add WhatsApp Everyone Tagger from Chrome Web Store",
    icon: "Download",
    gradient: "from-green-600 to-green-700"
  },
  {
    title: "Open WhatsApp Web",
    description: "Navigate to web.whatsapp.com in your browser",
    icon: "Globe",
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Select Group Chat",
    description: "Open any group where you want to tag everyone",
    icon: "Users",
    gradient: "from-green-700 to-green-800"
  },
  {
    title: "Click @everyone",
    description: "Find the magical button next to send",
    icon: "Zap",
    gradient: "from-green-800 to-green-900"
  }
]

export const footerData = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Portfolio',
    href: siteConfig.creator.portfolio,
  },
  {
    label: 'GitHub',
    href: siteConfig.creator.github,
  },
  {
    label: 'Contact',
    href: `mailto:${siteConfig.creator.email}`,
  },
]