"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, Cpu } from "lucide-react";

const skills = [
  { icon: Code, name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Database, name: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"] },
  { icon: Globe, name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Linux"] },
  { icon: Cpu, name: "Specialized", items: ["System Design", "API Integration", "Performance"] },
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "50+", label: "Coffee Cups" },
];

export default function ProfessionalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="py-24"
      style={{ backgroundColor: "#fafaf9" }}
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
            About Me
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ 
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: "#64748b",
            }}
          >
            Get to know more about my journey as a Software Engineer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ 
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  color: "#1e3a5f",
                }}
              >
                About Me
              </h3>
              <p 
                className="text-sm leading-relaxed mb-4"
                style={{ 
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  color: "#475569",
                }}
              >
                A passionate Middle to Senior Software Engineer with 6+ years of experience 
                building scalable web applications. Specialized in crafting exceptional 
                digital experiences using modern technologies.
              </p>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  color: "#64748b",
                }}
              >
                When not coding, you can find me exploring new technologies or contributing 
                to open source projects. I believe in clean code, continuous learning, 
                and delivering value through technology.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div 
                    className="text-2xl font-bold"
                    style={{ color: "#1e3a5f" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: "#64748b" }}
                  >
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
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ 
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                color: "#1e3a5f",
              }}
            >
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <skill.icon 
                    className="w-8 h-8 mb-3" 
                    style={{ color: "#0d9488" }} 
                  />
                  <h4 
                    className="text-base font-semibold mb-3"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: "#1e3a5f",
                    }}
                  >
                    {skill.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 rounded text-xs"
                        style={{ 
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          backgroundColor: "rgba(13, 148, 136, 0.1)",
                          color: "#0d9488",
                          border: "1px solid rgba(13, 148, 136, 0.2)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}