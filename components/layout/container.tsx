import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** `wide` is used by full-bleed layouts such as the featured work grid. */
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-[78rem]",
  wide: "max-w-[88rem]",
} as const;

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-7 lg:px-10", sizes[size], className)}>
      {children}
    </Tag>
  );
}
