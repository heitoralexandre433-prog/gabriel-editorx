import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo seu número
const WHATSAPP_MESSAGE = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-secondary px-6 py-4 rounded-full border border-border text-foreground font-poppins text-sm tracking-tight transition-colors hover:bg-foreground hover:text-primary-foreground shadow-lg"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline">Suporte</span>
    </a>
  );
};

export default WhatsAppButton;
