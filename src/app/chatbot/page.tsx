import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  BookOpen,
  Database,
  Globe,
  Palette,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { PlaceholderAction } from "@/components/PlaceholderAction";

export const metadata: Metadata = {
  title: "AI Chatbot",
  description:
    "Embed an AI chatbot on your church website that answers visitor questions using your actual church information — service times, beliefs, events, staff, and more. Powered by ChurchWiseAI.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Embed Anywhere",
    description:
      "Add to any website with a single line of code. Works with WordPress, Squarespace, Wix, and more.",
  },
  {
    icon: BookOpen,
    title: "Theological Lens",
    description:
      "Answers are grounded in your denomination's theology. Choose from 17 traditions.",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    description:
      "Upload documents, add FAQs, and let the AI learn your church's unique information.",
  },
  {
    icon: Globe,
    title: "Hosted Chat Page",
    description:
      "Get a shareable link to a full-page chat experience — perfect for social media and email.",
  },
  {
    icon: Palette,
    title: "Customizable Widget",
    description:
      "Match your church's branding — colors, position, welcome message, avatar.",
  },
  {
    icon: ShieldCheck,
    title: "Powered by ChurchWiseAI",
    description:
      "Every response is theologically grounded and hallucination-resistant.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "$9.95",
    period: "/mo",
    popular: false,
    action: "Will redirect to Stripe checkout for Chatbot Starter ($9.95/mo)",
    features: [
      "Premium church page",
      "Basic chatbot",
      "Hosted chat page",
      "AI Starter Kit",
      "Verified badge",
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
      "FAQ management (50 FAQs)",
      "Document upload (5 docs)",
      "30-day analytics",
      "Embed widget",
      "Widget customization",
      "Theological lens",
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
      "Unlimited docs",
      "2,000+ conversations/mo",
      "API access",
      "90-day analytics",
      "CSV/PDF export",
    ],
  },
];

type ComparisonValue = boolean | string;

const comparisonRows: { feature: string; starter: ComparisonValue; pro: ComparisonValue; suite: ComparisonValue }[] = [
  { feature: "Premium Page", starter: true, pro: true, suite: true },
  { feature: "Basic Chatbot", starter: true, pro: true, suite: true },
  { feature: "Hosted Chat", starter: true, pro: true, suite: true },
  { feature: "FAQ Management", starter: false, pro: "50 FAQs", suite: "Unlimited" },
  { feature: "Document Upload", starter: false, pro: "5 docs", suite: "Unlimited" },
  { feature: "Analytics", starter: false, pro: "30-day", suite: "90-day" },
  { feature: "Embed Widget", starter: false, pro: true, suite: true },
  { feature: "Customization", starter: false, pro: true, suite: true },
  { feature: "Theological Lens", starter: false, pro: true, suite: true },
  { feature: "Conversations/mo", starter: "100", pro: "500", suite: "2,000+" },
  { feature: "Marketplace", starter: false, pro: false, suite: true },
  { feature: "Custom Agents", starter: false, pro: false, suite: "Unlimited" },
  { feature: "API Access", starter: false, pro: false, suite: true },
  { feature: "Priority Support", starter: false, pro: true, suite: true },
];

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return <Check size={18} className="text-green-600 mx-auto" />;
  }
  if (value === false) {
    return <X size={18} className="text-stone-300 mx-auto" />;
  }
  return <span className="text-sm text-stone-700">{value}</span>;
}

export default function ChatbotPage() {
  return (
    <div className="pt-16">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-40 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Church&apos;s Intelligent Chatbot
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100/80 mb-10 leading-relaxed">
            Embed an AI chatbot on your website that answers questions using your
            church&apos;s actual information — service times, beliefs, events,
            staff, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PlaceholderAction
              action="Will redirect to Stripe checkout for Chatbot Starter"
              className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Get Started
              <ArrowRight size={18} />
            </PlaceholderAction>
            <Link
              href="/pricing"
              className="text-blue-200 hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
            >
              See all plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Demo ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <VideoPlaceholder
            title="Chatbot Widget Demo"
            description="See how the ChurchWiseAI chatbot answers real visitor questions on a church website."
          />
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Smart, Theological, and Uniquely Yours
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Everything your church needs to engage visitors online, powered by
            AI that understands your theology and your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-hover relative bg-white rounded-xl border border-stone-200 p-8 overflow-hidden card-accent"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── "Powered by ChurchWiseAI" Badge Preview ── */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trusted Branding on Every Widget
            </h2>
            <p className="text-stone-500 text-sm max-w-lg mx-auto">
              Every chatbot includes the &quot;Powered by ChurchWiseAI&quot;
              badge so visitors know they&apos;re getting theologically grounded
              answers.
            </p>
          </div>

          {/* Mock chat widget corner */}
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
              {/* Widget header */}
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Grace Community Church
                  </p>
                  <p className="text-blue-200 text-xs">Online now</p>
                </div>
              </div>

              {/* Mock messages */}
              <div className="px-5 py-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-md max-w-[240px]">
                    What time is the Sunday service?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-stone-100 text-stone-800 text-sm px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[240px]">
                    We have services at 9:00 AM and 11:00 AM every Sunday. The
                    9 AM service is traditional and the 11 AM is contemporary.
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="border-t border-stone-100 px-5 py-3 flex items-center justify-center gap-1.5">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center">
                  <span className="text-white text-[7px] font-bold">CW</span>
                </div>
                <span className="text-[11px] text-stone-400">
                  Powered by ChurchWiseAI
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-stone-400 mt-6 max-w-md mx-auto">
            Starter and Pro plans include the &quot;Powered by ChurchWiseAI&quot;
            badge. Suite plan: badge removable.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Choose Your Plan
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Start with a Starter plan and upgrade as your ministry grows. All
            plans include a free 14-day trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card-hover relative bg-white rounded-2xl border overflow-hidden flex flex-col ${
                tier.popular
                  ? "border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/20"
                  : "border-stone-200"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
                    <Sparkles size={12} />
                    POPULAR
                  </div>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-stone-900 mb-1">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-stone-900">
                    {tier.price}
                  </span>
                  <span className="text-stone-500 text-sm">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-stone-600"
                    >
                      <Check
                        size={16}
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
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
          <h2
            className="text-2xl sm:text-3xl font-bold text-stone-900 text-center mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Compare Plans
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[540px] text-left">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 px-4 text-sm font-semibold text-stone-900 w-[40%]">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-stone-900 text-center w-[20%]">
                    Starter
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-center w-[20%]">
                    <span className="text-stone-900">Pro</span>
                    <span className="ml-1.5 text-[10px] bg-[#D4AF37] text-white px-1.5 py-0.5 rounded-full font-semibold uppercase">
                      Popular
                    </span>
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-stone-900 text-center w-[20%]">
                    Suite
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-stone-100 ${
                      i % 2 === 0 ? "bg-stone-50/50" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 text-sm text-stone-700">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <ComparisonCell value={row.pro} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <ComparisonCell value={row.suite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-stone-100 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-8 py-14 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Engage Every Visitor?
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto mb-8">
              Give your church a chatbot that knows your community, speaks your
              theology, and never misses a question.
            </p>
            <PlaceholderAction
              action="Will redirect to Stripe checkout for Chatbot Starter"
              className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Get Started
              <ArrowRight size={18} />
            </PlaceholderAction>
            <p className="text-sm text-stone-500 mt-4">
              Free 14-day trial on all plans. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
