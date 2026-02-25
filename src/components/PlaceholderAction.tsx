"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface PlaceholderActionProps {
  action: string;
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
}

export function PlaceholderAction({
  action,
  children,
  className = "",
  as = "button",
}: PlaceholderActionProps) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const Component = as;

  return (
    <span className="relative inline-block">
      <Component className={className} onClick={handleClick}>
        {children}
      </Component>
      {showToast && (
        <span className="placeholder-toast absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap z-50 flex items-center gap-2">
          <ArrowRight size={14} />
          {action}
        </span>
      )}
    </span>
  );
}
