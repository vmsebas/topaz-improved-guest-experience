import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/0bfef87d-4b78-4e81-933f-2f3c2de2fe6c.png" 
              alt="Lizbon Tiles Suites Logo" 
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-24 left-0 w-full bg-background border-b p-6 space-y-4' : 'hidden'}`}>
          <Link to="/services" className="text-base font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/attractions" className="text-base font-medium hover:text-primary transition-colors">
            Attractions
          </Link>
          <Link to="/transport" className="text-base font-medium hover:text-primary transition-colors">
            Transport
          </Link>
          <Link to="/restaurants" className="text-base font-medium hover:text-primary transition-colors">
            Food
          </Link>
          <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden p-4 h-14 w-14 touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-10 w-10" />
        </Button>
      </div>
    </nav>
  );
};