/**
 * Seed editorial content.
 *
 * These articles are written by Cherbix and are genuine, but they are seed
 * content for the blog structure — the architecture is ready to be swapped for
 * Sanity CMS without touching the components. `getPost` / `posts` are the only
 * two things the pages import, so a CMS adapter can satisfy the same contract.
 */

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Web Development"
    | "AI & Automation"
    | "SEO"
    | "Digital Marketing"
    | "Mobile"
    | "Business";
  /** ISO date — drives sorting, <time> elements and structured data. */
  publishedAt: string;
  readingMinutes: number;
  author: string;
  /** Two-colour gradient for the abstract article cover. */
  palette: [string, string];
  featured: boolean;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "core-web-vitals-as-a-business-metric",
    title: "Core Web Vitals Are a Business Metric, Not an Engineering One",
    excerpt:
      "Page speed is usually filed under engineering housekeeping. It belongs on the same dashboard as conversion rate — and treated as a budget, not a one-off audit.",
    category: "Web Development",
    publishedAt: "2026-07-28",
    readingMinutes: 7,
    author: "Cherbix Team",
    palette: ["#0b5cf5", "#12c2e9"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Almost every organisation we work with has run a Lighthouse report at some point. Far fewer have a number they are actually holding themselves to. That gap is the whole problem: performance measured once is trivia, performance measured continuously is a constraint that changes what gets built.",
      },
      { type: "heading", text: "Why a single audit does nothing" },
      {
        type: "paragraph",
        text: "A performance audit captures one moment, usually on a developer's machine, usually on a page that happens to be simple. The result gets circulated, a few images get compressed, and six months later the site is slower than it was before the audit — because in the interim three analytics scripts, a chat widget and a font variant were added, and nobody was measuring.",
      },
      {
        type: "paragraph",
        text: "The fix is not a better audit. It is moving the measurement into the pipeline, so a regression fails a build in the same way a broken test does.",
      },
      { type: "heading", text: "Setting a budget you will actually enforce" },
      {
        type: "paragraph",
        text: "A performance budget is a small set of numbers agreed before the work starts. Ours usually look something like this:",
      },
      {
        type: "list",
        items: [
          "Largest Contentful Paint under 2.5 seconds on a mid-tier mobile device over a throttled connection",
          "Interaction to Next Paint under 200 milliseconds",
          "Cumulative Layout Shift under 0.1",
          "A hard ceiling on JavaScript shipped to the browser on the critical path",
        ],
      },
      {
        type: "paragraph",
        text: "The exact figures matter less than the fact that they exist and that something automated checks them. Once a budget is in CI, the conversation about whether to add another third-party script changes character entirely — it stops being a matter of preference and becomes a matter of what fits.",
      },
      { type: "heading", text: "Where the business case sits" },
      {
        type: "paragraph",
        text: "Speed affects two things a business cares about directly. First, conversion: every additional second before a page becomes usable loses some proportion of visitors who were never going to wait. Second, search: page experience is a ranking input, and the pages that load quickly are the pages that get crawled more thoroughly.",
      },
      {
        type: "quote",
        text: "If nobody can name the current LCP of your highest-traffic page, performance is not being managed — it is being hoped for.",
      },
      { type: "heading", text: "Practical starting points" },
      {
        type: "list",
        items: [
          "Instrument real-user monitoring before optimising anything, so you know what actual visitors experience rather than what your laptop does",
          "Render as much as possible on the server; ship interactivity only where the page genuinely needs it",
          "Reserve layout space for images, embeds and ads so late-loading content cannot shift what someone is reading",
          "Self-host fonts, subset them, and limit the number of weights in the design system",
          "Audit third-party scripts quarterly and remove the ones nobody can justify",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is exotic. It is ordinary engineering discipline applied to a metric that most teams have decided is somebody else's concern.",
      },
    ],
  },

  {
    slug: "where-ai-automation-actually-pays-off",
    title: "Where AI Automation Actually Pays Off (And Where It Doesn't)",
    excerpt:
      "The successful automation projects we have delivered have one thing in common: they started by measuring a process, not by choosing a model.",
    category: "AI & Automation",
    publishedAt: "2026-07-14",
    readingMinutes: 8,
    author: "Cherbix Team",
    palette: ["#2bd9a0", "#12c2e9"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "There is a version of an AI project that begins with a model and looks for something to point it at. It produces a demo that impresses a board, then quietly stalls. There is another version that begins with a stopwatch and a process map. That one tends to survive contact with production.",
      },
      { type: "heading", text: "The qualities of a good first candidate" },
      {
        type: "paragraph",
        text: "Not every repetitive task is worth automating. The processes that reward the effort share a recognisable profile:",
      },
      {
        type: "list",
        items: [
          "High volume — it happens dozens or hundreds of times a week, not twice a month",
          "Low variance — the same shape of input, most of the time",
          "Language- or document-shaped — classification, extraction, drafting or summarisation rather than genuine judgement",
          "Tolerant of review — a wrong answer can be caught before it causes harm",
          "Currently measurable — you can state how long it takes today",
        ],
      },
      {
        type: "paragraph",
        text: "That last point is the one most often skipped, and it is the one that determines whether anybody will be able to tell if the project worked.",
      },
      { type: "heading", text: "Where it tends to disappoint" },
      {
        type: "list",
        items: [
          "Processes where the hard part is a decision requiring accountability, not the paperwork around it",
          "Anything with a genuinely zero error tolerance and no practical review step",
          "Low-volume work where the integration cost will never be recovered",
          "Processes that are broken rather than slow — automating those just produces bad outcomes faster",
        ],
      },
      { type: "heading", text: "Human in the loop is a design decision" },
      {
        type: "paragraph",
        text: "The most useful pattern we deploy is unglamorous: the system does the extraction or classification, attaches a confidence score, and routes anything below a threshold to a person. Volume drops dramatically, error rate does not rise, and the review queue doubles as a source of training signal for improving the thresholds later.",
      },
      {
        type: "quote",
        text: "Automate the typing. Keep the deciding. Log everything either way.",
      },
      { type: "heading", text: "Run it in shadow mode first" },
      {
        type: "paragraph",
        text: "Before an automation takes over a process, run it alongside the manual one for a full cycle and compare the outputs. This is the cheapest possible way to discover the edge cases nobody mentioned during discovery, and it gives you a defensible before-and-after rather than an anecdote.",
      },
      {
        type: "paragraph",
        text: "If the comparison is unflattering, you have learned something valuable for the price of a pilot. That is a considerably better outcome than discovering it after cutover.",
      },
    ],
  },

  {
    slug: "technical-seo-checklist-for-a-replatform",
    title: "The Technical SEO Checklist for a Replatform",
    excerpt:
      "Migrations are where organic traffic goes to die. Here is the sequence we follow to protect rankings through a rebuild.",
    category: "SEO",
    publishedAt: "2026-06-30",
    readingMinutes: 9,
    author: "Cherbix Team",
    palette: ["#12c2e9", "#4d95ff"],
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "A replatform is the single highest-risk event in the life of an organically successful website. The damage is rarely caused by the new platform; it is caused by the details of the old one that nobody inventoried before switching it off.",
      },
      { type: "heading", text: "Before design starts" },
      {
        type: "list",
        items: [
          "Crawl the existing site in full and export every URL, including paginated and parameterised variants",
          "Pull twelve months of Search Console data so you know which pages actually earn impressions",
          "Record current rankings for your priority terms as a baseline you can compare against later",
          "Inventory existing structured data, canonical tags and hreflang annotations",
          "Note every page currently earning external links — these are the ones that must not break",
        ],
      },
      { type: "heading", text: "During the build" },
      {
        type: "list",
        items: [
          "Produce a one-to-one redirect map; where a page has no direct equivalent, choose the closest relevant page rather than defaulting everything to the homepage",
          "Preserve title and description patterns for pages that already rank well — a rewrite is a separate experiment, not part of the migration",
          "Reimplement structured data before launch, not after",
          "Keep the staging environment blocked from indexing, and verify that the block is removed at cutover",
          "Confirm that content rendered client-side is visible to a crawler that does not execute your JavaScript the way you expect",
        ],
      },
      { type: "heading", text: "At launch" },
      {
        type: "list",
        items: [
          "Submit the new sitemap immediately and keep the old URL inventory to hand",
          "Spot-check redirects across every URL pattern, not just the top pages",
          "Verify robots.txt on the production domain as the very first check after DNS propagates",
          "Watch server logs for crawler 404s during the first week",
        ],
      },
      { type: "heading", text: "For thirty days afterwards" },
      {
        type: "paragraph",
        text: "Index coverage, crawl stats and rankings need daily attention for the first fortnight and weekly attention after that. Some fluctuation is normal while search engines re-evaluate the site. A sustained decline in indexed pages is not, and the earlier it is spotted the cheaper it is to reverse.",
      },
      {
        type: "quote",
        text: "The redirect map is not paperwork. On a content-heavy site it is the single most valuable artefact of the entire migration.",
      },
    ],
  },

  {
    slug: "choosing-between-native-and-cross-platform",
    title: "Choosing Between Native and Cross-Platform in 2026",
    excerpt:
      "The honest version of this decision has very little to do with performance benchmarks and a great deal to do with who maintains the app next year.",
    category: "Mobile",
    publishedAt: "2026-06-12",
    readingMinutes: 6,
    author: "Cherbix Team",
    palette: ["#33d9f2", "#0b5cf5"],
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "The native-versus-cross-platform argument is usually conducted in terms of frame rates. For the overwhelming majority of business applications, that is the least relevant consideration available.",
      },
      { type: "heading", text: "What actually decides it" },
      {
        type: "list",
        items: [
          "Who will maintain the app in eighteen months, and what they already know",
          "How much of the product is genuinely platform-specific rather than a form over an API",
          "Whether the app depends on hardware, background processing or graphics work that sits close to the metal",
          "Your release cadence and how much operational overhead two codebases would add",
        ],
      },
      { type: "heading", text: "When cross-platform is the right answer" },
      {
        type: "paragraph",
        text: "If the app is fundamentally about presenting and capturing data — bookings, orders, records, dashboards, messaging — a shared React Native codebase delivers an experience users cannot distinguish from native, at a fraction of the build and maintenance cost. The saving is not primarily in the first build; it is in every subsequent feature only having to be written once.",
      },
      { type: "heading", text: "When to go native" },
      {
        type: "paragraph",
        text: "Heavy real-time graphics, sustained background processing, deep integration with platform-specific hardware, or a product whose entire value proposition is a platform capability. In those cases the abstraction costs more than it saves, and you will spend the project fighting the bridge.",
      },
      { type: "heading", text: "The option people forget" },
      {
        type: "paragraph",
        text: "Sometimes the answer is neither. A well-built responsive web application, installable to the home screen, solves a surprising number of the problems that arrive described as 'we need an app' — with no store review, no release cycle and no install friction. It is worth ten minutes of honest consideration before committing to a store presence.",
      },
    ],
  },

  {
    slug: "attribution-before-ad-spend",
    title: "Fix Attribution Before You Increase Ad Spend",
    excerpt:
      "Scaling a campaign you cannot measure just increases the size of the number you cannot explain.",
    category: "Digital Marketing",
    publishedAt: "2026-05-26",
    readingMinutes: 6,
    author: "Cherbix Team",
    palette: ["#1e7bff", "#7bb0ff"],
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "A recurring pattern in marketing audits: a business is spending meaningfully on paid channels, reporting confidently on cost per lead, and cannot say which of those leads became customers. The reporting looks rigorous. It is measuring the wrong end of the funnel.",
      },
      { type: "heading", text: "The three breaks we find most often" },
      {
        type: "list",
        items: [
          "Conversion events configured once, never re-verified, and quietly broken by a site change months ago",
          "Lead source not written to the CRM, so nothing downstream can be attributed back to a channel",
          "A form submission counted as a conversion regardless of whether the enquiry was remotely qualified",
        ],
      },
      {
        type: "paragraph",
        text: "Each of these is cheap to fix and expensive to leave. Together they mean budget allocation decisions are being made on numbers that do not correspond to revenue.",
      },
      { type: "heading", text: "A minimum viable measurement setup" },
      {
        type: "list",
        items: [
          "Define conversions in terms of a qualified outcome, not any form submission",
          "Pass campaign source through to the CRM and keep it attached to the record through to close",
          "Verify events end to end after every significant site change, as a release checklist item",
          "Report on cost per qualified opportunity, not cost per lead",
          "Keep one dashboard that finance and marketing both accept as authoritative",
        ],
      },
      { type: "heading", text: "Then, and only then, scale" },
      {
        type: "paragraph",
        text: "With trustworthy measurement in place, increasing spend becomes a straightforward decision rather than an act of faith. Without it, a bigger budget mostly buys a bigger margin of error.",
      },
    ],
  },

  {
    slug: "when-a-spreadsheet-stops-being-enough",
    title: "When a Spreadsheet Stops Being Enough",
    excerpt:
      "Most internal software projects begin as a spreadsheet that outgrew itself. Knowing when that has happened saves a great deal of money.",
    category: "Business",
    publishedAt: "2026-05-08",
    readingMinutes: 5,
    author: "Cherbix Team",
    palette: ["#0846c4", "#12c2e9"],
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "Spreadsheets are excellent software. They are flexible, immediate, and require no procurement process. A great many businesses run genuinely important operations on one, and for a long time that is the correct decision.",
      },
      { type: "heading", text: "The signals that it has stopped working" },
      {
        type: "list",
        items: [
          "More than one person needs to edit it at the same time, and someone keeps a personal copy",
          "There is a documented procedure for using it correctly",
          "Nobody can reconstruct who changed a figure, or when, or why",
          "Its contents are re-keyed into another system on a schedule",
          "A single mistyped cell can cause a customer-facing error",
        ],
      },
      {
        type: "paragraph",
        text: "Two of these is normal. Four of these means the spreadsheet has become a database with no constraints, no audit trail and no access control — and the business is carrying that risk without having decided to.",
      },
      { type: "heading", text: "What to do about it" },
      {
        type: "paragraph",
        text: "Not necessarily build custom software. Sometimes the right answer is an off-the-shelf product that covers ninety per cent of the process, or a database tool with proper permissions. Custom software earns its cost when the process is genuinely specific to how your business competes — when the way you do this thing is part of why customers choose you.",
      },
      {
        type: "quote",
        text: "Build custom software for the process that differentiates you. Buy everything else.",
      },
      {
        type: "paragraph",
        text: "The mistake worth avoiding is rebuilding the spreadsheet exactly as it is, in a browser. If a process is being replaced, that is the moment to fix the parts of it that only exist because a spreadsheet could not do better.",
      },
    ],
  },
];

export const sortedPosts = [...posts].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
);

export const featuredPost = sortedPosts.find((post) => post.featured) ?? sortedPosts[0];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export const postCategories = Array.from(
  new Set(sortedPosts.map((post) => post.category)),
);

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return sortedPosts.slice(0, limit);

  const sameCategory = sortedPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = sortedPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
