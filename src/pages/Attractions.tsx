import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Star } from "lucide-react";

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      title: "Parque Natural Sierra Nevada",
      description: "Explora la majestuosa Sierra Nevada con sus impresionantes vistas y senderos.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      location: "Granada, España",
      rating: 4.8,
      price: "Desde €30",
      capacity: "20 personas",
      duration: "4 horas"
    },
    {
      id: 2,
      title: "Safari Aventura",
      description: "Una experiencia única observando la vida salvaje en su hábitat natural.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      location: "Almería, España",
      rating: 4.9,
      price: "Desde €45",
      capacity: "15 personas",
      duration: "3 horas"
    },
    {
      id: 3,
      title: "Montaña Mágica",
      description: "Descubre la belleza de la montaña y su fauna local en esta emocionante excursión.",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      location: "Málaga, España",
      rating: 4.7,
      price: "Desde €35",
      capacity: "12 personas",
      duration: "5 horas"
    },
    {
      id: 4,
      title: "Reserva Natural El Bosque",
      description: "Sumérgete en la naturaleza más pura y descubre la flora y fauna local.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      location: "Sevilla, España",
      rating: 4.6,
      price: "Desde €25",
      capacity: "18 personas",
      duration: "3 horas"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Descubre Nuestras Atracciones</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora las mejores experiencias y lugares turísticos que hemos seleccionado para ti
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
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{attraction.price}</span>
                    <Button>Reservar ahora</Button>
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