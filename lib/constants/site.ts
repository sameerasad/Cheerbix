/**
 * Single source of truth for brand-level facts. Everything the business might
 * realistically want to change without touching a component lives here.
 */

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
  /** Placeholders — replace with real details before launch. */
  contact: {
    email: "hello@cherbix.com",
    phone: "+1 (000) 000-0000",
    location: "Remote-first · Serving clients globally",
    availability: "Mon–Fri, 09:00–18:00 (GMT+5)",
    responseTime: "We reply to project enquiries within 1 business day.",
  },
  /** Founded year drives the "years of experience" copy in one place. */
  foundedYear: 2021,
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "x" | "instagram" | "dribbble";
};

/** Placeholder handles — point these at the real profiles before launch. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "X", href: "https://x.com/", icon: "x" },
  { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
];

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
