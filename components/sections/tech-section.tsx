import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { techGroups, techMarquee } from "@/lib/constants/technologies";

/**
 * The technology stack, grouped by layer. Content comes from
 * `lib/constants/technologies.ts` — one file to edit as the team's actual
 * capabilities change.
 */
export function TechSection() {
  return (
    <Section tone="panel" className="overflow-hidden border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="The stack we actually work in"
          description="Chosen for maintainability and long-term support. If something on your project needs a technology outside this list, we will say so rather than improvise."
        />

        <StaggerGroup
          as="ul"
          className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {techGroups.map((group) => (
            <StaggerItem
              as="li"
              key={group.title}
              className="group bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-850 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-500/10 text-brand-200 ring-1 ring-inset ring-brand-500/20">
                  <Icon name={group.icon} size={17} />
                </span>
                <h3 className="text-base font-medium text-fg">{group.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {group.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[0.75rem] text-fg-muted ring-1 ring-inset ring-line transition-colors duration-300 group-hover:ring-line-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      <Marquee items={techMarquee} className="mt-12" speedSeconds={54} />
    </Section>
  );
}
