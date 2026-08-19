import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/animated";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Eyebrow } from "@/components/ui/section-heading";
import type { FAQ } from "@/lib/constants/services";
import { siteConfig } from "@/lib/constants/site";

type FAQSectionProps = {
  items: FAQ[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

/**
 * Reused on the home page, every service page and the standalone FAQ page.
 * The heading sits alongside the list rather than above it, which keeps long
 * question lists from pushing the contact prompt off the screen.
 */
export function FAQSection({
  items,
  eyebrow = "FAQ",
  title = "Questions we're usually asked first",
  description = "If something here is not covered, ask us directly — we would rather answer it before you commit to anything.",
}: FAQSectionProps) {
  // The hairline keeps this distinct from a preceding panel section — on the
  // home page it follows Technology directly.
  return (
    <Section tone="panel" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>{eyebrow}</Eyebrow>

                <h2 className="mt-6 text-[1.75rem] font-semibold leading-tight tracking-tightest text-fg sm:text-4xl">
                  {title}
                </h2>

                <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {description}
                </p>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 transition-colors hover:text-aqua-300"
                >
                  {siteConfig.contact.email}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <FAQAccordion items={items} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
