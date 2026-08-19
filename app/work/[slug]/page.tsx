import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { AbstractCover, GridBackdrop } from "@/components/ui/decor";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section-heading";
import { getProject, projects } from "@/lib/constants/projects";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "This project could not be found.",
      path: `/work/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${project.name} — ${project.category}`,
    description: project.excerpt,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.name, path: `/work/${project.slug}` },
        ])}
      />

      {/* Masthead */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-12 sm:pt-16">
        <GridBackdrop fade="radial" />

        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[0.8125rem] text-fg-faint transition-colors hover:text-fg"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All work
            </Link>
          </nav>

          <Reveal>
            <Eyebrow>
              {project.kind === "concept"
                ? `${project.category} · Concept build`
                : project.category}
            </Eyebrow>

            <h1 className="mt-6 max-w-3xl text-[2.15rem] font-semibold leading-[1.06] tracking-tightest text-fg sm:text-5xl lg:text-[3.5rem]">
              {project.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {project.intro}
            </p>
          </Reveal>

          {/* Fact row */}
          <Reveal delay={0.08}>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4">
              <Fact
                label={project.kind === "concept" ? "Type" : "Client"}
                value={
                  project.kind === "concept"
                    ? "Cherbix reference build"
                    : (project.client ?? "—")
                }
              />
              <Fact label="Year" value={project.year} />
              <Fact label="Services" value={project.services.join(", ")} />
              <Fact label="Stack" value={project.technologies.join(", ")} />
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Cover */}
      <Container className="relative -mt-0 pt-10 sm:pt-14">
        <Reveal>
          <div className="aspect-16/9 overflow-hidden rounded-2xl border border-line sm:aspect-21/9">
            <AbstractCover
              palette={project.palette}
              seed={project.slug}
              variant="orbit"
            />
          </div>
        </Reveal>
      </Container>

      {/* Challenge */}
      <Section spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-[1.6rem] font-semibold leading-tight tracking-tightest text-fg sm:text-3xl">
                  The challenge
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
                  {project.challenge}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="panel">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <Eyebrow>Approach</Eyebrow>
                  <h2 className="mt-6 text-[1.6rem] font-semibold leading-tight tracking-tightest text-fg sm:text-3xl">
                    How we worked through it
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-0">
                {project.approach.map((step, index) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={index * 0.05}
                    className="border-t border-line py-7 last:border-b"
                  >
                    <div className="flex gap-5">
                      <span className="font-mono text-xs text-fg-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-fg">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Solution</Eyebrow>
                <h2 className="mt-6 text-[1.6rem] font-semibold leading-tight tracking-tightest text-fg sm:text-3xl">
                  {project.kind === "concept"
                    ? "What the build contains"
                    : "What we delivered"}
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <StaggerGroup as="ul" className="grid gap-3 sm:grid-cols-2">
                {project.solution.map((item) => (
                  <StaggerItem
                    as="li"
                    key={item}
                    className="rounded-xl border border-line bg-ink-850/50 p-5 text-[0.9375rem] leading-relaxed text-fg-muted"
                  >
                    {item}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      {/* Highlights */}
      <Section tone="panel">
        <Container>
          <Reveal>
            <Eyebrow>{project.kind === "concept" ? "Highlights" : "Outcome"}</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[1.6rem] font-semibold leading-tight tracking-tightest text-fg sm:text-3xl">
              {project.kind === "concept"
                ? "What the build demonstrates"
                : "What the project changed"}
            </h2>
          </Reveal>

          <StaggerGroup
            as="dl"
            className="mt-12 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4"
          >
            {project.highlights.map((highlight) => (
              <StaggerItem key={highlight.label} className="bg-ink-900 p-6 sm:p-7">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  {highlight.label}
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-snug text-fg">
                  {highlight.value}
                </dd>
              </StaggerItem>
            ))}
          </StaggerGroup>

        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 ? (
        <Section tone="line" spacing="sm">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                More builds
              </h2>
              <Button href="/work" variant="ghost" size="sm">
                View all
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <PortfolioCard
                    project={item}
                    size="compact"
                    coverVariant={index === 0 ? "wave" : "grid"}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTASection
        title="Need something like this built?"
        description="Tell us where you are now and what you need it to do. We'll come back with a practical plan."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ink-900 p-5">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-snug text-fg-muted">{value}</dd>
    </div>
  );
}
