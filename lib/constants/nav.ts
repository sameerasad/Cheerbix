export type NavItem = {
  label: string;
  href: string;
  /** Rendered inside the mega/mobile menu when present. */
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "Content Writing", href: "/services/content-writing" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
