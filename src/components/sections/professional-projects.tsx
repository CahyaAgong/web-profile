"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderGit2, ExternalLink, Code2, ArrowRight } from "lucide-react";

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

export default function ProfessionalProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="projects" 
      className="py-24"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ 
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#1e3a5f",
            }}
          >
            Featured Projects
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ 
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: "#64748b",
            }}
          >
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
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            >
              <div 
                className="h-40 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f 0%, #0d9488 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="w-16 h-16" style={{ color: "rgba(255,255,255,0.3)" }} />
                </div>
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.9) 100%)",
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-2 group-hover:opacity-80 transition-colors"
                  style={{ 
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    color: "#1e3a5f",
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ 
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    color: "#64748b",
                  }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded text-xs"
                      style={{ 
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        backgroundColor: "rgba(30, 58, 95, 0.1)",
                        color: "#1e3a5f",
                        border: "1px solid rgba(30, 58, 95, 0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      backgroundColor: "rgba(30, 58, 95, 0.1)",
                      color: "#1e3a5f",
                      border: "1px solid rgba(30, 58, 95, 0.2)",
                    }}
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      backgroundColor: "#1e3a5f",
                      color: "white",
                    }}
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
            style={{ 
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              backgroundColor: "white",
              color: "#1e3a5f",
              border: "1px solid #e2e8f0",
            }}
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}