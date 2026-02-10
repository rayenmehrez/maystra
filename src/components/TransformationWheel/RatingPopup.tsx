import { motion, AnimatePresence } from "framer-motion";

interface RatingPopupProps {
  isOpen: boolean;
  label: string;
  currentValue: number;
  onSelect: (value: number) => void;
  onClose: () => void;
}

const RatingPopup = ({ isOpen, label, currentValue, onSelect, onClose }: RatingPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="absolute z-50 bg-card rounded-2xl shadow-purple-lg p-5 border border-border min-w-[260px]"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-bold text-foreground mb-4 text-center">{label}</p>

            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => onSelect(num)}
                  className={`w-9 h-9 rounded-full text-sm font-bold transition-all duration-200 ${
                    num === currentValue
                      ? "bg-primary text-primary-foreground scale-110 shadow-purple"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/20 hover:scale-105"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RatingPopup;
