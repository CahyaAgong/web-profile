"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { 
  getThemeColors, 
  getFonts, 
  getGradientBg, 
  getGradientAccent,
  getButtonPrimaryStyle,
  getButtonSecondaryStyle,
  getCardStyle 
} from "@/lib/get-theme-colors";
import { getHeroContent, type HeroContent } from "@/lib/sanity";

interface ProfessionalHeroProps {
  isDarkMode?: boolean;
}

const defaultHeroData: HeroContent = {
  name: "Cahya Agung",
  title: "Middle to Senior Software Engineer",
  description: "A passionate Full Stack Developer with 6+ years of experience crafting exceptional digital experiences. Specialized in building scalable web applications with modern technologies.",
  location: "Indonesia",
  email: "cahyaagong@gmail.com",
  availability: "Available for Hire",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Happy Clients", value: "10+" },
  ],
};

export default function ProfessionalHero({ isDarkMode = false }: ProfessionalHeroProps) {
  const [data, setData] = useState<HeroContent>(defaultHeroData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const content = await getHeroContent();
        if (content && content.name) {
          setData(content);
        }
      } catch (error) {
        console.warn("[Hero] Failed to load from CMS, using fallback:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const colors = getThemeColors("professional", isDarkMode);
  const { fontBody, fontHeading } = getFonts();
  const gradientBg = getGradientBg(colors);
  const gradientAccent = getGradientAccent(colors);
  const cardStyle = getCardStyle(colors, isDarkMode);
  const buttonPrimaryStyle = getButtonPrimaryStyle(colors, isDarkMode);
  const buttonSecondaryStyle = getButtonSecondaryStyle(colors);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ background: getGradientBg(getThemeColors("professional", isDarkMode)) }}>
        <div className="animate-pulse text-lg" style={{ color: getThemeColors("professional", isDarkMode).accent }}>Loading...</div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: gradientBg }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, ${colors.primaryRgba} 0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, ${colors.accentRgba} 0.1) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, ${colors.primaryRgba} 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: `${colors.accentRgba} 0.1)`,
                border: `1px solid ${colors.accentRgba} 0.3)`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
              <span className="text-sm font-medium" style={{ color: colors.accent }}>
                {data.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: fontHeading, color: colors.primary }}
            >
              {data.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold mb-2"
              style={{ fontFamily: fontBody, color: colors.accent }}
            >
              {data.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base leading-relaxed mb-6 max-w-xl"
              style={{ fontFamily: fontBody, color: colors.textMuted }}
            >
              {data.description}
            </motion.p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm" style={{ color: colors.textMuted }}>
                <MapPin size={16} style={{ color: colors.accent }} />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: colors.textMuted }}>
                <Mail size={16} style={{ color: colors.accent }} />
                <span>{data.email}</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={buttonPrimaryStyle}
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-md"
                style={buttonSecondaryStyle}
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80"
              >
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: gradientAccent, transform: "rotate(6deg)" }}
                />
                
                <div 
                  className="absolute inset-4 rounded-2xl flex items-center justify-center"
                  style={{ background: gradientBg, border: `1px solid ${colors.border}` }}
                >
                  <div className="text-center">
                    <div 
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold"
                      style={{ background: gradientAccent, color: "white", fontFamily: fontHeading }}
                    >
                      CA
                    </div>
                    <p className="text-lg font-semibold" style={{ fontFamily: fontBody, color: colors.primary }}>
                      Software Engineer
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-sm"
              >
                <div className="rounded-xl p-4 shadow-lg" style={cardStyle}>
                  <div className="grid grid-cols-3 gap-4">
                    {data.stats?.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                          {stat.value}
                        </div>
                        <div className="text-xs" style={{ color: colors.textMuted }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}