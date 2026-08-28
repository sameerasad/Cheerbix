import {
  ArrowUpRight,
  BarChart3,
  Activity,
  Blocks,
  Bot,
  Boxes,
  Braces,
  Building2,
  Cloud,
  Cpu,
  DatabaseBackup,
  Compass,
  Database,
  Gauge,
  GitPullRequest,
  Globe,
  Handshake,
  KeyRound,
  Layers,
  Layout,
  Megaphone,
  MessagesSquare,
  PenLine,
  Rocket,
  Search,
  ShieldCheck,
  TestTube,
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
  activity: Activity,
  blocks: Blocks,
  bot: Bot,
  boxes: Boxes,
  braces: Braces,
  building: Building2,
  cloud: Cloud,
  cpu: Cpu,
  "database-backup": DatabaseBackup,
  compass: Compass,
  database: Database,
  gauge: Gauge,
  "git-pull-request": GitPullRequest,
  globe: Globe,
  handshake: Handshake,
  key: KeyRound,
  layers: Layers,
  layout: Layout,
  megaphone: Megaphone,
  messages: MessagesSquare,
  pen: PenLine,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  "test-tube": TestTube,
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
