import type { IconKey } from "./icons";

/**
 * The stack Cherbix actively works with. Keep this list honest — it is the
 * single place to edit when the team's capabilities change, and it feeds both
 * the home page technology section and the About page.
 */

export type TechGroup = {
  title: string;
  icon: IconKey;
  description: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    icon: "braces",
    description: "Interfaces built for speed, accessibility and maintainability.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Backend",
    icon: "layers",
    description: "Services and APIs that stay predictable under load.",
    items: ["Node.js", "NestJS", "Laravel", "REST APIs", "GraphQL"],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    description: "One codebase delivering to both app stores.",
    items: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Databases",
    icon: "database",
    description: "Relational and document stores, modelled for the actual queries.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & delivery",
    icon: "cloud",
    description: "Hosting, pipelines and monitoring that make releases routine.",
    items: ["AWS", "Vercel", "Firebase", "Docker", "CI/CD"],
  },
  {
    title: "AI & automation",
    icon: "bot",
    description: "Language models applied to defined, measurable processes.",
    items: ["Claude API", "OpenAI API", "RAG", "Vector search", "n8n"],
  },
];

/** Flat list used by the scrolling technology marquee. */
export const techMarquee: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "Firebase",
  "Docker",
  "Laravel",
  "GraphQL",
  "Claude API",
  "OpenAI API",
  "Figma",
];
