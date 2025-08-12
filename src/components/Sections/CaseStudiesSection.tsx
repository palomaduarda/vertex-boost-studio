import { Button } from "@/components/ui/button";

export function CaseStudiesSection() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const studies = [
    {
      title: "Otimizando o Funil de Vendas de um E-commerce",
      challenge: "Uma loja online percebe um alto número de visitantes, mas poucas vendas. O dono não sabe onde está o problema: tráfego, página de produto, checkout?",
      approach: "Analisamos os dados de navegação e conversão, mapeamos a jornada do usuário e identificamos pontos de fricção através de dados e entrevistas.",
      solutions: [
        "Otimização das descrições de produtos",
        "Simplificação do processo de checkout",
        "Implementação de testes A/B",
        "Ferramentas de recuperação de carrinho"
      ]
    },
    {
      title: "Otimizando a Comunicação Interna e a Gestão de Tarefas",
      challenge: "Uma equipe de desenvolvimento de software enfrenta atrasos e desentendimentos porque as tarefas não estão claras, a comunicação é dispersa (e-mail, WhatsApp, reuniões informais), e o progresso do projeto é difícil de rastrear.",
      approach: "A primeira etapa seria uma análise do fluxo de trabalho atual da equipe. Mapearíamos como as tarefas são atribuídas, comunicadas e finalizadas. Conversaríamos com os membros para entender as principais barreiras na colaboração e as ferramentas que eles já usam (ou não).",
      solutions: [
        "Implementação de uma ferramenta centralizada de gestão de projetos",
        "Padronização dos canais de comunicação",
        "Criação de rituais de acompanhamento curtos e objetivos",
        "Treinamento prático para garantir eficiência"
      ]
    },
    {
      title: "Aumentando o Alcance e o Engajamento nas Redes Sociais",
      challenge: "Uma pequena marca de cosméticos tem perfis no Instagram e Facebook, mas o número de seguidores não cresce e as publicações recebem poucas curtidas ou comentários. A empresa não sabe que tipo de conteúdo publicar.",
      approach: "Analisaríamos o público-alvo da marca (idade, interesses, comportamento online). Estudaríamos o conteúdo dos concorrentes e as tendências do mercado. Além disso, faríamos uma auditoria completa das redes sociais da empresa para entender o que já foi postado e qual o desempenho de cada tipo de conteúdo.",
      solutions: [
        "Criação de um calendário editorial",
        "Otimização do perfil",
        "Interação com a comunidade",
        "Análise de Métricas"
      ]
    },
    {
      title: "Gestão de Atendimento ao Cliente em Pequenos Negócios",
      challenge: "Uma clínica de fisioterapia tem dificuldade em gerenciar agendamentos e responder a dúvidas de clientes que chegam por telefone, WhatsApp e e-mail. Isso causa falhas na comunicação, overbooking e insatisfação.",
      approach: "Primeiramente, mapearíamos todos os canais de atendimento e o fluxo atual de informações. Faria uma pesquisa com a equipe para entender os principais pontos de dor no processo e o que mais gera retrabalho ou erros. Analisaríamos a demanda de agendamentos e o volume de perguntas recebidas.",
      solutions: [
        "Centralização do Atendimento",
        "Criação de Respostas Rápidas e um FAQ",
        "Implementação de um sistema de agendamento online",
        "Documentação dos Processos"
      ]
    },
    {
      title: "Redução de Custos Operacionais em um Escritório",
      challenge: "Um escritório de advocacia percebe que suas contas de luz, papel e suprimentos de escritório estão muito altas, mas a administração não sabe exatamente de onde vêm os gastos excessivos.",
      approach: "Realizaríamos uma auditoria dos gastos operacionais dos últimos seis meses. Isso incluiria a análise de contas de energia, relatórios de impressão, consumo de papel e pedidos de suprimentos. Conversaríamos com a equipe para entender os hábitos diários e o uso de recursos.",
      solutions: [
        "Otimização do Uso de Energia",
        "Digitalização de Documentos",
        "Gestão de Estoque de Suprimentos",
        "Análise e Negociação com Fornecedores"
      ]
    }
  ];

  return (
    <section id="estudos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Estudos de Aplicação
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Como Nós Pensamos e Agimos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {studies.map((study, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {study.title}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">O Desafio</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-3">Nossa Abordagem</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {study.approach}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-3">Soluções Implementadas</h4>
                  <ul className="space-y-2">
                    {study.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-text-secondary">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleCTAClick}
            className="btn-hero"
            size="lg"
          >
            TEM UM DESAFIO? CONVERSE CONOSCO
          </Button>
        </div>
      </div>
    </section>
  );
}