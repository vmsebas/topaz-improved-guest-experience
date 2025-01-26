import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Train, Bus, Ship, Car, Bike, Plane } from "lucide-react";
import { TransportCard } from "@/components/transport/TransportCard";
import { TransportFilter } from "@/components/transport/TransportFilter";

const transportOptions = [
  {
    id: 1,
    title: "Metro & Train",
    description: "Lisbon's efficient metro system connects all major areas. The nearest station 'Santa Apolónia' is just 5 minutes away.",
    location: "Multiple stations across Lisbon",
    rating: 4.8,
    price: "€€",
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
    icon: Train,
    recommended: true,
    peakHours: "8:00-10:00, 17:00-19:00"
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
    <div className="min-h-screen flex flex-col bg-[#F1F0FB]">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Transport Options in Lisbon</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the best ways to navigate Lisbon. From historic trams to modern metro lines, 
              find the most convenient way to explore the city.
            </p>
          </div>

          <TransportFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransport.map((option) => (
              <TransportCard key={option.id} option={option} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transport;
