import { Shield, Cloud, Cog, Quote } from "lucide-react";

const expertiseAreas = [
  {
    icon: Shield,
    title: "Governança, Risco e Compliance",
    description: "LGPD, ISO 27001, políticas de segurança e frameworks de gestão de riscos.",
  },
  {
    icon: Cloud,
    title: "Segurança em Cloud (GCP)",
    description: "Arquiteturas seguras, IAM, monitoramento e hardening de ambientes em nuvem.",
  },
  {
    icon: Cog,
    title: "Automação e Operações",
    description: "Automação de rotinas e fluxos para eficiência operacional, redução de erros humanos e gestão de riscos.",
  },
];

const Sobre = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 p-1">
              <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
                <img
                src="../../public/Profile.jpg"
                alt="Foto de Débora Reis"
                style={{ objectPosition: "center 100%" }}
              />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content Side */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Quem sou eu
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou consultora em cibersegurança, com foco em ajudar empresas a protegerem 
                seus ativos digitais de forma prática, eficiente e alinhada aos objetivos do 
                negócio. Atuo apoiando organizações que precisam estruturar ou evoluir sua 
                segurança da informação sem complicação, excesso de burocracia ou soluções 
                desconectadas da realidade.
              </p>
              <p>
                Minha experiência combina visão estratégica de negócios com profundidade 
                técnica, passando por temas como segurança em nuvem, governança, gestão de 
                riscos, conformidade com a LGPD e boas práticas de segurança. Busco entender 
                o contexto, o momento e os desafios de cada empresa para propor soluções sob 
                medida, que realmente funcionem no dia a dia.
              </p>
              <p>
                Acredito que segurança bem feita é aquela que habilita o crescimento, traz 
                confiança para clientes e parceiros e sustenta a tomada de decisão, e não 
                aquela que cria barreiras ou atrasa a operação. Por isso, meu trabalho é 
                orientado a clareza, priorização e impacto real, ajudando empresas a evoluírem 
                sua maturidade em segurança de forma consistente e sustentável.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-10 text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            No que atuo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-6 rounded-xl border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div 
          className="max-w-3xl mx-auto text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Quote className="h-10 w-10 mx-auto mb-6 text-primary/50" />
          <blockquote className="text-xl md:text-2xl font-medium italic text-foreground/90 mb-4">
            "Segurança da informação não é sobre dizer não. É sobre 
            encontrar formas seguras de dizer sim."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
