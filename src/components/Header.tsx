import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Clínica Infantil</h1>
              <p className="text-sm text-muted-foreground">Cuidado especializado para crianças</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Localização
            </button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="bg-primary hover:bg-primary/90"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;