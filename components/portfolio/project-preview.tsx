import { cn } from "@/lib/utils/cn";

/**
 * Product-specific preview art for a build.
 *
 * These are schematics, not screenshots. Every build on /work is a concept
 * build, so a photographic "screenshot" would imply a shipped product that
 * does not exist. A wireframe reads honestly as a diagram of what the build
 * contains while still making each project recognisable at a glance — an ERP
 * ledger, a decision pipeline and a field app should not look alike.
 *
 * Nothing here carries a number that could be read as a measured result.
 */

export type PreviewVariant =
  | "records"
  | "decision"
  | "mobile-plan"
  | "catalogue"
  | "dashboard"
  | "pipeline"
  | "field";

type Props = {
  variant: PreviewVariant;
  palette: [string, string];
  /** Stable per-project string; keeps gradient ids unique on a shared page. */
  seed: string;
  className?: string;
};

const LINE = "rgba(150,180,220,0.30)";
const FAINT = "rgba(150,180,220,0.14)";
const PANEL = "#0c121c";
const PANEL_2 = "#111a26";

/**
 * Design canvas. Rendered with `meet`, so nothing is ever cropped. Schematics
 * are drawn within the first 250 units; the remainder is clear space that
 * keeps the overlaid category chip off the artwork.
 */
const W = 400;
const H = 284;

export function ProjectPreview({ variant, palette, seed, className }: Props) {
  const [from, to] = palette;
  const gid = `pv-${seed}`;

  return (
    <div
      aria-hidden="true"
      className={cn("relative isolate size-full overflow-hidden bg-ink-850", className)}
    >
      {/* Ambient wash, so the card still carries the project's colour */}
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          background: `radial-gradient(circle at 18% 12%, ${from} 0%, transparent 55%), radial-gradient(circle at 85% 88%, ${to} 0%, transparent 58%)`,
        }}
      />
      <div className="absolute inset-0 bg-grid-sm opacity-40" />

      <svg
        className="absolute inset-0 size-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        <defs>
          <linearGradient id={`${gid}-a`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <linearGradient id={`${gid}-soft`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={to} stopOpacity="0.5" />
            <stop offset="100%" stopColor={to} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {variant === "records" ? <Records gid={gid} /> : null}
        {variant === "decision" ? <Decision gid={gid} /> : null}
        {variant === "mobile-plan" ? <MobilePlan gid={gid} /> : null}
        {variant === "catalogue" ? <Catalogue gid={gid} /> : null}
        {variant === "dashboard" ? <Dashboard gid={gid} /> : null}
        {variant === "pipeline" ? <Pipeline gid={gid} /> : null}
        {variant === "field" ? <Field gid={gid} /> : null}
      </svg>

      {/* Keeps overlaid labels legible */}
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ERP — a ledger with modules, rows and an approval state                     */
/* -------------------------------------------------------------------------- */

function Records({ gid }: { gid: string }) {
  return (
    <g>
      <rect x="28" y="34" width="344" height="182" rx="8" fill={PANEL} stroke={LINE} />

      {/* Module rail */}
      <rect x="28" y="34" width="62" height="182" rx="8" fill={PANEL_2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="40" y={54 + i * 26} width="8" height="8" rx="2"
            fill={i === 1 ? `url(#${gid}-a)` : FAINT}
          />
          <rect
            x="54" y={56 + i * 26} width={i === 1 ? 26 : 22} height="4" rx="2"
            fill={i === 1 ? "rgba(200,225,255,0.55)" : FAINT}
          />
        </g>
      ))}

      {/* Table header */}
      <rect x="102" y="48" width="46" height="5" rx="2.5" fill={FAINT} />
      <rect x="176" y="48" width="34" height="5" rx="2.5" fill={FAINT} />
      <rect x="238" y="48" width="40" height="5" rx="2.5" fill={FAINT} />
      <rect x="308" y="48" width="44" height="5" rx="2.5" fill={FAINT} />
      <line x1="102" y1="62" x2="358" y2="62" stroke={LINE} />

      {/* Rows */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 74 + i * 28;
        const active = i === 2;
        return (
          <g key={i}>
            {active ? (
              <rect x="98" y={y - 9} width="264" height="24" rx="4" fill="rgba(120,180,255,0.07)" />
            ) : null}
            <rect x="102" y={y} width="52" height="5" rx="2.5" fill="rgba(200,225,255,0.34)" />
            <rect x="176" y={y} width="24" height="5" rx="2.5" fill={FAINT} />
            <rect x="238" y={y} width="36" height="5" rx="2.5" fill={FAINT} />
            <rect
              x="308" y={y - 4} width={active ? 46 : 32} height="13" rx="6.5"
              fill={active ? `url(#${gid}-a)` : "rgba(150,180,220,0.10)"}
              opacity={active ? 0.9 : 1}
            />
          </g>
        );
      })}
      <line x1="102" y1="200" x2="358" y2="200" stroke={FAINT} />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Lending — a staged decision path with a review branch                       */
