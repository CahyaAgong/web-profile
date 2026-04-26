"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sword, Shield, Code, Star, User } from "lucide-react";

const rpgStats = [
  { icon: Sword, label: "Full Stack", value: "Expert" },
  { icon: Shield, label: "Experience", value: "6+ Years" },
  { icon: Code, label: "Projects", value: "20+" },
];

const floatingOrbs = [
  { x: "8%", y: "15%", size: 12, delay: 0 },
  { x: "90%", y: "20%", size: 10, delay: 0.3 },
  { x: "70%", y: "75%", size: 14, delay: 0.6 },
  { x: "12%", y: "80%", size: 8, delay: 0.9 },
  { x: "45%", y: "8%", size: 6, delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-[#0a1f0a] to-black flex items-center"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #4ade80 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, #22c55e 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, #16a34a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: orb.delay + 0.3, duration: 0.8 }}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: "linear-gradient(135deg, #4ade80, #22c55e)",
            boxShadow: "0 0 20px #22c55e, 0 0 40px #16a34a",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-500/50 rounded-full mb-6"
            >
              <Star className="text-green-400" size={14} />
              <span className="font-['VT323'] text-lg text-green-300">
                Available for Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl text-white mb-4"
            >
              <span className="text-green-400">CAHYA</span>{" "}
              <span className="text-white">AGUNG</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-['VT323'] text-2xl sm:text-3xl text-green-300 mb-2"
            >
              Middle to Senior Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-['VT323'] text-xl text-gray-400 mb-8 max-w-xl"
            >
              A passionate Full Stack Developer with 6+ years of experience
              crafting exceptional digital experiences. Specialized in building
              scalable web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-2 border-green-400 rounded-xl font-['VT323'] text-xl text-black transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500/50 text-green-400 hover:bg-green-900/30 rounded-xl font-['VT323'] text-xl transition-all"
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
                className="relative w-64 h-64 sm:w-80 sm:h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl border-2 border-green-500/30" />
                
                <div className="absolute inset-4 bg-gradient-to-b from-green-900/40 to-black/60 rounded-2xl border border-green-500/20 flex items-center justify-center">
                  <User className="w-32 h-32 text-green-500/50" strokeWidth={1} />
                </div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="px-3 py-1 bg-green-600 rounded-full border-2 border-green-400">
                    <span className="font-['VT323'] text-sm text-black">LVL 6+</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full max-w-xs"
              >
                <div className="bg-black/80 backdrop-blur-sm rounded-xl border border-green-500/30 p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {rpgStats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-5 h-5 text-green-400 mx-auto mb-1" />
                        <div className="font-['VT323'] text-xs text-green-300">
                          {stat.label}
                        </div>
                        <div className="font-['VT323'] text-sm text-white">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center gap-2"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                delay: i * 0.1,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-2 h-8 bg-green-500 rounded-full"
              style={{ boxShadow: "0 0 10px #22c55e" }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}