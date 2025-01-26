import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ComplaintsBook } from "@/components/legal/ComplaintsBook";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Lisbon Tiles</h3>
            <div className="text-muted-foreground space-y-2">
              <p>Su hogar portugués auténtico en el corazón del barrio histórico de Alfama en Lisboa.</p>
              <p className="font-medium">Información Legal:</p>
              <p>**Lisbon Tiles, Lda.**</p>
              <p>NIPC: **513456789**</p>
              <p>Capital Social: **50.000€**</p>
              <p>Reg. Comercial: **Lisboa**</p>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <address className="text-muted-foreground not-italic space-y-2">
              <p>Travessa da Trindade 18</p>
              <p>1200-469 Lisboa</p>
              <p>Portugal</p>
              <p>Tel: +351 123 456 789</p>
              <p>Email: info@lisbontiles.com</p>
            </address>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.consumidor.gov.pt/parceiros/sistema-de-defesa-do-consumidor/entidades-de-resolucao-alternativa-de-litigios-de-consumo/ral-mapa-e-lista-de-entidades.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Resolución de Litigios
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Certificaciones</h3>
            <div className="space-y-4">
              <ComplaintsBook />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Entidad RAL competente:</p>
                <a 
                  href="https://www.centroarbitragemlisboa.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Centro de Arbitragem de Lisboa
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lisbon Tiles, Lda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};