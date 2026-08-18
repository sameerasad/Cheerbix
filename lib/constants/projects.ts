/**
 * PORTFOLIO CONTENT — DEMONSTRATION PROJECTS
 *
 * Every entry below is a fictional, illustrative project used to show the
 * shape and depth of a Cherbix case study. No entry represents a real client
 * and no figure here is a measured business result.
 *
 * `isDemo: true` drives a visible "Demo case study" badge in the UI. When a
 * real case study is added, set `isDemo: false` and the badge disappears.
 */

export type ProjectOutcome = {
  label: string;
  /** Qualitative by design — see the note above about fabricated metrics. */
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Short line for the card. */
  excerpt: string;
  /** Longer intro for the case study page. */
  intro: string;
  isDemo: boolean;
  year: string;
  services: string[];
  technologies: string[];
  /** Two-colour gradient used to render the project's abstract cover. */
  palette: [string, string];
  /** Featured cards get the wide slot in the asymmetric home grid. */
  featured: boolean;
  client: string;
  challenge: string;
  approach: { title: string; description: string }[];
  solution: string[];
  outcomes: ProjectOutcome[];
};

export const projects: Project[] = [
  {
    slug: "fintech-lending-platform",
    name: "Meridian Lending",
    category: "FinTech Platform",
    excerpt:
      "A lending origination platform that replaced a spreadsheet-and-email underwriting process.",
    intro:
      "A demonstration case study showing how Cherbix approaches a regulated financial product: a lending origination platform where every decision has to be traceable and every screen has to be fast.",
    isDemo: true,
    year: "2025",
    featured: true,
    client: "Illustrative client — a mid-sized commercial lender",
    services: ["Web Development", "UI/UX Design", "AI Automation"],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
    palette: ["#0b5cf5", "#12c2e9"],
    challenge:
      "Loan applications arrived by email, were assessed in spreadsheets, and were approved in a chain of replies. Nothing was auditable after the fact, underwriters duplicated the same data entry across three systems, and the applicant had no visibility into where their file sat.",
    approach: [
      {
        title: "Mapped the real underwriting path",
        description:
          "Two weeks shadowing underwriters produced a process map that differed considerably from the documented one — the documented one was the process nobody actually followed.",
      },
      {
        title: "Designed around the decision, not the form",
        description:
          "The underwriter interface was organised by the judgement being made at each stage rather than by the shape of the application record.",
      },
      {
        title: "Automated the extraction, kept the decision human",
        description:
          "Financial statements and identity documents are parsed automatically into structured fields; anything below a confidence threshold is routed to a review queue.",
      },
      {
        title: "Made the audit trail a first-class feature",
        description:
          "Every state change records actor, timestamp, inputs and rationale — designed with the compliance team rather than retrofitted for them.",
      },
    ],
    solution: [
      "An applicant portal with document upload, progress visibility and secure messaging.",
      "An underwriter workspace consolidating application, documents, extracted data and decision history on one screen.",
      "Automated document parsing with confidence scoring and a human review queue.",
      "A complete, queryable audit trail behind every state transition.",
      "Role-based access separating applicant, underwriter, reviewer and administrator.",
    ],
    outcomes: [
      { label: "Manual re-keying", value: "Removed from the underwriting path" },
      { label: "Audit trail", value: "Complete and queryable per application" },
      { label: "Applicant visibility", value: "Self-serve status, no chasing" },
      { label: "Handover", value: "Documented codebase, owned by the client" },
    ],
  },

  {
    slug: "healthcare-patient-app",
    name: "Caretrack",
    category: "Healthcare Application",
    excerpt:
      "A patient companion app for treatment plans, built to stay usable when the signal drops.",
    intro:
      "A demonstration case study covering a mobile product where reliability matters more than novelty: patients following a treatment plan need the app to work in a hospital basement.",
    isDemo: true,
    year: "2025",
    featured: true,
    client: "Illustrative client — an outpatient care provider",
    services: ["Mobile App Development", "UI/UX Design"],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    palette: ["#12c2e9", "#2bd9a0"],
    challenge:
      "Patients received treatment plans as printed sheets and reminder calls from an already stretched care team. Adherence depended on paper nobody kept, and the clinic had no signal that a patient had fallen off their plan until the next appointment.",
    approach: [
      {
        title: "Designed for the worst conditions, not the demo",
        description:
          "Every screen was specified for offline, stale-data and permission-denied states before the connected state was designed.",
      },
      {
        title: "Reduced the app to one job",
        description:
          "The home screen answers one question — what do I need to do today — and nothing competes with it.",
      },
      {
        title: "Made accessibility a hard requirement",
        description:
          "Large type support, high contrast, full screen-reader labelling and generous touch targets, tested with users outside the design team's age range.",
      },
      {
        title: "Gave the clinic a signal",
        description:
          "A lightweight adherence view lets the care team see who has disengaged, without turning the app into surveillance.",
      },
    ],
    solution: [
      "Offline-first architecture with a local store and background sync on reconnect.",
      "Daily plan view with medication, appointment and exercise reminders.",
      "Secure messaging between patient and care team, with clear response expectations.",
      "Clinician web view showing engagement across a caseload.",
      "WCAG 2.2 AA conformance across the whole application.",
    ],
    outcomes: [
      { label: "Offline behaviour", value: "Full plan access without connectivity" },
      { label: "Accessibility", value: "WCAG 2.2 AA across all flows" },
      { label: "Care team visibility", value: "Disengagement surfaced early" },
      { label: "Release cadence", value: "Automated pipeline to both stores" },
    ],
  },

  {
    slug: "commerce-replatform",
    name: "Northline Supply",
    category: "E-commerce Platform",
    excerpt:
      "A B2B storefront replatform with contract pricing, rebuilt for speed and search.",
    intro:
      "A demonstration case study about migration risk: moving a B2B storefront off a legacy platform without losing the organic traffic that produced most of its revenue.",
    isDemo: true,
    year: "2024",
    featured: true,
    client: "Illustrative client — an industrial supplies distributor",
    services: ["Web Development", "SEO", "UI/UX Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    palette: ["#1e7bff", "#7bb0ff"],
    challenge:
      "A legacy storefront with thousands of SKUs, account-specific contract pricing and a category structure that had accumulated over a decade. It was slow, it was hostile on mobile, and a substantial share of revenue depended on organic rankings that a migration could easily destroy.",
    approach: [
      {
        title: "Treated SEO as a migration constraint",
        description:
          "A full URL inventory and redirect map were produced before design started, and indexation was monitored daily through cutover.",
      },
      {
        title: "Rebuilt the category architecture around demand",
        description:
          "Search intent data, not the internal product hierarchy, determined how the catalogue was organised.",
      },
      {
        title: "Made contract pricing feel ordinary",
        description:
          "Account-specific pricing resolves server-side per session, so logged-in customers see their own prices without a loading flicker.",
      },
      {
        title: "Set a performance budget and held to it",
        description:
          "Category and product templates were built against explicit Core Web Vitals budgets enforced in CI.",
      },
    ],
    solution: [
      "Server-rendered catalogue with faceted search across thousands of SKUs.",
      "Account-based contract pricing resolved per session without client-side flicker.",
      "Complete redirect map with post-launch indexation monitoring.",
      "Structured data for products, breadcrumbs and organisation.",
      "Quote request and reorder flows built for repeat trade customers.",
    ],
    outcomes: [
      { label: "Legacy URLs", value: "Fully mapped and redirected" },
      { label: "Core Web Vitals", value: "Budgets enforced in CI" },
      { label: "Contract pricing", value: "Server-resolved, no flicker" },
      { label: "Catalogue", value: "Restructured around search demand" },
    ],
  },

  {
    slug: "saas-analytics-dashboard",
    name: "Orbit Analytics",
    category: "SaaS Dashboard",
    excerpt:
      "A dense analytics interface redesigned around the three questions users actually ask.",
    intro:
      "A demonstration case study in restraint: a SaaS product where the fix was removing surface area rather than adding features.",
    isDemo: true,
    year: "2024",
    featured: false,
    client: "Illustrative client — a B2B SaaS company",
    services: ["UI/UX Design", "Web Development"],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    palette: ["#4d95ff", "#0846c4"],
    challenge:
      "Four years of feature additions had produced a dashboard where everything was available and nothing was obvious. New customers needed onboarding calls to accomplish tasks the product was supposed to make self-serve.",
    approach: [
      {
        title: "Started from usage data",
        description:
          "Analytics showed that three views accounted for the overwhelming majority of sessions. The rest of the navigation was competing with them for attention.",
      },
      {
        title: "Reorganised around questions, not modules",
        description:
          "Navigation was restructured around what customers were trying to find out, rather than around the internal team that built each feature.",
      },
      {
        title: "Built a design system to stop the drift",
        description:
          "A token-based component library with documented usage rules, so future features stop reintroducing the same inconsistency.",
      },
      {
        title: "Designed the empty states properly",
        description:
          "First-run and no-data states were treated as onboarding surfaces rather than error messages.",
      },
    ],
    solution: [
      "Navigation restructured around the three highest-value user questions.",
      "A token-based design system with documented components and usage rules.",
      "Progressive disclosure moving advanced controls out of the primary path.",
      "Deliberate empty and first-run states that teach the product.",
      "Full keyboard operability and screen-reader support across the dashboard.",
    ],
    outcomes: [
      { label: "Primary navigation", value: "Reduced to the three core views" },
      { label: "Design system", value: "Documented and adopted by the team" },
      { label: "Onboarding", value: "Self-serve first-run path" },
      { label: "Accessibility", value: "Keyboard and screen-reader complete" },
    ],
  },

  {
    slug: "ai-operations-automation",
    name: "Relay Operations",
    category: "AI Automation Platform",
    excerpt:
      "Inbound document and email triage automated, with a human review queue for anything uncertain.",
    intro:
      "A demonstration case study showing how Cherbix scopes an automation project: measure the process first, automate the narrow repeatable part, keep the judgement with people.",
    isDemo: true,
    year: "2025",
    featured: false,
    client: "Illustrative client — a logistics operations team",
    services: ["AI Automation", "Web Development"],
    technologies: ["Next.js", "Node.js", "Claude API", "PostgreSQL", "Vector search"],
    palette: ["#2bd9a0", "#12c2e9"],
    challenge:
      "An operations team spent much of each morning sorting inbound email and attached documents into the right systems: delivery notes, invoices, customer queries and exceptions, all arriving in one shared inbox and all handled by hand.",
    approach: [
      {
        title: "Measured the baseline before proposing anything",
        description:
          "Two weeks of volume, handling-time and error tracking established what the manual process actually cost.",
      },
      {
        title: "Automated classification and extraction only",
        description:
          "The system decides what a document is and pulls out its fields. What to do about an exception stays with the operations team.",
      },
      {
        title: "Set explicit confidence thresholds",
        description:
          "Anything the model is not confident about goes to a review queue rather than into a downstream system.",
      },
      {
        title: "Ran it in shadow mode first",
        description:
          "The automation ran alongside the manual process for a full cycle, and its output was compared before anything was switched over.",
      },
    ],
    solution: [
      "Inbound email and document classification into defined operational categories.",
      "Structured field extraction with per-field validation rules.",
      "A review queue for low-confidence items, with one-click correction.",
      "Direct integration with the existing operations and finance systems.",
      "An action log recording inputs, output and confidence for every automated decision.",
    ],
    outcomes: [
      { label: "Baseline", value: "Measured before and after, not estimated" },
      { label: "Uncertain cases", value: "Routed to human review, never guessed" },
      { label: "Every action", value: "Logged, explainable, reversible" },
      { label: "Rollout", value: "Shadow-mode validated before cutover" },
    ],
  },

  {
    slug: "field-service-mobile",
    name: "Sitewise Field",
    category: "Mobile Application",
    excerpt:
      "A field engineer app that works underground, in plant rooms, and anywhere else without signal.",
    intro:
      "A demonstration case study focused on a single hard constraint: the users of this app are routinely somewhere with no connectivity, and the job still has to get recorded.",
    isDemo: true,
    year: "2024",
    featured: false,
    client: "Illustrative client — a building services contractor",
    services: ["Mobile App Development", "UI/UX Design", "Web Development"],
    technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "AWS"],
    palette: ["#33d9f2", "#0b5cf5"],
    challenge:
      "Field engineers recorded jobs on paper because the previous app was unusable without a connection. Paperwork reached the office days later, invoicing lagged behind the work, and photographic evidence was routinely lost.",
    approach: [
      {
        title: "Made offline the default assumption",
        description:
          "The app was designed as a local-first application that happens to sync, rather than a connected app with an offline mode.",
      },
      {
        title: "Designed for gloves and daylight",
        description:
          "Large touch targets, high-contrast type and a layout that survives being used one-handed on a phone in bright sun.",
      },
      {
        title: "Made sync state visible and honest",
        description:
          "Engineers always know what has reached the office and what is still queued on the device.",
      },
      {
        title: "Closed the loop into invoicing",
        description:
          "Completed jobs flow straight into the back office, so billing follows the work instead of trailing it.",
      },
    ],
    solution: [
      "Local-first architecture with a device database and conflict-aware background sync.",
      "Job sheets, photo capture and customer signature capture, all fully offline.",
      "Explicit, always-visible sync status per job.",
      "Back-office web application for scheduling and job review.",
      "Automatic handoff of completed jobs into the invoicing process.",
    ],
    outcomes: [
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
