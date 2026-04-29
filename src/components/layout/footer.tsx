import { Code2, Mail, X } from "lucide-react";
import { getFooterColors } from "@/lib/get-theme-colors";
import { rpgColors } from "@/lib/theme-constants";

const socialLinks = [
  { icon: Code2, href: "https://github.com/CahyaAgong", label: "GitHub" },
  { icon: Mail, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "Twitter" },
];

interface FooterProps {
  isProfessional?: boolean;
  isDarkMode?: boolean;
}

export default function Footer({ isProfessional = false, isDarkMode = false }: FooterProps) {
  const colors = getFooterColors(isProfessional ? 'professional' : 'rpg', isDarkMode);

  return (
    <footer 
      className="py-8 border-t-2 transition-colors duration-300"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div 
            className="text-sm"
            style={{ 
              fontFamily: isProfessional ? "var(--font-inter), system-ui, sans-serif" : "'VT323', monospace",
              color: colors.text,
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
                  backgroundColor: colors.iconBg,
                  color: colors.icon,
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
                  backgroundColor: rpgColors.primary,
                  boxShadow: `0 0 8px ${rpgColors.primary}`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}