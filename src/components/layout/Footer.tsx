import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, PhoneCall, Mail, MapPin, Heart, ArrowUpCircle, Instagram, Facebook, Twitter } from "lucide-react";
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

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Travessa+da+Trindade+18+Lisboa', '_blank');
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
              <div className="flex items-center justify-center md:justify-start">
                <PhoneCall size={16} className="mr-2 shrink-0 text-[#f70759]" />
                <p className={textSize}>+351 123 456 789</p>
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
        
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-center md:text-left ${textSize} text-slate-500`}>
            &copy; {new Date().getFullYear()} Lisbon Tiles. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="mt-4 md:mt-0 flex items-center text-slate-500 hover:text-[#f70759] transition-colors"
          >
            <ArrowUpCircle size={16} className="mr-2" /> Back to top
          </button>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}