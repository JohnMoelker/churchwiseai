import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";

interface ComparisonFeature {
  name: string;
  churchwiseai: boolean;
  competitor: boolean;
}

interface CompetitorData {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  features: ComparisonFeature[];
  cwPrice: string;
  competitorPrice: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

const competitors: Record<string, CompetitorData> = {
  "vs-answering-service": {
    slug: "vs-answering-service",
    name: "Traditional Answering Services",
    headline: "Why Churches Choose ChurchWiseAI Over Traditional Answering Services",
    intro:
      "Traditional answering services use human operators who read from a script. They do not know your church, your theology, or your community. ChurchWiseAI is trained on your church's actual information and responds with the warmth and accuracy your congregation expects.",
    features: [
      { name: "24/7 availability", churchwiseai: true, competitor: true },
      { name: "Church-specific training", churchwiseai: true, competitor: false },
      { name: "Theological tradition support", churchwiseai: true, competitor: false },
      { name: "Prayer request handling", churchwiseai: true, competitor: false },
      { name: "Planning Center integration", churchwiseai: true, competitor: false },
      { name: "Consistent responses every time", churchwiseai: true, competitor: false },
      { name: "No hold times", churchwiseai: true, competitor: false },
      { name: "Scales to unlimited calls", churchwiseai: true, competitor: false },
    ],
    cwPrice: "From $29.95/mo",
    competitorPrice: "$200-500+/mo",
    benefits: [
      {
        title: "Trained on Your Church",
        description:
          "An answering service reads a script. ChurchWiseAI knows your service times, your pastor's name, your small groups, your theology, and your community. Every response is personalized to your church.",
      },
      {
        title: "90% Lower Cost",
        description:
          "Traditional answering services charge $200-500 per month for basic coverage. ChurchWiseAI starts at $29.95 and handles unlimited calls with more accuracy and warmth than a script reader ever could.",
      },
      {
        title: "No Training, No Turnover",
        description:
          "Answering services have constant staff turnover. Every new operator needs training on your church. ChurchWiseAI learns once and never forgets — consistent quality on every single call.",
      },
    ],
  },
  "vs-voicemail": {
    slug: "vs-voicemail",
    name: "Voicemail",
    headline: "Why Churches Choose ChurchWiseAI Over Voicemail",
    intro:
      "Voicemail feels impersonal and most callers hang up without leaving a message. Studies show 80% of callers sent to voicemail never call back. ChurchWiseAI answers every call immediately with a warm, knowledgeable response.",
    features: [
      { name: "24/7 availability", churchwiseai: true, competitor: true },
      { name: "Church-specific training", churchwiseai: true, competitor: false },
      { name: "Theological tradition support", churchwiseai: true, competitor: false },
      { name: "Prayer request handling", churchwiseai: true, competitor: false },
      { name: "Planning Center integration", churchwiseai: true, competitor: false },
      { name: "Answers questions instantly", churchwiseai: true, competitor: false },
      { name: "Captures visitor information", churchwiseai: true, competitor: false },
      { name: "No missed connections", churchwiseai: true, competitor: false },
    ],
    cwPrice: "From $29.95/mo",
    competitorPrice: "$0 (but costly missed connections)",
    benefits: [
      {
        title: "No More Missed Visitors",
        description:
          "When a first-time visitor calls your church and gets voicemail, they rarely call back. They move on to the next church on their list. ChurchWiseAI answers immediately, welcomes them, and captures their information.",
      },
      {
        title: "Instant Answers, Not Callbacks",
        description:
          "A visitor asking about service times does not want to wait for a callback. ChurchWiseAI gives them the answer in seconds, along with directions, parking info, and a warm invitation to visit.",
      },
      {
        title: "Prayer Requests Handled with Care",
        description:
          "When someone calls your church in crisis, voicemail is the worst possible experience. ChurchWiseAI listens, prays with them, captures the request, and routes it to your prayer team immediately.",
      },
    ],
  },
  "vs-generic-chatbot": {
    slug: "vs-generic-chatbot",
    name: "Generic Chatbots",
    headline: "Why Churches Choose ChurchWiseAI Over Generic Chatbots",
    intro:
      "Generic chatbot platforms were built for e-commerce and customer support. They do not understand theological language, denominational differences, or the sensitive nature of church communication. ChurchWiseAI was purpose-built for ministry.",
    features: [
      { name: "24/7 availability", churchwiseai: true, competitor: true },
      { name: "Church-specific training", churchwiseai: true, competitor: false },
      { name: "Theological tradition support", churchwiseai: true, competitor: false },
      { name: "Prayer request handling", churchwiseai: true, competitor: false },
      { name: "Planning Center integration", churchwiseai: true, competitor: false },
      { name: "Sensitive topic awareness", churchwiseai: true, competitor: false },
      { name: "Denominational accuracy", churchwiseai: true, competitor: false },
      { name: "Ministry-specific workflows", churchwiseai: true, competitor: false },
    ],
    cwPrice: "From $29.95/mo",
    competitorPrice: "Varies ($0-300+/mo)",
    benefits: [
      {
        title: "Theologically Aware Responses",
        description:
          "Generic chatbots do not understand the difference between Baptist and Presbyterian theology. ChurchWiseAI supports 17 theological traditions and responds with denominationally appropriate language every time.",
      },
      {
        title: "Handles Sensitive Topics Gracefully",
        description:
          "When someone asks about grief, divorce, addiction, or crisis support, a generic chatbot gives a cold, scripted response. ChurchWiseAI responds with compassion and connects people to the right pastoral resources.",
      },
      {
        title: "Built-In Church Workflows",
        description:
          "Generic chatbots require custom development for every church-specific workflow. ChurchWiseAI comes with prayer request routing, visitor follow-up, event information, and giving support built in from day one.",
      },
    ],
  },
  "vs-tawk": {
    slug: "vs-tawk",
    name: "Tawk.to",
    headline: "Why Churches Choose ChurchWiseAI Over Tawk.to",
    intro:
      "Tawk.to is a free live chat tool popular with small businesses. It works well when someone is available to chat — but churches cannot staff a live chat desk around the clock. ChurchWiseAI provides intelligent, always-on responses trained on your church.",
    features: [
      { name: "24/7 availability", churchwiseai: true, competitor: false },
      { name: "Church-specific training", churchwiseai: true, competitor: false },
      { name: "Theological tradition support", churchwiseai: true, competitor: false },
      { name: "Prayer request handling", churchwiseai: true, competitor: false },
      { name: "Planning Center integration", churchwiseai: true, competitor: false },
      { name: "No staff required to operate", churchwiseai: true, competitor: false },
      { name: "AI-powered responses", churchwiseai: true, competitor: false },
      { name: "Voice agent included", churchwiseai: true, competitor: false },
    ],
    cwPrice: "From $29.95/mo",
    competitorPrice: "$0 (requires live staff)",
    benefits: [
      {
        title: "Always On, No Staff Required",
        description:
          "Tawk.to only works when a volunteer or staff member is online. Evenings, weekends, holidays — when people are most likely to reach out — the chat sits empty. ChurchWiseAI responds instantly, 24/7, 365 days a year.",
      },
      {
        title: "AI-Powered, Not Script-Limited",
        description:
          "Tawk.to's canned responses cannot handle the range of questions a church receives. ChurchWiseAI uses advanced AI trained on your church's specific information to give natural, helpful answers to any question.",
      },
      {
        title: "Voice + Chat in One Platform",
        description:
          "Tawk.to is chat only. ChurchWiseAI gives you an AI phone receptionist and website chatbot in a single platform, with shared knowledge and consistent responses across both channels.",
      },
    ],
  },
  "vs-intercom": {
    slug: "vs-intercom",
    name: "Intercom for Churches",
    headline: "Why Churches Choose ChurchWiseAI Over Intercom",
    intro:
      "Intercom is a powerful customer communication platform built for SaaS companies and enterprise teams. Its pricing, complexity, and business-oriented language make it a poor fit for most churches. ChurchWiseAI delivers the AI features churches actually need at a fraction of the cost.",
    features: [
      { name: "24/7 availability", churchwiseai: true, competitor: true },
      { name: "Church-specific training", churchwiseai: true, competitor: false },
      { name: "Theological tradition support", churchwiseai: true, competitor: false },
      { name: "Prayer request handling", churchwiseai: true, competitor: false },
      { name: "Planning Center integration", churchwiseai: true, competitor: false },
      { name: "Affordable for small churches", churchwiseai: true, competitor: false },
      { name: "Simple setup (no developer needed)", churchwiseai: true, competitor: false },
      { name: "Ministry-focused language", churchwiseai: true, competitor: false },
    ],
    cwPrice: "From $29.95/mo",
    competitorPrice: "$74+/mo (per seat)",
    benefits: [
      {
        title: "Church Budget Friendly",
        description:
          "Intercom starts at $74 per seat per month and quickly scales into hundreds of dollars. ChurchWiseAI starts at $29.95 for the entire church — no per-seat pricing, no surprise charges.",
      },
      {
        title: "No Technical Expertise Needed",
        description:
          "Intercom requires significant technical setup: custom bots, workflow builders, API integrations. ChurchWiseAI is ready out of the box — your church admin can set it up in minutes without any coding.",
      },
      {
        title: "Ministry Language, Not Business Jargon",
        description:
          "Intercom talks about leads, MQLs, and conversion funnels. ChurchWiseAI talks about visitors, prayer requests, and pastoral care. The interface, the AI responses, and the entire experience is designed for ministry.",
      },
    ],
  },
};

function getCompetitorData(slug: string): CompetitorData | null {
  return competitors[slug] ?? null;
}

export function generateStaticParams() {
  return Object.keys(competitors).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getCompetitorData(params.slug);
  if (!data) return {};
  return {
    title: `ChurchWiseAI vs. ${data.name}`,
    description: `See how ChurchWiseAI compares to ${data.name}. Purpose-built AI for churches with theological tradition support, prayer request handling, and church management integration.`,
  };
}

export default function ComparisonPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getCompetitorData(params.slug);
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {data.headline}
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-center">
            Feature Comparison
          </h2>

          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
              <div className="p-4 sm:p-5 text-sm font-semibold text-stone-500">
                Feature
              </div>
              <div className="p-4 sm:p-5 text-sm font-semibold text-[#D4AF37] text-center">
                ChurchWiseAI
              </div>
              <div className="p-4 sm:p-5 text-sm font-semibold text-stone-500 text-center">
                {data.name}
              </div>
            </div>

