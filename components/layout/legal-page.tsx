import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/animated";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/**
 * Shared shell for the privacy and terms pages, so both stay structurally
 * identical and only their content differs.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  path,
  sections,
  footer,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  /** Human-readable date this document was last revised. */
  updated: string;
  /** Route path, used for the breadcrumb trail. */
  path: string;
  sections: LegalSection[];
  footer?: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: eyebrow, href: path },
        ]}
      />

      <Section>
        <Container size="narrow">
          <Reveal>
            <p className="text-sm text-fg-faint">Last updated: {updated}</p>
          </Reveal>

          <div className="mt-10 space-y-12">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={Math.min(index * 0.03, 0.15)}>
                <section>
                  <h2 className="text-xl font-semibold tracking-tight text-fg">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-[1.75] text-fg-muted"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3.5 text-base leading-[1.7] text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-aqua-400/60"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>

          {footer ? (
            <Reveal>
              <div className="mt-14 rounded-xl border border-line bg-ink-900/60 p-6">
                {footer}
              </div>
            </Reveal>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
