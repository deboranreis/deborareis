import { Cloud, FileCheck, Bug, Activity, FileText, ArrowRight, MessageCircle, Search, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlipCard } from "@/components/FlipCard";


const services = [
  {
    icon: Cloud,
    title: "Segurança em Nuvem",
    subtitle: "GCP",
    description:
      "Avaliação e implementação de controles de segurança para ambientes Google Cloud Platform. IAM, monitoramento e compliance.",
  },
  {
    icon: FileCheck,
    title: "LGPD e ISO 27001",
    subtitle: "Compliance",
    description:
      "Adequação à legislação de proteção de dados e implementação de frameworks de segurança reconhecidos internacionalmente.",
  },
  {
    icon: Bug,
    title: "Gestão de Vulnerabilidades",
    subtitle: "Assessment",
    description:
      "Estruturação de programas de gestão de vulnerabilidades, desde a descoberta até a remediação e acompanhamento contínuo.",
  },
  {
    icon: Activity,
    title: "Monitoramento e Automação",
    subtitle: "SecOps",
    description:
      "Implementação de soluções de monitoramento de segurança e automação de processos para detecção e resposta a incidentes.",
  },
  {
    icon: FileText,
    title: "Revisão de Políticas",
    subtitle: "Governança",
    description:
      "Criação e revisão de políticas, normas e procedimentos de segurança alinhados às melhores práticas e necessidades do negócio.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa inicial",
    description: "Entendo seu contexto, desafios e objetivos de segurança.",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Avalio a situação atual e identifico gaps e oportunidades.",
  },
  {
    icon: Wrench,
    title: "Execução",
    description: "Implementamos as melhorias de forma prática e colaborativa.",
  },
];

const Servicos = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Serviços</h1>
          <p className="text-muted-foreground">
            Soluções personalizadas em cibersegurança para empresas que buscam 
            proteger seus ativos e habilitar o crescimento com segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <FlipCard
              key={service.title}
              className="relative h-64 animate-fade-in"
              front={
                <>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <span className="text-sm text-muted-foreground">{service.subtitle}</span>
                </>
              }
              back={<p className="text-sm leading-relaxed">{service.description}</p>}
            />
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-10 text-center animate-fade-in"
          >
            Como funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className="text-center bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Vamos conversar sobre o seu projeto?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Estou disponível para entender seu contexto e propor soluções que 
            façam sentido para sua empresa.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/contato">
              Entrar em contato
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
