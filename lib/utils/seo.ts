import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants/site";

type BuildMetadataOptions = {
  title: string;
  description: string;
  /** Path only, e.g. "/services/seo". Used for canonical + OG url. */
  path?: string;
  /** Set for article pages so OG type and dates are emitted correctly. */
  article?: { publishedTime: string; author: string; section: string };
  noIndex?: boolean;
};

/**
 * One place that knows how a Cherbix page is described to crawlers and social
 * platforms. Every route metadata export goes through here.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  article,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  // Route-level opengraph-image.tsx files generate the actual asset; this
  // path is what they resolve to at request time.
  const ogImage = new URL("/opengraph-image", siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: article ? "article" : "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      ...(article
        ? {
            publishedTime: article.publishedTime,
            authors: [article.author],
            section: article.section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Structured data                                                             */
/* -------------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/brand/cherbix-logo.png`,
    image: `${siteConfig.url}/opengraph-image`,
    email: siteConfig.contact.email,
    foundingDate: String(siteConfig.foundedYear),
    areaServed: "Worldwide",
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "AI Automation",
      "Digital Marketing",
      "Search Engine Optimization",
      "Content Writing",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, siteConfig.url).toString(),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "Worldwide",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: new URL(input.path, siteConfig.url).toString(),
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    author: { "@type": "Organization", name: input.author },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: new URL(input.path, siteConfig.url).toString(),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, siteConfig.url).toString(),
    })),
  };
}
