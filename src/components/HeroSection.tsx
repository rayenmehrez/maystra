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
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const pad = (n: number) => n.toString().padStart(2, "0");

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
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px] block" fill="hsl(var(--background))">
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,40 L1440,120 L0,120 Z" />
        </svg>
      </div>
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
          {/* Rotating short light line */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
           <div className="absolute inset-0 animate-[spin_4s_linear_infinite]" style={{
            background: "conic-gradient(from 0deg, transparent 0%, transparent 85%, hsl(280 80% 70%) 91%, hsl(263 90% 85%) 94%, hsl(280 80% 70%) 97%, transparent 100%)"
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

        {/* Countdown Timer */}
        <motion.div variants={childVariants} className="flex items-center justify-center gap-3 mb-6" dir="ltr">
          {[
            { value: pad(timeLeft.hours), label: "ساعة" },
            { value: pad(timeLeft.minutes), label: "دقيقة" },
            { value: pad(timeLeft.seconds), label: "ثانية" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                <motion.span
                  key={item.value}
                  className="text-xl md:text-2xl font-extrabold text-primary-foreground"
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value}
                </motion.span>
              </div>
              <span className="text-xs mt-1.5 opacity-60">{item.label}</span>
            </div>
          ))}
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

        <motion.div variants={childVariants} className="mt-4 flex flex-col items-center gap-2">
          <p className="text-sm opacity-60">⏳ عرض خاص — متاح لمدة 72 ساعة فقط</p>
          <div className="mt-2 inline-flex items-center gap-3 border-2 border-dashed border-green-400 rounded-full px-6 py-2.5 bg-green-400/10 backdrop-blur-sm">
            <span className="text-sm line-through opacity-50 text-primary-foreground">$3,778</span>
            <span className="text-2xl md:text-3xl font-extrabold text-green-400">$1,199</span>
          </div>
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;