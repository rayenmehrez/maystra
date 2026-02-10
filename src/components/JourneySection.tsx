import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FloatingDots from "./FloatingDots";
import { Heart, Shield, Crown } from "lucide-react";
const months = [{
  num: 1,
  label: "الشهر الأول",
  icon: Heart,
  title: "الشفاء من الجذور",
  desc: "تبدأين بفهم جرح الأب والأم، أنماط التعلق المؤذية، وتفكيك الأنماط القديمة التي تتحكم في حياتك بدون وعيك. هنا يبدأ الوعي الحقيقي.",
  courses: "الدورات 1 إلى 4",
  side: "right" as const
}, {
  num: 2,
  label: "الشهر الثاني",
  icon: Shield,
  title: "بناء الوعي والثقة",
  desc: "تكتشفين قيمك الحقيقية، تتحررين من الخوف، وتبنين حدودًا صحية تحميك. تبدأ كاريزماتك الحقيقية بالظهور ويتغير حضورك بشكل ملحوظ.",
  courses: "الدورات 5 إلى 8",
  side: "left" as const
}, {
  num: 3,
  label: "الشهر الثالث",
  icon: Crown,
  title: "القيادة والتحول الكامل",
  desc: "تعيدين تشكيل علاقاتك، توازنين طاقتك الداخلية، ترسمين خارطة مستقبلك الجديدة، وتستلمين قيادة حياتك بالكامل بثقة ووعي وسلام داخلي.",
  courses: "الدورات 9 إلى 12",
  side: "right" as const
}];
const JourneySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });
  return <section ref={sectionRef} className="relative py-24 md:py-32 bg-lavender overflow-hidden">
      <FloatingDots />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-3xl md:text-5xl font-bold text-center text-foreground mb-20">
          رحلتك خلال 3 أشهر
        </motion.h2>

        {/* Vertical roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-[3px] bg-border rounded-full hidden md:block">
            <motion.div initial={{
            scaleY: 0
          }} animate={isInView ? {
            scaleY: 1
          } : {}} transition={{
            duration: 1.4,
            delay: 0.2,
            ease: "easeOut"
          }} className="w-full h-full rounded-full origin-top" style={{
            background: "linear-gradient(to bottom, hsl(263 70% 58%), hsl(270 60% 75%), hsl(263 70% 58%))"
          }} />
          </div>

          {/* Mobile line on right */}
          <div className="absolute top-0 bottom-0 right-[27px] w-[3px] bg-border rounded-full md:hidden">
            <motion.div initial={{
            scaleY: 0
          }} animate={isInView ? {
            scaleY: 1
          } : {}} transition={{
            duration: 1.4,
            delay: 0.2,
            ease: "easeOut"
          }} className="w-full h-full rounded-full origin-top" style={{
            background: "linear-gradient(to bottom, hsl(263 70% 58%), hsl(270 60% 75%), hsl(263 70% 58%))"
          }} />
          </div>

          <div className="flex flex-col gap-16 py-0 md:gap-0">
            {months.map((month, i) => <RoadmapNode key={month.num} month={month} index={i} isInView={isInView} />)}
          </div>
        </div>
      </div>
    </section>;
};
interface NodeProps {
  month: (typeof months)[number];
  index: number;
  isInView: boolean;
}
const RoadmapNode = ({
  month,
  index,
  isInView
}: NodeProps) => {
  const Icon = month.icon;
  const isRight = month.side === "right";
  return <>
      {/* Desktop zigzag */}
      <div className="hidden md:grid grid-cols-[1fr_56px_1fr] items-center gap-0">
        {/* Right card slot */}
        <motion.div initial={{
        opacity: 0,
        x: isRight ? 60 : 0
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.3
      }} className={isRight ? "" : "invisible"}>
          {isRight && <CardContent month={month} Icon={Icon} />}
        </motion.div>

        {/* Center node */}
        <div className="flex justify-center">
          <motion.div initial={{
          scale: 0,
          opacity: 0
        }} animate={isInView ? {
          scale: 1,
          opacity: 1
        } : {}} transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.3,
          type: "spring",
          stiffness: 200
        }} whileHover={{
          scale: 1.15
        }} className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-purple-lg glow-purple relative z-10">
            {month.num}
          </motion.div>
        </div>

        {/* Left card slot */}
        <motion.div initial={{
        opacity: 0,
        x: !isRight ? -60 : 0
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.3
      }} className={!isRight ? "" : "invisible"}>
          {!isRight && <CardContent month={month} Icon={Icon} />}
        </motion.div>
      </div>

      {/* Mobile vertical */}
      <motion.div initial={{
      opacity: 0,
      x: 20
    }} animate={isInView ? {
      opacity: 1,
      x: 0
    } : {}} transition={{
      duration: 0.5,
      delay: 0.4 + index * 0.25
    }} className="md:hidden flex gap-5 items-start">
        <motion.div initial={{
        scale: 0
      }} animate={isInView ? {
        scale: 1
      } : {}} transition={{
        duration: 0.4,
        delay: 0.3 + index * 0.25,
        type: "spring"
      }} whileHover={{
        scale: 1.12
      }} className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-purple-lg glow-purple flex-shrink-0 relative z-10">
          {month.num}
        </motion.div>
        <div className="flex-1">
          <CardContent month={month} Icon={Icon} />
        </div>
      </motion.div>
    </>;
};
const CardContent = ({
  month,
  Icon
}: {
  month: (typeof months)[number];
  Icon: React.ElementType;
}) => <motion.div whileHover={{
  y: -4,
  boxShadow: "0 12px 36px hsl(263 70% 58% / 0.15)"
}} transition={{
  duration: 0.25
}} className="bg-card rounded-2xl p-6 shadow-purple border border-border/40">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-muted-foreground text-xs font-medium">{month.label}</p>
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{month.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{month.desc}</p>
    <span className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-4 py-1.5">
      {month.courses}
    </span>
  </motion.div>;
export default JourneySection;