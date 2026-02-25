"use client";

import {
  Mail,
  Phone,
  Clock,
  Calendar,
  Send,
  ArrowRight,
} from "lucide-react";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { PlaceholderAction } from "@/components/PlaceholderAction";

// Note: metadata must be in a separate file or this page must be a server component.
// Since we need "use client" for the form and PlaceholderAction, we set title via head.
// For SEO, consider extracting the form to a client component.
// Alternatively, Next.js 16 supports metadata in layout.tsx for this route.

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FEFCF8] to-stone-100 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-500 leading-relaxed">
            Whether you&apos;re ready to get started or just have questions,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── 2-Column Layout ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ── Left: Contact Form ──────────────────────────────── */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-stone-500 text-sm mb-8">
                Fill out the form and we will get back to you shortly.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@church.org"
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Church Name */}
                <div>
                  <label
                    htmlFor="contact-church"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Church Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-church"
                    name="church"
                    type="text"
                    required
                    placeholder="First Baptist Church"
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Phone{" "}
                    <span className="text-stone-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full h-11 rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your church and what you're looking for..."
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors resize-y"
                  />
                </div>

                {/* Submit */}
                <PlaceholderAction
                  action="Will send contact form via Resend email API"
                  className="btn-gold btn-shimmer w-full py-3 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  Send Message
                </PlaceholderAction>

                <p className="text-stone-400 text-sm text-center">
                  We respond within 24 hours.
                </p>
              </form>
            </div>

            {/* ── Right: Direct Contact + Cal.com ─────────────────── */}
            <div className="space-y-8">
              {/* Direct Contact Info */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-6">
                  Direct Contact
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-700 mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:hello@churchwiseai.com"
                        className="text-[#D4AF37] hover:text-[#a07d1c] text-sm transition-colors"
                      >
                        hello@churchwiseai.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-700 mb-0.5">
                        Phone
                      </p>
                      <a
                        href="tel:+18005551234"
                        className="text-[#D4AF37] hover:text-[#a07d1c] text-sm transition-colors"
                      >
                        (800) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-700 mb-0.5">
                        Office Hours
                      </p>
                      <p className="text-stone-500 text-sm">
                        Mon &ndash; Fri, 9 AM &ndash; 5 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cal.com Embed Placeholder */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-5">
                    <Calendar size={28} className="text-[#1B365D]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                    Book a Free Demo
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Schedule a 30-minute walkthrough of ChurchWiseAI. See the
                    voice agent and chatbot in action with your church&apos;s
                    information.
                  </p>

                  {/* Placeholder for Cal.com widget */}
                  <div className="bg-stone-50 border-2 border-dashed border-stone-200 rounded-xl p-8 mb-4">
                    <Calendar
                      size={40}
                      className="text-stone-300 mx-auto mb-3"
                    />
                    <p className="text-stone-400 text-sm">
                      Cal.com scheduling widget will appear here
                    </p>
                  </div>

                  <PlaceholderAction
                    action="Will embed Cal.com scheduling widget"
                    className="btn-navy w-full py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar size={16} />
                    Schedule Your Demo
                  </PlaceholderAction>
                </div>
              </div>

              {/* Video: What to Expect */}
              <VideoPlaceholder
                title="What to Expect on Your Demo Call"
                description="A quick walkthrough of what we'll cover in your personalized ChurchWiseAI demo."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
