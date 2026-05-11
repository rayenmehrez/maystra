import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import LetterOverlay from "./InnerChild/LetterOverlay";
import innerChildBg from "@/assets/inner-child-bg.jpg";

const InnerChildSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="inner-child-section" className="relative py-24 md:py-32 overflow-hidden gradient-hero">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${innerChildBg})` }}
          aria-hidden
        />
        {/* Dark purple gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(272 50% 18% / 0.85) 0%, hsl(272 45% 25% / 0.65) 50%, hsl(272 50% 18% / 0.9) 100%)",
          }}
          aria-hidden
        />
        <FloatingDots variant={4} />
        <div className="container mx-auto px-6 relative z-10 text-center text-primary-foreground">
          <AnimatedSection>
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              رسالة لطفلتك الداخلية
            </motion.h2>
            <p className="text-base md:text-lg opacity-80 mb-4">قبل ما نبدأ الرحلة، خذي لحظة... اكتبي رسالة لطفلتك الداخلية</p>
            <p className="text-2xl md:text-3xl font-bold mb-2">شنو تبين تقولين لها؟</p>
            <p className="text-xl md:text-2xl opacity-90 mb-10">إلى طفلتي الصغيرة 🤍</p>
          </AnimatedSection>

          {/* Illustration: woman holding hands with her inner child */}
          <AnimatedSection delay={0.5}>
            <div className="flex justify-center mb-10">
              <svg width="160" height="140" viewBox="0 0 160 140" fill="none" className="opacity-60">
                {/* Small girl */}
                <circle cx="50" cy="35" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M50 45 L50 75 M50 55 L38 65 M50 55 L62 65 M50 75 L40 100 M50 75 L60 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Heart above */}
                <path d="M80 20 C80 14, 88 10, 88 18 C88 10, 96 14, 96 20 C96 28, 88 34, 88 34 C88 34, 80 28, 80 20Z" stroke="currentColor" strokeWidth="1.2" fill="hsl(var(--primary-foreground) / 0.15)" />
                {/* Grown woman */}
                <circle cx="115" cy="28" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M115 41 L115 80 M115 53 L100 66 M115 53 L130 66 M115 80 L103 110 M115 80 L127 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Holding hands connection */}
                <path d="M62 65 Q75 62 100 66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
                {/* Stars */}
                <circle cx="30" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
                <circle cx="140" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
                <circle cx="75" cy="8" r="1" fill="currentColor" opacity="0.3" />
                {/* Envelope at bottom */}
                <rect x="68" y="108" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="hsl(var(--primary-foreground) / 0.1)" />
                <path d="M68 108 L80 118 L92 108" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <motion.button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-lg px-10 py-4 rounded-full border border-primary-foreground/30 hover:scale-105 transition-transform duration-300"
              animate={{ boxShadow: ["0 0 20px hsl(272 34% 47% / 0.3)", "0 0 40px hsl(272 34% 47% / 0.6)", "0 0 20px hsl(272 34% 47% / 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ابدئي اللحظة
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {isOpen && <LetterOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default InnerChildSection;
