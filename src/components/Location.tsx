import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import Map from "./Map";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em um ambiente acessível e acolhedor, 
            pensado especialmente para o conforto das crianças e famílias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rua das Flores, 123<br />
                  Bairro Jardim Primavera<br />
                  São Paulo, SP - CEP: 01234-567
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-1">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div>Domingo: Fechado</div>
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Informações Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <div>• Estacionamento gratuito disponível</div>
                  <div>• Ambiente climatizado e adaptado</div>
                  <div>• Fácil acesso por transporte público</div>
                  <div>• Brinquedoteca para os pequenos</div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Encontre-nos no Mapa
            </h3>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;