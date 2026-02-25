import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect ChurchWiseAI with the tools your church already uses. Planning Center, Cal.com, Stripe, and more.",
};

const integrations = [
  {
    slug: "planning-center",
    name: "Planning Center Online",
    description:
      "Sync contacts, events, and giving records automatically",
    status: "Available" as const,
    color: "bg-teal-600",
    initials: "PC",
  },
  {
    slug: "calcom",
    name: "Cal.com",
    description:
      "Let visitors book appointments directly through the AI voice agent",
    status: "Available" as const,
    color: "bg-stone-800",
    initials: "Cal",
  },
  {
    slug: "breeze",
    name: "Breeze Church Management",
    description:
      "Keep your Breeze database in sync with AI interactions",
    status: "Coming Soon" as const,
    color: "bg-sky-500",
    initials: "Bz",
  },
  {
    slug: "elvanto",
    name: "Elvanto / Tithely",
    description: "Full church management sync",
    status: "Coming Soon" as const,
    color: "bg-violet-600",
    initials: "ET",
  },
  {
    slug: "zapier",
    name: "ChMS Generic (Zapier)",
    description:
      "Zapier webhook for any church management system",
    status: "Coming Soon" as const,
    color: "bg-orange-500",
    initials: "Zp",
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    description: "Auto-add visitors to your email list",
    status: "Coming Soon" as const,
    color: "bg-yellow-500",
    initials: "MC",
  },
  {
    slug: "stripe",
    name: "Stripe",
    description:
      "Accept gifts and payments through voice agent",
    status: "Available" as const,
    color: "bg-indigo-600",
    initials: "St",
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    description:
      "Sync church events to the AI's knowledge base",
    status: "Coming Soon" as const,
    color: "bg-blue-500",
    initials: "GC",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
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
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Works With Your Church&apos;s Existing Tools
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed">
            ChurchWiseAI connects to the systems your church already relies on
            — syncing contacts, calendars, and giving data so nothing falls
            through the cracks.
          </p>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <Link
                key={integration.slug}
                href={`/integrations/${integration.slug}`}
                className="card-hover group relative bg-white rounded-xl border border-stone-200 p-6 flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">
                      {integration.initials}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      integration.status === "Available"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {integration.status}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                  {integration.description}
                </p>

                <span className="text-sm font-semibold text-[#D4AF37] group-hover:text-[#a07d1c] inline-flex items-center gap-1.5 transition-colors">
                  Learn more
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Don&apos;t See Your System?
          </h2>
          <p className="text-stone-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            We add new integrations monthly. Let us know what tools your church
            uses and we&apos;ll prioritize what matters to you.
          </p>
          <Link
            href="/contact"
            className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
