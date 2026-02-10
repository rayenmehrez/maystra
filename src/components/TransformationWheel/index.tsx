import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import FloatingDots from "../FloatingDots";
import RadarChart from "./RadarChart";
import RatingPopup from "./RatingPopup";
import ResultsPanel from "./ResultsPanel";
import { LIFE_AREAS } from "./types";

const TransformationWheelSection = () => {
  const [ratings, setRatings] = useState<number[]>(Array(8).fill(0));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const ratedCount = ratings.filter((r) => r > 0).length;
  const allRated = ratedCount === 8;

  const handleLabelClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleRatingSelect = useCallback(
    (value: number) => {
      if (activeIndex === null) return;
      setRatings((prev) => {
        const next = [...prev];
        next[activeIndex] = value;
        return next;
      });
      setActiveIndex(null);
    },
    [activeIndex]
  );

  const handleReset = useCallback(() => {
    setRatings(Array(8).fill(0));
    setActiveIndex(null);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F5F0FF" }}>
      <FloatingDots />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            عجلة حياتك الآن
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-2">
            قيّمي كل جانب من حياتك من 1 إلى 10 واكتشفي أين تحتاجين التحوّل
          </p>
          <p className="text-muted-foreground/70 text-sm">اضغطي على كل جانب واختاري تقييمك</p>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Wheel (right side in RTL) */}
          <AnimatedSection delay={0.2} className="relative flex flex-col items-center">
            <RadarChart
              labels={LIFE_AREAS.map((a) => a.label)}
              values={ratings}
              maxValue={10}
              onLabelClick={handleLabelClick}
              activeIndex={activeIndex}
            />

            {/* Progress */}
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {ratedCount}/8 مكتمل
              </span>
              <div className="w-40 h-1.5 bg-secondary rounded-full mt-2 mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(ratedCount / 8) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Rating Popup */}
            <RatingPopup
              isOpen={activeIndex !== null}
              label={activeIndex !== null ? LIFE_AREAS[activeIndex].label : ""}
              currentValue={activeIndex !== null ? ratings[activeIndex] : 0}
              onSelect={handleRatingSelect}
              onClose={() => setActiveIndex(null)}
            />

            {/* Sparkle on completion */}
            <AnimatePresence>
              {allRated && (
                <motion.div
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5 }}
                >
                  <span className="text-5xl">✨</span>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Results panel (left side in RTL) */}
          <div className="flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {allRated ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <ResultsPanel ratings={ratings} onReset={handleReset} />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="text-center p-8 rounded-2xl border-2 border-dashed border-border/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-4xl mb-3">🎯</p>
                  <p className="text-muted-foreground text-sm font-semibold">
                    أكملي تقييم الـ 8 جوانب لمشاهدة نتيجتك
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    متبقي {8 - ratedCount} {8 - ratedCount === 1 ? "جانب" : "جوانب"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationWheelSection;
