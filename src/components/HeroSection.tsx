import { motion } from "framer-motion";
import { FloatingDotsLight } from "./FloatingDots";

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <FloatingDotsLight />
      <motion.div
        className="container mx-auto px-6 py-20 text-center text-primary-foreground relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          منهج مايسترا
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
        >
          رحلة التحول الداخلي من جذورك… إلى قيادة حياتك بوعي وسلام داخلي
        </motion.p>

        {/* VSL Video Placeholder */}
        <motion.div
          variants={childVariants}
          className="max-w-3xl mx-auto mb-12 relative"
        >
          {/* Rotating border light */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 animate-[spin_6s_linear_infinite]"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 85%, hsl(0 0% 100% / 0.9) 92%, transparent 100%)",
              }}
            />
          </div>
          {/* Inner bg to mask the gradient behind content */}
          <div className="absolute inset-[2px] rounded-[14px] gradient-hero" />

          <div className="relative aspect-video rounded-2xl bg-foreground/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <button className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-primary-foreground/30">
              <svg className="w-8 h-8 text-primary-foreground mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <a
            href="#pricing"
            className="inline-block bg-primary-foreground text-primary font-bold text-lg md:text-xl px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-purple-lg"
          >
            انضمي الآن وابدأي رحلتك التحولية
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
