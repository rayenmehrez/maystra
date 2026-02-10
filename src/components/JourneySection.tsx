import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FloatingDots from "./FloatingDots";
import { Heart, Shield, Crown } from "lucide-react";

const months = [
  {
    num: 1,
    label: "الشهر الأول",
    icon: Heart,
    title: "الشفاء من الجذور",
    desc: "تبدأين بفهم جرح الأب والأم، أنماط التعلق المؤذية، وتفكيك الأنماط القديمة التي تتحكم في حياتك بدون وعيك. هنا يبدأ الوعي الحقيقي.",
    courses: "الدورات 1 إلى 4",
  },
  {
    num: 2,
    label: "الشهر الثاني",
    icon: Shield,
    title: "بناء الوعي والثقة",
    desc: "تكتشفين قيمك الحقيقية، تتحررين من الخوف، وتبنين حدودًا صحية تحميك. تبدأ كاريزماتك الحقيقية بالظهور ويتغير حضورك بشكل ملحوظ.",
    courses: "الدورات 5 إلى 8",
  },
  {
    num: 3,
    label: "الشهر الثالث",
    icon: Crown,
    title: "القيادة والتحول الكامل",
    desc: "تعيدين تشكيل علاقاتك، توازنين طاقتك الداخلية، ترسمين خارطة مستقبلك الجديدة، وتستلمين قيادة حياتك بالكامل بثقة ووعي وسلام داخلي.",
    courses: "الدورات 9 إلى 12",
  },
];

const JourneySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-lavender overflow-hidden">
      <FloatingDots />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground mb-20"
        >
          رحلتك خلال 3 أشهر
        </motion.h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-[28px] right-[60px] left-[60px] h-[3px] bg-border rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="h-full rounded-full origin-right"
                style={{ background: "linear-gradient(to left, hsl(263 70% 58%), hsl(270 60% 75%))" }}
              />
            </div>

            {/* Nodes */}
            <div className="grid grid-cols-3 gap-8">
              {months.map((month, i) => (
                <TimelineNode key={month.num} month={month} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical line on right */}
          <div className="absolute top-0 bottom-0 right-[27px] w-[3px] bg-border rounded-full">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="w-full rounded-full origin-top"
              style={{
                height: "100%",
                background: "linear-gradient(to bottom, hsl(263 70% 58%), hsl(270 60% 75%))",
              }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {months.map((month, i) => (
              <TimelineNodeMobile key={month.num} month={month} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface NodeProps {
  month: (typeof months)[number];
  index: number;
  isInView: boolean;
}

const TimelineNode = ({ month, index, isInView }: NodeProps) => {
  const Icon = month.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.25 }}
      className="flex flex-col items-center text-center"
    >
      {/* Circle node */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-purple-lg glow-purple mb-6 relative z-10"
      >
        {month.num}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="bg-card rounded-2xl p-6 shadow-purple w-full"
      >
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <p className="text-muted-foreground text-xs font-medium mb-1">{month.label}</p>
        <h3 className="text-lg font-bold text-foreground mb-3">{month.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{month.desc}</p>
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-4 py-1.5">
          {month.courses}
        </span>
      </motion.div>
    </motion.div>
  );
};

const TimelineNodeMobile = ({ month, index, isInView }: NodeProps) => {
  const Icon = month.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.25 }}
      className="flex gap-5 items-start"
    >
      {/* Circle node */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-purple-lg glow-purple flex-shrink-0 relative z-10"
      >
        {month.num}
      </motion.div>

      {/* Card */}
      <div className="bg-card rounded-2xl p-5 shadow-purple flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <p className="text-muted-foreground text-xs font-medium">{month.label}</p>
        </div>
        <h3 className="text-base font-bold text-foreground mb-2">{month.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{month.desc}</p>
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1">
          {month.courses}
        </span>
      </div>
    </motion.div>
  );
};

export default JourneySection;
