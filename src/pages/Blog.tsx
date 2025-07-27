import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Artigos e dicas sobre desenvolvimento infantil
          </p>
        </div>
        
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Em Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Esta seção estará disponível em breve com conteúdos exclusivos sobre 
              desenvolvimento infantil, dicas para pais e novidades da clínica.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;