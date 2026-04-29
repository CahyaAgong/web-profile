"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderGit2, ExternalLink, Code2, ArrowRight } from "lucide-react";
import { 
  getThemeColors, 
  getFonts, 
  getCardStyle, 
  getGradientAccent,
  getBadgeStyle,
  getButtonPrimaryStyle 
} from "@/lib/get-theme-colors";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, kanban boards, and team messaging.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered portfolio builder that creates stunning developer portfolios from GitHub profiles.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    description: "End-to-end encrypted messaging platform with voice calls and file sharing capabilities.",
    tech: ["React", "WebRTC", "Firebase", "Redux"],
    github: "#",
    demo: "#",
  },
];

interface ProfessionalProjectsProps {
  isDarkMode?: boolean;
}

export default function ProfessionalProjects({ isDarkMode = false }: ProfessionalProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = getThemeColors("professional", isDarkMode);
  const { fontBody, fontHeading } = getFonts();
  const cardStyle = getCardStyle(colors, isDarkMode);
  const badgeStyle = getBadgeStyle(colors);
  const gradientAccent = getGradientAccent(colors);
  const buttonPrimaryStyle = getButtonPrimaryStyle(colors, isDarkMode);

  return (
    <section 
      id="projects" 
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
            Featured Projects
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ fontFamily: fontBody, color: colors.textMuted }}>
            Browse through my completed projects and work experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={cardStyle}
            >
              <div 
                className="h-40 relative overflow-hidden"
                style={{ background: gradientAccent }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="w-16 h-16" style={{ color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.3)" }} />
                </div>
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, transparent 50%, ${colors.white} 100%)` }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:opacity-80 transition-colors" style={{ fontFamily: fontBody, color: colors.text }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4" style={{ fontFamily: fontBody, color: colors.textMuted }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 py-1 rounded text-xs" style={{ ...badgeStyle, fontFamily: fontBody }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                    style={{ ...badgeStyle, fontFamily: fontBody }}
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                    style={{ ...buttonPrimaryStyle, fontFamily: fontBody }}
                  >
                    Demo
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CahyaAgong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:shadow-lg"
            style={{ ...cardStyle, fontFamily: fontBody }}
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}