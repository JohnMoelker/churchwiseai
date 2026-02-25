"use client";

import { ArrowRight, Mail } from "lucide-react";
import { PlaceholderAction } from "@/components/PlaceholderAction";

export function NewsletterForm() {
  return (
    <section className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={26} className="text-[#D4AF37]" />
        </div>

        <h2
          className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Stay Updated
        </h2>
        <p className="text-stone-500 text-lg mb-8">
          Get ministry tech tips and ChurchWiseAI updates delivered to your
          inbox.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@church.org"
            className="flex-1 px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-colors"
          />
          <PlaceholderAction
            action="Will subscribe to MailerLite newsletter"
            className="btn-gold px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Subscribe
            <ArrowRight size={16} />
          </PlaceholderAction>
        </form>

        <p className="text-stone-400 text-sm">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
