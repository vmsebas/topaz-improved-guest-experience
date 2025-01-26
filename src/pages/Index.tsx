import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F0FB]/50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-16 bg-gradient-to-b from-[#F1F0FB] to-white">
          <Features />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;