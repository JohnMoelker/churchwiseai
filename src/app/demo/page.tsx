"use client";

import Link from "next/link";
import {
  MessageSquare,
  Phone,
  ArrowRight,
  ExternalLink,
  Play,
  Cross,
  Church,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { PlaceholderAction } from "@/components/PlaceholderAction";

const traditions = [
  {
    name: "Baptist",
    color: "from-blue-600 to-blue-800",
    snippet:
      "After death, each person faces judgment. Those who have trusted in Jesus Christ as personal Lord and Savior receive eternal life in heaven. Those who have rejected Him face eternal separation from God.",
  },
  {
    name: "Catholic",
    color: "from-red-600 to-red-800",
    snippet:
      "At death, the soul undergoes particular judgment. The faithful may enter purgatory for purification before entering heaven. The communion of saints means the living can pray for the dead.",
  },
  {
    name: "Pentecostal",
    color: "from-amber-600 to-amber-800",
    snippet:
      "Death is not the end — it is a doorway. Believers are immediately in the presence of the Lord, fully alive in the Spirit. At Christ's return, the dead in Christ will rise first in glorified bodies.",
  },
  {
    name: "Reformed",
    color: "from-emerald-600 to-emerald-800",
    snippet:
      "God, in His sovereign will, has determined the eternal destiny of every soul. The elect — those chosen before the foundation of the world — are received into glory at death.",
  },
];

export default function DemoPage() {
  return (
    <>
      {/* ── Hero — centered, spacious ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(212,175,55,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Try ChurchWiseAI
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
            Experience our AI chatbot and voice agent before you buy. No signup
            required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#chatbot-demo"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              Try the Chatbot
            </a>
            <a
              href="#voice-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Hear the Voice Agent
            </a>
          </div>
        </div>
      </section>

      {/* ── Chatbot Demo — split layout, visual right ──────────────── */}
      <section id="chatbot-demo" className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Text — left on desktop */}
            <div className="lg:w-2/5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold mb-4">
                <MessageSquare size={12} />
                Live Demo
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
                Chat with Our AI
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                This is a live ChurchWiseAI chatbot configured for a sample
                church. Ask it anything — service times, beliefs, events, staff.
              </p>
              <PlaceholderAction
                action="Will embed live chatbot widget here"
                className="btn-gold w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                Start Chatting
              </PlaceholderAction>
            </div>

            {/* Chat mockup — right on desktop, bridges into next section */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-gradient-to-r from-[#1B365D] to-[#2b6cb0] px-5 py-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Grace Community Church
                    </p>
                    <p className="text-blue-200 text-xs">
                      Powered by ChurchWiseAI
                    </p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-stone-50 p-5 sm:p-6">
                  <div className="space-y-4">
                    {/* Bot welcome */}
                    <div className="flex gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#1B365D] flex items-center justify-center shrink-0">
                        <Church size={12} className="text-white" />
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none border border-stone-200 px-4 py-2.5 max-w-[85%]">
                        <p className="text-stone-700 text-sm leading-relaxed">
                          Welcome to Grace Community Church! I&apos;m here to
                          help with service times, directions, beliefs, or
                          upcoming events. How can I help?
                        </p>
                      </div>
                    </div>

                    {/* User question */}
                    <div className="flex gap-2.5 justify-end">
                      <div className="bg-[#D4AF37] rounded-xl rounded-tr-none px-4 py-2.5 max-w-[85%]">
                        <p className="text-white text-sm">
                          What time are Sunday services?
                        </p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#1B365D] flex items-center justify-center shrink-0">
                        <Church size={12} className="text-white" />
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none border border-stone-200 px-4 py-2.5 max-w-[85%]">
                        <p className="text-stone-700 text-sm leading-relaxed">
                          We have two Sunday services: <strong>9:00 AM</strong>{" "}
                          (Traditional) and <strong>11:00 AM</strong>{" "}
                          (Contemporary). Both last about 75 minutes.
                          Children&apos;s ministry is available for ages 0–12.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Input mockup */}
                  <div className="mt-5 flex gap-2">
                    <div className="flex-1 bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-400">
                      Type a message...
                    </div>
                    <div className="bg-[#D4AF37] rounded-lg px-3 py-2.5 flex items-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chatbot video — tight, full-width, bridges sections ───── */}
      <section className="pb-10 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <VideoPlaceholder
            title="Chatbot Demo Walkthrough"
            description="See how a visitor interacts with a ChurchWiseAI chatbot on a church website."
          />
        </div>
      </section>

      {/* ── Theology Comparison — different bg, horizontal scroll mobile */}
      <section className="py-10 sm:py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Split heading: text left, link right on desktop */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Same Question, Four Traditions
              </h2>
              <p className="text-stone-500 text-sm sm:text-base max-w-lg">
                &ldquo;What happens after death?&rdquo; — see how our
                theologically grounded AI responds differently for each
                denomination.
              </p>
            </div>
            <a
              href="https://pewsearch.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#a07d1c] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              Try full comparison
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Horizontal scroll on mobile, 2x2 grid on desktop */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0">
            {traditions.map((tradition) => (
              <div
                key={tradition.name}
                className="min-w-[280px] snap-start shrink-0 lg:min-w-0 lg:shrink card-hover bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${tradition.color} px-5 py-3 flex items-center gap-2`}
                >
                  <Cross size={14} className="text-white/80" />
                  <h3 className="text-white font-semibold text-sm">
                    {tradition.name}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {tradition.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voice Demo — split layout FLIPPED (visual left, text right) */}
      <section id="voice-demo" className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Video — left on desktop, below text on mobile */}
            <div className="lg:w-3/5">
              <VideoPlaceholder
                title="Sample Voice Agent Call"
                description="A 90-second demo of a real AI-powered phone call to a church — greeting, service times, and prayer request."
              />
            </div>

            {/* Text — right on desktop, above video on mobile */}
            <div className="lg:w-2/5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-semibold mb-4">
                <Phone size={12} />
                Audio Demo
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
                Hear the Voice Agent
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Listen to a sample phone call handled by our AI. Real greeting,
                real prayer request intake, real visitor follow-up — all
                automated.
              </p>
              <PlaceholderAction
                action="Will play sample voice agent recording"
                className="btn-navy w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play size={16} />
                Play Sample Call
              </PlaceholderAction>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — dark card on gray ─────────────────────────── */}
      <section className="bg-stone-100 py-14 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
              Like What You See?
            </h2>
            <p className="text-stone-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Get started with ChurchWiseAI today. Plans start at $9.95/mo.
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-stone-600 text-stone-300 hover:border-[#D4AF37] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
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
