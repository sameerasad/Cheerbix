"use client";

/**
 * Client-side event helper. Deliberately provider-agnostic: it pushes to the
 * GTM dataLayer and forwards to gtag when either is present, and is a silent
 * no-op otherwise. Components call `trackEvent(...)` without knowing or caring
 * which analytics stack is configured.
 */

type EventPayload = Record<string, string | number | boolean | undefined>;

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (command: string, eventName: string, payload?: EventPayload) => void;
};

export function trackEvent(name: string, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  const w = window as DataLayerWindow;

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...payload });
  }

  if (typeof w.gtag === "function") {
    w.gtag("event", name, payload);
  }
}
