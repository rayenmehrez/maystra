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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* BEFORE column */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="rounded-2xl p-6 md:p-8" style={{
          background: "hsl(270 15% 95%)"
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
              background: "hsl(270 10% 85%)"
            }}>
                <CloudOff className="w-5 h-5" style={{
                color: "hsl(270 15% 55%)"
              }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{
                color: "hsl(270 15% 40%)"
              }}>
                  تعيشين بوعي… لكن داخلك مزدحم
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {beforeItems.map((item, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 12
            }} animate={inView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.35,
              delay: 0.4 + i * 0.07
            }} className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-200" style={{
              background: "hsl(270 10% 91%)"
            }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                background: "hsl(0 40% 90%)"
              }}>
                    <X className="w-3.5 h-3.5" style={{
                  color: "hsl(0 45% 55%)"
                }} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{
                color: "hsl(270 15% 40%)"
              }}>
                    {item}
                  </span>
                </motion.div>)}
            </div>

            <p className="text-sm mt-5 text-center font-medium" style={{ color: "hsl(270 15% 50%)" }}>
              تعرفين نفسك… لكن لا تشعرين بالانسجام معها
            </p>
          </motion.div>

          {/* Divider — mobile only */}
          <motion.div initial={{
          scaleX: 0
        }} animate={inView ? {
          scaleX: 1
        } : {}} transition={{
          duration: 0.8,
          delay: 0.9
        }} className="md:hidden h-[3px] rounded-full mx-auto w-3/4 origin-right" style={{
          background: "linear-gradient(to left, hsl(272 34% 47%), hsl(280 35% 75%))"
        }} />

          {/* AFTER column */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="rounded-2xl p-6 md:p-8 bg-card shadow-purple-lg relative" style={{
          boxShadow: "0 8px 40px hsl(272 34% 47% / 0.12), 0 0 80px hsl(272 34% 47% / 0.06)"
        }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                لا تصبح حياتك مثالية
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 mr-13">
              بل تصبح واضحة… فتخف مقاومتك لها
            </p>

            <div className="flex flex-col gap-3">
              {afterItems.map((item, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 12
            }} animate={inView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.35,
              delay: 0.7 + i * 0.07
            }} className="flex items-start gap-3 rounded-xl px-4 py-3 hover:bg-accent/50 transition-colors duration-200">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.div>)}
            </div>

            <p className="text-sm mt-5 text-center font-medium text-primary">
              الفرق ليس أنك تغيرتِ — الفرق أنك توقفتِ عن محاربة نفسك
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