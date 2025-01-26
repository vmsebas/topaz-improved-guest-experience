import { ExternalLink } from "lucide-react";

export const ComplaintsBook = () => {
  return (
    <a
      href="https://www.livroreclamacoes.pt/inicio"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-primary transition-colors"
    >
      <img
        src="https://www.livroreclamacoes.pt/img/Logo_LivroReclamacoes.png"
        alt="Livro de Reclamações"
        className="h-8"
      />
      <span className="text-sm">Livro de Reclamações</span>
      <ExternalLink className="h-4 w-4" />
    </a>
  );
};