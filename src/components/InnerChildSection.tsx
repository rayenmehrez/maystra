import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import LetterOverlay from "./InnerChild/LetterOverlay";

const InnerChildSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="inner-child-section" className="relative py-24 md:py-32 overflow-hidden gradient-hero">
        <FloatingDots variant={4} />
        <div className="container mx-auto px-6 relative z-10 text-center text-primary-foreground">
          <AnimatedSection>
            <p className="text-base md:text-lg opacity-80 mb-4">قبل ما نبدأ الرحلة، خذي لحظة... اكتبي رسالة لطفلتك الداخلية</p>
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              شنو تبين تقولين لها؟
            </motion.h2>
            <p className="text-xl md:text-2xl opacity-90 mb-10">إلى طفلتي الصغيرة 🤍</p>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
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
