import { Code, Database, Globe, Cpu, Mail, MessageSquare, Code2, X } from "lucide-react";

type IconProps = { className?: string; style?: React.CSSProperties };

export const iconMap: Record<string, React.ComponentType<IconProps>> = {
  Code,
  Database,
  Globe,
  Cpu,
  Mail,
  MessageSquare,
  Code2,
  X,
};

export function getIcon(iconName: string, fallback: React.ComponentType<IconProps> = Code) {
  return iconMap[iconName] || fallback;
}