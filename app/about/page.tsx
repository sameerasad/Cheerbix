import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { TechSection } from "@/components/sections/tech-section";
import { WhyCherbix } from "@/components/sections/why-cherbix";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { approach, mission, values, vision } from "@/lib/constants/company";
import { siteConfig } from "@/lib/constants/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Cherbix is a digital solutions company built around one idea: technology delivered with care, measured against what it does for the business.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Cherbix"
        title="Technology built with care. Digital experiences built for growth."
        description="We are a digital solutions team covering build, design, automation and growth — set up to be the partner a business keeps, rather than the supplier it replaces."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        actions={
          <>
            <Button href="/contact" size="lg">
              Start a Project
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View Our Work
            </Button>
          </>
        }
      />

      {/* Who we are */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>

                <div className="mt-7 space-y-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                  <p>
                    Cherbix exists because of a gap most growing businesses run
                    into. They need a website, then an app, then the automation
                    that makes the operation work, then someone to make any of it
                    visible in search. Assembling three or four suppliers to
                    cover that is expensive, and most of the cost is spent in the
                    gaps between them.
                  </p>
                  <p>
                    We built a team that covers the whole span — development,
                    design, automation, marketing, SEO and content — so the
                    strategy, the build and the growth work are the same
                    conversation rather than three that contradict each other.
                  </p>
                  <p>
                    The name carries the intent:{" "}
                    <span className="text-fg">cher</span> for the care we take
                    with a client&apos;s product, <span className="text-fg">bix</span>{" "}
                    for the bits of technology it is made of. That is the whole
                    philosophy, and we would rather demonstrate it than write
                    about it.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Mission / vision */}
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-line bg-ink-900/60 p-6 sm:p-7">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-aqua-300">
                      Mission
                    </p>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                      {mission}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-line bg-ink-900/60 p-6 sm:p-7">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-200">
                      Vision
                    </p>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                      {vision}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="panel">
        <Container>
          <SectionHeading
            eyebrow="Approach"
            title="How we actually work"
            description="Four commitments that shape every engagement, whatever the discipline."
          />

          <StaggerGroup as="ol" className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
            {approach.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.title}
                className="bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-850 sm:p-8"
              >
                <span className="font-mono text-xs text-aqua-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-fg">{item.title}</h3>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="What we hold ourselves to"
            description="Written as commitments rather than adjectives, so they can be checked against how we behave."
          />

          <StaggerGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerItem
                as="li"
                key={value.title}
                className="group rounded-xl border border-line bg-ink-850/50 p-6 transition-[border-color,background-color] duration-300 hover:border-line-strong hover:bg-ink-800/60 sm:p-7"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-white/[0.04] text-fg-muted ring-1 ring-inset ring-line transition-colors duration-300 group-hover:bg-brand-500/10 group-hover:text-brand-200 group-hover:ring-brand-500/25">
                  <Icon name={value.icon} size={18} />
                </span>
                <h3 className="mt-5 text-base font-medium text-fg">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <WhyCherbix />
      <TechSection />

      <CTASection
        title="Let's talk about what you're building."
        description={`We reply to every enquiry personally. ${siteConfig.contact.responseTime}`}
        primary={{ label: "Start a Project", href: "/contact" }}
      />
    </>
  );
}
