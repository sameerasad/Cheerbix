type ClassValue =
  | string
  | number
  | bigint
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

/**
 * Minimal class name joiner. Deliberately not `clsx` + `tailwind-merge`: the
 * component API here uses explicit variants rather than arbitrary overrides,
 * so conflict resolution is unnecessary and two dependencies are avoided.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      for (const [key, value] of Object.entries(input)) {
        if (value) out.push(key);
      }
    }
  }

  return out.join(" ");
}
