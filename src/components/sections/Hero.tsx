import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
          background: "linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.4) 15%, rgba(255, 255, 255, 0) 40%)"
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Bienvenido a Lisboa
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
          Descubre el encanto de la ciudad desde nuestro acogedor apartamento en el corazón del histórico Alfama
        </p>
        <div className="flex gap-4">
          <Link to="/about">
            <Button size="lg" variant="default">
              Descubre Más
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};