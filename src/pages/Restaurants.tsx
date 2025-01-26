import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Restaurants = () => {
  const restaurants = [
    {
      name: "Time Out Market Lisboa",
      description: "Mercado gastronómico con los mejores chefs y restaurantes de la ciudad.",
      image: "https://images.unsplash.com/photo-1555881400-891c0617c753",
      cuisine: "Variada",
      priceRange: "€€",
      rating: 4.6,
      location: "Cais do Sodré",
      openHours: "10:00 - 00:00"
    },
    {
      name: "Cervejaria Ramiro",
      description: "Famoso restaurante de mariscos con décadas de tradición.",
      image: "https://images.unsplash.com/photo-1599458252573-56ae36120de1",
      cuisine: "Mariscos",
      priceRange: "€€€",
      rating: 4.8,
      location: "Intendente",
      openHours: "12:00 - 00:00"
    },
    {
      name: "Pastéis de Belém",
      description: "Casa original del famoso pastel de nata desde 1837.",
      image: "https://images.unsplash.com/photo-1577057825455-0c48ccd82b94",
      cuisine: "Pastelería",
      priceRange: "€",
      rating: 4.9,
      location: "Belém",
      openHours: "08:00 - 23:00"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]/50">
      <Navbar />
      <main className="container px-4 py-16 mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Restaurantes Recomendados
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los mejores lugares para disfrutar de la gastronomía lisboeta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/90 text-primary hover:bg-white">
                      {restaurant.cuisine}
                    </Badge>
                    <Badge variant="outline" className="bg-white/90">
                      {restaurant.priceRange}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{restaurant.name}</span>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {restaurant.rating}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{restaurant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.openHours}</span>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-primary"
                    >
                      <Utensils className="w-4 h-4 mr-2" />
                      Reservar mesa
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

export default Restaurants;