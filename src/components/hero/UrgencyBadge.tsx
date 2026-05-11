import { motion } from "framer-motion";
import { useLimitedSeats } from "@/hooks/useLimitedSeats";

const UrgencyBadge = () => {
  const seats = useLimitedSeats();

  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0 0 hsl(45 80% 65% / 0)",
          "0 0 24px 4px hsl(45 80% 65% / 0.35)",
          "0 0 0 0 hsl(45 80% 65% / 0)",
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex items-center gap-2 mb-4 rounded-full p-[1.5px]"
      style={{
        background:
          "linear-gradient(120deg, hsl(45 80% 70%), hsl(280 50% 75%), hsl(45 80% 70%))",
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite",
      }}
    >
      <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span>الأماكن محدودة — تبقى فقط</span>
        <motion.span
          key={seats}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="font-extrabold text-amber-200 mx-0.5"
        >
          {seats}
        </motion.span>
        <span>مقاعد لهذا الأسبوع</span>
      </div>
    </motion.div>
  );
};

export default UrgencyBadge;
