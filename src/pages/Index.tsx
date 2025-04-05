import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { useEffect, useRef, useState } from "react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const Index = () => {
  // State to track the widget container's width for responsiveness
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  // Update container width on resize
  useEffect(() => {
    function handleResize() {
      // Para evitar problemas en dispositivos móviles, establecemos un ancho mínimo
      const minWidth = 280;
      const calculatedWidth = widgetContainerRef.current ? widgetContainerRef.current.offsetWidth : 300;
      setContainerWidth(Math.max(calculatedWidth, minWidth));
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Civitatis Tours Widget Section */}
        <section className="w-full bg-white py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-slate-800">Explore Lisbon's Best Tours & Activities</h2>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Discover the best guided tours, day trips, and activities in and around Lisbon, handpicked for our guests.</p>
            </div>
            <div ref={widgetContainerRef} className="relative max-w-5xl mx-auto">
              <div className="text-center">
                <iframe 
                  className="civitatis-iframe"
                  title="Civitatis Tours and Activities"
                  src={`https://www.civitatis.com/widget-activities/?agencyId=41769&display=comfort&cant=${window.innerWidth < 768 ? '2' : '4'}&lang=en&currency=EUR&zone=404&transfer=1&cmp=Widget_Lisbon_Metropolitan_Area_EN&width=${containerWidth}px&height=${window.innerWidth < 768 ? '400' : '500'}px&hideButton=0&centerContent=1&typeSelection=all&color=f70759&typography=Montserrat&removeBackground=1&showShadow=1&roundedButtons=1`}
                  width="100%"
                  height={window.innerWidth < 768 ? '400px' : '500px'}
                  frameBorder="0"
                  style={{ maxWidth: '100%', margin: '0 auto' }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      
      <WhatsAppButton phoneNumber="+351900123456" />
    </div>
  );
};

export default Index;