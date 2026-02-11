import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { ChevronDown } from "lucide-react";

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
      <div className="bg-card rounded-2xl shadow-purple hover:shadow-purple-lg transition-all duration-300 overflow-hidden border-r-4 border-primary">
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-lg">{course.num}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{course.preview}</p>

              <AnimatePresence>
                {expanded &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden">

                    <p className="text-muted-foreground mt-3 leading-relaxed">{course.full}</p>
                    <div className="mt-4 p-4 bg-accent rounded-xl">
                      <p className="text-accent-foreground font-semibold">
                        <span className="text-primary">التحوّل:</span> {course.transform}
                      </p>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 flex items-center gap-1 text-primary font-semibold hover:opacity-80 transition-opacity">

                {expanded ? "إخفاء" : "المزيد"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>);

};

const CoursesSection = () => {
  return (
    <section className="relative py-24 bg-lavender-mid overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
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
          









        </AnimatedSection>
      </div>
    </section>);

};

export default CoursesSection;