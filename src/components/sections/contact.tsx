"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, MessageSquare, Code2, X } from "lucide-react";

const socialLinks = [
  { icon: Code2, href: "https://github.com/CahyaAgong", label: "GitHub" },
  { icon: Mail, href: "mailto:cahyaagong@gmail.com", label: "Email" },
  { icon: MessageSquare, href: "#", label: "Discord" },
  { icon: X, href: "#", label: "Twitter" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-[#0a1f0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Press_Start_2P'] text-xl sm:text-2xl text-green-400 mb-4">
            SEND MESSAGE
          </h2>
          <p className="font-['VT323'] text-xl text-gray-400 max-w-2xl mx-auto">
            Got a quest for me? Let&apos;s team up and bring it to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8">
              <h3 className="font-['VT323'] text-2xl text-green-300 mb-6">Contact Info</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-900/30 rounded-xl border border-green-500/30">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-['VT323'] text-sm text-gray-400">Email</p>
                    <p className="font-['VT323'] text-lg text-white">cahyaagong@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-900/30 rounded-xl border border-green-500/30">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-['VT323'] text-sm text-gray-400">Location</p>
                    <p className="font-['VT323'] text-lg text-white">Indonesia</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-['VT323'] text-lg text-gray-400 mb-4">Connect with me:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-green-900/30 rounded-xl border border-green-500/30 hover:bg-green-600 hover:border-green-400 transition-colors"
                    >
                      <social.icon className="w-6 h-6 text-green-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="bg-black/60 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block font-['VT323'] text-lg text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-xl font-['VT323'] text-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-['VT323'] text-lg text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-xl font-['VT323'] text-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-['VT323'] text-lg text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-xl font-['VT323'] text-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-2 border-green-400 rounded-xl font-['VT323'] text-xl text-black transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}