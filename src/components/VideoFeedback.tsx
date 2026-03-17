import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import feedbackThumbnail from "@/assets/feedback-thumbnail.png";

const SPEEDS = [1, 1.2, 1.3, 1.5];

interface VideoFeedbackProps {
  src: string;
}

const VideoFeedback = ({ src }: VideoFeedbackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speed, setSpeed] = useState(1);
  const [started, setStarted] = useState(false);

  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(speed);
    const next = SPEEDS[(idx + 1) % SPEEDS.length];
    setSpeed(next);
    if (videoRef.current) videoRef.current.playbackRate = next;
  };

  const handlePlay = () => {
    setStarted(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
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
        {!started && (
          <div
            className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center"
            onClick={handlePlay}
          >
            <img
              src={feedbackThumbnail}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        )}
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
