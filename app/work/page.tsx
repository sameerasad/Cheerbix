import { Info } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { projectCategories, projects } from "@/lib/constants/projects";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies showing how Cherbix scopes, designs, builds and hands over digital products across FinTech, healthcare, commerce, SaaS and logistics.",
  path: "/work",
});

/** Alternates cover treatments so the grid does not read as a repeated tile. */
const coverVariants = ["orbit", "grid", "wave"] as const;

export default function WorkPage() {
  const allAreDemos = projects.every((project) => project.isDemo);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHero
        eyebrow="Selected work"
        title="Ideas we've turned into digital experiences."
        description="Each case study covers the actual problem, the decisions we made, and what the client walked away owning."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
        aside={
          <ul className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-line bg-ink-900/60 px-3.5 py-1.5 text-[0.8125rem] text-fg-muted"
              >
                {category}
              </li>
            ))}
          </ul>
        }
      />

      <Section>
        <Container>
          {allAreDemos ? (
            <Reveal>
              <div className="mb-12 flex items-start gap-3.5 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-5">
                <Info
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-amber-300/90"
                />
                <p className="text-sm leading-relaxed text-fg-muted">
                  <span className="font-medium text-fg">
                    These are demonstration case studies.
                  </span>{" "}
                  Every project below is fictional and illustrative — written to
                  show how we scope and document real work. No entry represents
                  an actual client, and none of the outcomes listed are measured
                  business results. Real case studies will replace them as
                  clients approve publication.
                </p>
              </div>
            </Reveal>
          ) : null}

          {projects.length === 0 ? (
            <EmptyWork />
          ) : (
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {projects.map((project, index) => {
                // First and fourth entries take the wider slot, producing a
                // deliberately uneven rhythm down the page.
                const isWide = index % 3 === 0;

                return (
                  <StaggerItem
                    key={project.slug}
                    className={isWide ? "lg:col-span-4" : "lg:col-span-2"}
                  >
                    <PortfolioCard
                      project={project}
                      size={isWide ? "feature" : "default"}
                      coverVariant={coverVariants[index % coverVariants.length]}
                    />
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          )}
        </Container>
      </Section>

      <CTASection
        title="Your project could be the next one here."
        description="Tell us what you're building. We'll tell you honestly whether we're the right team for it."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}

/** Rendered when the portfolio has no entries at all. */
function EmptyWork() {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong px-6 py-20 text-center">
      <h2 className="text-lg font-medium text-fg">No case studies published yet</h2>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-fg-muted">
        We&apos;re preparing write-ups of recent projects. In the meantime, the
        services pages cover how we approach each type of work.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/services" variant="secondary">
          Explore services
        </Button>
        <Button href="/contact">Start a project</Button>
      </div>
    </div>
  );
}
