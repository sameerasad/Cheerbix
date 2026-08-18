import { PageFade } from "@/components/ui/animated";

/**
 * Re-runs on every navigation, which makes it the right place for the page
 * transition. It is a short opacity fade only — nothing that delays the point
 * at which content becomes readable, and it is skipped entirely under
 * prefers-reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageFade>{children}</PageFade>;
}
