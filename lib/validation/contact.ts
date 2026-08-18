import { z } from "zod";

/**
 * One schema, used by the client form and the API route. Client-side
 * validation is a convenience; the route re-validates the same shape because
 * anything arriving over HTTP is untrusted.
 */

export const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "AI Automation",
  "Digital Marketing",
  "SEO",
  "Content Writing",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

/** Free-mail domains are allowed but flagged in the notification email. */
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "proton.me",
]);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "That name is longer than we can store."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(160, "That email address is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  company: z
    .string()
    .trim()
    .max(120, "That company name is too long.")
    .optional()
    .or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS, {
    message: "Please choose the service you need.",
  }),
  budget: z.enum(BUDGET_OPTIONS, {
    message: "Please choose an approximate budget.",
  }),
  timeline: z
    .enum(TIMELINE_OPTIONS)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please give us at least a couple of sentences about the project.")
    .max(4000, "Please keep this under 4,000 characters."),
  /**
   * Honeypot. Hidden from users and from assistive technology; only automated
   * submissions tend to fill it in.
   *
   * Deliberately permissive: a filled honeypot must not fail validation, or
   * the API would answer with a field error and tell a bot exactly what to
   * change. The route accepts the submission silently and discards it instead.
   */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Field-keyed errors, the shape the form component renders directly. */
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;

export function flattenContactErrors(error: z.ZodError): ContactFieldErrors {
  const result: ContactFieldErrors = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in result)) {
      result[key as keyof ContactInput] = issue.message;
    }
  }

  return result;
}

export function isFreeEmailDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? FREE_EMAIL_DOMAINS.has(domain) : false;
}
