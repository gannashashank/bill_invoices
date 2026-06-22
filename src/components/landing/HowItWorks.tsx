import { Upload, Sparkles, Database } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Upload,
    title: "Upload Invoice PDF",
    body: "Drop your invoice PDF into the system. Supports all formats and layouts.",
  },
  {
    icon: Sparkles,
    title: "AI Extracts Data",
    body: "Our OCR engine reads vendor name, invoice number, amounts, tax, and more — instantly.",
  },
  {
    icon: Database,
    title: "Auto Push to SAP",
    body: "Extracted data is validated and pushed directly into SAP. No human touch needed.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">
            How It Works
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors">
                <div className="absolute -top-3 left-7 inline-flex h-7 w-7 items-center justify-center rounded-full cta-gradient text-xs font-semibold">
                  {i + 1}
                </div>
                <div className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
