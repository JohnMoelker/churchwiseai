/**
 * pricing.ts — All ChurchWiseAI pricing tiers.
 *
 * VERTICAL TEMPLATE: Fork this repo, swap this file for your vertical's
 * pricing structure. Keep the same shape — components read from this file.
 */

export type PricingTier = {
  id: string;
  name: string;
  price: number | null;       // null = contact for pricing
  priceSuffix: string;        // '/mo', '/one-time', etc.
  annualPrice?: number;       // optional annual (2 months free pattern)
  description: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;      // true = the recommended tier
  badge?: string;             // e.g. "Most Popular", "Best Value"
  accentColor?: string;       // Tailwind gradient classes
};

export type ProductLine = {
  id: string;
  name: string;
  description: string;
  tiers: PricingTier[];
};

// ── Voice Agent ────────────────────────────────────────────────
export const voicePricing: PricingTier[] = [
  {
    id: 'voice-starter',
    name: 'Voice Starter',
    price: 29.95,
    priceSuffix: '/mo',
    description: 'Perfect for small churches that need a 24/7 phone presence.',
    features: [
      '24/7 AI phone answering',
      'Custom church greeting',
      'Service times & directions',
      'Basic prayer request capture',
      'Email summaries',
      'Up to 100 calls/month',
    ],
    notIncluded: [
      'Planning Center integration',
      'Call transcripts',
      'Custom workflows',
    ],
    cta: 'Get Voice Starter',
    ctaHref: '/contact?plan=voice-starter',
    accentColor: 'from-[#D4AF37] to-amber-600',
  },
  {
    id: 'voice-pro',
    name: 'Voice Pro',
    price: 59.95,
    priceSuffix: '/mo',
    description: 'For growing churches that want full automation and integrations.',
    features: [
      'Everything in Starter',
      'Unlimited calls',
      'Full call transcripts',
      'Planning Center sync',
      'Cal.com scheduling',
      'Custom call workflows',
      'Visitor follow-up automation',
      'Priority support',
    ],
    cta: 'Get Voice Pro',
    ctaHref: '/contact?plan=voice-pro',
    highlighted: true,
    badge: 'Most Popular',
    accentColor: 'from-[#D4AF37] to-amber-600',
  },
];

// ── Chatbot ────────────────────────────────────────────────────
export const chatbotPricing: PricingTier[] = [
  {
    id: 'chat-starter',
    name: 'Chat Starter',
    price: 9.95,
    priceSuffix: '/mo',
    description: 'A simple AI chatbot for your church website.',
    features: [
      'Embeddable chat widget',
      'Church FAQ answering',
      'Service times & location',
      '"Powered by ChurchWiseAI" badge',
      'Up to 200 conversations/month',
    ],
    notIncluded: [
      'Custom theological lens',
      'RAG knowledge base',
      'Remove branding',
    ],
    cta: 'Get Chat Starter',
    ctaHref: '/contact?plan=chat-starter',
    accentColor: 'from-blue-500 to-blue-700',
  },
  {
    id: 'chat-pro',
    name: 'Chat Pro',
    price: 29.95,
    priceSuffix: '/mo',
    description: 'AI that knows your church inside-out.',
    features: [
      'Everything in Starter',
      'Custom RAG knowledge base',
      'Theological tradition support',
      'Unlimited conversations',
      'Visitor capture & follow-up',
      'Hosted chat page',
    ],
    cta: 'Get Chat Pro',
    ctaHref: '/contact?plan=chat-pro',
    highlighted: true,
    badge: 'Most Popular',
    accentColor: 'from-blue-500 to-blue-700',
  },
  {
    id: 'chat-suite',
    name: 'Chat Suite',
    price: 49.95,
    priceSuffix: '/mo',
    description: 'Full platform with white-label option.',
    features: [
      'Everything in Pro',
      'Remove ChurchWiseAI branding',
      'Multiple church locations',
      'Custom domain',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Get Chat Suite',
    ctaHref: '/contact?plan=chat-suite',
    accentColor: 'from-blue-500 to-blue-700',
  },
];

// ── Bundle ─────────────────────────────────────────────────────
export const bundlePricing: PricingTier[] = [
  {
    id: 'bundle',
    name: 'Voice + Chat Bundle',
    price: 79.95,
    priceSuffix: '/mo',
    description: 'The complete AI communication platform for your church.',
    features: [
      'Voice Pro (all features)',
      'Chat Pro (all features)',
      'Unified conversation history',
      'Cross-channel visitor tracking',
      'Priority onboarding',
      'Dedicated support channel',
    ],
    cta: 'Get the Bundle',
    ctaHref: '/contact?plan=bundle',
    highlighted: true,
    badge: 'Best Value',
    accentColor: 'from-[#D4AF37] via-amber-500 to-blue-600',
  },
];

// ── One-off Products ───────────────────────────────────────────
export const addOnPricing: PricingTier[] = [
  {
    id: 'premium-page',
    name: 'Premium Church Page',
    price: 9.95,
    priceSuffix: '/mo',
    description:
      'A beautiful, SEO-optimized church page on PewSearch — 240K+ listings strong.',
    features: [
      'Branded church profile page',
      'SEO-optimized listing',
      'Service times & contact info',
      'Events & ministries section',
      'Photo gallery',
      'Priority placement in directory',
    ],
    cta: 'Claim Your Page',
    ctaHref: 'https://pewsearch.com/claim',
    accentColor: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'ai-starter-kit',
    name: 'AI Starter Kit',
    price: 4.95,
    priceSuffix: ' one-time',
    description: 'The FAITH Framework — your church\'s guide to implementing AI responsibly.',
    features: [
      'FAITH Framework PDF guide',
      'AI policy templates',
      'Staff training checklist',
      'Theological considerations',
      'Vendor evaluation rubric',
    ],
    cta: 'Get the Kit',
    ctaHref: '/contact?plan=ai-kit',
    accentColor: 'from-amber-500 to-amber-700',
  },
];

// ── All product lines (for pricing page) ──────────────────────
export const productLines: ProductLine[] = [
  {
    id: 'chatbot',
    name: 'AI Church Chatbot',
    description: 'Embed on your website. Answer questions with your church\'s actual knowledge.',
    tiers: chatbotPricing,
  },
  {
    id: 'voice',
    name: 'AI Phone Receptionist',
    description: 'Never miss a call. 24/7 AI answering with prayer requests and visitor capture.',
    tiers: voicePricing,
  },
  {
    id: 'bundle',
    name: 'Voice + Chat Bundle',
    description: 'Get both AI products at a significant discount.',
    tiers: bundlePricing,
  },
  {
    id: 'addons',
    name: 'Add-ons & One-time',
    description: 'Enhance your presence with a Premium Church Page or AI guide.',
    tiers: addOnPricing,
  },
];
