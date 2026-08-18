"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/navbar/mobile-menu";
import { Button } from "@/components/ui/button";
import { LogoLink } from "@/components/ui/logo";
import { primaryNav } from "@/lib/constants/nav";
import { cn } from "@/lib/utils/cn";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line bg-ink-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/65"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-7 lg:h-18 lg:px-10"
      >
        <LogoLink height={30} priority />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-[0.9375rem] transition-colors duration-200",
                    active
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-px origin-center bg-linear-to-r from-transparent via-aqua-400 to-transparent transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Visibility is controlled by a wrapper: Button's base class already
              sets display, and a competing utility would depend on stylesheet
              order rather than intent. */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Start a Project
            </Button>
          </div>

          <MobileMenu pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}
