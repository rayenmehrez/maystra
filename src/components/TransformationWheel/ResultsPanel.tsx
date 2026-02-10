import { motion } from "framer-motion";
import { getScoreInterpretation, LIFE_AREAS } from "./types";

interface ResultsPanelProps {
  ratings: number[];
  onReset: () => void;
}

const ResultsPanel = ({ ratings, onReset }: ResultsPanelProps) => {
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  const roundedAvg = Math.round(avg * 10) / 10;
  const interpretation = getScoreInterpretation(avg);

  // Get 3 weakest areas
  const indexed = ratings.map((r, i) => ({ rating: r, index: i }));
  indexed.sort((a, b) => a.rating - b.rating);
  const weakest = indexed.slice(0, 3);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-card rounded-2xl shadow-purple-lg p-6 md:p-8 border border-border"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Overall score */}
      <motion.div variants={fadeUp} className="text-center mb-6">
        <div className="w-24 h-24 rounded-full bg-primary mx-auto flex items-center justify-center mb-3 glow-purple">
          <span className="text-3xl font-extrabold text-primary-foreground">{roundedAvg}</span>
        </div>
        <p className="text-muted-foreground text-sm font-semibold">نتيجتك الإجمالية</p>
      </motion.div>

      {/* Interpretation */}
      <motion.div variants={fadeUp} className="text-center mb-6">
        <p className="text-xl font-bold text-foreground mb-2">
          {interpretation.title} {interpretation.emoji}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">{interpretation.text}</p>
      </motion.div>

      {/* Weakest areas */}
      <motion.div variants={fadeUp} className="mb-6">
        <p className="text-sm font-bold text-foreground mb-3">أكثر الجوانب التي تحتاج تحوّل:</p>
        <div className="space-y-3">
          {weakest.map(({ index }, wi) => {
            const area = LIFE_AREAS[index];
            return (
              <motion.div
                key={area.id}
                className="bg-secondary/60 rounded-xl p-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + wi * 0.15, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-destructive/15 text-destructive text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {ratings[index]}/10
                  </span>
                  <span className="text-sm font-bold text-foreground">{area.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{area.course}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp} className="text-center space-y-3">
        <a
          href="#pricing"
          className="inline-block w-full bg-primary text-primary-foreground text-base font-bold py-3.5 px-8 rounded-full hover:scale-[1.03] transition-transform duration-300 glow-purple"
        >
          ابدأي رحلة التحوّل الآن
        </a>
        <button
          onClick={onReset}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          أعيدي التقييم
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ResultsPanel;
