"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Happy Clients", value: "10+" },
];

export default function ProfessionalHero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(135deg, #fafaf9 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(30, 58, 95, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(13, 148, 136, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, rgba(30, 58, 95, 0.05) 1px, transparent 1px)
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
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                border: "1px solid rgba(13, 148, 136, 0.3)",
              }}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0d9488" }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: "#0d9488" }}
              >
                Available for Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{ 
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#1e3a5f",
              }}
            >
              Cahya Agung
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold mb-2"
              style={{ 
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                color: "#0d9488",
              }}
            >
              Middle to Senior Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base leading-relaxed mb-6 max-w-xl"
              style={{ 
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                color: "#64748b",
              }}
            >
              A passionate Full Stack Developer with 6+ years of experience 
              crafting exceptional digital experiences. Specialized in building 
              scalable web applications with modern technologies.
            </motion.p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                <MapPin size={16} style={{ color: "#0d9488" }} />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                <Mail size={16} style={{ color: "#0d9488" }} />
                <span>cahyaagong@gmail.com</span>
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
                style={{
                  backgroundColor: "#1e3a5f",
                  color: "white",
                }}
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  color: "#1e3a5f",
                  border: "1px solid #e2e8f0",
                }}
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
                  style={{
                    background: "linear-gradient(135deg, #1e3a5f 0%, #0d9488 100%)",
                    transform: "rotate(6deg)",
                  }}
                />
                
                <div 
                  className="absolute inset-4 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(180deg, #fafaf9 0%, #f1f5f9 100%)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold"
                      style={{
                        background: "linear-gradient(135deg, #1e3a5f 0%, #0d9488 100%)",
                        color: "white",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      CA
                    </div>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        color: "#1e3a5f",
                      }}
                    >
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
                <div 
                  className="rounded-xl p-4 shadow-lg"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
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