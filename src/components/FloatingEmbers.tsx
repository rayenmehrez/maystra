import { motion, useScroll, useTransform } from "framer-motion";

const useParallax = (speed: number) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, speed]);
  return y;
};

interface Ember {
  top: string;
  left?: string;
  right?: string;
  size: number;
  hue: number; // gold/amber/lavender hues
  speed: number;
  dur: number;
  delay: number;
}

const embers: Ember[] = [
  { top: "8%", left: "12%", size: 6, hue: 45, speed: -70, dur: 5.5, delay: 0 },
  { top: "18%", right: "15%", size: 4, hue: 40, speed: -55, dur: 4, delay: 0.6 },
  { top: "28%", left: "32%", size: 5, hue: 50, speed: -90, dur: 6, delay: 1.2 },
  { top: "12%", right: "38%", size: 3, hue: 280, speed: -45, dur: 5, delay: 0.3 },
  { top: "40%", left: "8%", size: 7, hue: 45, speed: -65, dur: 4.5, delay: 1.5 },
  { top: "48%", right: "22%", size: 4, hue: 35, speed: -80, dur: 5.8, delay: 0.9 },
  { top: "55%", left: "45%", size: 5, hue: 45, speed: -50, dur: 4.2, delay: 1.8 },
  { top: "62%", right: "48%", size: 3, hue: 290, speed: -75, dur: 6.2, delay: 0.4 },
  { top: "70%", left: "18%", size: 6, hue: 40, speed: -60, dur: 5, delay: 2.1 },
  { top: "78%", right: "12%", size: 4, hue: 50, speed: -85, dur: 4.8, delay: 1.1 },
  { top: "85%", left: "35%", size: 5, hue: 45, speed: -70, dur: 5.5, delay: 0.7 },
  { top: "90%", right: "30%", size: 3, hue: 280, speed: -55, dur: 4.5, delay: 1.6 },
  { top: "22%", left: "60%", size: 4, hue: 45, speed: -65, dur: 5, delay: 2.4 },
  { top: "36%", right: "55%", size: 5, hue: 40, speed: -75, dur: 6, delay: 0.2 },
  { top: "66%", left: "70%", size: 3, hue: 50, speed: -50, dur: 4.4, delay: 1.3 },
  { top: "82%", right: "62%", size: 6, hue: 45, speed: -90, dur: 5.7, delay: 0.5 },
];

const EmberElement = ({ ember }: { ember: Ember }) => {
  const y = useParallax(ember.speed);
  const posStyle: React.CSSProperties = { top: ember.top };
  if (ember.left) posStyle.left = ember.left;
  if (ember.right) posStyle.right = ember.right;
  const lightness = ember.hue > 100 ? 78 : 70;
  return (
    <motion.div
      style={{
        y,
        width: `${ember.size}px`,
        height: `${ember.size}px`,
        background: `radial-gradient(circle, hsl(${ember.hue} 95% ${lightness}% / 1) 0%, hsl(${ember.hue} 95% ${lightness}% / 0.4) 50%, transparent 100%)`,
        boxShadow: `0 0 ${ember.size * 2}px hsl(${ember.hue} 95% ${lightness}% / 0.8), 0 0 ${ember.size * 4}px hsl(${ember.hue} 95% ${lightness}% / 0.4)`,
        ...posStyle,
      }}
      animate={{
        opacity: [0.2, 1, 0.4, 0.9, 0.2],
        scale: [0.6, 1.3, 0.9, 1.4, 0.6],
        x: [0, 4, -3, 2, 0],
      }}
      transition={{
        duration: ember.dur,
        delay: ember.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full pointer-events-none"
    />
  );
};

/** Golden firefly / fire-spark embers — for dark purple backgrounds */
const FloatingEmbers = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {embers.map((e, i) => (
        <EmberElement key={i} ember={e} />
      ))}
    </div>
  );
};

export default FloatingEmbers;
