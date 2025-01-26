import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Train, Bus, Ship, Car, Bike } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transportOptions = [
  {
    id: 1,
    title: "Metro de Lisboa",
    description: "Red moderna y eficiente que conecta los principales puntos de la ciudad",
    location: "Red metropolitana",
    rating: 4.8,
    price: "€1.50",
    schedule: "6:30 AM - 1:00 AM",
    duration: "Frecuencia: 5-10 min",
    category: "Public",
    image: "https://images.unsplash.com/photo-1581252584837-7dd6a7c27d04",
    icon: Train
  },
  {
    id: 2,
    title: "Red de Autobuses Carris",
    description: "Extensa red de autobuses que cubre toda la ciudad",
    location: "Lisboa",
    rating: 4.6,
    price: "€2.00",
    schedule: "24/7 service",
    duration: "Frecuencia variable",
    category: "Public",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    icon: Bus
  },
  {
    id: 3,
    title: "Transbordador del Tajo",
    description: "Conexión marítima con la orilla sur del río Tajo",
    location: "Terreiro do Paço",
    rating: 4.7,
    price: "€2.75",
    schedule: "7:00 AM - 10:00 PM",
    duration: "10-15 minutos",
    category: "Public",
    image: "https://images.unsplash.com/photo-1569263900347-06b1e8c825ab",
    icon: Ship
  },
  {
    id: 4,
    title: "Taxis y Ride-Sharing",
    description: "Servicios de taxi tradicional y aplicaciones de transporte",
    location: "Toda la ciudad",
    rating: 4.5,
    price: "Desde €3.25",
    schedule: "24/7",
    duration: "Según destino",
    category: "Private",
    image: "https://images.unsplash.com/photo-1621963458148-db0d0a7e2a4e",
    icon: Car
  },
  {
    id: 5,
    title: "Gira - Bicicletas compartidas",
    description: "Sistema de bicicletas públicas para recorrer la ciudad",
    location: "Múltiples estaciones",
    rating: 4.4,
    price: "€2/día",
    schedule: "24/7",
    duration: "Uso ilimitado",
    category: "Active",
    image: "https://images.unsplash.com/photo-1556316384-12c35d30afa4",
    icon: Bike
  }
];

const Transport = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTransport = selectedCategory === "all" 
    ? transportOptions 
    : transportOptions.filter(option => option.category === selectedCategory);

  const getGoogleMapsUrl = (title: string, location: string) => {
    const query = encodeURIComponent(`${title}, ${location}, Lisboa, Portugal`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Transporte en Lisboa</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre las mejores opciones para moverte por Lisboa. Desde el histórico 
              tranvía hasta el moderno metro, encuentra la forma más conveniente de explorar la ciudad.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="flex justify-center space-x-2">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                Todos
              </TabsTrigger>
              <TabsTrigger value="Public" onClick={() => setSelectedCategory("Public")}>
                Público
              </TabsTrigger>
              <TabsTrigger value="Private" onClick={() => setSelectedCategory("Private")}>
                Privado
              </TabsTrigger>
              <TabsTrigger value="Active" onClick={() => setSelectedCategory("Active")}>
                Activo
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransport.map((option) => (
              <Card key={option.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up">
                <div className="relative h-64">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {option.category}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {option.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <option.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{option.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{option.schedule}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{option.price}</span>
                    <Button 
                      onClick={() => {
                        window.open(getGoogleMapsUrl(option.title, option.location), '_blank');
                      }}
                    >
                      Ver en Mapa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Consejos de Transporte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Train className="h-5 w-5" />
                    Tarjeta Viva Viagem
                  </h3>
                  <p className="text-muted-foreground">
                    Obtén una tarjeta Viva Viagem para viajes ilimitados en transporte 
                    público. Válida por 24h, 48h o 72h. Disponible en cualquier 
                    estación de metro o terminal de autobuses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Bus className="h-5 w-5" />
                    Horarios y Rutas
                  </h3>
                  <p className="text-muted-foreground">
                    Descarga la aplicación oficial de transporte de Lisboa para 
                    consultar horarios en tiempo real y planificar tus rutas. 
                    Disponible para iOS y Android.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transport;