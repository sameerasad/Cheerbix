import fs from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card, generated at build time.
 *
 * The real logo is inlined as a data URI — the OG renderer runs without a
 * origin to fetch from, so a relative path would not resolve.
 */
const logo = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/brand/cherbix-logo.png"))
  .toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #04060a 0%, #070e1a 45%, #04060a 100%)",
          position: "relative",
        }}
      >
        {/* Brand glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(18,194,233,0.30) 0%, rgba(11,92,245,0.14) 45%, rgba(4,6,10,0) 72%)",
            display: "flex",
          }}
        />

        {/* Top rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #0b5cf5 0%, #12c2e9 50%, #2bd9a0 100%)",
            display: "flex",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" width={210} height={88} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#f2f6fb",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Digital experiences that move businesses forward.
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 27,
              lineHeight: 1.4,
              color: "#9fadbf",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Web · Mobile · UI/UX · AI Automation · Marketing · SEO · Content
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(150,180,220,0.16)",
            paddingTop: 28,
            fontSize: 22,
            color: "#6d7c90",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex" }}>{siteConfig.contact.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
