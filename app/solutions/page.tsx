import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries, solutions } from "@/lib/constants/solutions";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Outcome-led engagements: launch a product, replace an ageing website, automate manual operations, grow demand, build internal software, or extend your team.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <PageHero
        eyebrow="Solutions"
        title="Start from the problem, not the service list."
        description="Most people arrive knowing what is wrong rather than which discipline fixes it. These are the six situations we are brought in for most often."
        accent="aqua"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
        ]}
        actions={
          <>
            <Button href="/contact" size="lg">
              Talk to an Expert
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Browse by service
            </Button>
          </>
        }
      />

      <Section>
        <Container>
          <StaggerGroup as="ul" className="grid gap-4 lg:grid-cols-2">
            {solutions.map((solution) => (
              <StaggerItem as="li" key={solution.id}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-ink-850/50 p-6 transition-[border-color,background-color] duration-300 hover:border-line-strong hover:bg-ink-800/60 sm:p-8">
                  {/* The situation, quoted in the client's voice */}
                  <p className="border-l-2 border-aqua-500/40 pl-4 text-[0.9375rem] italic leading-relaxed text-fg-muted">
                    “{solution.situation}”
                  </p>

                  <div className="mt-6 flex items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-200 ring-1 ring-inset ring-brand-500/20">
                      <Icon name={solution.icon} size={18} />
                    </span>
                    <h2 className="mt-1.5 text-lg font-medium text-fg">
                      {solution.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {solution.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {solution.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-fg-muted"
                      >
                        <Check
                          size={13}
                          strokeWidth={2.4}
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-aqua-300"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                      Draws on
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {solution.services.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1 rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[0.8125rem] text-fg-muted ring-1 ring-inset ring-line transition-colors hover:bg-white/[0.07] hover:text-fg"
                          >
                            {service.label}
                            <ArrowUpRight size={12} aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Industries */}
      <Section tone="panel">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we've worked in"
            description="Listed because the constraints differ, not as a claim of exclusive specialisation. If your sector isn't here, the approach still applies."
          />

          <StaggerGroup
            as="ul"
            className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <StaggerItem
                as="li"
                key={industry.name}
                className="bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-850"
              >
                <h3 className="text-base font-medium text-fg">{industry.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {industry.note}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <GrowthSection />

      <CTASection
        title="Which of these sounds like you?"
        description="Describe the situation in your own words. We'll tell you what the work involves and whether we're the right team for it."
        primary={{ label: "Get a Project Estimate", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />
    </>
  );
}
