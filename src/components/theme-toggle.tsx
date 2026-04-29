"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Briefcase, Gamepad2 } from "lucide-react";
import { professionalColors, rpgColors } from "@/lib/theme-constants";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isRPG = mode === "rpg";

  return (
    <motion.button
      onClick={toggleMode}
      className="relative flex items-center justify-center gap-1 px-2 py-1.5 rounded-full transition-colors"
      style={{
        backgroundColor: isRPG 
          ? `${rpgColors.primaryRgba} 0.08)` 
          : `${professionalColors.primaryRgba} 0.08)`,
        border: `1px solid ${isRPG 
          ? `${rpgColors.primaryRgba} 0.2)` 
          : `${professionalColors.primaryRgba} 0.2)`}`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isRPG ? "Switch to Professional Mode" : "Switch to RPG Mode"}
    >
      <motion.div
        className="absolute top-1 bottom-1 rounded-full bg-opacity-20"
        style={{
          width: "calc(50% - 4px)",
          left: isRPG ? "3px" : "auto",
          right: !isRPG ? "3px" : "auto",
          backgroundColor: isRPG ? rpgColors.primary : professionalColors.primary,
        }}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
      
      <div className="relative z-10 flex items-center justify-center gap-1 w-full">
        <Gamepad2 
          size={14} 
          className="transition-opacity"
          style={{ 
            color: isRPG ? rpgColors.primary : rpgColors.textMuted,
            opacity: isRPG ? 1 : 0.5,
          }}
        />
        <Briefcase 
          size={14} 
          className="transition-opacity"
          style={{ 
            color: !isRPG ? professionalColors.primary : professionalColors.textMuted,
            opacity: !isRPG ? 1 : 0.5,
          }}
        />
      </div>
    </motion.button>
  );
}