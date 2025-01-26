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
      title: "Lisbon Metro",
      description: "Modern metro network connecting main areas of Lisbon. Includes 4 lines covering most of the city and metropolitan areas. Viva Viagem card required for all journeys.",
      location: "56 stations across Lisbon",
      rating: 4.5,
      price: {
        single: "€1.80",
        daily: "€6.85",
        tourist: {
          "24h": "€6.85",
          "72h": "€16.50",
          "7 days": "€27.00"
        }
      },
      schedule: "06:30 - 01:00",
      duration: "Frequency: 3-8 min",
      category: "Public",
      features: [
        "Viva Viagem card required (€0.50)",
        "Zapping available",
        "Free WiFi",
        "Air conditioning",
        "Accessible"
      ],
      website: "https://www.metrolisboa.pt",
      image: "/lovable-uploads/97ce7175-ae56-4a36-b585-877b7c9704c1.png",
      icon: Train
    },
    {
      id: 2,
      title: "Tranvía 28",
      description: "Icónico tranvía amarillo que recorre el casco antiguo de Lisboa. Una experiencia turística imprescindible que conecta Martim Moniz con Campo Ourique. Utiliza la misma tarjeta Viva Viagem del metro.",
      location: "Ruta por el centro histórico",
      rating: 4.8,
      price: {
        single: "€3.00",
        daily: "€6.85",
        tourist: {
          "24h": "€6.85",
          "72h": "€16.50",
          "7 días": "€27.00"
        }
      },
      schedule: "07:00 - 22:30",
      duration: "Recorrido: 40-50 min",
      category: "Public",
      features: [
        "Tarjeta Viva Viagem obligatoria (€0.50)",
        "Histórico",
        "Panorámico",
        "Centro ciudad",
        "Climatizado"
      ],
      website: "https://www.carris.pt/descubra/carreiras/28e/",
      image: "/lovable-uploads/61e76d2d-c3dc-44fe-87bf-37e750cd24bd.png",
      icon: Train
    },
    {
      id: 3,
      title: "Autobuses Carris",
      description: "Extensa red de autobuses urbanos que cubre toda Lisboa. Incluye servicios diurnos y nocturnos. Usa la misma tarjeta Viva Viagem del metro y tranvía.",
      location: "Toda Lisboa y área metropolitana",
      rating: 4.2,
      price: {
        single: "€2.00",
        daily: "€6.85",
        tourist: {
          "24h": "€6.85",
          "72h": "€16.50",
          "7 días": "€27.00"
        }
      },
      schedule: "05:30 - 00:00 (Buses nocturnos 00:00 - 05:30)",
      duration: "Según ruta",
      category: "Public",
      features: [
        "Tarjeta Viva Viagem obligatoria (€0.50)",
        "Zapping disponible",
        "Servicio nocturno",
        "Aire acondicionado",
        "Accesible"
      ],
      website: "https://www.carris.pt",
      image: "/lovable-uploads/6197cbf6-b48f-4002-b555-3708613a58dd.png",
      icon: Bus
    },
    {
      id: 4,
      title: "Uber/Bolt/FreeNow",
      description: "Servicios de transporte privado bajo demanda. Múltiples opciones disponibles, desde económico hasta premium. Ideal para viajes al aeropuerto o zonas sin cobertura de transporte público.",
      location: "Disponible en toda la ciudad",
      rating: 4.6,
      price: {
        base: "€3.50",
        minimum: "€5.00",
        airport: "€15-20",
        perKm: "€0.95/km"
      },
      schedule: "24/7",
      duration: "Según destino",
      category: "Private",
      features: [
        "Disponible 24h",
        "Pago con tarjeta",
        "Conductor privado",
        "Aire acondicionado",
        "Precio estimado en app"
      ],
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
      price: {
        casual: {
          "24h": "€10.00",
          "72h": "€15.00"
        },
        monthly: "€20.00",
        annual: "€25.00"
      },
      schedule: "24/7",
      duration: "Según necesidad",
      category: "Active",
      features: [
        "Bicicletas eléctricas",
        "App móvil necesaria",
        "Primer viaje gratis",
        "45 minutos por viaje",
        "Estaciones por toda la ciudad"
      ],
      website: "https://www.gira-bicicletasdelisboa.pt",
      image: "/lovable-uploads/e0d4e676-8b90-46f8-8bae-3f3263415c6a.png",
      icon: Bike
    },
    {
      id: 6,
      title: "Aeropuerto Humberto Delgado",
      description: "Principal aeropuerto internacional de Lisboa, conectado con el centro mediante metro (Línea Roja). Múltiples opciones de transporte disponibles incluyendo metro, autobús y taxi.",
      location: "Alameda das Comunidades Portuguesas",
      rating: 4.4,
      price: {
        metro: "€1.80",
        aerobus: "€4.00",
        taxi: "€15-20",
        uber: "€15-25"
      },
      schedule: "24/7",
      duration: "20 min al centro (metro)",
      category: "Airport",
      features: [
        "Metro directo al centro",
        "Aerobus disponible",
        "Parada de taxis 24h",
        "Conexiones globales",
        "Información turística"
      ],
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
      <main className="flex-1 container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Transport in Lisbon</h1>
          <p className="text-muted-foreground text-center mb-8">
            Discover the best ways to move around the city
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Transport Cards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Viva Viagem Card</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Card cost: €0.50 (rechargeable)</li>
                  <li>Valid for metro, bus, tram and CP trains</li>
                  <li>Zapping option: top up from €3.00 to €40.00</li>
                  <li>Cheaper single trips with Zapping (€1.80)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Tourist Passes</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>24h Pass: €6.85 (unlimited on Carris/Metro network)</li>
                  <li>72h Pass: €16.50 (unlimited on Carris/Metro network)</li>
                  <li>Lisboa Card: from €20.00 (includes museums and attractions)</li>
                  <li>7-day Pass: €27.00 (ideal for longer stays)</li>
                </ul>
              </div>
            </div>
          </div>

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
        aria-label="Contact via WhatsApp"
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
