import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Train, Bus, Ship, Car, Bike, Plane } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transportOptions = [
  {
    id: 1,
    title: "Metro & Train",
    description: "Lisbon's efficient metro system connects all major areas",
    location: "Santa Apolónia Station",
    rating: 4.8,
    price: "€1.50",
    schedule: "6:30 AM - 1:00 AM",
    duration: "5 minutes walking",
    category: "Public",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    icon: Train,
    link: "https://www.metrolisboa.pt/en/buy/"
  },
  {
    id: 2,
    title: "Bus Network",
    description: "Extensive bus network operated by Carris",
    location: "Alfama",
    rating: 4.6,
    price: "€2.00",
    schedule: "24/7 service",
    duration: "2 minutes walking",
    category: "Public",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    icon: Bus,
    link: "https://www.carris.pt/en/buy-tickets/"
  },
  {
    id: 3,
    title: "Ferry Services",
    description: "Cross the Tagus River to visit the south bank",
    location: "Terreiro do Paço",
    rating: 4.7,
    price: "€2.75",
    schedule: "Regular crossings",
    duration: "10 minutes walking",
    category: "Public",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    icon: Ship,
    link: "https://ttsl.pt/en/tickets-and-fares/"
  },
  {
    id: 4,
    title: "Taxi & Ride-Share",
    description: "Convenient taxi services and ride-sharing apps",
    location: "Citywide",
    rating: 4.8,
    price: "Varies",
    schedule: "24/7",
    duration: "On-demand",
    category: "Private",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    icon: Car,
    link: "https://uber.com"
  },
  {
    id: 5,
    title: "Bike Rental",
    description: "Explore Lisbon on two wheels",
    location: "Multiple locations",
    rating: 4.6,
    price: "From €10/day",
    schedule: "9:00 AM - 8:00 PM",
    duration: "Flexible",
    category: "Active",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    icon: Bike,
    link: "https://www.gira-bicicletasdelisboa.pt/en/"
  },
  {
    id: 6,
    title: "Airport Transfer",
    description: "Easy access to Lisbon Airport (LIS)",
    location: "Airport",
    rating: 4.9,
    price: "From €4.00",
    schedule: "First flight - Last flight",
    duration: "25 minutes",
    category: "Private",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    icon: Plane,
    link: "https://www.metrolisboa.pt/en/travel/airport-aeroporto/"
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
            <h1 className="text-4xl font-bold mb-4">Getting Around Lisboa</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your complete guide to transportation in the city. From metro to bikes, 
              find the best way to explore Lisboa.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="flex justify-center space-x-2">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                All Transport
              </TabsTrigger>
              <TabsTrigger value="Public" onClick={() => setSelectedCategory("Public")}>
                Public
              </TabsTrigger>
              <TabsTrigger value="Private" onClick={() => setSelectedCategory("Private")}>
                Private
              </TabsTrigger>
              <TabsTrigger value="Active" onClick={() => setSelectedCategory("Active")}>
                Active
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
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{option.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <option.icon className="h-4 w-4 mr-2 text-primary" />
                      <span>{option.price}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{option.schedule}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{option.duration}</span>
                    <Button 
                      onClick={() => {
                        window.open(option.link, '_blank');
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Plane className="h-5 w-5" />
                    Getting from the Airport
                  </h3>
                  <p className="text-muted-foreground">
                    Take the metro (red line) directly from the airport to São Sebastião, 
                    then change to the blue line to Santa Apolónia. From there, it's a 
                    short walk to your destination.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Train className="h-5 w-5" />
                    Local Transport Cards
                  </h3>
                  <p className="text-muted-foreground">
                    We recommend getting a Viva Viagem card for unlimited travel on 
                    public transport. Valid for 24h, 48h, or 72h. Available at any 
                    metro station or major bus terminal.
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