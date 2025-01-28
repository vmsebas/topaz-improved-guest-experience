import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Phone, Shield, MessageCircle, AlertCircle, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Service } from "@/types/services";

const Services = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handlePhoneClick = (phoneNumber: string, serviceName: string) => {
    const cleanNumber = phoneNumber.split('(')[0].trim();
    const formattedNumber = cleanNumber.startsWith('+') ? cleanNumber : `+351${cleanNumber}`;
    const telLink = `tel:${formattedNumber}`;
    
    if (cleanNumber.startsWith('808')) {
      toast({
        title: "Warning - Paid Number",
        description: "This is a special rate number that may have additional costs.",
        duration: 5000,
      });
    }
    
    window.location.href = telLink;
    toast({
      title: "Calling " + serviceName,
      description: formattedNumber,
      duration: 3000,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+351123456789";
    const message = "Hello, I need information about essential services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address + ", Lisboa, Portugal");
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const emergencyServices = [
    {
      name: "European Emergency Number",
      number: "112",
      description: "General emergencies - Police, Fire, Ambulance",
      icon: <AlertCircle className="h-8 w-8" />,
      isEmergency: true
    },
    {
      name: "PSP - Public Security Police",
      number: "+351 21 765 42 42",
      description: "National Police of Portugal",
      icon: <Shield className="h-8 w-8" />,
      isEmergency: true
    },
    {
      name: "Lisbon Fire Department",
      number: "+351 21 346 1300",
      description: "Lisbon Firefighters",
      icon: <Shield className="h-8 w-8" />,
      isEmergency: true
    }
  ];

  const services: Record<string, Service[]> = {
    healthcare: [
      {
        name: "Hospital de São José",
        type: "Emergency Hospital",
        distance: "10 min walk",
        address: "R. José António Serrano, 1150-199 Lisboa",
        hours: "24/7",
        contact: "+351 218 841 000 (Cost of a call to the national landline network)",
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
        contact: "+351 210 025 200 (Cost of a call to the national landline network)",
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
        contact: "+351 217 104 400 (Cost of a call to the national landline network)",
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
        contact: "+351 213 426 743 (Cost of a call to the national landline network)",
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
        contact: "+351 213 425 625 (Cost of a call to the national landline network)",
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
        contact: "+351 213 460 271 (Cost of a call to the national landline network)",
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
        contact: "+351 213 924 000 (Cost of a call to the national landline network)",
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
        contact: "+351 217 273 300 (Cost of a call to the national landline network)",
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
        contact: "+351 218 810 210 (Cost of a call to the national landline network)",
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
        contact: "+351 213 939 100 (Cost of a call to the national landline network)",
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
        contact: "112 (Emergency) / +351 213 421 634 (Cost of a call to the national landline network)",
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
        contact: "112 (Emergency) / +351 213 421 300 (Cost of a call to the national landline network)",
        rating: 4.1,
        description: "Central police station with English-speaking officers.",
        isEmergency: true
      }
    ]
  };

  const filteredServices = selectedCategory === "all"
    ? Object.values(services).flat()
    : services[selectedCategory as keyof typeof services] || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-8">
          <div className="bg-red-50 p-4 rounded-lg mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-red-700 mb-3">Emergency Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {emergencyServices.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handlePhoneClick(service.number, service.name)}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center space-x-3 border border-red-200 hover:border-red-400"
                >
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="font-bold text-lg text-red-700">{service.number}</h3>
                    <p className="font-medium text-sm text-gray-800">{service.name}</p>
                    <p className="text-xs text-gray-600 line-clamp-1">{service.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Essential Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find important services near Travessa da Trindade, including hospitals, pharmacies, embassies, and police stations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="animate-fade-in"
            >
              All Services
            </Button>
            <Button
              variant={selectedCategory === "healthcare" ? "default" : "outline"}
              onClick={() => setSelectedCategory("healthcare")}
              className="animate-fade-in"
            >
              Healthcare
            </Button>
            <Button
              variant={selectedCategory === "pharmacies" ? "default" : "outline"}
              onClick={() => setSelectedCategory("pharmacies")}
              className="animate-fade-in"
            >
              Pharmacies
            </Button>
            <Button
              variant={selectedCategory === "embassies" ? "default" : "outline"}
              onClick={() => setSelectedCategory("embassies")}
              className="animate-fade-in"
            >
              Embassies
            </Button>
            <Button
              variant={selectedCategory === "police" ? "default" : "outline"}
              onClick={() => setSelectedCategory("police")}
              className="animate-fade-in"
            >
              Police
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up">
                <div className="relative h-48">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {service.type}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {service.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="line-clamp-1">{service.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{service.hours}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => handlePhoneClick(service.contact, service.name)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      size="lg"
                    >
                      <PhoneCall className="h-5 w-5 mr-2" />
                      <span className="font-medium">{service.contact.split('(')[0].trim()}</span>
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      {service.contact.includes('(') ? service.contact.split('(')[1].replace(')', '') : ''}
                    </p>
                    <Button
                      onClick={() => handleGetDirections(service.address)}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      size="lg"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      Get Directions
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
        className="fixed bottom-24 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contact via WhatsApp"
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
