import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AmbientGlow, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/ui/decor";
import { Eyebrow } from "@/components/ui/section-heading";
import { aiCapabilities } from "@/lib/constants/company";

/**
 * The AI section is the one place the mint accent from the logo mark is used
 * at any scale — it marks this as the distinct capability rather than another
 * blue section in the stack.
 */
export function AIHighlight() {
  return (
    <Section id="ai" tone="line" className="overflow-hidden">
      <GridBackdrop fade="radial" className="opacity-60" />
      <AmbientGlow className="right-[-12rem] top-0 size-[36rem] bg-mint-500/12" />
      <AmbientGlow
        className="left-[-8rem] bottom-[-6rem] size-[28rem] bg-brand-700/18"
        intensity={0.9}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>AI & Automation</Eyebrow>

              <h2 className="mt-6 text-[1.85rem] font-semibold leading-[1.1] tracking-tightest text-fg sm:text-4xl lg:text-[2.75rem]">
                Turn repetitive work into{" "}
                <span className="bg-linear-100 from-mint-400 via-aqua-400 to-brand-300 bg-clip-text text-transparent">
                  intelligent automation.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
                Not a strategy deck. We measure how a process runs today, automate
                the part that is genuinely repeatable, and route anything
                uncertain to a person. Every automated action is logged and
                reversible.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/services/ai-automation" size="lg">
                  Explore AI Solutions
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to an Expert
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Capability panel */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-900/70 p-6 backdrop-blur-sm sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-mint-400/50 to-transparent"
                />

                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-fg-faint">
                    What we automate
                  </h3>
                  <span className="flex items-center gap-2 text-[0.6875rem] text-mint-400">
                    <span
                      aria-hidden="true"
                      className="relative flex size-1.5"
                    >
                      <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-mint-400/70" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-mint-400" />
                    </span>
                    Human in the loop
                  </span>
                </div>

                <StaggerGroup as="ul" className="mt-6 space-y-px">
                  {aiCapabilities.map((capability) => (
                    <StaggerItem
                      as="li"
                      key={capability}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-[0.9375rem] text-fg-muted transition-colors duration-200 hover:bg-white/[0.03] hover:text-fg"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-mint-400/12 text-mint-400 ring-1 ring-inset ring-mint-400/25">
                        <Check size={11} strokeWidth={2.6} aria-hidden="true" />
                      </span>
                      {capability}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
