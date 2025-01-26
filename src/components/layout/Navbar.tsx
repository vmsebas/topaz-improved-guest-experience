import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            WebGuest
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};