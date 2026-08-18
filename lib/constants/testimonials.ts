/**
 * PLACEHOLDER TESTIMONIALS — NOT REAL CLIENT QUOTES
 *
 * Every entry is illustrative and attributed to a fictional person and company.
 * The UI renders a visible "Placeholder" marker while `isPlaceholder` is true.
 *
 * To publish real testimonials: replace the quote, name, role and company with
 * the approved wording, and set `isPlaceholder: false`. The marker disappears
 * automatically. Do not set the flag to false on illustrative content.
 */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Two initials rendered into the avatar placeholder. */
  initials: string;
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "They asked what the business needed to achieve before they asked anything about technology. That single difference changed the shape of the whole project.",
    name: "Sample Name",
    role: "Operations Director",
    company: "Example Company",
    initials: "SN",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "The handover was the part that surprised us. Documented, tested, and genuinely ours — our own developers picked it up without a single follow-up call.",
    name: "Sample Name",
    role: "Head of Product",
    company: "Example Company",
    initials: "SN",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "We had been quoted for an AI project three times before. Cherbix was the first team to measure the process first and then tell us which parts were actually worth automating.",
    name: "Sample Name",
    role: "Founder",
    company: "Example Company",
    initials: "SN",
    isPlaceholder: true,
  },
  {
    id: "t4",
    quote:
      "Having the site, the SEO and the campaigns handled by one team removed an entire category of finger-pointing from our marketing.",
    name: "Sample Name",
    role: "Marketing Lead",
    company: "Example Company",
    initials: "SN",
    isPlaceholder: true,
  },
];
