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

  return (
    <section className="relative py-20 md:py-28 gradient-pricing overflow-hidden">
      <FloatingDotsLight />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-primary-foreground">
        <AnimatedSection>
          <p className="text-lg md:text-xl opacity-80 mb-3">⏳ العرض ينتهي قريبًا</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            لا تتردّدي — هذا هو وقتك
          </h2>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mb-8 leading-relaxed">
            كل يوم يمر بدون تغيير هو يوم ضائع. انضمي الآن واحصلي على 12 دورة تحويلية + 8 هدايا حصرية بسعر استثنائي
          </p>
        </AnimatedSection>

        {/* Countdown */}
        <AnimatedSection delay={0.15}>
          <div className="flex items-center justify-center gap-3 mb-8" dir="ltr">
            {[
              { value: pad(timeLeft.hours), label: "ساعة" },
              { value: pad(timeLeft.minutes), label: "دقيقة" },
              { value: pad(timeLeft.seconds), label: "ثانية" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-foreground shadow-purple flex items-center justify-center">
                  <motion.span
                    key={item.value}
                    className="text-2xl md:text-3xl font-extrabold text-primary"
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value}
                  </motion.span>
                </div>
                <span className="text-xs mt-2 opacity-70">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Price highlight */}
        <AnimatedSection delay={0.25}>
          <div className="mb-8">
            <p className="text-lg line-through opacity-50 mb-1">$3,778</p>
            <p className="text-5xl md:text-7xl font-extrabold mb-2">$1,199</p>
            <p className="text-base font-semibold opacity-90">🎉 وفّري $2,579 اليوم فقط!</p>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.35}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-purple-lg"
            >
              انضمي الآن — ابدأي رحلتك التحولية ✦
            </a>
            <a
              href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7-50/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground font-semibold text-base px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 border border-primary-foreground/30"
            >
              أو ادفعي بالتقسيط — $599.5 × دفعتين
            </a>
          </div>
          <p className="text-sm opacity-50">
            🔒 دفع آمن ومضمون • تسجيلات مدى الحياة
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
