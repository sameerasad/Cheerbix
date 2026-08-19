/**
 * PORTFOLIO
 *
 * Two kinds of entry are supported:
 *
 * - `concept` — a reference build Cherbix developed itself to work through a
 *   class of product properly. No client is named or implied, and nothing is
 *   presented as a delivered engagement or a measured business result.
 * - `client`  — real delivered work. Set `kind: "client"` and fill in
 *   `client`; the UI then shows the client row and reads as a case study.
 *
 * Everything currently listed is a concept build. Do not switch an entry to
 * `client` unless it describes work actually delivered and cleared for
 * publication.
 */

export type ProjectHighlight = {
  label: string;
  /** Qualitative by design — no invented metrics. */
  value: string;
};

export type Project = {
  slug: string;
  /** Descriptive product name, not a brand. */
  name: string;
  category: string;
  /** Short line for the card. */
  excerpt: string;
  /** Longer intro for the detail page. */
  intro: string;
  kind: "concept" | "client";
  /** Only set when `kind` is "client". */
  client?: string;
  year: string;
  services: string[];
  technologies: string[];
  /** Two-colour gradient used to render the project's abstract cover. */
  palette: [string, string];
  /** Featured entries get the wide slot in the asymmetric home grid. */
  featured: boolean;
  /** The problem this class of product has to solve. */
  challenge: string;
  /** The decisions that shaped the build. */
  approach: { title: string; description: string }[];
  /** What the build actually contains. */
  solution: string[];
  /** What the build demonstrates. */
  highlights: ProjectHighlight[];
};

