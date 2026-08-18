import { createElement } from "react";

import { getIcon, type IconKey } from "@/lib/constants/icons";

type IconProps = {
  name: IconKey;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

/**
 * Looks the icon up at render time, which keeps data files free of component
 * references and safe to pass across the server/client boundary.
 *
 * `createElement` rather than JSX: the registry returns a module-scope
 * component, but a locally-bound identifier in JSX reads to static analysis as
 * a component being defined during render.
 */
export function Icon({ name, className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return createElement(getIcon(name), {
    className,
    size,
    strokeWidth,
    "aria-hidden": "true",
  });
}
