"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Globe, Cpu } from "lucide-react";
import { 
  getThemeColors, 
  getFonts, 
  getCardStyle, 
  getBadgeStyle 
} from "@/lib/get-theme-colors";
import { getAboutContent, type AboutContent, type SkillCategory } from "@/lib/sanity";
import { useCMSContent } from "@/hooks/useCMSContent";
import { getIcon } from "@/lib/utils/iconMap";

const defaultAboutData: AboutContent = {
  bio: "A passionate Middle to Senior Software Engineer with 6+ years of experience building scalable web applications. Specialized in crafting exceptional digital experiences using modern technologies.",
  skills: [
    { category: "Frontend", icon: "Code", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { category: "Backend", icon: "Database", items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"] },
    { category: "DevOps", icon: "Globe", items: ["Docker", "AWS", "CI/CD", "Linux"] },
    { category: "Specialized", icon: "Cpu", items: ["System Design", "API Integration", "Performance"] },
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "10+", label: "Happy Clients" },
    { value: "50+", label: "Coffee Cups" },
  ],
};

function LoadingSkeleton({ isDarkMode }: { isDarkMode?: boolean }) {
  const colors = getThemeColors("professional", isDarkMode);
  return (
    <section className="py-24" style={{ backgroundColor: colors.backgroundSecondary }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-pulse text-lg" style={{ color: colors.accent }}>Loading...</div>
      </div>
    </section>
  );
}

interface ProfessionalAboutProps {
  isDarkMode?: boolean;
}

export default function ProfessionalAbout({ isDarkMode = false }: ProfessionalAboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data, loading } = useCMSContent(getAboutContent, defaultAboutData, "bio");
  
  if (loading) {
    return <LoadingSkeleton isDarkMode={isDarkMode} />;
  }

  const colors = getThemeColors("professional", isDarkMode);
  const { fontBody, fontHeading } = getFonts();
  const cardStyle = getCardStyle(colors, isDarkMode);
  const badgeStyle = getBadgeStyle(colors);

  const skills: SkillCategory[] = data.skills || defaultAboutData.skills;
  const stats = data.stats || defaultAboutData.stats;

  return (
    <section 
      id="about" 
      className="py-24"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: fontHeading, color: colors.primary }}>
            About Me
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ fontFamily: fontBody, color: colors.textMuted }}>
            Get to know more about my journey as a Software Engineer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl p-8" style={cardStyle}>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: fontBody, color: colors.text }}>
                About Me
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: fontBody, color: colors.textSecondary }}>
                {data.bio}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              {stats?.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="rounded-xl p-4 text-center"
                  style={cardStyle}
                >
                  <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: fontBody, color: colors.text }}>
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => {
                const Icon = getIcon(skill.icon, Code);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="rounded-xl p-6"
                    style={cardStyle}
                  >
                    <Icon className="w-8 h-8 mb-3" style={{ color: colors.accent }} />
                    <h4 className="text-base font-semibold mb-3" style={{ fontFamily: fontBody, color: colors.text }}>
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items?.map((item, j) => (
                        <span key={j} className="px-2 py-1 rounded text-xs" style={{ ...badgeStyle, fontFamily: fontBody }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}