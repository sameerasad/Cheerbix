import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Braces,
  Building2,
  Cloud,
  Compass,
  Database,
  Gauge,
  Globe,
  Handshake,
  Layers,
  Layout,
  Megaphone,
  MessagesSquare,
  PenLine,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Data files reference icons by key rather than by component, so service /
 * value / technology records stay plain serialisable objects that can cross a
 * server -> client component boundary safely.
 */
export const iconRegistry = {
  "arrow-up-right": ArrowUpRight,
  "bar-chart": BarChart3,
  bot: Bot,
  boxes: Boxes,
  braces: Braces,
  building: Building2,
  cloud: Cloud,
  compass: Compass,
  database: Database,
  gauge: Gauge,
  globe: Globe,
  handshake: Handshake,
  layers: Layers,
  layout: Layout,
  megaphone: Megaphone,
  messages: MessagesSquare,
  pen: PenLine,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  target: Target,
  users: Users,
  workflow: Workflow,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconRegistry;

export function getIcon(key: IconKey): LucideIcon {
  return iconRegistry[key];
}
