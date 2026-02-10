import HeroSection from "@/components/HeroSection";
import WhyMaestraSection from "@/components/WhyMaestraSection";
import CoursesSection from "@/components/CoursesSection";
import JourneySection from "@/components/JourneySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BonusesSection from "@/components/BonusesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CoachSection from "@/components/CoachSection";
import Footer from "@/components/Footer";
import TransformationWheelSection from "@/components/TransformationWheel";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <WhyMaestraSection />
      <TransformationWheelSection />
      <CoursesSection />
      <JourneySection />
      <BeforeAfterSection />
      <WhatYouGetSection />
      <CoachSection />
      <BonusesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
