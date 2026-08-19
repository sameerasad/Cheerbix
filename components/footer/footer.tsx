import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { GridBackdrop } from "@/components/ui/decor";
import { SocialIcon } from "@/components/ui/social-icons";
import { LogoLink } from "@/components/ui/logo";
import { footerNav } from "@/lib/constants/nav";
import { siteConfig, socialLinks } from "@/lib/constants/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-900">
      <GridBackdrop className="opacity-40" fade="none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[100px]"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-10">
            <LogoLink height={34} />

            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-fg-muted">
              Digital solutions for businesses ready to build, automate, and grow.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-fg-muted transition-colors hover:text-fg"
                >
                  <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.phone ? (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2.5 text-fg-muted transition-colors hover:text-fg"
                  >
                    <Phone size={15} strokeWidth={1.7} aria-hidden="true" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
              ) : null}
              {siteConfig.contact.location ? (
                <li className="inline-flex items-start gap-2.5 text-fg-muted">
                  <MapPin
                    size={15}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  />
                  {siteConfig.contact.location}
                </li>
              ) : null}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            {footerNav.map((group) => (
              <nav key={group.title} aria-labelledby={`footer-${group.title}`}>
                <h2
                  id={`footer-${group.title}`}
                  className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-fg-faint"
                >
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start gap-6 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-faint">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {socialLinks.length > 0 ? (
            <ul className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${social.label}`}
                    className="grid size-10 place-items-center rounded-lg text-fg-faint ring-1 ring-inset ring-transparent transition-all hover:bg-white/[0.05] hover:text-fg hover:ring-line"
                  >
                    <SocialIcon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
