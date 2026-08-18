import { AlertTriangle, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { FadeRule } from "@/components/ui/decor";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { getService, services } from "@/lib/constants/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/utils/seo";
import { cn } from "@/lib/utils/cn";

type PageProps = { params: Promise<{ slug: string }> };

/** All seven service pages are known at build time and rendered statically. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "This service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

const accentText = {
  brand: "text-brand-200",
  aqua: "text-aqua-300",
  mint: "text-mint-400",
} as const;

const accentSurface = {
  brand: "bg-brand-500/10 ring-brand-500/20 text-brand-200",
  aqua: "bg-aqua-500/10 ring-aqua-500/20 text-aqua-300",
  mint: "bg-mint-400/10 ring-mint-400/20 text-mint-400",
} as const;

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.summary,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.heading}
        description={service.hero.body}
        accent={service.accent}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
        actions={
          <>
            <Button href="/contact" size="lg">
              Start a Project
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See related work
            </Button>
          </>
        }
        aside={
          <div className="rounded-2xl border border-line bg-ink-900/70 p-6 backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid size-11 place-items-center rounded-lg ring-1 ring-inset",
                  accentSurface[service.accent],
                )}
              >
                <Icon name={service.icon} size={20} />
              </span>
              <p className="text-sm font-medium text-fg">{service.title}</p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-fg-muted">
              {service.summary}
            </p>

            <FadeRule className="my-6" />

            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
              What this includes
            </p>
            <ul className="mt-4 space-y-2.5">
              {service.capabilities.slice(0, 4).map((capability) => (
                <li
                  key={capability.title}
                  className="flex items-start gap-2.5 text-sm text-fg-muted"
                >
                  <Check
                    size={14}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    className={cn("mt-1 shrink-0", accentText[service.accent])}
                  />
                  {capability.title}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Problem */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint ring-1 ring-inset ring-line">
                  <AlertTriangle size={12} aria-hidden="true" />
                  The problem
                </span>

                <h2 className="mt-6 text-[1.75rem] font-semibold leading-tight tracking-tightest text-fg sm:text-4xl">
                  {service.problem.heading}
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
                  {service.problem.body}
                </p>

                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {service.problem.symptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="flex items-start gap-3.5 py-4 text-[0.9375rem] leading-snug text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-fg-faint/50"
                      />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section tone="panel">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title={service.solution.heading}
            description={service.solution.body}
          />

          <StaggerGroup
            as="ul"
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {service.solution.pillars.map((pillar, index) => (
              <StaggerItem
                as="li"
                key={pillar.title}
                className="relative rounded-xl border border-line bg-ink-850/60 p-6 sm:p-7"
              >
                <span
                  className={cn(
                    "font-mono text-xs",
                    accentText[service.accent],
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-medium text-fg">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {pillar.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we deliver"
            description="The specific pieces of work this service covers."
          />

          <StaggerGroup
            as="ul"
            className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.capabilities.map((capability) => (
              <StaggerItem
                as="li"
                key={capability.title}
                className="bg-ink-950 p-6 transition-colors duration-300 hover:bg-ink-900 sm:p-7"
              >
                <h3 className="text-base font-medium text-fg">
                  {capability.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {capability.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Process + toolkit */}
      <Section tone="panel">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Process"
                title="How this work runs"
                size="md"
              />

              <ol className="mt-10 space-y-0">
                {service.process.map((step, index) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={index * 0.05}
                    className="group relative flex gap-5 border-t border-line py-6 last:border-b"
                  >
                    <span className="font-mono text-xs text-fg-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-fg">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Toolkit"
                title="What we work with"
                size="md"
              />

              <StaggerGroup as="ul" className="mt-10 space-y-6">
                {service.toolkit.map((group) => (
                  <StaggerItem as="li" key={group.group}>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                      {group.group}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[0.8125rem] text-fg-muted ring-1 ring-inset ring-line"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Outcomes"
            title="What changes for your business"
          />

          <StaggerGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <StaggerItem
                as="li"
                key={benefit.title}
                className="flex gap-4 rounded-xl border border-line bg-ink-850/50 p-6 sm:p-7"
              >
                <span
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ring-1 ring-inset",
                    accentSurface[service.accent],
                  )}
                >
                  <Check size={13} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-medium text-fg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <FAQSection
        items={service.faqs}
        title={`${service.title} — common questions`}
        description="Straight answers to what clients ask before starting this kind of project."
      />

      {/* Other services */}
      <Section tone="line" spacing="sm">
        <Container>
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
            Other services
          </h2>

          <ul className="mt-6 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full items-center justify-between gap-4 bg-ink-950 p-5 transition-colors duration-200 hover:bg-ink-900"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      name={other.icon}
                      size={17}
                      className="text-fg-faint transition-colors group-hover:text-brand-200"
                    />
                    <span className="text-[0.9375rem] text-fg-muted transition-colors group-hover:text-fg">
                      {other.shortTitle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-fg-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        description="Tell us the outcome you're after and we'll come back with what the work involves, what it costs, and how long it takes."
        primary={{ label: "Start a Project", href: "/contact" }}
      />
    </>
  );
}
