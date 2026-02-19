import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const LetUsKnowYouSection = () => {
  const scrollToInnerChild = () => {
    const el = document.getElementById("inner-child-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#f3ebf8" }}>
      {/* Decorative soft circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center" dir="rtl">
        <AnimatedSection>
          <p className="text-base md:text-lg text-primary/70 mb-3">قبل أن تتعرّفي على المنهج…</p>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-primary mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            دعينا نتعرّف عليكِ أنتِ.
          </motion.h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/80 leading-[2.2] mb-8 space-y-3">
            <p>أغلب النساء يدخلن صفحات التطوير وهنّ بعقلٍ يبحث عن حلول…</p>
            <p>بينما التغيير الحقيقي يبدأ من مكان أعمق بكثير.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/80 leading-[2.2] mb-8 space-y-3">
            <p>لذلك تركنا لكِ هنا مساحة صغيرة…</p>
            <p className="text-sm text-primary/55">ليست اختباراً، ولا واجباً، ولا شرطاً للانضمام.</p>
            <p className="font-semibold text-xl text-primary">فقط هدية.</p>
          </div>
        </AnimatedSection>

        {/* Decorative divider */}
        <AnimatedSection delay={0.45}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/20" />
            <span className="text-primary/40 text-lg">✦</span>
            <span className="block w-12 h-px bg-primary/20" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/80 leading-[2.2] mb-8 space-y-3">
            <p>دقيقة هادئة بينك وبين نسختك الأولى —</p>
            <p>الطفلة التي عاشت كل شيء قبلك،</p>
            <p>وما زالت تنتظر أن تُرى.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/80 leading-[2.2] mb-8 space-y-3">
            <p>اكتبي لها ما لم يُقل…</p>
            <p>أو حتى كلمة واحدة فقط.</p>
            <p className="text-sm text-primary/55">يمكنك الاحتفاظ بالرسالة أو مشاركتها،</p>
            <p>لكنها في الحقيقة بداية علاقة جديدة مع نفسك</p>
            <p className="font-medium text-primary">قبل أي رحلة أخرى.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.75}>
          <motion.button
            onClick={scrollToInnerChild}
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            animate={{ boxShadow: ["0 4px 20px hsl(272 34% 47% / 0.25)", "0 4px 35px hsl(272 34% 47% / 0.45)", "0 4px 20px hsl(272 34% 47% / 0.25)"] }}
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
