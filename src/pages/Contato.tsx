import { Mail } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";

const Contato = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar?</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Se quiser conversar, tirar dúvidas ou entender como posso ajudar 
              no seu contexto, é só me chamar. Estou sempre aberta para um bom papo.
            </p>
          </div>

          {/* Email Button */}
          <div 
            className="mb-12 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Button
              asChild
              size="lg"
              className="gap-2 text-base px-8 py-6"
            >
              <a href="mailto:eu@deborareis.net.br">
                <Mail className="h-5 w-5" />
                Entrar em contato por e-mail
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div 
            className="flex items-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">ou encontre-me em</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <SocialLinks iconSize="lg" />
          </div>

          {/* Decorative element */}
          <div 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-muted-foreground italic">
              Responderei o mais breve possível. Caso prefira, 
              também pode me encontrar no LinkedIn para uma conexão profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
