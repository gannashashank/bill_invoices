import { Reveal } from "./Reveal";

const metrics = [
  { v: "80%", l: "Reduction in manual data entry time" },
  { v: "95%+", l: "OCR accuracy across invoice formats" },
  { v: "10x", l: "Faster invoice processing vs manual" },
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">
            Real Results for Real Businesses
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.l} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-center">
                <div className="text-5xl font-semibold text-gradient">{m.v}</div>
                <p className="mt-3 text-sm text-white/70">{m.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-center text-sm text-white/55 max-w-2xl mx-auto">
            Companies using Invoice IQ Pro process hundreds of invoices daily with zero manual
            effort.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
