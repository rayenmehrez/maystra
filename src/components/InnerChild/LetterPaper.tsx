import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LetterPaperProps {
  texts: string[];
  currentStep: number;
  isComplete: boolean;
  sealAnimated: boolean;
  placeholder: string;
  onTextChange: (value: string) => void;
}

const LetterPaper = forwardRef<HTMLDivElement, LetterPaperProps>(
  ({ texts, currentStep, isComplete, sealAnimated, placeholder, onTextChange }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="relative rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#FFF8F0" }}
        animate={!isComplete ? { y: [0, -2, 0] } : {}}
        transition={!isComplete ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
      >
        {/* Watercolor edges */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-primary/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-primary/15 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-primary/10 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-primary/10 to-transparent" />
          {/* Corner washes */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/12 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/12 to-transparent rounded-tr-full" />
        </div>

        <div className="relative p-8 md:p-10">
          {/* Butterfly motif */}
          <div className="flex justify-center mb-4">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="opacity-50">
              <path d="M20 15 Q10 0 2 10 Q10 18 20 15" stroke="hsl(272 34% 47%)" strokeWidth="1.2" fill="hsl(272 34% 47% / 0.1)" />
              <path d="M20 15 Q30 0 38 10 Q30 18 20 15" stroke="hsl(272 34% 47%)" strokeWidth="1.2" fill="hsl(272 34% 47% / 0.1)" />
              <path d="M20 15 L20 28" stroke="hsl(272 34% 47%)" strokeWidth="1" />
            </svg>
          </div>

          {/* Letter opening */}
          <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: "hsl(272 34% 40%)", fontStyle: "italic" }}>
            عزيزتي الصغيرة…
          </p>

          {/* Written texts */}
          {texts.map((text, i) => {
            if (i > currentStep && !isComplete) return null;
            const isCurrentEditing = i === currentStep && !isComplete;

            return (
              <AnimatePresence key={i}>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: isComplete ? i * 0.15 : 0 }}
                >
                  {isCurrentEditing ? (
                    <textarea
                      value={text}
                      onChange={(e) => onTextChange(e.target.value)}
                      placeholder={placeholder}
                      rows={3}
                      maxLength={300}
                      className="w-full bg-transparent border-none outline-none resize-none text-base md:text-lg leading-relaxed focus:ring-2 focus:ring-primary/30 rounded-lg p-2 transition-shadow"
                      style={{ color: "hsl(272 34% 25%)" }}
                      dir="rtl"
                      autoFocus
                    />
                  ) : (
                    text && (
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: "hsl(272 34% 25%)", opacity: isComplete ? 1 : 0.6 }}
                      >
                        {text}
                      </p>
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            );
          })}

          {/* Letter closing */}
          <AnimatePresence>
            {isComplete && (
              <motion.p
                className="text-lg md:text-xl font-bold mt-8"
                style={{ color: "hsl(272 34% 40%)", fontStyle: "italic" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                …بحب، النسخة الأقوى منك
              </motion.p>
            )}
          </AnimatePresence>

          {/* Wax seal */}
          <AnimatePresence>
            {sealAnimated && (
              <motion.div
                className="flex justify-center mt-8"
                initial={{ scale: 3, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "hsl(272 34% 38%)" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4 Q8 1 4 8 Q8 14 14 10 Q20 14 24 8 Q20 1 14 4Z" fill="hsl(0 0% 100% / 0.8)" />
                    <path d="M14 10 L14 24" stroke="hsl(0 0% 100% / 0.6)" strokeWidth="1.2" />
                    <circle cx="14" cy="14" r="12" stroke="hsl(0 0% 100% / 0.3)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);

LetterPaper.displayName = "LetterPaper";
export default LetterPaper;
