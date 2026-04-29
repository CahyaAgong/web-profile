"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = "rpg" | "professional";

interface ThemeContextType {
  mode: ThemeMode;
  isDarkMode: boolean;
  toggleMode: () => void;
  toggleDarkMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const defaultContext: ThemeContextType = {
  mode: "professional",
  isDarkMode: false,
  toggleMode: () => {},
  toggleDarkMode: () => {},
  setMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("professional");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode;
    const savedDarkMode = localStorage.getItem("theme-dark-mode") === "true";
    
    if (savedMode) {
      setModeState(savedMode);
      document.documentElement.setAttribute("data-theme", savedMode);
    }
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.setAttribute("data-dark-mode", "true");
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

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme-dark-mode", String(newDarkMode));
    document.documentElement.setAttribute("data-dark-mode", String(newDarkMode));
  };

  const value = { mode, isDarkMode, toggleMode, toggleDarkMode, setMode };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}