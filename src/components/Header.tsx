"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  CreditCard,
  Play,
  BookOpen,
  Mail,
  Heart,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  Settings,
  Globe,
  Users,
  FileText,
  Puzzle,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────── */

type DropdownItem = {
  href: string;
  label: string;
  description?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  status?: "available" | "coming-soon" | "external" | "live";
  external?: boolean;
};

type MegaColumn = {
  heading: string;
  items: DropdownItem[];
};

/* ─── Data ───────────────────────────────────────────────────── */

const productsColumns: MegaColumn[] = [
  {
    heading: "AI Products",
    items: [
      {
        href: "/voice",
        label: "Voice Agent",
        description: "24/7 AI phone receptionist for your church",
        icon: Phone,
        status: "available",
      },
      {
        href: "/chatbot",
        label: "Church Chatbot",
        description: "Embed AI chat on your church website",
        icon: MessageSquare,
        status: "available",
      },
      {
        href: "/care",
        label: "Care Messaging",
        description: "Broadcast prayer requests and announcements",
        icon: Heart,
        status: "available",
      },
    ],
  },
  {
    heading: "Platform",
    items: [
      {
        href: "/apps",
        label: "App Marketplace",
        description: "Sermon tools, worship planner, and more",
        icon: LayoutGrid,
        status: "coming-soon",
      },
      {
        href: "/demo",
        label: "Demo",
        description: "See ChurchWiseAI in action",
        icon: Play,
        status: "live",
      },
      {
        href: "/contact",
        label: "Sign In",
        description: "Access your admin dashboard",
        icon: Settings,
        status: "available",
      },
    ],
  },
  {
    heading: "Ecosystem",
    items: [
      {
        href: "https://pewsearch.com",
        label: "PewSearch Directory",
        description: "240K+ church listings. Find or claim yours.",
        icon: Globe,
        status: "external",
        external: true,
      },
      {
        href: "https://illustratetheword.com",
        label: "IllustrateTheWord",
        description: "26K+ sermon illustrations",
        icon: BookOpen,
        status: "external",
        external: true,
      },
      {
        href: "/ai-for/baptist",
        label: "AI for Your Church",
        description: "AI built for your tradition",
        icon: Users,
        status: "available",
      },
    ],
  },
];

const resourcesItems: DropdownItem[] = [
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/demo", label: "Demo", icon: Play },
  { href: "/integrations", label: "Integrations", icon: Puzzle },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
];

const mobileLinks = [
  { href: "/voice", label: "Voice Agent", icon: Phone },
  { href: "/chatbot", label: "Chatbot", icon: MessageSquare },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
  { href: "/care", label: "Care", icon: Heart },
  { href: "/demo", label: "Demo", icon: Play },
  { href: "/integrations", label: "Integrations", icon: Puzzle },
  { href: "/apps", label: "Apps", icon: LayoutGrid },
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

/* ─── Status Pill ────────────────────────────────────────────── */

function StatusPill({ status }: { status: DropdownItem["status"] }) {
  if (!status) return null;

  const styles: Record<string, string> = {
    available: "bg-green-50 text-green-700 border-green-200",
    live: "bg-green-50 text-green-700 border-green-200",
    "coming-soon": "bg-amber-50 text-amber-700 border-amber-200",
    external: "bg-stone-50 text-stone-500 border-stone-200",
  };

  const labels: Record<string, string> = {
    available: "Available",
    live: "Live",
    "coming-soon": "Coming Soon",
    external: "External",
  };

  return (
    <span
      className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

/* ─── Header ─────────────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"products" | "resources" | null>(
    null
  );
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(
    (menu: "products" | "resources") => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setOpenMenu(menu);
    },
    []
  );

  const handleLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 150);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CW</span>
          </div>
          <span
            className="text-lg font-semibold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ChurchWiseAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("products")}
            onMouseLeave={handleLeave}
          >
            <button
              className={`px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg transition-colors inline-flex items-center gap-1 ${
                openMenu === "products" ? "bg-stone-50 text-stone-900" : ""
              }`}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  openMenu === "products" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega dropdown panel */}
            {openMenu === "products" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen pointer-events-none">
                <div className="pointer-events-auto bg-white shadow-xl border-t border-stone-200 py-6">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8">
                    {productsColumns.map((col) => (
                      <div key={col.heading}>
                        <h3 className="text-stone-400 text-xs uppercase tracking-wider font-medium mb-3">
                          {col.heading}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {col.items.map((item) => {
                            const Icon = item.icon;
                            const linkProps = item.external
                              ? {
                                  target: "_blank" as const,
                                  rel: "noopener noreferrer",
                                }
                              : {};
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                {...linkProps}
                                className="group/item flex items-center gap-3 hover:bg-stone-50 rounded-lg px-3 py-2.5 transition-colors"
                              >
                                <Icon
                                  size={18}
                                  className="text-stone-400 shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-stone-900 font-medium text-sm">
                                      {item.label}
                                    </span>
                                    <StatusPill status={item.status} />
                                  </div>
                                  {item.description && (
                                    <p className="text-stone-500 text-xs mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <ChevronRight
                                  size={14}
                                  className="text-stone-200 group-hover/item:text-stone-400 shrink-0 transition-colors"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-50 transition-colors"
          >
            Pricing
          </Link>

          {/* Integrations */}
          <Link
            href="/integrations"
            className="px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-50 transition-colors"
          >
            Integrations
          </Link>

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("resources")}
            onMouseLeave={handleLeave}
          >
            <button
              className={`px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg transition-colors inline-flex items-center gap-1 ${
                openMenu === "resources" ? "bg-stone-50 text-stone-900" : ""
              }`}
            >
              Resources
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  openMenu === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Resources dropdown panel */}
            {openMenu === "resources" && (
              <div className="absolute top-full right-0 bg-white shadow-lg border border-stone-200 rounded-lg py-2 w-56 z-50">
                {resourcesItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 transition-colors"
                    >
                      <Icon size={16} className="text-stone-400" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-50 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/pricing"
            className="btn-gold px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-1.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Gold accent line */}
      <div className="h-[3px] bg-gradient-to-r from-stone-300 via-[#D4AF37] to-stone-300" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {mobileLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} className="text-stone-400" />
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 px-4">
              <Link
                href="/pricing"
                className="btn-gold w-full py-3 rounded-lg text-sm font-medium text-center block"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
