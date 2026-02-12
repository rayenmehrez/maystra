import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  q: "ما هو منهج المايسترا بالضبط؟",
  a: "منهج المايسترا هو رحلة تحوّل داخلي شاملة تتكوّن من 12 دورة تدريبية مصممة خصيصًا للمرأة. يبدأ من شفاء الجروح العميقة وينتهي بقيادة حياتك بوعي وثقة كاملة."
}, {
  q: "هل المنهج مناسب لي إذا لم أجرب الكوتشنج من قبل؟",
  a: "بالتأكيد! المنهج مصمم لكل امرأة ترغب في التغيير، سواء كانت مبتدئة أو لديها خبرة سابقة. كل دورة تأخذك خطوة بخطوة بطريقة واضحة وعملية."
}, {
  q: "كم المدة التي أحتاجها لإكمال المنهج؟",
  a: "يمكنك السير بالسرعة التي تناسبك. التسجيلات متاحة مدى الحياة، لكن ننصح بتخصيص 3-6 أشهر للحصول على أفضل نتائج مع التطبيق العملي."
}, {
  q: "هل يوجد متابعة شخصية مع عبير؟",
  a: "نعم! المنهج يتضمن متابعة شخصية مع الكوتش عبير المطوق لضمان حصولك على الدعم اللازم خلال رحلتك التحولية."
}, {
  q: "ماذا لو لم يناسبني المنهج؟",
  a: "نقدم ضمان استرداد خلال 7 أيام من التسجيل. إذا شعرتِ أن المنهج لا يناسبك، يمكنك استرداد مبلغك بالكامل دون أي أسئلة."
}, {
  q: "هل يمكنني الدفع بالتقسيط؟",
  a: "نعم! نوفر خيار الدفع على دفعتين بقيمة $599.5 لكل دفعة، بدون أي زيادة في السعر. ادفعي 50% الآن والباقي قبل بداية البرنامج."
}, {
  q: "هل التسجيلات متاحة للمشاهدة في أي وقت؟",
  a: "نعم، جميع التسجيلات متاحة مدى الحياة. يمكنك مشاهدتها وإعادة مشاهدتها في أي وقت يناسبك من أي مكان."
}, {
  q: "ما هي الهدايا الحصرية المضمّنة؟",
  a: "تحصلين على 8 هدايا حصرية تشمل أدوات عملية، تمارين تأملية، ومواد إضافية مصممة لتعزيز تجربتك التحولية مع كل دورة."
}];
const FAQSection = () => {
  return <section className="relative py-20 md:py-28 bg-lavender overflow-hidden">
      <FloatingDots variant={0} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-4">
            أسئلة شائعة
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto">
            كل ما تحتاجين معرفته قبل الانضمام
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border shadow-purple px-6 data-[state=open]:shadow-purple-lg transition-shadow">
                  <AccordionTrigger className="text-base md:text-lg font-bold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </AnimatedSection>

        
      </div>
    </section>;
};
export default FAQSection;