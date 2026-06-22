import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "./Reveal";
import { sendDemoRequest } from "@/lib/send-demo-request.functions";

const fields = [
  { name: "name", label: "Your Name", placeholder: "Ravi Sharma", type: "text" },
  { name: "company", label: "Company Name", placeholder: "Acme Technologies", type: "text" },
  { name: "email", label: "Work Email", placeholder: "ravi@company.com", type: "email" },
  { name: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel" },
] as const;

type FieldName = (typeof fields)[number]["name"];

export function ContactForm() {
  const send = useServerFn(sendDemoRequest);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    company: false,
    email: false,
    phone: false,
  });

  const isEmpty = (v: string) => v.trim().length === 0;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const allTouched = { name: true, company: true, email: true, phone: true };
    setTouched(allTouched);
    if (fields.some((f) => isEmpty(values[f.name]))) return;

    setSubmitting(true);
    try {
      const result = await send({
        data: {
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
        },
      });
      if (!result.ok) {
        setErrorMsg("Email could not be sent. Please try again.");
        return;
      }
      if (!result.emailSent) {
        console.warn("Email delivery failed", result.reason);
        setErrorMsg("Email could not be sent. Please try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "Something went wrong. Please try again or email us at brijeshvquiver@gmail.com",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-gradient">GET IN TOUCH</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Talk to our team.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-xl italic text-white/60">
              We'll call you within 4 business hours.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-white/65 leading-relaxed">
              No demos, no slides, no pressure. Just a straight conversation about whether Invoice
              IQ Pro is right for your business.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div
            className="rounded-2xl border border-white/10 bg-[#11161f] p-7"
            style={{ boxShadow: "0 20px 60px -20px rgb(0 0 0 / 0.7)" }}
          >
            {success ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="rounded-full bg-emerald-500/15 p-4 mb-5">
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold">Request Received!</h3>
                <p className="mt-2 text-white/65">
                  We'll call you within 4 business hours. Talk soon!
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                {fields.map((f) => {
                  const showError = touched[f.name] && isEmpty(values[f.name]);
                  return (
                    <div key={f.name}>
                      <label className="text-xs font-medium text-white/70" htmlFor={f.name}>
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        required
                        value={values[f.name]}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [f.name]: e.target.value }))
                        }
                        onBlur={() => setTouched((t) => ({ ...t, [f.name]: true }))}
                        placeholder={f.placeholder}
                        aria-invalid={showError}
                        className={`focus-glow mt-1.5 w-full rounded-lg border bg-[#0d1117] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors ${
                          showError ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {showError && (
                        <p className="mt-1.5 text-xs text-red-400">{f.label} is required.</p>
                      )}
                    </div>
                  );
                })}
                <button
                  type="submit"
                  disabled={submitting}
                  className="cta-gradient inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request my free callback"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {errorMsg && (
                  <p className="text-sm text-red-400 text-center">{errorMsg}</p>
                )}
                <p className="text-xs text-white/50 text-center">
                  We'll call you within 4 business hours. No spam, no hard sell.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
