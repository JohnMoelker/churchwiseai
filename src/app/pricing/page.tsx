import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  Zap,
  Mail,
  CreditCard,
  Shield,
  Users,
  BookOpen,
} from "lucide-react";
import { PlaceholderAction } from "@/components/PlaceholderAction";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for ChurchWiseAI products. AI chatbot, voice agent, premium church pages, and more. From free directory listings to full AI-powered communication suites.",
};

/* ─── Data ─── */

const chatbotTiers = [
  {
    name: "Starter",
    price: "$9.95",
    period: "/mo",
    popular: false,
    action: "Will redirect to Stripe checkout for Chatbot Starter ($9.95/mo)",
    features: [
      "Premium church page on PewSearch",
      "Basic AI chatbot",
      "Hosted chat page",
      "AI Starter Kit included",
      "Verified badge",
      "100 conversations/mo",
    ],
  },
  {
    name: "Pro",
    price: "$29.95",
    period: "/mo",
    popular: true,
    action: "Will redirect to Stripe checkout for Chatbot Pro ($29.95/mo)",
    features: [
      "Everything in Starter",
      "Embeddable widget",
      "Widget customization",
      "FAQ management (50 FAQs)",
      "Document upload (5 docs)",
      "Theological lens (17 traditions)",
      "30-day analytics",
      "500 conversations/mo",
      "Priority support",
    ],
  },
  {
    name: "Suite",
    price: "$49.95",
    period: "/mo",
    popular: false,
    action: "Will redirect to Stripe checkout for Chatbot Suite ($49.95/mo)",
    features: [
      "Everything in Pro",
      "Agent marketplace",
      "Unlimited custom agents",
      "Unlimited documents",
      "2,000+ conversations/mo",
      "API access",
      "90-day analytics",
      "CSV/PDF export",
      "Remove ChurchWiseAI badge",
    ],
  },
];

