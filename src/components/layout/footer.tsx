import { Code2, Mail, X } from "lucide-react";

const socialLinks = [
  { icon: Code2, href: "https://github.com/CahyaAgong", label: "GitHub" },
  { icon: Mail, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-green-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-['VT323'] text-xl text-gray-400">
            © 2024 CahyaAgong. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-900/50 rounded hover:bg-green-600 transition-colors"
              >
                <social.icon size={20} className="text-green-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-500"
              style={{
                boxShadow: "0 0 8px #22c55e",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}