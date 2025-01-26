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
      description: "Red moderna de metro que conecta las principales zonas de Lisboa. Incluye 4 líneas que cubren gran parte de la ciudad y áreas metropolitanas.",
      location: "56 estaciones por toda Lisboa",
      rating: 4.5,
      price: "€1.65/viaje | €6.45/día | €30.00/mes",
      schedule: "06:30 - 01:00",
      duration: "Frecuencia: 3-8 min",
      category: "Public",
      features: ["Accesible", "Wifi gratuito", "Aire acondicionado", "Viajar con bicicleta permitido"],
      website: "https://www.metrolisboa.pt",
      image: "/lovable-uploads/97ce7175-ae56-4a36-b585-877b7c9704c1.png",
      icon: Train
    },
    {
      id: 2,
      title: "Tranvía 28",
      description: "Icónico tranvía amarillo que recorre el casco antiguo de Lisboa. Una experiencia turística imprescindible que conecta Martim Moniz con Campo Ourique.",
      location: "Ruta por el centro histórico",
      rating: 4.8,
      price: "€3.80/viaje | €6.45/día",
      schedule: "07:00 - 22:30",
      duration: "Recorrido: 40-50 min",
      category: "Public",
      features: ["Histórico", "Panorámico", "Centro ciudad", "Climatizado"],
      website: "https://www.carris.pt/descubra/carreiras/28e/",
      image: "/lovable-uploads/61e76d2d-c3dc-44fe-87bf-37e750cd24bd.png",
      icon: Train
    },
    {
      id: 3,
      title: "Autobuses Carris",
      description: "Extensa red de autobuses urbanos que cubre toda Lisboa. Incluye servicios diurnos y nocturnos para una movilidad completa.",
      location: "Toda Lisboa y área metropolitana",
      rating: 4.2,
      price: "€2.00/viaje | €6.45/día | €30.00/mes",
      schedule: "05:30 - 00:00 (Buses nocturnos 00:00 - 05:30)",
      duration: "Según ruta",
      category: "Public",
      features: ["Extenso", "Económico", "Servicio nocturno", "Aire acondicionado"],
      website: "https://www.carris.pt",
      image: "/lovable-uploads/6197cbf6-b48f-4002-b555-3708613a58dd.png",
      icon: Bus
    },
    {
      id: 4,
      title: "Uber/Bolt/FreeNow",
      description: "Servicios de transporte privado bajo demanda. Múltiples opciones disponibles, desde económico hasta premium.",
      location: "Disponible en toda la ciudad",
      rating: 4.6,
      price: "Desde €5.00 (tarifa mínima)",
      schedule: "24/7",
      duration: "Según destino",
      category: "Private",
      features: ["Disponible 24h", "Pago con tarjeta", "Conductor privado", "Aire acondicionado"],
      website: "https://www.uber.com/pt/es-es/",
      image: "/lovable-uploads/9ca4d75d-f08e-4dfb-abb1-9d98bd0c42b7.png",
      icon: Car
    },
    {
      id: 5,
      title: "Gira - Bicicletas compartidas",
      description: "Sistema público de bicicletas compartidas con más de 100 estaciones. Incluye bicicletas eléctricas para facilitar los desplazamientos en las zonas con pendientes.",
      location: "Más de 100 estaciones en Lisboa",
      rating: 4.3,
      price: "€2.00/día | €15.00/mes | €25.00/año",
      schedule: "24/7",
      duration: "Según necesidad",
      category: "Active",
      features: ["Ecológico", "Bicicletas eléctricas", "App móvil", "Estaciones por toda la ciudad"],
      website: "https://www.gira-bicicletasdelisboa.pt",
      image: "/lovable-uploads/e0d4e676-8b90-46f8-8bae-3f3263415c6a.png",
      icon: Bike
    },
    {
      id: 6,
      title: "Aeropuerto Humberto Delgado",
      description: "Principal aeropuerto internacional de Lisboa, conectado con el centro mediante metro (Línea Roja). A solo 20 minutos del centro de la ciudad.",
      location: "Alameda das Comunidades Portuguesas",
      rating: 4.4,
      price: "Metro: €1.65 | Taxi: ~€15-20",
      schedule: "24/7",
      duration: "20 min al centro (metro)",
      category: "Airport",
      features: ["Metro directo", "Duty Free", "Conexiones globales", "Servicios 24h"],
      website: "https://www.ana.pt/pt/lis/home",
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
      <main className="flex-1 container mx-auto px-4 pt-32 pb-8"> {/* Aumentado el padding top a 32 (8rem) */}
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