/* -------------------------------------------------------------------------- */

function Decision({ gid }: { gid: string }) {
  const stages = [46, 132, 218, 304];
  return (
    <g>
      {/* Documents feeding the first stage */}
      <g opacity="0.75">
        <rect x="22" y="52" width="26" height="32" rx="3" fill={PANEL_2} stroke={LINE} />
        <rect x="27" y="60" width="16" height="3" rx="1.5" fill={FAINT} />
        <rect x="27" y="68" width="12" height="3" rx="1.5" fill={FAINT} />
        <rect x="30" y="46" width="26" height="32" rx="3" fill={PANEL} stroke={LINE} />
        <rect x="35" y="54" width="16" height="3" rx="1.5" fill={FAINT} />
        <rect x="35" y="62" width="12" height="3" rx="1.5" fill={FAINT} />
      </g>

      {/* Connector */}
      <line x1="62" y1="118" x2="344" y2="118" stroke={LINE} strokeDasharray="3 4" />

      {stages.map((x, i) => (
        <g key={x}>
          <rect
            x={x} y="98" width="52" height="40" rx="6"
            fill={PANEL} stroke={i === 2 ? `url(#${gid}-a)` : LINE}
            strokeWidth={i === 2 ? 1.4 : 1}
          />
          <rect x={x + 10} y="110" width="24" height="4" rx="2" fill="rgba(200,225,255,0.4)" />
          <rect x={x + 10} y="120" width="16" height="4" rx="2" fill={FAINT} />
          <circle cx={x + 44} cy="106" r="3" fill={i <= 2 ? `url(#${gid}-a)` : FAINT} />
        </g>
      ))}

      {/* Review branch off the decision stage */}
      <path d="M244 138 L244 172 L296 172" fill="none" stroke={LINE} strokeDasharray="3 4" />
      <rect x="296" y="156" width="62" height="32" rx="6" fill={PANEL_2} stroke={LINE} />
      <rect x="306" y="166" width="30" height="4" rx="2" fill="rgba(200,225,255,0.34)" />
      <rect x="306" y="175" width="20" height="4" rx="2" fill={FAINT} />
      <circle cx="350" cy="164" r="3.5" fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.4" />

      {/* Audit strip */}
      <rect x="46" y="200" width="312" height="18" rx="4" fill={PANEL} stroke={FAINT} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={58 + i * 50} y="207" width={i % 2 ? 22 : 32} height="4" rx="2" fill={FAINT} />
      ))}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Healthcare — a phone showing today's plan, offline                          */
/* -------------------------------------------------------------------------- */

