"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/animated";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/constants/company";

/**
 * The five-stage engagement timeline.
 *
 * One connector line animates in on scroll and the step markers follow it —
 * a single coordinated movement rather than five independent animations. Below
 * the large breakpoint it becomes a vertical timeline with the same structure.
 */
export function ProcessSection() {
  const reduced = useReducedMotion();

  return (
    <Section id="process" tone="line">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How a Cherbix project actually runs"
          description="Five stages, each with output you can see. No long silences between kickoff and reveal."
        />

        <div className="relative mt-16">
          {/* Horizontal connector (large screens) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-line lg:block"
          >
            <motion.div
              className="h-full origin-left bg-linear-to-r from-brand-500 via-aqua-400 to-brand-500/0"
              initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Vertical connector (small screens) */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[1.4rem] top-3 w-px bg-line lg:hidden"
          >
            <motion.div
              className="w-full origin-top bg-linear-to-b from-brand-500 via-aqua-400 to-brand-500/0"
              initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%" }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative pl-16 lg:pl-0">
                <Reveal delay={index * 0.08}>
                  {/* Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 grid size-11 place-items-center rounded-full border border-line-strong bg-ink-950 text-[0.8125rem] font-semibold text-brand-200 lg:static lg:size-11"
                  >
                    {step.number}
                  </span>

                  <div className="lg:mt-6">
                    <h3 className="text-lg font-medium text-fg">{step.title}</h3>

                    {/* Reserves three lines on wide screens so the rules
                        below each summary line up across the five columns. */}
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted lg:min-h-[4.5rem]">
                      {step.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-line pt-4">
                      {step.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex gap-2.5 text-[0.8125rem] leading-snug text-fg-faint"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-aqua-400/60"
                          />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
