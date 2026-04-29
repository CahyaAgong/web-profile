"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { getNavbarColors } from "@/lib/get-theme-colors";
import { professionalColors, rpgColors } from "@/lib/theme-constants";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { mode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isProfessional = mode === "professional";
  const colors = getNavbarColors(mode);
  const linkColor = colors.link;
  const textColors = isProfessional ? professionalColors : rpgColors;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4 transition-colors duration-300"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 origin-left transition-colors duration-300"
        style={{ 
          scaleX,
          backgroundColor: linkColor,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg cursor-pointer transition-colors"
            style={{ 
              fontFamily: isProfessional ? "var(--font-playfair)" : "'Press Start 2P', cursive",
              color: linkColor,
            }}
          >
            {isProfessional ? "CA" : "CAHYA"}
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ scale: 1.1 }}
                className="text-sm transition-colors relative"
                style={{ 
                  fontFamily: isProfessional ? "var(--font-inter)" : "'VT323', monospace",
                }}
              >
                <span style={{ 
                  color: activeSection === link.href.slice(1) 
                    ? linkColor 
                    : colors.textMuted,
                }}>
                  {link.name}
                </span>
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: linkColor }}
                  />
                )}
              </motion.a>
            ))}
            
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: linkColor }}
              className="hover:opacity-80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t-2 transition-colors duration-300"
          style={{ 
            backgroundColor: colors.background,
            borderColor: colors.border,
          }}
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-base transition-colors"
                style={{ 
                  fontFamily: isProfessional ? "var(--font-inter)" : "'VT323', monospace",
                  color: activeSection === link.href.slice(1) 
                    ? linkColor 
                    : colors.textMuted,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}