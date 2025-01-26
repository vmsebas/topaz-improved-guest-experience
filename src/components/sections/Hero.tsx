import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white animate-fade-in">
          Bienvenido a <span className="text-primary">WebGuest</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in-up">
          La plataforma definitiva para gestionar tu experiencia con huéspedes. Simple, potente y diseñada para negocios modernos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
            Comenzar Ahora <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
            Saber Más
          </Button>
        </div>
      </div>
    </section>
  );
};