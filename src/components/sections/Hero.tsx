import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();
  const titleSize = isMobile ? "text-6xl md:text-7xl lg:text-8xl" : "text-5xl md:text-7xl lg:text-8xl";
  const descriptionSize = isMobile ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-2xl lg:text-3xl";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e0d4e676-8b90-46f8-8bae-3f3263415c6a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)"
        }}
      />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/lovable-uploads/7e1dd70d-a699-452d-b9a5-7bd879062b16.png" 
          alt="Lisbon Tiles Suites Logo" 
          className="h-16 md:h-20"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 px-4">
        <h1 className="text-white space-y-4">
          <span className={`${titleSize} font-bold tracking-tighter block drop-shadow-lg`}>
            Lisbon
          </span>
        </h1>
        
        <p className={`${descriptionSize} text-white font-medium max-w-[800px] leading-relaxed drop-shadow-lg`}>
          Discover the charm of the city from our cozy apartment in the heart of historic Alfama
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Link to="/about">
            <Button 
              size="lg" 
              className="min-w-[200px] bg-[#1EAEDB] hover:bg-[#33C3F0] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              Discover More
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[200px] border-2 border-white text-white bg-black/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};