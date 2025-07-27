import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamMember from "@/assets/team-member.jpg";

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais especializados e dedicados ao cuidado infantil, 
            comprometidos com o desenvolvimento e bem-estar de cada criança.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="max-w-md group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardContent className="p-6 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src={teamMember} 
                  alt="Profissional da equipe" 
                  className="relative z-10 w-32 h-32 object-cover rounded-full mx-auto border-4 border-card shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Dra. Maria Silva
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Fisioterapeuta e Psicomotricista
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Psicomotricidade
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                  Fisioterapia Infantil
                </Badge>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  10+ anos experiência
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Especialista em desenvolvimento infantil com formação em Fisioterapia e 
                Psicomotricidade. Dedicada a proporcionar cuidado personalizado e acolhedor 
                para cada criança e família.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;