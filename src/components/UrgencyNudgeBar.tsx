const UrgencyNudgeBar = () => {
  return (
    <div
      className="w-full text-center"
      style={{ background: "hsl(0 75% 50%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-2.5">
        <span className="text-white text-[13px] md:text-sm font-semibold">
          المواعيد محدودة هذا الأسبوع — تُحجز بحسب الأسبقية
        </span>
      </div>
    </div>
  );
};

export default UrgencyNudgeBar;
