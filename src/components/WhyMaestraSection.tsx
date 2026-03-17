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
      <FloatingDots variant={0} />
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
                whileHover={{ y: -8, boxShadow: "0 20px 50px hsl(272 34% 47% / 0.22)" }}
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

        {/* Video */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-2xl mx-auto mt-14 relative">
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 animate-[spin_4s_linear_infinite]" style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 85%, hsl(280 50% 65%) 91%, hsl(272 50% 80%) 94%, hsl(280 50% 65%) 97%, transparent 100%)"
              }} />
            </div>
            <div className="absolute inset-[2px] rounded-[14px] bg-lavender" />
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="https://imfwxvqugmawiqwlahce.supabase.co/storage/v1/object/public/abeer%20video/maestra.mp4"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default WhyMaestraSection;