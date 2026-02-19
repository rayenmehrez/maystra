import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LetterPaper from "./LetterPaper";
import LetterActions from "./LetterActions";

const PROMPTS = [
  { guide: "ماذا تقولين لها عن الألم الذي عاشته؟", placeholder: "أعرف أنك تألمتِ كثيرًا…" },
  { guide: "ماذا تتمنين لو قالها لك أحد في تلك اللحظات؟", placeholder: "كنت أتمنى لو أحد قال لي…" },
  { guide: "ما الذي تريدينها أن تعرفه عن المرأة التي أصبحتِ؟", placeholder: "أريدك أن تعرفي أنك أصبحتِ…" },
  { guide: "اختمي رسالتك بوعد واحد لها…", placeholder: "أعدك أنني من اليوم…" },
];

interface LetterOverlayProps {
  onClose: () => void;
}

const LetterOverlay = ({ onClose }: LetterOverlayProps) => {
  const [step, setStep] = useState(0);
  const [texts, setTexts] = useState(["", "", "", ""]);
  const [isComplete, setIsComplete] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [sealAnimated, setSealAnimated] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleTextChange = useCallback((value: string) => {
    setTexts((prev) => {
      const next = [...prev];
      next[step] = value;
      return next;
    });
  }, [step]);

  const handleNext = useCallback(() => {
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      // Complete
      setIsComplete(true);
      setTimeout(() => setSealAnimated(true), 500);
      setTimeout(() => setShowActions(true), 3500);
    }
  }, [step]);

  const handleClose = useCallback(() => {
    if (!isComplete && texts.some((t) => t.trim())) {
      setShowExitConfirm(true);
    } else {
      onClose();
    }
  }, [isComplete, texts, onClose]);

  const currentText = texts[step];
  const canProceed = currentText.trim().length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              backgroundColor: i % 3 === 0 ? "hsl(45 80% 60% / 0.4)" : "hsl(272 34% 60% / 0.4)",
            }}
            animate={{
              y: [0, -20 - Math.random() * 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 left-4 z-[110] w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
        aria-label="إغلاق"
      >
        ✕
      </button>

      {/* Main content */}
      <motion.div
        className="relative z-[105] w-full max-w-[720px] mx-4 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress dots */}
        {!isComplete && (
          <div className="flex justify-center gap-3 mb-6">
            {PROMPTS.map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i < step ? "bg-primary" : i === step ? "bg-primary" : "bg-primary-foreground/30"
                }`}
                animate={i === step ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        )}

        {/* Guide text */}
        {!isComplete && (
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              className="text-center text-primary-foreground/90 text-base md:text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {PROMPTS[step].guide}
            </motion.p>
          </AnimatePresence>
        )}

        {/* Letter */}
        <LetterPaper
          ref={letterRef}
          texts={texts}
          currentStep={step}
          isComplete={isComplete}
          sealAnimated={sealAnimated}
          placeholder={PROMPTS[step]?.placeholder || ""}
          onTextChange={handleTextChange}
        />

        {/* Next button */}
        {!isComplete && (
          <div className="flex justify-center mt-4">
            <motion.button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: canProceed ? 1 : 0.4 }}
            >
              {step < 3 ? "التالي" : "ختم الرسالة"}
            </motion.button>
          </div>
        )}

        {/* Post-letter actions */}
        <AnimatePresence>
          {showActions && (
            <LetterActions letterRef={letterRef} texts={texts} onClose={onClose} />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Exit confirmation */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-foreground/40" onClick={() => setShowExitConfirm(false)} />
            <motion.div
              className="relative bg-card rounded-2xl p-8 max-w-sm mx-4 text-center shadow-purple-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <p className="text-foreground font-bold text-lg mb-2">رسالتك لم تكتمل بعد…</p>
              <p className="text-muted-foreground text-sm mb-6">طفلتك الداخلية تنتظرك</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowExitConfirm(false)}
                  className="bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
                >
                  أكملي الكتابة
                </button>
                <button
                  onClick={onClose}
                  className="bg-secondary text-secondary-foreground font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
                >
                  أغلقي
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LetterOverlay;
