import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/constants/testimonials";

export function TestimonialsSection() {
  const hasPlaceholders = testimonials.some((item) => item.isPlaceholder);

  return (
    <Section tone="line">
      <Container>
        <SectionHeading
          eyebrow="Client feedback"
          title="What working with Cherbix is like"
          description={
            hasPlaceholders
              ? "The quotes below are illustrative placeholders, marked as such, and will be replaced with approved client testimonials."
              : undefined
          }
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
