import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Star, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const attractions = [
  {
    id: 1,
    title: "Torre de Belém",
    description: "Iconic 16th-century fortress and UNESCO World Heritage site",
    location: "Belém",
    rating: 4.6,
    price: "€8",
    schedule: "10:00 - 18:30 (Oct-May) / 10:00 - 19:30 (May-Sep)",
    duration: "15 minutes by tram",
    category: "Historical",
    image: "/lovable-uploads/9ca4d75d-f08e-4dfb-abb1-9d98bd0c42b7.png"
  },
  {
    id: 2,
    title: "Jerónimos Monastery",
    description: "Magnificent monastery exemplifying Manueline architecture",
    location: "Belém",
    rating: 4.7,
    price: "€12",
    schedule: "10:00 - 17:00 (Last entry 16:00)",
    duration: "20 minutes by tram",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
  },
  {
    id: 3,
    title: "São Jorge Castle",
    description: "Moorish castle overlooking the historic center of Lisbon",
    location: "Castelo",
    rating: 4.5,
    price: "€10",
    schedule: "9:00 - 21:00 (Mar-Oct) / 9:00 - 18:00 (Nov-Feb)",
    duration: "10 minutes walking",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  },
  {
    id: 4,
    title: "Sé Cathedral",
    description: "Lisbon's oldest church and religious landmark",
    location: "Sé",
    rating: 4.4,
    price: "€5",
    schedule: "9:00 - 19:00 (Cloister: €3)",
    duration: "8 minutes walking",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
  },
  {
    id: 5,
    title: "Palácio da Pena",
    description: "Romantic palace in Sintra with stunning architecture",
    location: "Sintra",
    rating: 4.7,
    price: "€14.50 (Palace + Park) / €7.50 (Park only)",
    schedule: "9:30 - 18:30 (Last entry 18:00)",
    duration: "40 minutes by train",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
  },
  {
    id: 6,
    title: "Alfama District",
    description: "Oldest district of Lisbon, famous for Fado music",
    location: "Alfama",
    rating: 4.7,
    price: "Free",
    schedule: "Always open (Fado houses usually open from 19:30)",
    duration: "5 minutes walking",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: 7,
    title: "Fado Museum",
    description: "Explore the rich history of Portuguese Fado music",
    location: "Alfama",
    rating: 4.4,
    price: "€6",
    schedule: "10:00 - 18:00 (Closed Mondays)",
    duration: "8 minutes walking",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
  },
  {
    id: 8,
    title: "Gulbenkian Museum",
    description: "World-class art collection spanning 4,000 years",
    location: "Santo António",
    rating: 4.7,
    price: "€10 (Free Sundays)",
    schedule: "10:00 - 18:00 (Closed Tuesdays)",
    duration: "25 minutes by metro",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  },
  {
    id: 9,
    title: "LX Factory",
    description: "Creative hub in a restored industrial complex",
    location: "Alcântara",
    rating: 4.5,
    price: "Free entry",
    schedule: "Shops: 11:00 - 20:00, Restaurants: 12:00 - 00:00",
    duration: "20 minutes by tram",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
  },
  {
    id: 10,
    title: "Miradouro Senhora do Monte",
    description: "Highest viewpoint in Lisbon with panoramic city views",
    location: "Graça",
    rating: 4.7,
    price: "Free",
    schedule: "Always open",
    duration: "15 minutes walking",
    category: "Viewpoints",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    id: 11,
    title: "Miradouro Santa Catarina",
    description: "Popular viewpoint overlooking the Tagus River",
    location: "Santa Catarina",
    rating: 4.5,
    price: "Free",
    schedule: "Always open",
    duration: "12 minutes walking",
    category: "Viewpoints",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: 12,
    title: "Miradouro das Portas do Sol",
    description: "Scenic terrace overlooking Alfama",
    location: "Alfama",
    rating: 4.7,
    price: "Free",
    schedule: "Always open",
    duration: "10 minutes walking",
    category: "Viewpoints",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
  },
  {
    id: 13,
    title: "Tranvía 28",
    description: "Histórico tranvía amarillo que recorre las calles más emblemáticas de Lisboa",
    location: "Varias paradas por el centro histórico",
    rating: 4.5,
    price: "€3.00 (Single ticket) / €6.40 (24h unlimited)",
    schedule: "6:00 - 23:00 (Frequency: every 10-15 min)",
    duration: "40 minutos (ruta completa)",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b"
  },
  {
    id: 14,
    title: "National Tile Museum",
    description: "Unique museum showcasing Portuguese azulejo tiles",
    location: "Xabregas",
    rating: 4.6,
    price: "€5 (Free first Sunday of each month)",
    schedule: "10:00 - 18:00 (Closed Mondays)",
    duration: "20 minutes by bus",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  },
  {
    id: 15,
    title: "National Museum of Ancient Art",
    description: "Portugal's national gallery and most important museum",
    location: "Santo Amaro",
    rating: 4.5,
    price: "€6 (Free Sundays until 14:00)",
    schedule: "10:00 - 18:00 (Closed Mondays)",
    duration: "20 minutes by tram",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
  },
  {
    id: 16,
    title: "Maritime Museum",
    description: "Explore Portugal's rich maritime history",
    location: "Belém",
    rating: 4.5,
    price: "€6.50 (Free first Sunday of each month)",
    schedule: "10:00 - 17:00 (Oct-May) / 10:00 - 18:00 (Jun-Sep)",
    duration: "15 minutes by tram",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
  },
  {
    id: 17,
    title: "Oceanário de Lisboa",
    description: "One of the world's largest and most impressive aquariums",
    location: "Parque das Nações",
    rating: 4.7,
    price: "€19 (Adults) / €13 (Children 4-12)",
    schedule: "10:00 - 20:00 (Last entry 19:00)",
    duration: "25 minutes by metro",
    category: "Museums",
    image: "/lovable-uploads/61e76d2d-c3dc-44fe-87bf-37e750cd24bd.png"
  },
  {
    id: 18,
    title: "MAAT",
    description: "Contemporary museum with stunning riverside architecture",
    location: "Belém",
    rating: 4.2,
    price: "€9 (Free first Sunday of each month)",
    schedule: "11:00 - 19:00 (Closed Tuesdays)",
    duration: "15 minutes by tram",
    category: "Museums",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  }
];

const Attractions = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredAttractions = selectedCategory === "all" 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

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
            <h1 className="text-4xl font-bold mb-4">Discover Lisboa's Treasures</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich history, stunning viewpoints, and cultural gems that make Lisboa unique. 
              From ancient castles to modern museums, find your next adventure here.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="flex justify-center space-x-2">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                All Attractions
              </TabsTrigger>
              <TabsTrigger value="Historical" onClick={() => setSelectedCategory("Historical")}>
                Historical
              </TabsTrigger>
              <TabsTrigger value="Cultural" onClick={() => setSelectedCategory("Cultural")}>
                Cultural
              </TabsTrigger>
              <TabsTrigger value="Viewpoints" onClick={() => setSelectedCategory("Viewpoints")}>
                Viewpoints
              </TabsTrigger>
              <TabsTrigger value="Museums" onClick={() => setSelectedCategory("Museums")}>
                Museums
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction) => (
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
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {attraction.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
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
                    <Button 
                      onClick={() => {
                        window.open(getGoogleMapsUrl(attraction.title, attraction.location), '_blank');
                      }}
                    >
                      Go to Maps
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

export default Attractions;
