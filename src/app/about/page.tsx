import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "ChurchWiseAI builds AI-powered tools for churches — voice agents, chatbots, and digital ministry tools that help every congregation serve better.",
};

const values = [
  {
    icon: Heart,
    title: "Faith-Centered",
    description:
      "We build AI that supports ministry, never replaces it. Every feature is designed to amplify your team's impact, not automate away the human touch.",
  },
  {
    icon: BookOpen,
    title: "Theologically Grounded",
    description:
      "Support for 17 theological traditions means your church's voice stays authentic. From Reformed to Charismatic, your AI speaks your language.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Church data is sacred. We never sell it, never share it. Your congregation's information stays protected with enterprise-grade security.",
  },
];

const ecosystem = [
  {
    name: "PewSearch",
    href: "https://pewsearch.com",
    description:
      "Church directory with 240,000+ listings. Help visitors find your church and discover your community.",
  },
  {
    name: "IllustrateTheWord",
    href: "https://illustratetheword.com",
    description:
      "26,000+ sermon illustrations for pastors. Searchable by topic, scripture, emotion, and tradition.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for the Church,{" "}
            <span className="text-[#D4AF37]">Powered by AI</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            We believe every church deserves tools that help them answer every
            call, engage every visitor, and focus on what matters most — their
            ministry.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <p
            className="text-2xl sm:text-3xl text-stone-800 leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;Our mission is to empower every church — from 50-member
            congregations to 5,000-member megachurches — to serve their
            community better through thoughtful AI.&rdquo;
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
              Our Story
            </p>
            <h2
              className="text-3xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why We Started ChurchWiseAI
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We started ChurchWiseAI after watching too many churches struggle
              to respond to every call and visitor inquiry. Ministry teams are
              stretched thin. Volunteers juggle multiple roles. And when the
              phone rings during Wednesday night prayer, nobody can answer.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We saw an opportunity: AI that handles the routine so your team can
              focus on the relational. An AI voice agent that answers with your
              church&apos;s warmth. A chatbot that knows your service times,
              your beliefs, your community. Tools that work 24/7 so your
              ministry never misses a connection.
            </p>
          </div>
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-amber-600 rounded-full" />
              <blockquote className="pl-6">
                <p
                  className="text-xl text-stone-800 leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;Every missed call is a missed opportunity to minister.
                  We built ChurchWiseAI so no call goes unanswered.&rdquo;
                </p>
                <footer className="text-sm text-stone-500">
                  — The ChurchWiseAI Team
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2
              className="text-3xl font-bold text-stone-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Guides Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-xl bg-stone-50 border border-stone-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-stone-900 mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
              Ecosystem
            </p>
            <h2
              className="text-3xl font-bold text-stone-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Part of the ChurchWiseAI Ecosystem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl bg-white border border-stone-200 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {product.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-stone-400 group-hover:text-[#D4AF37] transition-colors"
                  />
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1B365D] to-[#0f2340]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Join hundreds of churches already using AI to serve their
            communities better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="btn-gold px-8 py-3.5 rounded-lg text-base font-medium inline-flex items-center justify-center gap-2"
            >
              See a Demo
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-lg text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