const voiceTiers = [
  {
    name: "Starter",
    price: "$29.95",
    period: "/mo",
    popular: false,
    action: "Will redirect to Stripe checkout for Voice Starter ($29.95/mo)",
    features: [
      "AI-powered phone answering",
      "Custom church greeting",
      "Service time & location info",
      "Staff directory routing",
      "Call transcripts",
      "100 minutes/mo",
      "Email notifications",
    ],
  },
  {
    name: "Pro",
    price: "$59.95",
    period: "/mo",
    popular: false,
    action: "Will redirect to Stripe checkout for Voice Pro ($59.95/mo)",
    features: [
      "Everything in Starter",
      "Calendar integration (Cal.com)",
      "Planning Center sync",
      "Event registration by phone",
      "Prayer request intake",
      "Repeat caller recognition",
      "AI call summaries",
      "500 minutes/mo",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans?",
    a: "Yes, upgrade or downgrade anytime. Changes take effect immediately and billing is prorated so you only pay for what you use.",
  },
  {
    q: "Is there a contract?",
    a: "No contracts. Cancel anytime with one click from your dashboard. Your service continues until the end of your billing period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards via Stripe, including Visa, Mastercard, American Express, and Discover. All payments are securely processed.",
  },
  {
    q: "Do you offer nonprofit discounts?",
    a: "Contact us for church and nonprofit pricing. We work with congregations of all sizes and can offer custom plans for larger organizations.",
  },
  {
    q: "What about data privacy?",
    a: "Your church data is encrypted at rest and in transit, and is never shared with third parties. We follow industry best practices for data protection.",
  },
  {
    q: "Can I try before I buy?",
    a: "Yes, we offer a free 14-day trial on all plans. No credit card required to start. Try it risk-free and see the impact on your ministry.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* ── Hero Section ── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} />
            Simple, Transparent Pricing
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find the Right Plan
            <br className="hidden sm:block" /> for Your Church
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-500 leading-relaxed">
            From a free church directory listing to a full AI-powered
            communication suite. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── AI Chatbot Tiers ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <MessageSquare size={22} className="text-blue-700" />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            AI Chatbot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chatbotTiers.map((tier) => (
            <div
              key={tier.name}
              className={`card-hover relative bg-white rounded-2xl border overflow-hidden flex flex-col ${
                tier.popular
                  ? "border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/20"
                  : "border-stone-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
                    <Sparkles size={12} />
                    POPULAR
                  </div>
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-stone-900 mb-1">
                  {tier.name}
                </h3>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-stone-900">
                    {tier.price}
                  </span>
                  <span className="text-stone-500 text-sm">{tier.period}</span>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-stone-600"
                    >
                      <Check
                        size={15}
                        className="text-green-600 mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <PlaceholderAction
                  action={tier.action}
                  className={`w-full py-3 rounded-lg text-sm font-semibold cursor-pointer ${
                    tier.popular ? "btn-gold" : "btn-navy"
                  }`}
                >
                  Get Started
                </PlaceholderAction>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-stone-400 mt-6">
          All chatbot plans include a free 14-day trial.{" "}
          <Link
            href="/chatbot"
            className="text-[#D4AF37] hover:underline font-medium"
          >
            Compare features in detail
          </Link>
        </p>
      </section>

      {/* ── Voice Agent Tiers ── */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <Phone size={22} className="text-emerald-700" />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-stone-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Voice Agent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {voiceTiers.map((tier) => (
              <div
                key={tier.name}
                className="card-hover relative bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col"
              >
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-stone-900 mb-1">
                    {tier.name}
                  </h3>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-stone-900">
                      {tier.price}
                    </span>
                    <span className="text-stone-500 text-sm">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-stone-600"
                      >
                        <Check
                          size={15}
                          className="text-green-600 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <PlaceholderAction
                    action={tier.action}
                    className="w-full py-3 rounded-lg text-sm font-semibold btn-navy cursor-pointer"
                  >
                    Get Started
                  </PlaceholderAction>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-stone-400 mt-6">
            All voice plans include a free 14-day trial.{" "}
            <Link
              href="/voice"
              className="text-[#D4AF37] hover:underline font-medium"
            >
              Learn more about the Voice Agent
            </Link>
          </p>
        </div>
      </section>

      {/* ── Bundle Highlight ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden">
          {/* Gold gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-amber-500 to-[#D4AF37] p-[2px]">
            <div className="w-full h-full rounded-2xl bg-white" />
          </div>

          <div className="relative p-8 sm:p-10 bg-gradient-to-br from-amber-50/50 to-white rounded-2xl border-2 border-[#D4AF37]/30">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Best Value
              </span>
            </div>

            <div className="sm:flex sm:items-start sm:justify-between gap-8">
              <div className="flex-1 mb-6 sm:mb-0">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Voice + Chatbot Bundle
                </h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-stone-900">
                    $79.95
                  </span>
                  <span className="text-stone-500 text-sm">/mo</span>
                </div>
                <p className="text-stone-500 text-sm mb-5">
                  Save ~$10/mo vs buying separately. Get the complete AI
                  communication stack for your church.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    "Chatbot Pro features",
                    "Voice Starter features",
                    "500 conversations/mo",
                    "100 voice minutes/mo",
                    "Embed widget",
                    "Call transcripts",
                    "Widget customization",
                    "Priority support",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-stone-600"
                    >
                      <Check
                        size={15}
                        className="text-green-600 shrink-0"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:pt-8 shrink-0">
                <PlaceholderAction
                  action="Will redirect to Stripe checkout for Voice+Chatbot Bundle ($79.95/mo)"
                  className="btn-gold px-8 py-3.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Get the Bundle
                  <ArrowRight size={16} />
                </PlaceholderAction>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Premium Pages ── */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                <FileText size={22} className="text-violet-700" />
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Premium Church Page
              </h2>
            </div>

            <div className="card-hover bg-white rounded-2xl border border-stone-200 p-7 sm:p-8">
              <div className="sm:flex sm:items-start sm:justify-between gap-6">
                <div className="flex-1 mb-6 sm:mb-0">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-stone-900">
                      $9.95
                    </span>
                    <span className="text-stone-500 text-sm">/mo</span>
                    <span className="text-stone-300 mx-2">|</span>
                    <span className="text-xl font-bold text-stone-700">
                      $99.50
                    </span>
                    <span className="text-stone-500 text-sm">/yr</span>
                    <span className="ml-2 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                      Save ~17%
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {[
                      "SEO-optimized page on PewSearch",
                      "240K+ church directory exposure",
                      "Verified badge",
                      "Custom photos and descriptions",
                      "Service times, contact info, staff",
                      "Analytics dashboard",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-stone-600"
                      >
                        <Check
                          size={15}
                          className="text-green-600 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0">
                  <PlaceholderAction
                    action="Will redirect to Stripe checkout for Premium Page ($9.95/mo)"
                    className="btn-navy px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                  >
                    Claim Your Page
                    <ArrowRight size={16} />
                  </PlaceholderAction>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Starter Kit ── */}
      <section id="ai-kit" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <BookOpen size={22} className="text-amber-700" />
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                AI Starter Kit
              </h2>
            </div>

            <div className="card-hover bg-white rounded-2xl border border-stone-200 p-7 sm:p-8">
              <div className="sm:flex sm:items-start sm:justify-between gap-6">
                <div className="flex-1 mb-6 sm:mb-0">
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-stone-900">
                      $4.95
                    </span>
                    <span className="text-stone-500 text-sm ml-1">
                      one-time
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-5 max-w-md">
                    The FAITH Framework — your church&apos;s guide to
                    implementing AI responsibly. Practical templates, ethical
                    guidelines, and a step-by-step roadmap.
                  </p>

                  <ul className="space-y-2.5">
                    {[
                      "FAITH Framework implementation guide",
                      "AI ethics checklist for churches",
                      "Congregation communication templates",
                      "Staff training materials",
                      "Instant digital download",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-stone-600"
                      >
                        <Check
                          size={15}
                          className="text-green-600 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0">
                  <PlaceholderAction
                    action="Will redirect to Stripe Payment Link for AI Starter Kit ($4.95)"
                    className="btn-gold px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                  >
                    Buy the Kit
                    <ArrowRight size={16} />
                  </PlaceholderAction>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
          <h2
            className="text-2xl sm:text-3xl font-bold text-stone-900 text-center mb-14"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-base font-semibold text-stone-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-stone-100 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-8 py-14 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Need Help Choosing?
            </h2>
            <p className="text-stone-400 mb-8 leading-relaxed max-w-xl mx-auto">
              Our team is happy to walk you through the options and find the
              perfect fit for your church.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-stone-500">
              <Mail size={15} />
              <a
                href="mailto:hello@churchwiseai.com"
                className="hover:text-stone-300 transition-colors"
              >
                hello@churchwiseai.com
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-stone-600" />
                256-bit SSL encryption
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard size={14} className="text-stone-600" />
                Powered by Stripe
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-stone-600" />
                Trusted by churches nationwide
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
