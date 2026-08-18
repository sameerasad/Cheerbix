import Image from "next/image";
import Link from "next/link";

import { brandLogo, siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  /** Rendered height in pixels; width follows the asset's aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Renders the supplied Cherbix logo, unmodified — no crop, filter or recolour
 * is applied at render time.
 *
 * next/image serves it as AVIF/WebP at the exact size requested, which takes
 * the ~48 kB master down to a few kB per placement. Width and height are
 * derived from the asset's real aspect ratio, so it never shifts layout.
 */
export function LogoMark({ height = 30, className, priority = false }: LogoProps) {
  const width = Math.round(height * brandLogo.aspectRatio);

  return (
    <Image
      src={brandLogo.src}
      alt={`${siteConfig.name} logo`}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={cn("block select-none", className)}
      draggable={false}
    />
  );
}

type LogoLinkProps = LogoProps & {
  /** Screen-reader label; defaults to a "home" description. */
  label?: string;
};

export function LogoLink({
  height = 30,
  className,
  priority = false,
  label = `${siteConfig.name} — back to home`,
}: LogoLinkProps) {
  return (
    <Link
      href="/"
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-md transition-opacity duration-200 hover:opacity-85",
        className,
      )}
    >
      <LogoMark height={height} priority={priority} />
    </Link>
  );
}
