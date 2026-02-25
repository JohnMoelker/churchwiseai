import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Clock, CheckCircle } from "lucide-react";

interface IntegrationData {
  name: string;
  description: string;
  longDescription: string;
  status: "Available" | "Coming Soon";
  features: string[];
  setupTime: string;
  slug: string;
}

const integrations: Record<string, IntegrationData> = {
  "planning-center": {
    name: "Planning Center Online",
    slug: "planning-center",
    description:
      "Sync contacts, events, and giving records automatically between ChurchWiseAI and Planning Center.",
    longDescription:
      "Planning Center is the most popular church management system in North America. Our integration automatically syncs new visitor contacts captured by the AI voice agent or chatbot into your Planning Center People database. Event details from Planning Center Calendar feed directly into the AI, so callers always get accurate service times, small group schedules, and upcoming events.",
    status: "Available",
    features: [
      "Automatic contact sync — new visitors flow into Planning Center People",
      "Event calendar pull — AI always knows your current schedule",
      "Prayer request routing — requests land in your follow-up workflow",
      "Giving information — AI can share giving links and portal access",
      "Two-way sync — updates in Planning Center reflect in AI responses",
    ],
    setupTime: "10 minutes",
  },
  calcom: {
    name: "Cal.com",
    slug: "calcom",
    description:
      "Let visitors book appointments directly through the AI voice agent or chatbot.",
    longDescription:
      "The Cal.com integration allows your AI voice agent and chatbot to schedule meetings on behalf of your pastoral staff. When a caller asks to meet with a pastor, the AI checks available slots in real time and books the appointment — no back-and-forth emails required. Works with pastoral counseling, new member meetings, wedding consultations, and any other appointment type you configure.",
    status: "Available",
    features: [
      "Real-time availability — AI checks open slots before offering times",
      "Multiple calendars — route appointments to the right staff member",
      "Automatic confirmations — caller gets SMS/email confirmation instantly",
      "Buffer time support — respect travel and preparation time between meetings",
      "Custom appointment types — counseling, new member, wedding, and more",
    ],
    setupTime: "5 minutes",
  },
  breeze: {
    name: "Breeze Church Management",
    slug: "breeze",
    description:
      "Keep your Breeze database in sync with AI interactions.",
    longDescription:
      "Breeze is a simple, intuitive church management system loved for its clean interface. Our upcoming integration will sync visitor data, attendance records, and communication logs between ChurchWiseAI and Breeze automatically. Every AI interaction becomes a touchpoint in your member care workflow.",
    status: "Coming Soon",
    features: [
      "Contact sync — new visitors added to Breeze automatically",
      "Interaction logging — every AI conversation becomes a follow-up note",
      "Tag management — AI-identified visitor types auto-tagged in Breeze",
      "Event sync — Breeze events feed into AI knowledge base",
      "Giving links — AI directs callers to your Breeze giving portal",
    ],
    setupTime: "10 minutes (estimated)",
  },
  elvanto: {
    name: "Elvanto / Tithely",
    slug: "elvanto",
    description:
      "Full church management sync with Elvanto and Tithely platforms.",
    longDescription:
      "Elvanto (now part of Tithely) provides comprehensive church management including people, groups, services, and giving. Our planned integration will connect all major modules so your AI voice agent and chatbot have complete, up-to-date church information to serve callers and visitors accurately.",
    status: "Coming Soon",
    features: [
      "People sync — contacts flow between ChurchWiseAI and Elvanto",
      "Service planning data — AI knows this week's sermon topic and schedule",
      "Group information — AI can share small group details with interested visitors",
      "Volunteer management — route volunteer inquiries to the right coordinator",
      "Giving integration — AI shares Tithely giving links when asked",
    ],
    setupTime: "15 minutes (estimated)",
  },
  zapier: {
    name: "ChMS Generic (Zapier)",
    slug: "zapier",
    description:
      "Connect ChurchWiseAI to any church management system through Zapier webhooks.",
    longDescription:
      "Not every church uses a major ChMS platform, and that is perfectly fine. Our Zapier integration sends webhook events for every meaningful AI interaction — new contacts, prayer requests, appointment requests, and more. Connect these to any of Zapier's 6,000+ apps to build the exact workflow your church needs.",
    status: "Coming Soon",
    features: [
      "Webhook events for all AI interactions (calls, chats, contacts)",
      "Connect to 6,000+ apps through Zapier's ecosystem",
      "Custom field mapping — send exactly the data you need",
      "Filter and route — different actions for different interaction types",
      "No-code setup — your admin team can configure it without developers",
    ],
    setupTime: "15 minutes (estimated)",
  },
  mailchimp: {
    name: "Mailchimp",
    slug: "mailchimp",
    description:
      "Auto-add visitors to your church email list through Mailchimp.",
    longDescription:
      "When your AI voice agent or chatbot captures a new visitor's email address, the Mailchimp integration automatically adds them to the right audience segment. First-time visitors go into your welcome sequence. Returning members get added to your general newsletter. No manual data entry, no missed connections.",
    status: "Coming Soon",
    features: [
      "Automatic subscriber creation from AI-captured contacts",
      "Audience segmentation — visitors vs. members vs. inquiries",
      "Tag-based routing — different interactions trigger different tags",
      "Welcome sequence trigger — new visitors enter your nurture flow immediately",
      "Unsubscribe respect — honors existing opt-out preferences",
    ],
    setupTime: "5 minutes (estimated)",
  },
  stripe: {
    name: "Stripe",
    slug: "stripe",
    description:
      "Accept gifts and payments through the ChurchWiseAI voice agent and chatbot.",
    longDescription:
      "The Stripe integration powers secure giving through your AI voice agent and chatbot. When a caller or visitor asks about tithing or wants to make a gift, the AI can share your giving link, explain giving options, and walk them through the process. All transactions are handled securely through Stripe — ChurchWiseAI never touches financial data directly.",
    status: "Available",
    features: [
      "Secure giving links — AI shares your church's Stripe giving page",
      "Multiple fund support — general, missions, building, benevolence",
      "Recurring giving setup — AI explains recurring options to interested givers",
      "PCI compliant — all payment processing handled by Stripe's secure infrastructure",
      "Giving receipts — automatic tax-deductible receipts through Stripe",
    ],
    setupTime: "10 minutes",
  },
  "google-calendar": {
    name: "Google Calendar",
    slug: "google-calendar",
    description:
      "Sync church events to the AI's knowledge base through Google Calendar.",
    longDescription:
      "Many churches run their scheduling through Google Calendar. Our planned integration will automatically pull event data from your Google Calendar into ChurchWiseAI's knowledge base, so when someone calls asking about VBS dates, small group times, or service schedules, the AI always has the latest information — no manual updates needed.",
    status: "Coming Soon",
    features: [
      "Automatic event sync from Google Calendar to AI knowledge base",
      "Multiple calendar support — worship, youth, admin, facility",
      "Real-time updates — calendar changes reflected in AI responses within minutes",
      "Event details — AI shares location, time, description, and contact info",
      "Recurring event handling — weekly services, monthly meetings, annual events",
    ],
    setupTime: "5 minutes (estimated)",
  },
};

