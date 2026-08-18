import { cn } from "@/lib/utils/cn";

/* -------------------------------------------------------------------------- */
/* Grid backdrop                                                               */
/* -------------------------------------------------------------------------- */

/**
 * The recurring technical grid. Pure CSS, no image request, and faded at the
 * edges so it reads as texture rather than as a pattern fill.
 */
export function GridBackdrop({
  className,
  fade = "bottom",
  size = "lg",
}: {
  className?: string;
  fade?: "bottom" | "radial" | "none";
  size?: "sm" | "lg";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        size === "lg" ? "bg-grid" : "bg-grid-sm",
        fade === "bottom" && "mask-fade-b",
        className,
      )}
      style={
        fade === "radial"
          ? {
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 25%, transparent 78%)",
            }
          : undefined
      }
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Hairline separators                                                         */
/* -------------------------------------------------------------------------- */

/** A one-pixel rule that fades out at both ends. */
export function FadeRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-px w-full bg-linear-to-r from-transparent via-line-strong to-transparent",
        className,
      )}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Abstract cover                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Generated cover art for case studies and articles.
 *
 * The brief rules out generic stock photography, and inventing screenshots of
 * products that do not exist would be dishonest. Instead each record carries a
 * two-colour palette, and this renders a deterministic geometric composition
 * from it — recognisably per-project, obviously not a photograph of a client.
 */
export function AbstractCover({
  palette,
  seed,
  className,
  variant = "grid",
}: {
  palette: [string, string];
  /** Any stable string — the slug. Drives the deterministic layout. */
  seed: string;
  className?: string;
  variant?: "grid" | "orbit" | "wave";
}) {
  const [from, to] = palette;
  // Small deterministic hash so each seed gets a consistent, distinct layout.
  const hash = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rotation = (hash % 24) - 12;
  const offset = hash % 18;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate size-full overflow-hidden bg-ink-850",
        className,
      )}
    >
      {/* Base wash */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, transparent 55%), radial-gradient(circle at 78% 22%, ${to} 0%, transparent 58%)`,
        }}
      />

      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-45" />

      {/* Geometry */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          <linearGradient id={`stroke-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} stopOpacity="0.85" />
            <stop offset="100%" stopColor={to} stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id={`fill-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} stopOpacity="0.3" />
            <stop offset="100%" stopColor={to} stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {variant === "orbit" ? (
          <g
            transform={`rotate(${rotation} 200 130)`}
            stroke={`url(#stroke-${seed})`}
            fill="none"
          >
            <ellipse cx="200" cy="130" rx="150" ry="58" strokeWidth="1" />
            <ellipse cx="200" cy="130" rx="112" ry="42" strokeWidth="1" opacity="0.6" />
            <ellipse cx="200" cy="130" rx="74" ry="26" strokeWidth="1" opacity="0.35" />
            <rect
              x={196 + offset}
              y="94"
              width="34"
              height="34"
              rx="6"
              fill={`url(#fill-${seed})`}
              strokeWidth="1"
            />
            <rect
              x={240 + offset}
              y="118"
              width="22"
              height="22"
              rx="5"
              fill={`url(#fill-${seed})`}
              strokeWidth="1"
              opacity="0.75"
            />
          </g>
        ) : null}

        {variant === "wave" ? (
          <g stroke={`url(#stroke-${seed})`} fill="none" strokeWidth="1">
            {Array.from({ length: 7 }).map((_, index) => (
              <path
                key={index}
                d={`M -20 ${70 + index * 22 + offset} Q 110 ${
                  30 + index * 20
                } 210 ${80 + index * 20} T 430 ${60 + index * 22}`}
                opacity={0.7 - index * 0.08}
              />
            ))}
          </g>
        ) : null}

        {variant === "grid" ? (
          <g
            transform={`rotate(${rotation} 200 130)`}
            stroke={`url(#stroke-${seed})`}
            fill={`url(#fill-${seed})`}
            strokeWidth="1"
          >
            <rect x={70 + offset} y="52" width="118" height="76" rx="10" />
            <rect
              x={196 + offset}
              y="52"
              width="72"
              height="76"
              rx="10"
              opacity="0.7"
            />
            <rect
              x={70 + offset}
              y="136"
              width="72"
              height="72"
              rx="10"
              opacity="0.5"
            />
            <rect
              x={150 + offset}
              y="136"
              width="118"
              height="72"
              rx="10"
              opacity="0.85"
            />
          </g>
        ) : null}
      </svg>

      {/* Vignette keeps text legible when overlaid */}
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
    </div>
  );
}
