import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { ChevronDown } from "lucide-react";
import coursePackage from "@/assets/course-package.jpg";

const courses = [
{ num: 1, title: "الرجل الأول في حياتك", preview: "تبدئين رحلتك من أول علاقة أثرت فيكِ — أبوكِ.", full: "ستكتشفين كيف شكّل وجوده أو غيابه إيمانك بنفسك وعلاقاتك. ستتعلمين كيف تفككين هذا الأثر وتعيدين بناء صورتك الداخلية.", transform: "تحرر من أثر الأب على ثقتك بنفسك وقراراتك." },
{ num: 2, title: "المرأة التي صنعتكِ", preview: "علاقتك بأمك هي أعمق علاقة عاطفية عشتيها.", full: "سنغوص في هذه العلاقة لفهم كيف أثرت على نمطك العاطفي وطريقة حبك لنفسك وللآخرين.", transform: "فهم أعمق لنمطك العاطفي وبداية شفاء حقيقي." },
{ num: 3, title: "الطفلة الداخلية", preview: "داخلك طفلة ما زالت تحمل جروحًا قديمة.", full: "في هذه الدورة ستتواصلين مع طفلتك الداخلية، تسمعينها، وتبدئين رحلة احتضانها وإعادة الأمان لها.", transform: "شفاء الطفلة الداخلية واستعادة الأمان العاطفي." },
{ num: 4, title: "الجرح الأنثوي", preview: "كثير من النساء يحملن جرحًا أنثويًا عميقًا دون أن يدركن.", full: "ستكتشفين كيف تشكّل هذا الجرح وكيف يؤثر على علاقتك بأنوثتك وقوتك.", transform: "تحرير طاقتك الأنثوية من الألم القديم." },
{ num: 5, title: "أنماط التعلق", preview: "نمط تعلقك يحدد طريقة حبك وخوفك.", full: "ستتعرفين على نمط تعلقك وكيف يتحكم في سلوكك العاطفي، وستتعلمين كيف تنتقلين لنمط آمن.", transform: "الانتقال من تعلق مؤلم إلى تعلق آمن وصحي." },
{ num: 6, title: "المعتقدات الجذرية", preview: "معتقداتك الجذرية عن نفسك تتحكم في حياتك.", full: "سنعمل على كشف وتفكيك المعتقدات المحدودة التي تعيق نموك الحقيقي.", transform: "استبدال المعتقدات السلبية ببرمجة جديدة تخدم حياتك." },
{ num: 7, title: "الحدود الصحية", preview: "وضع الحدود ليس أنانية — بل هو ضرورة.", full: "ستتعلمين كيف تضعين حدودًا صحية في علاقاتك دون خوف أو ذنب.", transform: "القدرة على قول لا بثقة وحب." },
{ num: 8, title: "الذكاء العاطفي", preview: "مشاعرك ليست عدوك — هي بوصلتك.", full: "ستطورين ذكاءك العاطفي لتفهمي مشاعرك وتديريها بوعي.", transform: "تحويل المشاعر من عبء إلى أداة قوة." },
{ num: 9, title: "قيادة الذات", preview: "القيادة الحقيقية تبدأ من الداخل.", full: "ستتعلمين كيف تقودين نفسك قبل أن تقودي أي شيء آخر في حياتك.", transform: "امتلاك زمام حياتك بثقة ووعي." },
{ num: 10, title: "العلاقات الواعية", preview: "العلاقة الصحية تبدأ من الوعي.", full: "ستكتشفين أنماط علاقاتك وتتعلمين كيف تبنين علاقات واعية ومتوازنة.", transform: "بناء علاقات أعمق وأكثر صدقًا." },
{ num: 11, title: "الهدف والمعنى", preview: "حياتك تحتاج معنى أعمق من الروتين اليومي.", full: "ستكتشفين هدفك الحقيقي ورسالتك التي تمنح حياتك اتجاهًا واضحًا.", transform: "اكتشاف رسالتك والعيش بهدف واضح." },
{ num: 12, title: "المايسترا الجديدة", preview: "ها أنتِ الآن — نسخة جديدة تمامًا.", full: "الدورة الأخيرة هي احتفال بتحولك وترسيخ لكل ما تعلمتيه. ستضعين خطتك للمستقبل كمايسترا.", transform: "ترسيخ هويتك الجديدة وقيادة حياتك بثقة." }];


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
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{course.full}</p>
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
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="mb-14">
            <img src={coursePackage} alt="محتوى برنامج المايسترا" className="w-full max-w-4xl mx-auto rounded-2xl shadow-purple-lg" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            تفاصيل الدورات الـ 12
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-5">
          {courses.map((course, i) =>
          <CourseCard key={course.num} course={course} index={i} />
          )}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14">
            <motion.a
              href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
              target="_blank"
              rel="noopener noreferrer"
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
              انضمي الآن وابدأي رحلتك التحولية
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>);

};

export default CoursesSection;