"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Briefcase, Gamepad2 } from "lucide-react";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <motion.button
      onClick={toggleMode}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors"
      style={{
        backgroundColor: mode === "rpg" ? "rgba(34, 197, 94, 0.1)" : "rgba(30, 58, 95, 0.1)",
        border: `1px solid ${mode === "rpg" ? "rgba(34, 197, 94, 0.3)" : "rgba(30, 58, 95, 0.3)"}`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={mode === "rpg" ? "Switch to Professional Mode" : "Switch to RPG Mode"}
    >
      <motion.div
        className="absolute top-0.5 bottom-0.5 rounded-full"
        style={{
          width: "calc(50% - 2px)",
          left: mode === "rpg" ? "2px" : "auto",
          right: mode === "professional" ? "2px" : "auto",
          backgroundColor: mode === "rpg" ? "#22c55e" : "#1e3a5f",
        }}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
      
      <div className="relative z-10 flex items-center gap-1.5">
        {mode === "rpg" ? (
          <>
            <Gamepad2 
              size={14} 
              style={{ color: "#22c55e" }}
            />
            <span 
              className="text-xs font-medium"
              style={{ color: "#22c55e" }}
            >
              RPG
            </span>
          </>
        ) : (
          <>
            <Briefcase 
              size={14} 
              style={{ color: "#1e3a5f" }}
            />
            <span 
              className="text-xs font-medium"
              style={{ color: "#1e3a5f" }}
            >
              Pro
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
}