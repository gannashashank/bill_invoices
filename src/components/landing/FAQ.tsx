import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What file formats does Invoice IQ Pro support?",
    a: "Currently supports PDF invoices in all layouts and formats.",
  },
  {
    q: "Does it work with our SAP system?",
    a: "Yes, Invoice IQ Pro integrates directly with SAP using standard BAPI field mapping.",
  },
  {
    q: "How accurate is the AI extraction?",
    a: "Our OCR engine achieves 95%+ accuracy. Low-confidence fields are flagged for manual review.",
  },
  {
    q: "Is our invoice data secure?",
    a: "Yes, all data is encrypted and processed securely. We never store sensitive invoice data.",
  },
  {
    q: "How do we get started?",
    a: "Simply fill out the contact form below and our team will reach out within 4 business hours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.015]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 !border-b"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/65">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
