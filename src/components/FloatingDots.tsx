import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const useParallax = (speed: number) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed]);
  return y;
};

const FloatingDots = () => {
  const y1 = useParallax(-40);
  const y2 = useParallax(-25);
  return (
    <>
      <motion.div style={{ y: y1 }} className="absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-primary/30 float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-primary/20 float-dot-2 pointer-events-none" />
    </>
  );
};

export const FloatingDotsLight = () => {
  const y1 = useParallax(-60);
  const y2 = useParallax(-30);
  const y3 = useParallax(-80);
  const y4 = useParallax(-20);
  const y5 = useParallax(-50);
  const y6 = useParallax(-40);
  return (
    <>
      <motion.div style={{ y: y1 }} className="absolute top-[8%] left-[10%] w-16 h-16 rounded-full bg-primary-foreground/30 blur-xl float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[5%] w-20 h-20 rounded-full bg-primary-foreground/25 blur-2xl float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y3 }} className="absolute bottom-[15%] left-[20%] w-24 h-24 rounded-full bg-primary-foreground/28 blur-2xl float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y4 }} className="absolute top-[55%] left-[5%] w-14 h-14 rounded-full bg-primary-foreground/35 blur-xl float-dot-2 pointer-events-none" />
      <motion.div style={{ y: y5 }} className="absolute bottom-[30%] right-[15%] w-20 h-20 rounded-full bg-primary-foreground/22 blur-3xl float-dot-1 pointer-events-none" />
      <motion.div style={{ y: y6 }} className="absolute top-[15%] right-[25%] w-12 h-12 rounded-full bg-primary-foreground/30 blur-xl float-dot-2 pointer-events-none" />
    </>
  );
};

export default FloatingDots;
