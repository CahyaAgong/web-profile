"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pixelDecorations = [
  { x: "10%", y: "20%", size: 8, delay: 0 },
  { x: "85%", y: "15%", size: 6, delay: 0.2 },
  { x: "75%", y: "70%", size: 10, delay: 0.4 },
  { x: "15%", y: "75%", size: 7, delay: 0.6 },
  { x: "50%", y: "10%", size: 5, delay: 0.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-black flex items-center"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#9333ea 1px, transparent 1px),
              linear-gradient(90deg, #9333ea 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {pixelDecorations.map((dec, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: dec.delay + 0.5, duration: 0.5 }}
          className="absolute bg-purple-500"
          style={{
            left: dec.x,
            top: dec.y,
            width: dec.size,
            height: dec.size,
            boxShadow: "0 0 12px #a855f7",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/50 border-2 border-purple-500 mb-6"
        >
          <Sparkles className="text-purple-400" size={16} />
          <span className="font-['VT323'] text-lg text-purple-300">
            WELCOME TO MY PORTFOLIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl text-white mb-4"
        >
          HI, I&apos;M <span className="text-purple-400">CAHYA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-['VT323'] text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-2"
        >
          SOFTWARE DEVELOPER
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-['VT323'] text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Building digital experiences with passion & pixel-perfect precision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 border-2 border-purple-400 font-['VT323'] text-lg"
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-900/50 font-['VT323'] text-lg"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-1"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: i * 0.1,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-4 h-4 bg-purple-500"
              style={{ boxShadow: "0 0 8px #a855f7" }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}