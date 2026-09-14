import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import ttdaLogo from "@/assets/ttda-logo.png.asset.json";

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
            <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
              المايسترا أكثر من برنامج للتطوير الذاتي…
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              منهج متكامل ومعتمد للقيادة الذاتية والسيادة الشخصية.
            </p>
            <p
              className="text-base md:text-lg font-medium mt-2"
              style={{ color: "hsl(45 95% 60%)" }}
            >
              The Maestra Method™️ in Self-Leadership & Personal Mastery
            </p>
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
                  src={ttdaLogo.url}
                  alt="TTDA London Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card/60 border border-border/40 rounded-2xl p-6 md:p-8 shadow-purple-lg">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                ماذا يعني ذلك لكِ؟
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                يعني أنكِ لا تنضمين إلى مجموعة عشوائية من الفيديوهات أو الجلسات التحفيزية.
                <br />
                أنتِ تدخلين منهجًا له هيكل واضح، ومراحل مترابطة، ومحتوى تدريبي تمت مراجعته خارجيًا ضمن عملية الاعتماد.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              فالرحلة التي تدخلينها اليوم تجمع بين:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-foreground font-semibold leading-relaxed">
                  عمق التحول الشخصي الذي بُنيت عليه مايسترا منذ البداية
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
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
              <p className="text-lg md:text-xl font-bold text-foreground mb-2">
                وعند إتمام البرنامج
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                تحصلين على شهادة{" "}
                <span className="font-bold" style={{ color: "hsl(45 95% 60%)" }}>
                  TTDA Global
                </span>
                .
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
