import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Heart,
  UserPlus,
  Clock,
  PhoneForwarded,
  FileText,
  ArrowRight,
  Check,
  Sparkles,
  Shield,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { PlaceholderAction } from "@/components/PlaceholderAction";
import { RoiCalculator } from "./RoiCalculator";

export const metadata: Metadata = {
  title: "Voice Agent",
  description:
    "AI phone receptionist for churches. Answer every call 24/7 with prayer request intake, visitor information, service times, smart call routing, and full transcripts.",
};

const features = [
  {
    icon: Phone,
    title: "24/7 Call Answering",
    description:
      "Never send a caller to voicemail again. Your AI answers instantly, day or night.",
  },
  {
    icon: Heart,
    title: "Prayer Request Intake",
    description:
      "Callers can share prayer requests that are transcribed and forwarded to your prayer team.",
  },
  {
    icon: UserPlus,
    title: "Visitor Information",
    description:
      "Capture visitor details, answer questions about your church, and make a great first impression.",
  },
  {
    icon: Clock,
    title: "Service Times & Directions",
    description:
      "Instantly provide accurate service times, address, and directions to your church.",
  },
  {
    icon: PhoneForwarded,
    title: "Smart Call Routing",
    description:
      "Route urgent calls to the pastor or staff. Set availability schedules and after-hours behavior.",
  },
  {
    icon: FileText,
    title: "Call Transcripts & Recordings",
    description:
      "Every call is transcribed and recorded. Review conversations, track prayer requests, monitor quality.",
  },
];

const starterFeatures = [
  "200 calls/mo",
  "24/7 answering",
  "Prayer requests",
  "Visitor capture",
  "Call transcripts",
  "Service times",
];

const proFeatures = [
  "Unlimited calls",
  "Everything in Starter",
  "Custom AI personality",
  "Multi-language support",
  "Planning Center integration",
  "Priority support",
];

export default function VoicePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Gold-to-amber gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(212,175,55,0.15) 0%, rgba(217,119,6,0.05) 50%, transparent 80%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-8">
            <Phone size={14} />
            AI Voice Agent
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Never Miss Another Call
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 leading-relaxed mb-10">
            Your church&apos;s AI phone receptionist answers every call 24/7 —
            handling prayer requests, visitor questions, service times, and more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PlaceholderAction
              action="Will redirect to Stripe checkout for Voice Starter"
              className="btn-gold btn-shimmer px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Get Started
              <ArrowRight size={18} />
            </PlaceholderAction>
            <Link
              href="/pricing"
              className="text-stone-300 hover:text-white text-base font-medium underline underline-offset-4 decoration-stone-600 hover:decoration-white transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video Demo ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Hear It in Action
            </h2>
            <p className="text-stone-500 text-lg">
              Listen to a real AI-powered church phone call.
            </p>
          </div>
          <VideoPlaceholder
            title="Voice Agent Demo Call"
            description="Listen to a real AI-powered church phone call — prayer request intake, service times, and visitor greeting."
          />
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Everything a Church Receptionist Does — Powered by AI
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              From answering the phone to capturing visitor details, our AI
              handles it all with the warmth and care your callers expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-hover bg-white rounded-xl border border-stone-200 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-stone-500 text-lg">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Starter */}
            <div className="card-hover bg-white rounded-2xl border border-stone-200 p-8 flex flex-col">
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1">
                Starter
              </h3>
              <p className="text-stone-500 text-sm mb-6">
                For churches getting started with AI
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-stone-900">
                  $29.95
                </span>
                <span className="text-stone-500 text-base">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {starterFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-stone-600"
                  >
                    <Check
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <PlaceholderAction
                action="Will redirect to Stripe checkout for Voice Starter ($29.95/mo)"
                className="btn-navy w-full py-3 rounded-lg text-sm font-semibold text-center cursor-pointer"
              >
                Get Started
              </PlaceholderAction>
            </div>

            {/* Pro */}
            <div className="card-hover relative bg-white rounded-2xl border-2 border-[#D4AF37] p-8 flex flex-col">
              {/* Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-white text-xs font-semibold uppercase tracking-wide shadow-md">
                  <Sparkles size={12} />
                  Popular
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1">
                Pro
              </h3>
              <p className="text-stone-500 text-sm mb-6">
                For growing churches that need more
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-stone-900">
                  $59.95
                </span>
                <span className="text-stone-500 text-base">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-stone-600"
                  >
                    <Check
                      size={16}
                      className="text-[#D4AF37] mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <PlaceholderAction
                action="Will redirect to Stripe checkout for Voice Pro ($59.95/mo)"
                className="btn-gold w-full py-3 rounded-lg text-sm font-semibold text-center cursor-pointer"
              >
                Get Started
              </PlaceholderAction>
            </div>
          </div>

          <p className="text-center mt-8 text-stone-500 text-sm">
            Want a voice agent and chatbot?{" "}
            <Link
              href="/pricing"
              className="text-[#D4AF37] hover:text-[#a07d1c] font-medium underline underline-offset-2 transition-colors"
            >
              Save with a bundle
            </Link>
          </p>
        </div>
      </section>

      {/* ── ROI Calculator ───────────────────────────────────────── */}
      <section id="roi" className="py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              How Much Are Missed Calls Costing Your Church?
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Enter your numbers below to see the real impact of unanswered
              calls on your ministry.
            </p>
          </div>

          <RoiCalculator />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-stone-100 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-8 py-14 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Answering Every Call Today
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Set up your AI voice agent in minutes. No technical skills required.
            </p>

            <PlaceholderAction
              action="Will redirect to Stripe checkout for Voice Starter"
              className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Get Started
              <ArrowRight size={18} />
            </PlaceholderAction>

            <p className="mt-6 text-stone-500 text-sm flex items-center justify-center gap-2">
              <Shield size={14} className="text-[#D4AF37]" />
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

