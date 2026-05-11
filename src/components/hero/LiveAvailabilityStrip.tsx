import { motion } from "framer-motion";
import { useLimitedSeats } from "@/hooks/useLimitedSeats";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const LiveAvailabilityStrip = ({ hours, minutes, seconds }: Props) => {
  const seats = useLimitedSeats();

  const items = [
    {
      icon: (
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
      ),
      label: "استشارة مجانية متاحة الآن",
    },
    {
      icon: <span className="text-amber-300 text-base leading-none">🪑</span>,
      label: (
        <>
          تبقى{" "}
          <motion.span
            key={seats}
            initial={{ scale: 1.3, color: "#fbbf24" }}
            animate={{ scale: 1, color: "#fde68a" }}
            transition={{ duration: 0.4 }}
            className="font-bold mx-1"
          >
            {seats}
          </motion.span>{" "}
          مقاعد لهذا الأسبوع
        </>
      ),
    },
    {
      icon: <span className="text-amber-300 text-base leading-none">⏳</span>,
      label: (
        <span dir="ltr" className="inline-flex items-center gap-1.5">
          <span className="font-mono tabular-nums text-amber-100">
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </span>
          <span className="text-primary-foreground/70">ينتهي العرض خلال</span>
        </span>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-3xl mx-auto -mt-4 mb-8 relative"
    >
      <div className="relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur-md px-4 py-3 md:px-6 md:py-4 overflow-hidden">
        {/* shimmer gold accent */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(110deg, transparent 40%, hsl(45 80% 70% / 0.18) 50%, transparent 60%)",
            animation: "shimmer 6s ease-in-out infinite",
          }}
        />
        {/* gold side rail (RTL: right side) */}
        <div className="absolute right-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-amber-300/60 to-transparent" />

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-primary-foreground text-sm md:text-base">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-2.5">
              {it.icon}
              <span className="leading-tight">{it.label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block w-px h-4 bg-primary-foreground/20 ms-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
