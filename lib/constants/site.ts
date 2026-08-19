/**
 * Single source of truth for brand-level facts. Everything the business might
 * realistically want to change without touching a component lives here.
 */

/**
 * Typed as plain strings rather than literals so an empty value stays a
 * `string` the components can test for. Under `as const` an empty field would
 * narrow to `never` after a truthiness check.
 */
type ContactDetails = {
  email: string;
  /** Optional. Omitted from the footer and contact page while empty. */
  phone: string;
  /** Optional. Omitted from the footer and contact page while empty. */
  location: string;
  availability: string;
  responseTime: string;
};

/**
 * Fill `phone` and `location` in and they appear automatically wherever
 * contact details are shown. Nothing is rendered as a blank or a dummy value.
 */
const contact: ContactDetails = {
  email: "info@cherbix.com",
  phone: "",
  location: "",
  availability: "Mon–Fri, 09:00–18:00 (GMT+5)",
  responseTime: "We reply to project enquiries within 1 business day.",
};

export const siteConfig = {
  name: "Cherbix",
  legalName: "Cherbix",
  /** Used in <title> templates and structured data. */
  tagline: "Digital Solutions That Move Businesses Forward",
  description:
    "Cherbix builds websites, mobile apps, AI automation solutions, and digital growth strategies that help businesses build, launch, and grow.",
  /** Set NEXT_PUBLIC_SITE_URL in production; the fallback keeps dev builds valid. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cherbix.com",
  locale: "en_US",
  contact,
  /**
   * Set this once the real founding year is confirmed. While it is null the
   * `foundingDate` property is omitted from structured data rather than
   * published as a guess.
   */
  foundedYear: null as number | null,
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "x" | "instagram" | "dribbble";
};

/**
 * Real Cherbix profiles only. Empty while none are live — the footer and
 * contact page hide their social sections entirely rather than linking out to
 * a platform's home page. Add an entry and both reappear.
 */
export const socialLinks: SocialLink[] = [];

/**
 * The Cherbix logo.
 *
 * `cherbix-logo.png` is the supplied master, cropped to the artwork and keyed
 * off its background canvas so it sits on the dark surfaces this site uses.
 * The neutral "bix" element carries the white value from the brand's own
 * dark-background master; every blue and teal pixel is exactly as drawn.
 *
 * `cherbix-logo-light.png` is the same artwork with the original mid-grey
 * "bix", for use on light surfaces. To switch the site over, change `src`
 * below — every logo placement reads from here.
 */
export const brandLogo = {
  src: "/brand/cherbix-logo.png",
  /** width / height of the asset (420 x 176). */
  aspectRatio: 2.386,
} as const;
