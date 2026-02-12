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

/** Dark dots for light-background sections */
const FloatingDots = () => {
  const y1 = useParallax(-40);
  const y2 = useParallax(-25);
  return (
    <>
      <motion.div style={{ y: y1 }} {...pulse(5, 0.1)} className="absolute top-[12%] right-[8%] w-14 h-14 rounded-full bg-primary/15 blur-xl float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y2 }} {...pulse(7, 0.08)} className="absolute bottom-[18%] left-[10%] w-16 h-16 rounded-full bg-primary/12 blur-2xl float-dot-2 pointer-events-none" />
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
