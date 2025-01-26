import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;