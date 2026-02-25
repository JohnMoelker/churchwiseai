import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Globe,
  FileText,
  BookOpen,
  Clock,
  Zap,
  Shield,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

const products = [
  {
    icon: Phone,
    title: "AI Phone Receptionist",
    description:
      "Answer every call 24/7. Prayer requests, visitor info, service times — handled automatically.",
    price: "From $29.95/mo",
    href: "/voice",
    accent: "from-[#D4AF37] to-amber-600",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Church Chatbot",
    description:
      "Embed on your website. Answers questions using your church's actual information.",
    price: "From $9.95/mo",
    href: "/chatbot",
    accent: "from-blue-500 to-blue-700",
  },
  {
    icon: Globe,
    title: "Premium Church Page",
    description:
      "Get a beautiful, SEO-optimized church page on PewSearch with 240K+ listings.",
    price: "$9.95/mo",
    href: "/pricing",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    icon: FileText,
    title: "AI Starter Kit for Churches",
    description:
      "The FAITH Framework — your church's guide to implementing AI responsibly.",
    price: "$4.95 one-time",
    href: "/pricing#ai-kit",
    accent: "from-amber-500 to-amber-700",
  },
];

const trustPoints = [
  {
    icon: BookOpen,
    title: "Theologically Grounded",
    description:
      "Every response is guided by sound theology. Our AI supports 17 theological traditions so your church's voice stays authentic.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your AI never sleeps. Callers and visitors get instant, helpful responses any time of day or night — including holidays.",
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description:
      "Go live in minutes, not months. We handle the technology so your staff can focus on ministry from day one.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Church data stays secure. We never sell your information, and all conversations are encrypted and private.",
  },
];

const stats = [
  { value: "240K+", label: "Churches Served" },
  { value: "26K+", label: "Sermon Resources" },
  { value: "17", label: "Theological Traditions" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero — centered, spacious ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI-Powered Ministry Tools
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
            Answer every call. Engage every visitor. Grow your ministry.
            ChurchWiseAI gives your church a 24/7 AI voice agent, intelligent
            chatbot, and digital presence — so your team can focus on what
            matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link
              href="/pricing"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              See Pricing
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2"
            >
              Book a Demo
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products — horizontal scroll mobile, grid desktop ──────── */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-2">
                Everything Your Church Needs
              </h2>
              <p className="text-stone-500 text-sm sm:text-base max-w-lg">
                From phone calls to website chat — AI tools to help your church
                connect with more people.
              </p>
            </div>
            <Link
              href="/pricing"
              className="text-[#D4AF37] hover:text-[#a07d1c] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              View all plans
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className="min-w-[260px] snap-start shrink-0 lg:min-w-0 lg:shrink card-hover group relative bg-white rounded-xl border border-stone-200 p-6 flex flex-col"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#D4AF37]">
                      {product.price}
                    </span>
                    <span className="text-stone-400 group-hover:text-[#D4AF37] transition-colors">
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Video Demo — split layout, text left, video right ──────── */}
      <section className="py-10 sm:py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="lg:w-2/5">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
                See ChurchWiseAI in Action
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Watch a real demo of our AI handling a church phone call — from
                the initial greeting to taking a prayer request and capturing
                visitor information.
              </p>
              <Link
                href="/demo"
                className="btn-gold w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                Try the Live Demo
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:w-3/5">
              <VideoPlaceholder
                title="See ChurchWiseAI in Action"
                description="Watch how our AI voice agent handles a real church phone call — from greeting to prayer request."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust — horizontal scroll mobile, grid desktop ─────────── */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-8 lg:mb-10">
            Built for Churches, By People Who Understand Ministry
          </h2>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="min-w-[240px] snap-start shrink-0 lg:min-w-0 lg:shrink"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-stone-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA — dark card on gray ──────────────────────────── */}
      <section className="bg-stone-100 py-14 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
              Ready to Transform Your Church&apos;s Communication?
            </h2>
            <p className="text-stone-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join thousands of churches already using AI to connect with their
              communities more effectively.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-5 text-stone-500 text-sm">
              Or{" "}
              <Link
                href="/contact"
                className="text-[#D4AF37] hover:text-[#e8cc6a] underline underline-offset-2 transition-colors"
              >
                book a free demo
              </Link>{" "}
              to see it in action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
