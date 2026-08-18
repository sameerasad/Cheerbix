import { Container } from "@/components/layout/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Icon } from "@/components/ui/icon";
import { clientLogoSlots, credibilityPoints } from "@/lib/constants/company";

/**
 * The credibility strip directly beneath the hero.
 *
 * Everything here is qualitative on purpose. No project counts, no client
 * names and no percentages appear until there are verified ones to publish —
 * the logo row is explicitly labelled as awaiting client permission.
 */
export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative border-y border-line bg-ink-900/60"
    >
      <Container className="py-14 sm:py-16">
        <Reveal>
          <h2
            id="trust-heading"
            className="max-w-2xl text-lg font-medium leading-snug text-fg sm:text-xl"
          >
            Helping businesses turn digital ideas into real-world results.
          </h2>
        </Reveal>

        <StaggerGroup
          as="ul"
          className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credibilityPoints.map((point) => (
            <StaggerItem as="li" key={point.label} className="flex gap-3.5">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-200 ring-1 ring-inset ring-brand-500/20">
                <Icon name={point.icon} size={17} />
              </span>
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  {point.label}
                </p>
                <p className="mt-1.5 text-[0.9375rem] leading-snug text-fg">
                  {point.value}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Client logo row — placeholders until marks are cleared for use. */}
        <div className="mt-12 border-t border-line pt-8">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
            Client logos
            <span className="ml-2 font-normal normal-case tracking-normal text-fg-faint/70">
              — placeholders, pending permission to display
            </span>
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogoSlots.map((slot, index) => (
              <li
                key={index}
                className="flex h-14 items-center justify-center rounded-lg border border-dashed border-line-strong/60 text-xs text-fg-faint/70"
              >
                {slot}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
