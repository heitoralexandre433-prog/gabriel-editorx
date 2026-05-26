import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";



const sourceOptions = [
  "Instagram",
  "TikTok",
  "Indicação",
  "Outro",
];

const ContactForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    
    deadline: "",
    
    source: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome: form.name,
      telefone: form.whatsapp,
      
      prazo: form.deadline,
      
      como_encontrou: form.source,
      mensagem: form.message,
    };
    console.log('📤 Dados enviados para o backend:', payload);
    try {
      const response = await fetch('https://banco-de-dados-dos-leads-production.up.railway.app/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);
      if (response.ok) {
        console.log('✅ Resposta do servidor (sucesso):', response.status, data);
      } else {
        console.error('❌ Resposta do servidor (erro):', response.status, data);
      }
    } catch (err) {
      console.error('❌ Erro de rede ao enviar dados:', err);
    }
    navigate("/confirmacao");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-8"
      >
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Solicitar orçamento
        </h1>
        <p className="font-mono text-xs text-muted-foreground text-center tracking-widest uppercase mb-4">
          Preencha os dados abaixo
        </p>

        {/* Nome */}
        <div className="flex flex-col gap-2">
          <Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Nome completo
          </Label>
          <Input
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-secondary border-border font-mono text-sm"
            placeholder="Seu nome"
          />
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-2">
          <Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            WhatsApp / Telefone
          </Label>
          <Input
            required
            value={form.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
            className="bg-secondary border-border font-mono text-sm"
            placeholder="(00) 00000-0000"
          />
        </div>


        {/* Prazo */}
        <div className="flex flex-col gap-2">
          <Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Prazo que precisa
          </Label>
          <Input
            required
            type="date"
            value={form.deadline}
            onChange={(e) => handleChange("deadline", e.target.value)}
            className="bg-secondary border-border font-mono text-sm"
          />
        </div>


        {/* Como nos encontrou */}
        <div className="flex flex-col gap-2">
          <Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Como nos encontrou
          </Label>
          <div className="flex flex-wrap gap-3">
            {sourceOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleChange("source", opt)}
                className={`px-5 py-3 font-mono text-xs uppercase tracking-widest border transition-all ${
                  form.source === opt
                    ? "bg-foreground text-primary-foreground border-foreground"
                    : "bg-secondary border-border text-foreground hover:bg-accent"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem */}
        <div className="flex flex-col gap-2">
          <Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Mensagem / Descrição do projeto
          </Label>
          <Textarea
            required
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="bg-secondary border-border font-mono text-sm min-h-[120px]"
            placeholder="Descreva seu projeto..."
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full px-12 py-5 font-mono text-sm uppercase tracking-widest text-primary-foreground rounded-md transition-all hover:opacity-90 mt-4"
          style={{ background: 'var(--gradient-violet)', boxShadow: 'var(--shadow-violet)' }}
        >
          Concluir
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
