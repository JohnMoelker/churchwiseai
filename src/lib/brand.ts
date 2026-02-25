/**
 * brand.ts — Single source of truth for ChurchWiseAI branding.
 *
 * VERTICAL TEMPLATE: Fork this repo, swap this file + pricing.ts,
 * change the logo/favicon → instant new WiseAI vertical.
 *
 * Future verticals: FuneralWiseAI, ShopWiseAI, VetWiseAI, LegalWiseAI
 */

export const brand = {
  // Core identity
  name: 'ChurchWiseAI',
  shortName: 'CW',
  tagline: 'AI-Powered Ministry Tools',
  description:
    'Answer every call. Engage every visitor. Grow your ministry. ChurchWiseAI gives your church a 24/7 AI voice agent, intelligent chatbot, and digital presence.',
  domain: 'churchwiseai.com',
  siteUrl: 'https://churchwiseai.com',

  // Contact
  email: 'hello@churchwiseai.com',
  supportEmail: 'support@churchwiseai.com',
  phone: '+1 (844) 123-4567',

  // Colors
  colors: {
    primary: '#D4AF37',        // Sacred Gold
    primaryLight: '#e8cc6a',
    primaryDark: '#a07d1c',
    secondary: '#1B365D',      // Navy
    secondaryLight: '#2b6cb0',
    background: '#FEFCF8',     // Cream
    foreground: '#1c1917',
  },

  // Stats (shown in hero/trust sections)
  stats: [
    { value: '240K+', label: 'Churches in Directory' },
    { value: '26K+', label: 'Sermon Resources' },
    { value: '17', label: 'Theological Traditions' },
  ],

  // Navigation
  navLinks: [
    { href: '/voice', label: 'Voice Agent' },
    { href: '/chatbot', label: 'Chatbot' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/care', label: 'Care' },
    { href: '/demo', label: 'Demo' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],

  // Ecosystem links (footer + cross-promotion)
  ecosystem: {
    pewsearch: {
      name: 'PewSearch',
      url: 'https://pewsearch.com',
      tagline: 'Find Your Church',
    },
    illustrateTheWord: {
      name: 'IllustrateTheWord',
      url: 'https://illustratetheword.com',
      tagline: 'Sermon Illustrations',
    },
  },

  // Social
  social: {
    twitter: 'https://twitter.com/churchwiseai',
    linkedin: 'https://linkedin.com/company/churchwiseai',
    facebook: 'https://facebook.com/churchwiseai',
  },

  // Legal
  foundedYear: 2024,
  company: 'ChurchWiseAI LTD',
} as const;

export type Brand = typeof brand;
