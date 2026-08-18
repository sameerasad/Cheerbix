import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Cherbix collects, uses and protects the personal information submitted through this website.",
  path: "/privacy",
});

/**
 * NOTE FOR THE CHERBIX TEAM
 * This is a plain-language starting point, not legal advice. Have it reviewed
 * against the jurisdictions you operate in (UK/EU GDPR, CCPA, and any local
 * requirements) before launch, and fill in the controller details below.
 */
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${siteConfig.name} operates this website and is the controller of the personal information described in this policy. You can reach us at ${siteConfig.contact.email} with any question about how your data is handled.`,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "We collect only what we need to respond to you and to understand how the site is used.",
    ],
    bullets: [
      "Information you submit through the contact form: name, email address, company, the service and budget range you select, an optional timeline, and the project details you write.",
      "Information you send us directly by email or phone.",
      "Usage data collected by analytics, where enabled — pages viewed, approximate location derived from IP, device and browser type, and referring source.",
      "Technical data required to serve the site securely, such as IP address in server logs.",
    ],
  },
  {
    heading: "How we use it",
    bullets: [
      "To reply to your enquiry and, if it progresses, to prepare a proposal.",
      "To provide and support services you engage us for.",
      "To understand which parts of the site are useful and improve them.",
      "To meet legal, accounting and security obligations.",
    ],
    paragraphs: [
      "We do not sell personal information, and we do not use enquiry details to add you to a marketing list without your explicit consent.",
    ],
  },
  {
    heading: "Legal basis",
    paragraphs: [
      "Where GDPR applies, we rely on: your consent (for optional analytics and any marketing communications), the necessity of processing to take steps at your request before entering a contract (responding to an enquiry), the performance of a contract (delivering engaged services), and our legitimate interests in securing and improving the site.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "The site itself sets no advertising cookies. Where analytics is enabled, it may set cookies or similar identifiers to measure usage. Analytics is configured through environment variables and is disabled entirely when those are unset — meaning no third-party analytics scripts are loaded at all.",
      "You can block or delete cookies through your browser settings without losing access to any part of the site.",
    ],
  },
  {
    heading: "Sharing and processors",
    paragraphs: [
      "We share personal information only with service providers that help us operate the site and communicate with you — for example hosting, email delivery and analytics providers. Each processes data on our instructions under a contract.",
      "We may disclose information where required by law or to protect our legal rights.",
    ],
  },
  {
    heading: "Retention",
    paragraphs: [
      "Enquiry correspondence is kept for as long as needed to respond and, where a relationship follows, for the duration of that relationship plus any period required for legal and accounting purposes. Enquiries that do not progress are deleted once they are no longer relevant.",
    ],
  },
  {
    heading: "Your rights",
    bullets: [
      "Request a copy of the personal information we hold about you.",
      "Ask us to correct information that is inaccurate or incomplete.",
      "Ask us to delete information where there is no continuing reason to keep it.",
      "Object to or ask us to restrict certain processing.",
      "Withdraw consent at any time, where processing is based on consent.",
      "Lodge a complaint with your local data protection authority.",
    ],
    paragraphs: [
      `To exercise any of these, email ${siteConfig.contact.email}. We respond within one month.`,
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "The site is served over HTTPS, form submissions are transmitted encrypted, and credentials for third-party services are held as server-side environment variables that are never exposed to the browser. No system is perfectly secure, but we take reasonable technical and organisational measures appropriate to the data involved.",
    ],
  },
  {
    heading: "International transfers",
    paragraphs: [
      "Our service providers may process data outside your country. Where that happens, we rely on appropriate safeguards such as standard contractual clauses.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "If this policy changes materially we will update the date at the top of this page and, where appropriate, notify you directly.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information."
      intro="Short version: we collect what we need to reply to you, we don't sell it, and you can ask us to delete it."
      path="/privacy"
      updated="18 August 2026"
      sections={sections}
      footer={
        <p className="text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Before launch:</span> have this
          policy reviewed by a qualified adviser for the jurisdictions Cherbix
          operates in, and add the registered company details and any supervisory
          authority information required there.
        </p>
      }
    />
  );
}
