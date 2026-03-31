import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const BookingSection = () => {
  useEffect(() => {
    // Load the form embed script
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
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            إحجزي إستشارتك المجانية الأن
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg">
            اختاري الموعد المناسب لك
          </p>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://api.coachhubmena.com/widget/bookings/carol-free-consultations"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
            scrolling="no"
            id="uAsAb0TzvOURCtGwkA04_1772491692596"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
