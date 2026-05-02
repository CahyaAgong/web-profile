"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Code2, X } from "lucide-react";
import { 
  getThemeColors, 
  getFonts, 
  getCardStyle, 
  getBadgeStyle,
  getInputStyle,
  getButtonPrimaryStyle 
} from "@/lib/get-theme-colors";
import { getContactContent, type ContactContent, type Social } from "@/lib/sanity";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Mail,
  MessageSquare,
  X,
};

const defaultContactData: ContactContent = {
  email: "cahyaagong@gmail.com",
  location: "Indonesia",
  formPlaceholder: {
    name: "Your Name",
    email: "Email",
    message: "Tell me about your project...",
  },
  socials: [
    { platform: "GitHub", icon: "Code2", url: "https://github.com/CahyaAgong" },
    { platform: "Email", icon: "Mail", url: "mailto:cahyaagong@gmail.com" },
    { platform: "Discord", icon: "MessageSquare", url: "#" },
    { platform: "Twitter", icon: "X", url: "#" },
  ],
};

interface ProfessionalContactProps {
  isDarkMode?: boolean;
}

export default function ProfessionalContact({ isDarkMode = false }: ProfessionalContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = getThemeColors("professional", isDarkMode);
  const { fontBody, fontHeading } = getFonts();
  const cardStyle = getCardStyle(colors, isDarkMode);
  const badgeStyle = getBadgeStyle(colors);
  const inputStyle = getInputStyle(colors);
  const buttonPrimaryStyle = getButtonPrimaryStyle(colors, isDarkMode);
  
  const [data, setData] = useState<ContactContent>(defaultContactData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const content = await getContactContent();
        if (content && content.email) {
          setData(content);
        }
      } catch (error) {
        console.warn("[Contact] Failed to load from CMS, using fallback:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const { email, location, formPlaceholder, socials } = data;
  const socialLinks: Social[] = socials || defaultContactData.socials;

  if (loading) {
    return (
      <section className="py-24" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse text-lg" style={{ color: colors.accent }}>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contact" 
      className="py-24"
      style={{ backgroundColor: colors.background }}
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
            Get In Touch
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ fontFamily: fontBody, color: colors.textMuted }}>
            Have a project in mind? Let&apos;s connect and discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl p-8" style={cardStyle}>
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: fontBody, color: colors.text }}>
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={badgeStyle}>
                    <Mail className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: colors.textMuted }}>Email</p>
                    <p className="text-base font-medium" style={{ color: colors.text }}>{email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={badgeStyle}>
                    <MapPin className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: colors.textMuted }}>Location</p>
                    <p className="text-base font-medium" style={{ color: colors.text }}>{location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm mb-4" style={{ color: colors.textMuted }}>Connect with me:</p>
                <div className="flex gap-3">
                  {socialLinks?.map((social, i) => {
                    const Icon = iconMap[social.icon] || Code2;
                    return (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl transition-colors"
                        style={{ ...badgeStyle, color: colors.primary }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="rounded-2xl p-8" style={cardStyle}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: fontBody, color: colors.text }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder={formPlaceholder?.name || "Your Name"}
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none"
                    style={{ ...inputStyle, fontFamily: fontBody }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: fontBody, color: colors.text }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder={formPlaceholder?.email || "Email"}
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none"
                    style={{ ...inputStyle, fontFamily: fontBody }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: fontBody, color: colors.text }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder={formPlaceholder?.message || "Tell me about your project..."}
                    className="w-full px-4 py-3 rounded-lg text-base transition-colors outline-none resize-none"
                    style={{ ...inputStyle, fontFamily: fontBody }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  style={{ ...buttonPrimaryStyle, fontFamily: fontBody }}
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