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
            <p className="text-base md:text-lg opacity-80 mb-2">قبل أن تتعرّفي على المنهج…</p>
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              رسالة لطفلتك الداخلية
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="max-w-2xl mx-auto text-base md:text-lg opacity-85 leading-[2] mb-10 space-y-4">
              <p>أغلب النساء يدخلن صفحات التطوير وهنّ بعقلٍ يبحث عن حلول…</p>
              <p>بينما التغيير الحقيقي يبدأ من مكان أعمق بكثير.</p>
              <p>لذلك تركنا لكِ هنا مساحة صغيرة…</p>
              <p className="opacity-70 text-sm">ليست اختباراً، ولا واجباً، ولا شرطاً للانضمام.</p>
              <p className="font-semibold text-xl">فقط هدية.</p>
              <p>دقيقة هادئة بينك وبين نسختك الأولى —</p>
              <p>الطفلة التي عاشت كل شيء قبلك،</p>
              <p>وما زالت تنتظر أن تُرى.</p>
            </div>
          </AnimatedSection>

          {/* Icon: girl + woman silhouette */}
          <AnimatedSection delay={0.6}>
            <div className="flex justify-center mb-8">
              <svg width="120" height="90" viewBox="0 0 120 90" fill="none" className="opacity-70">
                <circle cx="35" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M35 30 L35 55 M35 38 L25 48 M35 38 L45 48 M35 55 L27 72 M35 55 L43 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="75" cy="15" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M75 25 L75 58 M75 35 L62 48 M75 35 L88 48 M75 58 L65 80 M75 58 L85 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M45 48 Q55 50 62 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 3" />
              </svg>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="max-w-2xl mx-auto text-base md:text-lg opacity-85 leading-[2] mb-10 space-y-4">
              <p>اكتبي لها ما لم يُقل…</p>
              <p>أو حتى كلمة واحدة فقط.</p>
              <p className="opacity-70 text-sm">يمكنك الاحتفاظ بالرسالة أو مشاركتها،</p>
              <p>لكنها في الحقيقة بداية علاقة جديدة مع نفسك</p>
              <p className="font-medium">قبل أي رحلة أخرى.</p>
            </div>
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
