import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
  dark?: boolean;
}

export function HeroSection({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  stats,
  dark = true,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 ${
        dark
          ? "bg-gradient-to-b from-stone-900 to-stone-800"
          : "bg-[#FEFCF8]"
      }`}
    >
      {dark && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && (
          <span className="inline-block bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {eyebrow}
          </span>
        )}

        <h1
          className={`font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 ${
            dark ? "text-white" : "text-stone-900"
          }`}
        >
          {headline}
        </h1>

        <p
          className={`max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-8 ${
            dark ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Link
            href={primaryCta.href}
            className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            {primaryCta.label}
            <ArrowRight size={18} />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 inline-flex items-center justify-center gap-2 transition-colors ${
                dark
                  ? "border-white/30 text-white hover:border-white/60"
                  : "border-stone-300 text-stone-700 hover:border-stone-500"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="flex items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  {stat.value}
                </p>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    dark ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
