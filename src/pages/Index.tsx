import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Profile Image */}
        <div className="relative inline-block mb-8 animate-fade-in">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-accent-foreground p-1 animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              <img
                src="/Profile.jpg"
                alt="Foto de Débora Reis"
                style={{ objectPosition: "center 90%" }}
              />
            </div>
          </div>
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Name & Title */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Débora Reis
        </h1>
        <p 
          className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Especialista em Cibersegurança
        </p>

        {/* Decorative Line */}
        <div 
          className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent-foreground animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Social Links */}
        <div 
          className="flex justify-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <SocialLinks iconSize="lg" />
        </div>

        {/* Subtle tagline */}
        <p 
          className="mt-12 text-sm text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Governança · Risco · Compliance · Cloud Security
        </p>
      </div>
    </section>
  );
};

export default Index;
