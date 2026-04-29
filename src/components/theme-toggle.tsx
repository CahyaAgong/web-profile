"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Briefcase, Gamepad2 } from "lucide-react";
import { professionalColors, rpgColors } from "@/lib/theme-constants";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isRPG = mode === "rpg";
  const colors = isRPG ? rpgColors : professionalColors;

  return (
    <motion.button
      onClick={toggleMode}
      className="relative flex items-center justify-center px-3 py-1.5 rounded-full transition-colors"
      style={{
        width: "40px",
        backgroundColor: isRPG ? `${rpgColors.primaryRgba} 0.1)` : `${professionalColors.primaryRgba} 0.1)`,
        border: `1px solid ${isRPG ? `${rpgColors.primaryRgba} 0.3)` : `${professionalColors.primaryRgba} 0.3)`}`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isRPG ? "Switch to Professional Mode" : "Switch to RPG Mode"}
    >
      <motion.div
        className="absolute top-0.5 bottom-0.5 rounded-full"
        style={{
          width: "calc(50% - 2px)",
          left: isRPG ? "2px" : "auto",
          right: !isRPG ? "2px" : "auto",
          backgroundColor: colors.primary,
        }}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
      
      <div className="relative z-10 flex items-center justify-center w-full">
        {isRPG ? (
          <Gamepad2 
            size={16} 
            style={{ color: rpgColors.primary }}
          />
        ) : (
          <Briefcase 
            size={16} 
            style={{ color: professionalColors.primary }}
          />
        )}
      </div>
    </motion.button>
  );
}