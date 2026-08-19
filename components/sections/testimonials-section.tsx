import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/constants/testimonials";

/**
 * Renders nothing until there are real testimonials to show — an empty
 * section, or one filled with invented quotes, is worse than no section.
 * Adding an entry to `lib/constants/testimonials.ts` brings it back.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <Section tone="line">
      <Container>
        <SectionHeading
          eyebrow="Client feedback"
          title="What working with Cherbix is like"
        />

        <StaggerGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <StaggerItem as="li" key={testimonial.id} className="min-w-0">
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
