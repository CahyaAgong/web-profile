"use client";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import ProfessionalHero from "@/components/sections/professional-hero";
import ProfessionalAbout from "@/components/sections/professional-about";
import ProfessionalProjects from "@/components/sections/professional-projects";
import ProfessionalContact from "@/components/sections/professional-contact";
import { useTheme } from "@/components/theme-provider";
import { rpgColors } from "@/lib/theme-constants";
import { getThemeColors } from "@/lib/get-theme-colors";

export default function HomeContent() {
  const { mode, isDarkMode } = useTheme();
  const isProfessional = mode === "professional";
  const colors = getThemeColors(mode, isDarkMode);

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: isProfessional ? colors.background : rpgColors.background,
      }}
    >
      <Navbar />
      <main>
        {isProfessional ? (
          <>
            <ProfessionalHero isDarkMode={isDarkMode} />
            <ProfessionalAbout isDarkMode={isDarkMode} />
            <ProfessionalProjects isDarkMode={isDarkMode} />
            <ProfessionalContact isDarkMode={isDarkMode} />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer isProfessional={isProfessional} isDarkMode={isDarkMode} />
    </div>
  );
}