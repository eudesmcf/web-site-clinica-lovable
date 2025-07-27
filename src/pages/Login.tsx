import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Área Restrita</CardTitle>
          <CardDescription>
            Acesso para profissionais da clínica
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" disabled>
            Funcionalidade em Desenvolvimento
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Esta área será ativada conforme necessário
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;