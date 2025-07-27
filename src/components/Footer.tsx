const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-bold text-lg">Clínica Infantil</span>
            </div>
            <p className="text-sm text-background/80">
              Cuidado especializado para crianças com muito carinho e profissionalismo.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Psicomotricidade</li>
              <li>Fisioterapia Infantil</li>
              <li>Mentorias</li>
              <li>Visitas Escolares</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Rua das Flores, 123</li>
              <li>São Paulo, SP</li>
              <li>(11) 99999-9999</li>
              <li>contato@clinicainfantil.com.br</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-background/20" />
        
        <div className="text-center text-sm text-background/60">
          © 2024 Clínica Infantil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;