import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/animated";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section-heading";
import { generalFaqs } from "@/lib/constants/faqs";
import { services } from "@/lib/constants/services";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers on how Cherbix projects run, what they cost, how long they take, and what happens after launch.",
  path: "/faqs",
});

export default function FAQsPage() {
  // Structured data covers the general set only; service FAQs are already
  // marked up on their own pages, and duplicating them here would compete.
  return (
    <>
      <JsonLd
        data={[
          faqSchema(generalFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="FAQs"
        title="Questions, answered before you have to ask."
        description="How projects run, what they cost, how long they take, and what happens once something is live."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Eyebrow>General</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-fg">
                Working with Cherbix
              </h2>
            </Reveal>

            <Reveal delay={0.05} className="mt-8">
              <FAQAccordion items={generalFaqs} />
            </Reveal>

            {services.map((service, index) => (
              <div key={service.slug} className="mt-16">
                <Reveal delay={index * 0.02}>
                  <Eyebrow>{service.title}</Eyebrow>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-fg">
                    {service.title} questions
                  </h2>
                </Reveal>

                <Reveal delay={0.04} className="mt-8">
                  <FAQAccordion items={service.faqs} defaultOpen={null} />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still have a question?"
        description="Ask it directly. We'd rather answer it now than have you guess."
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
