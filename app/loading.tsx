import { Container } from "@/components/layout/container";

/**
 * Route-level loading state. A skeleton in the shape of a page masthead, so
 * the transition reads as the next page arriving rather than a spinner.
 */
export default function Loading() {
  return (
    <div className="py-20 sm:py-24" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page…</span>

      <Container>
        <div className="max-w-3xl animate-pulse space-y-5">
          <div className="h-3 w-28 rounded bg-white/[0.06]" />
          <div className="h-10 w-full rounded-lg bg-white/[0.06] sm:h-14" />
          <div className="h-10 w-3/4 rounded-lg bg-white/[0.06] sm:h-14" />
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full rounded bg-white/[0.04]" />
            <div className="h-4 w-5/6 rounded bg-white/[0.04]" />
          </div>
        </div>

        <div className="mt-16 grid animate-pulse gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 rounded-xl border border-line bg-white/[0.02]"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
