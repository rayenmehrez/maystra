import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import { Award, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import ttdaLogo from "@/assets/ttda-logo.png";
import maestraVideo from "@/assets/maestra.mp4.asset.json";

const WhyMaestraSection = () => {
  return (
    <section className="relative bg-lavender overflow-hidden py-[55px]" dir="rtl">
      <FloatingDots variant={0} />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-foreground">
            لماذا منهج المايسترا؟
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-center gap-3">
              <Sparkles
                className="w-6 h-6 md:w-7 md:h-7 shrink-0"
                style={{ color: "hsl(45 95% 60%)" }}
              />
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                المايسترا أكثر من برنامج للتطوير الذاتي…
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              منهج متكامل ومعتمد للقيادة الذاتية والسيادة الشخصية.
            </p>
            <p
              className="text-base md:text-lg font-semibold mt-3 tracking-wide"
              dir="ltr"
              style={{ color: "hsl(45 95% 55%)" }}
            >
              The Maestra Method™️ in Self-Leadership & Personal Mastery
            </p>
          </AnimatedSection>

          {/* Short intro video - autoplay loop, no controls */}
          <AnimatedSection delay={0.18}>
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 animate-[spin_4s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, transparent 85%, hsl(280 50% 65%) 91%, hsl(272 50% 80%) 94%, hsl(280 50% 65%) 97%, transparent 100%)",
                  }}
                />
              </div>
              <div className="absolute inset-[2px] rounded-[14px] bg-lavender" />
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src="https://imfwxvqugmawiqwlahce.supabase.co/storage/v1/object/public/abeer%20video/maestra.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              هو منهج متكامل صُمم ليأخذك في رحلة واضحة ومتدرجة، من فهم الجذور والأنماط التي تقودك، إلى بناء هوية أكثر وعيًا، وحدود وحضور وعلاقات أكثر اتساقًا، وصولًا إلى قيادة نفسك وحياتك من مكان مختلف.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="flex flex-col items-center gap-4 py-4">
              <p className="text-base md:text-lg text-foreground font-semibold leading-relaxed">
                و هو منهج تدريبيًا معتمدًا من{" "}
                <span style={{ color: "hsl(45 95% 60%)" }}>TTDA Global</span> –
                الأكاديمية البريطانية للتعليم والتدريب
              </p>
              <div className="bg-white/90 rounded-2xl p-4 shadow-purple-lg">
                <img
                  src={ttdaLogo}
                  alt="TTDA London Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card/60 border border-border/40 rounded-2xl p-6 md:p-8 shadow-purple-lg">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck
                  className="w-6 h-6 shrink-0"
                  style={{ color: "hsl(45 95% 60%)" }}
                />
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  ماذا يعني ذلك لكِ؟
                </h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                يعني أنكِ لا تنضمين إلى مجموعة عشوائية من الفيديوهات أو الجلسات التحفيزية.
              </p>
              <p className="text-base md:text-lg text-foreground font-semibold leading-relaxed mt-3">
                أنتِ تدخلين منهجًا له هيكل واضح، ومراحل مترابطة، ومحتوى تدريبي تمت مراجعته خارجيًا ضمن عملية الاعتماد.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              فالرحلة التي تدخلينها اليوم تجمع بين:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex items-center gap-3 text-right">
                <Compass
                  className="w-7 h-7 shrink-0"
                  style={{ color: "hsl(45 95% 60%)" }}
                />
                <p className="text-foreground font-semibold leading-relaxed">
                  عمق التحول الشخصي الذي بُنيت عليه مايسترا منذ البداية
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex items-center gap-3 text-right">
                <Layers
                  className="w-7 h-7 shrink-0"
                  style={{ color: "hsl(45 95% 60%)" }}
                />
                <p className="text-foreground font-semibold leading-relaxed">
                  هيكل تدريبي منظم يحمل اعتمادًا خارجيًا
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              و هذا يضيف سببًا آخر لتثقي في المنهج الذي تختارين أن تستثمري فيه وقتك، طاقتك ومالك.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                ليست مجرد شهادة على الحائط.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                القيمة الحقيقية ليست في شعار الاعتماد وحده.
                <br />
                القيمة في أنكِ تدخلين تجربة صُممت كـ{" "}
                <span className="font-bold" style={{ color: "hsl(45 95% 60%)" }}>
                  Methodology متكاملة
                </span>
                ، وليس كمجموعة معلومات منفصلة.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-2xl font-bold text-foreground">
              <span>من الجذور…</span>
              <span style={{ color: "hsl(45 95% 60%)" }}>→</span>
              <span>إلى الهوية…</span>
              <span style={{ color: "hsl(45 95% 60%)" }}>→</span>
              <span>إلى القوة الخارجية…</span>
              <span style={{ color: "hsl(45 95% 60%)" }}>→</span>
              <span>إلى القيادة.</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Award
                  className="w-7 h-7 shrink-0"
                  style={{ color: "hsl(45 95% 60%)" }}
                />
                <p className="text-lg md:text-xl font-bold text-foreground">
                  وعند إتمام البرنامج
                </p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                تحصلين على شهادة{" "}
                <span className="font-bold" style={{ color: "hsl(45 95% 60%)" }}>
                  TTDA Global
                </span>{" "}
                المعتمدة دوليًا.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.55}>
            <div className="space-y-6 pt-4">
              <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed">
                أنتِ لا تحتاجين المزيد من المعلومات عن نفسك.
                <br />
                ربما حان الوقت أن تدخلي منهجًا يساعدك على قيادة ما عرفته.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                ابدئي رحلتك مع The Maestra Method™️ 👑
              </p>
              <a
                href="#booking"
                className="inline-block bg-primary text-primary-foreground text-lg md:text-xl px-10 py-4 rounded-full shadow-purple-lg font-semibold hover:scale-105 transition-transform"
              >
                إحجزي إستشارتك المجانية الأن
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyMaestraSection;
