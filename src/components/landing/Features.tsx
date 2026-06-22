import {
  ScanLine,
  BrainCircuit,
  Network,
  Braces,
  ShieldAlert,
  Gauge,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: ScanLine, title: "PDF OCR Scanning", body: "Reads any invoice PDF automatically." },
  { icon: BrainCircuit, title: "AI Data Extraction", body: "Extracts 15+ fields with high accuracy." },
  { icon: Network, title: "SAP Integration", body: "Direct push to SAP with field mapping." },
  { icon: Braces, title: "JSON Output", body: "Clean structured data for any system." },
  { icon: ShieldAlert, title: "Error Detection", body: "Flags low-confidence fields for review." },
  { icon: Gauge, title: "Fast Processing", body: "Processes invoices in under 10 seconds." },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">
            Everything You Need
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#11161f] p-6 hover:border-white/25 hover:bg-[#141a24] transition-colors">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg cta-gradient">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
