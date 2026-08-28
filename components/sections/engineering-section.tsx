import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { engineeringPractices } from "@/lib/constants/company";

/**
 * Security and engineering quality.
 *
 * Every item is a practice we follow, not a credential. Cherbix holds no
 * security certifications and none are implied — the closing note says so
 * plainly, which is worth more to a technical buyer than a vague badge.
 */
export function EngineeringSection() {
  return (
    <Section tone="line" className="overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Engineering quality"
          title="Built properly, and kept that way"
          description="The parts of software engineering that never appear in a demo but decide whether a system is still dependable in year three."
        />

        <StaggerGroup
          as="ul"
          className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {engineeringPractices.map((practice) => (
            <StaggerItem
              as="li"
              key={practice.title}
              className="group bg-ink-950 p-6 transition-colors duration-300 hover:bg-ink-900 sm:p-7"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-white/[0.04] text-fg-muted ring-1 ring-inset ring-line transition-colors duration-300 group-hover:bg-brand-500/10 group-hover:text-brand-200 group-hover:ring-brand-500/25">
                <Icon name={practice.icon} size={18} />
              </span>

              <h3 className="mt-5 text-base font-medium text-fg">
                {practice.title}
              </h3>

              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                {practice.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-fg-faint">
            These are engineering practices, not certifications. Cherbix does not
            hold a formal security accreditation and does not claim one — if your
            procurement process requires specific standards or an audit, tell us
            early and we will be straight with you about what we can evidence.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
