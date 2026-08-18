import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { growthJourney } from "@/lib/constants/company";

/**
 * The build → visibility → growth journey.
 *
 * Rendered as a stepped progression: each stage sits slightly lower than the
 * last on wide screens, so the section reads as a path rather than five tiles
 * in a row.
 */
/** Static classes so Tailwind can see them; index-mapped rather than computed. */
const stepOffsets = ["lg:pt-0", "lg:pt-6", "lg:pt-12", "lg:pt-18", "lg:pt-24"];

export function GrowthSection() {
  return (
    <Section tone="panel" className="overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-brand-500/20 to-transparent"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Digital growth"
          title="Build it. Get found. Grow it."
          description="A website nobody finds is a brochure. Visibility without a platform worth visiting is wasted spend. These pieces only work as a sequence."
        />

        <StaggerGroup
          as="ol"
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3"
        >
          {growthJourney.map((stage, index) => (
            <StaggerItem
              as="li"
              key={stage.stage}
              /* Each stage steps down a little, forming a diagonal path. */
              className={stepOffsets[index]}
            >
              <Link
                href={stage.href}
                className="group relative flex h-full flex-col rounded-xl border border-line bg-ink-850/60 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-ink-800/70"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-500/10 text-brand-200 ring-1 ring-inset ring-brand-500/20">
                    <Icon name={stage.icon} size={17} />
                  </span>
                  <span className="font-mono text-[0.6875rem] text-fg-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-aqua-300">
                  {stage.stage}
                </p>

                <h3 className="mt-2 text-base font-medium text-fg">
                  {stage.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fg-muted">
                  {stage.description}
                </p>

                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="mt-5 text-fg-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-200"
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
