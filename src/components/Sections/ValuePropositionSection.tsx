import { CheckCircle, Target, Zap, Users } from "lucide-react";

export function ValuePropositionSection() {
  const features = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Não fazemos promessas vazias. Cada estratégia é pensada para gerar valor real e mensurável."
    },
    {
      icon: Zap,
      title: "Agilidade Digital",
      description: "Aplicamos as metodologias mais atuais para acelerar sua transformação digital."
    },
    {
      icon: Users,
      title: "Parceria Verdadeira",
      description: "Somos mais que consultores - somos catalisadores do seu crescimento sustentável."
    },
    {
      icon: CheckCircle,
      title: "Soluções Aplicáveis",
      description: "Desenvolvemos estratégias que realmente funcionam no dia a dia da sua empresa."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-primary mb-6">
            Pare de Deixar Oportunidades{" "}
            <span className="text-gradient">Escapar.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Em um mercado que não para, a Vértice Analytics é a parceira que você precisa para se adaptar e prosperar. 
            Somos mais do que consultores; <em className="text-primary font-semibold">somos catalisadores de soluções para quem busca ser diferente.</em>
            {" "}Dedicados a organizar processos, analisar dados e construir estratégias digitais que geram valor real. 
            Nossa energia e paixão pela inovação estão a serviço do seu negócio. <em className="text-secondary font-semibold">Se você se identifica, é pra você.</em>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="card-modern p-6 text-center hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-primary p-1 rounded-2xl">
            <div className="bg-white rounded-xl p-6">
              <p className="text-primary font-semibold text-lg">
                "O que não é medido, não pode ser melhorado. E o que não é melhorado, te custa caro todo mês."
              </p>
              <p className="text-text-secondary mt-2">
                — Filosofia Vértice Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}