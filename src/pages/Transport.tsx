import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Train, Bus, Ship, Car, Bike, Plane, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transportOptions = [
  {
    id: 1,
    title: "Metro & Train",
    description: "Lisbon's efficient metro system connects all major areas. The nearest station 'Santa Apolónia' is just 5 minutes away.",
    location: "Multiple stations across Lisbon",
    rating: 4.8,
    price: "From €1.50",
    schedule: "6:30 AM - 1:00 AM",
    duration: "Frequency: 5-10 min",
    category: "Public",
    features: [
      "Single ticket: €1.50",
      "Day pass: €6.40",
      "4 metro lines",
      "Connection to train services"
    ],
    website: "https://www.metrolisboa.pt/en/",
    image: "https://images.unsplash.com/photo-1581252584837-7dd6a7c27d04",
    icon: Train
  },
  {
    id: 2,
    title: "Bus Network (Carris)",
    description: "Extensive bus network operated by Carris. Bus stops available throughout the city with frequent services.",
    location: "Citywide coverage",
    rating: 4.6,
    price: "From €2.00",
    schedule: "24/7 service on main routes",
    duration: "Variable frequency",
    category: "Public",
    features: [
      "Single ticket: €2.00",
      "Tourist cards available",
      "Night service available",
      "Real-time tracking"
    ],
    website: "https://www.carris.pt/en/",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    icon: Bus
  },
  {
    id: 3,
    title: "Ferry Services",
    description: "Cross the Tagus River to visit the south bank. Regular services from multiple terminals.",
    location: "Terreiro do Paço",
    rating: 4.7,
    price: "From €2.75",
    schedule: "7:00 AM - 10:00 PM",
    duration: "10-15 minutes crossing",
    category: "Public",
    features: [
      "Beautiful river views",
      "Multiple terminals",
      "Integrated with public transport",
      "Bicycle transport allowed"
    ],
    website: "https://ttsl.pt/en/",
    image: "https://images.unsplash.com/photo-1569263900347-06b1e8c825ab",
    icon: Ship
  },
  {
    id: 4,
    title: "Uber",
    description: "Convenient ride-hailing service available throughout Lisbon with multiple vehicle options.",
    location: "Citywide coverage",
    rating: 4.8,
    price: "Variable rates",
    schedule: "24/7",
    duration: "On-demand",
    category: "Private",
    features: [
      "Multiple vehicle options",
      "Fixed pricing",
      "Real-time tracking",
      "Cashless payment"
    ],
    website: "https://www.uber.com/pt/en/",
    image: "https://images.unsplash.com/photo-1621963458148-db0d0a7e2a4e",
    icon: Car
  },
  {
    id: 5,
    title: "Bolt",
    description: "Popular ride-hailing and micro-mobility service with competitive rates.",
    location: "Citywide coverage",
    rating: 4.7,
    price: "Variable rates",
    schedule: "24/7",
    duration: "On-demand",
    category: "Private",
    features: [
      "Rides and scooters",
      "Competitive pricing",
      "Easy booking",
      "Multiple payment options"
    ],
    website: "https://bolt.eu/en/cities/lisbon/",
    image: "https://images.unsplash.com/photo-1549360783-830a4433d24e",
    icon: Car
  },
  {
    id: 6,
    title: "Gira Bikes",
    description: "Lisbon's bike-sharing system perfect for exploring the city.",
    location: "Multiple stations",
    rating: 4.5,
    price: "From €2/day",
    schedule: "24/7",
    duration: "Unlimited use",
    category: "Active",
    features: [
      "Regular and e-bikes",
      "Multiple pickup points",
      "Easy mobile app",
      "Tourist passes available"
    ],
    website: "https://www.gira-bicicletasdelisboa.pt/en/",
    image: "https://images.unsplash.com/photo-1556316384-12c35d30afa4",
    icon: Bike
  },
  {
    id: 7,
    title: "Airport Transfer",
    description: "Multiple options to reach Lisbon Airport (LIS), including private transfers, metro, and bus services.",
    location: "Lisbon Airport",
    rating: 4.6,
    price: "From €4.00",
    schedule: "24/7",
    duration: "25-40 minutes",
    category: "Airport",
    features: [
      "Metro direct line",
      "Aerobus service",
      "Private transfers",
      "Taxi fixed rates"
    ],
    website: "https://www.ana.pt/en/lis/home",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    icon: Plane
  }
];

const Transport = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTransport = selectedCategory === "all" 
    ? transportOptions 
    : transportOptions.filter(option => option.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Transport Options in Lisbon</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the best ways to navigate Lisbon. From historic trams to modern metro lines, 
              find the most convenient way to explore the city.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="flex justify-center space-x-2">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                All Options
              </TabsTrigger>
              <TabsTrigger value="Public" onClick={() => setSelectedCategory("Public")}>
                Public Transport
              </TabsTrigger>
              <TabsTrigger value="Private" onClick={() => setSelectedCategory("Private")}>
                Private Transport
              </TabsTrigger>
              <TabsTrigger value="Active" onClick={() => setSelectedCategory("Active")}>
                Active Transport
              </TabsTrigger>
              <TabsTrigger value="Airport" onClick={() => setSelectedCategory("Airport")}>
                Airport
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
                  <div className="space-y-2 mb-4">
                    {option.features.map((feature, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{option.price}</span>
                    <Button 
                      onClick={() => window.open(option.website, '_blank')}
                      className="flex items-center gap-2"
                    >
                      Learn More
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
    </div>
  );
};

export default Transport;