export const projects: Project[] = [
  {
    slug: "fintech-lending-platform",
    name: "Lending Origination Platform",
    category: "FinTech Platform",
    kind: "concept",
    excerpt:
      "A loan origination workflow where every decision is traceable and every screen stays fast.",
    intro:
      "A reference build working through what a regulated financial product actually demands: an underwriting workflow that is auditable end to end, document handling that does not rely on re-keying, and an interface built around the decision rather than the database record.",
    year: "2025",
    featured: true,
    services: ["Web Development", "UI/UX Design", "AI Automation"],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
    palette: ["#0b5cf5", "#12c2e9"],
    challenge:
      "Lending operations commonly run on email and spreadsheets. Applications arrive as attachments, assessment happens in a workbook, and approval is a chain of replies. Nothing is auditable after the fact, underwriters duplicate the same data entry across several systems, and the applicant has no visibility into where their file sits.",
    approach: [
      {
        title: "Organised around the decision, not the record",
        description:
          "The underwriter workspace is structured by the judgement being made at each stage, rather than mirroring the shape of the application table underneath it.",
      },
      {
        title: "Extraction automated, decision left human",
        description:
          "Financial statements and identity documents are parsed into structured fields automatically; anything below a confidence threshold is routed to a review queue instead of flowing onward.",
      },
      {
        title: "Audit trail as a first-class feature",
        description:
          "Every state change records actor, timestamp, inputs and rationale. Built into the data model from the start, because retrofitting an audit trail is far more expensive than designing one.",
      },
      {
        title: "Access separated by role",
        description:
          "Applicant, underwriter, reviewer and administrator each see a different surface, enforced server-side rather than hidden in the interface.",
      },
    ],
    solution: [
      "Applicant portal with document upload, progress visibility and secure messaging.",
      "Underwriter workspace consolidating application, documents, extracted data and decision history on one screen.",
      "Automated document parsing with confidence scoring and a human review queue.",
      "A complete, queryable audit trail behind every state transition.",
      "Role-based access separating applicant, underwriter, reviewer and administrator.",
    ],
    highlights: [
      { label: "Data entry", value: "Extraction replaces manual re-keying" },
      { label: "Audit trail", value: "Complete and queryable per application" },
      { label: "Applicant view", value: "Self-serve status, no chasing" },
      { label: "Access control", value: "Role-separated and enforced server-side" },
    ],
  },

  {
    slug: "healthcare-patient-app",
    name: "Patient Companion App",
    category: "Healthcare Application",
    kind: "concept",
    excerpt:
      "A treatment-plan companion built to stay fully usable when the signal drops.",
    intro:
      "A reference build for a mobile product where reliability matters far more than novelty. Someone following a treatment plan may open the app in a hospital basement, on an old handset, with no connection — and the plan still has to be there.",
    year: "2025",
    featured: true,
    services: ["Mobile App Development", "UI/UX Design"],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    palette: ["#12c2e9", "#2bd9a0"],
    challenge:
      "Outpatient treatment plans are still routinely handed over as printed sheets backed up by reminder calls from an already stretched care team. Adherence depends on paper nobody keeps, and the clinic has no signal that someone has fallen off their plan until the next appointment.",
    approach: [
      {
        title: "Designed for the worst conditions, not the demo",
        description:
          "Every screen was specified for its offline, stale-data and permission-denied states before the connected state was designed at all.",
      },
      {
        title: "Reduced to one job",
        description:
          "The home screen answers a single question — what do I need to do today — and nothing else competes with it.",
      },
      {
        title: "Accessibility as a hard requirement",
        description:
          "Large-type support, high contrast, complete screen-reader labelling and generous touch targets, targeting WCAG 2.2 AA across every flow.",
      },
      {
        title: "A signal back to the clinic",
        description:
          "A lightweight adherence view shows the care team who has disengaged, deliberately scoped so the app does not become surveillance.",
      },
    ],
    solution: [
      "Offline-first architecture with a local store and background sync on reconnect.",
      "Daily plan view covering medication, appointment and exercise reminders.",
      "Secure messaging between patient and care team, with clear response expectations.",
      "Clinician web view showing engagement across a caseload.",
      "WCAG 2.2 AA conformance across the whole application.",
    ],
    highlights: [
      { label: "Offline", value: "Full plan access without connectivity" },
      { label: "Accessibility", value: "WCAG 2.2 AA across all flows" },
      { label: "Care team", value: "Disengagement surfaced early" },
      { label: "Releases", value: "Automated pipeline to both stores" },
    ],
  },

  {
    slug: "commerce-replatform",
    name: "B2B Commerce Storefront",
    category: "E-commerce Platform",
    kind: "concept",
    excerpt:
      "A trade storefront with contract pricing, built for catalogue scale and search visibility.",
    intro:
      "A reference build tackling the hardest part of B2B commerce: thousands of SKUs, account-specific contract pricing, and a category structure that has to serve search demand as well as it serves the internal product hierarchy.",
    year: "2024",
    featured: true,
    services: ["Web Development", "SEO", "UI/UX Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    palette: ["#1e7bff", "#7bb0ff"],
    challenge:
      "Legacy trade storefronts accumulate a decade of category structure, run slowly, and are hostile on mobile — while a large share of revenue depends on organic rankings that any replatform can destroy. The technical problem and the search problem cannot be solved separately.",
    approach: [
      {
        title: "Treated search as a migration constraint",
        description:
          "A full URL inventory and redirect map is produced before design begins, and indexation is monitored daily through cutover — the sequence that decides whether a replatform keeps its traffic.",
      },
      {
        title: "Category architecture driven by demand",
        description:
          "Search intent data, rather than the internal product hierarchy, determines how the catalogue is organised.",
      },
      {
        title: "Contract pricing that feels ordinary",
        description:
          "Account-specific pricing resolves server-side per session, so a logged-in customer sees their own prices immediately with no loading flicker.",
      },
      {
        title: "A performance budget that is enforced",
        description:
          "Category and product templates are built against explicit Core Web Vitals budgets, checked in CI rather than audited once.",
      },
    ],
    solution: [
      "Server-rendered catalogue with faceted search across thousands of SKUs.",
      "Account-based contract pricing resolved per session without client-side flicker.",
      "Complete redirect mapping with post-launch indexation monitoring.",
      "Structured data for products, breadcrumbs and organisation.",
      "Quote request and reorder flows built for repeat trade customers.",
    ],
    highlights: [
      { label: "Migration", value: "URL inventory and redirect map first" },
      { label: "Core Web Vitals", value: "Budgets enforced in CI" },
      { label: "Contract pricing", value: "Server-resolved, no flicker" },
      { label: "Catalogue", value: "Structured around search demand" },
    ],
  },

  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    category: "SaaS Dashboard",
    kind: "concept",
    excerpt:
      "A dense analytics interface organised around the three questions users actually ask.",
    intro:
      "A reference build in restraint. Mature SaaS dashboards fail by accretion — everything is available and nothing is obvious — so this one is an exercise in removing surface area rather than adding features.",
    year: "2024",
    featured: false,
    services: ["UI/UX Design", "Web Development"],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    palette: ["#4d95ff", "#0846c4"],
    challenge:
      "Years of feature additions produce dashboards where navigation reflects the internal team that built each module rather than anything a customer is trying to find out. New users need an onboarding call to accomplish tasks the product was supposed to make self-serve.",
    approach: [
      {
        title: "Start from what usage data shows",
        description:
          "In most analytics products a small handful of views account for the overwhelming majority of sessions. Everything else is competing with them for attention.",
      },
      {
        title: "Organised around questions, not modules",
        description:
          "Navigation is structured by what customers are trying to find out, rather than by the internal shape of the product.",
      },
      {
        title: "A design system to stop the drift",
        description:
          "A token-based component library with documented usage rules, so future features stop reintroducing the same inconsistency.",
      },
      {
        title: "Empty states designed properly",
        description:
          "First-run and no-data states are treated as onboarding surfaces rather than error messages.",
      },
    ],
    solution: [
      "Navigation restructured around the three highest-value user questions.",
      "A token-based design system with documented components and usage rules.",
      "Progressive disclosure moving advanced controls out of the primary path.",
      "Deliberate empty and first-run states that teach the product.",
      "Full keyboard operability and screen-reader support across the dashboard.",
    ],
    highlights: [
      { label: "Navigation", value: "Reduced to three core views" },
      { label: "Design system", value: "Tokens, components, usage rules" },
      { label: "Onboarding", value: "Self-serve first-run path" },
      { label: "Accessibility", value: "Keyboard and screen-reader complete" },
    ],
  },

  {
    slug: "ai-operations-automation",
    name: "Operations Automation Engine",
    category: "AI Automation Platform",
    kind: "concept",
    excerpt:
      "Inbound document and email triage automated, with a review queue for anything uncertain.",
    intro:
      "A reference build showing how we scope automation: measure the process first, automate only the narrow repeatable part, and keep the judgement with people. Every automated action is logged, explainable and reversible.",
    year: "2025",
    featured: false,
    services: ["AI Automation", "Web Development"],
    technologies: ["Next.js", "Node.js", "Claude API", "PostgreSQL", "Vector search"],
    palette: ["#2bd9a0", "#12c2e9"],
    challenge:
      "Operations teams routinely lose much of each morning sorting a shared inbox: delivery notes, invoices, customer queries and exceptions all arrive together and all get handled by hand. It is high volume, low variance, and almost entirely invisible on any dashboard.",
    approach: [
      {
        title: "Measure the baseline before proposing anything",
        description:
          "Volume, handling time and error rate are tracked on the manual process first. Without that, nobody can say afterwards whether the automation worked.",
      },
      {
        title: "Automate classification and extraction only",
        description:
          "The system decides what a document is and pulls out its fields. What to do about an exception stays with the operations team.",
      },
      {
        title: "Explicit confidence thresholds",
        description:
          "Anything the model is not confident about goes to a review queue rather than into a downstream system.",
      },
      {
        title: "Shadow mode before cutover",
        description:
          "The automation runs alongside the manual process for a full cycle and its output is compared before anything is switched over.",
      },
    ],
    solution: [
      "Inbound email and document classification into defined operational categories.",
      "Structured field extraction with per-field validation rules.",
      "A review queue for low-confidence items, with one-click correction.",
      "Integration points for existing operations and finance systems.",
      "An action log recording inputs, output and confidence for every automated decision.",
    ],
    highlights: [
      { label: "Baseline", value: "Measured before and after, not estimated" },
      { label: "Uncertain cases", value: "Routed to review, never guessed" },
      { label: "Every action", value: "Logged, explainable, reversible" },
      { label: "Rollout", value: "Shadow-mode validated before cutover" },
    ],
  },

  {
    slug: "field-service-mobile",
    name: "Field Service App",
    category: "Mobile Application",
    kind: "concept",
    excerpt:
      "A field engineer app that works underground, in plant rooms, and anywhere else without signal.",
    intro:
      "A reference build organised around a single hard constraint: the people using this app are routinely somewhere with no connectivity, and the job still has to get recorded, evidenced and billed.",
    year: "2024",
    featured: false,
    services: ["Mobile App Development", "UI/UX Design", "Web Development"],
    technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "AWS"],
    palette: ["#33d9f2", "#0b5cf5"],
    challenge:
      "Field engineers fall back to paper whenever an app is unusable without a connection. Paperwork then reaches the office days later, invoicing lags behind the work, and photographic evidence is routinely lost between the site and the back office.",
    approach: [
      {
        title: "Offline as the default assumption",
        description:
          "Built as a local-first application that happens to sync, rather than a connected app with an offline mode bolted on.",
      },
      {
        title: "Designed for gloves and daylight",
        description:
          "Large touch targets, high-contrast type, and a layout that survives one-handed use on a phone in bright sun.",
      },
      {
        title: "Sync state made visible and honest",
        description:
          "The engineer always knows what has reached the office and what is still queued on the device.",
      },
      {
        title: "Closing the loop into invoicing",
        description:
          "Completed jobs flow straight into the back office, so billing follows the work instead of trailing it by a week.",
      },
    ],
    solution: [
      "Local-first architecture with a device database and conflict-aware background sync.",
      "Job sheets, photo capture and customer signature capture, all fully offline.",
      "Explicit, always-visible sync status per job.",
      "Back-office web application for scheduling and job review.",
      "Automatic handoff of completed jobs into the invoicing process.",
    ],
    highlights: [
      { label: "Connectivity", value: "Full job capture with no signal" },
      { label: "Paper job sheets", value: "Removed from the field process" },
      { label: "Sync state", value: "Always visible to the engineer" },
      { label: "Back office", value: "Jobs arrive same-day, not same-week" },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
);
