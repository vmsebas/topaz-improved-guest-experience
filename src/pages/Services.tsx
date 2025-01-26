import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Stethoscope, Flag, Shield, Clock, Phone, MapPin, Star, ExternalLink, MessageCircle } from "lucide-react";
import { Service } from "@/types/services";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getDirectionsUrl = (name: string, address: string) => {
    // Detectar si el dispositivo es iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const destination = encodeURIComponent(`${name}, ${address}`);
    
    if (isIOS) {
      // URL para Apple Maps
      return `maps://maps.apple.com/?daddr=${destination}&dirflg=w`;
    } else {
      // URL para Google Maps con modo a pie por defecto
      return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=walking`;
    }
  };

  const services: Record<string, Service[]> = {
    healthcare: [
      {
        name: "Hospital de São José",
        type: "Emergency Hospital",
        distance: "10 min walk",
        address: "R. José António Serrano, 1150-199 Lisboa",
        hours: "24/7",
        contact: "+351 218 841 000",
        rating: 4.2,
        description: "Main public hospital with full emergency services.",
        isEmergency: true
      },
      {
        name: "CUF Descobertas Hospital",
        type: "Private Hospital",
        distance: "15 min by taxi",
        address: "R. Mário Botas, 1998-018 Lisboa",
        hours: "24/7",
        contact: "+351 210 025 200",
        rating: 4.5,
        description: "Private hospital with English-speaking staff.",
        isEmergency: true
      },
      {
        name: "Hospital da Luz",
        type: "Private Hospital",
        distance: "12 min by taxi",
        address: "Av. Lusíada 100, 1500-650 Lisboa",
        hours: "24/7",
        contact: "+351 217 104 400",
        rating: 4.6,
        description: "Modern private hospital with multilingual staff.",
        isEmergency: true
      }
    ],
    pharmacies: [
      {
        name: "Farmácia Andrade",
        type: "Pharmacy",
        distance: "5 min walk",
        address: "R. do Loreto 24, 1200-242 Lisboa",
        hours: "9:00 - 19:00",
        contact: "+351 213 426 743",
        rating: 4.4,
        description: "Local pharmacy with English-speaking staff.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipP2UTEcBr7r1F02LWYoCTjtAjcmkBAN_TmoOr2a=w408-h544-k-no"
      },
      {
        name: "Farmácia Barreto",
        type: "Historic Pharmacy",
        distance: "6 min walk",
        address: "R. do Loreto 59, 1200-241 Lisboa",
        hours: "9:00 - 19:30",
        contact: "+351 213 425 625",
        rating: 4.4,
        description: "Historic pharmacy with traditional Portuguese architecture.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipOnpCBv4fzLnqCrk5By7ClIEth7l-gArikUyZ0H=w408-h726-k-no"
      },
      {
        name: "Farmácia Sacoor do Chiado",
        type: "Pharmacy",
        distance: "4 min walk",
        address: "R. do Carmo 51A, 1200-093 Lisboa",
        hours: "9:00 - 20:00",
        contact: "+351 213 460 271",
        rating: 4.3,
        description: "Modern pharmacy in the heart of Chiado with multilingual staff.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipOo4I-cWmoE_mXoICuGPVe9LBurMqP7L7ec7pOM=w408-h544-k-no"
      }
    ],
    embassies: [
      {
        name: "British Embassy",
        type: "Embassy",
        distance: "20 min walk",
        address: "R. de São Bernardo 33, 1249-082 Lisboa",
        hours: "9:00 - 17:00",
        contact: "+351 213 924 000",
        rating: 4.1,
        description: "Consular services for British citizens.",
        isEmergency: false
      },
      {
        name: "U.S. Embassy",
        type: "Embassy",
        distance: "25 min by taxi",
        address: "Av. das Forças Armadas, 1600-081 Lisboa",
        hours: "8:30 - 17:30",
        contact: "+351 217 273 300",
        rating: 4.0,
        description: "Full consular services for U.S. citizens.",
        isEmergency: false
      },
      {
        name: "German Embassy",
        type: "Embassy",
        distance: "15 min walk",
        address: "Campo dos Mártires da Pátria 38, 1169-043 Lisboa",
        hours: "9:00 - 17:00",
        contact: "+351 218 810 210",
        rating: 4.2,
        description: "German consular services and visa applications.",
        isEmergency: false
      },
      {
        name: "French Embassy",
        type: "Embassy",
        distance: "18 min walk",
        address: "R. Santos-o-Velho 5, 1200-811 Lisboa",
        hours: "9:00 - 16:30",
        contact: "+351 213 939 100",
        rating: 4.1,
        description: "French consular services and cultural center.",
        isEmergency: false
      }
    ],
    police: [
      {
        name: "PSP Baixa-Chiado",
        type: "Police Station",
        distance: "7 min walk",
        address: "R. do Ouro 140, 1100-065 Lisboa",
        hours: "24/7",
        contact: "112 (Emergency) / +351 213 421 634",
        rating: 4.0,
        description: "Local police station with tourist police service.",
        isEmergency: true
      },
      {
        name: "PSP Praça da Alegria",
        type: "Police Station",
        distance: "5 min walk",
        address: "Praça da Alegria 17, 1250-004 Lisboa",
        hours: "24/7",
        contact: "112 (Emergency) / +351 213 421 300",
        rating: 4.1,
        description: "Central police station with English-speaking officers.",
        isEmergency: true
      }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "healthcare":
        return <Hospital className="h-6 w-6" />;
      case "pharmacies":
        return <Stethoscope className="h-6 w-6" />;
      case "embassies":
        return <Flag className="h-6 w-6" />;
      case "police":
        return <Shield className="h-6 w-6" />;
      default:
        return null;
    }
  };

  const categories = [
    { id: "all", name: "All Services" },
    { id: "healthcare", name: "Hospitals" },
    { id: "pharmacies", name: "Pharmacies" },
    { id: "embassies", name: "Embassies" },
    { id: "police", name: "Police" }
  ];

  const filteredServices = selectedCategory === "all"
    ? Object.values(services).flat()
    : services[selectedCategory as keyof typeof services] || [];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Essential Services</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find important services near Travessa da Trindade, including hospitals, pharmacies, embassies, and police stations.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="animate-fade-in"
                >
                  {category.id !== "all" && getCategoryIcon(category.id)}
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <Card 
                  key={index}
                  className={`border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in ${
                    service.isEmergency ? "border-l-4 border-l-red-500" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      {getCategoryIcon(
                        Object.keys(services).find(key => 
                          services[key as keyof typeof services].includes(service)
                        ) || ""
                      )}
                    </div>
                    <CardDescription>{service.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {'image' in service && (
                      <div className="mb-4">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{service.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{service.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{service.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{service.rating} / 5.0</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-primary font-medium">
                          {service.distance}
                        </span>
                        <Button
                          onClick={() => window.open(getDirectionsUrl(service.name, service.address), '_blank')}
                          className="flex items-center gap-2"
                        >
                          Cómo llegar
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

export default Services;
