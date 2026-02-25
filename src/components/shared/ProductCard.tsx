import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  href: string;
  accentGradient: string;
  badge?: string;
}

export function ProductCard({
  icon: Icon,
  title,
  description,
  price,
  href,
  accentGradient,
  badge,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="card-hover group relative bg-white rounded-xl border border-stone-200 p-6 flex flex-col"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${accentGradient} opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      {badge && (
        <span className="absolute top-3 right-3 bg-[#D4AF37] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentGradient} flex items-center justify-center mb-5`}
      >
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#D4AF37]">{price}</span>
        <span className="text-stone-400 group-hover:text-[#D4AF37] transition-colors">
          <ChevronRight size={18} />
        </span>
      </div>
    </Link>
  );
}
