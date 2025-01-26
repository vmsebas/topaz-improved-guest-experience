import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ComplaintsBook } from "@/components/legal/ComplaintsBook";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-secondary/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Lisbon Tiles</h3>
            <div className="text-muted-foreground space-y-2">
              <p>Your authentic Portuguese home in the heart of Lisbon's historic Alfama district.</p>
              <p className="font-medium">Legal Information:</p>
              <p>**Lisbon Tiles, Lda.**</p>
              <p>NIPC: **513456789**</p>
              <p>Share Capital: **50.000€**</p>
              <p>Commercial Registry: **Lisbon**</p>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic space-y-2">
              <p>Travessa da Trindade 18</p>
              <p>1200-469 Lisboa</p>
              <p>Portugal</p>
              <p>Tel: +351 123 456 789</p>
              <p className="text-xs">Cost of a call to the national landline network</p>
              <p>Email: info@lisbontiles.com</p>
            </address>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation('/blog')} 
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/terms')} 
                  className="hover:text-foreground transition-colors"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/privacy')} 
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/cookies')} 
                  className="hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <a 
                  href="https://www.consumidor.gov.pt/parceiros/sistema-de-defesa-do-consumidor/entidades-de-resolucao-alternativa-de-litigios-de-consumo/ral-mapa-e-lista-de-entidades.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Certifications</h3>
            <div className="space-y-4">
              <ComplaintsBook />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Competent ADR entity:</p>
                <a 
                  href="https://www.centroarbitragemlisboa.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Lisbon Arbitration Center
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lisbon Tiles, Lda. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}