import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const UrgencyNudgeBar = () => {
  const message = "المواعيد محدودة هذا الأسبوع — تُحجز بحسب الأسبقية";

  return (
    <motion.a
      href="#booking"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative block w-full overflow-hidden text-center select-none group"
      style={{
        background:
          "linear-gradient(90deg, hsl(272 45% 30%) 0%, hsl(272 34% 47%) 50%, hsl(272 45% 30%) 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 8s linear infinite",
      }}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("booking")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* sweep overlay */}
      <span
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "linear-gradient(110deg, transparent 35%, hsl(45 95% 75% / 0.18) 50%, transparent 65%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 4s linear infinite",
        }}
        aria-hidden
      />

      <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 text-white text-[13px] md:text-sm font-semibold tracking-wide">
        <Sparkles
          className="w-4 h-4 shrink-0"
          style={{ color: "hsl(45 95% 75%)" }}
          strokeWidth={2.2}
        />
        <span>{message}</span>
        <span
          className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mr-1"
          style={{
            background: "hsl(45 95% 70% / 0.95)",
            color: "hsl(272 50% 22%)",
          }}
        >
          إحجزي الآن
        </span>
      </div>

      {/* gold bottom hairline */}
      <span
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(45 95% 70% / 0.7), transparent)",
        }}
        aria-hidden
      />
    </motion.a>
  );
};

export default UrgencyNudgeBar;
