"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

import type { FAQ } from "@/lib/constants/services";
import { cn } from "@/lib/utils/cn";

type FAQAccordionProps = {
  items: FAQ[];
  /** Index opened on first render; pass null for all-collapsed. */
  defaultOpen?: number | null;
  className?: string;
};

/**
 * Single-expansion accordion built on native buttons.
 *
 * Accessibility notes: each trigger is a real <button> carrying aria-expanded
 * and aria-controls, the panel is labelled by its trigger, and collapsed
 * panels are removed from the tree entirely rather than merely hidden — so
 * screen readers and in-page find never reach unreachable content.
 */
export function FAQAccordion({
  items,
  defaultOpen = 0,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-6 text-left",
                  "transition-colors duration-200 hover:text-brand-200",
                  isOpen ? "text-fg" : "text-fg",
                )}
              >
                <span className="text-base font-medium sm:text-lg">
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-brand-400/50 bg-brand-500/15 text-brand-200"
                      : "border-line-strong text-fg-faint group-hover:border-brand-400/40 group-hover:text-brand-200",
                  )}
                >
                  <Plus size={14} strokeWidth={2} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-10 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
