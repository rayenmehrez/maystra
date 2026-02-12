import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FloatingDots from "./FloatingDots";
import { X, Check, CloudOff, Sparkles } from "lucide-react";
const beforeItems = ["شك دائم في نفسك وقراراتك", "تكرار نفس العلاقات المؤذية", "إرضاء الآخرين على حساب نفسك", "خوف مستمر من الرفض والفشل", "حدود ضعيفة يسهل تجاوزها", "صوت داخلي قاسٍ لا يتوقف عن النقد", "إحساس بالضياع وعدم معرفة ماذا تريدين", "استنزاف عاطفي مستمر بدون سبب واضح"];
const afterItems = ["ثقة عميقة بنفسك وبقراراتك", "وعي كامل بأنماطك وقدرة على كسر الدائرة", "أولوية حقيقية لنفسك بدون شعور بالذنب", "شجاعة هادئة تحركك نحو ما تريدين", "حدود صحية واضحة يحترمها الجميع", "صوت داخلي داعم وواعٍ يرشدك", "رؤية واضحة لحياتك ومستقبلك", "طاقة متوازنة وسلام داخلي حقيقي"];
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            قبل وبعد المايسترا
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            التحول الذي ستعيشينه من الداخل إلى الخارج
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
              <h3 className="text-xl font-bold" style={{
              color: "hsl(270 15% 40%)"
            }}>
                قبل المايسترا
              </h3>
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
          background: "linear-gradient(to left, hsl(263 70% 58%), hsl(270 60% 80%))"
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
          boxShadow: "0 8px 40px hsl(263 70% 58% / 0.12), 0 0 80px hsl(263 70% 58% / 0.06)"
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                بعد المايسترا
              </h3>
            </div>

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
          </motion.div>
        </div>
      </div>
    </section>;
};
export default BeforeAfterSection;