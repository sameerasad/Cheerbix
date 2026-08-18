import type { IconKey } from "./icons";

/* -------------------------------------------------------------------------- */
/* Engagement process                                                          */
/* -------------------------------------------------------------------------- */

export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business, users, goals, and challenges.",
    detail:
      "Before anything is scoped we establish what the business is actually trying to change — and what has already been tried. Stakeholder interviews, a review of existing systems and data, and a hard look at the constraints nobody wrote down.",
    deliverables: [
      "Stakeholder and user interviews",
      "Current-state and systems review",
      "Objectives and success criteria",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    summary: "Define the right solution, technology, scope, and roadmap.",
    detail:
      "We decide what to build and, just as importantly, what not to build yet. Technology choices are justified against your requirements and your team's ability to maintain them — not against what is fashionable this year.",
    deliverables: [
      "Solution and architecture proposal",
      "Phased scope and roadmap",
      "Written estimate and timeline",
    ],
  },
  {
    number: "03",
    title: "Design",
    summary: "Create intuitive user experiences and polished interfaces.",
    detail:
      "Structure before surface. Information architecture and flows are agreed first, then interface design covering every real state — empty, loading, error and edge — and a component system that keeps later screens coherent.",
    deliverables: [
      "User flows and information architecture",
      "Interface design across breakpoints",
      "Component system and design tokens",
    ],
  },
  {
    number: "04",
    title: "Build",
    summary: "Develop, test, integrate, and optimize the solution.",
    detail:
      "Iterative development with working output you can review throughout. Integrations, automated checks, accessibility and performance budgets are part of the build rather than a phase appended to the end of it.",
    deliverables: [
      "Reviewable increments on a staging environment",
      "Integration, QA and accessibility passes",
      "Performance budgets verified in CI",
    ],
  },
  {
    number: "05",
    title: "Grow",
    summary: "Launch, analyze, improve, market, and scale.",
    detail:
      "Launch is the start of the useful data. Analytics, search visibility and user behaviour tell us what to improve next, and we keep working on the product rather than filing it as delivered.",
    deliverables: [
      "Deployment, monitoring and documentation",
      "Analytics and search-visibility reporting",
      "Prioritised improvement backlog",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Why Cherbix                                                                 */
/* -------------------------------------------------------------------------- */

export type Differentiator = {
  title: string;
  description: string;
  icon: IconKey;
};

export const differentiators: Differentiator[] = [
  {
    title: "Business first",
    description:
      "We understand the business objective before selecting the technology. The stack is a consequence of the requirement, never the starting point.",
    icon: "target",
  },
  {
    title: "One team",
    description:
      "Development, design, automation, marketing, SEO and content under one partner — so nothing is lost in a handoff between three suppliers.",
    icon: "users",
  },
  {
    title: "Built to scale",
    description:
      "Solutions are designed with future growth in mind. Architecture that holds up when the traffic, the team and the feature set all grow.",
    icon: "layers",
  },
  {
    title: "Transparent process",
    description:
      "Clear communication, milestones and expectations. You see working output throughout, and you hear about problems while they are still small.",
    icon: "compass",
  },
  {
    title: "Modern technology",
    description:
      "Current technologies and development practices, chosen for maintainability and long-term support rather than novelty.",
    icon: "zap",
  },
  {
    title: "Long-term partnership",
    description:
      "We focus on maintaining and improving digital products well beyond launch. Most of our work is with clients we have already delivered for.",
    icon: "handshake",
  },
];

/* -------------------------------------------------------------------------- */
/* About: mission, values, approach                                            */
/* -------------------------------------------------------------------------- */

export const mission =
  "To give growing businesses the kind of technology partner usually reserved for companies with an internal engineering department — one that understands the commercial objective, builds carefully, and stays involved after launch.";

export const vision =
  "A market where quality digital work is judged on what it does for the business, not on how impressive the pitch deck was.";

export type Value = {
  title: string;
  description: string;
  icon: IconKey;
};

export const values: Value[] = [
  {
    title: "Care is the default",
    description:
      "The 'cher' in Cherbix. We treat a client's product as something we will still be responsible for in two years, because usually we are.",
    icon: "handshake",
  },
  {
    title: "Say the difficult thing early",
    description:
      "If a requested feature is a bad idea, if a timeline is unrealistic, or if a project does not need us at all, we say so at the start rather than after invoicing for it.",
    icon: "messages",
  },
  {
    title: "Craft over throughput",
    description:
      "We would rather ship fewer things properly. Performance, accessibility and maintainability are part of the work, not upgrades.",
    icon: "sparkles",
  },
  {
    title: "Measure, then claim",
    description:
      "We report what the numbers show, including when the numbers are unflattering. Nothing on this site is a fabricated statistic.",
    icon: "bar-chart",
  },
  {
    title: "Leave things owned",
    description:
      "Your code, your infrastructure, your accounts, documented. A client should stay because the work is good, not because leaving is painful.",
    icon: "shield",
  },
  {
    title: "Keep learning in public",
    description:
      "Technology moves. We invest in staying current and write about what we learn rather than trading on what worked five years ago.",
    icon: "rocket",
  },
];

export const approach: { title: string; description: string }[] = [
  {
    title: "We start with the objective",
    description:
      "Every engagement begins with what the business is trying to change. A rebuild that does not move that number is an expensive redecoration.",
  },
  {
    title: "We scope honestly",
    description:
      "Phased scope, written estimates, and a clear statement of what is not included. Scope changes are raised as decisions, not absorbed silently.",
  },
  {
    title: "We work in the open",
    description:
      "Staging environments, regular reviews and direct access to the people doing the work. No account-manager layer between you and the build.",
  },
  {
    title: "We stay after launch",
    description:
      "Launch is when the useful data starts arriving. Most of our relationships continue well past it, which is how we prefer to work.",
  },
];

/* -------------------------------------------------------------------------- */
/* Credibility strip                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Deliberately qualitative. No invented client names, project counts or
 * revenue figures — replace these with verified facts as they become available.
 */
export const credibilityPoints: {
  label: string;
  value: string;
  icon: IconKey;
}[] = [
  {
    label: "Disciplines",
    value: "Build, design, automation and growth in one team",
    icon: "boxes",
  },
  {
    label: "Industries",
    value: "FinTech, healthcare, commerce, logistics and SaaS",
    icon: "building",
  },
  {
    label: "Engagements",
    value: "Startups, SMEs and established businesses",
    icon: "users",
  },
  {
    label: "Coverage",
    value: "Remote-first, working across time zones",
    icon: "globe",
  },
];

/** Placeholder client logo slots — swap for real marks once permission exists. */
export const clientLogoSlots = [
  "Client logo",
  "Client logo",
  "Client logo",
  "Client logo",
  "Client logo",
  "Client logo",
];

/* -------------------------------------------------------------------------- */
/* Digital growth journey                                                      */
/* -------------------------------------------------------------------------- */

export const growthJourney: {
  stage: string;
  title: string;
  description: string;
  icon: IconKey;
  href: string;
}[] = [
  {
    stage: "Idea",
    title: "Define what you're building",
    description:
      "Discovery, positioning and scope — turning an intention into something specific enough to build.",
    icon: "compass",
    href: "/about",
  },
  {
    stage: "Website",
    title: "Build the platform",
    description:
      "A fast, well-structured site or product that gives everything downstream something worth sending traffic to.",
    icon: "braces",
    href: "/services/web-development",
  },
  {
    stage: "Visibility",
    title: "Get found",
    description:
      "Technical SEO, content and search architecture that put you in front of people already looking.",
    icon: "search",
    href: "/services/seo",
  },
  {
    stage: "Leads",
    title: "Convert attention",
    description:
      "Campaigns, landing pages and measurement that turn visitors into qualified enquiries.",
    icon: "target",
    href: "/services/digital-marketing",
  },
  {
    stage: "Growth",
    title: "Compound it",
    description:
      "Automation, iteration and continuous improvement so results build on themselves rather than resetting each quarter.",
    icon: "bar-chart",
    href: "/services/ai-automation",
  },
];

/* -------------------------------------------------------------------------- */
/* AI highlight                                                                */
/* -------------------------------------------------------------------------- */

export const aiCapabilities: string[] = [
  "Automate repetitive workflows",
  "Integrate AI into existing products",
  "Build internal AI assistants",
  "Automate customer support triage",
  "Process documents and extract data",
  "Connect business systems end to end",
  "Improve operational efficiency",
];
