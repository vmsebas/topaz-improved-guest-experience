import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#F1F0FB]/80 backdrop-blur-sm z-50 border-b border-[#D3E4FD]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src="https://github.com/vmsebas/webGuest/blob/main/public/logo.png?raw=true" 
              alt="Lizbon Tiles Suites Logo" 
              className="h-8"
            />
          </Link>
        </div>
        <div className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-[#F1F0FB]/95 border-b border-[#D3E4FD] p-4 space-y-4 animate-fade-in' : 'hidden'}`}>
          <Link to="/services" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            Services
          </Link>
          <Link to="/attractions" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            Attractions
          </Link>
          <Link to="/transport" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            Transport
          </Link>
          <Link to="/restaurants" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            Food
          </Link>
          <Link to="/about" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            About
          </Link>
          <Link to="/contact" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">
            Contact
          </Link>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden hover:bg-[#D3E4FD]/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};