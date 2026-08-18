import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Consistent vertical rhythm — the only place section padding is defined. */
  spacing?: "sm" | "md" | "lg";
  /**
   * `panel` lifts a section a step above the page background; `line` adds a
   * hairline divider above it. Used to break up an otherwise uniform stack.
   */
  tone?: "plain" | "panel" | "line";
};

const spacings = {
  sm: "py-16 sm:py-20",
  md: "py-20 sm:py-24 lg:py-28",
  lg: "py-24 sm:py-32 lg:py-36",
} as const;

const tones = {
  plain: "",
  panel: "bg-ink-900",
  line: "border-t border-line",
} as const;

export function Section({
  children,
  className,
  id,
  spacing = "md",
  tone = "plain",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", spacings[spacing], tones[tone], className)}
    >
      {children}
    </section>
  );
}
