export function TeamProfilesSection() {
  const profiles = [
    {
      name: "Paloma Amaral",
      role: "Orientação em Dados e Soluções Visuais",
      description: "Com visão para processos, dados e uma sensibilidade para a comunicação, Paloma atua na transformação de informações brutas em inteligência acionável e estratégias claras.",
      specialties: [
        "Consultoria em Otimização de Processos",
        "Análise de Dados Aplicada a Negócios",
        "Criação de Sites e Páginas de Conversão",
        "Otimização de Fluxos de Trabalho",
        "Treinamento em Ferramentas Administrativas"
      ],
      quote: "O que não é medido, não pode ser melhorado. E o que não é melhorado, te custa caro todo mês."
    },
    {
      name: "Eduardo Lourenço",
      role: "Orientação em E-commerce e Estratégia Digital",
      description: "Com experiência prática e foco na execução, Eduardo compreende a fundo os desafios e as oportunidades do ambiente digital. Ele constrói e implementa estratégias que transformam sua presença online em uma ferramenta de resultados.",
      specialties: [
        "Orientação Estratégica de E-commerce",
        "Estratégias de Marketing Digital e Conteúdo",
        "Criação de Conteúdo e Descrições Persuasivas",
        "Análise de Performance Digital",
        "Otimização de Marketplace",
        "Consultoria em Presença Digital"
      ],
      quote: "Enquanto uns vendem sonhos, eu construo lojas que não dormem."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/20">
                  <img 
                    src="/placeholder.svg" 
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{profile.name}</h3>
                <h4 className="text-lg text-primary font-semibold mb-4">{profile.role}</h4>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {profile.description}
              </p>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {profile.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary bg-muted/50 p-4 rounded-r-lg">
                "{profile.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}