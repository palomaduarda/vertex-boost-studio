import { Store, BarChart3, Workflow, Settings, DollarSign, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OptimizationSignalsSection() {
  const signals = [
    {
      icon: Store,
      title: "E-commerce Além de Vitrine",
      description: "Seu e-commerce busca ir muito além de uma simples vitrine?",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Dados Reais para Decisões",
      description: "Você precisa de clareza e dados reais para tomar suas decisões?",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Workflow,
      title: "Projetos Organizados",
      description: "Seus projetos precisam de mais organização e eficiência que realmente funcionem?",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Settings,
      title: "Operação Otimizada",
      description: "Sua operação busca otimização e um controle que traga resultados?",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Sua empresa busca diminuir os custos operacionais para aumentar a lucratividade?",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: PieChart,
      title: "Análise de Mercado",
      description: "Você precisa entender melhor seu mercado e concorrentes para se destacar?",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-primary mb-6">
            Você Está Pronto Para{" "}
            <span className="text-gradient">Otimizar?</span>{" "}
            Identifique os Sinais.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Reconheça os indicadores que mostram que sua empresa está pronta para dar o próximo passo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {signals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${signal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${signal.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-dark transition-colors duration-300">
                    {signal.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {signal.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleCTAClick}
            className="btn-secondary hover:btn-cta text-lg px-8 py-4 group"
            size="lg"
          >
            BUSQUE SOLUÇÕES REAIS. FALE CONOSCO.
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}