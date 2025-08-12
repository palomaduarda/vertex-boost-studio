import { BarChart3, ShoppingCart, Settings, Globe, Users, MessageSquare } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: BarChart3,
      title: "Análise de Dados e Business Intelligence",
      description: "Transformamos dados brutos em insights acionáveis para tomada de decisões estratégicas. Implementamos dashboards e relatórios que revelam oportunidades de crescimento."
    },
    {
      icon: ShoppingCart,
      title: "Otimização de E-commerce",
      description: "Desenvolvemos estratégias completas para maximizar conversões e vendas online. Do funil de vendas à experiência do usuário, cada detalhe é otimizado para resultados."
    },
    {
      icon: Settings,
      title: "Otimização de Processos",
      description: "Identificamos gargalos e implementamos melhorias que aumentam a eficiência operacional. Automatizamos tarefas repetitivas e organizamos fluxos de trabalho."
    },
    {
      icon: Globe,
      title: "Presença Digital Estratégica",
      description: "Criamos e otimizamos sua presença online com foco em conversão e engajamento. Sites, landing pages e estratégias de conteúdo que geram resultados reais."
    },
    {
      icon: Users,
      title: "Treinamento e Capacitação",
      description: "Capacitamos sua equipe no uso eficiente de ferramentas e metodologias modernas. Treinamentos práticos que garantem a sustentabilidade das melhorias implementadas."
    },
    {
      icon: MessageSquare,
      title: "Consultoria Estratégica",
      description: "Fornecemos orientação especializada para alinhar suas metas de negócio com a execução digital. Desenvolvemos planos de ação personalizados para impulsionar seu crescimento."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soluções Vértice Analytics
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Capacidades Aplicadas Para Contribuir Com Seu Negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground text-center">
                  {solution.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-center">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}