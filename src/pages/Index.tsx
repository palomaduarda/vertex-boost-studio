import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Sections/HeroSection";
import { ValuePropositionSection } from "@/components/Sections/ValuePropositionSection";
import { OptimizationSignalsSection } from "@/components/Sections/OptimizationSignalsSection";
import { ContactSection } from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <OptimizationSignalsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
