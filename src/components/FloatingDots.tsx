import { motion, useScroll, useTransform } from "framer-motion";

const useParallax = (speed: number) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, speed]);
  return y;
};

const pulse = (dur: number, min = 0.2) => ({
  animate: { opacity: [min, 1, min], scale: [0.85, 1.15, 0.85] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const },
});

const dotSets: Record<number, { top: string; left?: string; right?: string; size: string; opacity: string; blur: string; speed: number; dur: number; min: number; anim: string }[]> = {
  0: [
    { top: "12%", right: "8%", size: "w-4 h-4", opacity: "30", blur: "2px", speed: -40, dur: 5, min: 0.15, anim: "float-dot-1" },
    { top: "50%", left: "10%", size: "w-3 h-3", opacity: "25", blur: "1px", speed: -25, dur: 7, min: 0.1, anim: "float-dot-2" },
    { top: "30%", left: "45%", size: "w-2.5 h-2.5", opacity: "35", blur: "1px", speed: -55, dur: 4.5, min: 0.2, anim: "float-dot-1" },
    { top: "70%", right: "30%", size: "w-3.5 h-3.5", opacity: "20", blur: "2px", speed: -35, dur: 6, min: 0.15, anim: "float-dot-2" },
    { top: "85%", right: "20%", size: "w-2 h-2", opacity: "30", blur: "1px", speed: -60, dur: 5.5, min: 0.12, anim: "float-dot-1" },
  ],
  1: [
    { top: "8%", left: "15%", size: "w-3 h-3", opacity: "25", blur: "1px", speed: -50, dur: 6, min: 0.18, anim: "float-dot-2" },
    { top: "35%", right: "12%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -30, dur: 4, min: 0.12, anim: "float-dot-1" },
    { top: "60%", left: "40%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -65, dur: 7.5, min: 0.2, anim: "float-dot-2" },
    { top: "20%", right: "45%", size: "w-3.5 h-3.5", opacity: "25", blur: "2px", speed: -40, dur: 5, min: 0.15, anim: "float-dot-1" },
    { top: "80%", left: "25%", size: "w-2.5 h-2.5", opacity: "30", blur: "1px", speed: -55, dur: 6.5, min: 0.1, anim: "float-dot-2" },
  ],
  2: [
    { top: "15%", right: "20%", size: "w-2.5 h-2.5", opacity: "30", blur: "2px", speed: -45, dur: 5.5, min: 0.15, anim: "float-dot-1" },
    { top: "45%", left: "8%", size: "w-3 h-3", opacity: "20", blur: "1px", speed: -35, dur: 6, min: 0.2, anim: "float-dot-2" },
    { top: "70%", right: "40%", size: "w-4 h-4", opacity: "25", blur: "2px", speed: -60, dur: 4.5, min: 0.1, anim: "float-dot-1" },
    { top: "25%", left: "35%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -25, dur: 7, min: 0.18, anim: "float-dot-2" },
    { top: "88%", left: "50%", size: "w-3.5 h-3.5", opacity: "20", blur: "2px", speed: -50, dur: 5, min: 0.12, anim: "float-dot-1" },
  ],
  3: [
    { top: "10%", left: "30%", size: "w-3.5 h-3.5", opacity: "25", blur: "2px", speed: -55, dur: 4, min: 0.15, anim: "float-dot-2" },
    { top: "40%", right: "15%", size: "w-2 h-2", opacity: "30", blur: "1px", speed: -30, dur: 6.5, min: 0.2, anim: "float-dot-1" },
    { top: "65%", left: "20%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -45, dur: 5.5, min: 0.1, anim: "float-dot-2" },
    { top: "82%", right: "35%", size: "w-3 h-3", opacity: "35", blur: "1px", speed: -65, dur: 7, min: 0.18, anim: "float-dot-1" },
    { top: "5%", right: "50%", size: "w-2.5 h-2.5", opacity: "25", blur: "1px", speed: -40, dur: 4.5, min: 0.12, anim: "float-dot-2" },
  ],
  4: [
    { top: "18%", right: "10%", size: "w-3 h-3", opacity: "30", blur: "1px", speed: -50, dur: 5, min: 0.15, anim: "float-dot-1" },
    { top: "55%", left: "15%", size: "w-2.5 h-2.5", opacity: "25", blur: "2px", speed: -35, dur: 7, min: 0.2, anim: "float-dot-2" },
    { top: "75%", left: "42%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -60, dur: 4, min: 0.1, anim: "float-dot-1" },
    { top: "30%", right: "38%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -25, dur: 6, min: 0.18, anim: "float-dot-2" },
    { top: "90%", right: "22%", size: "w-3.5 h-3.5", opacity: "20", blur: "2px", speed: -45, dur: 5.5, min: 0.12, anim: "float-dot-1" },
  ],
  5: [
    { top: "7%", left: "22%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -40, dur: 6.5, min: 0.15, anim: "float-dot-2" },
    { top: "38%", right: "25%", size: "w-3.5 h-3.5", opacity: "20", blur: "2px", speed: -55, dur: 4.5, min: 0.2, anim: "float-dot-1" },
    { top: "62%", left: "5%", size: "w-3 h-3", opacity: "30", blur: "1px", speed: -30, dur: 7, min: 0.1, anim: "float-dot-2" },
    { top: "80%", right: "42%", size: "w-4 h-4", opacity: "25", blur: "2px", speed: -65, dur: 5, min: 0.18, anim: "float-dot-1" },
    { top: "22%", left: "48%", size: "w-2.5 h-2.5", opacity: "30", blur: "1px", speed: -50, dur: 6, min: 0.12, anim: "float-dot-2" },
  ],
  6: [
    { top: "14%", right: "32%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -45, dur: 5.5, min: 0.15, anim: "float-dot-1" },
    { top: "48%", left: "28%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -60, dur: 4, min: 0.2, anim: "float-dot-2" },
    { top: "72%", right: "8%", size: "w-3 h-3", opacity: "25", blur: "1px", speed: -35, dur: 7.5, min: 0.1, anim: "float-dot-1" },
    { top: "28%", left: "12%", size: "w-3.5 h-3.5", opacity: "30", blur: "2px", speed: -50, dur: 6, min: 0.18, anim: "float-dot-2" },
    { top: "85%", left: "38%", size: "w-2.5 h-2.5", opacity: "20", blur: "1px", speed: -25, dur: 5, min: 0.12, anim: "float-dot-1" },
  ],
  7: [
    { top: "5%", right: "18%", size: "w-3 h-3", opacity: "25", blur: "1px", speed: -55, dur: 6, min: 0.15, anim: "float-dot-2" },
    { top: "42%", left: "35%", size: "w-2.5 h-2.5", opacity: "30", blur: "2px", speed: -40, dur: 4.5, min: 0.2, anim: "float-dot-1" },
    { top: "68%", right: "45%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -30, dur: 7, min: 0.1, anim: "float-dot-2" },
    { top: "20%", left: "50%", size: "w-2 h-2", opacity: "35", blur: "1px", speed: -65, dur: 5, min: 0.18, anim: "float-dot-1" },
    { top: "90%", right: "15%", size: "w-3.5 h-3.5", opacity: "25", blur: "2px", speed: -45, dur: 5.5, min: 0.12, anim: "float-dot-2" },
  ],
  8: [
    { top: "10%", left: "8%", size: "w-3.5 h-3.5", opacity: "30", blur: "2px", speed: -50, dur: 5, min: 0.15, anim: "float-dot-1" },
    { top: "52%", right: "20%", size: "w-2 h-2", opacity: "25", blur: "1px", speed: -35, dur: 6.5, min: 0.2, anim: "float-dot-2" },
    { top: "78%", left: "32%", size: "w-3 h-3", opacity: "35", blur: "1px", speed: -60, dur: 4, min: 0.1, anim: "float-dot-1" },
    { top: "33%", right: "48%", size: "w-4 h-4", opacity: "20", blur: "2px", speed: -25, dur: 7, min: 0.18, anim: "float-dot-2" },
    { top: "88%", left: "45%", size: "w-2.5 h-2.5", opacity: "30", blur: "1px", speed: -45, dur: 5.5, min: 0.12, anim: "float-dot-1" },
  ],
};

const DotElement = ({ dot }: { dot: typeof dotSets[0][0] }) => {
  const y = useParallax(dot.speed);
  const posStyle: React.CSSProperties = { top: dot.top };
  if (dot.left) posStyle.left = dot.left;
  if (dot.right) posStyle.right = dot.right;
  return (
    <motion.div
      style={{ y, filter: `blur(${dot.blur})`, backgroundColor: `hsl(var(--primary) / 0.${dot.opacity})`, ...posStyle }}
      {...pulse(dot.dur, dot.min)}
      className={`absolute ${dot.size} rounded-full ${dot.anim} pointer-events-none`}
    />
  );
};

/** Purple dots for light-background sections — each variant has unique positions */
const FloatingDots = ({ variant = 0 }: { variant?: number }) => {
  const dots = dotSets[variant % Object.keys(dotSets).length];
  return (
    <>
      {dots.map((dot, i) => (
        <DotElement key={i} dot={dot} />
      ))}
    </>
  );
};

/** Light dots for dark/purple-background sections (hero, pricing) */
export const FloatingDotsLight = () => {
  const y1 = useParallax(-60);
  const y2 = useParallax(-30);
  const y3 = useParallax(-80);
  const y4 = useParallax(-20);
  const y5 = useParallax(-50);
  const y6 = useParallax(-40);
  const y7 = useParallax(-45);
  const y8 = useParallax(-65);
  const y9 = useParallax(-35);
  const y10 = useParallax(-55);
  const y11 = useParallax(-25);
  const y12 = useParallax(-70);
  return (
    <>
      <motion.div style={{ y: y1 }} {...pulse(4)} className="absolute top-[8%] left-[10%] w-5 h-5 rounded-full bg-primary-foreground/50 blur-[2px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y2 }} {...pulse(6, 0.3)} className="absolute top-[30%] right-[5%] w-3 h-3 rounded-full bg-primary-foreground/40 blur-[1px] float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y3 }} {...pulse(5)} className="absolute bottom-[15%] left-[20%] w-4 h-4 rounded-full bg-primary-foreground/45 blur-[2px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y4 }} {...pulse(7, 0.25)} className="absolute top-[55%] left-[5%] w-2.5 h-2.5 rounded-full bg-primary-foreground/55 blur-[1px] float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y5 }} {...pulse(4.5, 0.3)} className="absolute bottom-[30%] right-[15%] w-3.5 h-3.5 rounded-full bg-primary-foreground/35 blur-[2px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y6 }} {...pulse(6.5)} className="absolute top-[15%] right-[25%] w-2 h-2 rounded-full bg-primary-foreground/50 blur-[1px] float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y7 }} {...pulse(5.5, 0.25)} className="absolute top-[22%] left-[40%] w-2 h-2 rounded-full bg-primary-foreground/35 blur-[1px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y8 }} {...pulse(3.5)} className="absolute top-[45%] right-[30%] w-3 h-3 rounded-full bg-primary-foreground/30 blur-[1px] float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y9 }} {...pulse(7.5, 0.3)} className="absolute bottom-[25%] left-[45%] w-2.5 h-2.5 rounded-full bg-primary-foreground/40 blur-[2px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y10 }} {...pulse(4.8)} className="absolute top-[70%] right-[40%] w-2 h-2 rounded-full bg-primary-foreground/45 blur-[1px] float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y11 }} {...pulse(6, 0.15)} className="absolute top-[5%] right-[50%] w-3 h-3 rounded-full bg-primary-foreground/30 blur-[2px] float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y12 }} {...pulse(5.2)} className="absolute bottom-[10%] right-[8%] w-4 h-4 rounded-full bg-primary-foreground/35 blur-[2px] float-dot-2 pointer-events-none" />
    </>
  );
};

export default FloatingDots;
