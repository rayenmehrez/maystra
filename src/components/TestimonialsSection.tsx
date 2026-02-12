import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Quote } from "lucide-react";
import AudioFeedback from "./AudioFeedback";
import feedbackAudio1 from "@/assets/feedback-audio.opus";
import feedbackAudio2 from "@/assets/feedback-audio-2.opus";

const testimonials = [
  {
    id: 1,
    text: "شكراً لأنك اعطيتني طريق واضحة وسلسله وبسيطه بدون تكلف لكيف افكفك هالقصص وامشي من مكان جديد وبأتساع جديد 😍",
    highlight: "من حد عم بشتغل عحاله كثير من سنين… بعرف قديه جانب المال مضروب عندي وبعرف انه الا علاقه بجوانب الذكوره والأنوثة بالمال عندي",
  },
  {
    id: 2,
    text: "برنامج المايسترا عباره سله فيها كرات واحنا نمشي نفلت كره تنور طريقنا تخلينا نفهم اشياء واجد كانت مجهوله",
    highlight: "احس انه صرت افهم واكثر وعي… فشكراً 🤍",
  },
  {
    id: 3,
    text: "اتمنى في يوم من الايام اقدر اسوي محتوى بهالقوه والاصاله والجمال",
    highlight: "",
  },
  {
    id: 4,
    text: "دسمه حسيت لانه وايد يطلع emotions فيها حتى لو تعرفين كانه اعادة مواجه… بس بعد حسيت بالثقل",
    highlight: "تبين اعطيج فيد باك بمسجات صوتيه كل فتره؟ اقولج الأشياء اللي تصير والراي؟ عادة انا انطر للاخير في كل كورس… بس اظن مع المايستر ما يصير",
  },
  {
    id: 5,
    text: "دايما المقاربه مع الاب تكون عاطفيه سواء تأثر او تفريغ… هني في متقاربه للانعكاسات الماديه للعلاقة",
    highlight: "صياغتها سهله وواضحه وحقيقيه بدون فلسفه فاضيه… بشكل يخلي الواحد يقول ايوااااااا حتى في هاي 😍",
  },
  {
    id: 6,
    text: "شكراً لوجودك 😌🙏 من حد عم بشتغل عحاله كثير من سنين… بعرف قديه جانب المال مضروب عندي",
    highlight: "اعطيتني طريق واضحة وسلسله وبسيطه بدون تكلف لكيف افكفك هالقصص وامشي من مكان جديد 🙈😍",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-lavender overflow-hidden">
      <FloatingDots />

      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            ماذا قالت المشتركات؟
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto text-lg">
            تجارب حقيقية من نساء عشن رحلة التحوّل مع منهج المايسترا
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 36px hsl(263 70% 58% / 0.15)" }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-2xl p-6 md:p-8 shadow-purple border border-border/50 h-full flex flex-col"
              >
                {/* Top row: badge + quote */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary text-[11px] font-bold rounded-full px-3 py-1">
                    مشتركة في منهج المايسترا
                  </span>
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Main text */}
                <p className="text-foreground leading-relaxed text-sm md:text-base mb-4 flex-1">
                  "{t.text}"
                </p>

                {/* Highlight quote */}
                {t.highlight && (
                  <div className="border-r-2 border-primary pr-4 mt-2">
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic">
                      {t.highlight}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Audio Feedback */}
        <div className="space-y-6 mt-14">
          <AudioFeedback audioSrc={feedbackAudio1} />
          <AudioFeedback audioSrc={feedbackAudio2} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
