import { ArrowRight, MessageSquare } from "lucide-react";

import { Container } from "@/components/layout/container";
import { AmbientGlow, Reveal } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/ui/decor";
import { siteConfig } from "@/lib/constants/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/**
 * The closing conversion panel. Visually the loudest block on the page — it is
 * the one place the brand gradient runs across a full-width surface, so it
 * reads as the end of the argument rather than another section.
 */
export function CTASection({
  title = "Have an idea? Let's build it.",
  description = "Tell us what you're trying to achieve. We'll help you turn the idea into a practical digital solution.",
  primary = { label: "Start a Project", href: "/contact" },
  secondary = { label: "Talk to Cherbix", href: `mailto:${siteConfig.contact.email}` },
}: CTASectionProps) {
  // The chat icon only makes sense on the "email us" variant.
  const secondaryIsEmail = secondary.href.startsWith("mailto:");

  return (
    <section className="relative px-5 pb-20 pt-4 sm:px-7 sm:pb-24 lg:px-10 lg:pb-28">
      <Container size="wide" className="px-0 sm:px-0 lg:px-0">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-2xl border border-brand-500/20 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <GridBackdrop fade="radial" className="opacity-70" />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-aqua-400/60 to-transparent"
            />

            <AmbientGlow className="left-1/2 top-[-10rem] size-[36rem] -translate-x-1/2 bg-brand-600/25" />
            <AmbientGlow
              className="bottom-[-14rem] right-[-6rem] size-[28rem] bg-aqua-600/15"
              intensity={0.8}
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-tightest text-fg sm:text-5xl lg:text-[3.25rem]">
                {title}
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                {description}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primary.href} size="lg" className="w-full sm:w-auto">
                  {primary.label}
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </Button>

                <Button
                  href={secondary.href}
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {secondaryIsEmail ? (
                    <MessageSquare size={17} aria-hidden="true" />
                  ) : null}
                  {secondary.label}
                </Button>
              </div>

              <p className="mt-8 text-sm text-fg-faint">
                {siteConfig.contact.responseTime}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
