"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/ui/decor";
import { siteConfig } from "@/lib/constants/site";

/**
 * Route error boundary. Shows a recoverable state rather than a stack trace —
 * the digest is surfaced so a visitor can quote it to us, and the underlying
 * error is logged for whatever monitoring is wired up.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[route error]", error);
  }, [error]);

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <GridBackdrop fade="radial" />

      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/25">
            <AlertTriangle size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <h1 className="mt-8 text-[1.75rem] font-semibold leading-tight tracking-tightest text-fg sm:text-4xl">
            Something went wrong on this page.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-fg-muted">
            This one is on us. Try again — and if it keeps happening, let us know
            and we&apos;ll fix it.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={reset}>
              <RotateCcw size={16} aria-hidden="true" />
              Try again
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Back to home
            </Button>
          </div>

          {error.digest ? (
            <p className="mt-8 font-mono text-xs text-fg-faint">
              Reference: {error.digest}
            </p>
          ) : null}

          <p className="mt-4 text-sm text-fg-faint">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-brand-200 transition-colors hover:text-aqua-300"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
