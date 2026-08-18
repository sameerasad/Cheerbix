import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroVisual } from "@/components/hero/hero-visual";
import { AmbientGlow, Reveal } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/ui/decor";
import { Eyebrow } from "@/components/ui/section-heading";

const capabilities = [
  "Web",
  "Mobile",
  "UI/UX",
  "AI automation",
  "Marketing",
  "SEO",
  "Content",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
      <GridBackdrop fade="radial" />

      <AmbientGlow className="-left-40 -top-32 size-[38rem] bg-brand-700/25" />
      <AmbientGlow
        className="-right-32 top-10 size-[30rem] bg-aqua-600/18"
        intensity={0.8}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7 lg:pr-8">
            <Reveal>
              <Eyebrow>Digital solutions for modern businesses</Eyebrow>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 max-w-[19ch] text-[2.6rem] font-semibold leading-[1.04] tracking-tightest text-fg sm:text-6xl lg:text-[4.15rem]">
                We build digital experiences that{" "}
                <span className="text-gradient">move businesses forward.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                From websites and mobile apps to AI automation, SEO, marketing
                and content — we help businesses build, launch, and grow
                digitally.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </Button>

                <Button
                  href="/services"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Explore Our Services
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-12 border-t border-line pt-7">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-fg-faint">
                  One partner across
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
                  {capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-2 text-sm text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 rounded-full bg-aqua-400/70"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <HeroVisual className="mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
