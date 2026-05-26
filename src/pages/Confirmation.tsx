import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center gap-8">
      <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
        Obrigado!
      </h1>
      <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
        Entraremos em contato para definir os detalhes do serviço. Fique atento ao seu WhatsApp!
      </p>
      <Link
        to="/"
        className="border border-border px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
      >
        Voltar ao início
      </Link>
    </div>
  );
};

export default Confirmation;
