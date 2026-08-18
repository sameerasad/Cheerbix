import { NextResponse } from "next/server";

import { sendContactEnquiry } from "@/lib/email";
import { contactSchema, flattenContactErrors } from "@/lib/validation/contact";

/**
 * Contact enquiry endpoint.
 *
 * Everything arriving here is untrusted, so the payload is re-validated
 * against the same schema the form uses. Delivery is delegated to the
 * transport in `lib/email`, which falls back to console logging when no
 * provider key is configured.
 */

export const runtime = "nodejs";
/** Never cached: this route only ever handles POSTs with a body. */
export const dynamic = "force-dynamic";

/** Crude in-process rate limit — enough to blunt naive abuse of the form. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many submissions. Please wait a minute and try again.",
      },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Some fields need attention.",
        errors: flattenContactErrors(parsed.error),
      },
      { status: 422 },
    );
  }

  // The honeypot was filled: almost certainly automated. Accept silently so
  // the sender learns nothing, but do not deliver.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const result = await sendContactEnquiry(parsed.data);

  if (!result.ok) {
    console.error("[contact] delivery failed:", result.error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't deliver your message. Please email us directly and we'll pick it up straight away.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
