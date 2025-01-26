import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { TransportFilter } from "@/components/transport/TransportFilter";
import { TransportCard } from "@/components/transport/TransportCard";
import { Bus, Car, Train, Plane, Bike, MessageCircle } from "lucide-react";

const Transport = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const transportOptions = [
    {
      id: 1,
      title: "Metro de Lisboa",
      description: "Red de metro moderna y eficiente que conecta las principales zonas de la ciudad.",
      location: "Varias estaciones por toda Lisboa",
      rating: 4.5,
      price: "€1.50/viaje",
      schedule: "06:30 - 01:00",
      duration: "Frecuencia: 3-10 min",
      category: "Public",
      features: ["Accesible", "Wifi", "Aire acondicionado"],
      website: "https://www.metrolisboa.pt",
      image: "/lovable-uploads/97ce7175-ae56-4a36-b585-877b7c9704c1.png",
      icon: Train
    },
    {
      id: 2,
      title: "Tranvía 28",
      description: "Histórico tranvía que recorre las calles más emblemáticas de Lisboa.",
      location: "Ruta por el centro histórico",
      rating: 4.8,
      price: "€3.00/viaje",
      schedule: "06:00 - 23:00",
      duration: "Recorrido: 45 min",
      category: "Public",
      features: ["Histórico", "Panorámico", "Centro ciudad"],
      website: "https://www.carris.pt",
      image: "/lovable-uploads/61e76d2d-c3dc-44fe-87bf-37e750cd24bd.png",
      icon: Train
    },
    {
      id: 3,
      title: "Autobuses Carris",
      description: "Extensa red de autobuses que cubre toda la ciudad y alrededores.",
      location: "Toda Lisboa",
      rating: 4.2,
      price: "€2.00/viaje",
      schedule: "05:00 - 00:30",
      duration: "Según ruta",
      category: "Public",
      features: ["Extenso", "Económico", "Nocturno"],
      website: "https://www.carris.pt",
      image: "/lovable-uploads/6197cbf6-b48f-4002-b555-3708613a58dd.png",
      icon: Bus
    },
    {
      id: 4,
      title: "Uber",
      description: "Servicio de transporte privado bajo demanda.",
      location: "Disponible en toda la ciudad",
      rating: 4.6,
      price: "Desde €5.00",
      schedule: "24/7",
      duration: "Según destino",
      category: "Private",
      features: ["Disponible 24h", "Pago con tarjeta", "Conductor privado"],
      website: "https://www.uber.com",
      image: "/lovable-uploads/9ca4d75d-f08e-4dfb-abb1-9d98bd0c42b7.png",
      icon: Car
    },
    {
      id: 5,
      title: "Gira - Bicicletas compartidas",
      description: "Sistema de bicicletas compartidas para moverse por la ciudad.",
      location: "Estaciones por toda Lisboa",
      rating: 4.3,
      price: "€2.00/30min",
      schedule: "24/7",
      duration: "Según necesidad",
      category: "Active",
      features: ["Ecológico", "Saludable", "Flexible"],
      website: "https://www.gira-bicicletasdelisboa.pt",
      image: "/lovable-uploads/e0d4e676-8b90-46f8-8bae-3f3263415c6a.png",
      icon: Bike
    },
    {
      id: 6,
      title: "Aeropuerto de Lisboa",
      description: "Principal aeropuerto internacional de Lisboa con conexiones globales.",
      location: "Alameda das Comunidades Portuguesas",
      rating: 4.4,
      price: "Varía",
      schedule: "24/7",
      duration: "Según vuelo",
      category: "Airport",
      features: ["Internacional", "Duty Free", "Conexiones globales"],
      website: "https://www.ana.pt",
      image: "/lovable-uploads/0bfef87d-4b78-4e81-933f-2f3c2de2fe6c.png",
      icon: Plane
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  const filteredOptions = selectedCategory === "all"
    ? transportOptions
    : transportOptions.filter(option => option.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Transporte en Lisboa</h1>
          <p className="text-muted-foreground text-center mb-8">
            Descubre las mejores opciones para moverte por la ciudad
          </p>
          
          <TransportFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOptions.map((option) => (
              <TransportCard key={option.id} option={option} />
            ))}
          </div>
        </div>
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