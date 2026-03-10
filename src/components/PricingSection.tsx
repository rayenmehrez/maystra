import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FloatingDotsLight } from "./FloatingDots";
import pricingFullImg from "@/assets/pricing-full.png";
import pricingInstallmentImg from "@/assets/pricing-installment.png";

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

const PricingSection = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const timerBoxes = [
    { value: pad(timeLeft.days), label: "أيام" },
    { value: pad(timeLeft.hours), label: "ساعات" },
    { value: pad(timeLeft.minutes), label: "دقائق" },
    { value: pad(timeLeft.seconds), label: "ثواني" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 + i * 0.2 },
    }),
  };

  return (
    <section id="pricing" className="relative py-20 md:py-28 gradient-pricing overflow-hidden">
      <FloatingDotsLight />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-primary-foreground mb-4">
            اختاري خطة الدفع المناسبة لك
          </h2>
          <p className="text-center text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            لا تفوتي الفرصة — عرض خاص متاح لمدة 72 ساعة فقط
          </p>
        </AnimatedSection>

        {/* Countdown */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-14" dir="ltr">
            {timerBoxes.map((item, i) => (
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
                <span className="text-xs md:text-sm mt-2 text-primary-foreground/70">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1040px] mx-auto">
          {/* Card 1 — Installment (Right in RTL) */}
          <motion.div
            className="group bg-card rounded-2xl shadow-purple-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <img
              src={pricingInstallmentImg}
              alt="خطة الدفع بالتقسيط"
              className="w-full rounded-t-2xl"
            />
            <div className="p-6 md:p-8">
              <span className="inline-block bg-primary/15 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                الدفع بالتقسيط
              </span>
              <a
                href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7-50/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground font-bold text-base md:text-lg py-4 rounded-xl hover:scale-[1.03] transition-transform duration-300 glow-purple"
              >
                ادفعي بالتقسيط
              </a>
            </div>
          </motion.div>

          {/* Card 2 — Full Payment (Left in RTL) */}
          <motion.div
            className="group relative bg-card rounded-2xl shadow-purple-lg overflow-hidden border-2 border-primary/40 hover:-translate-y-1 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {/* Recommended badge */}
            <motion.div
              className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-purple"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              الأفضل قيمة ⭐
            </motion.div>

            <img
              src={pricingFullImg}
              alt="خطة الدفع الكامل"
              className="w-full rounded-t-2xl"
            />
            <div className="p-6 md:p-8">
              <span className="inline-block bg-primary/15 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                الدفع الكامل
              </span>
              <a
                href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground font-bold text-lg md:text-xl py-5 rounded-xl hover:scale-[1.03] transition-transform duration-300 glow-purple"
              >
                ادفعي البرنامج كامل
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust badges */}
        <AnimatedSection delay={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 mb-4">
            {[
              { icon: "🔒", text: "دفع آمن 100%" },
              { icon: "💰", text: "ضمان استرداد خلال 7 أيام" },
              { icon: "🎓", text: "وصول مدى الحياة" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-primary-foreground/80 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-primary-foreground/50 text-xs mt-4">
            عرض خاص — متاح لمدة 72 ساعة فقط
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
