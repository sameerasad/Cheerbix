import "server-only";

import { siteConfig } from "@/lib/constants/site";
import { isFreeEmailDomain, type ContactInput } from "@/lib/validation/contact";

/**
 * Transactional email is behind a narrow interface so the provider is a
 * one-file change. Today it speaks to Resend over HTTP (no SDK dependency);
 * swapping in Postmark, SES or SendGrid means writing another `EmailTransport`
 * and returning it from `getTransport()`.
 */

export type EmailMessage = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
};

export type EmailResult =
  | { ok: true; provider: string; id?: string }
  | { ok: false; provider: string; error: string };

export interface EmailTransport {
  readonly name: string;
  send(message: EmailMessage): Promise<EmailResult>;
}

/* -------------------------------------------------------------------------- */
/* Transports                                                                  */
/* -------------------------------------------------------------------------- */

class ResendTransport implements EmailTransport {
  readonly name = "resend";

  constructor(private readonly apiKey: string) {}

  async send(message: EmailMessage): Promise<EmailResult> {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: message.from,
          to: [message.to],
          reply_to: message.replyTo,
          subject: message.subject,
          text: message.text,
        }),
      });

      if (!response.ok) {
        const detail = await response.text();
        return {
          ok: false,
          provider: this.name,
          error: `Resend responded ${response.status}: ${detail.slice(0, 300)}`,
        };
      }

      const payload = (await response.json()) as { id?: string };
      return { ok: true, provider: this.name, id: payload.id };
    } catch (error) {
      return {
        ok: false,
        provider: this.name,
        error: error instanceof Error ? error.message : "Unknown transport error",
      };
    }
  }
}

/**
 * Used whenever no provider key is configured — local development, preview
 * builds, and CI. Submissions are logged rather than silently discarded, so
 * the form can be exercised end to end without credentials.
 */
class ConsoleTransport implements EmailTransport {
  readonly name = "console";

  async send(message: EmailMessage): Promise<EmailResult> {
    console.info(
      [
        "",
        "──────────────────────────────────────────────",
        " Contact enquiry (no email provider configured)",
        "──────────────────────────────────────────────",
        ` To:      ${message.to}`,
        ` Reply to: ${message.replyTo ?? "—"}`,
        ` Subject: ${message.subject}`,
        "",
        message.text,
        "──────────────────────────────────────────────",
        "",
      ].join("\n"),
    );

    return { ok: true, provider: this.name };
  }
}

function getTransport(): EmailTransport {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new ResendTransport(apiKey) : new ConsoleTransport();
}

/* -------------------------------------------------------------------------- */
/* Contact enquiry                                                             */
/* -------------------------------------------------------------------------- */

function renderEnquiry(input: ContactInput): string {
  const lines = [
    `Name:      ${input.name}`,
    `Email:     ${input.email}${isFreeEmailDomain(input.email) ? "  (personal domain)" : ""}`,
    `Company:   ${input.company?.trim() || "—"}`,
    `Service:   ${input.service}`,
    `Timeline:  ${input.timeline || "—"}`,
    "",
    "Project details",
    "───────────────",
    input.message,
    "",
    `Submitted via ${siteConfig.url}/contact`,
  ];

  return lines.join("\n");
}

export async function sendContactEnquiry(input: ContactInput): Promise<EmailResult> {
  const transport = getTransport();

  return transport.send({
    to: process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email,
    from:
      process.env.CONTACT_FROM_EMAIL ??
      `${siteConfig.name} Website <website@cherbix.com>`,
    replyTo: input.email,
    subject: `New enquiry — ${input.service} — ${input.name}`,
    text: renderEnquiry(input),
  });
}
