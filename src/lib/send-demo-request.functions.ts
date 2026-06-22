import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(3).max(40),
});

const DEMO_REQUEST_RECIPIENT = "brijeshvquiver@gmail.com";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Invoice IQ Pro <onboarding@resend.dev>";

export const sendDemoRequest = createServerFn({ method: "POST" })
  .validator((input) => schema.parse(input))
  .handler(async ({ data }) => {
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      return { ok: false as const, emailSent: false as const, reason: "email_unconfigured" as const };
    }

    const text = `New demo request received:

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}

Sent from Invoice IQ Pro website.`;

    const html = `<div style="font-family:Arial,sans-serif;color:#0d1117;line-height:1.6">
      <h2 style="margin:0 0 16px">New demo request received</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
      <p style="color:#6b7280;font-size:12px">Sent from Invoice IQ Pro website.</p>
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [DEMO_REQUEST_RECIPIENT],
        reply_to: data.email,
        subject: "New Demo Request — Invoice IQ Pro",
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Demo request email failed", { status: res.status, body });

      if (res.status === 403 && body.includes("You can only send testing emails")) {
        return { ok: false as const, emailSent: false as const, reason: "sender_domain_required" as const };
      }

      return { ok: false as const, emailSent: false as const, reason: "email_failed" as const };
    }

    return { ok: true as const, emailSent: true as const };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
