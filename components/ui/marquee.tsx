import { cn } from "@/lib/utils/cn";

/**
 * A single-direction scrolling strip.
 *
 * Implemented with a duplicated track and a CSS keyframe rather than
 * JavaScript, so it costs nothing on the main thread. The global
 * prefers-reduced-motion rule in globals.css stops the animation outright, and
 * the duplicate is hidden from assistive technology so the list is announced
 * once.
 */
export function Marquee({
  items,
  className,
  speedSeconds = 48,
}: {
  items: string[];
  className?: string;
  speedSeconds?: number;
}) {
  return (
    <div
      className={cn("mask-fade-x relative overflow-hidden", className)}
      // The track is decorative repetition of content already listed on the
      // page; the readable copy lives in the technology groups above it.
      aria-hidden="true"
    >
      <div
        className="flex w-max gap-3 will-change-transform"
        style={{
          animation: `marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 gap-3">
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="whitespace-nowrap rounded-lg border border-line bg-ink-850/60 px-4 py-2.5 text-sm text-fg-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
