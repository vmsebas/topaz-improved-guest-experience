import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4`}>Lisbon Tiles</h3>
            <div className="text-muted-foreground space-y-2">
              <p className={textSize}>Your authentic Portuguese guide to exploring Lisbon's historic Alfama district.</p>
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
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className={`text-center ${textSize} text-muted-foreground`}>
            © {new Date().getFullYear()} Lisbon Tiles. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}