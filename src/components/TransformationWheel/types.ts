export interface LifeArea {
  id: string;
  label: string;
  course: string;
  rating: number;
}

export const LIFE_AREAS: Omit<LifeArea, "rating">[] = [
  { id: "confidence", label: "الثقة بالنفس", course: "الدورة 1 و 2: جرح الأب والأم" },
  { id: "relationships", label: "العلاقات", course: "الدورة 3 و 9: أنماط التعلق والعلاقات الصحية" },
  { id: "boundaries", label: "الحدود الشخصية", course: "الدورة 7: بوابة احترام الذات" },
  { id: "energy", label: "الطاقة الداخلية", course: "الدورة 10: تناغم القوتين" },
  { id: "clarity", label: "الوضوح", course: "الدورة 5 و 11: القيم الحقيقية وإعادة تشكيل المستقبل" },
  { id: "courage", label: "الشجاعة", course: "الدورة 6: الخوف كبوصلة" },
  { id: "charisma", label: "الكاريزما", course: "الدورة 8: الحضور الحقيقي" },
  { id: "peace", label: "السلام الداخلي", course: "الدورة 12: The Maestra Code" },
];

export function getScoreInterpretation(avg: number) {
  if (avg <= 3) {
    return {
      emoji: "🌱",
      title: "أنتِ في بداية الطريق",
      text: "رحلتك تبدأ من الأساسيات — منهج المايسترا سيأخذك من الصفر إلى الوضوح والقوة. كل دورة صُممت لتعالج بالضبط ما تحتاجينه.",
    };
  }
  if (avg <= 6) {
    return {
      emoji: "🦋",
      title: "أنتِ على أعتاب التحوّل",
      text: "عندك وعي لكن تحتاجين الأدوات والمنهج الصحيح. المايسترا ستنقلك من المعرفة إلى التطبيق الحقيقي.",
    };
  }
  return {
    emoji: "👑",
    title: "أنتِ جاهزة للقيادة",
    text: "أنتِ قريبة جدًا من أفضل نسخة منك. المايسترا ستعطيك الاتزان والوضوح لتقودي حياتك بثقة كاملة.",
  };
}
