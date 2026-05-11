import { motion } from "framer-motion";
import { useLimitedSeats } from "@/hooks/useLimitedSeats";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div
      className="min-w-[34px] px-1.5 py-1 rounded-md font-mono tabular-nums font-bold text-white text-[14px] leading-none"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 100% / 0.14), hsl(0 0% 100% / 0.04))",
        border: "1px solid hsl(45 95% 75% / 0.35)",
        boxShadow:
          "inset 0 1px 0 hsl(0 0% 100% / 0.15), 0 2px 8px hsl(272 50% 10% / 0.5)",
        textShadow: "0 0 8px hsl(45 95% 65% / 0.45)",
      }}
    >
      {value}
    </div>
    <span
      className="text-[8px] mt-0.5 tracking-[0.15em] uppercase"
      style={{ color: "hsl(45 90% 80% / 0.85)" }}
    >
      {label}
    </span>
  </div>
);

const LiveAvailabilityStrip = ({ hours, minutes, seconds }: Props) => {
  const seats = useLimitedSeats();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full flex justify-center -mt-1 mb-8 px-4"
    >
      <div
        className="relative w-full max-w-xs rounded-xl px-4 py-3 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(160deg, hsl(272 55% 22%) 0%, hsl(272 60% 14%) 60%, hsl(280 55% 18%) 100%)",
          border: "1px solid hsl(45 95% 70% / 0.3)",
          boxShadow:
            "0 10px 30px hsl(272 60% 8% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.08)",
        }}
      >
        {/* subtle gold glow */}
        <span
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(45 95% 65% / 0.18) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        {/* Seats row */}
        <div className="relative flex items-center justify-center gap-2 pb-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(150 75% 55%)",
              boxShadow: "0 0 8px hsl(150 75% 55% / 0.9)",
              animation: "pulse 2s infinite",
            }}
            aria-hidden
          />
          <span className="text-[12px] font-semibold">
            تبقى{" "}
            <span
              className="font-extrabold mx-0.5 text-[14px]"
              style={{ color: "hsl(45 95% 78%)" }}
            >
              {seats}
            </span>{" "}
            مقاعد فقط هذا الأسبوع
          </span>
        </div>

        {/* Divider */}
        <div
          className="relative h-px mb-2"
          style={{
            background:
              "linear-gradient(to left, transparent, hsl(45 95% 75% / 0.4), transparent)",
          }}
        />

        {/* Countdown */}
        <div className="relative flex flex-col items-center gap-1.5">
          <span
            className="text-[9px] tracking-[0.25em] uppercase font-semibold"
            style={{ color: "hsl(45 90% 80% / 0.85)" }}
          >
            ينتهي العرض خلال
          </span>
          <div dir="ltr" className="flex items-end gap-1">
            <TimeBlock value={pad(hours)} label="HRS" />
            <span
              className="font-mono font-bold text-sm pb-4"
              style={{ color: "hsl(45 95% 75%)" }}
            >
              :
            </span>
            <TimeBlock value={pad(minutes)} label="MIN" />
            <span
              className="font-mono font-bold text-sm pb-4"
              style={{ color: "hsl(45 95% 75%)" }}
            >
              :
            </span>
            <TimeBlock value={pad(seconds)} label="SEC" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
