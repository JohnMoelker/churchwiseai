import Link from "next/link";
import { Heart } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Voice Agent", href: "/voice" },
    { label: "AI Chatbot", href: "/chatbot" },
    { label: "Premium Pages", href: "/pricing" },
    { label: "Congregation Care", href: "/care" },
    { label: "AI Starter Kit", href: "/pricing#ai-kit" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Demo", href: "/demo" },
    { label: "ROI Calculator", href: "/voice#roi" },
    { label: "Church Directory", href: "https://pewsearch.com/directory" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "PewSearch", href: "https://pewsearch.com" },
    { label: "IllustrateTheWord", href: "https://illustratetheword.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CW</span>
              </div>
              <span
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ChurchWiseAI
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              AI-powered tools built for churches. Answer every call, engage
              every visitor, grow your ministry.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar — lighter offset */}
      <div className="bg-stone-800/50 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} ChurchWiseAI LTD. All rights
            reserved.
          </p>
          <p className="text-sm text-stone-400 flex items-center gap-1.5">
            Made with <Heart size={14} className="text-[#D4AF37]" /> for
            churches everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
