import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Sparkles, Layers, Target } from "lucide-react";

const cards = [{
  icon: Sparkles,
  title: "12 دورة تحويلية",
  desc: "دورات مصممة بعمق لتحويل حقيقي"
}, {
  icon: Layers,
  title: "رحلة متكاملة",
  desc: "منهج مترابط يبني على بعضه خطوة بخطوة"
}, {
  icon: Target,
  title: "من الجذور إلى القيادة",
  desc: "تبدأ من الجذور وتنتهي بقيادة حياتك"
}];

const WhyMaestraSection = () => {
  return <section className="relative bg-lavender overflow-hidden py-[55px]">
      <FloatingDots />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">لماذا منهج المايسترا؟</h2>
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
          {cards.map((card, i) => <AnimatedSection key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 50px hsl(263 70% 58% / 0.22)" }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-2xl p-8 text-center shadow-purple-lg border border-border/40 overflow-hidden h-full group"
              >
                {/* Gradient accent top bar */}
                <div className="absolute top-0 inset-x-0 h-1 gradient-pricing rounded-t-2xl" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-extrabold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};
export default WhyMaestraSection;