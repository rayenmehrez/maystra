import { useState, useRef } from "react";
import { motion } from "framer-motion";

const SPEEDS = [1, 1.2, 1.3, 1.5];

interface VideoFeedbackProps {
  src: string;
}

const VideoFeedback = ({ src }: VideoFeedbackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speed, setSpeed] = useState(1);

  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(speed);
    const next = SPEEDS[(idx + 1) % SPEEDS.length];
    setSpeed(next);
    if (videoRef.current) videoRef.current.playbackRate = next;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 max-w-2xl mx-auto"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-purple border border-border/50">
        <video
          ref={videoRef}
          className="w-full aspect-video"
          src={src}
          controls
          playsInline
          preload="metadata"
        />
        <button
          onClick={cycleSpeed}
          className="absolute top-3 left-3 z-10 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-primary transition-colors"
        >
          {speed}x
        </button>
      </div>
    </motion.div>
  );
};

export default VideoFeedback;
