import Link from "next/link";
import type { Metadata } from "next";
import {
  Megaphone,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Users,
  CheckSquare,
  Send,
  ChevronDown,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

export const metadata: Metadata = {
  title: "Congregation Care",
  description:
    "Keep your church connected with Congregation Care — send prayer chains, announcements, daily verses, and encouragement via email and SMS. Included with every paid ChurchWiseAI plan.",
};

const topics = [
  {
    icon: Megaphone,
    name: "Announcements",
    description:
      "Church events, schedule changes, special services, building updates.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Heart,
    name: "Prayer Chain",
    description:
      "Share prayer requests with your prayer team instantly.",
    color: "from-rose-500 to-rose-700",
  },
  {
    icon: BookOpen,
    name: "Daily Verse",
    description:
      "Send a daily scripture verse and reflection to encourage your congregation.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Sparkles,
    name: "Encouragement",
    description:
      "Birthday wishes, thank-you notes, thinking-of-you messages.",
    color: "from-amber-500 to-amber-700",
  },
];

const steps = [
  {
    number: 1,
    title: "Enable",
    description:
      "Turn on Congregation Care in your dashboard. It takes one click.",
  },
  {
    number: 2,
    title: "Share",
    description:
      "Share your unique sign-up link with your congregation. Members opt in with their name, email, and phone.",
  },
  {
    number: 3,
    title: "Broadcast",
    description:
      "Send messages to your entire congregation — or filter by topic. Delivered via email and SMS.",
  },
];

export default function CarePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Warm rose/pink radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(244,63,94,0.12) 0%, rgba(251,113,133,0.06) 40%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <Users size={14} className="text-rose-400" />
            <span className="text-sm text-stone-300">
              Available with any paid plan
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stay Connected with Every Member
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 leading-relaxed mb-10">
            Congregation Care is a messaging system that lets your church send
            prayer chains, announcements, daily verses, and encouragement — via
            email and SMS.
          </p>

          <a
            href="#how-it-works"
            className="btn-gold btn-shimmer px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2"
          >
            Learn More
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Simple, Powerful Communication
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Three steps to keep your entire congregation in the loop.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div
                className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-[#D4AF37]"
                aria-hidden="true"
              />

              {steps.map((step) => (
                <div key={step.number} className="text-center relative">
                  {/* Numbered circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4AF37]/20">
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Demo ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              See It in Action
            </h2>
            <p className="text-stone-500 text-lg">
              Watch how a church sends a broadcast in under 60 seconds.
            </p>
          </div>
          <VideoPlaceholder
            title="Congregation Care Demo"
            description="Watch how a church sends a prayer chain broadcast to 150 members in under 60 seconds."
          />
        </div>
      </section>

      {/* ── Topics Section ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              4 Built-in Message Topics
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Cover every type of church communication out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.name}
                  className="card-hover bg-white rounded-xl border border-stone-200 p-6 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mx-auto mb-5`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                    {topic.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Opt-in Form Preview ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              What Members See
            </h2>
            <p className="text-stone-500 text-lg max-w-lg mx-auto">
              A clean, mobile-friendly form that takes 30 seconds to fill out.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-8">
              {/* Mock form header */}
              <div className="text-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">CW</span>
                </div>
                <p className="font-serif text-lg font-semibold text-stone-900">
                  First Baptist Church
                </p>
                <p className="text-stone-500 text-sm">
                  Stay connected with our church family
                </p>
              </div>

              {/* Mock fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Your Name
                  </label>
                  <div className="w-full h-10 rounded-lg border border-stone-300 bg-stone-50 px-3 flex items-center">
                    <span className="text-stone-400 text-sm">Jane Smith</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Email
                  </label>
                  <div className="w-full h-10 rounded-lg border border-stone-300 bg-stone-50 px-3 flex items-center">
                    <span className="text-stone-400 text-sm">
                      jane@example.com
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Phone
                  </label>
                  <div className="w-full h-10 rounded-lg border border-stone-300 bg-stone-50 px-3 flex items-center">
                    <span className="text-stone-400 text-sm">
                      (555) 123-4567
                    </span>
                  </div>
                </div>
              </div>

              {/* Mock checkboxes */}
              <div className="mb-6">
                <p className="text-sm font-medium text-stone-700 mb-3">
                  Topics I&apos;m interested in:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Announcements",
                    "Prayer Chain",
                    "Daily Verse",
                    "Encouragement",
                  ].map((topic, i) => (
                    <label
                      key={topic}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          i < 3
                            ? "bg-[#D4AF37] border-[#D4AF37]"
                            : "border-stone-300 bg-white"
                        }`}
                      >
                        {i < 3 && (
                          <CheckSquare
                            size={14}
                            className="text-white"
                          />
                        )}
                      </div>
                      <span className="text-sm text-stone-700">{topic}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mock button */}
              <div className="btn-gold w-full py-3 rounded-lg text-center font-semibold text-sm">
                Join
              </div>
            </div>

            <p className="text-center text-stone-400 text-sm mt-4">
              Members choose which topics they want. Full TCPA/GDPR compliance
              built in.
            </p>
          </div>
        </div>
      </section>

      {/* ── Broadcast UI Preview ─────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              What You See in the Dashboard
            </h2>
            <p className="text-stone-500 text-lg max-w-lg mx-auto">
              A simple broadcast interface your team can use in minutes.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
              {/* Mock header bar */}
              <div className="bg-stone-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Send size={16} className="text-[#D4AF37]" />
                  <span className="text-white font-semibold text-sm">
                    New Broadcast
                  </span>
                </div>
                <span className="text-stone-400 text-xs">
                  147 subscribers
                </span>
              </div>

              <div className="p-6 space-y-5">
                {/* Topic dropdown mock */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Topic
                  </label>
                  <div className="w-full h-10 rounded-lg border border-stone-300 bg-white px-3 flex items-center justify-between">
                    <span className="text-stone-800 text-sm">
                      Prayer Chain
                    </span>
                    <ChevronDown size={16} className="text-stone-400" />
                  </div>
                </div>

                {/* Subject line */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Subject
                  </label>
                  <div className="w-full h-10 rounded-lg border border-stone-300 bg-stone-50 px-3 flex items-center">
                    <span className="text-stone-600 text-sm">
                      Urgent: Please pray for the Johnson family
                    </span>
                  </div>
                </div>

                {/* Message textarea */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Message
                  </label>
                  <div className="w-full rounded-lg border border-stone-300 bg-stone-50 p-3 min-h-[120px]">
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Dear church family, the Johnson family is going through a
                      difficult time. Mark was admitted to Memorial Hospital
                      yesterday. Please keep them in your prayers as they
                      navigate this season. We will share updates as we receive
                      them. God bless you all.
                    </p>
                  </div>
                </div>

                {/* Send button */}
                <div className="btn-gold w-full py-3 rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send to 147 members
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-stone-100 bg-stone-50 px-6 py-3">
                <p className="text-stone-400 text-xs">
                  Last broadcast: Feb 20, 2026 — 147 emails sent, 89 SMS
                  delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="bg-stone-100 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-8 py-14 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Keep Your Congregation Connected
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Prayer chains, announcements, daily verses, and encouragement —
              delivered to every member via email and SMS.
            </p>
            <Link
              href="/pricing"
              className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2"
            >
              See Pricing
              <ArrowRight size={18} />
            </Link>
            <p className="mt-6 text-stone-500 text-sm">
              Included with every paid plan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
