import { motion } from "framer-motion";
import FloatingDots from "./FloatingDots";
import coachImage from "@/assets/coach-abeer.png";

const stats = [
  { label: "+20 سنة خبرة" },
  { label: "مؤسسات عالمية" },
  { label: "مئات المتدربات" },
];

const CoachSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-bl from-accent via-background to-secondary">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* Floating dots */}
      <FloatingDots variant={6} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo Side (Right in RTL = first in DOM for RTL) */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
              
              {/* Decorative corner ornament */}
              <div className="absolute -top-4 -right-4 w-12 h-12 z-20">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-primary/40">
                  <path d="M24 4C24 4 28 12 36 16C28 16 24 24 24 24C24 24 20 16 12 16C20 12 24 4 24 4Z" fill="currentColor" />
                  <path d="M40 20C40 20 42 24 46 26C42 26 40 30 40 30C40 30 38 26 34 26C38 24 40 20 40 20Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>

              {/* Coach image with float animation */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-purple-lg w-[300px] h-[380px] md:w-[360px] md:h-[450px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={coachImage}
                  alt="المدربة عبير المعتوق"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Purple accent line */}
              <div className="hidden md:block absolute top-1/2 -left-12 w-10 h-[2px] bg-gradient-to-l from-primary/40 to-transparent" />
            </div>
          </motion.div>

          {/* Text Side (Left in RTL = second in DOM) */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-purple max-w-lg w-full">
              {/* Badge */}
              <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                من هي مدربتك؟
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                عبير المعتوق
              </h2>

              {/* Subtitle */}
              <p className="text-primary font-semibold text-base md:text-lg mb-5">
                كوتش معتمدة ومتخصصة في التنمية الذاتية والقيادة الواعية
              </p>

              {/* Paragraph */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                خبرة تمتد لأكثر من 20 عامًا في مناصب قيادية عليا في مؤسسات كبرى
                وعالمية. رحلة عميقة في فهم السلوك الإنساني، التحوّل الداخلي،
                وصناعة الفرق الحقيقي في حياة الآخرين.
              </p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
                }}
              >
                {stats.map((stat) => (
                  <motion.span
                    key={stat.label}
                    className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2 rounded-full"
                    variants={{
                      hidden: { opacity: 0, scale: 0.7, y: 10 },
                      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                    }}
                  >
                    {stat.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA */}
              <a
                href="https://abeeralmatooq.com/%d8%b9%d9%86-%d8%a7%d9%84%d9%83%d9%88%d8%aa%d8%b4-%d8%b9%d8%a8%d9%8a%d8%b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-purple-lg glow-purple"
              >
                اقرأي المزيد عن عبير
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
