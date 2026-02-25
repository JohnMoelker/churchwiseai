"use client";

import { Play, Video } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  description: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export function VideoPlaceholder({
  title,
  description,
  aspectRatio = "16/9",
}: VideoPlaceholderProps) {
  return (
    <div
      className="video-placeholder relative overflow-hidden"
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
          <Play size={28} className="text-[#D4AF37] ml-1" />
        </div>
        <p className="text-white font-semibold text-lg mb-1">{title}</p>
        <p className="text-stone-400 text-sm max-w-md">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-[#D4AF37]/70">
          <Video size={14} />
          <span>VIDEO DEMO NEEDED</span>
        </div>
      </div>
    </div>
  );
}
