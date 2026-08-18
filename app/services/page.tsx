import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceCard } from "@/components/services/service-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, supportingServices } from "@/lib/constants/services";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, mobile apps, UI/UX design, AI automation, digital marketing, SEO and content writing — delivered by one team, under one plan.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title="Everything you need to build, launch and grow digitally."
        description="Seven core disciplines, delivered by one team. Most engagements combine several of them — that is the point of using a single partner rather than assembling three."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        actions={
          <>
            <Button href="/contact" size="lg">
              Get a Project Estimate
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View Our Work
            </Button>
          </>
        }
      />

      {/* Core services */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Core services"
            title="Where we do the work"
            description="Each service has its own page covering the problem it solves, how we approach it, the tools involved and what you get."
          />

          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard
                  service={service}
                  variant="wide"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Supporting services */}
      <Section tone="panel">
        <Container>
          <SectionHeading
            eyebrow="Also delivered"
            title="Capabilities that come with the engagement"
            description="These are not sold as standalone products — they are part of how a wider project gets delivered and supported."
          />

          <StaggerGroup
            as="ul"
            className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2"
          >
            {supportingServices.map((item) => (
              <StaggerItem
                as="li"
                key={item.title}
                className="bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-850 sm:p-8"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-aqua-500/10 text-aqua-300 ring-1 ring-inset ring-aqua-500/20">
                  <Icon name={item.icon} size={18} />
                </span>
                <h3 className="mt-5 text-base font-medium text-fg">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-md text-[0.9375rem] leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <ProcessSection />

      <CTASection
        title="Not sure which of these you need?"
        description="Describe the outcome you're after. We'll tell you what the work actually involves — including when it's less than you expected."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "See how we work", href: "/about" }}
      />
    </>
  );
}
