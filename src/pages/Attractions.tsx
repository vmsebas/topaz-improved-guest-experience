import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Attractions = () => {
  const attractions = [
    {
      title: "Torre de Belém",
      description: "Icónico monumento del siglo XVI, símbolo de la Era de los Descubrimientos.",
      image: "https://images.unsplash.com/photo-1589292533500-13077b9c21a7",
      category: "Histórico",
      duration: "1-2 horas",
      rating: 4.8,
      location: "Belém"
    },
    {
      title: "Castillo de San Jorge",
      description: "Fortaleza medieval con vistas panorámicas de Lisboa.",
      image: "https://images.unsplash.com/photo-1584738066984-25c7917574e5",
      category: "Histórico",
      duration: "2-3 horas",
      rating: 4.7,
      location: "Alfama"
    },
    {
      title: "Monasterio de los Jerónimos",
      description: "Obra maestra del estilo manuelino, Patrimonio de la Humanidad.",
      image: "https://images.unsplash.com/photo-1589292533400-89933a5e517f",
      category: "Religioso",
      duration: "2-3 horas",
      rating: 4.9,
      location: "Belém"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]/50">
      <Navbar />
      <main className="container px-4 py-16 mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Atracciones en Lisboa
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre los lugares más emblemáticos de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                  />
                  <Badge 
                    className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white"
                  >
                    {attraction.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{attraction.title}</span>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {attraction.rating}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{attraction.location}</span>
                    </div>
                    <Button 
                      asChild
                      className="w-full mt-4 bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-primary"
                    >
                      <Link to={`/attractions/${index + 1}`} className="flex items-center justify-center gap-2">
                        Ver más detalles
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Attractions;