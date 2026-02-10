import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Sparkles, Layers, Target } from "lucide-react";

const cards = [
  { icon: Sparkles, title: "12 دورة تحويلية" },
  { icon: Layers, title: "رحلة متكاملة" },
  { icon: Target, title: "تبدأ من الجذور وتنتهي بقيادة حياتك" },
];

const WhyMaestraSection = () => {
  return (
    <section className="relative py-24 bg-lavender overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
            لماذا منهج المايسترا؟
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-4 text-muted-foreground leading-relaxed">
            منهج تحوّل داخلي من 12 دورة على مدى 3 أشهر، كل أسبوع دورة واحدة فقط تشمل فيديو، تمارين، وتطبيقات فعّالة.
            هدفنا ليس عمل كثير بل عمل عميق يحدث تأثير حقيقي فورًا.
          </p>
          <p className="text-base md:text-lg text-center max-w-2xl mx-auto mb-16 text-muted-foreground/80">
            كل دورة = خطوة واضحة بأثر تحولي حقيقي. بدون مجهود مرهق، بدون وقت طويل، بدون ضغط.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={0.2 + i * 0.1}>
              <div className="bg-card rounded-2xl p-8 text-center shadow-purple hover:shadow-purple-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaestraSection;
