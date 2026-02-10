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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {bonuses.map((bonus, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <div className="bg-card rounded-2xl p-6 shadow-purple hover:shadow-purple-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{bonus.num}</span>
                  </div>
                  <bonus.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
