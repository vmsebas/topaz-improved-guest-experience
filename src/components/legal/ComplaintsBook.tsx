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
        src="https://www.cm-moimenta.pt/thumbs/cmmoimentadabeira/uploads/writer_file/image/2949/LIVRO_DE_RECLAMA___ESLO_1_980_2500.png"
        alt="Livro de Reclamações"
        className="h-12 w-auto"
      />
      <span className="text-sm">Livro de Reclamações</span>
      <ExternalLink className="h-4 w-4" />
    </a>
  );
};