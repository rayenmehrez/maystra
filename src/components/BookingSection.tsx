import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { FloatingDotsLight } from "./FloatingDots";

const BookingSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="relative py-20 bg-card overflow-hidden">
      {/* Subtle lavender gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(280 40% 95% / 0.6) 0%, transparent 30%, transparent 70%, hsl(280 40% 95% / 0.6) 100%)",
        }}
        aria-hidden
      />
      {/* Floating dots for brand continuity */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" aria-hidden>
        <FloatingDotsLight />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground mt-10">
            إحجزي إستشارتك المجانية الأن
          </h2>
          {/* Gold accent underline */}
          <div className="flex justify-center mb-4">
            <div
              className="h-[3px] w-20 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(45 95% 65%), transparent)",
              }}
            />
          </div>
          <p className="text-muted-foreground text-center mb-10 text-lg">
            اختاري الموعد المناسب لك
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          {/* Outer soft purple/gold glow */}
          <div
            className="absolute -inset-2 sm:-inset-4 rounded-[28px] opacity-60 blur-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(280 60% 60% / 0.35) 0%, hsl(45 95% 65% / 0.2) 50%, transparent 75%)",
            }}
            aria-hidden
          />

          {/* Animated gradient purple border ring */}
          <div
            className="absolute -inset-[2px] rounded-2xl p-[2px] animate-[border-pulse_4s_ease-in-out_infinite] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, hsl(280 70% 55%), hsl(272 60% 40%), hsl(290 75% 65%), hsl(272 60% 40%), hsl(280 70% 55%))",
              backgroundSize: "300% 300%",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            aria-hidden
          />

          {/* Inner premium card */}
          <div className="relative bg-card rounded-2xl shadow-purple-lg p-2 sm:p-4 overflow-hidden">
            <iframe
              src="https://api.coachhubmena.com/widget/bookings/carol-free-consultations"
              style={{
                width: "100%",
                border: "none",
                overflow: "hidden",
                minHeight: "600px",
                borderRadius: "0.75rem",
              }}
              scrolling="no"
              id="uAsAb0TzvOURCtGwkA04_1772491692596"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
