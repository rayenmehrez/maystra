import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import maestraIllustration from "@/assets/maestra-illustration.png";
import maestraOrchestra from "@/assets/maestra-orchestra.png";

const InnerChildIntroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden md:py-[80px]" style={{ backgroundColor: "#f3ebf8" }}>
      <FloatingDots variant={6} />

      {/* Extra blurry ambient circles */}
      <div className="absolute top-1/4 left-[5%] w-48 h-48 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-64 h-64 rounded-full bg-primary/6 blur-[80px] pointer-events-none" />
      <div className="absolute top-[10%] right-[30%] w-32 h-32 rounded-full bg-primary/5 blur-[40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center" dir="rtl">
        {/* Intro subtitle */}
        <AnimatedSection>
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={maestraOrchestra}
              alt="المايسترا تقود الأوركسترا"
              className="w-full max-w-2xl rounded-2xl shadow-purple-lg"
              loading="lazy"
            />
          </motion.div>

          <p className="text-base md:text-lg text-primary/60 mb-3 tracking-wide"> قبل أن تتعرّفي على المنهج…

          </p>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}>دعينا نتعرّف عليكِ أنتِ 


          </motion.h2>
        </AnimatedSection>

        {/* First block */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/75 leading-[2.2] mb-10 space-y-4">
            <p>أغلب النساء يدخلن صفحات التطوير وهنّ بعقلٍ يبحث عن حلول… </p>
            <p>بينما التغيير الحقيقي يبدأ من مكان أعمق بكثير. </p>
          </div>
        </AnimatedSection>

        {/* Gift block */}
        <AnimatedSection delay={0.35}>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-base md:text-lg text-primary/75 leading-[2.2] mb-3">لذلك تركنا لكِ هنا مساحة صغيرة…</p>
            <p className="text-sm text-primary/50 mb-4">ليست اختباراً، ولا واجباً، ولا شرطاً للانضمام.</p>
            <motion.p
              className="text-2xl md:text-3xl font-bold text-primary"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>فقط هدية 


            </motion.p>
          </div>
        </AnimatedSection>

        {/* Decorative divider */}
        <AnimatedSection delay={0.45}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="block w-16 h-px bg-primary/15" />
            <motion.span
              className="text-primary/30 text-xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>

              ✦
            </motion.span>
            <span className="block w-16 h-px bg-primary/15" />
          </div>
        </AnimatedSection>

        {/* Quiet minute block */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/75 leading-[2.2] mb-10 space-y-4">
            <p>دقيقة هادئة بينك وبين نسختك الأولى — </p>
            <p>الطفلة التي عاشت كل شيء قبلك،</p>
            <p>وما زالت تنتظر أن تُرى. </p>
          </div>
        </AnimatedSection>

        {/* Letter block */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/75 leading-[2.2] mb-6 space-y-4">
            <p>اكتبي لها ما لم يُقل… </p>
            <p>أو حتى كلمة واحدة فقط.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <div className="max-w-2xl mx-auto text-base md:text-lg text-primary/75 leading-[2.2] space-y-3">
            <p className="text-sm text-primary/50">يمكنك الاحتفاظ بالرسالة أو مشاركتها، </p>
            <p>لكنها في الحقيقة بداية علاقة جديدة مع نفسك</p>
            <p className="font-semibold text-primary text-lg">قبل أي رحلة أخرى. </p>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={0.85}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <motion.div
              className="w-10 h-16 rounded-full border-2 border-primary/25 flex items-start justify-center pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>

              <motion.div
                className="w-2 h-2 rounded-full bg-primary/50"
                animate={{ y: [0, 28, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />

            </motion.div>
            <motion.span
              className="text-xs text-primary/30 tracking-widest"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

              تابعي
            </motion.span>
          </div>
        </AnimatedSection>
      </div>
    </section>);

};

export default InnerChildIntroSection;