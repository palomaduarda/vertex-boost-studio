import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@verticeanalytics.online",
      href: "mailto:contato@verticeanalytics.online",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      href: "tel:+5511999999999",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Ribeirão Preto, SP",
      href: "#",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-primary mb-6">
            Fale Com a{" "}
            <span className="text-gradient">Vértice Analytics</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Vamos Construir Juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-modern p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Envie sua mensagem
              </h3>
              <p className="text-text-secondary">
                Conte-nos sobre seu desafio e vamos encontrar a melhor solução juntos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-primary focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-primary focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-primary focus:border-primary"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-primary focus:border-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Conte-nos sobre seu desafio ou projeto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    ENVIAR MENSAGEM
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-modern p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 ${item.color} bg-opacity-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        {item.href && item.href !== "#" ? (
                          <a 
                            href={item.href}
                            className={`${item.color} hover:underline transition-colors duration-300`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-modern p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Redes Sociais
              </h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-blue-600 font-semibold">in</span>
                  </div>
                  <span>LinkedIn Eduardo</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-blue-600 font-semibold">in</span>
                  </div>
                  <span>LinkedIn Paloma</span>
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-text-secondary hover:text-green-600 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <span className="text-green-600 font-semibold">W</span>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}