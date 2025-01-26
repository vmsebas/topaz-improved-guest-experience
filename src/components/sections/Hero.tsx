import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513735492246-483525079686')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tu Hogar en el Corazón de Lisboa
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Descubre el encanto de vivir en el histórico barrio de Alfama, donde la tradición portuguesa cobra vida en cada esquina.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-primary text-lg px-8 py-6"
            >
              <Link to="/attractions">
                Explorar Lisboa
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6"
            >
              <Link to="/services">
                Servicios Esenciales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};