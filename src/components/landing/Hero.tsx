import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { v: "95%", l: "Accuracy" },
  { v: "10x", l: "Faster Processing" },
  { v: "0", l: "Manual Entry" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(249,115,22,0.15), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-gradient">
            AI-POWERED INVOICE AUTOMATION
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Stop Entering Invoices Manually.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-xl sm:text-2xl italic text-white/60">
            Let AI read, extract, and push to SAP — in seconds.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Invoice IQ Pro uses OCR and AI to automatically extract invoice data from PDFs and push
            it directly into SAP — eliminating manual entry, reducing errors, and saving hours
            every day.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium cta-gradient"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white hover:bg-white/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
