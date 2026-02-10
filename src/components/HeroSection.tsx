import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingDotsLight } from "./FloatingDots";

const STORAGE_KEY = "maestra-countdown-end";

function getEndTime() {
  if (typeof window === "undefined") return Date.now() + 72 * 3600 * 1000;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + 72 * 3600 * 1000;
  localStorage.setItem(STORAGE_KEY, end.toString());
  return end;
}
const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <FloatingDotsLight />
      <motion.div className="container mx-auto px-6 py-20 text-center text-primary-foreground relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          منهج مايسترا
        </motion.h1>
        <motion.p variants={childVariants} className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          رحلة التحول الداخلي من جذورك… إلى قيادة حياتك بوعي وسلام داخلي
        </motion.p>

        {/* VSL Video Placeholder */}
        <motion.div variants={childVariants} className="max-w-3xl mx-auto mb-12 relative">
          {/* Rotating border light */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 animate-[spin_4s_linear_infinite]" style={{
            background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, hsl(263 70% 75%) 75%, hsl(0 0% 100% / 0.9) 80%, hsl(263 70% 75%) 85%, transparent 100%)"
          }} />
          </div>
          {/* Inner bg to mask the gradient behind content */}
          <div className="absolute inset-[2px] rounded-[14px] gradient-hero" />

          <div className="relative aspect-video rounded-2xl bg-foreground/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <button className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-primary-foreground/30">
              <svg className="w-8 h-8 text-primary-foreground mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <motion.a
            href="https://abeeralmatooq.com/%d9%85%d9%86%d9%87%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold"
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 8px 30px hsl(263 70% 58% / 0.18)",
                "0 12px 40px hsl(263 70% 58% / 0.4)",
                "0 8px 30px hsl(263 70% 58% / 0.18)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
          >
            انضمي الآن وابدأي رحلتك التحولية
          </motion.a>
        </motion.div>

        <motion.div variants={childVariants} className="mt-4">
          <p className="text-sm opacity-60">⏳ عرض خاص — متاح لمدة 72 ساعة فقط</p>
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;