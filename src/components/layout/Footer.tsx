import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, PhoneCall, Mail, MapPin, Heart, Instagram, Facebook, Twitter, AlertCircle, FileText, Info } from "lucide-react";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const textSize = isMobile ? "text-base" : "text-sm";
  const titleSize = isMobile ? "text-xl" : "text-lg";
  const smallTextSize = isMobile ? "text-xs" : "text-xs";

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Travessa+da+Trindade+18+Lisboa', '_blank');
  };
  
  const openComplaintBook = () => {
    window.open('https://www.livroreclamacoes.pt/inicio', '_blank');
  };

  return (
    <footer className="bg-[#f5f1e8] border-t border-gray-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4 text-slate-800`}>Lisbon Tiles</h3>
            <div className="text-slate-600 space-y-3">
              <p className={textSize}>Your authentic Portuguese guide to exploring Lisbon's elegant Chiado neighborhood.</p>
              <p className={textSize + " flex items-center justify-center md:justify-start mt-4"}>
                <Heart size={16} className="mr-2 text-[#f70759]" /> Made with love in Lisboa
              </p>
            </div>
            
            {/* Legal Information */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center text-slate-500 mb-2">
                <Info size={16} className="mr-2 shrink-0 text-[#f70759]" />
                <h4 className={`${textSize} font-medium`}>Legal Information</h4>
              </div>
              <div className="flex items-start mt-2">
                <FileText size={14} className="mr-2 shrink-0 text-slate-500 mt-0.5" />
                <a 
                  href="https://www.livroreclamacoes.pt/inicio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-500 hover:text-[#f70759] transition-colors"
                >
                  <span className={smallTextSize}>Livro de Reclamações</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center md:text-left space-y-5">
            <h3 className={`font-bold ${titleSize} mb-4 text-slate-800`}>Contact</h3>
            <address className="text-slate-600 not-italic space-y-3">
              <div className="space-y-1 flex items-center justify-center md:justify-start">
                <MapPin size={16} className="mr-2 shrink-0 text-[#f70759]" />
                <div>
                  <p className={textSize}>Travessa da Trindade 18</p>
                  <p className={textSize}>1200-469 Lisboa, Portugal</p>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <PhoneCall size={16} className="mr-2 shrink-0 text-[#f70759] mt-1" />
                <div>
                  <p className={textSize}>+351 123 456 789</p>
                  <p className={smallTextSize + " text-slate-500 mt-1"}>
                    As chamadas para este número estão sujeitas às tarifas aplicáveis pelo seu operador de telecomunicações.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="mr-2 shrink-0 text-[#f70759]" />
                <p className={textSize}>
                  <a href="mailto:info@lisbontiles.com" className="hover:text-[#f70759] transition-colors">
                    info@lisbontiles.com
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Button 
                  onClick={openGoogleMaps}
                  variant="outline" 
                  size="sm"
                  className="text-slate-700 border-slate-300 hover:bg-slate-100"
                >
                  <MapPin size={14} className="mr-2" /> View on Map
                </Button>
              </div>
            </address>
          </div>
          
          {/* Links Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className={`font-bold ${titleSize} mb-4 text-slate-800`}>Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-3 text-slate-600">
                  <li>
                    <button 
                      onClick={() => handleNavigation('/blog')} 
                      className={`${textSize} hover:text-[#f70759] transition-colors`}
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('/attractions')} 
                      className={`${textSize} hover:text-[#f70759] transition-colors`}
                    >
                      Attractions
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('/restaurants')} 
                      className={`${textSize} hover:text-[#f70759] transition-colors`}
                    >
                      Restaurants
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-slate-600">
                  <li>
                    <button 
                      onClick={() => handleNavigation('/services')} 
                      className={`${textSize} hover:text-[#f70759] transition-colors`}
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigation('/contact')} 
                      className={`${textSize} hover:text-[#f70759] transition-colors`}
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <a 
                      href="https://visitlisboa.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${textSize} hover:text-[#f70759] transition-colors flex items-center`}
                    >
                      Visit Lisboa <ExternalLink size={12} className="ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#f70759]">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#f70759]">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#f70759]">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Livro de Reclamações - Complaint Book Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/images/legal/livro-reclamacoes.png" 
                alt="Livro de Reclamações" 
                className="h-16 mr-3 object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.src = "https://www.consumidor.gov.pt/upload/membro.6093/ficheiros/488.image.2png";
                  target.onerror = null;
                }}
              />
              <div className="text-left">
                <p className={textSize + " font-medium text-slate-700"}>Livro de Reclamações</p>
                <p className={smallTextSize + " text-slate-500"}>Portuguese Complaint Book</p>
              </div>
            </div>
            <Button
              onClick={openComplaintBook}
              variant="outline"
              size="sm"
              className="text-slate-700 border-slate-300 hover:bg-slate-100"
            >
              <AlertCircle size={14} className="mr-2" /> Submit a Complaint
            </Button>
          </div>
          <p className={smallTextSize + " text-slate-500 text-center mt-4 max-w-3xl mx-auto"}>
            In compliance with Portuguese law (Decreto-Lei n.º 156/2005), all service providers must provide access to the Livro de Reclamações (Complaint Book).
            You can submit your complaint online through the official platform.
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className={`text-center ${textSize} text-slate-500`}>
            &copy; {new Date().getFullYear()} Lisbon Tiles. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}