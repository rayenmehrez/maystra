import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "ما هو منهج المايسترا بالضبط؟", a: "منهج المايسترا هو رحلة تحوّل داخلي شاملة تتكوّن من 12 دورة تدريبية مصممة خصيصًا للمرأة. يبدأ من شفاء الجروح العميقة وينتهي بقيادة حياتك بوعي وثقة كاملة." },
  { q: "هل المنهج مناسب لي إذا لم أجرب الكوتشنج من قبل؟", a: "بالتأكيد! المنهج مصمم لكل امرأة ترغب في التغيير، سواء كانت مبتدئة أو لديها خبرة سابقة. كل دورة تأخذك خطوة بخطوة بطريقة واضحة وعملية." },
  { q: "كم المدة التي أحتاجها لإكمال المنهج؟", a: "يمكنك السير بالسرعة التي تناسبك. التسجيلات متاحة مدى الحياة، لكن ننصح بتخصيص 3-6 أشهر للحصول على أفضل نتائج مع التطبيق العملي." },
  { q: "هل يوجد متابعة شخصية مع عبير؟", a: "نعم! المنهج يتضمن متابعة شخصية مع الكوتش عبير المطوق لضمان حصولك على الدعم اللازم خلال رحلتك التحولية." },
  { q: "ماذا لو لم يناسبني المنهج؟", a: "نقدم ضمان استرداد خلال 7 أيام من التسجيل. إذا شعرتِ أن المنهج لا يناسبك، يمكنك استرداد مبلغك بالكامل دون أي أسئلة." },
  { q: "هل يمكنني الدفع بالتقسيط؟", a: "نعم! نوفر خيار الدفع على دفعتين بقيمة $599.5 لكل دفعة، بدون أي زيادة في السعر. ادفعي 50% الآن والباقي قبل بداية البرنامج." },
  { q: "هل التسجيلات متاحة للمشاهدة في أي وقت؟", a: "نعم، جميع التسجيلات متاحة مدى الحياة. يمكنك مشاهدتها وإعادة مشاهدتها في أي وقت يناسبك من أي مكان." },
  { q: "ما هي الهدايا الحصرية المضمّنة؟", a: "تحصلين على 8 هدايا حصرية تشمل أدوات عملية، تمارين تأملية، ومواد إضافية مصممة لتعزيز تجربتك التحولية مع كل دورة." },
];

const FAQSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-lavender overflow-hidden">
      <FloatingDots variant={0} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-14">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-3">
              أسئلة شائعة
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              كل ما تحتاجين معرفته قبل الانضمام
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -2, boxShadow: "0 12px 32px hsl(263 70% 58% / 0.12)" }}
                transition={{ duration: 0.2 }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="bg-card rounded-2xl border border-border/40 shadow-sm px-6 overflow-hidden group data-[state=open]:border-primary/20 data-[state=open]:shadow-purple-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-bold text-foreground hover:no-underline py-5 gap-4">
                      <div className="flex items-center gap-3 text-right">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors duration-300">
                          {i + 1}
                        </span>
                        <span>{faq.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 pr-11">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-4">لم تجدي إجابة سؤالك؟</p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              تواصلي معنا
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;