import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { Reveal } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/lib/constants/projects";

/**
 * Featured work in an asymmetric arrangement — one lead build beside a
 * stacked pair — rather than three equal columns.
 */
export function FeaturedWork() {
  const [lead, second, third] = featuredProjects;

  return (
    <Section id="work" tone="line">
      <Container>
        <SectionHeading
          eyebrow="Concept builds"
          title="Ideas we've turned into digital experiences"
          description="Reference builds we develop ourselves to work through a class of product properly — the constraints, the decisions they force, and what the finished thing contains."
          action={
            <Button href="/work" variant="outline">
              See all builds
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <PortfolioCard project={lead} size="feature" coverVariant="orbit" />
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={0.08}>
              <PortfolioCard
                project={second}
                size="compact"
                coverVariant="wave"
              />
            </Reveal>
            <Reveal delay={0.14}>
              <PortfolioCard
                project={third}
                size="compact"
                coverVariant="grid"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
