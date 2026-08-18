"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { LogoLink } from "@/components/ui/logo";
import { primaryNav } from "@/lib/constants/nav";
import { services } from "@/lib/constants/services";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ pathname }: { pathname: string }) {
  /**
   * The menu is open only while the route it was opened on is still current.
   * Deriving it this way closes the panel on navigation — including browser
   * back and forward — without an effect that sets state during render.
   */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn !== null && openedOn === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const close = useCallback(() => setOpenedOn(null), []);

  // Lock background scroll while the panel is open.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape to close, and keep Tab inside the panel while it is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Move focus into the panel on open.
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpenedOn(pathname)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="grid size-11 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg lg:hidden"
      >
        <Menu size={22} strokeWidth={1.7} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-100 lg:hidden"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              onClick={close}
              className="absolute inset-0 size-full cursor-default bg-ink-950/75 backdrop-blur-sm"
            />

            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={reduced ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduced ? { x: 0 } : { x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 flex w-full max-w-[24rem] flex-col overflow-y-auto overscroll-contain border-l border-line bg-ink-900 shadow-[-24px_0_60px_-24px_rgba(0,0,0,0.9)]"
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
                <LogoLink height={28} />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close navigation menu"
                  className="grid size-11 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
                >
                  <X size={22} strokeWidth={1.7} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 px-5 py-6">
                <ul className="space-y-1">
                  {primaryNav.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`);

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-12 items-center justify-between rounded-lg px-3 text-lg transition-colors",
                            active
                              ? "bg-brand-500/10 text-fg ring-1 ring-inset ring-brand-500/25"
                              : "text-fg-muted hover:bg-white/[0.04] hover:text-fg",
                          )}
                        >
                          {item.label}
                          <ArrowRight
                            size={16}
                            aria-hidden="true"
                            className="opacity-40"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-8 mb-3 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-fg-faint">
                  Services
                </p>
                <ul className="space-y-0.5">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={close}
                        className="flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] text-fg-muted transition-colors hover:bg-white/[0.04] hover:text-fg"
                      >
                        {service.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="shrink-0 border-t border-line px-5 py-6">
                <Button href="/contact" size="lg" className="w-full" onClick={close}>
                  Start a Project
                  <ArrowRight size={17} aria-hidden="true" />
                </Button>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-4 block text-center text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
