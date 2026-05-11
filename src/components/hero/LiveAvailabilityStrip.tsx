import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full flex justify-center -mt-1 mb-8 px-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-white">
        {/* Seats pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 backdrop-blur-md"
          style={{
            background: "hsl(0 0% 100% / 0.08)",
            border: "1px solid hsl(45 95% 75% / 0.35)",
            boxShadow: "0 4px 18px hsl(272 50% 15% / 0.35)",
          }}
        >
          <Users
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: "hsl(45 95% 75%)" }}
            strokeWidth={2.4}
          />
          <span className="text-[12px] sm:text-[13px] font-semibold whitespace-nowrap">
            تبقى{" "}
            <span
              className="font-extrabold mx-0.5"
              style={{ color: "hsl(45 95% 80%)" }}
            >
              {seats}
            </span>{" "}
            مقاعد فقط
          </span>
        </div>

        {/* Gold dot separator (desktop only) */}
        <span
          className="hidden sm:block w-1 h-1 rounded-full"
          style={{
            background: "hsl(45 95% 70%)",
            boxShadow: "0 0 8px hsl(45 95% 65% / 0.8)",
          }}
          aria-hidden
        />

        {/* Countdown pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 backdrop-blur-md"
          style={{
            background: "hsl(0 0% 100% / 0.08)",
            border: "1px solid hsl(45 95% 75% / 0.35)",
            boxShadow: "0 4px 18px hsl(272 50% 15% / 0.35)",
          }}
        >
          <Clock
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: "hsl(45 95% 75%)" }}
            strokeWidth={2.4}
          />
          <span className="text-[12px] sm:text-[13px] font-semibold whitespace-nowrap">
            ينتهي خلال{" "}
            <span
              dir="ltr"
              className="font-mono tabular-nums font-bold mx-1 inline-block"
              style={{
                color: "hsl(45 95% 82%)",
                textShadow: "0 0 10px hsl(45 95% 65% / 0.6)",
              }}
            >
              {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveAvailabilityStrip;
