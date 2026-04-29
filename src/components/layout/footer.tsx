import { Code2, Mail, X } from "lucide-react";

const socialLinks = [
  { icon: Code2, href: "https://github.com/CahyaAgong", label: "GitHub" },
  { icon: Mail, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "Twitter" },
];

interface FooterProps {
  isProfessional?: boolean;
}

export default function Footer({ isProfessional = false }: FooterProps) {
  const bgColor = isProfessional ? "#ffffff" : "#000000";
  const borderColor = isProfessional ? "rgba(30, 58, 95, 0.3)" : "#22c55e";
  const textColor = isProfessional ? "#64748b" : "#9ca3af";
  const iconColor = isProfessional ? "#1e3a5f" : "#22c55e";

  return (
    <footer 
      className="py-8 border-t-2 transition-colors duration-300"
      style={{ 
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div 
            className="text-sm"
            style={{ 
              fontFamily: isProfessional ? "var(--font-inter), system-ui, sans-serif" : "'VT323', monospace",
              color: textColor,
            }}
          >
            © 2024 CahyaAgong. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-colors"
                style={{ 
                  backgroundColor: isProfessional ? "rgba(30, 58, 95, 0.1)" : "rgba(34, 197, 94, 0.2)",
                  color: iconColor,
                }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {!isProfessional && (
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}