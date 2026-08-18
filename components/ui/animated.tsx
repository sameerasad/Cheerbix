"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

/**
 * Pre-created at module scope. Calling `motion.create()` during render would
 * produce a new component type on every pass and remount the subtree.
 */
const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  span: motion.span,
  p: motion.p,
  header: motion.header,
  figure: motion.figure,
  dl: motion.dl,
} as const;

type MotionTagName = keyof typeof motionTags;

/* -------------------------------------------------------------------------- */
/* Reveal — the single scroll animation used across the site                   */
/* -------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  /** Seconds. Kept small; long delays read as sluggishness, not polish. */
  delay?: number;
  /** Distance travelled on entry, in pixels. */
  distance?: number;
};

/**
 * Fade-and-rise on scroll. When the visitor prefers reduced motion the element
 * renders in its final state immediately — no transform, no opacity ramp.
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  distance = 16,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motionTags[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Stagger — parent/child pair for card grids                                  */
/* -------------------------------------------------------------------------- */

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motionTags[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motionTags[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Page transition                                                             */
/* -------------------------------------------------------------------------- */

/** A short opacity fade on route change. Nothing that delays interaction. */
export function PageFade({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Ambient glow                                                                */
/* -------------------------------------------------------------------------- */

/**
 * The slow breathing glow behind the hero and CTA panels. Isolated here so the
 * reduced-motion check lives in one place rather than in each section.
 */
export function AmbientGlow({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ opacity: 0.34 * intensity }}
      animate={
        reduced
          ? undefined
          : { opacity: [0.24 * intensity, 0.46 * intensity, 0.24 * intensity] }
      }
      transition={
        reduced ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}
