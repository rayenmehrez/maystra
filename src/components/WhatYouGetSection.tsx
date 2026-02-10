import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Check } from "lucide-react";

const items = [
  "12 دورة عميقة وفعالة",
  "تمارين بسيطة لكنها فعّالة",
  "مجتمع دعم صحّي وملهم",
  "تسجيلات مدى الحياة",
  "منهج متسلسل بوعي وترتيب دقيق",
  "انتقال تدريجي من جرح… إلى وعي… إلى قيادة جديدة",
  "متابعة شخصية مع المدربة عبير",
  "مواد إضافية تعزز رحلتك التحولية",
];

const WhatYouGetSection = () => {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            ماللذي ستحصلين عليه خلال رحلتك؟
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
