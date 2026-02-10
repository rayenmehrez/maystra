import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Gem, BookAudio, UsersRound, Mic, Send, Flame, NotebookPen, GraduationCap } from "lucide-react";

const bonuses = [
  { num: 1, icon: BookAudio, title: "كتاب PDF + Audio", desc: "نسختين من كتابي الجديد (كيف تقتل نجاحك)" },
  { num: 2, icon: UsersRound, title: "3 جلسات متابعة جماعية مع عبير", desc: "90 دقيقة/شهر" },
  { num: 3, icon: Mic, title: "ورشة 90 دقيقة", desc: "عندما تتوقف عن المعاناة… وتبدأ القيادة" },
  { num: 4, icon: Send, title: "قناة تليغرام لمدة 3 أشهر", desc: "تواصل ودعم مستمر" },
  { num: 5, icon: Flame, title: "Maestra Micro Practices", desc: "12 ممارسة يومية" },
  { num: 6, icon: NotebookPen, title: "دفتر المايسترا", desc: "Digital Journal" },
  { num: 7, icon: Gem, title: "كتيب 100 يوم Stress Free", desc: "دليلك للتخلص من التوتر" },
  { num: 8, icon: GraduationCap, title: "شهادة Maestra Leadership", desc: "شهادة إتمام البرنامج" },
];

const BonusesSection = () => {
  return (
    <section className="relative py-24 bg-lavender overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gem className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
              الهدايا الإضافية عند الانضمام الآن
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 16px 40px hsl(263 70% 58% / 0.18)" }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl overflow-hidden shadow-purple flex flex-col border border-border/40"
              >
                {/* Compact header */}
                <div className="gradient-pricing px-4 py-3 flex items-center gap-2.5">
                  <bonus.icon className="w-4 h-4 text-primary-foreground" />
                  <span className="text-primary-foreground text-[11px] font-bold tracking-wider uppercase">
                    هدية {bonus.num}
                  </span>
                </div>

                {/* Content */}
                <div className="px-4 py-4">
                  <h3 className="text-sm font-bold text-foreground mb-1.5 leading-snug">{bonus.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{bonus.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
