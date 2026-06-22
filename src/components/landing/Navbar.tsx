import { useState } from "react";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#how", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg cta-gradient">
            <Zap className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">Invoice IQ Pro</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium cta-gradient"
        >
          Request a Demo <ArrowRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 space-y-3 bg-[#0d1117]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium cta-gradient"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
