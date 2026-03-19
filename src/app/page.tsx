import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CompaniesSection } from "@/components/home/CompaniesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { StrategySection } from "@/components/home/StrategySection";
import { ProductionBanner } from "@/components/home/ProductionBanner";
import { GeographySection } from "@/components/home/GeographySection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CompaniesSection />
      <StatsSection />
      <StrategySection />
      <ProductionBanner />
      <GeographySection />
      <CtaSection />
    </>
  );
}
