import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/CahyaAgong", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-purple-500 py-8">
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
                className="p-2 bg-purple-900/50 rounded hover:bg-purple-600 transition-colors"
              >
                <social.icon size={20} className="text-purple-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-purple-500"
              style={{
                boxShadow: "0 0 8px #a855f7",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}