function getIntegrationData(slug: string): IntegrationData | null {
  return integrations[slug] ?? null;
}

export function generateStaticParams() {
  return Object.keys(integrations).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getIntegrationData(params.slug);
  if (!data) return {};
  return {
    title: `${data.name} Integration`,
    description: data.description,
  };
}

export default function IntegrationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getIntegrationData(params.slug);
  if (!data) notFound();

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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link
              href="/integrations"
              className="hover:text-stone-200 transition-colors"
            >
              Integrations
            </Link>
            <ChevronRight size={14} />
            <span className="text-stone-300">{data.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {data.name}
            </h1>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                data.status === "Available"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-stone-700 text-stone-300 border border-stone-600"
              }`}
            >
              {data.status}
            </span>
          </div>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Description + Features */}
            <div className="lg:w-3/5">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                How It Works
              </h2>
              <p className="text-stone-600 leading-relaxed mb-10">
                {data.longDescription}
              </p>

              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-4">
                Features
              </h3>
              <ul className="space-y-4">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#D4AF37] shrink-0 mt-0.5"
                    />
                    <span className="text-stone-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Setup Card */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 sticky top-8">
                <h3 className="font-serif text-lg font-semibold text-stone-900 mb-4">
                  Setup Details
                </h3>

                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Clock size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Setup Time</p>
                    <p className="font-semibold text-stone-900">
                      {data.setupTime}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-stone-500 mb-2">Status</p>
                  <span
                    className={`inline-flex text-sm font-semibold px-3 py-1.5 rounded-full ${
                      data.status === "Available"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>

                {data.status === "Available" ? (
                  <Link
                    href="/pricing"
                    className="btn-gold w-full px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-navy w-full px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Notify Me When Available
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-50 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Get Started with ChurchWiseAI
          </h2>
          <p className="text-stone-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Every plan includes access to our integration platform. Connect your
            church&apos;s tools in minutes, not months.
          </p>
          <Link
            href="/pricing"
            className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            View Pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
