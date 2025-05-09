import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Star, Landmark, Palette, Mountain, Building, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Attractions = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const isMobile = useIsMobile();

  const titleSize = isMobile ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";
  const descriptionSize = isMobile ? "text-lg md:text-xl" : "text-base md:text-lg";
  const cardTitleSize = isMobile ? "text-2xl" : "text-xl";
  const cardTextSize = isMobile ? "text-base" : "text-sm";

  const filteredAttractions = selectedCategory === "all" 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  const getGoogleMapsUrl = (title: string, location: string) => {
    const query = encodeURIComponent(`${title}, ${location}, Lisboa, Portugal`);
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
            <h1 className={`${titleSize} font-bold mb-4`}>Discover Lisboa's Treasures</h1>
            <p className={`${descriptionSize} text-muted-foreground max-w-2xl mx-auto`}>
              Explore the rich history, stunning viewpoints, and cultural gems that make Lisboa unique. 
              From ancient castles to modern museums, find your next adventure here.
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
              } rounded-full px-6 shadow-sm ${cardTextSize}`}
            >
              All Attractions
            </Button>
            <Button
              variant={selectedCategory === "Historical" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Historical")}
              className={`${
                selectedCategory === "Historical"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm ${cardTextSize}`}
            >
              <Landmark className="mr-2 h-4 w-4" />
              Historical
            </Button>
            <Button
              variant={selectedCategory === "Cultural" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Cultural")}
              className={`${
                selectedCategory === "Cultural"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm ${cardTextSize}`}
            >
              <Palette className="mr-2 h-4 w-4" />
              Cultural
            </Button>
            <Button
              variant={selectedCategory === "Viewpoints" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Viewpoints")}
              className={`${
                selectedCategory === "Viewpoints"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm ${cardTextSize}`}
            >
              <Mountain className="mr-2 h-4 w-4" />
              Viewpoints
            </Button>
            <Button
              variant={selectedCategory === "Museums" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Museums")}
              className={`${
                selectedCategory === "Museums"
                  ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } rounded-full px-6 shadow-sm ${cardTextSize}`}
            >
              <Building className="mr-2 h-4 w-4" />
              Museums
            </Button>
          </div>

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
                  <h3 className={`${cardTitleSize} font-semibold mb-2`}>{attraction.title}</h3>
                  <p className={`text-muted-foreground mb-4 ${cardTextSize}`}>{attraction.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center ${cardTextSize}`}>
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className={`flex items-center ${cardTextSize}`}>
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.schedule}</span>
                    </div>
                    <div className={`flex items-center ${cardTextSize}`}>
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-semibold ${cardTitleSize}`}>{attraction.price}</span>
                    <Button 
                      onClick={() => {
                        window.open(getGoogleMapsUrl(attraction.title, attraction.location), '_blank');
                      }}
                      className={cardTextSize}
                    >
                      Go to Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Civitatis Tours Widget Section - Minimal Style */}
        <section className="w-full bg-white py-8 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-slate-800">Guided Tours for These Attractions</h2>
              <p className="text-slate-600 mt-2">Skip the lines and enhance your experience with these selected tours</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <iframe 
                  className="civitatis-iframe"
                  title="Civitatis Top Tours"
                  src={`https://www.civitatis.com/widget-activities/?agencyId=41769&display=minimal&cant=${window.innerWidth < 768 ? '2' : '3'}&lang=en&currency=EUR&zone=404&transfer=0&cmp=Widget_Lisbon_Attractions_EN&width=100%&height=${window.innerWidth < 768 ? '350' : '400'}px&hideButton=0&centerContent=1&typeSelection=all&color=f70759&typography=Montserrat&removeBackground=1&showShadow=1&roundedButtons=1`}
                  width="100%"
                  height={window.innerWidth < 768 ? '350px' : '400px'}
                  frameBorder="0"
                  style={{ maxWidth: '100%', margin: '0 auto' }}
                ></iframe>
              </div>
            </div>
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

export default Attractions;
