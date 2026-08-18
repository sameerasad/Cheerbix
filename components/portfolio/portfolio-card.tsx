import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { DemoBadge } from "@/components/ui/badge";
import { AbstractCover } from "@/components/ui/decor";
import type { Project } from "@/lib/constants/projects";
import { cn } from "@/lib/utils/cn";

type PortfolioCardProps = {
  project: Project;
  className?: string;
  /** `feature` gives the cover more height and shows the technology list. */
  size?: "feature" | "default" | "compact";
  coverVariant?: "grid" | "orbit" | "wave";
};

/**
 * The feature card sits beside a stacked pair and is stretched to their
 * combined height. Giving its cover `flex-1` sends that extra height into the
 * artwork rather than leaving a void above the metadata.
 */
const coverHeights = {
  feature: "flex-1 min-h-56 sm:min-h-72",
  default: "aspect-16/10",
  compact: "aspect-3/2 sm:aspect-16/9",
} as const;

export function PortfolioCard({
  project,
  className,
  size = "default",
  coverVariant = "grid",
}: PortfolioCardProps) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/work/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl bg-ink-850/60 ring-1 ring-inset ring-line transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-ink-800/70 hover:shadow-lift hover:ring-line-strong"
      >
        {/* Cover */}
        <div className={cn("relative overflow-hidden", coverHeights[size])}>
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <AbstractCover
              palette={project.palette}
              seed={project.slug}
              variant={coverVariant}
            />
          </div>

          {project.isDemo ? (
            <div className="absolute left-4 top-4">
              <DemoBadge />
            </div>
          ) : null}

          <span className="absolute bottom-4 left-4 rounded-full bg-ink-950/70 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-fg-muted backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Body */}
        <div
          className={cn(
            "flex flex-col p-6 sm:p-7",
            size !== "feature" && "flex-1",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <h3
              className={cn(
                "font-medium text-fg",
                size === "feature" ? "text-xl sm:text-2xl" : "text-lg",
              )}
            >
              {project.name}
            </h3>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="mt-1 shrink-0 text-fg-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-200"
            />
          </div>

          <p
            className={cn(
              "mt-3 text-[0.9375rem] leading-relaxed text-fg-muted",
              size !== "feature" && "flex-1",
            )}
          >
            {project.excerpt}
          </p>

          {size !== "compact" ? (
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, size === "feature" ? 5 : 3).map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-white/[0.04] px-2 py-1 text-[0.6875rem] text-fg-faint ring-1 ring-inset ring-line"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
            View case study
          </span>
        </div>
      </Link>
    </article>
  );
}
