import type { Metadata } from "next";

import { Hero } from "@/components/hero/hero";
import { AIHighlight } from "@/components/sections/ai-highlight";
import { CTASection } from "@/components/sections/cta-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyCherbix } from "@/components/sections/why-cherbix";
import { JsonLd } from "@/components/ui/json-ld";
import { generalFaqs } from "@/lib/constants/faqs";
import { siteConfig } from "@/lib/constants/site";
import { buildMetadata, faqSchema } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

/**
 * Home page section order follows the intended visitor journey:
 * understand → trust → explore → evaluate → contact.
 *
 * Software engineering leads; SEO, marketing and content are positioned after
 * it as supporting capabilities rather than headline services.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      <Hero />
      <TrustStrip />
      <ServicesSection />
      <WhyCherbix />
      <FeaturedWork />
      <ProcessSection />
      <AIHighlight />
      <TechSection />
      <EngineeringSection />
      {/* Growth sits after the engineering material: it supports the software
          work rather than leading it. */}
      <GrowthSection />
      <TestimonialsSection />
      <FAQSection items={generalFaqs} />
      <CTASection />
    </>
  );
}
