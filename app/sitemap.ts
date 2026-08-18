import type { MetadataRoute } from "next";

import { posts } from "@/lib/constants/posts";
import { projects } from "@/lib/constants/projects";
import { services } from "@/lib/constants/services";
import { siteConfig } from "@/lib/constants/site";

/**
 * Generated from the same constants the pages render from, so a new service,
 * case study or article appears in the sitemap without a separate edit.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteConfig.url).toString();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ([
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/solutions"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/work"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/blog"), changeFrequency: "weekly", priority: 0.7 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.9 },
    { url: url("/faqs"), changeFrequency: "monthly", priority: 0.5 },
    { url: url("/privacy"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), changeFrequency: "yearly", priority: 0.2 },
  ] satisfies MetadataRoute.Sitemap).map((route) => ({ ...route, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: url(`/work/${project.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
