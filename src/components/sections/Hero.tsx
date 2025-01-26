import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
          background: "linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.4) 15%, rgba(0, 0, 0, 0.4) 40%)"
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center gap-6 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          Bienvenido a Lisboa
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white font-medium max-w-[800px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          Descubre el encanto de la ciudad desde nuestro acogedor apartamento en el corazón del histórico Alfama
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link to="/about">
            <Button 
              size="lg" 
              variant="default" 
              className="w-full sm:w-auto bg-white text-black hover:bg-white/90 transition-all duration-300"
            >
              Descubre Más
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/20 transition-all duration-300"
            >
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};