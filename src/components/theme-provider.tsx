"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = "rpg" | "professional";

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const defaultContext: ThemeContextType = {
  mode: "professional",
  toggleMode: () => {},
  setMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("professional");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode;
    if (savedMode) {
      setModeState(savedMode);
      document.documentElement.setAttribute("data-theme", savedMode);
    }
  }, []);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem("theme-mode", newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  };

  const toggleMode = () => {
    const newMode = mode === "rpg" ? "professional" : "rpg";
    setMode(newMode);
  };

  const value = { mode, toggleMode, setMode };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}