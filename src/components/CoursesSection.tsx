import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { ChevronDown } from "lucide-react";
import coursePackage from "@/assets/course-package.jpg";

const courses = [
{ num: 1, title: "الرجل الأول في حياتك", preview: "نبدأ من الجذر الأول: كيف أثّر جرح الأب على علاقتك بنفسك؟ على ثقتك؟ على اختياراتك؟ على طريقة محبتك؟", full: "ستفهمين:\n– لماذا تنجذبين لأنماط معينة؟\n– لماذا يتكرر نفس الألم؟\n– وكيف تبدئين إصلاح العلاقة الداخلية مع Masculine Energy.", transform: "إعادة بناء الأمان الداخلي مما يؤثر على علاقتك بكثير من الأمور في حياتك وعلى رأسها علاقتك بالمال." },
{ num: 2, title: "الأم وجذور الأنوثة", preview: "هنا نفك شيفرة: الإرضاء… المقارنة… الخضوع… الخوف من الرفض… كلها بداياتها ترتبط بعلاقتك الأولى مع الأم.", full: "ستتعلمين:\n– كيف يتشكل نموذج الأنثى داخلنا\n– أين تشوهت مشاعرنا\n– وكيف نستعيد أنوثتنا بنعومة وثقة", transform: "استرجاع جذورك الأنثوية الحقيقية مما سوف يعكسه تعبيرك عن نفسك وأنوثتك بارتياح وثقة." },
{ num: 3, title: "أنماط التعلق المؤذية", preview: "لماذا نعود لمن جرحنا؟ لماذا نكرر نفس العلاقة؟ ومتى يصبح الحب تعلّقًا؟", full: "في هذه الدورة نفك ديناميكية التعلّق بأدوات واضحة وسهلة.", transform: "وعي جديد في العلاقات… وقطع دائرة التكرار." },
{ num: 4, title: "صوتك الداخلي: الناقد، المُخفي، والمتجلي", preview: "سيظهر أمامك صوتك الداخلي الحقيقي لأول مرة: من أين جاء؟ لماذا يخيفك؟ وماذا يريد؟", full: "نتعلم:\n– كيف نوقف النقد القاسي\n– كيف نعيد بناء صوت قوي واثق\n– كيف نتحول من دور الضحية إلى دور القائدة", transform: "تحويل الصوت الداخلي من عدو… إلى مصدر للمعلومات الداخلية المهمة، حليف ومساند في بناء الواقع الذي نحب." },
{ num: 5, title: "قيمك الحقيقية vs قيم التربية", preview: "هل حياتك اليوم مبنية على قيمك أنت… أم قيم أهلك والمجتمع؟", full: "ندرس:\n– قيمك الجوهرية\n– القيم المزروعة\n– القيم التي تعطّلك\n\nثم نعيد ترتيب الحياة وفق قيم تشبهك أنت فقط.", transform: "وضوح قوي في القرارات والاختيارات." },
{ num: 6, title: "الخوف: المكابح غير المرئية", preview: "الخوف لا يذهب… لكنه يتحوّل.", full: "ستتعلمين:\n– كيف يستعمل العقل الخوف لحمايتك\n– أنواع الخوف (رفض – فشل – هجر – نجاح)\n– كيف نستخدم الخوف كبوصلة", transform: "الحرية من الشلل العاطفي والقدرة على التحرك في قراراتك بسلاسة وقوة وبدون تردد وخوف." },
{ num: 7, title: "الحدود: بوابة احترام الذات", preview: "قول \"لا\" ليس قسوة… بل وعي.", full: "نتعلم:\n– أين ضاعت حدودك\n– كيف ترفعين قيمتك بهدوء\n– كيف تبنين حدود صحية بدون صدام أو عنف", transform: "احترام ذاتي جديد… يغيّر علاقاتك بدون مجهود." },
{ num: 8, title: "الكاريزما والحضور الحقيقي", preview: "الكاريزما ليست جمالًا أو صوتًا عاليًا… هي طاقة داخلية تُشعّ بلا كلام.", full: "تتعلمين:\n– سر الحضور\n– كيف يقرأك الناس\n– كيف تصنعين تأثيرًا ناعمًا لكنه عميق", transform: "حضور يُشعر به قبل أن يُرى، تفعيل كاريزماتك الخاصة." },
{ num: 9, title: "العلاقات من منظور المحيط الأزرق", preview: "كيف تتغير العلاقات عندما تتغيرين أنتِ؟", full: "نفهم:\n– شكل العلاقات الصحية\n– ديناميكية الحب الهادئ\n– كيف تختارين علاقة \"زرقاء\"… خالية من الاستنزاف", transform: "علاقات أخف، أعمق، أصدق وأكثر بهجة ومتعة." },
{ num: 10, title: "الطاقة الداخلية وتناغم القوتين", preview: "نتعامل مع feminine & masculine energy بأسلوب واقعي، نفسي، بعيد عن الروحانية المبالغ فيها.", full: "بعيد عن المفاهيم المنتشرة المغلوطة والتي قد ينتج عنها تشويش وتعطيل.", transform: "اتزان داخلي ينعكس على كل جوانب حياتك." },
{ num: 11, title: "إعادة تشكيل المستقبل", preview: "هنا نرسم خارطة حياتك الجديدة: Future Self Blueprint", full: "كيف تتصرفين؟ كيف تختارين؟ كيف تعيشين؟", transform: "بداية هوية جديدة بالكامل تقررينها أنت اختيارياً وبكل ثقة." },
{ num: 12, title: "The Maestra Code", preview: "آخر دورة… الدستور الداخلي الذي تعيشين به بعد الرحلة.", full: "قيمك، صوتك، إيقاعك، حدودك، شعورك، رؤيتك…", transform: "استلام \"قيادة حياتك\" بشكل كامل." }];


const CourseCard = ({ course, index }: {course: typeof courses[0];index: number;}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.05 * index}>
      <motion.div
        whileHover={{ y: -3, boxShadow: "0 16px 40px hsl(263 70% 58% / 0.15)" }}
        transition={{ duration: 0.25 }}
        className="relative bg-card rounded-2xl overflow-hidden border border-border/40 group cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-l from-primary via-primary/60 to-transparent" />

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,hsl(263_70%_58%/0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 p-6 md:p-7">
          <div className="flex items-start gap-4">
            {/* Number badge */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <span className="font-bold text-lg text-primary group-hover:text-primary-foreground transition-colors duration-300">{course.num}</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-primary" />
                </motion.div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1.5">{course.preview}</p>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed whitespace-pre-line">{course.full}</p>
                    <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-foreground text-sm font-medium">
                        <span className="inline-block bg-primary text-primary-foreground text-xs font-bold rounded-md px-2 py-0.5 ml-2">التحوّل</span>
                        {course.transform}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const CoursesSection = () => {
  return (
    <section className="relative py-24 bg-lavender-mid overflow-hidden">
      <FloatingDots variant={1} />
      <FloatingDots variant={4} />
      <FloatingDots variant={8} />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            تفاصيل الدورات الـ 12
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-14">
            <img src={coursePackage} alt="محتوى برنامج المايسترا" className="w-full max-w-4xl mx-auto rounded-2xl shadow-purple-lg" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-5">
          {courses.map((course, i) =>
          <CourseCard key={course.num} course={course} index={i} />
          )}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14">
            <motion.a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold"
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 8px 30px hsl(263 70% 58% / 0.18)",
                  "0 12px 40px hsl(263 70% 58% / 0.4)",
                  "0 8px 30px hsl(263 70% 58% / 0.18)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              إحجزي إستشارتك المجانية الأن
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>);

};

export default CoursesSection;