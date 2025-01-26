import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const Transport = () => {
  const [transportOptions] = useState([
    {
      id: 1,
      name: "Metro",
      description: "Lisbon's metro system is fast and efficient.",
      hours: "06:30 - 01:00",
      phone: "+351 210 200 200",
      address: "Various stations across the city",
    },
    {
      id: 2,
      name: "Tram 28",
      description: "A historic tram route that takes you through the city.",
      hours: "06:00 - 23:00",
      phone: "+351 210 200 200",
      address: "Various stops across the city",
    },
    {
      id: 3,
      name: "Buses",
      description: "Extensive bus network covering the entire city.",
      hours: "05:00 - 00:30",
      phone: "+351 210 200 200",
      address: "Various stops across the city",
    },
  ]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="container py-12">
          <h1 className="text-4xl font-bold mb-4">Transport Options in Lisbon</h1>
          <p className="text-muted-foreground mb-8">
            Explore the various transport options available in Lisbon to make your travel easier.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportOptions.map(option => (
              <div key={option.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{option.name}</h2>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{option.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{option.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{option.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">WhatsApp</span>
        </span>
      </button>
    </div>
  );
};

export default Transport;
