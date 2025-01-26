import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img 
              src="https://github.com/vmsebas/webGuest/blob/main/public/logo.png?raw=true" 
              alt="Lizbon Tiles Suites Logo" 
              className="h-8"
            />
          </Link>
        </div>
        <div className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-background border-b p-4 space-y-4' : 'hidden'}`}>
          <Link to="/services" className="text-sm hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/attractions" className="text-sm hover:text-primary transition-colors">
            Attractions
          </Link>
          <Link to="/transport" className="text-sm hover:text-primary transition-colors">
            Transport
          </Link>
          <Link to="/restaurants" className="text-sm hover:text-primary transition-colors">
            Food
          </Link>
          <Link to="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};