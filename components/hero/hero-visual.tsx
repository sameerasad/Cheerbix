"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils/cn";

/**
 * The hero's abstract visual.
 *
 * A connected-systems diagram rather than a decorative blob: nodes stand for
 * the disciplines Cherbix covers, the links between them are the argument the
 * page is making. Drawn entirely in SVG and CSS — no image requests, no canvas,
 * and no continuous work when reduced motion is preferred.
 */

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: "brand" | "aqua" | "mint";
  size: number;
};

const nodes: Node[] = [
  { id: "core", label: "Platform", x: 50, y: 50, accent: "brand", size: 15 },
  { id: "web", label: "Web", x: 17, y: 24, accent: "aqua", size: 8.5 },
  { id: "mobile", label: "Mobile", x: 84, y: 27, accent: "brand", size: 8 },
  { id: "ai", label: "AI", x: 82, y: 74, accent: "mint", size: 9 },
  { id: "growth", label: "Growth", x: 20, y: 79, accent: "aqua", size: 8 },
  { id: "design", label: "Design", x: 50, y: 12, accent: "brand", size: 6.5 },
  { id: "seo", label: "SEO", x: 50, y: 89, accent: "aqua", size: 6.5 },
];

const links: [string, string][] = [
  ["core", "web"],
  ["core", "mobile"],
  ["core", "ai"],
  ["core", "growth"],
  ["core", "design"],
  ["core", "seo"],
  ["web", "design"],
  ["ai", "growth"],
  ["mobile", "ai"],
  ["seo", "growth"],
];

const accentColor = {
  brand: "#4d95ff",
  aqua: "#33d9f2",
  mint: "#2bd9a0",
} as const;

function nodeById(id: string): Node {
  return nodes.find((node) => node.id === id) ?? nodes[0];
}

export function HeroVisual({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn("relative aspect-square w-full max-w-[34rem]", className)}
      aria-hidden="true"
    >
      {/* Ambient wash behind the diagram */}
      <div className="absolute inset-[8%] rounded-full bg-brand-600/18 blur-[80px]" />
      <div className="absolute inset-x-[22%] top-[18%] h-[45%] rounded-full bg-aqua-500/14 blur-[70px]" />

      {/* Concentric rings */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full"
        role="presentation"
      >
        <defs>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7bb0ff" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#1e7bff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0b5cf5" stopOpacity="0.15" />
          </radialGradient>
          <linearGradient id="hero-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#33d9f2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1e7bff" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {[46, 34, 22].map((radius, index) => (
          <circle
            key={radius}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(150,180,220,0.14)"
            strokeWidth="0.22"
            strokeDasharray={index === 1 ? "1.4 2.2" : undefined}
          />
        ))}

        {/* Links */}
        <g stroke="url(#hero-link)" strokeWidth="0.35" fill="none">
          {links.map(([fromId, toId]) => {
            const from = nodeById(fromId);
            const to = nodeById(toId);

            return (
              <motion.line
                key={`${fromId}-${toId}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                initial={reduced ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { duration: 1.1, delay: 0.25, ease: "easeOut" }
                }
              />
            );
          })}
        </g>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const isCore = node.id === "core";

          return (
            <motion.g
              key={node.id}
              initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: 0.35 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              {isCore ? (
                <>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="url(#hero-core)"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size + 3.5}
                    fill="none"
                    stroke="rgba(123,176,255,0.35)"
                    strokeWidth="0.3"
                  />
                </>
              ) : (
                <>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="#0a0f17"
                    stroke={accentColor[node.accent]}
                    strokeOpacity="0.55"
                    strokeWidth="0.4"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size * 0.32}
                    fill={accentColor[node.accent]}
                    fillOpacity="0.85"
                  />
                </>
              )}
            </motion.g>
          );
        })}

        {/* A single travelling pulse — one moving element, not a particle field */}
        {reduced ? null : (
          <motion.circle
            r="0.85"
            fill="#33d9f2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              cx: [17, 50, 82, 50],
              cy: [24, 50, 74, 50],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.7, 1],
            }}
          />
        )}
      </svg>

      {/* Node labels, positioned in HTML so they use the real typeface */}
      {nodes
        .filter((node) => node.id !== "core")
        .map((node) => (
          <span
            key={node.id}
            className="absolute -translate-x-1/2 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-fg-faint"
            style={{ left: `${node.x}%`, top: `${node.y + node.size / 2 + 4}%` }}
          >
            {node.label}
          </span>
        ))}

      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/90">
        {nodeById("core").label}
      </span>
    </div>
  );
}
