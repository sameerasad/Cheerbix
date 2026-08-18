import { Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/lib/constants/testimonials";
import { cn } from "@/lib/utils/cn";

/**
 * Reusable testimonial card.
 *
 * While `isPlaceholder` is true the card carries a visible marker, so
 * illustrative copy can never be mistaken for a verified client quote. Setting
 * the flag to false on a real, approved testimonial removes it.
 */
export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "group relative flex h-full min-w-0 flex-col rounded-xl border border-line bg-ink-850/60 p-6 transition-[border-color,background-color] duration-300 hover:border-line-strong hover:bg-ink-800/70 sm:p-7",
        className,
      )}
    >
      <Quote
        size={22}
        aria-hidden="true"
        className="text-brand-400/40 transition-colors duration-300 group-hover:text-brand-400/70"
      />

      <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-fg">
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-7 flex items-start gap-3.5 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-600/30 to-aqua-500/20 text-[0.8125rem] font-medium text-brand-100 ring-1 ring-inset ring-line"
        >
          {testimonial.initials}
        </span>

        <div className="min-w-0">
          <p className="text-sm font-medium text-fg">{testimonial.name}</p>
          <p className="text-xs leading-snug text-fg-faint">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>

        {testimonial.isPlaceholder ? (
          <Badge variant="warn" className="ml-auto shrink-0">
            Placeholder
          </Badge>
        ) : null}
      </figcaption>
    </figure>
  );
}