            {/* Feature Rows */}
            {data.features.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-3 ${
                  i < data.features.length - 1
                    ? "border-b border-stone-100"
                    : ""
                }`}
              >
                <div className="p-4 sm:p-5 text-sm text-stone-700">
                  {feature.name}
                </div>
                <div className="p-4 sm:p-5 flex justify-center">
                  {feature.churchwiseai ? (
                    <Check size={20} className="text-[#D4AF37]" />
                  ) : (
                    <X size={20} className="text-stone-300" />
                  )}
                </div>
                <div className="p-4 sm:p-5 flex justify-center">
                  {feature.competitor ? (
                    <Check size={20} className="text-stone-400" />
                  ) : (
                    <X size={20} className="text-stone-300" />
                  )}
                </div>
              </div>
            ))}

            {/* Price Row */}
            <div className="grid grid-cols-3 border-t border-stone-200 bg-stone-50">
              <div className="p-4 sm:p-5 text-sm font-semibold text-stone-700">
                Price
              </div>
              <div className="p-4 sm:p-5 text-center">
                <span className="text-sm font-bold text-[#D4AF37]">
                  {data.cwPrice}
                </span>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <span className="text-sm font-semibold text-stone-500">
                  {data.competitorPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-10 text-center">
            The ChurchWiseAI Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8"
              >
                <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-5">
              Ready to See the Difference?
            </h2>
            <p className="text-stone-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join churches across North America that switched to ChurchWiseAI
              for smarter, more compassionate communication.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
