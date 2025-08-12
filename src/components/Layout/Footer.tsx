import { Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn Eduardo",
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn Paloma", 
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5511999999999",
      icon: MessageCircle,
      color: "hover:text-green-600"
    }
  ];

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Estudos de Aplicação", href: "#estudos" },
    { name: "Contato", href: "#contato" }
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-space font-bold">
                Vértice Analytics
              </span>
            </div>
            <p className="text-white/80 text-lg mb-6 max-w-md leading-relaxed">
              Capacidades Aplicadas Para Contribuir Com Seu Negócio. 
              Transformamos dados em oportunidades e desafios em soluções digitais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 ${link.color} group`}
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <a 
                  href="mailto:contato@verticeanalytics.online"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  contato@verticeanalytics.online
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <a 
                  href="tel:+5511999999999"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <span className="text-white/80">
                  Ribeirão Preto, SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Vértice Analytics. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}