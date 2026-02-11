import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
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
const FinalCTASection = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(diff % (1000 * 60) / 1000)
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endTime]);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <section className="relative py-20 gradient-hero overflow-hidden">
      <FloatingDotsLight />
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            ابدأي رحلتك الآن
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            لا تنتظري أكثر — حياتك الجديدة تبدأ من هنا
          </p>

          <div className="flex items-center justify-center gap-3 mb-8" dir="ltr">
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
                <span className="text-xs mt-1.5 text-primary-foreground/60">{item.label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="https://abeeralmatooq.com/%d9%85%d9%86%d9%87%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            انضمي الآن
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};
export default FinalCTASection;