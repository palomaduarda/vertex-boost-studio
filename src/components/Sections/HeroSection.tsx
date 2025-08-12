import { useState, useEffect } from "react";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: BarChart3, value: "100+", label: "Projetos Analisados" },
    { icon: TrendingUp, value: "85%", label: "Melhoria Média" },
    { icon: Zap, value: "24h", label: "Resposta Rápida" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 leading-tight">
              Sua empresa pronta para o{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  próximo nível?
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
              SUA EMPRESA ESTÁ PRONTA PARA CRESCER COM INTELIGÊNCIA?
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto">
              Na Vértice Analytics, <em className="text-yellow-300">conectamos o potencial dos dados com a agilidade do digital.</em> 
              {" "}Transformamos desafios em oportunidades claras de otimização para quem quer ir além. 
              Somos seus parceiros na criação de soluções digitais e consultoria, aplicando o que há de mais atual para impulsionar sua eficiência.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Button 
              onClick={handleCTAClick}
              className="btn-hero group hover:scale-105"
              size="lg"
            >
              CONVERSE COM QUEM FAZ ACONTECER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats */}
          <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <IconComponent className="h-8 w-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}