/** Stable across server and client — avoids hydration mismatches on dates. */
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function yearsSince(year: number): number {
  return Math.max(1, new Date().getUTCFullYear() - year);
}
