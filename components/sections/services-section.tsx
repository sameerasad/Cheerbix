import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/services/service-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/constants/services";

/**
 * Home page services grid.
 *
 * The layout is deliberately uneven — the first card spans two columns on
 * large screens — so the section does not read as another three-by-three
 * template block.
 */
export function ServicesSection() {
  const [lead, ...rest] = services;

  return (
    <Section id="services" tone="line">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Technology capabilities from idea to scale"
          description="Custom software, ERP and business systems, web and mobile platforms, AI and automation — with design and digital growth behind them."
          action={
            <Button href="/services" variant="outline" size="md">
              All services
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          }
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerItem className="lg:col-span-2">
            <ServiceCard service={lead} variant="wide" className="h-full" />
          </StaggerItem>

          {rest.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
