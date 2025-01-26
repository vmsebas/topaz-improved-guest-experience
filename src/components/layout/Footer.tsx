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
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Lisbon Tiles</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Your authentic Portuguese home in the heart of Lisbon's historic Alfama district.</p>
              <div className="pt-2">
                <p className="font-medium">Legal Information:</p>
                <p>Lisbon Tiles, Lda.</p>
                <p>NIPC: 513456789</p>
                <p>Share Capital: 50.000€</p>
                <p>Commercial Registry: Lisbon</p>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>Travessa da Trindade 18</p>
              <p>1200-469 Lisboa</p>
              <p>Portugal</p>
              <p>Tel: +351 123 456 789</p>
              <p className="text-xs">Cost of a call to the national landline network</p>
              <p>Email: info@lisbontiles.com</p>
            </address>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <button onClick={() => handleNavigation('/blog')} className="hover:text-foreground transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/terms')} className="hover:text-foreground transition-colors">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/privacy')} className="hover:text-foreground transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/cookies')} className="hover:text-foreground transition-colors">
                  Cookie Policy
                </button>
              </li>
              <li>
                <a 
                  href="https://www.consumidor.gov.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Dispute Resolution
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Certificaciones */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Certifications</h3>
            <div className="space-y-4">
              <ComplaintsBook />
              <div className="text-sm">
                <p className="text-muted-foreground mb-2">Competent ADR entity:</p>
                <a 
                  href="https://www.centroarbitragemlisboa.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Lisbon Arbitration Center
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lisbon Tiles, Lda. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};