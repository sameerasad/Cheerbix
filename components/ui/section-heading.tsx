import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/animated";
import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Section headings default to h2; hero-level contexts pass "h1". */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  /** Rendered to the right of the heading on wide screens (usually a CTA). */
  action?: ReactNode;
  className?: string;
  size?: "md" | "lg";
};

const titleSizes = {
  md: "text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
  lg: "text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  action,
  className,
  size = "md",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? <Eyebrow className={cn("mb-5", centered && "justify-center")}>{eyebrow}</Eyebrow> : null}

        <Tag
          className={cn(
            "font-semibold tracking-tightest text-fg",
            titleSizes[size],
          )}
        >
          {title}
        </Tag>

        {description ? (
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </Reveal>

      {action ? (
        <Reveal delay={0.08} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}

/** The small uppercase label that opens most sections. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-aqua-300",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-px w-6 bg-linear-to-r from-aqua-400/80 to-transparent"
      />
      {children}
    </p>
  );
}
