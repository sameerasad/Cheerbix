import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import type { Service } from "@/lib/constants/services";
import { cn } from "@/lib/utils/cn";

const accentRing = {
  brand: "group-hover:ring-brand-500/35",
  aqua: "group-hover:ring-aqua-500/35",
  mint: "group-hover:ring-mint-400/30",
} as const;

const accentIcon = {
  brand: "bg-brand-500/10 text-brand-200 ring-brand-500/20",
  aqua: "bg-aqua-500/10 text-aqua-300 ring-aqua-500/20",
  mint: "bg-mint-400/10 text-mint-400 ring-mint-400/20",
} as const;

const accentGlow = {
  brand: "from-brand-600/25",
  aqua: "from-aqua-500/22",
  mint: "from-mint-500/20",
} as const;

type ServiceCardProps = {
  service: Service;
  className?: string;
  /** The wide variant fills two grid columns and shows the longer summary. */
  variant?: "default" | "wide";
};

export function ServiceCard({
  service,
  className,
  variant = "default",
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-ink-850/70 p-6 sm:p-7",
        "ring-1 ring-inset ring-line transition-[transform,box-shadow,background-color] duration-300",
        "hover:-translate-y-0.5 hover:bg-ink-800/80 hover:shadow-lift",
        accentRing[service.accent],
        className,
      )}
    >
      {/* Corner wash that resolves on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-linear-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          accentGlow[service.accent],
        )}
      />

      <span
        className={cn(
          "relative grid size-11 place-items-center rounded-lg ring-1 ring-inset transition-transform duration-300 group-hover:scale-[1.06]",
          accentIcon[service.accent],
        )}
      >
        <Icon name={service.icon} size={20} />
      </span>

      <h3 className="relative mt-6 text-lg font-medium text-fg">
        {service.title}
      </h3>

      <p className="relative mt-3 flex-1 text-[0.9375rem] leading-relaxed text-fg-muted">
        {variant === "wide" ? service.summary : service.tagline}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors duration-200 group-hover:text-fg">
        Explore service
        <ArrowUpRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
