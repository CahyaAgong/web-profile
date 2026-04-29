"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";
import { professionalColors, professionalDarkColors } from "@/lib/theme-constants";

export default function DarkModeToggle() {
  const { mode, isDarkMode, toggleDarkMode } = useTheme();
  const isProfessional = mode === "professional";
  
  if (!isProfessional) {
    return null;
  }

  const colors = isDarkMode ? professionalDarkColors : professionalColors;

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative flex items-center justify-center px-2 py-1.5 rounded-full transition-colors"
      style={{
        backgroundColor: `${colors.primaryRgba} 0.08)`,
        border: `1px solid ${colors.primaryRgba} 0.2)`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        className="absolute top-1 bottom-1 rounded-full"
        style={{
          width: "calc(50% - 4px)",
          left: isDarkMode ? "3px" : "auto",
          right: !isDarkMode ? "3px" : "auto",
          backgroundColor: colors.primary,
        }}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
      
      <div className="relative z-10 flex items-center justify-center gap-1 w-full">
        <Sun 
          size={14} 
          className="transition-opacity"
          style={{ 
            color: isDarkMode ? professionalDarkColors.textMuted : professionalColors.primary,
            opacity: isDarkMode ? 0.5 : 1,
          }}
        />
        <Moon 
          size={14} 
          className="transition-opacity"
          style={{ 
            color: !isDarkMode ? professionalColors.textMuted : professionalDarkColors.primary,
            opacity: !isDarkMode ? 0.5 : 1,
          }}
        />
      </div>
    </motion.button>
  );
}