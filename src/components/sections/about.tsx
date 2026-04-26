"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, Cpu, Sparkles, Shield, Zap, Heart } from "lucide-react";

const skills = [
  { icon: Code, name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Database, name: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"] },
  { icon: Globe, name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Linux"] },
  { icon: Cpu, name: "Specialized", items: ["System Design", "API Integration", "Performance"] },
];

const stats = [
  { icon: Sparkles, value: "6+", label: "Years Experience" },
  { icon: Shield, value: "20+", label: "Projects Delivered" },
  { icon: Zap, value: "10+", label: "Happy Clients" },
  { icon: Heart, value: "50+", label: "Coffee Cups" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-[#0a1f0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Press_Start_2P'] text-xl sm:text-2xl text-green-400 mb-4">
            PLAYER PROFILE
          </h2>
          <p className="font-['VT323'] text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey as a Software Engineer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8">
              <h3 className="font-['VT323'] text-2xl text-green-300 mb-4">About Me</h3>
              <p className="font-['VT323'] text-lg text-gray-300 mb-4 leading-relaxed">
                A passionate Middle to Senior Software Engineer with 6+ years of experience 
                building scalable web applications. Specialized in crafting exceptional 
                digital experiences using modern technologies.
              </p>
              <p className="font-['VT323'] text-lg text-gray-400 leading-relaxed">
                When not coding, you can find me exploring new game realms or contributing 
                to open source projects. I believe in clean code, continuous learning, 
                and delivering value through technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-green-900/20 rounded-xl border border-green-500/30 p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="font-['Press_Start_2P'] text-lg text-green-400">{stat.value}</div>
                  <div className="font-['VT323'] text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-['VT323'] text-2xl text-green-300 mb-6">Skill Tree</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="bg-black/60 backdrop-blur-sm rounded-xl border border-green-500/30 p-6"
                >
                  <skill.icon className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-['VT323'] text-xl text-white mb-3">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-green-900/40 rounded text-xs font-['VT323'] text-green-300 border border-green-500/20"
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