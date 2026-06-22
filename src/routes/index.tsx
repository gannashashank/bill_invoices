import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Results } from "@/components/landing/Results";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Invoice IQ Pro — AI Invoice Automation for SAP" },
      {
        name: "description",
        content:
          "Invoice IQ Pro uses OCR and AI to extract invoice data from PDFs and push it directly into SAP — eliminating manual entry and saving hours every day.",
      },
      { property: "og:title", content: "Invoice IQ Pro — AI Invoice Automation for SAP" },
      {
        property: "og:description",
        content:
          "Stop entering invoices manually. Let AI read, extract, and push to SAP in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Results />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
