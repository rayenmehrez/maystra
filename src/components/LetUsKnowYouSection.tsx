import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";

const LetUsKnowYouSection = () => {
  const scrollToInnerChild = () => {
    const el = document.getElementById("inner-child-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden gradient-hero">
      <FloatingDots variant={5} />
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
            دعينا نتعرّف عليكِ أنتِ.
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

        <AnimatedSection delay={0.5}>
          <div className="max-w-2xl mx-auto text-base md:text-lg opacity-85 leading-[2] mb-10 space-y-4">
            <p>اكتبي لها ما لم يُقل…</p>
            <p>أو حتى كلمة واحدة فقط.</p>
            <p className="opacity-70 text-sm">يمكنك الاحتفاظ بالرسالة أو مشاركتها،</p>
            <p>لكنها في الحقيقة بداية علاقة جديدة مع نفسك</p>
            <p className="font-medium">قبل أي رحلة أخرى.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <motion.button
            onClick={scrollToInnerChild}
            className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-lg px-10 py-4 rounded-full border border-primary-foreground/30 hover:scale-105 transition-transform duration-300"
            animate={{ boxShadow: ["0 0 20px hsl(272 34% 47% / 0.3)", "0 0 40px hsl(272 34% 47% / 0.6)", "0 0 20px hsl(272 34% 47% / 0.3)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ابدئي اللحظة
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LetUsKnowYouSection;
