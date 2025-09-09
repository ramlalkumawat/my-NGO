import { MadeWithDyad } from "@/components/made-with-dyad";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import FeaturedInitiativesSection from "@/components/FeaturedInitiativesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import GetInvolvedCTA from "@/components/GetInvolvedCTA";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ImpactSection />
      <FocusAreasSection />
      <FeaturedInitiativesSection />
      <SuccessStoriesSection />
      <GetInvolvedCTA />
      <MadeWithDyad />
    </div>
  );
};

export default Index;