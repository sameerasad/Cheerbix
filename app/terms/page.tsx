import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply to your use of the Cherbix website. Client engagements are governed by a separate signed agreement.",
  path: "/terms",
});

/**
 * NOTE FOR THE CHERBIX TEAM
 * These terms cover website use only. Client work is governed by the signed
 * proposal or master services agreement, not by this page. Have both reviewed
 * by a qualified adviser before launch.
 */
const sections: LegalSection[] = [
  {
    heading: "Scope",
    paragraphs: [
      `These terms apply to your use of this website. They do not govern any engagement with ${siteConfig.name} — client work is covered by a separate written agreement, and where the two differ, that agreement takes precedence.`,
    ],
  },
  {
    heading: "Using this site",
    bullets: [
      "You may view, download and print pages for your own reference or for evaluating whether to work with us.",
      "You may not use the site in a way that damages it, disrupts access for others, or breaches any applicable law.",
      "You may not attempt to gain unauthorised access to any part of the site, its servers, or connected systems.",
      "Automated scraping at a rate that degrades service for others is not permitted.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      `The design, text, code and graphics on this site are owned by ${siteConfig.name} or its licensors and are protected by copyright. The ${siteConfig.name} name and logo are our trade marks and may not be used without written permission.`,
      "You may quote short extracts of published articles with clear attribution and a link to the original page.",
    ],
  },
  {
    heading: "Concept builds",
    paragraphs: [
      "Projects marked as concept builds are reference products developed by Cherbix itself. They are shown to demonstrate how we approach a class of problem. They do not represent work delivered for a client, and nothing in them should be read as a claim about a specific customer or a measured business result.",
    ],
  },
  {
    heading: "No professional advice",
    paragraphs: [
      "Articles and guidance published here are general information. They are not technical, legal, financial or professional advice for your specific circumstances, and you should not act on them without appropriate consultation.",
    ],
  },
  {
    heading: "Enquiries",
    paragraphs: [
      "Submitting the contact form does not create a contract or a client relationship, and it does not oblige either party to proceed. An engagement begins only when a written agreement is signed by both sides.",
      "Please do not send confidential or sensitive information through the contact form. If you need to share something under confidentiality, tell us and we will put an appropriate agreement in place first.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "The site links to third-party websites for convenience. We do not control them and are not responsible for their content, availability, or privacy practices.",
    ],
  },
  {
    heading: "Availability and liability",
    paragraphs: [
      "We work to keep the site available and accurate, but it is provided on an 'as is' basis without warranties of any kind. To the fullest extent permitted by law, we are not liable for any loss arising from use of, or inability to use, this website.",
      "Nothing in these terms excludes or limits liability where it would be unlawful to do so.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "We may update these terms from time to time. The version published on this page at the moment you use the site is the one that applies, and the date above records when it last changed.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about these terms can be sent to ${siteConfig.contact.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use for this website."
      intro="These cover using the site itself. Client engagements run on a separate signed agreement."
      path="/terms"
      updated="18 August 2026"
      sections={sections}
      footer={
        <p className="text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Before launch:</span> have these
          terms and your client-facing agreement reviewed by a qualified adviser,
          and add the governing law and jurisdiction clause appropriate to where
          Cherbix is registered.
        </p>
      }
    />
  );
}
