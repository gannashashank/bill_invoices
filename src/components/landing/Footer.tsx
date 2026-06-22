import { Zap } from "lucide-react";

const links = [
  { href: "#how", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg cta-gradient">
            <Zap className="h-4 w-4" />
          </span>
          <div>
            <div className="text-sm font-semibold">Invoice IQ Pro</div>
            <div className="text-xs text-white/55">
              Automate your invoice processing with AI.
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/65 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-white/5 text-xs text-white/45">
        © 2025 Invoice IQ Pro. All rights reserved.
      </div>
    </footer>
  );
}
