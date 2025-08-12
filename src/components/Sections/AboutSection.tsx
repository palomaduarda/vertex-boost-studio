import { Button } from "@/components/ui/button";

export function AboutSection() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Quem Somos – A Vértice da Sua Estratégia
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="glass rounded-3xl p-2 shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Eduardo Lourenço e Paloma Amaral - Vértice Analytics" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              Conheça as mentes por trás da Vértice Analytics – <strong className="text-foreground">Eduardo Lourenço e Paloma Amaral.</strong> 
              Uma parceria que une visão estratégica com a paixão por dados e o pulso do digital. 
              A gente aplica o conhecimento de hoje para desenvolver as bases dos resultados futuros do seu negócio. 
              <em className="text-primary">Sem promessas vazias, com trabalho de verdade.</em>
            </p>
            
            <div className="glass rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Filosofia</h3>
              <p className="text-text-secondary leading-relaxed">
                Na Vértice Analytics, nossa juventude é nossa força. Como estudantes de Engenharia de Software 
                com foco em Ciência de Dados, trazemos para sua empresa o que há de mais recente em metodologias 
                e tecnologias, aliados a uma paixão inesgotável por transformar desafios em oportunidades reais. 
                <em className="text-secondary">Não estamos presos a métodos antigos; nosso olhar é fresco, inovador e, acima de tudo, 
                focado em soluções aplicáveis e tangíveis.</em>
              </p>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="btn-cta w-full lg:w-auto"
              size="lg"
            >
              CONHEÇA NOSSA JORNADA E CAPACIDADES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}