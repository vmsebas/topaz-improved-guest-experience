import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Phone, Euro, ExternalLink, MessageCircle, UtensilsCrossed, Fish, Building2, Pizza, Leaf, Globe } from "lucide-react";
import { useState } from "react";

const restaurants = {
  portuguese: [
    {
      id: 1,
      name: "A Severa",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e",
      type: "Traditional Portuguese",
      distance: "5 min walk",
      hours: "19:00 - 23:30",
      phone: "+351 218 861 647 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.7,
      specialties: ["Bacalhau à Brás", "Sardines", "Fado Music"],
      address: "R. das Gaveas 51, 1200-206 Lisboa"
    },
    {
      id: 2,
      name: "Cantinho do Aziz",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      type: "Portuguese Fusion",
      distance: "8 min walk",
      hours: "12:00 - 23:00",
      phone: "+351 218 879 095 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.6,
      specialties: ["Grilled Fish", "Seafood Rice", "House Wines"],
      address: "R. de São Pedro 4, 1100-554 Lisboa"
    },
    {
      id: 3,
      name: "Solar dos Presuntos",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      type: "Traditional Portuguese",
      distance: "12 min walk",
      hours: "12:00 - 23:00",
      phone: "+351 213 424 253 (Cost of a call to the national landline network)",
      price: "€€€",
      rating: 4.8,
      specialties: ["Seafood", "Portuguese Wines", "Presunto"],
      address: "R. das Portas de Santo Antão 150, 1150-269 Lisboa"
    }
  ],
  seafood: [
    {
      id: 4,
      name: "Cervejaria Ramiro",
      image: "https://images.unsplash.com/photo-1599486761160-444ef0702f55",
      type: "Seafood Restaurant",
      distance: "15 min walk",
      hours: "12:00 - 00:30",
      phone: "+351 218 851 024 (Cost of a call to the national landline network)",
      price: "€€€",
      rating: 4.9,
      specialties: ["Tiger Prawns", "Lobster", "Giant Crab"],
      address: "Av. Almirante Reis 1, 1150-007 Lisboa"
    },
    {
      id: 5,
      name: "Sea Me",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62",
      type: "Modern Seafood",
      distance: "10 min walk",
      hours: "12:30 - 00:00",
      phone: "+351 213 461 564 (Cost of a call to the national landline network)",
      price: "€€€",
      rating: 4.7,
      specialties: ["Sushi", "Fresh Fish", "Seafood Pasta"],
      address: "R. do Loreto 21, 1200-241 Lisboa"
    },
    {
      id: 14,
      name: "Cervejaria Trindade",
      image: "/lovable-uploads/6197cbf6-b48f-4002-b555-3708613a58dd.png",
      type: "Historic Seafood Restaurant",
      distance: "2 min walk",
      hours: "12:00 - 00:00",
      phone: "+351 213 423 506 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.6,
      specialties: ["Fresh Seafood", "Historic Venue", "Portuguese Beer"],
      address: "R. Nova da Trindade 20C, 1200-303 Lisboa"
    }
  ],
  markets: [
    {
      id: 10,
      name: "Time Out Market",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      type: "Food Hall & Market",
      distance: "15 min by tram",
      hours: "10:00 - 00:00",
      phone: "+351 215 464 030 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.8,
      specialties: ["Local Cuisine", "Wine Bar", "Gourmet Food"],
      address: "Av. 24 de Julho 49, 1200-479 Lisboa"
    },
    {
      id: 11,
      name: "Mercado da Ribeira",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
      type: "Traditional Market",
      distance: "12 min by bus",
      hours: "06:00 - 14:00",
      phone: "+351 213 461 198 (Cost of a call to the national landline network)",
      price: "€",
      rating: 4.6,
      specialties: ["Fresh Fish", "Local Produce", "Portuguese Products"],
      address: "Av. 24 de Julho 49, 1200-479 Lisboa"
    },
    {
      id: 15,
      name: "Pingo Doce Trindade",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e",
      type: "Supermarket",
      distance: "1 min walk",
      hours: "08:00 - 22:00",
      phone: "+351 213 421 329 (Cost of a call to the national landline network)",
      price: "€",
      rating: 4.3,
      specialties: ["Groceries", "Local Products", "Ready Meals"],
      address: "Travessa da Trindade 16, 1200-470 Lisboa"
    },
    {
      id: 16,
      name: "Mercearia da Trindade",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
      type: "Local Grocery Store",
      distance: "2 min walk",
      hours: "07:30 - 20:00",
      phone: "+351 213 428 765 (Cost of a call to the national landline network)",
      price: "€",
      rating: 4.4,
      specialties: ["Portuguese Products", "Fresh Bread", "Local Delicacies"],
      address: "Travessa da Trindade 20, 1200-470 Lisboa"
    }
  ],
  pizza: [
    {
      id: 6,
      name: "Pizzeria Casanova",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      type: "Italian Pizza",
      distance: "10 min walk",
      hours: "12:00 - 23:00",
      phone: "+351 218 863 949 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.6,
      specialties: ["Wood-fired Pizza", "Italian Wines", "Homemade Pasta"],
      address: "Av. Infante D. Henrique, Armazém B, Cais da Pedra, 1950-376 Lisboa"
    },
    {
      id: 7,
      name: "Zero Zero",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      type: "Neapolitan Pizza",
      distance: "15 min walk",
      hours: "12:30 - 23:30",
      phone: "+351 215 852 989 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.7,
      specialties: ["Authentic Neapolitan", "Italian Ingredients", "Craft Beer"],
      address: "R. da Escola Politécnica 32, 1250-102 Lisboa"
    }
  ],
  vegetarian: [
    {
      id: 8,
      name: "PSI",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      type: "Vegetarian Restaurant",
      distance: "20 min walk",
      hours: "12:30 - 22:30",
      phone: "+351 213 424 825 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.6,
      specialties: ["Organic Bowls", "Raw Desserts", "Fresh Juices"],
      address: "Alameda Santo António dos Capuchos, 1150-314 Lisboa"
    },
    {
      id: 9,
      name: "The Food Temple",
      image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
      type: "Vegan Fusion",
      distance: "10 min walk",
      hours: "19:00 - 23:00",
      phone: "+351 218 859 022 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.7,
      specialties: ["Daily Menu", "Natural Wines", "Vegan Desserts"],
      address: "Beco do Jasmim 18, 1100-289 Lisboa"
    }
  ],
  international: [
    {
      id: 12,
      name: "Boa-Bao",
      image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7",
      type: "Asian Fusion",
      distance: "7 min walk",
      hours: "12:30 - 00:00",
      phone: "+351 213 461 311 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.6,
      specialties: ["Dim Sum", "Asian Fusion", "Cocktails"],
      address: "Largo Rafael Bordalo Pinheiro 30, 1200-369 Lisboa"
    },
    {
      id: 13,
      name: "Tapisco",
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b",
      type: "Spanish-Portuguese Fusion",
      distance: "10 min walk",
      hours: "12:30 - 23:00",
      phone: "+351 213 461 219 (Cost of a call to the national landline network)",
      price: "€€",
      rating: 4.7,
      specialties: ["Tapas", "Petiscos", "Wine Bar"],
      address: "R. Dom Pedro V 81, 1250-093 Lisboa"
    }
  ]
};

