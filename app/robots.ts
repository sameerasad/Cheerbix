import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The contact endpoint has nothing to index and should not be crawled.
        disallow: ["/api/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
