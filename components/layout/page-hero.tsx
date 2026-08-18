import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { AmbientGlow, Reveal } from "@/components/ui/animated";
import { GridBackdrop } from "@/components/ui/decor";
import { Eyebrow } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils/cn";

export type Crumb = { name: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Rendered under the copy — usually a pair of buttons. */
  actions?: ReactNode;
  /** Rendered to the right on wide screens. */
  aside?: ReactNode;
  breadcrumbs?: Crumb[];
  accent?: "brand" | "aqua" | "mint";
  className?: string;
};

const accentGlow = {
  brand: "bg-brand-700/22",
  aqua: "bg-aqua-600/18",
  mint: "bg-mint-500/14",
} as const;

/** The shared masthead for every page other than home. */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  breadcrumbs,
  accent = "brand",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20",
        className,
      )}
    >
      <GridBackdrop fade="radial" />
      <AmbientGlow
        className={cn("-left-32 -top-40 size-[34rem]", accentGlow[accent])}
      />

      <Container className="relative">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-fg-faint">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {isLast ? (
                      <span aria-current="page" className="text-fg-muted">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.href}
                          className="transition-colors hover:text-fg"
                        >
                          {crumb.name}
                        </Link>
                        <span aria-hidden="true" className="text-fg-faint/50">
                          /
                        </span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div
          className={cn(
            "grid gap-12",
            aside ? "lg:grid-cols-12 lg:items-end lg:gap-14" : "",
          )}
        >
          <div className={cn(aside ? "lg:col-span-7" : "max-w-3xl")}>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>

              <h1 className="mt-6 text-[2.15rem] font-semibold leading-[1.06] tracking-tightest text-fg sm:text-5xl lg:text-[3.5rem]">
                {title}
              </h1>

              {description ? (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
                  {description}
                </p>
              ) : null}

              {actions ? (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {actions}
                </div>
              ) : null}
            </Reveal>
          </div>

          {aside ? (
            <Reveal delay={0.1} className="lg:col-span-5">
              {aside}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
