import React from "react";
import { ExternalLink } from "lucide-react";

export const ComplaintsBook = () => {
  return (
    <a
      href="https://www.livroreclamacoes.pt/inicio"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 hover:opacity-90 transition-opacity group"
    >
      <img
        src="https://www.cm-moimenta.pt/thumbs/cmmoimentadabeira/uploads/writer_file/image/2949/LIVRO_DE_RECLAMA___ESLO_1_980_2500.png"
        alt="Livro de Reclamações"
        className="h-16 w-auto shadow-lg rounded-lg group-hover:scale-105 transition-transform duration-200"
      />
      <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
        Livro de Reclamações <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  );
};