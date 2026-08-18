import type { IconKey } from "./icons";

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  /** Short label used in cards, nav and the footer. */
  shortTitle: string;
  icon: IconKey;
  /** One line, used on the home page service grid. */
  tagline: string;
  /** Two-to-three lines, used on the services index. */
  summary: string;
  /** Drives the accent treatment so the seven pages don't look identical. */
  accent: "brand" | "aqua" | "mint";
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  problem: {
    heading: string;
    body: string;
    symptoms: string[];
  };
  solution: {
    heading: string;
    body: string;
    pillars: { title: string; description: string }[];
  };
  capabilities: { title: string; description: string }[];
  process: { title: string; description: string }[];
  toolkit: { group: string; items: string[] }[];
  benefits: { title: string; description: string }[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: "braces",
    accent: "brand",
    tagline:
      "High-performance websites and web applications designed around business goals.",
    summary:
      "Marketing sites, customer portals and internal platforms built on a modern stack — fast to load, straightforward to maintain, and structured so the next feature is cheaper than the last.",
    hero: {
      eyebrow: "Web Development",
      heading: "Websites and web applications built to carry real business weight.",
      body: "We build the web layer of your business — from a marketing site that has to convert, to a customer portal that has to stay up. Modern stack, measured performance, code your team can actually take over.",
    },
    problem: {
      heading: "Most websites fail quietly.",
      body: "They load slowly, they are painful to update, and nobody can say what they contribute to the business. The cost rarely shows up as an outage — it shows up as a slow leak in conversion, in developer hours, and in the marketing team's ability to ship.",
      symptoms: [
        "Pages that take seconds to become interactive on mobile connections",
        "Simple copy changes that require a developer and a deploy",
        "A codebase only its original author understands",
        "Design that breaks the moment content is longer than the mockup",
        "No analytics wiring, so no basis for deciding what to improve",
      ],
    },
    solution: {
      heading: "A web platform, not just a set of pages.",
      body: "We start from what the site has to accomplish — a booking, a demo request, a self-serve signup — then work backwards into architecture, content model and interface. The result is a system your team can extend rather than a deliverable that starts ageing on handover.",
      pillars: [
        {
          title: "Performance as a requirement",
          description:
            "Core Web Vitals budgets are agreed at the start and measured on every build, not checked once at launch.",
        },
        {
          title: "Content your team controls",
          description:
            "Structured content models so marketing can publish, reorder and test without a developer in the loop.",
        },
        {
          title: "Built for the second year",
          description:
            "Typed code, documented conventions and a component library, so month twelve costs less than month one.",
        },
      ],
    },
    capabilities: [
      {
        title: "Marketing & corporate websites",
        description:
          "Conversion-focused sites with strong SEO foundations, structured content and editorial workflows.",
      },
      {
        title: "Web applications",
        description:
          "Authenticated dashboards, portals and internal tools with role-based access and real data flows.",
      },
      {
        title: "E-commerce experiences",
        description:
          "Storefronts and checkout flows integrated with your commerce, payment and fulfilment providers.",
      },
      {
        title: "API & systems integration",
        description:
          "Connecting CRMs, ERPs, payment providers and third-party services behind a clean, documented interface.",
      },
      {
        title: "Headless CMS implementation",
        description:
          "Editor-friendly content models with preview, versioning and predictable publishing.",
      },
      {
        title: "Performance & accessibility work",
        description:
          "Auditing and rebuilding existing sites for speed, Core Web Vitals and WCAG conformance.",
      },
    ],
    process: [
      {
        title: "Technical discovery",
        description:
          "Goals, existing systems, content sources, integrations and constraints — captured before a line of code.",
      },
      {
        title: "Architecture & content model",
        description:
          "Rendering strategy, data model, component inventory and hosting decided and written down.",
      },
      {
        title: "Interface build",
        description:
          "A typed component library assembled into pages, reviewed against design at every stage.",
      },
      {
        title: "Integration & QA",
        description:
          "APIs wired, forms and analytics verified, cross-browser and device testing, accessibility pass.",
      },
      {
        title: "Launch & handover",
        description:
          "Deployment, monitoring, documentation and a walkthrough so your team owns it from day one.",
      },
    ],
    toolkit: [
      { group: "Framework", items: ["Next.js", "React", "TypeScript"] },
      { group: "Styling", items: ["Tailwind CSS", "Design tokens", "Motion"] },
      { group: "Backend", items: ["Node.js", "NestJS", "Laravel", "REST APIs"] },
      { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB"] },
      { group: "Infrastructure", items: ["Vercel", "AWS", "Firebase"] },
    ],
    benefits: [
      {
        title: "Faster pages, better outcomes",
        description:
          "Speed is a conversion feature. We treat load and interaction budgets as acceptance criteria.",
      },
      {
        title: "Lower cost of change",
        description:
          "A component system and typed codebase mean new pages and features take days, not sprints.",
      },
      {
        title: "Search-ready from launch",
        description:
          "Semantic markup, metadata, sitemaps and structured data are part of the build, not a later project.",
      },
      {
        title: "No lock-in",
        description:
          "You own the repository, the infrastructure accounts and the documentation. Always.",
      },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "A focused marketing site is typically four to eight weeks. A web application with authentication and integrations usually runs three months or more. We give you a phased timeline after discovery rather than a number before it.",
      },
      {
        question: "Can you rebuild our existing site without losing SEO?",
        answer:
          "Yes. We map existing URLs, preserve or redirect them, carry over metadata and structured data, and monitor indexing after launch so rankings are protected through the transition.",
      },
      {
        question: "Do we need a CMS?",
        answer:
          "If your team publishes regularly, yes — it pays for itself quickly. If the site is small and stable, a structured content layer in the codebase is cheaper. We will tell you honestly which applies.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. Code lives in your repository, infrastructure runs in your accounts, and everything is documented at handover.",
      },
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: "smartphone",
    accent: "aqua",
    tagline:
      "Modern iOS and Android applications with scalable architecture and polished UX.",
    summary:
      "Cross-platform apps that feel native on both platforms, with offline behaviour, release pipelines and analytics considered from the first sprint rather than bolted on before launch.",
    hero: {
      eyebrow: "Mobile App Development",
      heading: "Apps people keep on their home screen.",
      body: "iOS and Android products built with a shared codebase and platform-appropriate detail — considered offline states, sensible permissions, and a release process that doesn't stall at review.",
    },
    problem: {
      heading: "Shipping an app is the easy part.",
      body: "The hard part is an app that survives contact with real users on real networks — the ones on a train, on an old device, with notifications disabled. Most apps are built for the demo and then spend their life apologising for it.",
      symptoms: [
        "A blank screen or spinner whenever connectivity drops",
        "Releases that take a week of manual effort each time",
        "Android treated as an afterthought to iOS",
        "No visibility into crashes or where users abandon flows",
        "Feature work slowing to a crawl after the first six months",
      ],
    },
    solution: {
      heading: "One codebase, two platforms, no compromises that users notice.",
      body: "React Native gives us a shared foundation; platform-specific work goes where it earns its keep — navigation feel, permissions, notifications, and the small interactions that make an app feel considered rather than ported.",
      pillars: [
        {
          title: "Offline-aware by default",
          description:
            "Local state, optimistic updates and clear sync behaviour, so the app stays usable on a poor connection.",
        },
        {
          title: "Automated releases",
          description:
            "CI pipelines to TestFlight and Play Console, so shipping an update is routine instead of an event.",
        },
        {
          title: "Instrumented from day one",
          description:
            "Crash reporting and funnel analytics wired at build time, so product decisions have evidence behind them.",
        },
      ],
    },
    capabilities: [
      {
        title: "Cross-platform apps",
        description:
          "A single React Native codebase delivering to both the App Store and Google Play.",
      },
      {
        title: "MVP development",
        description:
          "A scoped first release aimed at learning quickly, structured so it can grow rather than be rewritten.",
      },
      {
        title: "Backend & API layer",
        description:
          "Authentication, data sync, push notifications and the services the app depends on.",
      },
      {
        title: "Third-party integrations",
        description:
          "Payments, maps, chat, analytics, identity providers and device capabilities.",
      },
      {
        title: "App Store & Play submission",
        description:
          "Store assets, metadata, review guidance and the release pipeline that gets you through it.",
      },
      {
        title: "Maintenance & OS upgrades",
        description:
          "Keeping pace with annual platform releases, deprecations and SDK changes.",
      },
    ],
    process: [
      {
        title: "Product definition",
        description:
          "User journeys, platform requirements and a first release scope that is small enough to ship.",
      },
      {
        title: "Experience design",
        description:
          "Flows and interface design that respect iOS and Android conventions where it matters.",
      },
      {
        title: "Architecture",
        description:
          "Navigation, state, data sync, offline strategy and the backend contract, agreed up front.",
      },
      {
        title: "Build & test",
        description:
          "Iterative sprints with builds on real devices, not just simulators.",
      },
      {
        title: "Release & iterate",
        description:
          "Store submission, staged rollout, crash monitoring and a plan for the next release.",
      },
    ],
    toolkit: [
      { group: "Core", items: ["React Native", "TypeScript", "Expo"] },
      { group: "State & data", items: ["React Query", "Zustand", "SQLite"] },
      { group: "Backend", items: ["Node.js", "NestJS", "Firebase", "REST APIs"] },
      { group: "Delivery", items: ["TestFlight", "Play Console", "CI pipelines"] },
      { group: "Quality", items: ["Crash reporting", "Analytics", "Device testing"] },
    ],
    benefits: [
      {
        title: "Two platforms, one team",
        description:
          "Shared logic and interface code keeps build and maintenance cost far below two native teams.",
      },
      {
        title: "Predictable releases",
        description:
          "An automated pipeline turns each update into a routine step rather than a scramble.",
      },
      {
        title: "Built to keep growing",
        description:
          "Modular architecture so version three doesn't require throwing away version one.",
      },
      {
        title: "Evidence, not opinions",
        description:
          "Analytics and crash data from launch, so the roadmap follows what users actually do.",
      },
    ],
    faqs: [
      {
        question: "Native or cross-platform — which do we need?",
        answer:
          "For most business applications React Native delivers the same user experience at a fraction of the cost. We recommend fully native only when a product depends heavily on platform-specific hardware, graphics or background processing.",
      },
      {
        question: "Can you take over an existing app?",
        answer:
          "Yes. We begin with a code and architecture audit, give you an honest assessment of what to keep, and propose a path that avoids an unnecessary rewrite.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "We do — including store listings, assets, privacy declarations and review responses. You keep ownership of the developer accounts.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Apps need ongoing care: annual OS updates, SDK deprecations and store policy changes. We offer maintenance arrangements that cover this alongside feature work.",
      },
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    icon: "layout",
    accent: "brand",
    tagline:
      "Intuitive interfaces and user experiences that make digital products easier to use.",
    summary:
      "Research-informed product design and design systems — interfaces that reduce support load and hesitation, delivered as components engineers can build from directly.",
    hero: {
      eyebrow: "UI/UX Design",
      heading: "Design that removes friction instead of decorating it.",
      body: "We design products around the decisions people are actually trying to make. Clear structure, honest hierarchy, and a system your engineers can build from without guesswork.",
    },
    problem: {
      heading: "Confusing products are expensive.",
      body: "Every hesitation in a flow is a support ticket, an abandoned signup, or a feature nobody uses. Design problems rarely announce themselves — they show up in churn, in onboarding drop-off, and in a roadmap full of features that didn't move anything.",
      symptoms: [
        "Users repeatedly asking how to do something the product already supports",
        "High drop-off in signup, checkout or onboarding",
        "Every screen designed from scratch, so nothing feels related",
        "Engineers reinterpreting mockups because the spec is ambiguous",
        "Features shipped that usage data shows nobody touches",
      ],
    },
    solution: {
      heading: "Understand the job, then design the shortest path to it.",
      body: "We work from real user tasks and real constraints. Structure before surface: information architecture and flows first, then interface, then a design system that keeps the fiftieth screen as coherent as the first.",
      pillars: [
        {
          title: "Grounded in evidence",
          description:
            "Stakeholder interviews, user research and analytics review before a pixel is placed.",
        },
        {
          title: "Systems, not screens",
          description:
            "Tokens, components and patterns — so design scales with the product instead of fragmenting.",
        },
        {
          title: "Accessible as standard",
          description:
            "Contrast, focus order, keyboard paths and touch targets designed in, not retrofitted after audit.",
        },
      ],
    },
    capabilities: [
      {
        title: "UX research & discovery",
        description:
          "Interviews, journey mapping, competitive review and analytics analysis to establish what to fix.",
      },
      {
        title: "Information architecture",
        description:
          "Navigation, content structure and flows that match how people actually think about the task.",
      },
      {
        title: "Interface design",
        description:
          "High-fidelity screens covering real states — empty, loading, error, permission-restricted.",
      },
      {
        title: "Design systems",
        description:
          "Token-based libraries with documented usage rules, built to hand straight to engineering.",
      },
      {
        title: "Prototyping",
        description:
          "Interactive prototypes for validating flows and aligning stakeholders before build cost is incurred.",
      },
      {
        title: "Usability & accessibility review",
        description:
          "Structured evaluation of an existing product against usability heuristics and WCAG criteria.",
      },
    ],
    process: [
      {
        title: "Research",
        description:
          "Understand users, business goals and current friction from evidence rather than assumption.",
      },
      {
        title: "Structure",
        description:
          "Information architecture, user flows and low-fidelity layouts agreed before visual work starts.",
      },
      {
        title: "Interface",
        description:
          "Visual design, states, motion and responsive behaviour across the breakpoint range.",
      },
      {
        title: "System",
        description:
          "Components, tokens and documentation so the design survives contact with engineering.",
      },
      {
        title: "Validate",
        description:
          "Prototype testing and post-launch review, feeding measured findings back into the design.",
      },
    ],
    toolkit: [
      { group: "Design", items: ["Figma", "Design tokens", "Auto layout"] },
      { group: "Prototyping", items: ["Figma prototypes", "Motion studies"] },
      {
        group: "Research",
        items: ["User interviews", "Journey mapping", "Heuristic review"],
      },
      { group: "Handoff", items: ["Component specs", "Storybook", "Tailwind tokens"] },
      {
        group: "Accessibility",
        items: ["WCAG 2.2 AA", "Contrast auditing", "Keyboard paths"],
      },
    ],
    benefits: [
      {
        title: "Fewer support requests",
        description:
          "Interfaces that explain themselves reduce the volume of questions reaching your team.",
      },
      {
        title: "Higher completion rates",
        description:
          "Shorter, clearer flows mean more people finish what they started.",
      },
      {
        title: "Faster engineering",
        description:
          "A documented system removes the interpretation gap between design and build.",
      },
      {
        title: "Consistency at scale",
        description:
          "New features look and behave like they belong, because they are assembled from the same parts.",
      },
    ],
    faqs: [
      {
        question: "Can you design without building?",
        answer:
          "Yes. We regularly deliver design and a documented system to an in-house or third-party engineering team, and stay available for build-time questions.",
      },
      {
        question: "Do you redesign existing products?",
        answer:
          "Often. We usually start with a usability and accessibility review so the redesign targets measured problems rather than taste.",
      },
      {
        question: "How do you handle design handoff?",
        answer:
          "Component-level specs, defined tokens, documented states and responsive rules — plus direct access to the designer during the build.",
      },
      {
        question: "Is accessibility included?",
        answer:
          "WCAG 2.2 AA is our default target. Contrast, focus order, keyboard operability and touch targets are designed in from the start.",
      },
    ],
  },

  {
    slug: "ai-automation",
    title: "AI Automation",
    shortTitle: "AI Automation",
    icon: "bot",
    accent: "mint",
    tagline:
      "AI-powered workflows and automation that reduce repetitive work and improve efficiency.",
    summary:
      "Practical automation applied to the processes that actually consume your team's week — document handling, support triage, data entry and system-to-system handoffs, with a human in the loop where it matters.",
    hero: {
      eyebrow: "AI Automation",
      heading: "Automation aimed at the work your team repeats every day.",
      body: "We start from the process, not the model. Where AI genuinely reduces manual effort, we build it — with clear boundaries, human review where it matters, and a measurable before-and-after.",
    },
    problem: {
      heading: "Skilled people spending their week on copy-and-paste.",
      body: "Most businesses have a handful of processes that quietly consume enormous amounts of time: re-keying data between systems, sorting inbound requests, extracting figures from documents, writing the same reply for the hundredth time. It is expensive, it is error-prone, and it is invisible on any dashboard.",
      symptoms: [
        "The same data entered by hand into two or three different systems",
        "Inbound email and support tickets sorted manually before anyone can act",
        "Information trapped in PDFs, invoices and scanned documents",
        "Reports assembled by hand every week from several sources",
        "Response times set by whoever happens to be available",
      ],
    },
    solution: {
      heading: "Map the process. Automate the repeatable part. Keep judgement human.",
      body: "We audit where time actually goes, then automate the steps that are genuinely rule-based or language-based. AI handles classification, extraction and drafting; your team keeps the decisions. Everything is logged, reviewable and reversible.",
      pillars: [
        {
          title: "Process first",
          description:
            "We measure the current process before proposing anything. If automation isn't the answer, we say so.",
        },
        {
          title: "Human in the loop",
          description:
            "Confidence thresholds and review queues, so anything uncertain reaches a person instead of going out wrong.",
        },
        {
          title: "Auditable by design",
          description:
            "Every automated action is logged with its inputs and reasoning, so outcomes can be explained and corrected.",
        },
      ],
    },
    capabilities: [
      {
        title: "Workflow automation",
        description:
          "Connecting the systems you already run so information moves without a person carrying it.",
      },
      {
        title: "Document & data processing",
        description:
          "Extracting structured data from invoices, contracts, forms and reports, with validation rules.",
      },
      {
        title: "AI assistants",
        description:
          "Internal assistants grounded in your own documentation, procedures and data.",
      },
      {
        title: "Customer support automation",
        description:
          "Triage, routing, draft replies and deflection of repeat questions — with escalation paths that work.",
      },
      {
        title: "AI features in existing products",
        description:
          "Search, summarisation, classification and generation added to software you already run.",
      },
      {
        title: "Systems integration",
        description:
          "CRM, ERP, helpdesk, spreadsheets and internal databases connected behind one automated flow.",
      },
    ],
    process: [
      {
        title: "Process audit",
        description:
          "Map the current workflow and measure the time, volume and error rate it carries today.",
      },
      {
        title: "Opportunity assessment",
        description:
          "Identify which steps are worth automating and which are better left to a person.",
      },
      {
        title: "Pilot",
        description:
          "Build a narrow automation for one process and run it alongside the manual one.",
      },
      {
        title: "Integrate & harden",
        description:
          "Connect production systems, add validation, monitoring, logging and fallback behaviour.",
      },
      {
        title: "Measure & extend",
        description:
          "Compare against the baseline, then apply the same pattern to the next process.",
      },
    ],
    toolkit: [
      { group: "Models", items: ["Claude API", "OpenAI API", "LLM integrations"] },
      {
        group: "Patterns",
        items: ["RAG", "Structured extraction", "Tool use", "Evals"],
      },
      { group: "Automation", items: ["n8n", "Zapier", "Make", "Custom services"] },
      { group: "Data", items: ["Vector search", "PostgreSQL", "Document stores"] },
      { group: "Operations", items: ["Logging", "Human review queues", "Monitoring"] },
    ],
    benefits: [
      {
        title: "Hours back, every week",
        description:
          "Repetitive work moves off your team's plate, and we measure how much against a real baseline.",
      },
      {
        title: "Fewer transcription errors",
        description:
          "Automated extraction and validation catch the mistakes manual re-keying produces.",
      },
      {
        title: "Consistent response times",
        description:
          "Triage and routing happen immediately, regardless of who is at their desk.",
      },
      {
        title: "Capacity without headcount",
        description:
          "Volume can grow without the administrative load growing at the same rate.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate AI into our existing application?",
        answer:
          "Yes — that is one of the most common requests we get. We work within your existing stack, add the capability behind a defined interface, and avoid a rewrite wherever possible.",
      },
      {
        question: "What about our data privacy?",
        answer:
          "We scope exactly what data reaches a model, use providers with no-training commitments on API traffic, and can keep sensitive processing inside your own infrastructure where requirements demand it.",
      },
      {
        question: "How do you stop AI producing wrong answers?",
        answer:
          "By grounding responses in your own data, constraining output to defined structures, setting confidence thresholds that route uncertain cases to a human, and evaluating against a test set before anything goes live.",
      },
      {
        question: "Where should we start?",
        answer:
          "With one high-volume, low-risk process. A narrow pilot produces a measurable result quickly and tells you far more than a broad strategy exercise.",
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    icon: "megaphone",
    accent: "brand",
    tagline:
      "Data-driven campaigns designed to increase visibility, engagement, and conversions.",
    summary:
      "Paid and organic campaigns run against a properly instrumented funnel — so spend is judged on pipeline and revenue rather than impressions.",
    hero: {
      eyebrow: "Digital Marketing",
      heading: "Campaigns measured on pipeline, not impressions.",
      body: "We build the measurement first, then the campaigns. When attribution is trustworthy, deciding where the next unit of budget goes stops being guesswork.",
    },
    problem: {
      heading: "Spend is easy to increase. Attribution is not.",
      body: "Plenty of businesses run ads, publish posts and send email without being able to say which of it produced revenue. Without reliable measurement, budget follows whichever channel reports the flattering number rather than the one that actually works.",
      symptoms: [
        "Reporting full of impressions and clicks but silent on revenue",
        "Conversion tracking that was set up once and never verified",
        "Traffic arriving on pages that were never designed to convert",
        "Leads that arrive but never reach the sales team's system",
        "No idea what an acquired customer actually costs",
      ],
    },
    solution: {
      heading: "Instrument the funnel, then optimise it.",
      body: "Tracking, events and CRM handoff come first, so every campaign reports against the same definition of success. Then we run the channels that fit your buying cycle and reallocate budget on the strength of the numbers.",
      pillars: [
        {
          title: "Measurement before spend",
          description:
            "Events, conversion definitions and CRM connections verified before a campaign goes live.",
        },
        {
          title: "Landing pages that match intent",
          description:
            "Traffic reaches a page built for that specific message — not a generic homepage.",
        },
        {
          title: "Deliberate iteration",
          description:
            "Structured testing on creative, audience and offer, with one change measured at a time.",
        },
      ],
    },
    capabilities: [
      {
        title: "Paid search & social",
        description:
          "Campaign structure, creative, audiences and continuous optimisation across the platforms that fit.",
      },
      {
        title: "Conversion tracking & analytics",
        description:
          "GA4, Tag Manager, server-side events and CRM integration wired and validated.",
      },
      {
        title: "Landing page systems",
        description:
          "Fast, on-brand pages built to be launched and tested by the marketing team.",
      },
      {
        title: "Email & lifecycle",
        description:
          "Nurture sequences, onboarding and retention flows tied to product and CRM events.",
      },
      {
        title: "Conversion rate optimisation",
        description:
          "Funnel analysis and structured experiments on the steps where prospects drop out.",
      },
      {
        title: "Reporting",
        description:
          "One dashboard covering spend, pipeline and cost per acquisition, in plain language.",
      },
    ],
    process: [
      {
        title: "Audit",
        description:
          "Review current channels, tracking accuracy, funnel performance and cost per outcome.",
      },
      {
        title: "Instrument",
        description:
          "Fix measurement — events, conversions, attribution and CRM handoff — before spending more.",
      },
      {
        title: "Plan",
        description:
          "Choose channels, messaging and budget allocation based on your actual buying cycle.",
      },
      {
        title: "Launch",
        description:
          "Campaigns, creative and landing pages go live together as a matched set.",
      },
      {
        title: "Optimise",
        description:
          "Weekly review, structured tests, and budget moved toward what demonstrably works.",
      },
    ],
    toolkit: [
      {
        group: "Analytics",
        items: ["GA4", "Google Tag Manager", "Server-side events"],
      },
      { group: "Paid", items: ["Google Ads", "Meta Ads", "LinkedIn Ads"] },
      { group: "Lifecycle", items: ["Email automation", "CRM integration"] },
      { group: "Testing", items: ["A/B testing", "Funnel analysis", "Heatmaps"] },
      { group: "Reporting", items: ["Looker Studio", "Custom dashboards"] },
    ],
    benefits: [
      {
        title: "Budget you can defend",
        description:
          "Every channel reports against the same outcome definition, so allocation decisions are straightforward.",
      },
      {
        title: "Lower acquisition cost",
        description:
          "Matching message to landing page reduces waste before any bid adjustment is needed.",
      },
      {
        title: "Marketing and product aligned",
        description:
          "Because the same team builds your site and runs your campaigns, the handoff isn't a handoff.",
      },
      {
        title: "Reporting people read",
        description:
          "Plain-language dashboards focused on pipeline, not a wall of platform metrics.",
      },
    ],
    faqs: [
      {
        question: "Do you require a minimum ad budget?",
        answer:
          "No, but below a certain spend paid channels produce data too slowly to optimise. We will tell you if your budget is better invested in SEO, content or conversion work first.",
      },
      {
        question: "Can you work with our existing marketing team?",
        answer:
          "Yes. We often handle measurement, landing pages and technical execution while an in-house team owns brand and content.",
      },
      {
        question: "How quickly do results appear?",
        answer:
          "Paid channels produce data within weeks; meaningful optimisation takes a full buying cycle. Organic work compounds over months. We set expectations per channel at the outset.",
      },
      {
        question: "Do you handle creative?",
        answer:
          "We produce ad creative, copy and landing pages. For large-scale video or photography production we bring in specialist partners.",
      },
    ],
  },

  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    icon: "search",
    accent: "aqua",
    tagline:
      "Technical and content-driven SEO strategies designed to improve organic visibility.",
    summary:
      "Technical foundations, content architecture and authority work — organic growth treated as an engineering discipline rather than a monthly keyword report.",
    hero: {
      eyebrow: "Search Engine Optimisation",
      heading: "Organic visibility built on engineering, not guesswork.",
      body: "Crawlability, site architecture, page experience and content that answers real search intent. SEO handled by the same people who can actually change the code.",
    },
    problem: {
      heading: "Invisible to the people already looking for you.",
      body: "Search demand for what you sell exists whether or not you capture it. Most sites lose it to technical problems nobody has audited, an architecture search engines can't interpret, and content written for a keyword tool rather than a reader.",
      symptoms: [
        "Pages that exist but have never been indexed",
        "Slow, layout-shifting pages harming page experience signals",
        "Several pages competing with each other for the same query",
        "Thin content that ranks briefly and then slips away",
        "No structured data, so no rich results in the listing",
      ],
    },
    solution: {
      heading: "Fix the foundation, then build the content on top of it.",
      body: "We audit crawl, index and performance first — content investment is wasted on a site search engines struggle to read. Then we build topic clusters around genuine search intent and support them with internal linking and structured data.",
      pillars: [
        {
          title: "Technical first",
          description:
            "Crawl budget, indexation, rendering, Core Web Vitals and structured data resolved before content spend.",
        },
        {
          title: "Intent-led content",
          description:
            "Topic clusters mapped to what people actually search for, at each stage of their decision.",
        },
        {
          title: "Measured against revenue",
          description:
            "Reporting on qualified organic sessions and conversions, not vanity keyword counts.",
        },
      ],
    },
    capabilities: [
      {
        title: "Technical SEO audits",
        description:
          "Crawl analysis, index coverage, rendering, canonicalisation, redirects and log-file review.",
      },
      {
        title: "Site architecture",
        description:
          "URL structure, internal linking and taxonomy that make topical relationships explicit.",
      },
      {
        title: "On-page optimisation",
        description:
          "Titles, metadata, heading structure, semantic markup and content depth.",
      },
      {
        title: "Structured data",
        description:
          "Schema.org markup for organisations, articles, products, FAQs and breadcrumbs.",
      },
      {
        title: "Content strategy",
        description:
          "Keyword and intent research turned into a prioritised, publishable content plan.",
      },
      {
        title: "Migration SEO",
        description:
          "Protecting rankings through replatforms, redesigns and domain changes.",
      },
    ],
    process: [
      {
        title: "Audit",
        description:
          "Full technical, content and authority review benchmarked against your search competitors.",
      },
      {
        title: "Prioritise",
        description:
          "Rank findings by likely impact against implementation effort. Fix what moves the needle first.",
      },
      {
        title: "Implement",
        description:
          "Technical fixes made in the codebase by developers, not left as recommendations in a document.",
      },
      {
        title: "Publish",
        description:
          "Content clusters produced and interlinked around the priority topics.",
      },
      {
        title: "Monitor",
        description:
          "Rankings, indexation, Core Web Vitals and organic conversions tracked and reported monthly.",
      },
    ],
    toolkit: [
      {
        group: "Diagnostics",
        items: ["Search Console", "Screaming Frog", "Lighthouse"],
      },
      { group: "Research", items: ["Ahrefs", "Semrush", "Intent mapping"] },
      {
        group: "Implementation",
        items: ["Schema.org", "Next.js metadata", "Sitemaps"],
      },
      {
        group: "Performance",
        items: ["Core Web Vitals", "CrUX data", "Image optimisation"],
      },
      { group: "Reporting", items: ["GA4", "Looker Studio", "Rank tracking"] },
    ],
    benefits: [
      {
        title: "Compounding traffic",
        description:
          "Organic visibility keeps returning value long after the work that produced it is paid for.",
      },
      {
        title: "Recommendations that get implemented",
        description:
          "We can make the changes ourselves, so audits don't die in a backlog.",
      },
      {
        title: "Lower dependence on paid",
        description:
          "Organic coverage of your core terms reduces how much traffic you have to rent.",
      },
      {
        title: "Better qualified visitors",
        description:
          "Intent-matched pages attract people closer to a decision, so conversion rates rise with traffic.",
      },
    ],
    faqs: [
      {
        question: "How long before SEO shows results?",
        answer:
          "Technical fixes can move things within weeks. Content and authority work typically take three to six months to compound, and longer in competitive sectors. Anyone promising faster is guessing.",
      },
      {
        question: "Can you handle SEO after building the website?",
        answer:
          "Yes, and it is the natural continuation — the foundations we build into every site are exactly what ongoing SEO builds on.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No, and we would treat any such guarantee as a warning sign. We commit to the work, the measurement and honest reporting on what it produces.",
      },
      {
        question: "Do you write the content too?",
        answer:
          "We do — SEO strategy and content writing sit under the same roof here, so the plan and the published pages don't drift apart.",
      },
    ],
  },

  {
    slug: "content-writing",
    title: "Content Writing",
    shortTitle: "Content Writing",
    icon: "pen",
    accent: "brand",
    tagline:
      "Clear, persuasive, SEO-friendly content for websites, blogs, landing pages, and brands.",
    summary:
      "Writing that respects the reader's time — website copy, long-form articles and product content grounded in how your customers actually describe their problem.",
    hero: {
      eyebrow: "Content Writing",
      heading: "Writing that respects the reader's time.",
      body: "Website copy, long-form articles and product content that says something specific. No filler, no keyword padding, no sentences that could belong to any company in your sector.",
    },
    problem: {
      heading: "Most business writing says nothing.",
      body: "Pages full of confident-sounding sentences that could be lifted onto a competitor's site without changing a word. It fails on both counts: readers learn nothing, and search engines have no distinctive material to rank.",
      symptoms: [
        "Homepage copy that never states what the company actually does",
        "Blog posts written for a keyword rather than a reader",
        "Different tone on every page, depending on who wrote it",
        "Technical products explained in language nobody outside the team uses",
        "Content published on no particular schedule, toward no particular goal",
      ],
    },
    solution: {
      heading: "Say something specific, to someone specific.",
      body: "We start from your customers' own language — how they describe the problem, what they compare you against, what makes them hesitate. Then we write pages that answer those things directly, in a voice that stays consistent across everything you publish.",
      pillars: [
        {
          title: "Research-led",
          description:
            "Customer interviews, sales-call themes, support tickets and search data before drafting.",
        },
        {
          title: "One voice everywhere",
          description:
            "A documented tone guide so anything published later still sounds like you.",
        },
        {
          title: "Structured for search",
          description:
            "Optimised naturally around real intent — never at the cost of readability.",
        },
      ],
    },
    capabilities: [
      {
        title: "Website & landing page copy",
        description:
          "Homepage, service, product and campaign pages written to a defined conversion goal.",
      },
      {
        title: "Long-form articles",
        description:
          "Researched pieces that demonstrate genuine expertise rather than summarising page one of results.",
      },
      {
        title: "Technical & product content",
        description:
          "Documentation, feature explanations and release notes for technical and non-technical readers.",
      },
      {
        title: "Brand messaging",
        description:
          "Positioning, value proposition and a messaging framework the whole team can work from.",
      },
      {
        title: "Editorial planning",
        description:
          "A content calendar tied to search intent, product roadmap and campaign timing.",
      },
      {
        title: "Content refresh",
        description:
          "Rewriting and consolidating existing pages that underperform or compete with each other.",
      },
    ],
    process: [
      {
        title: "Immersion",
        description:
          "Learn the product, the buyer and the market well enough to write with specificity.",
      },
      {
        title: "Voice & framework",
        description:
          "Define tone, terminology and messaging hierarchy, then document them.",
      },
      {
        title: "Outline",
        description:
          "Structure and key points agreed before drafting, so revisions stay small.",
      },
      {
        title: "Draft & refine",
        description:
          "Writing, editing and one substantive revision round with your subject-matter experts.",
      },
      {
        title: "Publish & measure",
        description:
          "Content goes live properly structured, then performance informs what comes next.",
      },
    ],
    toolkit: [
      {
        group: "Research",
        items: ["Customer interviews", "Search intent analysis", "Competitor review"],
      },
      {
        group: "Strategy",
        items: ["Messaging frameworks", "Tone guides", "Content calendars"],
      },
      {
        group: "Formats",
        items: ["Web copy", "Long-form articles", "Case studies", "Email"],
      },
      {
        group: "Optimisation",
        items: ["On-page SEO", "Internal linking", "Metadata"],
      },
      {
        group: "Delivery",
        items: ["CMS-ready", "Structured content", "Editorial review"],
      },
    ],
    benefits: [
      {
        title: "Clarity that converts",
        description:
          "Visitors who immediately understand the offer are far more likely to act on it.",
      },
      {
        title: "Consistent across channels",
        description:
          "Website, email, ads and documentation all sound like the same company.",
      },
      {
        title: "Genuine search value",
        description:
          "Distinctive content earns rankings that thin, templated pages cannot hold.",
      },
      {
        title: "Shorter sales conversations",
        description:
          "When the site answers the common objections, sales calls start further along.",
      },
    ],
    faqs: [
      {
        question: "Do you use AI to write content?",
        answer:
          "We use AI for research, outlining and editing support. Published work is written and edited by people — AI-generated filler is exactly the problem most clients come to us to fix.",
      },
      {
        question: "Can you write about technical subjects?",
        answer:
          "Yes. Our writers work alongside our engineers, and we interview your subject-matter experts so the detail is accurate rather than approximated.",
      },
      {
        question: "Do you offer ongoing content?",
        answer:
          "We do — a monthly retainer against an agreed editorial calendar, with performance reviewed each quarter.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Because we agree an outline before drafting, revisions are usually minor. Two rounds are included as standard on every piece.",
      },
    ],
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Extra offerings presented on the Services index and Solutions page. They are
 * delivered as part of a wider engagement rather than as standalone pages.
 */
export const supportingServices: {
  title: string;
  description: string;
  icon: IconKey;
}[] = [
  {
    title: "Web Design",
    description:
      "Visual direction, layout systems and responsive design for marketing sites — delivered alongside development or handed to your own build team.",
    icon: "layers",
  },
  {
    title: "Business & Software Solutions",
    description:
      "Custom internal tools, portals and process software for operations that spreadsheets and off-the-shelf products have outgrown.",
    icon: "building",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, security patching and incremental improvement for products already in production.",
    icon: "shield",
  },
  {
    title: "Technology Consulting",
    description:
      "Architecture review, stack selection and a practical modernisation roadmap for teams deciding what to build next.",
    icon: "compass",
  },
];
