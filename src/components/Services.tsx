import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, School } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicomotricidade",
      description: "Desenvolvimento da coordenação motora, equilíbrio e habilidades cognitivas através de atividades lúdicas e terapêuticas.",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Fisioterapia Infantil",
      description: "Tratamentos especializados para desenvolvimento motor, fortalecimento muscular e reabilitação em ambiente acolhedor.",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Mentorias",
      description: "Orientação especializada para pais e familiares sobre desenvolvimento infantil e estratégias de estímulo.",
      color: "bg-secondary"
    },
    {
      icon: School,
      title: "Visitas Escolares",
      description: "Acompanhamento no ambiente escolar para promover melhor adaptação e desenvolvimento da criança.",
      color: "bg-success"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos cuidado especializado e personalizado para cada criança, 
            sempre com muito carinho e profissionalismo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;