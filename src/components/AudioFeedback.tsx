import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

const SPEEDS = [1, 1.2, 1.3, 1.5];

interface AudioFeedbackProps {
  audioSrc: string;
  title?: string;
  subtitle?: string;
}

const AudioFeedback = ({
  audioSrc,
  title = "رسالة صوتية من إحدى المشتركات",
  subtitle = "استمعي لتجربتها مع منهج المايسترا",
}: AudioFeedbackProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(speed);
    const next = SPEEDS[(idx + 1) % SPEEDS.length];
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setProgress(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration ? (progress / duration) * 100 : 0;

  const bars = Array.from({ length: 40 }, (_, i) => {
    const h = 20 + Math.sin(i * 0.7) * 15 + Math.cos(i * 1.3) * 10;
    return Math.max(8, Math.min(40, h));
  });

  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => setTick((t) => t + 1), 120);
    return () => clearInterval(id);
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto" dir="ltr"
    >
      <div className={`relative bg-card rounded-2xl p-6 md:p-8 border overflow-hidden transition-all duration-500 ${isPlaying ? "shadow-[0_0_30px_hsl(263_70%_58%/0.35),0_0_60px_hsl(263_70%_58%/0.15)] border-primary/40" : "shadow-purple-lg border-primary/20"}`}>
        <div className="absolute top-0 left-0 right-0 h-1 gradient-pricing" />

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-purple"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 mr-[-2px]" />}
          </motion.button>

          <div className="flex-1 min-w-0">
            <div
              className="flex items-center gap-[2px] h-10 cursor-pointer"
              onClick={seek}
            >
              {bars.map((h, i) => {
                const barPct = (i / bars.length) * 100;
                const isActive = barPct <= pct;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-full transition-all duration-150"
                    style={{
                      height: isPlaying && isActive
                        ? `${Math.max(8, h + Math.sin(tick * 0.5 + i * 0.8) * 12 + Math.cos(tick * 0.3 + i * 1.2) * 8)}px`
                        : `${h}px`,
                      backgroundColor: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground) / 0.2)",
                    }}
                  />
                );
              })}
            </div>

            <div className="flex justify-between mt-1.5 text-[11px] text-muted-foreground" dir="ltr">
              <span>{fmt(progress)}</span>
              <span>{duration && isFinite(duration) ? fmt(duration) : "—:——"}</span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={audioSrc} preload="metadata" />
      </div>
    </motion.div>
  );
};

export default AudioFeedback;
