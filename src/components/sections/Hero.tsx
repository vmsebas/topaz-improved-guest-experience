import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/6197cbf6-b48f-4002-b555-3708613a58dd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.6) 25%, rgba(255, 255, 255, 0.2) 100%)"
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