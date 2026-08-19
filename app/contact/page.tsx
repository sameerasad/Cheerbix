import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/animated";
import { GridBackdrop } from "@/components/ui/decor";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icons";
import { generalFaqs } from "@/lib/constants/faqs";
import { siteConfig, socialLinks } from "@/lib/constants/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell us what you're trying to achieve. Cherbix replies to project enquiries within one business day.",
  path: "/contact",
});

/** Kept short — the full list lives on /faqs. */
const contactFaqs = generalFaqs.slice(0, 4);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28">
        <GridBackdrop fade="radial" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-brand-700/20 blur-[110px]"
        />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Copy + details */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>

                <h1 className="mt-6 text-[2.15rem] font-semibold leading-[1.06] tracking-tightest text-fg sm:text-5xl">
                  Tell us what you&apos;re trying to achieve.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                  Not a form that disappears into a queue. Describe the problem
                  and you&apos;ll get a considered reply — usually with a couple
                  of specific questions rather than a brochure.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <dl className="mt-10 space-y-px overflow-hidden rounded-xl border border-line">
                  <ContactRow
                    icon={<Mail size={16} strokeWidth={1.7} aria-hidden="true" />}
                    label="Email"
                    value={siteConfig.contact.email}
                    href={`mailto:${siteConfig.contact.email}`}
                  />
                  {siteConfig.contact.phone ? (
                    <ContactRow
                      icon={<Phone size={16} strokeWidth={1.7} aria-hidden="true" />}
                      label="Phone"
                      value={siteConfig.contact.phone}
                      href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                    />
                  ) : null}
                  <ContactRow
                    icon={<Clock size={16} strokeWidth={1.7} aria-hidden="true" />}
                    label="Availability"
                    value={siteConfig.contact.availability}
                  />
                  {siteConfig.contact.location ? (
                    <ContactRow
                      icon={<MapPin size={16} strokeWidth={1.7} aria-hidden="true" />}
                      label="Location"
                      value={siteConfig.contact.location}
                    />
                  ) : null}
                </dl>

                {socialLinks.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                      Elsewhere
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {socialLinks.map((social) => (
                        <li key={social.label}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                          >
                            <SocialIcon name={social.icon} size={15} />
                            {social.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-line bg-ink-900/70 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
                  <h2 className="text-lg font-medium text-fg">
                    Start a project
                  </h2>
                  <p className="mt-2 text-sm text-fg-muted">
                    {siteConfig.contact.responseTime}
                  </p>

                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Short FAQ to remove the last objections */}
      <Section tone="panel" spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Before you write</Eyebrow>
                <h2 className="mt-6 text-[1.6rem] font-semibold leading-tight tracking-tightest text-fg sm:text-3xl">
                  A few things people ask first
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.06}>
                <FAQAccordion items={contactFaqs} defaultOpen={null} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3.5 bg-ink-900/40 p-4 sm:p-5">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-fg-muted ring-1 ring-inset ring-line">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
          {label}
        </dt>
        <dd className="mt-1 text-[0.9375rem] text-fg-muted">
          {href ? (
            <a href={href} className="transition-colors hover:text-fg">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  );
}
