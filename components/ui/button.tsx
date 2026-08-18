import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "whitespace-nowrap transition-[background,border-color,color,box-shadow,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400 " +
  "disabled:pointer-events-none disabled:opacity-55 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Solid brand gradient — reserved for the single primary action in a view.
  primary:
    "bg-linear-100 from-brand-600 via-brand-500 to-aqua-500 text-white " +
    "shadow-[0_10px_30px_-12px_rgba(11,92,245,0.85)] " +
    "hover:shadow-[0_14px_38px_-12px_rgba(18,194,233,0.7)] hover:brightness-[1.07]",
  // Quiet counterpart that still reads as a button on dark surfaces.
  secondary:
    "bg-white/[0.06] text-fg ring-1 ring-inset ring-line-strong backdrop-blur-sm " +
    "hover:bg-white/[0.1] hover:ring-brand-500/40",
  outline:
    "text-fg ring-1 ring-inset ring-line-strong hover:ring-brand-400/50 hover:bg-brand-500/[0.07]",
  ghost: "text-fg-muted hover:text-fg hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12.5 px-6.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, ...rest } = props;

    // mailto:, tel: and protocol-absolute URLs bypass the router entirely.
    const isProtocolLink = /^(mailto:|tel:|https?:)/.test(href);

    if (external || isProtocolLink) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, type, ...rest } = props;

  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}
