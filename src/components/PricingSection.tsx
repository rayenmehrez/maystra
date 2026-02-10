import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { FloatingDotsLight } from "./FloatingDots";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 72, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = Date.now() + 72 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section id="pricing" className="relative py-24 gradient-pricing overflow-hidden">
      <FloatingDotsLight />
      <div className="container mx-auto px-6 text-center text-primary-foreground relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">لا تفوتي الفرصة!</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-8">
            <p className="text-2xl line-through opacity-60 mb-2">$3,778</p>
            <p className="text-6xl md:text-8xl font-extrabold mb-4">$1,199</p>
            <p className="text-lg opacity-80 max-w-xl mx-auto leading-relaxed">
              هذا عرض محدد الوقت — السعر الأصلي 2,199 دولار — متاح فقط خلال الـ 72 ساعة القادمة
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Countdown */}
          <div className="flex items-center justify-center gap-4 mb-12" dir="ltr">
            {[
              { value: pad(timeLeft.hours), label: "ساعة" },
              { value: pad(timeLeft.minutes), label: "دقيقة" },
              { value: pad(timeLeft.seconds), label: "ثانية" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold">{item.value}</span>
                </div>
                <span className="text-sm mt-2 opacity-70">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="https://abeeralmatooq.com/%d9%85%d9%86%d9%87%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-xl px-12 py-5 rounded-full hover:scale-105 transition-transform duration-300 border border-primary-foreground/30 glow-purple"
          >
            انضمي الآن
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
