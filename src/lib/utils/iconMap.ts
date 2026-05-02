import { Code, Database, Globe, Cpu, Mail, MessageSquare, Code2, X } from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Database,
  Globe,
  Cpu,
  Mail,
  MessageSquare,
  Code2,
  X,
};

export function getIcon(iconName: string, fallback: React.ComponentType<{ className?: string }> = Code) {
  return iconMap[iconName] || fallback;
}