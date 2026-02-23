import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FloatingDotsLight } from "./FloatingDots";
import logo from "@/assets/logo.png";

const STORAGE_KEY = "maestra-countdown-end";

function getEndTime() {
  if (typeof window === "undefined") return Date.now() + 72 * 3600 * 1000;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + 72 * 3600 * 1000;
  localStorage.setItem(STORAGE_KEY, end.toString());
  return end;
}
const HeroSection = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(diff % (1000 * 60) / 1000)
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-[hsl(272_34%_47%/0.15)] to-background z-20 backdrop-blur-sm" />
      <FloatingDotsLight />
      <FloatingDotsLight />
      <FloatingDotsLight />
      <motion.div className="container mx-auto px-6 py-20 text-center text-primary-foreground relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        {/* Shimmer glow behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div
          className="w-[600px] h-[300px] rounded-full opacity-30 blur-3xl animate-[shimmer_6s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(ellipse at center, hsl(280 50% 70% / 0.5), hsl(272 34% 47% / 0.25), transparent 70%)"
          }} />

        </div>

        {/* Logo */}
        <motion.div variants={childVariants} className="mb-8 flex justify-center">
          <img src={logo} alt="Coach Abeer Logo" className="h-20 md:h-28 w-auto drop-shadow-lg" />
        </motion.div>

        <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative">منهج المايسترا

      </motion.h1>

        {/* Tagline banner */}
        <motion.div variants={childVariants} className="relative mb-10 max-w-3xl mx-auto">
          <div className="relative px-6 py-4 rounded-2xl border border-primary-foreground/20 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 via-primary-foreground/5 to-primary-foreground/10 animate-[shimmer_6s_ease-in-out_infinite]" />
            <p className="relative text-base md:text-lg font-medium leading-relaxed text-primary-foreground/90">
              منهج متكامل يدعمك على ادارة حياتك و قيادة عالمك الداخلي و الخارجي بكل احترافية و سلاسة و استمتاع
            </p>
          </div>
        </motion.div>

        {/* VSL Video Placeholder */}
        <motion.div variants={childVariants} className="max-w-3xl mx-auto mb-12 relative">
          {/* Rotating short light line */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
           <div className="absolute inset-0 animate-[spin_4s_linear_infinite]" style={{
            background: "conic-gradient(from 0deg, transparent 0%, transparent 85%, hsl(280 50% 65%) 91%, hsl(272 50% 80%) 94%, hsl(280 50% 65%) 97%, transparent 100%)"
          }} />
          </div>
          {/* Inner bg to mask the gradient behind content */}
          <div className="absolute inset-[2px] rounded-[14px] gradient-hero" />

          <div
            className="relative aspect-video rounded-2xl overflow-hidden group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://imfwxvqugmawiqwlahce.supabase.co/storage/v1/object/public/abeer%20video/abeerv2.mp4"
              autoPlay
              playsInline
              onEnded={() => setIsPlaying(false)}
              onCanPlay={() => {
                if (videoRef.current) {
                  videoRef.current.volume = volume;
                  videoRef.current.muted = false;
                }
              }}
            />

            {/* Click overlay for play/pause */}
            <button
              onClick={() => {
                if (videoRef.current) {
                  if (isPlaying) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                  } else {
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }
              }}
              className="absolute inset-0 z-10"
            />

            {/* Big play icon when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center border border-primary-foreground/30">
                  <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Bottom controls bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 z-30 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-foreground/60 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"}`}
            >
              {/* Play/Pause */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    if (isPlaying) {
                      videoRef.current.pause();
                      setIsPlaying(false);
                    } else {
                      videoRef.current.play();
                      setIsPlaying(true);
                    }
                  }
                }}
                className="text-primary-foreground hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>

              {/* Mute/Unmute */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    const newMuted = !isMuted;
                    videoRef.current.muted = newMuted;
                    setIsMuted(newMuted);
                    if (!newMuted) {
                      videoRef.current.volume = volume;
                    }
                  }
                }}
                className="text-primary-foreground hover:scale-110 transition-transform"
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                )}
              </button>

              {/* Volume slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  e.stopPropagation();
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (videoRef.current) {
                    videoRef.current.volume = val;
                    videoRef.current.muted = val === 0;
                    setIsMuted(val === 0);
                  }
                }}
                onClick={(e) => e.stopPropagation()}
                className="w-20 h-1 accent-primary-foreground cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={childVariants} className="flex items-center justify-center gap-3 mb-6" dir="ltr">
          {[
        { value: pad(timeLeft.days), label: "يوم" },
        { value: pad(timeLeft.hours), label: "ساعة" },
        { value: pad(timeLeft.minutes), label: "دقيقة" },
        { value: pad(timeLeft.seconds), label: "ثانية" }].
        map((item, i) =>
        <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                <motion.span
              key={item.value}
              className="text-xl md:text-2xl font-extrabold text-primary-foreground"
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}>

                  {item.value}
                </motion.span>
              </div>
              <span className="text-xs mt-1.5 opacity-60">{item.label}</span>
            </div>
        )}
        </motion.div>

        <motion.div variants={childVariants}>
          <motion.a
          href="https://abeeralmatooq.com/product/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%85%d8%a7%d9%8a%d8%b3%d8%aa%d8%b1%d8%a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-foreground text-primary text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold"
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
            "0 8px 30px hsl(272 34% 47% / 0.18)",
            "0 12px 40px hsl(272 34% 47% / 0.4)",
            "0 8px 30px hsl(272 34% 47% / 0.18)"]

          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}>

            انضمي الآن وابدأي رحلتك التحولية
          </motion.a>
        </motion.div>

        <motion.div variants={childVariants} className="mt-4 flex flex-col items-center gap-2">
          <p className="text-sm opacity-60">⏳ عرض خاص — متاح لمدة 72 ساعة فقط</p>
          <div className="mt-2 inline-flex items-center gap-3 border-2 border-dashed border-green-400 rounded-full px-6 py-2.5 bg-green-400/10 backdrop-blur-sm">
            <span className="text-sm line-through opacity-50 text-primary-foreground">$3,778</span>
            <span className="text-2xl md:text-3xl font-extrabold text-green-400">$1,199</span>
          </div>
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;