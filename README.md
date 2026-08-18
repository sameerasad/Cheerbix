# Cherbix

Production website for Cherbix — a digital solutions company covering web
development, mobile apps, UI/UX design, AI automation, digital marketing, SEO
and content writing.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and
Motion.

---

## ⚠️ Before you launch — two things

1. **Replace the placeholder content.** Contact details, client logo slots,
   testimonials and case studies are all clearly marked placeholders. See
   [Placeholder content](#placeholder-content) below.
2. **Set the environment variables.** Copy `.env.example` to `.env.local` and
   fill in what applies. See [Environment](#environment).

The real Cherbix logo is installed. See
[`public/brand/README.md`](public/brand/README.md) for how it was prepared and
the one colour decision it involved.

---

## Getting started

```bash
npm install
cp .env.example .env.local     # optional in development
npm run dev                    # http://localhost:3000
```

| Script              | Does                                            |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Development server                              |
| `npm run build`     | Production build (type-checks as part of build) |
| `npm run start`     | Serve the production build                      |
| `npm run lint`      | ESLint                                          |
| `npm run typecheck` | `tsc --noEmit`                                  |

The contact form works out of the box without any credentials — with no email
provider configured, submissions are printed to the server console instead of
being delivered.

---

## Project structure

```text
app/
  layout.tsx              Root layout, fonts, metadata, analytics, schema.org
  template.tsx            Page transition (opacity fade)
  page.tsx                Home
  services/               Services index + [slug] (7 static service pages)
  solutions/              Outcome-led view of the same capabilities
  work/                   Portfolio index + [slug] case studies
  about/  blog/  contact/  faqs/  privacy/  terms/
  api/contact/route.ts    Contact endpoint (validate → send → respond)
  sitemap.ts  robots.ts  opengraph-image.tsx
  icon.png  apple-icon.png        Favicon + iOS icon (the orbital mark)
  not-found.tsx  error.tsx  loading.tsx

components/
  layout/     Container, Section, PageHero, LegalPage
  navbar/     Navbar, MobileMenu
  footer/     Footer
  hero/       Hero, HeroVisual
  sections/   One file per home-page section, reused across inner pages
  services/   ServiceCard
  portfolio/  PortfolioCard
  testimonials/ TestimonialCard
  blog/       PostCard
  forms/      ContactForm
  ui/         Button, Badge, SectionHeading, FAQAccordion, Field, Logo,
              Icon, Marquee, JsonLd, decor (grid + abstract covers), animated

lib/
  constants/  All site content — see below
  utils/      cn, date formatting, SEO metadata + structured data builders
  validation/ Zod schema shared by the form and the API route
  email/      Transport abstraction (Resend today, console in development)
  analytics/  GA4 / GTM / Meta Pixel, inert unless env vars are set
```

---

## Content architecture

**No repeated content is hardcoded in components.** Everything lives in
`lib/constants/` as typed data, so copy changes never require touching JSX:

| File               | Holds                                                |
| ------------------ | ---------------------------------------------------- |
| `site.ts`          | Brand name, contact details, social links, logo asset |
| `nav.ts`           | Primary navigation and footer columns                |
| `services.ts`      | All seven services incl. full service-page content   |
| `solutions.ts`     | Outcome-led engagements and industries               |
| `projects.ts`      | Portfolio case studies                               |
| `posts.ts`         | Blog articles as typed content blocks                |
| `company.ts`       | Process, differentiators, values, mission, growth journey |
| `technologies.ts`  | The stack, grouped by layer                          |
| `testimonials.ts`  | Client quotes                                        |
| `faqs.ts`          | General FAQ (service FAQs live with each service)    |
| `icons.ts`         | Icon registry — data files reference icons by key    |

Adding a service, case study or article automatically adds it to the
navigation, the sitemap and the relevant listing page. Nothing else to update.

### Sanity CMS

The blog is the natural first candidate. `app/blog/**` imports only `posts`,
`sortedPosts`, `getPost` and `getRelatedPosts` from `lib/constants/posts.ts` —
a Sanity adapter that satisfies those four exports drops in without touching a
component. `Post` and `PostBlock` are the content model to mirror in Sanity.

---

## Placeholder content

Everything illustrative is **marked in the UI**, so nothing can be mistaken for
a verified claim. Nothing on this site invents a client name, a project count,
a percentage or an award.

| What                     | Where                        | How it is marked                              | To publish for real                        |
| ------------------------ | ---------------------------- | --------------------------------------------- | ------------------------------------------ |
| Case studies             | `lib/constants/projects.ts`  | "Demo case study" badge + a banner on `/work`  | Set `isDemo: false`                        |
| Testimonials             | `lib/constants/testimonials.ts` | "Placeholder" badge on each card            | Set `isPlaceholder: false`                 |
| Client logos             | `lib/constants/company.ts`   | Dashed slots labelled "pending permission"     | Replace `clientLogoSlots`                  |
| Contact details          | `lib/constants/site.ts`      | Note on the contact page                       | Replace `siteConfig.contact`               |
| Social links             | `lib/constants/site.ts`      | Point at platform home pages                   | Replace `socialLinks` hrefs                |
| Privacy / Terms          | `app/privacy`, `app/terms`   | Review note at the foot of each page           | Have reviewed by a qualified adviser       |

Case-study outcomes are written qualitatively on purpose. Publish numbers only
once they have been measured and cleared by the client.

---

## Environment

Copy `.env.example` to `.env.local`. Every variable is optional — the site
builds and runs with none of them set.

| Variable                        | Effect when unset                          |
| ------------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`          | Falls back to `https://cherbix.com` for canonicals and sitemap |
| `RESEND_API_KEY`                | Contact submissions log to the console rather than sending |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Falls back to `siteConfig.contact.email` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No GA4 script is loaded                    |
| `NEXT_PUBLIC_GTM_ID`            | No GTM container is loaded                 |
| `NEXT_PUBLIC_META_PIXEL_ID`     | No pixel is loaded                         |

No secret is referenced from a client component. Only `NEXT_PUBLIC_*` values
reach the browser, and analytics ships **zero** third-party JavaScript until an
ID is configured.

### Connecting Resend

Set `RESEND_API_KEY` and verify your sending domain. That is the whole change —
`lib/email/index.ts` already speaks to the Resend API over `fetch` with no SDK
dependency. Swapping to Postmark, SES or SendGrid means writing one more class
implementing `EmailTransport` and returning it from `getTransport()`.

---

## Design system

Defined once in `app/globals.css` using Tailwind v4's `@theme`:

- **Surfaces** — `ink-950` … `ink-600`, deep cool navy through near-black
- **Brand** — `brand-50` … `brand-900` (electric blue, from the logo wordmark)
- **Accent** — `aqua-300` … `aqua-600` (the logo's orbital cyan)
- **Highlight** — `mint-400/500`, used sparingly and reserved for AI sections
- **Text** — `fg`, `fg-muted`, `fg-faint`; **lines** — `line`, `line-strong`
- **Type** — Geist Sans + Geist Mono, self-hosted through `next/font`
- **Radius** — `sm` 6px through `2xl` 24px
- **Utilities** — `bg-grid`, `bg-grid-sm`, `text-gradient`, `mask-fade-x/b`

Vertical rhythm lives in `<Section spacing>`; horizontal gutters in
`<Container size>`. Neither is redefined anywhere else.

---

## Accessibility

- Semantic landmarks, one `<h1>` per page, ordered heading levels
- Skip-to-content link as the first focusable element
- Visible focus ring on every interactive element (`:focus-visible`)
- Mobile menu: `role="dialog"`, `aria-modal`, focus trap, Escape to close,
  focus returned to the trigger, background scroll locked
- FAQ accordion: real `<button>` triggers with `aria-expanded` /
  `aria-controls`; collapsed panels are unmounted, not hidden
- Form fields: bound `<label>`s, `aria-invalid`, `aria-describedby`,
  `role="alert"` errors, focus moved to the first failing control
- Decorative SVG and icons are `aria-hidden`; the logo carries a real `alt`
- `prefers-reduced-motion` honoured globally in CSS **and** per component via
  `useReducedMotion` — reduced-motion visitors get no transforms at all
- Touch targets are at least 44px in navigation and forms

## Performance

- Static generation for every page except the contact endpoint
- Zero image requests in the chrome — the grid, hero diagram and all cover art
  are CSS and inline SVG
- Fonts self-hosted and subset by `next/font`, limited to the weights in use
- Client JavaScript confined to the navbar, mobile menu, form, accordion and
  animation wrappers; every other component renders on the server
- No `clsx`, no `tailwind-merge`, no icon-set duplication, no animation library
  beyond Motion
- Security headers set in `next.config.ts`

## SEO

- Title template and per-route metadata through `buildMetadata()`
- Canonical URLs, Open Graph and Twitter cards on every page
- Generated OG image at `/opengraph-image`
- `sitemap.xml` and `robots.txt` generated from the same content constants
- Structured data: `ProfessionalService`, `WebSite`, `Service`, `FAQPage`,
  `BlogPosting`, `BreadcrumbList`

---

## Adding content

**A case study** — append to `projects` in `lib/constants/projects.ts`. It
appears on `/work`, gets a static page at `/work/<slug>`, and enters the
sitemap. Set `featured: true` to surface it on the home page.

**An article** — append to `posts` in `lib/constants/posts.ts` using the
`PostBlock` union (`paragraph`, `heading`, `list`, `quote`).

**A service** — append to `services` in `lib/constants/services.ts` and add the
link to `footerNav`. The full service-page template renders from the record.
