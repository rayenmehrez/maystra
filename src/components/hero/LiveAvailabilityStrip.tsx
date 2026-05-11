import { motion } from "framer-motion";
import { Radio, Users, Clock } from "lucide-react";
import { useLimitedSeats } from "@/hooks/useLimitedSeats";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const LiveAvailabilityStrip = ({ hours, minutes, seconds }: Props) => {
  const seats = useLimitedSeats();

  const rows = [
    {
      icon: <Radio className="w-5 h-5" strokeWidth={2} />,
      eyebrow: "LIVE",
      label: "استشارة مجانية متاحة الآن",
      accent: "emerald",
      pulse: true,
    },
    {
      icon: <Users className="w-5 h-5" strokeWidth={2} />,
      eyebrow: "المقاعد المتبقية",
      label: (
        <>
          تبقى{" "}
          <motion.span
            key={seats}
            initial={{ scale: 1.4, color: "#fde047" }}
            animate={{ scale: 1, color: "#ffffff" }}
            transition={{ duration: 0.5 }}
            className="font-extrabold mx-0.5 text-lg"
          >
            {seats}
          </motion.span>{" "}
          مقاعد فقط لهذا الأسبوع
        </>
      ),
      accent: "amber",
    },
    {
      icon: <Clock className="w-5 h-5" strokeWidth={2} />,
      eyebrow: "ينتهي العرض خلال",
      label: (
        <span
          dir="ltr"
          className="font-mono tabular-nums text-lg font-bold tracking-wider text-white"
          style={{ textShadow: "0 0 14px hsl(45 90% 65% / 0.55)" }}
        >
          {pad(hours)}
          <span className="opacity-50 mx-0.5">:</span>
          {pad(minutes)}
          <span className="opacity-50 mx-0.5">:</span>
          {pad(seconds)}
        </span>
      ),
      accent: "amber",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-md mx-auto -mt-2 mb-10 relative px-4"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-50 blur-md"
        style={{
          background:
            "linear-gradient(135deg, hsl(45 90% 60% / 0.35), hsl(280 60% 70% / 0.25), hsl(45 90% 60% / 0.35))",
          backgroundSize: "200% 200%",
          animation: "shimmer 6s linear infinite",
        }}
        aria-hidden
      />

      {/* Gradient border */}
      <div
        className="relative rounded-2xl p-[1.5px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(45 90% 75% / 0.7), hsl(0 0% 100% / 0.3), hsl(280 60% 80% / 0.5), hsl(45 90% 75% / 0.7))",
          backgroundSize: "200% 200%",
          animation: "shimmer 5s linear infinite",
        }}
      >
        <div className="relative rounded-[14px] bg-primary/50 backdrop-blur-xl px-5 py-4 md:px-6 md:py-5 overflow-hidden">
          {/* Inner sweep */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, hsl(0 0% 100% / 0.12) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 6s ease-in-out infinite",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col gap-3.5 text-white text-right">
            {rows.map((row, i) => (
              <div key={i}>
                <div className="flex items-center gap-3">
                  {/* Icon medallion */}
                  <span
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor:
                        row.accent === "emerald"
                          ? "hsl(150 70% 60% / 0.45)"
                          : "hsl(45 90% 70% / 0.45)",
                      background:
                        row.accent === "emerald"
                          ? "radial-gradient(circle at 30% 30%, hsl(150 70% 55% / 0.3), hsl(150 70% 40% / 0.05))"
                          : "radial-gradient(circle at 30% 30%, hsl(45 90% 70% / 0.3), hsl(45 90% 50% / 0.05))",
                      color:
                        row.accent === "emerald"
                          ? "hsl(150 80% 75%)"
                          : "hsl(45 95% 80%)",
                    }}
                  >
                    {row.pulse && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping opacity-60"
                        style={{
                          background: "hsl(150 70% 55% / 0.4)",
                        }}
                      />
                    )}
                    <span className="relative">{row.icon}</span>
                  </span>

                  {/* Text */}
                  <div className="flex-1 flex flex-col leading-tight">
                    <span
                      className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold"
                      style={{
                        color:
                          row.accent === "emerald"
                            ? "hsl(150 80% 75%)"
                            : "hsl(45 90% 75%)",
                      }}
                    >
                      {row.eyebrow}
                    </span>
                    <span className="text-sm md:text-base font-semibold text-white">
                      {row.label}
                    </span>
                  </div>
                </div>
                {i < rows.length - 1 && (
                  <div className="mt-3 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
