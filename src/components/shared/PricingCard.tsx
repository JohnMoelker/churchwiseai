import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: number | null;
  priceSuffix: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  accentColor?: string;
}

export function PricingCard({
  name,
  price,
  priceSuffix,
  description,
  features,
  notIncluded,
  cta,
  ctaHref,
  highlighted = false,
  badge,
  accentColor = "from-[#D4AF37] to-amber-600",
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl border p-6 sm:p-8 flex flex-col ${
        highlighted
          ? "border-[#1B365D] border-2 shadow-lg"
          : "border-stone-200"
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${accentColor}`}
      />

      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B365D] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
        {name}
      </h3>
      <p className="text-stone-500 text-sm mb-5">{description}</p>

      <div className="mb-6">
        {price !== null ? (
          <div className="flex items-baseline gap-1">
            <span
              className={`text-4xl font-bold ${
                highlighted ? "text-[#D4AF37]" : "text-stone-900"
              }`}
            >
              ${price}
            </span>
            <span className="text-stone-500 text-sm">{priceSuffix}</span>
          </div>
        ) : (
          <span className="text-4xl font-bold text-stone-900">Contact Us</span>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2
              size={18}
              className="text-emerald-500 shrink-0 mt-0.5"
            />
            <span className="text-stone-700 text-sm">{feature}</span>
          </li>
        ))}
        {notIncluded?.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <X size={18} className="text-stone-400 shrink-0 mt-0.5" />
            <span className="text-stone-400 text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`w-full py-3 rounded-lg text-sm font-semibold text-center inline-flex items-center justify-center transition-all ${
          highlighted
            ? "btn-gold"
            : "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/5"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
