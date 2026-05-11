const UrgencyNudgeBar = () => {
  const handleClick = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full text-center"
      style={{ background: "hsl(272 45% 28%)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 px-4 py-2.5 flex-wrap">
        <span className="text-white text-[13px] md:text-sm font-semibold">
          المواعيد محدودة هذا الأسبوع — تُحجز بحسب الأسبقية
        </span>
        <button
          onClick={handleClick}
          className="inline-flex items-center text-[12px] md:text-[13px] font-bold text-white px-3.5 py-1 rounded-full transition-colors duration-200"
          style={{ background: "hsl(0 75% 55%)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "hsl(0 75% 48%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "hsl(0 75% 55%)")
          }
        >
          إحجزي الآن
        </button>
      </div>
    </div>
  );
};

export default UrgencyNudgeBar;
