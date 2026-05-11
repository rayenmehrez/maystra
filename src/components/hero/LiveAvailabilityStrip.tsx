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
      icon: <Users className="w-[18px] h-[18px]" strokeWidth={2.2} />,
      eyebrow: "المقاعد المتبقية",
      label: (
        <>
          تبقى{" "}
          <span className="font-extrabold mx-0.5 text-white text-[17px]">
            {seats}
          </span>{" "}
          مقاعد فقط لهذا الأسبوع
        </>
      ),
      accent: "amber" as const,
    },
    {
      icon: <Clock className="w-[18px] h-[18px]" strokeWidth={2.2} />,
      eyebrow: "ينتهي العرض خلال",
      label: (
        <span
          dir="ltr"
          className="font-mono tabular-nums text-[17px] font-bold tracking-wider text-white inline-block"
          style={{ textShadow: "0 0 14px hsl(45 95% 70% / 0.7)" }}
        >
          {pad(hours)}
          <span className="opacity-60 mx-0.5">:</span>
          {pad(minutes)}
          <span className="opacity-60 mx-0.5">:</span>
          {pad(seconds)}
        </span>
      ),
      accent: "amber" as const,
    },
  ];

  const accentColor = (a: "emerald" | "amber") =>
    a === "emerald" ? "hsl(150 80% 72%)" : "hsl(45 95% 75%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="max-w-sm mx-auto -mt-1 mb-10 px-6 text-center md:text-right"
    >
      <div className="flex flex-col gap-3 items-center md:items-stretch">
        {rows.map((row, i) => (
          <div key={i} className="w-full">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {/* Icon medallion (open, no card) */}
              <span
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(45 95% 65% / 0.55), hsl(45 90% 45% / 0.1))",
                  boxShadow: "0 0 18px hsl(45 95% 60% / 0.5)",
                  color: accentColor(row.accent),
                }}
              >
                <span className="relative">{row.icon}</span>
              </span>

              {/* Text */}
              <div className="flex-1 flex flex-col leading-tight">
                <span
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-0.5"
                  style={{ color: accentColor(row.accent) }}
                >
                  {row.eyebrow}
                </span>
                <span
                  className="text-[15px] font-semibold text-white"
                  style={{ textShadow: "0 1px 8px hsl(280 50% 15% / 0.6)" }}
                >
                  {row.label}
                </span>
              </div>
            </div>
            {i < rows.length - 1 && (
              <div
                className="mt-3 h-px"
                style={{
                  background:
                    "linear-gradient(to left, transparent, hsl(45 90% 75% / 0.35), transparent)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
