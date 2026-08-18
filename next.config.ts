import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Two lockfiles exist above this directory; pin the workspace root so
  // Turbopack does not infer the parent folder.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // The logo is gradient artwork; the default 75 leaves visible banding on
    // it. Next 16 only honours a `quality` prop for values declared here.
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
