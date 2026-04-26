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
    color: "green",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, kanban boards, and team messaging.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    color: "emerald",
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered portfolio builder that creates stunning developer portfolios from GitHub profiles.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    github: "#",
    demo: "#",
    color: "lime",
  },
  {
    title: "Real-time Chat App",
    description: "End-to-end encrypted messaging platform with voice calls and file sharing capabilities.",
    tech: ["React", "WebRTC", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    color: "teal",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Press_Start_2P'] text-xl sm:text-2xl text-green-400 mb-4">
            QUEST LOG
          </h2>
          <p className="font-['VT323'] text-xl text-gray-400 max-w-2xl mx-auto">
            Browse through my completed missions and ongoing projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group bg-black/60 backdrop-blur-sm rounded-2xl border border-green-500/30 overflow-hidden hover:border-green-400/50 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-green-900/30 to-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="w-16 h-16 text-green-500/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-['VT323'] text-2xl text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-['VT323'] text-lg text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-green-900/30 rounded text-xs font-['VT323'] text-green-400 border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 rounded-lg font-['VT323'] text-sm text-green-400 transition-colors"
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-['VT323'] text-sm text-black transition-colors"
                  >
                    Demo
                    <ArrowRight size={16} />
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
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-xl font-['VT323'] text-xl transition-all"
          >
            View All Projects
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}