const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getAllRestaurants = () => {
    return Object.values(restaurants).flat();
  };

  const getFilteredRestaurants = () => {
    if (selectedCategory === "all") {
      return getAllRestaurants();
    }
    return restaurants[selectedCategory as keyof typeof restaurants] || [];
  };

  const getGoogleMapsUrl = (name: string, address: string) => {
    const query = encodeURIComponent(`${name}, ${address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Restaurants & Markets in Lisboa</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the best dining spots in Lisboa, from traditional Portuguese cuisine to international flavors. 
              Explore local markets and enjoy the city's rich culinary heritage.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`${
                selectedCategory === "all"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              All Restaurants
            </Button>
            <Button
              variant={selectedCategory === "portuguese" ? "default" : "outline"}
              onClick={() => setSelectedCategory("portuguese")}
              className={`${
                selectedCategory === "portuguese"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              Portuguese
            </Button>
            <Button
              variant={selectedCategory === "seafood" ? "default" : "outline"}
              onClick={() => setSelectedCategory("seafood")}
              className={`${
                selectedCategory === "seafood"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <Fish className="mr-2 h-4 w-4" />
              Seafood
            </Button>
            <Button
              variant={selectedCategory === "markets" ? "default" : "outline"}
              onClick={() => setSelectedCategory("markets")}
              className={`${
                selectedCategory === "markets"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Markets
            </Button>
            <Button
              variant={selectedCategory === "pizza" ? "default" : "outline"}
              onClick={() => setSelectedCategory("pizza")}
              className={`${
                selectedCategory === "pizza"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <Pizza className="mr-2 h-4 w-4" />
              Pizza
            </Button>
            <Button
              variant={selectedCategory === "vegetarian" ? "default" : "outline"}
              onClick={() => setSelectedCategory("vegetarian")}
              className={`${
                selectedCategory === "vegetarian"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <Leaf className="mr-2 h-4 w-4" />
              Vegetarian
            </Button>
            <Button
              variant={selectedCategory === "international" ? "default" : "outline"}
              onClick={() => setSelectedCategory("international")}
              className={`${
                selectedCategory === "international"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm`}
            >
              <Globe className="mr-2 h-4 w-4" />
              International
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredRestaurants().map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up">
                <div className="relative h-64">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {restaurant.type}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {restaurant.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span>{restaurant.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Euro className="h-4 w-4 mr-2 text-primary" />
                      <span>{restaurant.price}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      onClick={() => window.open(getGoogleMapsUrl(restaurant.name, restaurant.address), '_blank')}
                      className="flex items-center gap-2"
                    >
                      View on Maps
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

export default Restaurants;