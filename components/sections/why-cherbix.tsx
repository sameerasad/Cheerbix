import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Eyebrow } from "@/components/ui/section-heading";
import { differentiators } from "@/lib/constants/company";

/**
 * "Why Cherbix" — a sticky argument on the left, a hairline-divided matrix on
 * the right. Deliberately not six identical cards: the grid reads as one
 * connected table of reasons rather than a row of tiles.
 */
export function WhyCherbix() {
  return (
    <Section tone="panel" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[34rem] rounded-full bg-brand-700/12 blur-[110px]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Argument */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Why Cherbix</Eyebrow>

                <h2 className="mt-6 text-[1.85rem] font-semibold leading-[1.12] tracking-tightest text-fg sm:text-4xl lg:text-[2.6rem]">
                  More than a service provider.{" "}
                  <span className="text-gradient">
                    Your digital technology partner.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                  Most agencies sell a deliverable and move on. We are set up
                  for the part that comes after — the maintenance, the second
                  version, the thing nobody scoped for.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/about" variant="secondary">
                    How we work
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                  <Button href="/work" variant="ghost">
                    View our work
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Matrix */}
          <div className="lg:col-span-7">
            <StaggerGroup
              as="ul"
              className="grid border-t border-line sm:grid-cols-2"
            >
              {differentiators.map((item, index) => (
                <StaggerItem
                  as="li"
                  key={item.title}
                  className={[
                    "group relative border-b border-line px-0 py-7 transition-colors duration-300 sm:px-7",
                    // Vertical rule only between columns, never on the edges.
                    index % 2 === 0 ? "sm:border-r sm:pl-0" : "",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-linear-to-r from-brand-500/60 to-aqua-400/40 transition-transform duration-400 group-hover:scale-x-100"
                  />

                  <span className="grid size-10 place-items-center rounded-lg bg-white/[0.04] text-fg-muted ring-1 ring-inset ring-line transition-colors duration-300 group-hover:bg-brand-500/10 group-hover:text-brand-200 group-hover:ring-brand-500/25">
                    <Icon name={item.icon} size={18} />
                  </span>

                  <h3 className="mt-5 text-base font-medium text-fg">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-sm text-[0.9375rem] leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
