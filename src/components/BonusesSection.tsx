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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px hsl(263 70% 58% / 0.25)" }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-2xl overflow-hidden shadow-purple-lg flex flex-col border border-border/30 p-6 pt-8 text-center h-full group"
              >
                {/* Purple light glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,hsl(263_70%_58%/0.12)_0%,transparent_70%)]" />

                {/* Badge top-right */}
                <span className="absolute top-3 right-3 z-20 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full">
                  هدية {bonus.num}
                </span>

                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-base font-extrabold text-foreground mb-2 leading-snug">
                  {bonus.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                  {bonus.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
