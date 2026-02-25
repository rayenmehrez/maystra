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
{ icon: UserCheck, text: "متابعة شخصية مع المدربة عبير المعتوق" },
{ icon: Gift, text: "مواد إضافية تعزز رحلتك التحولية" }];


const WhatYouGetSection = () => {
  return (
    <section className="relative bg-card overflow-hidden mt-10 py-[80px]">
      <FloatingDots variant={5} />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            ماللذي ستحصلين عليه خلال رحلتك؟
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {items.map((item, i) =>
          <AnimatedSection key={i} delay={0.05 * i}>
              <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
              className="relative flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/40 overflow-hidden group cursor-default shadow-purple hover:shadow-purple-lg transition-shadow duration-300">

                {/* Animated gradient border top */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-l from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,hsl(263_70%_58%/0.08)_0%,transparent_70%)]" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 pt-2">
                  <p className="text-foreground font-bold text-lg leading-relaxed">{item.text}</p>
                </div>

                {/* Check mark */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-accent border border-primary/20 flex items-center justify-center flex-shrink-0 mt-2 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </motion.div>
            </AnimatedSection>
          )}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <motion.a
              href="https://calendly.com/carolromhein"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              إحجزي إستشارتك المجانية الأن
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>);

};
export default WhatYouGetSection;