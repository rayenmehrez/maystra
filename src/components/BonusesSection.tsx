import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Gift, BookOpen, Users, MessageCircle, Zap, NotebookPen, Heart, Award } from "lucide-react";

const bonuses = [
  { num: 1, icon: BookOpen, title: "كتاب PDF + Audio", desc: "نسختين من كتابي الجديد (كيف تقتل نجاحك)" },
  { num: 2, icon: Users, title: "3 جلسات متابعة جماعية مع عبير", desc: "90 دقيقة/شهر" },
  { num: 3, icon: Zap, title: "ورشة 90 دقيقة", desc: "عندما تتوقف عن المعاناة… وتبدأ القيادة" },
  { num: 4, icon: MessageCircle, title: "قناة تليغرام لمدة 3 أشهر", desc: "تواصل ودعم مستمر" },
  { num: 5, icon: Heart, title: "Maestra Micro Practices", desc: "12 ممارسة يومية" },
  { num: 6, icon: NotebookPen, title: "دفتر المايسترا", desc: "Digital Journal" },
  { num: 7, icon: BookOpen, title: "كتيب 100 يوم Stress Free", desc: "دليلك للتخلص من التوتر" },
  { num: 8, icon: Award, title: "شهادة Maestra Leadership", desc: "شهادة إتمام البرنامج" },
];

const BonusesSection = () => {
  return (
    <section className="relative py-24 bg-lavender overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
              الهدايا الإضافية عند الانضمام الآن
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 max-w-6xl mx-auto">
          {bonuses.map((bonus, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 36px hsl(263 70% 58% / 0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-purple border-t-4 border-primary flex flex-col h-[280px]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <bonus.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1 w-fit mb-3">
                  BONUS {bonus.num}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">{bonus.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
