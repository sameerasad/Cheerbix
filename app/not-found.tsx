import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/ui/decor";
import { LogoMark } from "@/components/ui/logo";
import { primaryNav } from "@/lib/constants/nav";
import { siteConfig } from "@/lib/constants/site";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden py-20">
      <GridBackdrop fade="radial" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 size-[32rem] -translate-x-1/2 rounded-full bg-brand-700/18 blur-[110px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <LogoMark height={40} className="mx-auto opacity-90" />

          <p className="mt-10 font-mono text-sm tracking-[0.2em] text-aqua-300">
            404
          </p>

          <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tightest text-fg sm:text-5xl">
            This page doesn&apos;t exist.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-fg-muted">
            The link may be out of date, or the page may have moved. Everything
            else is still where you left it.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
          </div>

          {/* A real way out, not just a dead end */}
          <div className="mt-14 border-t border-line pt-8">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
              Try one of these
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    {item.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-fg-faint">
              Still stuck?{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-200 transition-colors hover:text-aqua-300"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
