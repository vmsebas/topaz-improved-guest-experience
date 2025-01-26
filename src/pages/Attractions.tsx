import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Clock, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Attractions = () => {
  const { toast } = useToast();

  const attractions = [
    {
      id: 1,
      title: "Torre de Belém",
      description: "Iconic 16th-century fortress and UNESCO World Heritage site",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      location: "Belém",
      rating: 4.8,
      price: "€6",
      schedule: "10:00 - 17:30",
      duration: "15 minutes by tram",
      category: "Historical"
    },
    {
      id: 2,
      title: "Jerónimos Monastery",
      description: "Magnificent monastery exemplifying Manueline architecture",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      location: "Belém",
      rating: 4.9,
      price: "€10",
      schedule: "10:00 - 18:00",
      duration: "20 minutes by tram",
      category: "Historical"
    },
    {
      id: 3,
      title: "São Jorge Castle",
      description: "Moorish castle overlooking the historic center of Lisbon",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      location: "Castelo",
      rating: 4.7,
      price: "€10",
      schedule: "9:00 - 18:00",
      duration: "10 minutes walking",
      category: "Historical"
    },
    {
      id: 4,
      title: "Oceanário de Lisboa",
      description: "One of the world's largest and most impressive aquariums",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      location: "Parque das Nações",
      rating: 4.8,
      price: "€19",
      schedule: "10:00 - 20:00",
      duration: "25 minutes by metro",
      category: "Museums"
    },
    {
      id: 5,
      title: "Miradouro Senhora do Monte",
      description: "Highest viewpoint in Lisbon with panoramic city views",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      location: "Graça",
      rating: 4.8,
      price: "Free",
      schedule: "Always open",
      duration: "15 minutes walking",
      category: "Viewpoints"
    }
  ];

  const handleReserve = (attraction: typeof attractions[0]) => {
    console.log("Información de la atracción:", attraction);
    toast({
      title: `Detalles de ${attraction.title}`,
      description: (
        <div className="mt-2 space-y-2">
          <p><strong>Ubicación:</strong> {attraction.location}</p>
          <p><strong>Categoría:</strong> {attraction.category}</p>
          <p><strong>Precio:</strong> {attraction.price}</p>
          <p><strong>Horario:</strong> {attraction.schedule}</p>
          <p><strong>Duración:</strong> {attraction.duration}</p>
          <p><strong>Valoración:</strong> {attraction.rating} ⭐</p>
          <p><strong>Descripción:</strong> {attraction.description}</p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Discover Lisboa's Treasures</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich history, stunning viewpoints, and cultural gems that make Lisboa unique. 
              From ancient castles to modern museums, find your next adventure here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up">
                <div className="relative h-64">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {attraction.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{attraction.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{attraction.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{attraction.price}</span>
                    <Button onClick={() => handleReserve(attraction)}>Ver detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Attractions;