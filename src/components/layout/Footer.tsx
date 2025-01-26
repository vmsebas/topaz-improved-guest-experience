import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ComplaintsBook } from "@/components/legal/ComplaintsBook";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const textSize = isMobile ? "text-base" : "text-sm";
  const titleSize = isMobile ? "text-xl" : "text-lg";

  return (
    <footer className="bg-secondary/10">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4`}>Lisbon Tiles</h3>
            <div className="text-muted-foreground space-y-2">
              <p className={textSize}>Your authentic Portuguese home in the heart of Lisbon's historic Alfama district.</p>
              <p className={`font-medium ${textSize}`}>Legal Information:</p>
              <div className="space-y-1">
                <p className={textSize}>**Lisbon Tiles, Lda.**</p>
                <p className={textSize}>NIPC: **513456789**</p>
                <p className={textSize}>Share Capital: **50.000€**</p>
                <p className={textSize}>Commercial Registry: **Lisbon**</p>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4`}>Contact</h3>
            <address className="text-muted-foreground not-italic space-y-2">
              <div className="space-y-1">
                <p className={textSize}>Travessa da Trindade 18</p>
                <p className={textSize}>1200-469 Lisboa</p>
                <p className={textSize}>Portugal</p>
              </div>
              <div className="space-y-1">
                <p className={textSize}>Tel: +351 123 456 789</p>
                <p className="text-xs italic">Cost of a call to the national landline network</p>
                <p className={textSize}>Email: info@lisbontiles.com</p>
              </div>
            </address>
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4`}>Links</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation('/blog')} 
                  className={`${textSize} hover:text-foreground transition-colors`}
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/terms')} 
                  className={`${textSize} hover:text-foreground transition-colors`}
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/privacy')} 
                  className={`${textSize} hover:text-foreground transition-colors`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/cookies')} 
                  className={`${textSize} hover:text-foreground transition-colors`}
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <a 
                  href="https://www.consumidor.gov.pt/parceiros/sistema-de-defesa-do-consumidor/entidades-de-resolucao-alternativa-de-litigios-de-consumo/ral-mapa-e-lista-de-entidades.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSize} hover:text-foreground transition-colors inline-flex items-center gap-1`}
                >
                  Dispute Resolution
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4`}>Certifications</h3>
            <div className="space-y-4">
              <ComplaintsBook />
              <div>
                <p className={`${textSize} text-muted-foreground mb-2`}>Competent ADR entity:</p>
                <a 
                  href="https://www.centroarbitragemlisboa.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSize} text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1`}
                >
                  Lisbon Arbitration Center
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className={`text-center ${textSize} text-muted-foreground`}>
            © {new Date().getFullYear()} Lisbon Tiles, Lda. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}