import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
          Welcome to <span className="text-primary">WebGuest</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up">
          The ultimate platform for managing your guest experience. Simple, powerful, and designed for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};