function MobilePlan({ gid }: { gid: string }) {
  return (
    <g>
      <Phone x={152} />
      {/* Offline chip */}
      <rect x="178" y="46" width="48" height="13" rx="6.5" fill="rgba(150,180,220,0.12)" />
      <circle cx="187" cy="52.5" r="3" fill="none" stroke="rgba(200,225,255,0.55)" strokeWidth="1.2" />
      <line x1="184.5" y1="55" x2="189.5" y2="50" stroke="rgba(200,225,255,0.55)" strokeWidth="1.2" />
      <rect x="194" y="50.5" width="26" height="4" rx="2" fill="rgba(200,225,255,0.4)" />

      {/* Today heading */}
      <rect x="170" y="70" width="46" height="6" rx="3" fill="rgba(200,225,255,0.55)" />

      {/* Checklist */}
      {[0, 1, 2, 3].map((i) => {
        const y = 90 + i * 30;
        const done = i < 2;
        return (
          <g key={i}>
            <rect x="166" y={y} width="68" height="24" rx="5" fill={PANEL_2} stroke={FAINT} />
            <circle
              cx="178" cy={y + 12} r="6"
              fill={done ? `url(#${gid}-a)` : "none"}
              stroke={done ? "none" : LINE}
            />
            {done ? (
              <path
                d={`M175.4 ${y + 12} l1.8 1.9 3.4 -3.7`}
                fill="none" stroke="#04060a" strokeWidth="1.5" strokeLinecap="round"
              />
            ) : null}
            <rect x="190" y={y + 7} width={i % 2 ? 26 : 34} height="4" rx="2" fill="rgba(200,225,255,0.36)" />
            <rect x="190" y={y + 15} width="18" height="3" rx="1.5" fill={FAINT} />
          </g>
        );
      })}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Commerce — faceted catalogue with account pricing                           */
/* -------------------------------------------------------------------------- */

function Catalogue({ gid }: { gid: string }) {
  return (
    <g>
      {/* Facet rail */}
      <rect x="28" y="40" width="86" height="170" rx="7" fill={PANEL} stroke={LINE} />
      {[0, 1, 2].map((group) => (
        <g key={group}>
          <rect x="40" y={56 + group * 54} width="34" height="5" rx="2.5" fill="rgba(200,225,255,0.45)" />
          {[0, 1, 2].map((row) => (
            <g key={row}>
              <rect
                x="40" y={70 + group * 54 + row * 13} width="7" height="7" rx="1.5"
                fill={group === 0 && row === 1 ? `url(#${gid}-a)` : "none"}
                stroke={group === 0 && row === 1 ? "none" : LINE}
              />
              <rect
                x="53" y={71.5 + group * 54 + row * 13} width={row === 1 ? 40 : 30} height="4" rx="2"
                fill={FAINT}
              />
            </g>
          ))}
        </g>
      ))}

      {/* Product grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3;
        const row = (i / 3) | 0;
        const x = 128 + col * 82;
        const y = 40 + row * 88;
        const contract = i === 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width="72" height="78" rx="6" fill={PANEL} stroke={contract ? `url(#${gid}-a)` : LINE} />
            <rect x={x + 10} y={y + 10} width="52" height="32" rx="4" fill={`url(#${gid}-soft)`} />
            <rect x={x + 10} y={y + 50} width="42" height="4" rx="2" fill="rgba(200,225,255,0.34)" />
            <rect x={x + 10} y={y + 59} width="26" height="4" rx="2" fill={FAINT} />
            <rect
              x={x + 10} y={y + 68} width={contract ? 38 : 22} height="6" rx="3"
              fill={contract ? `url(#${gid}-a)` : "rgba(150,180,220,0.16)"}
            />
          </g>
        );
      })}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* SaaS — three questions, one chart                                           */
/* -------------------------------------------------------------------------- */

function Dashboard({ gid }: { gid: string }) {
  return (
    <g>
      {/* Reduced navigation: three views only */}
      <rect x="28" y="30" width="344" height="22" rx="5" fill={PANEL_2} />
      {[0, 1, 2].map((i) => (
        <rect
          key={i} x={42 + i * 52} y="38" width={i === 0 ? 30 : 34} height="5" rx="2.5"
          fill={i === 0 ? "rgba(200,225,255,0.6)" : FAINT}
        />
      ))}
      <rect x="42" y="49" width="30" height="1.6" fill={`url(#${gid}-a)`} />

      {/* Stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={28 + i * 118} y="62" width="108" height="42" rx="6" fill={PANEL} stroke={LINE} />
          <rect x={40 + i * 118} y="72" width="30" height="4" rx="2" fill={FAINT} />
          <rect x={40 + i * 118} y="84" width="46" height="9" rx="3" fill="rgba(200,225,255,0.5)" />
        </g>
      ))}

      {/* Chart */}
      <rect x="28" y="114" width="344" height="102" rx="6" fill={PANEL} stroke={LINE} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1="44" y1={140 + i * 24} x2="356" y2={140 + i * 24} stroke={FAINT} />
      ))}
      <path
        d="M44 192 L92 176 L140 182 L188 158 L236 164 L284 140 L332 148 L356 134 L356 204 L44 204 Z"
        fill={`url(#${gid}-soft)`}
      />
      <path
        d="M44 192 L92 176 L140 182 L188 158 L236 164 L284 140 L332 148 L356 134"
        fill="none" stroke={`url(#${gid}-a)`} strokeWidth="2" strokeLinejoin="round"
      />
      <circle cx="356" cy="134" r="3.5" fill={`url(#${gid}-a)`} />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* AI automation — classify, gate on confidence, route                         */
/* -------------------------------------------------------------------------- */

function Pipeline({ gid }: { gid: string }) {
  return (
    <g>
      {/* Inbound stack */}
      <g>
        <rect x="26" y="106" width="44" height="30" rx="4" fill={PANEL_2} stroke={LINE} />
        <rect x="30" y="100" width="44" height="30" rx="4" fill={PANEL} stroke={LINE} />
        <rect x="38" y="109" width="26" height="4" rx="2" fill={FAINT} />
        <rect x="38" y="117" width="18" height="4" rx="2" fill={FAINT} />
      </g>

      <line x1="76" y1="115" x2="112" y2="115" stroke={LINE} strokeDasharray="3 4" />

      {/* Classifier */}
      <rect x="112" y="88" width="76" height="56" rx="8" fill={PANEL} stroke={`url(#${gid}-a)`} strokeWidth="1.4" />
      <circle cx="150" cy="108" r="9" fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.6" />
      <circle cx="150" cy="108" r="3" fill={`url(#${gid}-a)`} />
      <rect x="128" y="124" width="44" height="4" rx="2" fill="rgba(200,225,255,0.4)" />
      <rect x="136" y="132" width="28" height="3" rx="1.5" fill={FAINT} />

      {/* Confidence gate */}
      <line x1="188" y1="115" x2="216" y2="115" stroke={LINE} strokeDasharray="3 4" />
      <path d="M216 115 L238 99 L260 115 L238 131 Z" fill={PANEL_2} stroke={LINE} />
      <rect x="228" y="112" width="20" height="4" rx="2" fill={FAINT} />

      {/* Confident -> system */}
      <path d="M260 115 L292 115 L292 82 L318 82" fill="none" stroke={LINE} strokeDasharray="3 4" />
      <rect x="318" y="64" width="56" height="36" rx="6" fill={PANEL} stroke={LINE} />
      <rect x="328" y="76" width="30" height="4" rx="2" fill="rgba(200,225,255,0.4)" />
      <rect x="328" y="85" width="20" height="4" rx="2" fill={FAINT} />

      {/* Uncertain -> human review */}
      <path d="M260 115 L292 115 L292 158 L318 158" fill="none" stroke={LINE} strokeDasharray="3 4" />
      <rect x="318" y="140" width="56" height="36" rx="6" fill={PANEL_2} stroke={`url(#${gid}-a)`} />
      <circle cx="334" cy="153" r="5" fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.3" />
      <path d="M328 168 a6 6 0 0 1 12 0" fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.3" />
      <rect x="346" y="152" width="20" height="4" rx="2" fill={FAINT} />
      <rect x="346" y="161" width="14" height="3" rx="1.5" fill={FAINT} />

      {/* Action log */}
      <rect x="26" y="196" width="348" height="20" rx="4" fill={PANEL} stroke={FAINT} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx={40 + i * 68} cy="206" r="2.5" fill={FAINT} />
          <rect x={48 + i * 68} y="204" width={i % 2 ? 30 : 42} height="4" rx="2" fill={FAINT} />
        </g>
      ))}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Field service — job sheet, signature, queued sync                           */
/* -------------------------------------------------------------------------- */

function Field({ gid }: { gid: string }) {
  return (
    <g>
      <Phone x={92} />
      {/* Sync chip: queued, not sent */}
      <rect x="112" y="46" width="60" height="13" rx="6.5" fill="rgba(150,180,220,0.12)" />
      <circle cx="121" cy="52.5" r="3.2" fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.3" />
      <rect x="129" y="50.5" width="36" height="4" rx="2" fill="rgba(200,225,255,0.42)" />

      {/* Job sheet */}
      <rect x="110" y="70" width="52" height="6" rx="3" fill="rgba(200,225,255,0.55)" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="106" y={88 + i * 22} width="68" height="16" rx="4" fill={PANEL_2} stroke={FAINT} />
          <rect x="114" y={94 + i * 22} width={i === 1 ? 30 : 42} height="4" rx="2" fill={FAINT} />
        </g>
      ))}

      {/* Photo capture */}
      <rect x="106" y="156" width="32" height="26" rx="4" fill={PANEL_2} stroke={FAINT} />
      <circle cx="122" cy="169" r="5" fill="none" stroke={LINE} strokeWidth="1.2" />
      {/* Signature */}
      <rect x="142" y="156" width="32" height="26" rx="4" fill={PANEL_2} stroke={FAINT} />
      <path
        d="M147 174 c4 -8 7 2 10 -4 c2 -4 4 3 7 -2"
        fill="none" stroke={`url(#${gid}-a)`} strokeWidth="1.4" strokeLinecap="round"
      />

      {/* Back-office queue */}
      <rect x="212" y="78" width="160" height="104" rx="7" fill={PANEL} stroke={LINE} />
      <rect x="226" y="92" width="48" height="5" rx="2.5" fill="rgba(200,225,255,0.45)" />
      <line x1="226" y1="106" x2="358" y2="106" stroke={FAINT} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="226" y={116 + i * 20} width={i === 0 ? 74 : 56} height="4" rx="2" fill="rgba(200,225,255,0.3)" />
          <rect
            x="322" y={112 + i * 20} width="30" height="12" rx="6"
            fill={i === 0 ? `url(#${gid}-a)` : "rgba(150,180,220,0.12)"}
            opacity={i === 0 ? 0.85 : 1}
          />
        </g>
      ))}
    </g>
  );
}

/* -------------------------------------------------------------------------- */

function Phone({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="34" width="96" height="182" rx="14" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
      <rect x={x + 34} y="40" width="28" height="4" rx="2" fill="rgba(150,180,220,0.22)" />
    </g>
  );
}
