import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Check, BookOpen, Users, Video, Layout, ArrowDownUp, Sprout, UserCheck, Gift } from "lucide-react";

const items = [
  { icon: BookOpen, text: "12 دورة عميقة وفعالة" },
  { icon: Sprout, text: "تمارين بسيطة لكنها فعّالة" },
  { icon: Users, text: "مجتمع دعم صحّي وملهم" },
  { icon: Video, text: "تسجيلات مدى الحياة" },
  { icon: Layout, text: "منهج متسلسل بوعي وترتيب دقيق" },
  { icon: ArrowDownUp, text: "انتقال تدريجي من جرح… إلى وعي… إلى قيادة جديدة" },
  { icon: UserCheck, text: "متابعة شخصية مع المدربة عبير" },
  { icon: Gift, text: "مواد إضافية تعزز رحلتك التحولية" },
];

const WhatYouGetSection = () => {
  return (
    <section className="relative bg-card overflow-hidden py-[40px] mt-10">
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
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 30px hsl(263 70% 58% / 0.18)" }}
                transition={{ duration: 0.3 }}
                className="relative flex items-start gap-4 p-6 rounded-2xl bg-accent/40 border border-border/30 overflow-hidden group cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,hsl(263_70%_58%/0.08)_0%,transparent_70%)]" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 pt-1">
                  <p className="text-foreground font-semibold text-lg leading-relaxed">{item.text}</p>
                </div>

                {/* Check mark */}
                <div className="relative z-10 w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1.5">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatYouGetSection;