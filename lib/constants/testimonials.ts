/**
 * Client testimonials.
 *
 * Empty until there are real, approved quotes to publish. The whole
 * testimonials section removes itself from the page while this array is empty,
 * so adding the first entry here is all it takes to bring it back.
 *
 * Use real names, roles and companies only, with the client's permission.
 * `initials` drives the avatar placeholder.
 */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Two initials rendered into the avatar placeholder. */
  initials: string;
};

export const testimonials: Testimonial[] = [];
