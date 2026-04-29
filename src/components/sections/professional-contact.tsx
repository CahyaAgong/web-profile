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

export default function ProfessionalContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="contact" 
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
            Get In Touch
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ 
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: "#64748b",
            }}
          >
            Have a project in mind? Let&apos;s connect and discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="text-xl font-semibold mb-6"
                style={{ 
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  color: "#1e3a5f",
                }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(13, 148, 136, 0.1)",
                      border: "1px solid rgba(13, 148, 136, 0.2)",
                    }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "#0d9488" }} />
                  </div>
                  <div>
                    <p 
                      className="text-sm"
                      style={{ color: "#64748b" }}
                    >
                      Email
                    </p>
                    <p 
                      className="text-base font-medium"
                      style={{ color: "#1e3a5f" }}
                    >
                      cahyaagong@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(13, 148, 136, 0.1)",
                      border: "1px solid rgba(13, 148, 136, 0.2)",
                    }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "#0d9488" }} />
                  </div>
                  <div>
                    <p 
                      className="text-sm"
                      style={{ color: "#64748b" }}
                    >
                      Location
                    </p>
                    <p 
                      className="text-base font-medium"
                      style={{ color: "#1e3a5f" }}
                    >
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p 
                  className="text-sm mb-4"
                  style={{ color: "#64748b" }}
                >
                  Connect with me:
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl transition-colors"
                      style={{
                        backgroundColor: "rgba(30, 58, 95, 0.1)",
                        border: "1px solid rgba(30, 58, 95, 0.2)",
                        color: "#1e3a5f",
                      }}
                    >
                      <social.icon className="w-6 h-6" />
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
            <form 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            >
              <div className="space-y-6">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: "#1e3a5f",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      backgroundColor: "#fafaf9",
                      border: "1px solid #e2e8f0",
                      color: "#1e3a5f",
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: "#1e3a5f",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      backgroundColor: "#fafaf9",
                      border: "1px solid #e2e8f0",
                      color: "#1e3a5f",
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: "#1e3a5f",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none resize-none"
                    style={{ 
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      backgroundColor: "#fafaf9",
                      border: "1px solid #e2e8f0",
                      color: "#1e3a5f",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  style={{ 
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    backgroundColor: "#1e3a5f",
                    color: "white",
                  }}
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}