import type { IconKey } from "./icons";

/**
 * Solutions are the outcome-shaped view of the same capabilities the Services
 * pages describe discipline by discipline. People arrive knowing the problem
 * ("our operations run on spreadsheets") far more often than the discipline.
 */

export type Solution = {
  id: string;
  /** The situation, in the client's words. */
  situation: string;
  title: string;
  description: string;
  icon: IconKey;
  /** Which service pages this outcome draws on. */
  services: { label: string; href: string }[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    id: "launch",
    situation: "We have an idea and need to get it in front of users.",
    title: "Launch a new digital product",
    description:
      "A scoped first release aimed at learning quickly — built on foundations that will not need replacing once the product finds its shape.",
    icon: "rocket",
    services: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
    ],
    outcomes: [
      "A defined MVP scope you can actually ship",
      "Working product in front of real users",
      "Analytics from day one to guide version two",
    ],
  },
  {
    id: "replatform",
    situation: "Our website is slow, dated, and painful to update.",
    title: "Replace an ageing website",
    description:
      "A rebuild that protects the search visibility you already have, hands content control back to your marketing team, and holds a performance budget.",
    icon: "gauge",
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "SEO", href: "/services/seo" },
    ],
    outcomes: [
      "Rankings preserved through migration",
      "Core Web Vitals budgets enforced in CI",
      "Content publishable without a developer",
    ],
  },
  {
    id: "automate",
    situation: "Our team spends the week on repetitive manual work.",
    title: "Automate manual operations",
    description:
      "We measure the process first, automate the genuinely repeatable part, and keep the judgement with your team — with every action logged.",
    icon: "workflow",
    services: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Web Development", href: "/services/web-development" },
    ],
    outcomes: [
      "A measured before-and-after, not an estimate",
      "Human review queues for anything uncertain",
      "Systems connected end to end",
    ],
  },
  {
    id: "demand",
    situation: "We're invisible to people already looking for us.",
    title: "Grow organic and paid demand",
    description:
      "Measurement first, then the channels. Technical SEO, content and campaigns run against a funnel that reports on pipeline rather than impressions.",
    icon: "bar-chart",
    services: [
      { label: "SEO", href: "/services/seo" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Content Writing", href: "/services/content-writing" },
    ],
    outcomes: [
      "Attribution you can make budget decisions on",
      "Content built around real search intent",
      "Reporting on cost per qualified opportunity",
    ],
  },
  {
    id: "internal",
    situation: "Our operation has outgrown spreadsheets.",
    title: "Build internal business software",
    description:
      "Custom tools for the process that is specific to how you compete — with proper permissions, an audit trail and constraints a spreadsheet cannot enforce.",
    icon: "building",
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "AI Automation", href: "/services/ai-automation" },
    ],
    outcomes: [
      "Role-based access and a complete audit trail",
      "Validation that prevents bad data at entry",
      "Integrations with the systems you already run",
    ],
  },
  {
    id: "extend",
    situation: "Our in-house team needs capacity or a missing discipline.",
    title: "Extend an existing team",
    description:
      "We work inside your conventions, tooling and review process — taking a workstream or covering a discipline you do not have internally.",
    icon: "users",
    services: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Content Writing", href: "/services/content-writing" },
    ],
    outcomes: [
      "Your process and standards, not ours imposed",
      "A defined workstream with clear ownership",
      "Knowledge that stays with your team",
    ],
  },
];

/** Sectors we have worked in. Descriptive, not a claim of specialisation. */
export const industries: { name: string; note: string }[] = [
  { name: "FinTech", note: "Regulated flows, auditability, document handling" },
  { name: "Healthcare", note: "Accessibility, offline reliability, sensitive data" },
  { name: "E-commerce", note: "Catalogue scale, search visibility, checkout" },
  { name: "SaaS", note: "Dashboards, onboarding, design systems" },
  { name: "Logistics", note: "Field tooling, operations automation" },
  { name: "Professional services", note: "Lead generation, content, credibility" },
];
