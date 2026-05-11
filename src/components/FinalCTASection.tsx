import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FloatingDotsLight } from "./FloatingDots";
import finalBg from "@/assets/final-cta-bg.jpg";

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
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${finalBg})` }}
        aria-hidden
      />
      {/* Purple gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(272 50% 18% / 0.92) 0%, hsl(272 40% 30% / 0.7) 50%, hsl(272 50% 18% / 0.95) 100%)",
        }}
        aria-hidden
      />
      {/* Radial vignette for focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsl(272 50% 12% / 0.6) 100%)",
        }}
        aria-hidden
      />
      <FloatingDotsLight />

      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection delay={0.1}>
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
            </span>
            <span className="text-xs md:text-sm font-medium text-primary-foreground/90 tracking-wide">
              لحظة القرار
            </span>
          </motion.div>

          {/* Question pre-heading */}
          <p className="text-base md:text-xl text-primary-foreground/70 mb-3">
            ليس السؤال هل تحتاجين المايسترا…
          </p>

          {/* Main emotional heading */}
          <h2 className="text-2xl md:text-5xl font-extrabold text-primary-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            بل{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, hsl(45 90% 75%), hsl(280 60% 85%), hsl(45 90% 75%))",
              }}
            >
              كم من الوقت
            </span>{" "}
            تريدين الاستمرار بإدارة حياتك من الضجيج الداخلي؟
          </h2>

          {/* Supporting line */}
          <p className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-loose">
            كل يوم تأجلين فيه قرارك، تخسرين فرصة لتعيشي بسلام داخلي،
            وضوح، وثقة. الرحلة تبدأ بخطوة واحدة — استشارة مجانية معي.
          </p>

          {/* Countdown */}
          <div className="mb-3">
            <p className="text-xs md:text-sm text-amber-200/80 mb-3 tracking-widest uppercase">
              العرض ينتهي خلال
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4" dir="ltr">
              {[
                { value: pad(timeLeft.hours), label: "ساعة" },
                { value: pad(timeLeft.minutes), label: "دقيقة" },
                { value: pad(timeLeft.seconds), label: "ثانية" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-amber-300/30 flex items-center justify-center relative overflow-hidden"
                    style={{
                      boxShadow:
                        "0 8px 30px hsl(45 80% 50% / 0.15), inset 0 1px 0 hsl(45 90% 80% / 0.15)",
                    }}
                  >
                    <motion.span
                      key={item.value}
                      className="text-2xl md:text-3xl font-extrabold text-primary-foreground"
                      initial={{ rotateX: -90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.value}
                    </motion.span>
                  </div>
                  <span className="text-xs mt-2 text-primary-foreground/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.a
              href="#booking"
              className="inline-block bg-primary-foreground text-primary text-lg md:text-xl px-12 py-5 rounded-full font-bold relative"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 8px 30px hsl(45 80% 60% / 0.25)",
                  "0 16px 50px hsl(45 80% 60% / 0.5)",
                  "0 8px 30px hsl(45 80% 60% / 0.25)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              إحجزي إستشارتك المجانية الأن
            </motion.a>

            {/* Trust micro-line */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-300">✓</span> مجانية بالكامل
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-300">✓</span> بدون أي التزام
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-300">✓</span> ٣٠ دقيقة فقط
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
