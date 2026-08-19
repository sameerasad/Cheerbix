import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "brand" | "aqua" | "mint" | "warn";
  size?: "sm" | "md";
};

const variants = {
  default: "bg-white/[0.05] text-fg-muted ring-line",
  brand: "bg-brand-500/12 text-brand-200 ring-brand-500/25",
  aqua: "bg-aqua-500/12 text-aqua-300 ring-aqua-500/25",
  mint: "bg-mint-400/12 text-mint-400 ring-mint-400/25",
  /** Reserved for advisory or caution states. */
  warn: "bg-amber-400/10 text-amber-300/90 ring-amber-400/25",
} as const;

const sizes = {
  sm: "px-2 py-0.5 text-[0.6875rem]",
  md: "px-2.5 py-1 text-xs",
} as const;

export function Badge({
  children,
  className,
  variant = "default",
  size = "sm",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium ring-1 ring-inset",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

