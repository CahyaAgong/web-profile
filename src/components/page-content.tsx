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

export default function HomeContent() {
  const { mode } = useTheme();
  const isProfessional = mode === "professional";

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: isProfessional ? "#fafaf9" : "#000000",
      }}
    >
      <Navbar />
      <main>
        {isProfessional ? (
          <>
            <ProfessionalHero />
            <ProfessionalAbout />
            <ProfessionalProjects />
            <ProfessionalContact />
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
      <Footer isProfessional={isProfessional} />
    </div>
  );
}