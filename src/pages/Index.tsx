import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Sections/HeroSection";
import { ValuePropositionSection } from "@/components/Sections/ValuePropositionSection";
import { OptimizationSignalsSection } from "@/components/Sections/OptimizationSignalsSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { TeamProfilesSection } from "@/components/Sections/TeamProfilesSection";
import { SolutionsSection } from "@/components/Sections/SolutionsSection";
import { CaseStudiesSection } from "@/components/Sections/CaseStudiesSection";
import { ContactSection } from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <OptimizationSignalsSection />
        <AboutSection />
        <TeamProfilesSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
