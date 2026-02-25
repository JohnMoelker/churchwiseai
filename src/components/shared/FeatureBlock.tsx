import type { LucideIcon } from "lucide-react";

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
}

export function FeatureBlock({
  icon: Icon,
  title,
  description,
  iconBg = "bg-[#D4AF37]/10",
  iconColor = "text-[#D4AF37]",
}: FeatureBlockProps) {
  return (
    <div>
      <div
        className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}
      >
        <Icon size={22} className={iconColor} />
      </div>
      <h3 className="font-serif text-base font-semibold text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
