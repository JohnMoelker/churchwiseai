import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides, ministry insights, and AI tips for modern churches. Learn how to leverage AI tools to grow your ministry.",
};

/* ── Mock Data ──────────────────────────────────────────────────── */

const featuredArticle = {
  title: "5 Ways AI is Helping Churches Grow in 2026",
  date: "February 20, 2026",
  category: "Ministry Tech",
  excerpt:
    "From automated phone answering to personalized member care, discover how forward-thinking churches are using AI to serve their communities better.",
  slug: "/blog/ai-helping-churches-grow",
};

const articles = [
  {
    title: "The FAITH Framework: Your Church\u2019s AI Policy Guide",
    category: "AI Ethics",
    excerpt:
      "Every church needs an AI policy. Our FAITH Framework gives you a step-by-step approach to implementing AI responsibly.",
    date: "February 15, 2026",
    slug: "/blog/faith-framework-ai-policy",
  },
  {
    title: "How to Never Miss a Church Phone Call Again",
    category: "Voice Agent",
    excerpt:
      "The average church misses 30% of incoming calls. Here\u2019s how an AI voice agent changes that.",
    date: "February 10, 2026",
    slug: "/blog/never-miss-church-phone-call",
  },
  {
    title:
      "Embedding a Chatbot on Your Church Website: A Complete Guide",
    category: "Chatbot",
    excerpt:
      "Step-by-step tutorial for adding a ChurchWiseAI chatbot to WordPress, Squarespace, Wix, or any website.",
    date: "February 5, 2026",
    slug: "/blog/embed-chatbot-church-website",
  },
];

/* ── Category Badge ─────────────────────────────────────────────── */

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full">
      {category}
    </span>
  );
}

/* ── Page Component ─────────────────────────────────────────────── */

export default function BlogPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FEFCF8] to-stone-50 pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Subtle gold radial accent */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 20%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-5">
            The ChurchWiseAI Blog
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-500 leading-relaxed">
            Practical guides, ministry insights, and AI tips for modern
            churches.
          </p>
        </div>
      </section>

      {/* ── Featured Article ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href={featuredArticle.slug}
            className="card-hover group block bg-white rounded-2xl border border-stone-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Placeholder image */}
              <div className="relative aspect-[16/9] lg:aspect-auto bg-stone-200 flex items-center justify-center">
                <span className="text-stone-400 text-sm font-medium">
                  Featured Image
                </span>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <CategoryBadge category={featuredArticle.category} />
                  <span className="flex items-center gap-1.5 text-sm text-stone-400">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-stone-500 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Article Grid ─────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="card-hover group bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col"
              >
                {/* Placeholder image */}
                <div className="aspect-[16/9] bg-stone-100 flex items-center justify-center">
                  <span className="text-stone-400 text-sm font-medium">
                    Article Image
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CategoryBadge category={article.category} />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <span className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Calendar size={13} />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Read more
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Promo Banner ─────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-2xl px-8 py-12 sm:px-12 sm:py-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #d97706 50%, #D4AF37 100%)",
            }}
          >
            {/* Subtle texture overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              }}
            />

            <div className="relative">
              <Sparkles
                size={32}
                className="mx-auto mb-4 text-white/80"
              />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Transform Your Church&apos;s Communication with AI
              </h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
                AI voice agents and chatbots built specifically for churches
                — answer every call, engage every visitor.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white text-stone-900 font-semibold px-8 py-3.5 rounded-lg hover:bg-stone-50 transition-colors text-base"
              >
                See Plans
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ───────────────────────────────────── */}
      <NewsletterForm />
    </>
  );
}
