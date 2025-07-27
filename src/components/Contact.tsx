import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida e atendimento personalizado",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.",
      color: "bg-success hover:bg-success/90"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Acompanhe nossas dicas e novidades",
      action: "Seguir no Instagram",
      link: "https://instagram.com/clinicainfantil",
      color: "bg-accent hover:bg-accent/90"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Para dúvidas detalhadas e informações",
      action: "Enviar E-mail",
      link: "mailto:contato@clinicainfantil.com.br",
      color: "bg-primary hover:bg-primary/90"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e sua família. 
            Entre em contato conosco através do canal de sua preferência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className={`w-full ${method.color} text-white shadow-lg`}
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                Telefone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-foreground">(11) 99999-9999</p>
              <p className="text-sm text-muted-foreground mt-1">
                Atendimento de segunda a sexta, das 8h às 18h
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;