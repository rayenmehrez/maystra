import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FloatingDots from "./FloatingDots";
import { X, Check, CloudOff, Sparkles } from "lucide-react";
const beforeItems = ["تفهمين الجميع بسرعة لكن يصعب عليك سماع نفسك بوضوح", "تفكرين كثيراً حتى في أوقات الراحة", "ترتاحين مؤقتاً… ثم يعود القلق بلا سبب واضح", "تشعرين أنك حاضرة جسداً لكن ذهنك في مكان آخر", "تقسين على نفسك أكثر مما يفعل أي شخص آخر", "تتعبين من العلاقات رغم محبتك للناس", "تعطين طاقة أكثر مما تستعيدين", "تترددين في القرارات المالية أو تقللين من قيمة نفسك", "تتكرر نفس أنماط العلاقات رغم إدراكك لها", "يصعب عليك الاستمتاع الكامل بلحظة جميلة دون تفكير لاحق"];
const afterItems = ["تهدأ الضوضاء الداخلية فيصبح قرارك أبسط", "تسمعين نفسك قبل أن تسمعي توقعات الآخرين", "يتحول حضورك من تفكير مستمر إلى إدراك هادئ", "تستمتعين باللحظة دون حاجة لتحليلها", "تتوقف العلاقات المرهقة مبكراً دون شعور بالذنب", "يصبح تقديرك المالي طبيعياً لا يحتاج شجاعة كل مرة", "تقل حاجتك للإثبات ويزيد تأثيرك تلقائياً", "طاقتك أكثر ثباتاً لأنك لم تعودي تقاومين طبيعتك", "تظهر أنوثتك كراحة وثقة… لا كمجهود أو دور", "تشعرين أن حياتك تُعاش… لا تُدار فقط"];
const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return <section ref={ref} className="relative py-24 bg-background overflow-hidden md:py-[31px] mt-10">
      <FloatingDots variant={3} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <p className="text-primary font-medium mb-2">✦</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            حين تقودك أنماطك… وحين تقودين حياتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-2">
            ليس الفرق في شخصيتك
          </p>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            بل في من يمسك المقود: تجاربك القديمة… أم وعيك الحالي
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
          {/* BEFORE column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl p-7 md:p-9 overflow-hidden backdrop-blur-sm border"
            style={{
              background:
                "linear-gradient(160deg, hsl(270 15% 97%) 0%, hsl(270 12% 93%) 100%)",
              borderColor: "hsl(270 12% 86%)",
              boxShadow: "0 10px 30px -15px hsl(270 20% 40% / 0.18)",
            }}
          >
            {/* corner badge */}
            <div
              dir="rtl"
              className="absolute top-5 right-5 text-[11px] tracking-[0.15em] font-bold px-3 py-1.5 rounded-full"
              style={{
                background: "hsl(270 10% 88%)",
                color: "hsl(270 15% 45%)",
              }}
            >
              قبل
            </div>

            <div className="flex items-center gap-3 mb-2 mt-6">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ background: "hsl(270 12% 88%)" }}
              >
                <CloudOff className="w-5 h-5" style={{ color: "hsl(270 18% 50%)" }} />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold leading-tight"
                style={{ color: "hsl(270 18% 38%)" }}
              >
                تعيشين بوعي… لكن داخلك مزدحم
              </h3>
            </div>
            <p
              className="text-[13px] mb-6 mr-14"
              style={{ color: "hsl(270 10% 55%)" }}
            >
              الوعي وحده لا يكفي… حين يبقى الداخل صاخباً
            </p>

            <div className="flex flex-col gap-2.5">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl px-4 py-3 border"
                  style={{
                    background: "hsl(0 0% 100% / 0.55)",
                    borderColor: "hsl(270 10% 90%)",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "hsl(0 50% 94%)" }}
                  >
                    <X className="w-3.5 h-3.5" style={{ color: "hsl(0 50% 55%)" }} />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(270 15% 42%)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <p
              className="text-sm mt-6 text-center font-medium italic"
              style={{ color: "hsl(270 15% 50%)" }}
            >
              تعرفين نفسك… لكن لا تشعرين بالانسجام معها
            </p>
          </motion.div>

          {/* Divider — mobile only */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="md:hidden h-[3px] rounded-full mx-auto w-3/4 origin-right"
            style={{
              background:
                "linear-gradient(to left, hsl(272 34% 47%), hsl(280 35% 75%))",
            }}
          />

          {/* AFTER column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-3xl p-7 md:p-9 overflow-hidden border border-primary/20"
            style={{
              background:
                "linear-gradient(160deg, hsl(272 34% 47%) 0%, hsl(280 40% 35%) 100%)",
              boxShadow:
                "0 20px 60px -20px hsl(272 34% 47% / 0.55), 0 0 100px hsl(280 40% 50% / 0.18)",
            }}
          >
            {/* decorative glows */}
            <div
              className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, hsl(45 90% 70% / 0.25) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-32 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, hsl(280 60% 70% / 0.3) 0%, transparent 70%)",
              }}
            />

            {/* corner badge */}
            <div
              className="absolute top-5 left-5 text-[10px] tracking-[0.25em] font-semibold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{
                background: "hsl(45 90% 70% / 0.2)",
                color: "hsl(45 95% 80%)",
                border: "1px solid hsl(45 90% 70% / 0.4)",
              }}
            >
              AFTER
            </div>

            <div className="relative flex items-center gap-3 mb-2 mt-6">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45 90% 70% / 0.3), hsl(45 90% 60% / 0.15))",
                  border: "1px solid hsl(45 90% 70% / 0.4)",
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: "hsl(45 95% 80%)" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                لا تصبح حياتك مثالية
              </h3>
            </div>
            <p className="relative text-[13px] mb-6 mr-14 text-white/75">
              بل تصبح واضحة… فتخف مقاومتك لها وتعود إليكِ أنتِ
            </p>

            <div className="relative flex flex-col gap-2.5">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.7 + i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/10 hover:border-white/25 transition-colors duration-200"
                  style={{ background: "hsl(0 0% 100% / 0.08)" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(45 90% 70%), hsl(45 85% 55%))",
                      boxShadow: "0 0 12px hsl(45 90% 60% / 0.5)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: "hsl(272 40% 25%)" }} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-white/95 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <p
              className="relative text-sm mt-6 text-center font-semibold"
              style={{ color: "hsl(45 95% 82%)" }}
            >
              الفرق ليس أنكِ تغيّرتِ — الفرق أنكِ توقفتِ عن محاربة نفسك
            </p>
          </motion.div>
        </div>

        {/* Transformation line */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.2 }} className="max-w-3xl mx-auto mt-14 text-center rounded-2xl p-8 md:p-10 border border-primary/10 shadow-lg" style={{ backgroundColor: "#f3ebf8" }}>
          <p className="text-sm font-medium text-primary mb-2">سطر التحول</p>
          <p className="text-lg md:text-xl font-bold text-primary mb-3">
            المايسترا لا تعطيك أدوات لتصبحي شخصاً آخر
          </p>
          <p className="text-primary/70 leading-relaxed text-base">
            بل تعيدك إلى حالة تكونين فيها واضحة لنفسك.
            وعندما تصبحين واضحة… تهدأ النفس وتنتظم العلاقات، وتستشعرين جمال اللحظات، ويتحسن المال تبعاً لذلك، وتجربتك في الحياة بالكامل كنتيجة طبيعية لتحولك الداخلي العميق.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default BeforeAfterSection;