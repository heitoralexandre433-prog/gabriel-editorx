import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
      {/* Ambient violet glow inspired by reference palette */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl" style={{ background: 'var(--gradient-radial-glow)' }} />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(245 80% 35% / 0.5), transparent 70%)' }} />
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-lg overflow-hidden border border-border">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — Info card */}
        <div className="flex flex-col gap-6">
          <span className="font-sans text-sm text-muted-foreground">
            @gabriel.editorx
          </span>
          <p className="font-sans text-base md:text-lg text-foreground leading-relaxed max-w-md font-normal tracking-tight">
            Sou Gabriel, editor profissional com{" "}
            <span
              className="bg-clip-text text-transparent font-medium"
              style={{ backgroundImage: "var(--gradient-violet)" }}
            >
              expertise
            </span>{" "}
            em edições que elevam padrões, superam expectativas e entregam{" "}
            <span
              className="bg-clip-text text-transparent font-medium"
              style={{ backgroundImage: "var(--gradient-violet)" }}
            >
              resultados excepcionais
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#portfolio"
              className="px-9 py-4 font-poppins text-sm md:text-base font-medium text-primary-foreground rounded-md transition-all hover:opacity-90 tracking-tight"
              style={{ background: 'var(--gradient-violet)', boxShadow: 'var(--shadow-violet)' }}
            >
              Explorar portfólio
            </a>
            <a
              href="#cta"
              className="border border-border px-9 py-4 font-poppins text-sm md:text-base font-medium text-foreground rounded-md transition-colors hover:bg-transparent hover:border-border tracking-tight"
            >
              Fale comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
