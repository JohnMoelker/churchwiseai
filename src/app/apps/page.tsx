import Link from "next/link";
import {
  BookOpen,
  FileText,
  Users,
  DollarSign,
  Music,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const apps = [
  {
    id: "sermon-companion",
    name: "Sermon Companion",
    audience: "Pastors",
    description:
      "AI-powered sermon research, illustration finder, and outline builder. Find the perfect story, scripture connection, or application point in seconds.",
    icon: BookOpen,
    gradient: "from-amber-500 to-amber-700",
    audienceColor: "bg-amber-50 text-amber-700",
    features: [
      "Illustration search from 26K+ examples",
      "Scripture cross-reference assistant",
      "Sermon outline generator",
      "Theological tradition alignment",
    ],
  },
  {
    id: "devotional-scribe",
    name: "Devotional Scribe",
    audience: "Staff",
    description:
      "Generate daily devotionals, newsletter content, prayer guides, and social media posts aligned with your church's theological voice.",
    icon: FileText,
    gradient: "from-blue-500 to-blue-700",
    audienceColor: "bg-blue-50 text-blue-700",
    features: [
      "Daily devotional generator",
      "Newsletter content drafts",
      "Prayer guide templates",
      "Multi-channel content calendar",
    ],
  },
  {
    id: "member-journey",
    name: "Member Journey",
    audience: "Admin",
    description:
      "Track visitor follow-up, discipleship milestones, and congregation health automatically — so no one falls through the cracks.",
    icon: Users,
    gradient: "from-emerald-500 to-emerald-700",
    audienceColor: "bg-emerald-50 text-emerald-700",
    features: [
      "Visitor follow-up automation",
      "Discipleship milestone tracking",
      "Congregation care alerts",
      "Integration with ChurchWiseAI Voice",
    ],
  },
  {
    id: "budget-steward",
    name: "Budget Steward",
    audience: "Finance",
    description:
      "AI-powered church budget analysis, giving trend insights, and stewardship campaign planning. Make data-driven ministry decisions.",
    icon: DollarSign,
    gradient: "from-violet-500 to-violet-700",
    audienceColor: "bg-violet-50 text-violet-700",
    features: [
      "Giving trend analysis",
      "Budget variance reporting",
      "Stewardship campaign tools",
      "Year-end giving statement generation",
    ],
  },
  {
    id: "worship-planner",
    name: "Worship Planner",
    audience: "Worship Teams",
    description:
      "Build theologically balanced worship sets with AI assistance. Align songs with sermon themes, liturgical seasons, and your tradition.",
    icon: Music,
    gradient: "from-rose-500 to-rose-700",
    audienceColor: "bg-rose-50 text-rose-700",
    features: [
      "Liturgical season alignment",
      "Song theme matching to sermon",
      "Set list builder",
      "17 theological tradition support",
    ],
  },
  {
    id: "youth-connect",
    name: "Youth Connect",
    audience: "Youth Pastors",
    description:
      "Specialized AI communication tools for youth ministry — engaging content, parent updates, and student discipleship tracking built for the next generation.",
    icon: Heart,
    gradient: "from-orange-500 to-orange-700",
    audienceColor: "bg-orange-50 text-orange-700",
    features: [
      "Youth-appropriate content tone",
      "Parent communication templates",
      "Event promotion tools",
      "Student engagement tracking",
    ],
  },
];

export default function AppsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-6">
            <Sparkles size={14} />
            Coming Soon
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Build Your Ministry Stack
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Purpose-built AI apps for every role in your church — all connected
            to the ChurchWiseAI platform. One subscription, the full ministry
            stack.
          </p>
          <Link
            href="/pricing"
            className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2"
          >
            See Pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Apps Grid ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Apps for Every Ministry Role
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              Each app connects to the ChurchWiseAI platform — unified data,
              unified conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.id}
                  className="card-hover group relative bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col"
                >
                  {/* Accent top bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${app.gradient}`}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center`}
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${app.audienceColor}`}
                      >
                        {app.audience}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                      {app.name}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
                      {app.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-1.5 mb-6">
                      {app.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-stone-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        <Sparkles size={11} />
                        Coming Soon
                      </span>
                      <button className="text-sm text-[#D4AF37] hover:text-[#a07d1c] font-medium transition-colors inline-flex items-center gap-1">
                        Join Waitlist
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platform CTA ──────────────────────────────────────────── */}
      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Everything Connects
          </h2>
          <p className="text-stone-500 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            All apps share the same platform — visitor conversations from Voice
            Agent feed into Member Journey, sermon research from Sermon
            Companion informs Devotional Scribe. One ministry ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              See Pricing
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-stone-300 text-stone-700 hover:border-stone-400 transition-colors inline-flex items-center justify-center gap-2"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
