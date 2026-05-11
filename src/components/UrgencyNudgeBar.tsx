const UrgencyNudgeBar = () => {
  return (
    <div
      className="w-full text-center relative"
      style={{
        background:
          "linear-gradient(90deg, hsl(272 55% 18%) 0%, hsl(272 50% 28%) 50%, hsl(272 55% 18%) 100%)",
        borderBottom: "1px solid hsl(45 95% 70% / 0.25)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: "hsl(45 95% 70%)",
            boxShadow: "0 0 8px hsl(45 95% 60% / 0.8)",
          }}
          aria-hidden
        />
        <span className="text-white text-[13px] md:text-sm font-semibold tracking-wide">
          المواعيد محدودة هذا الأسبوع — تُحجز بحسب الأسبقية
        </span>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: "hsl(45 95% 70%)",
            boxShadow: "0 0 8px hsl(45 95% 60% / 0.8)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
};

export default UrgencyNudgeBar;
