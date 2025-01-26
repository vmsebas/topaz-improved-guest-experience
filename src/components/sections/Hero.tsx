import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/97ce7175-ae56-4a36-b585-877b7c9704c1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white animate-fade-in">
          Welcome to the Magic <br />of Lisboa
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in-up">
          Explore the enchanting streets, taste authentic cuisine, and discover hidden gems in one of Europe's most beautiful capitals. Your Portuguese adventure starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90">
            Explore Our Spaces
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};