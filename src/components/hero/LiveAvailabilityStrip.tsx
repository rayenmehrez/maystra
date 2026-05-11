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

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-4xl mx-auto -mt-2 mb-10 relative px-4"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-60 blur-md"
        style={{
          background:
            "linear-gradient(120deg, hsl(45 90% 60% / 0.35), hsl(280 60% 70% / 0.25), hsl(45 90% 60% / 0.35))",
          backgroundSize: "200% 100%",
          animation: "shimmer 6s linear infinite",
        }}
        aria-hidden
      />

      {/* Gradient border wrapper */}
      <div
        className="relative rounded-2xl p-[1.5px] overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, hsl(45 90% 70% / 0.7), hsl(280 60% 80% / 0.4), hsl(45 90% 70% / 0.7))",
          backgroundSize: "200% 100%",
          animation: "shimmer 5s linear infinite",
        }}
      >
        <div className="relative rounded-[14px] bg-primary/40 backdrop-blur-xl px-4 py-3 md:px-6 md:py-4 overflow-hidden">
          {/* Inner shimmer sweep */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, transparent 35%, hsl(45 90% 75% / 0.18) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 6s ease-in-out infinite",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-primary-foreground">
            {/* Item 1 — Live */}
            <div className="flex items-center gap-2.5 md:flex-1 md:justify-center">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_hsl(150_80%_55%/0.7)]" />
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-emerald-300/90 font-semibold">
                  Live
                </span>
                <span className="text-sm md:text-base font-semibold">
                  استشارة مجانية متاحة الآن
                </span>
              </div>
            </div>

            {/* Divider */}
            <span className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-amber-300/40 to-transparent" />
            <span className="md:hidden h-px w-32 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

            {/* Item 2 — Seats */}
            <div className="flex items-center gap-2.5 md:flex-1 md:justify-center">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(45 90% 70% / 0.35), hsl(45 90% 50% / 0.05))",
                }}
                aria-hidden
              >
                <span className="text-base">🪑</span>
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-amber-300/90 font-semibold">
                  المقاعد
                </span>
                <span className="text-sm md:text-base font-semibold">
                  تبقى{" "}
                  <motion.span
                    key={seats}
                    initial={{ scale: 1.4, color: "#fde047" }}
                    animate={{ scale: 1, color: "#fef3c7" }}
                    transition={{ duration: 0.5 }}
                    className="font-extrabold mx-0.5 text-base md:text-lg"
                  >
                    {seats}
                  </motion.span>{" "}
                  مقاعد فقط
                </span>
              </div>
            </div>

            {/* Divider */}
            <span className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-amber-300/40 to-transparent" />
            <span className="md:hidden h-px w-32 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

            {/* Item 3 — Countdown */}
            <div className="flex items-center gap-2.5 md:flex-1 md:justify-center">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(45 90% 70% / 0.35), hsl(45 90% 50% / 0.05))",
                }}
                aria-hidden
              >
                <span className="text-base">⏳</span>
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-amber-300/90 font-semibold">
                  ينتهي خلال
                </span>
                <span
                  dir="ltr"
                  className="font-mono tabular-nums text-base md:text-lg font-bold tracking-wider text-amber-100"
                  style={{
                    textShadow: "0 0 12px hsl(45 90% 60% / 0.5)",
                  }}
                >
                  {pad(hours)}
                  <span className="opacity-50 mx-0.5">:</span>
                  {pad(minutes)}
                  <span className="opacity-50 mx-0.5">:</span>
                  {pad(seconds)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
