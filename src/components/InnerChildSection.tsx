import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import LetterOverlay from "./InnerChild/LetterOverlay";

const InnerChildSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden gradient-hero">
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
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              لحظة بينك وبين نفسك… اكتبي ما لم يُقال أبدًا
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="text-sm md:text-base opacity-75 max-w-2xl mx-auto mb-10 leading-relaxed">
              كل امرأة تحمل بداخلها طفلة صغيرة تنتظر أن تُسمع. طفلة عاشت لحظات لم
              تفهمها، وحملت مشاعر أكبر منها. اليوم، أعطيها صوتك. اكتبي لها ما
              تمنيتِ لو قاله لك أحد.
            </p>
          </AnimatedSection>

          {/* Icon: girl + woman silhouette */}
          <AnimatedSection delay={0.7}>
            <div className="flex justify-center mb-10">
              <svg width="120" height="90" viewBox="0 0 120 90" fill="none" className="opacity-70">
                {/* Small girl */}
                <circle cx="35" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M35 30 L35 55 M35 38 L25 48 M35 38 L45 48 M35 55 L27 72 M35 55 L43 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Woman */}
                <circle cx="75" cy="15" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M75 25 L75 58 M75 35 L62 48 M75 35 L88 48 M75 58 L65 80 M75 58 L85 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Hands connecting */}
                <path d="M45 48 Q55 50 62 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 3" />
              </svg>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <motion.button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-lg px-10 py-4 rounded-full border border-primary-foreground/30 hover:scale-105 transition-transform duration-300"
              animate={{ boxShadow: ["0 0 20px hsl(263 70% 58% / 0.3)", "0 0 40px hsl(263 70% 58% / 0.6)", "0 0 20px hsl(263 70% 58% / 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ابدأي الكتابة
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {isOpen && <LetterOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default InnerChildSection;
