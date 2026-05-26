const CTASection = () => {
  return (
    <section id="cta" className="relative px-8 md:px-16 lg:px-24 py-24 flex flex-col items-center text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: 'var(--gradient-radial-glow)' }} />
      <div className="relative max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-6">
          Pronto para transformar seus vídeos?
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground mb-12 max-w-md mx-auto tracking-tight">
          Entre em contato e vamos criar algo incrível juntos.
        </p>
        <a
          href="/contato"
          className="inline-block px-12 py-5 font-sans text-base text-foreground rounded-md transition-all hover:opacity-90 font-medium tracking-tight"
          style={{ background: 'var(--gradient-violet)', boxShadow: 'var(--shadow-violet)' }}
        >
          Contratar agora
        </a>
      </div>
      <p className="font-mono text-xs text-foreground mt-auto pt-24">
        © {new Date().getFullYear()} — Todos os direitos reservados
      </p>
    </section>
  );
};

export default CTASection;
