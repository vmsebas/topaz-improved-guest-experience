import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/lovable-uploads/0bfef87d-4b78-4e81-933f-2f3c2de2fe6c.png" 
            alt="Lizbon Tiles Suites Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/attractions" className="text-sm font-medium hover:text-primary transition-colors">
            Attractions
          </Link>
          <Link to="/transport" className="text-sm font-medium hover:text-primary transition-colors">
            Transport
          </Link>
          <Link to="/restaurants" className="text-sm font-medium hover:text-primary transition-colors">
            Food
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center justify-start pt-8 space-y-6">
              <Link 
                to="/services" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/attractions" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Attractions
              </Link>
              <Link 
                to="/transport" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Transport
              </Link>
              <Link 
                to="/restaurants" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Food
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};