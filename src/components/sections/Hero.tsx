import { Button } from "@/components/ui/button";

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
          background: "linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0) 100%)"
        }}
      />
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 animate-fade-in">
          Your Guide to Lisboa
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl animate-fade-in-up">
          Everything you need to know about your stay and the city's treasures
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Button size="lg" className="gap-2 bg-black text-white hover:bg-black/90">
            Explore Our Spaces
          </Button>
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};